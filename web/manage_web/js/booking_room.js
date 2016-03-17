$import("rpc.js");
$import("html/form.js");

var sourcePage;
var comAccountBookRoomId;
var comAccountName;
var comAccountId;
var comAccountBookRoom;
var roomHotelName;

function pageLoad()
{
	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	comAccountBookRoomId = args.comAccountBookRoomId;
	comAccountName = args.comAccountName;
	comAccountId = args.comAccountId;
	roomHotelName = args.hotelname;
	
	$("#roomcompanyname").val(comAccountName);
	//$("#roomcompanyname").attr("disabled","disabled");
	//$("#roomHotelName").attr("disabled","disabled");


	if(sourcePage == "add" )
	{				
		$("#title").text("添加公司房间订单");
	}
	if(sourcePage == "edit" && comAccountBookRoomId != null)
	{
		$("#title").text("修改公司房间订单");
		fillBookingRoom();
	}
}

function checkBookRoomForm(bookRoomForm)
{
    $("form :input").trigger("blur");
    $("form :input").trigger("change");
    if ($(".form-group").hasClass("has-error")) {
        return false;
    }

    return true;
}

function encodeBookRoomForm(bookRoomForm)
{
	if(comAccountBookRoom == null) comAccountBookRoom={};
	var parsers = 
	{
		"roomArrive": ruite.parse.date,
		"roomDepart": ruite.parse.date,


	};
	comAccountBookRoom = ruite.form.encode(bookRoomForm, parsers);

}

function onSubmit()
{
	var roomForm = $$('room-form');

	if (!checkBookRoomForm())return;

	encodeBookRoomForm(roomForm);
	
	var callback1 = function(result)
	{
		//util.debug(result,9);
	if(result.flag==0){
		
		alert("对不起，您所预定的房间已经被预定");
		
	}else{
		
		alert("恭喜您，添加房间预定操作成功！");
		
	}
		
		window.location ="#";
	};
	
	var callback2 = function()
	{
		alert("恭喜您，更新房间预订操作成功！");
		window.location ="#";
	};
	

	var operation;
	
	if($("#title").text() == "添加公司房间订单")
	{
	
	operation = new Operation("酒店.销售管理.客户信息.添加房间预订订单");
	operation.comAccountBookRoom = comAccountBookRoom;
	operation.comAccountId = comAccountId;
	operation.execute(callback1);
	}
	if($("#title").text() == "修改公司房间订单")
	{
		operation = new Operation("酒店.销售管理.客户信息.更新房间预订订单");
		operation.comAccountBookRoom = comAccountBookRoom;
		operation.comAccountBookRoomId = comAccountBookRoomId;
		operation.execute(callback2);
	}


}

function fillBookRoomFormat(comAccountBookRoom, bookRoomform)
{
	var formatters = 
	{
		"roomArrive": ruite.format.date,
		"roomDepart": ruite.format.date,
		
	};
	ruite.form.decode(comAccountBookRoom, bookRoomform, formatters);
}

function fillBookingRoom()
{
	var callback = function(result)
	{	
		
		 fillBookRoomFormat(result.comAccountBookRoom, $$("room-form"));
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看预订房间订单");
	operation.comAccountBookRoomId = comAccountBookRoomId;
	operation.execute(callback);
}