$import("rpc.js");
$import("html/form.js");
var hotelId; // 酒店id
var livedate;//入住时间
var leavedate;//离开时间
function pageLoad() {

	var args = util.getURLArgs();
	hotelId = args.hotelId;
	livedate=args.livedate;
	leavedate=args.leavedate;
	$('#livedate').val(livedate);
	$('#leavedate').val(leavedate);
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
	
	inithotel();// 初始化酒店信息

}
function inithotel() {
	var callback = function(data) {

		if (data.hotel.hotelIntro == null)
			data.hotel.hotelIntro = "暂无酒店介绍";
		if (data.hotel.imgUrl == null)
			data.hotel.imgUrl = "img/empty.png";
		$("#hotel").append(
				'<div class="row">' + '<div class="span5">' + '<img src="'
						+ data.hotel.imgUrl + '">' + '</div>'
						+ '<div class="span4" >' + '<div class="block-header">'
						+ '<h3>' + data.hotel.cname + '</h3>' + '</div>'
						+ '<p id="hotal-detail">' + data.hotel.hotelIntro
						+ '</p>' + '</div>' + '<div class="span3">'
						+ '<div class="block-header">' + '<h3>促销活动</h3>'
						+ '</div>' + '<div  id="promotion">' + '</div>'
						+ '</div>' + '</div>');
		// 初始化促销信息
		if (data.promotion.length === 0)
			$("#promotion").append("<p>暂无促销信息</p>");
		else {
			//util.debug(data, 9);
			for (var i = 0; i < data.promotion.length; i++) {
				$("#promotion")
						.append(
								'<div class="row-fluid" style="margin-bottom:15px;">'
										+ '<div class="span6">'
										+ '<img src="'
										+ data.promotion[i].propActivityImgUrl
										+ '" width="80px" height="80px" class="circle">'
										+ '</div>'
										+ '<div class="span6">'
										+ '<div><a href="promotion.html?hotelId='
										+ hotelId
										+ '&promotionid='
										+ data.promotion[i].id
										+ '&livedate='+livedate+'&leavedate='+leavedate+'">'
										+ data.promotion[i].propActivityCompany
										+ '</a></div>'
										+ '<div><a href="promotion.html?hotelId='
										+ hotelId + '&promotionid='
										+ data.promotion[i].id + '&livedate='+livedate+'&leavedate='+leavedate+'">'
										+ data.promotion[i].propActivityName
										+ '</a></div>' + '</div>' + '</div>');
			}
		}
		// 初始化房间信息
		if (data.data.length === 0) {
			$("#roomstyle").append("<p>对不起，您选择的地区暂无房型信息</p>");
		}

		else {
			$("#roomstyle").append(
					'<table class="table table-striped" id="tablecontent">'
							+ '<tr>'
							+ '<th style="padding-left:20px;">酒店房型</th>'
							+ '<th>价格</th>' + '<th>特别说明</th>' + '<th></th>'
							+ '</tr></table>');
			for (var i = 0; i < data.data.length; i++) {

				$("#tablecontent")
						.append(
								'<tr>'
										+ '<td>'
										+ '<span style="padding-left:10px"> <a class="text-success">'
										+ data.data[i].roomType
										+ '</a></span>'
										+ '<span style="padding-left:8px"><a href="room.html?roomId='
										+ data.data[i].id
										+ '" class="text">了解详情</a></span>'
										+ '</td>'
										+ '<td>￥'
										+ data.data[i].onlinePrice
										+ '元</td>'
										+ '<td>'
										+ '<select class="select-set" id="op'
										+ i
										+ '">'
										+ '<option value="0">即时确认，前台现付</option>'
										+ '<option value="1">酒店确认，前台现付</option>'
										+ '<option value="2">提前预付，不可取消</option>'
										+ '</select></td>'
										+ '<td><a href="bookroom.html?hotelId='+data.data[i].hotelId+'&roomType='+data.data[i].roomType+'&livedate='+livedate+'&leavedate='+leavedate+'"><button type="button" class="btn btn-warning btn-small">预订</button></a> </td>'
										+ '</tr>' + '</table>');

				// $(".select-set").val(data.data[i].onlinePayType);
				$('#op' + i + '').val(data.data[i].onlinePayType);

			}
		}

	}
	var operation = new Operation("前台展示.酒店信息.列房间信息");
	operation.hotelId = hotelId;
	operation.execute(callback);
}
