$import("rpc.js");
$import("html/form.js");
var member;
$(function () {
	$("#edit-person1,#edit-person2,#edit-person3,#edit-person4").click(function () {
        $("#edit-person").show();
        $("#show-person").hide();
    });
    $("#submit-person").click(function () {
        $("#edit-person").hide();
        $("#show-person").show();
    });

    $("#customer").click(function(){
        $("#detail-person").hide();
        $("#show-person").show();
    });
    $("#backToTop").click(function(){
        $("#detail-person").hide();
        $("#show-person").show();
    });

    $("#addAgreeToSys").click(function(){
        $("#showAgreelist").hide();
       $("#addAgree").show();
    });

    $("#agreelist").click(function(){
        $("#showAgreelist").show();
        $("#addAgree").hide();
    });
    $("#detail-person-button1,#detail-person-button2,#detail-person-button3").click(function () {
        $("#detail-person").show();
        $("#show-person").hide();
    });
    $("#check-all1").click(function () {
        if ($("#check-all1").prop("checked") == true) {
            $("input[name='cus_name']").prop("checked", "true");
        }
        else {
            $("input[name='cus_name']").removeAttr("checked");
        }

    });
    $("#check-all2").click(function () {
        if ($("#check-all2").prop("checked") == true) {
            $("input[name='cus_name2']").prop("checked", "true");
        }
        else {
            $("input[name='cus_name2']").removeAttr("checked");
        }
    });
    $("#check-all3").click(function () {
        if ($("#check-all3").prop("checked") == true) {
            $("input[name='cus_name3']").prop("checked", "true");
        }
        else {
            $("input[name='cus_name3']").removeAttr("checked");
        }
    });
    
});

$(function(){
	
	
//	   
//	if($.cookie("loginname")== 'null'){
//		alert("对不起，请登录后进行浏览");
//		   window.location.href="login.html"; 
//	}
	
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
		
		
	  if($.cookie("loginType")!='团客')
		  {
		    $('#customerli').hide();
		  
		  }		
	getMemberInfo();
	
	
});

function getMemberInfo()
{

	var callback = function(result)
	{
		//util.debug(result,9);
       setBasicInfo(result);
	};

	var operation = new Operation("前台信息.查询基本信息");
	operation.execute(callback);
}

function setBasicInfo(result){
	               
	 $('#name').val(result.member.name);
	if(result.member.dob===null)
		{
	
		}else{
			
			$('#dob').val(dateToStr1(result.member.dob));
			
		}
	 
	 
	 $('#wechat').val(result.member.wechat);
	 $('#phone').val(result.member.phone);
	 $('#email').val(result.member.email);
	 $('#qq').val(result.member.qq);
	 $('#companyName').val(result.member.companyName);
	 $('#companyJob').val(result.member.companyJob);
	 $('#hotelName').val(result.member.hotelName);
	 $('#memNum').val(result.member.memNum);
	 $("#memType").find('option[value='+result.member.memType+']').attr("selected",true);
	 $('#pointStatus').val(result.member.pointStatus);
	 if(result.member.sex == true) {
           $('#vipSexRadio1').attr("checked",true);
	 }else{
		 $('#vipSexRadio2').attr("checked",true);
	 };
	 
			
};



function encodeBasicPersionForm(basicPersionInfo)
{	
	if(member == null) member={};
	var parsers = 
	{
			
     "dob": ruite.parse.date,
	};
	member = ruite.form.encode(basicPersionInfo, parsers);
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

function onSubmit()
{
	
	var basicpersionForm = $$('basicpersion-form');

	encodeBasicPersionForm(basicpersionForm);

	var callback = function()
	{
	
		alert("更新成功！");
		window.location ="#";
	};
	
   

	var operation;
	operation = new Operation("前台信息.更新基本信息");
	operation.member = member;
	operation.execute(callback);
	
}



function onamccSubmit(){
	
	var basicpersionForm = $$('addcontact-form');

	encodeBasicPersionForm(basicpersionForm);

	var callback = function()
	{
	
		alert("添加联系人成功！");
		window.location ="#";
	};
	
	var operation;
	operation = new Operation("前台信息.添加常用联系人");
	operation.member = member;

	operation.execute(callback);
	
}



