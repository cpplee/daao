$import("rpc.js");
$import("html/form.js");
var memberId;// 会员ID
var hotelId; // 酒店ID
var resaurantbarsid;//饭店ID
var starttime;
var endtime;
var memberBookingStore;
var memberBookingRestaurant;

function pageLoad()// 以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	memberId = args.memberId;
	hotelId = args.hotelId;
	resaurantbarsid=args.resaurantbarsid;
	starttime=args.starttime;
	endtime=args.endtime;
	$('#eatDate').val(starttime);
	$('#eatTime').val(endtime);
	
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
	fillsalerAccount();

}

// 取出会员已有信息
function fillsalerAccount() {
	var callback = function(result) {
		fillBookRestaurant(result, $$("bookrestaurant"));
	}
	var operation = new Operation("前台展示.酒店信息.显示会员信息_餐饮");
	operation.resaurantbarsid = resaurantbarsid;
	operation.hotelId = hotelId;
	operation.execute(callback);
}

function fillBookRestaurant(memberInfo, bookrestaurant) {
	var formatters = {

	};
	ruite.form.decode(memberInfo, bookrestaurant, formatters);
}

function encodeBookRestaurantForm(bookrestaurant) {

	if (memberBookingRestaurant == null)
		memberBookingRestaurant = {};

	var parsers = {
		"eatTime" : ruite.parse.date,
		"eatDate" : ruite.parse.date
	};

	memberBookingRestaurant = ruite.form.encode(bookrestaurant, parsers);

}

function checkBookRestaurantForm(bookrestaurant) {
	$("form :input").trigger("blur");
	$("form :input").trigger("change");
	if ($(".form-group").hasClass("has-error")) {
		return false;
	}

	return true;
}

function onSubmit() {
	var bookrestaurant = $$('bookrestaurant');
	if (!checkBookRestaurantForm(bookrestaurant))
		return;

	encodeBookRestaurantForm(bookrestaurant);
	var callback = function(result) {
		alert(result.message);

	}
	var operation = new Operation("前台展示.酒店信息.添加餐饮店预定信息");
	operation.hotelId = hotelId;
	operation.resaurantbarsid=resaurantbarsid;
	operation.memberBookingRestaurant = memberBookingRestaurant;
	operation.execute(callback);

	

}
