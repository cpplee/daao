$import("rpc.js");
$import("html/form.js");
var salerId;
var salerAccount;
var sourcePage;

function pageLoad()// 以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	salerId = args.salerId;
	sourcePage = args.sourcePage;
	if (sourcePage == null) {
		$$('title').innerHTML = "查看销售人员信息";
	} 
	else if (sourcePage == "view" && salerId != null) {
		$$('title').innerHTML = "查看销售人员信息";
		$$('account_id').style.display="none";
		$$('distribution').style.display = "none";

		ruite.form.readonly($$("salerInfo-form"));
		fillsalerAccount();

	} 
	else if (sourcePage == "edit" && salerId != null) {
		$$('title').innerHTML = "销售人员分配";
		$$('view').style.display = "none";
		$$('reset').style.display="none";
		fillsalerAccount();

	} 
	else if (sourcePage == "add") {
		$$('title').innerHTML = "新增销售人员信息";
		$$('reset').style.display="none";
		$$('view').style.display = "none";

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
		fillSalerFormat(result.salerAccount, $$("salerInfo-form"));

	}
	var operation = new Operation("酒店.高级管理.销售人员管理.查看销售人员信息");
	operation.salerId = salerId;
	operation.execute(callback);
}

function fillSalerFormat(salerAccount, salerform) {

	var formatters = {
		"birth" : ruite.format.date,
		"startTime" : ruite.format.date

	};
	ruite.form.decode(salerAccount, salerform, formatters);
}

function encodeSalerForm(salerForm) {

	if (salerAccount == null)
		salerAccount = {};

	var parsers = {
		"birth" : ruite.parse.date,
		"startTime" : ruite.parse.date
	};

	salerAccount = ruite.form.encode(salerForm, parsers);

}

function checksalerForm(salerForm) {
	$("form :input").trigger("blur");
	$("form :input").trigger("change");
	if ($(".form-group").hasClass("has-error")) {
		return false;
	}

	return true;
}

function onSubmit() {

	var salerForm = $$('salerInfo-form');

	if (!checksalerForm(salerForm))
		return;

	encodeSalerForm(salerForm);
	
	var operation;
	// 销售人员分配
	if ($$('title').innerHTML == "销售人员分配") {

		var callbackEdit = function() {

			alert("恭喜您，更改销售人员信息操作成功！");
			window.location = "list_saler.html";

		};
		operation = new Operation("酒店.高级管理.销售人员管理.分配销售人员");
		operation.salerId = salerId;
		operation.salerAccount = salerAccount;
		operation.execute(callbackEdit);
	}

	// 新增销售人员

	if ($$('title').innerHTML == "新增销售人员信息") {
        
		var callbackAdd = function() {

			alert("恭喜您，更改销售人员信息操作成功！");
			window.location = "list_saler.html";

		};
		operation = new Operation("酒店.高级管理.销售人员管理.新增销售人员信息");
		operation.salerAccount = salerAccount;
		operation.execute(callbackAdd);
	}

}

function reset() {

	ruite.form.edit($$("salerInfo-form"));

}

/* 返回上一页 */
function goback() {
	history.go(-1);
}