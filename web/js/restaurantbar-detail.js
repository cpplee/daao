$import("rpc.js");
$import("html/form.js");
var resaurantbarsid;
var starttime;
var endtime;

function pageload()
{
	var args=util.getURLArgs();
	resaurantbarsid=args.resaurantbarsid;
	starttime=args.starttime;
	endtime=args.endtime;
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

function initPage()
{
	
	var callback=function (result){
	if(result.resaurantbarinfo.rbaImgurl==null)
		result.resaurantbarinfo.rbaImgurl="img/hotel-3.jpg";
	if(result.resaurantbarinfo.rbaName==null)
	result.resaurantbarinfo.rbaName="无";
	if(result.resaurantbarinfo.rbaSpecialService==null)
		result.resaurantbarinfo.rbaSpecialService="暂无特色服务";
	if(result.resaurantbarinfo.rbaPrivilige==null)
		result.resaurantbarinfo.rbaPrivilige="暂无优惠信息";
	$$('type2').innerHTML=result.resaurantbarinfo.rbaName;
	$("#roomdetail").append('<div class="row-fluid"  style="float:left;">'
			 +'<div class="block-header">'
			 +'<h3 style="margin-left:30px">'+result.resaurantbarinfo.rbaName+'</h3>'
			 +'</div>'
			 +'<div class="row" style="padding-bottom:30px;">'
			 +'<div class="span7" style="padding-left:30px;">'
			 +'<div>'
			 +'<ul class="bxslider-office" style="list-style-type:none">'
				+'<li class="img-position"><img src="'+result.resaurantbarinfo.rbaImgurl+'"></li>'
				+'</ul>'
			 
			 +'</div>'
			 +'</div>'
			 +'<div class="span5" style="padding-left:60px;padding-top:10px;">'
			 +'<p class="titlename"><span class="titlefont">餐饮店名称：</span>'+result.resaurantbarinfo.rbaName+'</p>'
			 +'<p class="titlename"><span class="titlefont">酒店名称：</span>'+result.hotelname+'</p>'
			 +'<p class="titlename"><span class="titlefont">省市：</span>'+result.resaurantbarinfo.rbaLocation+'</p>'
			 +'<p class="titlename"><span class="titlefont">包厢数量：</span>'+result.resaurantbarinfo.rbaBox+'间</p>'
			 +'<p class="titlename"><span class="titlefont">包厢容量：</span>'+result.resaurantbarinfo.rbaBoxContain+'人</p>'
			 +'<p class="titlename"><span class="titlefont">包厢价格：</span>'+result.resaurantbarinfo.rbaPrice+'￥(元)</p>'
			 +'<p class="titlename"><span class="titlefont">特色服务：</span>'+result.resaurantbarinfo.rbaSpecialService+'</p>'
			 +'<p class="titlename"><span class="titlefont">优惠比例：</span>'+result.resaurantbarinfo.rbaPrivilige+'</p>'
			 +'</div>'
			 +'</div>'
			 +'<div class="room-detail row-fluid" style="background-color:#fff;" >'
			 +'</div>'
			 +'</div>');	
	$("#bookrestaurant").append('<a href="bookrestaurant.html?resaurantbarsid='+resaurantbarsid+'&hotelId='+result.resaurantbarinfo.hotelId+'&starttime='+starttime+'&endtime='+endtime+'" class="btn btn-primary btn-large"'
			+'style="margin-left:470px;width:150px">预 定</a>');
		
	}
	var operation =new Operation("前台展示.酒店信息.餐饮店详细信息");
	operation.resaurantbarsid=resaurantbarsid;
	operation.execute(callback);
}