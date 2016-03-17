$import("rpc.js");
$import("html/form.js");
var banquestId;
var livedate;
var leavedate;
function pageload()
{
	var args=util.getURLArgs();
	banquestId=args.banquestId;
	livedate=args.livedate;
	leavedate=args.leavedate;
	
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
	if(result.banquestinfo.banImgurl==null)
		result.banquestinfo.banImgurl="img/hotel-3.jpg";
	if(result.banquestinfo.banPrivilige==null)
		result.banquestinfo.banPrivilige="暂无优惠信息";
	if(result.banquestinfo.banDimension==null)
		result.banquestinfo.banDimension="暂无特色服务";
	if(result.banquestinfo.banCombo==null)
		result.banquestinfo.banCombo="暂无可选套餐";
	if(result.banquestinfo.banType==null)
		result.banquestinfo.banType="暂无类型信息";
	$$('type2').innerHTML=result.banquestinfo.banName;
	
	$("#roomdetail").append('<div class="row-fluid"  style="float:left;">'
			 +'<div class="block-header">'
			 +'<h3 style="margin-left:30px">'+result.banquestinfo.banName+'</h3>'
			 +'</div>'
			 +'<div class="row">'
			 +'<div class="span7" style="padding-left:30px;padding-bottom:30px;">'
			 
		     +'<ul class="bxslider-office" style="list-style-type:none">'			 
			 +'<li class="img-position"><img src="'+result.banquestinfo.banImgurl+'" width="100px"></li>'
			 +'</ul>'
		
			 +'</div>'
			 +'<div class="span5" style="padding-left:60px;padding-top:10px;">'
			 +'<div>'
			 +'<p class="titlename"><span class="titlefont">宴会厅/会议室名称：</span>'+result.banquestinfo.banName+'</p>'
			 +'<p class="titlename"><span class="titlefont">所在酒店名称：</span>'+result.hotelname+'</p>'
			 +'<p class="titlename"><span class="titlefont">宴会厅/会议室位置：</span>'+result.banquestinfo.banLocation+'</p>'
			 +'<p class="titlename"><span class="titlefont">宴会厅/会议室类型：</span>'+result.banquestinfo.banType+'</p>'
			 +'<p class="titlename"><span class="titlefont">宴会厅/会议室容量：</span>'+result.banquestinfo.banContain+'人</p>'
			 +'<p class="titlename"><span class="titlefont">宴会厅/会议室大小：</span>'+result.banquestinfo.banSize+'平米</p>'
			 +'<p class="titlename"><span class="titlefont">宴会厅/会议室套餐：</span>'+result.banquestinfo.banCombo+'</p>'
			 +'<p class="titlename"><span class="titlefont">宴会厅/会议室优惠：</span>'+result.banquestinfo.banPrivilige+'</p>'
			 +'<p class="titlename"><span class="titlefont">宴会厅/会议室特色介绍：</span>'+result.banquestinfo.banDimension+'</p>'
			 +'</div>'
			 +'</div>'
			 +'</div>'
			 +'<div class="room-detail row-fluid" style="background-color:#fff;" >'
			 +'</div>'
			 +'</div>');	
	$("#bookbanquest").append('<a href="bookbanquet.html?hotelId='+result.banquestinfo.hotelId+'&banquestId='+banquestId+'&livedate='+livedate+'&leavedate='+leavedate+'" class="btn btn-primary btn-large"'
			+'style="margin-left:470px;width:150px">预 定</a>');
		
	}
	var operation =new Operation("前台展示.酒店信息.宴会会议厅详细信息");
	operation.banquestId=banquestId;
	operation.execute(callback);
}