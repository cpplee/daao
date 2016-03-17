var address = null;
function pageLoad()
{
   var date = new Date;
	$("#service-date").val(dateToStr1(date));
	$("#leave-date").val(dateToStr2(date));
	
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
	window.location.href = "store-list.html?destination="+$("#homecity_name").val()+"&livedate="+$("#service-date").val()+"&leavedate="+$("#leave-date").val();
	}
	else
	{
		alert("请选择您要选择的宴会地点");
	}

	

}

function Booklist()
{
	window.location.href="book_list.html";
}

function Eventlist()
{
	window.location.href="event-list.html";
}
