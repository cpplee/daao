$import("rpc.js");
$import("html/form.js");
var tableList;					//人事信息表格
var tableOperation;				//tableList的操作
var destination;
var livedate;	
var leavedate;
var hotelId;

function pageLoad()
{	
	var args = util.getURLArgs();
	destination = args.destination;
	livedate = args.livedate;
	leavedate = args.leavedate;
	$("#homecity_name").val(destination);
	$("#starttime").val(livedate);
	$("#endtime").val(leavedate);
	
	
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


	initTable();
}


function initTable()
{	
	var callback = function (data)
	{	
	
		if(data.total === 0)
		{
			$("#hotellist").append("<p>对不起，您选择的地方没有餐饮</p>");
		}
		
		 var totalPage = (data.total+4)/5;
		 var totalRecords = data.total;
		 var showCount = 0;
		 var pageNo = getParameter('pno');
		 console.log(pageNo);
		  if(!pageNo){
		  	pageNo = 1;
		  }
		  
		 kkpager.generPageHtml({
		  pno : pageNo,
		
		  total : totalPage,

		  totalRecords : totalRecords,
		
		  hrefFormer : 'demo',
		 
		  hrefLatter : '.html',
		  getLink : function(n){
		   return this.hrefFormer + this.hrefLatter + "?pno="+n;
		  }
		  ,
		  mode : 'click',
		  click : function(n){
		  	this.selectPage(n);
		  	showCount = n-1;
		  	if($(".block-rooms").length > 0)
		  	{
		  	   $(".block-rooms").remove();	
		  	}
		  	showData(data,showCount);
		    return false;
		  }
		 });
		 
		showData(data,showCount);
	};
	
	var Rootpath = util.getRootPath();
	var AddressDes = null;
	var ImgUrl = null;
	function showData(data,showCount)
	{
		var limitData=5;
		
		
		if(data.total<5)
		 {
		   limitData = data.total; 
		 }else{
			 if((data.total-showCount*5)>5){
					limitData=5;
					
				}else{
					limitData=(data.total-showCount*5);
					//alert(limitData);
				}
			 
		 }
		for(var i =showCount*5;i<showCount*5+limitData;i++)
		{
			if(data.data[i].rbaLocation == null)
			{
				AddressDes = "餐饮未添加地点描述信息"; 
			}
			else
			{
				AddressDes = data.data[i].rbaLocation;
			}
			if(data.data[i].rbaImgUrl == null)
			{
				ImgUrl = Rootpath + "/img/empty-sm.jpg";
			}
			else
			{
				ImgUrl = Rootpath + data.data[i].rbaImgUrl;
			}
			var	starttime=$("#starttime").val();
			var endtime=$("#endtime").val();
			$("#page").before('<div class="block-rooms"><div class="row-fluid">'+
					'<div class="span3"><div class="image-with-transparent-border">'+
					'<div class="image-overlay"><a href="" class="bubble-popup bubble-more"'+
					'title="'+data.data[i].rbaName+'"><i class="icon-fullscreen"></i></a>'+
					'</div><img id="hotelImg" src="'+ImgUrl+'" class="img-notfound" alt="餐饮图片未上传" style="height:133px;"></div></div>'+
					'<div class="span6"><a href="restaurantbar-detail.html?resaurantbarsid='+data.data[i].id+'&hotelId='+data.data[i].hotelId+'&starttime='+starttime+'&endtime='+endtime+'" class="room-title">'+data.data[i].rbaName+'</a>'+
					 '<div class="stars pull-right"><span class="star"></span><span class="star"></span><span'+
					'class="star"></span><span class="star"></span><span'+
					'class="star"></span></div><div class="room-price"><span></span>'+data.data[i].rbaPrice+'元<span> 起</span></div><p>'+AddressDes
					+'</p></div></div>');	
			
		}
		
	}
	
	var operation  = new Operation("前台展示.酒店信息.列餐饮信息");
	operation.address = destination;
	operation.limit = 99999;
	operation.execute(callback);
}


function getParameter(name) {
	 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 var r = window.location.search.substr(1).match(reg);
	 if (r!=null) return unescape(r[2]); return null;
	}