$import("rpc.js");
$import("html/form.js");
var memberId;// 会员ID
var roomType;// 房型
var hotelId;// 酒店ID
var MemberBookingRoom;
var livedate;//入住时间
var leavedate;//离开时间
function pageLoad()// 以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	memberId = args.memberId;
	roomType = args.roomType;
	hotelId = args.hotelId;
	livedate=args.livedate;
	leavedate=args.leavedate;
	$('#arriveTime').val(livedate);
	$('#leaveTime').val(leavedate);
	$$('roomtype').innerHTML = roomType;
	

	
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
		//util.debug(result, 9);
		fillSalerFormat(result, $$("bookroomform"));

	}
	var operation = new Operation("前台展示.酒店信息.显示会员信息_酒店");
	operation.roomType = roomType;
	operation.hotelId = hotelId;
	operation.execute(callback);
}

function fillSalerFormat(salerAccount, bookroomform) {
	var formatters = {
		// "arriveTime" : ruite.format.date,
		"leaveTime" : ruite.format.date

	};
	ruite.form.decode(salerAccount, bookroomform, formatters);
}

function encodeBookRoomForm(bookroomform) {

	if (MemberBookingRoom == null)
		MemberBookingRoom = {};

	var parsers = {
		"arriveTime" : ruite.parse.date,
		"leaveTime" : ruite.parse.date
	};

	MemberBookingRoom = ruite.form.encode(bookroomform, parsers);

}

function checkBookRoomForm(bookroomform) {
	$("form :input").trigger("blur");
	$("form :input").trigger("change");
	if ($(".form-group").hasClass("has-error")) {
		return false;
	}

	return true;
}

function onSubmit() {
	var bookroomform = $$('bookroomform');
	if (!checkBookRoomForm(bookroomform))
		return;

	encodeBookRoomForm(bookroomform);
	var callback = function(result) {
		alert(result.message);

	}
	var operation = new Operation("前台展示.酒店信息.添加房间预定信息");
	operation.hotelId = hotelId;
	operation.roomType = roomType;
	//alert(MemberBookingRoom.arriveTime);
	operation.memberBookingRoom = MemberBookingRoom;
	operation.execute(callback);

	

}
