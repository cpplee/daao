$import("rpc.js");
$import("html/form.js");
var roomId;
var hotelId;
var promotionId;
var livedate;
var leavedate;
function pageload()
{
	var args=util.getURLArgs();
	roomId=args.roomId;
	hotelId=args.hotelId;
	promotionId=args.promotionId;
	livedate=args.livedate;
	leavedate=args.leavedate;
	roomType=args.roomType;
	
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
	$$('type').innerHTML =result.room.type;
	$$('type2').innerHTML=result.room.type;
	$("#roomdetail").append('<div class="room-slider block">'
			+'<ul class="bxslider-office" style="list-style-type:none">'
			+'<li class="img-position"><img src="'+result.room.url+'"></li>'
			+'</ul>'
			 +'</div>'
			 +'<div class="row-fluid"  style="float:left;">'
			 +'<div class="block-header">'
			 +'<h3 style="margin-left:30px">'+result.room.type+'</h3>'
			 +'</div>'
			 +'<div class="row">'
			 +'<div  class="span6" style="padding-left:80px;">'
			 +'<p> 建筑面积：80-110平方米</p>'
			 +'<p> 楼层：2-7层</p>'
			 +'<p>床型：双人床2米，1张或单人床1.2米，1张</p>'
			 +'<p> 可加床：RMB 400/床/间夜 </p>'
			 +'<p>无烟房：该房可无烟处理</p>'
			 +'<p> 最多入住人数：5人</p>'
			 +'<div class="block-special-rooms">'
			 +'<div class="row-fluid">'
			 +'<div class="list-condition">'
			 +'<ul class="room-services">'
			 +'<li><i class="icon-star-empty"></i>  沙滩</li>'
			 +'<li><i class="icon-leaf"></i>  美景</li>'
			 +'<li><i class="icon-flag"></i>  小孩</li>'
			 +'<li><i class="icon-desktop"></i>  50" LCD TV</li>'
			 +'<li><i class="icon-food"></i>  免费晚餐</li>'
			 +'</ul>'
			 +'</div>'
			 +'<div class="list-condition">'
			 +'<ul class="room-services">'
			 +'<li><i class="icon-coffee"></i>  咖啡</li>'
			 +'<li><i class="icon-signal"></i>  WiFi</li>'
			 +'<li><i class="icon-phone"></i>  直拨电话</li>'
			 +'<li><i class="icon-key "></i>  保险库</li>'
			 +'<li><i class="icon-stethoscope"></i>  诊所</li>'
			 +'</ul>'
			 +'</div>'
			 +'<div class="list-condition">'
			 +'<ul class="room-services">'
			 +' <li><i class="icon-github-alt"></i>  宠物</li>'
			 +'<li><i class="icon-gift"></i>  礼品店</li>'
			 +'<li><i class="icon-cut"></i>  发廊</li>'
			 +'</ul>'
			 +'</div>'
			 +'</div>'
			 +'</div>'
			 +'</div>'
			 +'<div class="span6">'
			 +'<div>'
			 +'<p>1张2*2米大床+1张1.2米单人+1张沙发床</p>'
			 +'<p>便利设施：中央空调、书桌、房内保险箱</p>'
			 +'<p>媒体/科技：国内长途电话、国际长途电话</p>'
			 +'<p>食品和饮品：电热水壶</p>'
			 +'<p>浴室：24小时热水、吹风机</p>'
			 +'</div>'
			 +'</div>'
			 +'</div>'
			 +'<div class="room-detail row-fluid" style="background-color:#fff;" >'
			 +'</div>'
			 +'</div>');	
		$("#book").append('<a href="bookroom.html?hotelId='+hotelId+'&promotionId='+promotionId+'&roomType='+roomType+'&livedate='+livedate+'&leavedate='+leavedate+'" class="btn btn-primary btn-large" '
                +'style="margin-left:470px;width:150px">预 定</a>');
	}
	var operation =new Operation("前台展示.酒店信息.房间详细信息");
	operation.roomId=roomId;
	operation.execute(callback);
}