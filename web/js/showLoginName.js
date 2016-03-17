$import("rpc.js");
$import("html/form.js");
$(
		
		
	function showAccountName(){

	// 校验验证码
	
	var cookieName = "loginname";
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
		//alert(cookieValue+"测试");
	}
	if(cookieValue!=null)
		{
		//$('#login_register').hide();
		//document.getElementById('loginname').value=cookieValue;
		//$$('username').innerHTML=cookieValue;
		//$$('showname').style.display = "block";
		
		//$('#showname').show();
		//$('#username').val(cookieValue);
		//$$('username').innerHTML="请输入验证码！";
		}
	
		
});