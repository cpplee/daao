var cusComAccountId;
var address;
function pageLoad()
{
	var args = util.getURLArgs();
	cusComAccountId = args.cusComAccountId;
	var date = new Date;
	$("#live-date").val(dateToStr1(date));
	$("#leave-date").val(dateToStr1(date));	

	
	 
	//控制头部
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
   
   
    }




}

function onBook()
{
	address = $("#homecity_name").val();
	if(address)
	{
	$("#search-btn").text("搜索中...");
	window.location.href = "hotel-list.html?destination="+$("#homecity_name").val()+"&livedate="+$("#live-date").val()+"&leavedate="+$("#leave-date").val();
	}
	else
	{
		alert("请选择您要入住的酒店地点");
	}

	
	//发送询价请求的代码先注释
	/*
	var destination = $$("destination").value;
	var roomNum = $$("roomNum").value;
	var adultNum = $$("adultNum").value;
	var kidNum = $$("kidNum").value;
	var cityName = $$("cityName").value;

	//hex_md5():

	var callback = function(result)
	{

		alert("OK");
	}

	var operation = new Operation("客户.公司客户.发送询价");
	operation.cusComAccountId = util.trim(cusComAccountId);
	operation.destination = util.trim(destination);
	operation.roomNum = util.trim(roomNum);
	operation.adultNum = util.trim(adultNum);
	operation.cityName = util.trim(cityName);
	operation.kidNum = util.trim(kidNum);
	operation.execute(callback);
}*/
}

function Booklist()
{
	window.location.href="book_list.html";
}

function Eventlist()
{
	window.location.href="event-list.html";
}

