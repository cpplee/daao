$import("rpc.js");
$import("html/form.js");
var memberId;// 会员ID
var hotelId; // 酒店ID
var storeId;// 专门店ID


function pageLoad()// 以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	memberId = args.memberId;
	hotelId = args.hotelId;
	storeId = args.storeId;
	if($.cookie("loginname")!==undefined){
		
		$('#contralLoginRegister').append('<span style="color:green;">'+$.cookie("loginname")+'</span>'
		           +'<a href="login.html" id="setExit"><span>退出</span></a>');
		$('#setExit').click(function(){
			$.cookie('loginname',null,{ expires: -1 });
			window.location.href="index.html";
		});
 
    	
    }else{
   $('#contralLoginRegister').append('<a href="login.html"><span id="setLoginName">登陆</span>'
           +'</a><a href="register.html"><span id="setRegister">注册</span></a>');
   alert("对不起，请登录后进行浏览");
   window.location.href="login.html";
   
    }
	fillBookSpecialtyInfo();

}

// 取出会员已有信息
function fillBookSpecialtyInfo() {
	var callback = function(result) {
		// util.debug(result, 9);
		fillBookSpecialty(result, $$("bookspecialty"));
	}
	var operation = new Operation("前台展示.酒店信息.显示会员信息_专门店");
	operation.execute(callback);
}

function fillBookSpecialty(memberInfo, bookspecialty) {
	var formatters = {
		// "arriveTime" : ruite.format.date,
		"leaveTime" : ruite.format.date

	};
	ruite.form.decode(memberInfo, bookspecialty, formatters);
}

function checkBookSpecialtyForm(bookspecialty) {
	$("form :input").trigger("blur");
	$("form :input").trigger("change");
	if ($(".form-group").hasClass("has-error")) {
		return false;
	}

	return true;
}

function onSubmit() {
	var bookspecialty = $$('bookspecialty');
	if (!checkBookSpecialtyForm(bookspecialty))
		return;

	memberBookingStore = ruite.form.encode(bookspecialty);
	var callback = function(result) {
		alert(result.message);

	}
	var operation = new Operation("前台展示.酒店信息.添加专门店预定信息");
	operation.hotelId = hotelId;
	operation.storeId = storeId;
	operation.memberBookingStore = memberBookingStore;
	operation.execute(callback);

}
