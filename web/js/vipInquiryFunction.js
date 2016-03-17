$import("rpc.js");

function pageLoad()
{
	
	var date = new Date;
	$("#date").val(dateToStr1(date));
	$("#province").val('天津');
	$("#city").val('天津');
	$("#hotelCounty").val('武侯区');
	$("#price").val('10000');
	
	$("#adultNum").val('10');
	$("#roomNum").val('1');
	
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

function OnSubmit()
{
	if( ($("#province").val()=='') || ($("#city").val()=='') || ($("#hotelCounty").val()=='') || ($("#price").val()=='') || ($("#adultNum").val()=='') ||($("#roomNum").val()=='') 
			||($("#province").val()==null) || ($("#city").val()==null) || ($("#hotelCounty").val()==null) || ($("#price").val()==null) || ($("#adultNum").val()==null) ||($("#roomNum").val()==null)){
		 alert('请输入查询条件！');
		return;
		
	}

		

	var callback = function(result)
	{
		
         for(var i=0;i<result.data.length;i++){
			
			$("#page").after(' <tr><td>编号</td><td>酒店名称</td><td>联系电话</td><td>传真</td><td>Email</td></tr>'+
					'<tr style="background:rgb(232,232,232)"><td>'+result.data[i].id+'</td><td>'+result.data[i].cname
					+'</td><td>'+result.data[i].telephone+'</td><td>'+result.data[i].fax+'</td><td>'+result.data[i].email+'</td><td>'+result.data[i].hotelPrice+'</td></tr>');	
			
		}
	
	}
	

	

	var operation = new Operation("客户.公司客户.发送询价");

	operation.date=$("#date").val();
	operation.province=$("#province").val(); 
	operation.city=$("#city").val(); 
	operation.hotelCounty=$("#hotelCounty").val(); 
	
	operation.price=$("#price").val();

	operation.adultNum=$("#adultNum").val();
	operation.roomNum= $("#roomNum").val();
	operation.way=$("#way").val();
	operation.execute(callback);
	
	$("#submit").attr("disabled", true);
}

function reSet(){
	
	$("#page").nextAll().remove();
	$("#province").val('');
	$("#city").val('');
	$("#hotelCounty").val('');
	$("#price").val('');
	$("#adultNum").val('');
	$("#roomNum").val('');
	$("#submit").attr("disabled", false);
	
}

