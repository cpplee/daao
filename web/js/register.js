$import("rpc.js");
$import("html/form.js");
var member;// 注册信息
var password;// 密码

//检验表单
function checkreg() {
	// 电话
	var phone = form1.phone.value;
	var phoneNum = /^0?1[3|4|5|8][0-9]\d{8}$/;

	// 邮箱
	var myRegex = /@.*\.[a-z]{2,6}/;
	var email = form1.email.value;
	email = email.replace(/^ | $/g, "");
	email = email.replace(/^\.*|\.*$/g, "");
	email = email.toLowerCase();

	// 校验验证码
	var cookieName = "vcode";
	var cookieValue = null;// 返回cookie的value值
	if (document.cookie && document.cookie != '') {
		var cookies = document.cookie.split(';');// 将获得的所有cookie切割成数组
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];// 得到某下标的cookies数组
			if (cookie.substring(0, cookieName.length + 2).trim() == cookieName
					.trim()
					+ "=") {// 如果存在该cookie的话就将cookie的值拿出来
				cookieValue = cookie.substring(cookieName.length + 2,
						cookie.length);
				break
			}
		}
	}

	if (document.form1.name.value == "") {
		$$('errorlog').innerHTML="请填写用户名!";
		//alert("请填写用户名!");
		form1.name.focus();
		return false;
	} else if (document.form1.name.value.length < 4
			|| document.form1.name.value.length > 15) {
		$$('errorlog').innerHTML="用户名长度限制在4-15位!";
		//alert("用户名长度限制在4-15位!");
		form1.name.focus();
		return false;
	} else if (document.form1.password.value == "") {
		$$('errorlog').innerHTML="请输入密码!";
		//alert("请输入密码!");
		form1.password.focus();
		return false;
	} else if (document.form1.password.value.length < 6
			|| document.form1.password.value.length > 15) {
		$$('errorlog').innerHTML="密码长度限制在6-15位!";
		//alert("密码长度限制在6-15位!");
		form1.password.focus();
		return false;
	} else if (document.form1.password.value != document.form1.Pwdagain.value) {
		$$('errorlog').innerHTML="两次输入的密码不同!";
		//alert("两次输入的密码不同!")
		form1.Pwdagain.focus();
		return false;
	} else if (document.form1.phone.value == "") {
		$$('errorlog').innerHTML="请输入您的手机号!";
		//alert("请输入您的手机号!");
		form1.phone.focus();
		return false;
	}

	else if (!phoneNum.test(phone)) {
		$$('errorlog').innerHTML="请输入有效的手机号!";
		//alert("请输入有效的手机号!");
		form1.phone.focus();
		return false;
	}

	else if (document.form1.email.value == "") {
		$$('errorlog').innerHTML="请输入您的Email地址!";
		//alert("请输入您的Email地址!");
		form1.email.focus();
		return false;
	}

	// 验证电子邮件的有效性
	else if (email == "" || !myRegex.test(email)) {
		$$('errorlog').innerHTML="请输入有效的E-MAIL!";
		//alert("请输入有效的E-MAIL!");
		form1.email.focus();
		return false;
	}

	else if (document.form1.vcode.value == "") {
		$$('errorlog').innerHTML="请输入验证码!";
		//alert("请输入验证码!");
		form1.vcode.focus();
		return false;
	}

	else if (document.form1.vcode.value.toLowerCase() != cookieValue.toLowerCase()) {
		// alert(cookieValue);
		$$('errorlog').innerHTML="验证码输入错误，请从新输入!";
		//alert("验证码输入错误，请从新输入!");
		changeImage();
		form1.vcode.focus();
		return false;
	} else {

		onSubmit();
	}
}

function Isval(val, name) {
	if (val.value != '' && (isNaN(val.value) || val.value == 0)) {
		alert(name + "应填数字！");
		val.value = "";
		val.focus();
	}
}

function changeImage() {
	document.getElementById("vcode_img").setAttribute("src",
			"ImageServlet.jpeg?codeNum=" + Math.random())
}

function onSubmit() {

	
	var registerform = $$('registerform');
	password = $('#password').val();
	member = ruite.form.encode(registerform);
	var callback = function(result) {
		alert(result.message);
	}
	var operation = new Operation("公用.前台用户注册");
	operation.member = member;
	operation.password = password;
	operation.execute(callback);

}
