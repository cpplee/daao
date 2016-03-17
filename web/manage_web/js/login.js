
function pageLoad()
{
	document.onkeydown = function (event)
	{
		var e = event || window.event || arguments.callee.caller.arguments[0];
		 if(e && e.keyCode==13)
		 { 
			login();                  
	     }
	}
}
function changeImage()
{
	document.getElementById("vcode_img").setAttribute("src", "../ImageServlet.jpeg?codeNum=" + Math.random())
}

function login()
{
	var username = $$("account").value;
	var password = $$("password").value;
	var vcode    = $$("vcode").value;
	//alert(vcode);
	//hex_md5():

	var callback = function(result)
	{
		
		//util.debug(result,9);
		document.cookie="managername="+result.managername;
		
	
		//alert(result.account.roles[0].name);
		document.cookie="rolesname="+result.account.roles[0].name;
		if(result.loginStatus == "true")
			window.location.href = result.url;
		else
			alert("您输入的用户名或者密码不正确，请检查!");
		
		
	}

	var operation = new Operation("公用.登录");
	operation.login = util.trim(username);
	operation.password = util.trim(password);
	operation.vcode = vcode;
	
	operation.execute(callback);
	
}

