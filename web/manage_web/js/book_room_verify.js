/**
 * 
 */
$import("rpc.js");
$import("html/form.js");




var comAccountContactId=null;
var mbr=null;



function pageLoad()//以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	comAccountContactId = args.comAccountContactId;
  //  alert(comAccountContactId);
	fillRoomInfo(comAccountContactId);
}



//填充联系人具体信息
function fillRoomInfo(comAccountContactId)
{ 
	var callback = function(result)
	{	
		//util.debug(result,9);
		fillRoomInfoFormat(result.memberBookingRoom, $$("room-form"));	
		$('#arriveTime').val(dateToStr(result.memberBookingRoom.arriveTime)).attr("disabled",true);
		$('#leaveTime').val(dateToStr(result.memberBookingRoom.arriveTime)).attr("disabled",true);
		
	}
	var operation = new Operation("酒店.酒店管理.填充预定房间人员信息");
	operation.id = comAccountContactId;
	operation.execute(callback);
}

function fillRoomInfoFormat(memberBookingRoom, contactInfoform)
{
	var formatters = 
	{
		"arriveTime": ruite.format.date,
		"leaveTime": ruite.format.date,
	};
	ruite.form.decode(memberBookingRoom, contactInfoform, formatters);
	
}



function onSubmit()
{
	var roomForm = $$('room-form');

	if (!checkAccountForm(roomForm))return;
    // 用来保存所有的属性名称和值
//    var props = "";
//    // 开始遍历
//    for(var p in roomForm){ 
//        // 方法
//        if(typeof(roomForm[p])=="function"){ 
//            //obj[p]();
//        }else{ 
//            // p 为属性名称，obj[p]为对应属性的值
//            props += p + "=" + roomForm[p] + ";  ";
//        } 
//    } 
//    // 最后显示所有的属性
//    alert(props);
	
	encodeRoomForm(roomForm);

	var callback = function(result)
	{
		alert("恭喜您，更新房间预定人员操作成功！");
		window.location ="#";
	};



	var operation;
		operation = new Operation("酒店.酒店管理.更新房间预定人员填充信息");
		operation.id = comAccountContactId;
		operation.memberBookingRoom = mbr;
		operation.execute(callback);
	
	
}

function checkAccountForm(roomForm)
{
    $("form :input").trigger("blur");
    $("form :input").trigger("change");
    if ($(".form-group").hasClass("has-error")) {
    	
        return false;
    }

	return true;
}

function encodeRoomForm(roomForm)
{	
	if(mbr == null) mbr={};
	
	var parsers = {	
			"arriveTime": ruite.format.date,
			"leaveTime": ruite.format.date
		};
	
	mbr = ruite.form.encode(roomForm,parsers);
	
}

function goUrl(){
	
	history.go(-1);
	
}

/**日期转换函数*/
function dateToStr(datetime){ 
	var year = datetime.getFullYear();
	var month = datetime.getMonth()+1;//js中月份是从0开始的
	var date = datetime.getDate(); 
	var hour = datetime.getHours(); 
	var minutes = datetime.getMinutes(); 
	var second = datetime.getSeconds();

	if(month<10){
		month = "0" + month;
	}
	if(date<10){
		date = "0" + date;
	}
	if(hour <10){
		hour = "0" + hour;
	}
	if(minutes <10){
		minutes = "0" + minutes;
	}
	if(second <10){
		second = "0" + second ;
	}

	var time = year+"-"+month+"-"+date; 
	// alert(time);
	return time;
}