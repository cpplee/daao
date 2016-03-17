$(function(){
	login.init();
	regist.submit();
	login.submit();
});

var regist = regist || {};
var login = login || {};

// 注册提交
regist.submit = function(){
	// 点击注册
	$('#btn-regist').click(function(){
		regist._proc();
	});
	
	// 按回车
	$('#regist-form').bind('keyup', function(event) {   
		if (event.keyCode == 13) {
			regist._proc();
		}  
	}); 
}

// 注册
regist._proc = function() {
	var params = {};
	params.email  = $('.reg-email').val();
	params.pwd    = $('.reg-pwd').val();
	params.repwd  = $('.reg-repwd').val();
	params.mobile = $('.reg-mobile').val();
	params.qq     = $('.reg-qq').val();
	params.code   = $('.reg-code').val();
//	params.invite_code = $('.reg-invite').val();
	
	if (!params.email) {
		regist.showError('请输入用户名');
		$('.reg-email').focus();
		return false;
	}
	if (!/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test(params.email)) {
		regist.showError('用户名格式错误，请输入邮箱');
		$('.reg-email').focus();
		return false;
	}
	if (!params.pwd) {
		regist.showError('请输入密码');
		$('.reg-pwd').focus();
		return false;
	}
	if (!params.repwd) {
		regist.showError('请输入重复密码');
		$('.reg-repwd').focus();
		return false;
	}
	if (params.pwd != params.repwd) {
		regist.showError('两次输入的密码不一致');
		$('.reg-repwd').focus();
		return false;
	}
	if (!params.mobile) {
		regist.showError('请输入手机号');
		$('.reg-mobile').focus();
		return false;
	}
//	if (!params.invite_code) {
//		regist.showError('请输入邀请码');
//		$('.reg-invite').focus();
//		return false;
//	}
	if (!params.code) {
		regist.showError('请输入验证码');
		$('.reg-code').focus();
		return false;
	}
	if(!$('#agree').is(":checked")){regist.showError('坚持不同意使用协议就无法使用读心系统');return false;}
	regist.hideError();
	
	// 提交数据
	$.ajax({
		url : '/login/procRegist',
		type: 'post',
		dataType: 'json',
		data: params,
		async: false,
		success: function(json) {
			if (json.status == 1) {
				// 清空表单
				$('#regist-form').get(0).reset();
				login.init();
				// 切换登录界面
				switching('.register','.login');
			} else {
				regist.showError(json.info);
			}
		}
	});
}

regist.showError = function(msg){
	$('#regist-form .prompt').show();
	$('#regist-form .prompt-error').html(msg);
}

regist.hideError = function() {
	$('#regist-form .prompt').hide();
	$('#regist-form .prompt-error').html('');
}

//登陆提交
login.submit = function(){
	// 点击注册
	$('#btn-login').click(function(){
		login._proc();
	});
	
	// 按回车
	$('#login-form').bind('keyup', function(event) {   
		if (event.keyCode == 13) {
			login._proc();
		}  
	}); 
}

//登陆
login._proc = function() {
	var params = {};
	params.email  = $('.login-email').val();
	params.pwd    = $('.login-pwd').val();
	params.code   = $('.login-code').val();
	params.code_id = 'login';
	
	if (!params.email) {
		login.showError('请输入用户名');
		$('.login-email').focus();
		return false;
	}
	if (!params.pwd) {
		login.showError('请输入密码');
		$('.login-pwd').focus();
		return false;
	}
	if (!params.code) {
		login.showError('请输入验证码');
		$('.login-code').focus();
		return false;
	}
	
	login.hideError();
	
	// 提交数据
	$.ajax({
		url : '/login/procLogin',
		type: 'post',
		dataType: 'json',
		data: params,
		async: false,
		success: function(json) {
			if (json.status == 1) {
				// 清空表单
				location.href='/index';
			} else {
				login.showError(json.info);
			}
		}
	});
}

login.showError = function(msg){
	$('#login-form .prompt').show();
	$('#login-form .prompt-error').html(msg);
}

login.hideError = function() {
	$('#login-form .prompt').hide();
	$('#login-form .prompt-error').html('');
}

//防止后退到该页面时，输入框内有数据，但仍显示提示的问题。
login.init = function(){
	$('.inptText').each(function(index, value){
		if ($(this).val() == '') {
			$(this).prev('.promptInpt').children('.promptTxt').show();
		} else {
			$(this).prev('.promptInpt').children('.promptTxt').hide();
		}
	});
}