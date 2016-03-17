$import("rpc.js");
$import("html/form.js");
var memberId;
var memberAccount;
var sourcePage;

function pageLoad()// 以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	memberId = args.memberId;
	sourcePage = args.sourcePage;
	if (sourcePage == null) {
		$$('title').innerHTML = "查看团队人员信息";
	} 
	else if (sourcePage == "view" && memberId != null) {
		$$('title').innerHTML = "查看团队人员信息";


		ruite.form.readonly($$("hotelmember-form"));
		fillsalerAccount();

	} 
	else if (sourcePage == "edit" && memberId != null) {
		$$('title').innerHTML = "团队人员分配";
		fillsalerAccount();

	} 
	else if (sourcePage == "add") {
		$$('title').innerHTML = "新增团队人员信息";
	} 
	else {
		alert('进入用户信息页面参数错误：请重新操作！');
		window.location = "../index.html";
	}
	// addButton();

}

// 查看时填充公司客户信息
function fillsalerAccount() {

	var callback = function(result) {
		util.debug(result, 9);
		if(result.memberAccount.sex==true)
			{
			  result.memberAccount.sex='男';
			}else{
				
				result.memberAccount.sex='女';
				
			}
		fillSalerFormat(result.memberAccount, $$("hotelmember-form"));

	}
	var operation = new Operation("酒店.酒店管理.查看酒店团队人员信息");
	operation.memberId = memberId;
	operation.execute(callback);
}

function fillSalerFormat(memberAccount, memberform) {

	var formatters = {
		"dob" : ruite.format.date

	};
	ruite.form.decode(memberAccount, memberform, formatters);
}

function encodeSalerForm(memberform) {

	if (memberAccount == null)
		memberAccount = {};

	var parsers = {
		"dob" : ruite.parse.date
	};

	memberAccount = ruite.form.encode(memberform, parsers);

}

function checksalerForm(memberform) {
	$("form :input").trigger("blur");
	$("form :input").trigger("change");
	if ($(".form-group").hasClass("has-error")) {
		return false;
	}

	return true;
}

function onSubmit() {

	var memberForm = $$('hotelmember-form');

	if (!checksalerForm(memberForm))
		return;

	encodeSalerForm(memberForm);
	
	var operation;
	// 销售人员分配
	if ($$('title').innerHTML == "团队人员分配") {
    alert(123);
		var callbackEdit = function(data) {
                util.debug(data,9);
			alert("恭喜您，更改团队人员信息操作成功！");
			window.location = "list_hotel_member.html";

		};
		operation = new Operation("酒店.酒店管理.团队人员分配");
		operation.memberId = memberId;
		if(memberAccount.sex=='男')
			{
			memberAccount.sex=true;
			}else{
				memberAccount.sex=false;
				}
		operation.memberAccount = memberAccount;
		util.debug(memberAccount, 3);
		operation.execute(callbackEdit);
		alert(321);
	}

	// 新增销售人员

//	if ($$('title').innerHTML == "新增团队人员信息") {
//        
//		var callbackAdd = function() {
//
//			alert("恭喜您，更改团队人员信息操作成功！");
//			window.location = "list_hotel_member.html";
//
//		};
//		operation = new Operation("酒店.酒店管理.新增团队人员信息");
//		operation.memberAccount = memberAccount;
//		operation.execute(callbackAdd);
//	}

}

function reset() {

	ruite.form.edit($$("hotelmember-form"));

}

//返回上一页
function goback() {
	history.go(-1);
}
