$import("rpc.js");
$import("html/form.js");
var memberId;// 会员ID
var hotelId; // 酒店ID
var banquestId;//宴会厅ID
var payHotelId;
var payBanquetId;
var livedate;
var leavedate;
var memberBookingBanquet;

function pageLoad()// 以后可能还需要增加新内容
{

	var args = util.getURLArgs();

	memberId = args.memberId;
//	hotelId = args.hotelId;
//	banquestId=args.banquestId;
	livedate=args.livedate;
	leavedate=args.leavedate;
	$('#startDate').val(livedate);
	$('#endDate').val(leavedate);

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
	fillBookBanquetInfo();

}

// 取出会员已有信息
function fillBookBanquetInfo() {
	var callback = function(result) {
		util.debug(result, 9);
		fillBookBanquet(result, $$("bookbanquet"));
	};
	var operation = new Operation("前台展示.酒店信息.显示会员信息_宴会");
	//operation.banquetId = banquestId;
	//operation.hotelId = hotelId;
	operation.execute(callback);
}

function fillBookBanquet(memberInfo, bookbanquet) {
	var formatters = {
		// "arriveTime" : ruite.format.date,
		"leaveTime" : ruite.format.date

	};
	ruite.form.decode(memberInfo, bookbanquet, formatters);
}

function encodeBookBanquetForm(bookbanquet) {

	if (memberBookingBanquet == null)
		memberBookingBanquet = {};

	var parsers = {
		"startDate" : ruite.parse.date,
		"endDate" : ruite.parse.date
	};

	memberBookingBanquet = ruite.form.encode(bookbanquet, parsers);

}

function checkBookBanquetForm(bookbanquet) {
	$("form :input").trigger("blur");
	$("form :input").trigger("change");
	if ($(".form-group").hasClass("has-error")) {
		return false;
	}

	return true;
}

function onSubmit() {
	var argsForpay = util.getURLArgs();
	payHotelId = argsForpay.hotelId;
	payBanquetId=argsForpay.banquestId;
	alert(payBanquetId);
	var bookbanquet = $$('bookbanquet');
	if (!checkBookBanquetForm(bookbanquet))
		return;

	encodeBookBanquetForm(bookbanquet);
	
	var callback = function(result) {
		
		alert(result.message);
	}
	
	var operation = new Operation("前台展示.酒店信息.添加宴会预定信息");
	operation.hotelId = payHotelId;
	operation.banquetId=payBanquetId;

	operation.memberBookingBanquet = memberBookingBanquet;
	operation.execute(callback);

	

}
