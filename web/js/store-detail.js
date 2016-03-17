$import("rpc.js");
$import("html/form.js");
var storeid;

function pageload() {
	var args = util.getURLArgs();
	storeid = args.storeid;
	
	
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
	initPage();
}

function initPage() {

	var callback = function(result) {
		if (result.store.storeImgurl == null)
			result.store.storeImgurl = "img/hotel-3.jpg";
		if (result.store.storeContent == null)
			result.store.storeContent = "暂无专门店介绍";
		$$('type2').innerHTML = result.store.storeName;
		$("#roomdetail")
				.append(
						'<div class="row-fluid"  style="float:left;">'
								+ '<div class="block-header">'
								+ '<h3 style="margin-left:30px">'
								+ result.store.storeName
								+ '</h3>'
								+ '</div>'
								+ '<div class="row">'
								+ '<div class="span7" style="padding-left:30px;padding-bottom:30px;">'

								+ '<ul class="bxslider-office" style="list-style-type:none">'
								+ '<li class="img-position"><img src="'
								+ result.store.storeImgurl
								+ '" width="100px"></li>'
								+ '</ul>'

								+ '</div>'
								+ '<div class="span5" style="padding-left:60px;padding-top:10px;">'

								+ '<p class="titlename"><span class="titlefont">专门店名称：</span>'
								+ result.store.storeName
								+ '</p>'
								+ '<p class="titlename"><span class="titlefont">酒店名称：</span>'
								+ result.hotelname
								+ '</p>'
								+ '<p class="titlename"><span class="titlefont">省市：</span>'
								+ result.store.storeLocation
								+ '</p>'
								+ '<p  class="titlename"><span class="titlefont">专门店内容：</span>'
								+ result.store.storeContent
								+ '</p>'

								+ '</div>'
								+ '</div>'
								+ '<div class="room-detail row-fluid" style="background-color:#fff;" >'
								+ '</div>' + '</div>');
		$("#bookspecialty").append(
				'<a href="bookspecialty-store.html?hotelId='
						+ result.store.hotelId + '&storeId=' + storeid
						+ '" class="btn btn-primary btn-large"'
						+ 'style="margin-left:470px;width:150px">购 买</a>');

	}
	var operation = new Operation("前台展示.酒店信息.土特产详细信息");
	operation.storeid = storeid;
	operation.execute(callback);
}