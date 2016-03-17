function pageLoad()
{
	
	UpdateScriptSession();	
if($.cookie("managername")!==undefined){
		

	
	
	$('#manager').append('<span style="color: #fff;padding-top: 5px;font-size: 13px;" id="manager">当前用户:　'+$.cookie("managername")+'</span>');
    $('#timeSet').append(' <span style="color: #fff;font-size: 13px">当前时间：'+dateToStr1(new Date())+'</span>');
     $('#exitManager').click(function(){
    	 
			$.cookie('managername',null,{ expires: -1 });
		   // window.location.href="login.html";
			window.top.location='login.html';
    	 
     });
    }else{

    	$('#manager').append('<span style="color: #fff;padding-top: 5px;font-size: 13px;" id="manager">当前用户: 管理员</span>');
        $('#timeSet').append(' <span style="color: #fff;font-size: 13px">当前时间：2015-05-11</span>');
    }



   $('#userRemind').click(function(){
	   
	   if($.cookie("rolesname")=="酒店信息设置人"){
		   
		   window.parent.location.href="i_daao_manage.html";
	   }else{
		   
		   window.parent.location.href="salerinfo.html";
	   }
	 
	   
   });
    
   

}





function UpdateScriptSession()
{
	var callback = function(result)
	{
		//util.debug(result.data);	
		
		setTimeout(UpdateScriptSession, 3000);
	}
	var operation = new Operation("系统.控制.更新会话");
	operation.execute(callback);
}

function showmessage(msg)
{
	alert(msg);
}

function dateToStr1(datetime){ 
	var year = datetime.getFullYear();
	var month = datetime.getMonth()+1;//js中月份是从0开始的
	var date = datetime.getDate(); 


	if(month<10){
		month = "0" + month;
	}
	if(date<10){
		date = "0" + date;
	}

	var time = year+"-"+month+"-"+date; 
	//var time = date+"-"+month+"-"+year;
	// alert(time);
	return time;
}