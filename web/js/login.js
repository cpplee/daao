function login()
{
	var username = $$("account").value;
	var password = $$("password").value;
	// hex_md5():

	var callback = function(result)
	{
		
		
		//util.debug(result, 9);
		document.cookie="loginname="+result.loginname;
		//alert(result.loginname);
		document.cookie="loginType="+result.loginType;
		if(result.loginStatus == "true")
			window.location.href = result.url +"?cusComAccountId=" + result.account.id;
		else
			alert("您输入的用户名或者密码不正确，请检查!");
	}

	var operation = new Operation("公用.前台登录");
	operation.login = util.trim(username);
	operation.password = util.trim(password);
	operation.execute(callback);
}

function changeImage() {
	document.getElementById("vcode_img").setAttribute("src",
			"ImageServlet.jpeg?codeNum=" + Math.random())
}

function check(){
	var account=document.loginform.account.value;// 用户名
	
	var password=document.loginform.password.value;// 密码
	// 校验验证码
	var cookieName = "vcode";
	var cookieValue = null;// 返回cookie的value值
	if (document.cookie && document.cookie != '') {
		var cookies = document.cookie.split(';');// 将获得的所有cookie切割成数组
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];// 得到某下标的cookies数组
		//	alert(cookie);
			if (cookie.substring(0, cookieName.length + 2).trim() == cookieName
					.trim()
					+ "=") {// 如果存在该cookie的话就将cookie的值拿出来
				cookieValue = cookie.substring(cookieName.length + 2,
						cookie.length);
				break
			}
		}
	}
	
	
		if(account=="")
		 {
			$$('errorlog').innerHTML="请输入正确的用户名！";
			loginform.account.focus();
			return false;
		 }
		else if(password=="")
		 {
			$$('errorlog').innerHTML="您还没有输入密码！";
			loginform.password.focus();
			return false;
		 }
		else if(document.loginform.vcode.value=="")
		 {
			$$('errorlog').innerHTML="请输入验证码！";
			return false;
		 }
		else if(document.loginform.vcode.value.toLowerCase() != cookieValue.toLowerCase())
		 {
			$$('errorlog').innerHTML="验证码错误！";
			changeImage();
			loginform.vcode.focus();
			return false;
		 }
		else{
			login();
		}
	}