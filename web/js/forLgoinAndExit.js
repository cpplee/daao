/**
 * 
 */
function loginAndExitLoad()
{
	
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


