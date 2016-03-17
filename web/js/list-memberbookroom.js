$import("rpc.js");
$import("html/format.js");



var tableList;					//人事信息表格
var tableOperation;				//tableList的操作
var args;
var ok=false;
function bookRoomList()
{	
	
	
    args = util.getURLArgs();
 if(!ok){
    	
    	if($.cookie("loginname")!==undefined){
    		
    		$('#contralLoginRegister').append('<span style="color:green;">'+$.cookie("loginname")+'</span>'
    		           +'<a href="login.html" id="setExit"><span>退出</span></a>');
    		
    		$('#setExit').click(function(){
    			$.cookie('loginname',null,{ expires: -1 });
    			window.location.href="index.html";
    			
    		});
             
        	ok=true;
        }else{
       $('#contralLoginRegister').append('<a href="login.html"><span id="setLoginName">登陆</span>'
               +'</a><a href="register.html"><span id="setRegister">注册</span></a>');
            }
    	
    }
 
 
 if($.cookie("loginType")!='团客')
 {
   $('#customerli').hide();
 
 }		
    initListBookTable();

}


function initListBookTable()
{	
	var callback = function (data)
	{	
		
		
		if(data.total == 0)
		{
			$("#listmemberbookingroom").append("<p>对不起,没有数据</p>");
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
	

	
	function showData(data,showCount)
	{
		var limitData = 5;
		// util.debug(data, 9);
	
		 $("#listmemberbookingroom").empty();
		  
$('#listmemberbookingroom').append('<tr><th><input type="checkbox" id="check-all2"></th><th>入住日期</th><th>离店日期</th>'
		+'<th>酒店</th>'
		+'<th>会员所属集团</th>'
		+'<th>姓名</th>'
		+'<th>房型</th>'
		+'<th>房间数</th>'
		+'<th>房价</th>'
		+'<th>房费</th>'
		+'<th>会员种类</th>'
		+'<th>会员卡号</th>'
		+'<th>本次积分</th>'
		+'<th>操作</th>'
		+'</tr>');
	
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
	    //		alert(i);
		//alert(data.data[i].arriveTime);
			var arriveTimeList=null;
			var leaveTimeList=null;
			
	          if(data.data[i].arriveTime==null){
	        	  arriveTimeList='';
	                 }else{
	             arriveTimeList=dateToStr1(data.data[i].arriveTime);
	            }
	                
	          
	          if(data.data[i].leaveTime==null){
	        	 leaveTimeList='';
	                 }else{
	              leaveTimeList=dateToStr1(data.data[i].leaveTime);
	          }
	          
	         
			$('#listmemberbookingroom').append('<tr>'
					+'<td><input type="checkbox" name="cus_name2"></td>'
					+'<td>'+arriveTimeList+'</td>'
					+'<td>'+leaveTimeList+'</td>'
					+'<td>'+data.member.hotelName+'</td>'
					+'<td>'+data.member.companyName+'</td>'
					+'<td>'+data.data[i].bookName+'</td>'
					+'<td>'+data.data[i].type+'</td>'
					+'<td>'+data.data[i].roomNum+'</td>'
					+'<td>'+data.data[i].tips+'</td>'
					+'<td>'+data.data[i].rate+'</td>'
					+'<td>'+data.data[i].bookCerType+'</td>'
					+'<td>'+data.data[i].bookCerNumber+'</td>'
					+'<td>8888</td>'
					+'<td><div><span style="padding-left: 4px"><button class="btn-na">修改</button></span></div></td>'
					+'</tr>');
			
			
		}
	}
	
	var operation  = new Operation("前台信息.列消费记录信息");
	operation.limit =99999;
	operation.execute(callback);
}


function getParameter(name) {
	 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 var r = window.location.search.substr(1).match(reg);
	 if (r!=null) return unescape(r[2]); return null;
	}

function dateToStr1(datetime){ 
	var year = datetime.getFullYear();
	var month = datetime.getMonth()+1;//js中月份是从0开始的
	var date = datetime.getDate(); 


	if(month<10){
		month = "0" + month;
	}
	if(date<10){
		date = "0" + date;
	}

	var time = year+"-"+month+"-"+date; 
	//var time = date+"-"+month+"-"+year;
	// alert(time);
	return time;
}



