$import("rpc.js");
$import("html/format.js");



var tableList;					//人事信息表格
var tableOperation;				//tableList的操作
var args;
var ok=false;
function agreeList()
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
	initTable();
	
}


function initTable()
{	
	var callback = function (data)
	{	
		if(data.total === 0)
		{
			$("#container_div").append("<p>对不起,没有数据</p>");
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
	
//	var Rootpath = util.getRootPath();
//	var AddressDes = null;
//	var ImgUrl = null;
	
	
	function showData(data,showCount)
	{
		
		
		 //  util.debug(data, 9);
		var limitData = 5;
		
		  $("#appendinfo").empty();
		
$('#appendinfo').append('<tr><th style="width: 20px"><input type="checkbox" id="check-all3"></th>'
		+'<th style="width: 120px">酒店</th>'
		+'<th style="width: 120px">合同号码</th>'
		+'<th style="width: 120px">房型</th>'
		+'<th style="width: 120px">房价</th>'
		+'<th style="width: 150px">有效期截止</th>'
		+'<th style="width: 100px">预定</th>'
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
			var validDateList;
			 if(data.data[i].validDate==null){
				 validDateList='';
	                 }else{
	             validDateList=dateToStr1(data.data[i].validDate);
	        }
	          
			
			$('#appendinfo').append('<tr>'
						                +'<td><input type="checkbox" name="cus_name3"></td>'
										+'<td>'+data.data[i].hotelName+'</td>'
										+'<td>'+data.data[i].agreeCode+'</td>'
										+'<td>'+data.data[i].roomType+'</td>'
										+'<td>'+data.data[i].price+'</td>'
										+'<td>'+validDateList+'</td>'
										+'<td><button type="button" class="btn-na" id="booking-button'+data.data[i].id+'" value="'+data.data[i].id+'">预定</button></td></tr>');
			
			
		
			
			$('#booking-button'+data.data[i].id+'').click(function(){
				
				
				 alert($(this).val());
		     	/*
                  
						//  alert(data.data[k-1].id);
                  
						var callbackdelete = function()
                	{
                	
                		alert("删除联系人成功！");
                		window.location ="#p2";
                	};
                	
                   

                	var operationdelete;
                	operationdelete = new Operation("前台信息.删除常用联系人");
                	operationdelete.id = $(this).val();

                	operationdelete.execute(callbackdelete);
                     
					*/
					
				
			 
		});
		}
		
		
	}
	
	var operation  = new Operation("前台信息.列合同信息");
	operation.limit = 99999;
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



