$import("rpc.js");
$import("html/form.js");
var hotelId; // 酒店id
var promotionid;//促销id
var livedate;
var leavedate;
function pageload() {

	var args = util.getURLArgs();
	hotelId = args.hotelId;
	promotionid=args.promotionid;
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


	inithotelroom();// 初始化酒店房间信息


}
function inithotelroom() {
	var callback = function(data) {
	
		   util.debug(data,9);
		//初始化促销活动信息
		if(data.promotioninfo==null)
			$("#promotionActivityInfo").append("<p>暂无促销活动信息，请等待更新！</p>");
		else{
			$$('type').innerHTML=data.promotioninfo.propActivityCompany;
			$$('type2').innerHTML=data.promotioninfo.propActivityName;
			$("#promotionActivityInfo").append('<p class="titlename"><span class="titlefont">活动名称：</span>'+data.promotioninfo.propActivityName+'</p>'
					+'<p class="titlename"><span class="titlefont">合作伙伴：</span>'+data.promotioninfo.propActivityCompany+'</p>'
					+'<p class="titlename"><span class="titlefont">促销代码：</span>'+data.promotioninfo.propActivityCode+'</p>'
					+'<p class="titlename"><span class="titlefont">预定条款：</span>如果继续预订，即表示您已阅读并接受我们的<a href="#" style="color: blue"> 条款和条件</a> 以及<a href="#" style="color: blue">隐私政策</a>'
					+'</p>');
		}
		// 初始化房间信息
		if(data.data.length===0){
			$("#roomstyle").append("<p>对不起，您选择的地区暂无房型信息</p>");
		}
		
		
		else{
				$("#roomstyle").append('<table class="table table-striped" id="tablecontent">'
						+ '<tr>'
						+ '<th style="padding-left:20px;">酒店房型</th>'
						+ '<th>价格</th>' + '<th>特别说明</th>' + '<th></th>'
						+ '</tr></table>');
		        for(var i=0;i<data.data.length;i++)
				{
		        	if(data.data[i].url==null)
		        		data.data[i].url="img/empty.png";
		        $("#tablecontent").append('<tr>'
		        +'<td >'
		        +'<div style="float: left"><img src="'+data.data[i].url+'" width="80px" height="86px"></div>'
		        +'  <div>'
		        +'<span style="padding-left:10px"> <a class="text-success">'+data.data[i].type+'</a></span>'
		        +'<br>'
		        +'<span style="padding-left:8px"><a href="room.html?roomId='+data.data[i].id+'&hotelId='+hotelId+'&promotionId='+promotionid+'&roomType='+data.data[i].type+'&livedate='+livedate+'&leavedate='+leavedate+'" class="text">了解详情</a></span>'
		        +'</div>'
		        +'</td>'
		     
		        +'<td >￥'+data.data[i].onlinePrice+'元&nbsp;<img src="img/hot.gif"></td>'
		        +'<td ><select class="select-set" id="op'
				+ i
				+ '">'
				+ '<option value="0">即时确认，前台现付</option>'
				+ '<option value="1">酒店确认，前台现付</option>'
				+ '<option value="2">提前预付，不可取消</option>'
				+ '</select></td>'
		        +'<td ><a href="bookroom.html?hotelId='+hotelId+'&roomType='+data.data[i].type+'&promotionId='+promotionid+'&livedate='+livedate+'&leavedate='+leavedate+'"><button type="button" class="btn btn-warning btn-small">预订</button></a> </td>'
		        +'</tr>');
		        $('#op' + i + '').val(data.data[i].onlinePayType);
			}
		}

	}
	var operation = new Operation("前台展示.酒店信息.列促销房间信息");
	
	operation.hotelId = hotelId;
	operation.promotionid=promotionid;
	operation.execute(callback);
}
