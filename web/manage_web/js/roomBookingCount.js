/**
 * 
 */
var tableList;					// 人事信息表格
var tableOperation;				// tableList的操作

var currentDepartmentId = -1;	// 当前选择的地市网点节点的id

var dateRoom=null;
var dateRoom2=null;
var comAccountContactId=null;
////确认预定宴会厅或会议厅
function onJoin(data)
{
//	var callback = function ()
//	{
//
//		tableList.refresh();
//
//	}
	//alert(data.id);
	//util.debug(data, 9);
	window.location.href = "book_room_verify.html?comAccountContactId="+data.id;
	//if(!confirm("是否确认通过审核？"))	return;
//	var operation = new Operation("酒店.高级管理.餐饮店酒吧预定管理.确认餐饮店订单");
//	operation.id = data.id;
//	operation.execute(callback);
}

//确认预定房间
function onConfirm(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	if(!confirm("是否确认通过审核？"))	return;
	var operation = new Operation("酒店.高级管理.房间预定管理.确认房间订单");
	operation.id = data.id;
	operation.execute(callback);
}
//取消审核
function onCancel(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	if(!confirm("是否取消已审核通过的订单？"))	return;
	var operation = new Operation("酒店.高级管理.房间预定管理.取消预定房间审核");
	operation.id = data.id;
	operation.execute(callback);
}

/** 删除信息 */
function onDelete(data)
{
	var callback = function ()
	{

		alert("成功删除--" + data.bookName + "--的订单!");
		tableList.refresh();

	}
	if(!confirm("确认删除--" + data.bookName + "--的订单吗?"))	return;
	var operation = new Operation("酒店.高级管理.房间预定管理.删除房间预定订单");
	operation.id = data.id;
	operation.execute(callback);
} 
function onJoin2(data)
{

//	util.debug(data, 9);
	window.location.href = "book_room_verify.html?comAccountContactId="+data.id;

}
function onConfirm2(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	if(!confirm("是否确认通过审核？"))	return;
	var operation = new Operation("酒店.高级管理.房间预定管理.确认房间订单");
	operation.id = data.id;
	operation.execute(callback);
}
//取消审核
function onCancel2(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	if(!confirm("是否取消已审核通过的订单？"))	return;
	var operation = new Operation("酒店.高级管理.房间预定管理.取消预定房间审核");
	operation.id = data.id;
	operation.execute(callback);
}

/** 删除信息 */
function onDelete2(data)
{
	var callback = function ()
	{

		alert("成功删除--" + data.bookName + "--的订单!");
		tableList.refresh();

	}
	if(!confirm("确认删除--" + data.bookName + "--的订单吗?"))	return;
	var operation = new Operation("酒店.高级管理.房间预定管理.删除房间预定订单");
	operation.id = data.id;
	operation.execute(callback);
} 

/** 初始化信息表格 */
function initTable(dateRoom)
{

	var operations = 
		[
         {name: "确认",onclick: onConfirm },
         {name: "取消",onclick: onCancel },
         {name: "进入",onclick: onJoin },
		 {name: "删除",onclick: onDelete }
		 ];


	var titles = 
		[
//		 {text:"宴会厅", width:"10%"},
		 {text:"人员类型", width:"10%"},
		 {text:"入住时间", width:"10%"},
		 {text:"离开时间", width:"10%"},
		 {text:"预订人", width:"10%"},
		 {text:"预订价格", width:"10%"},
		 {text:"状态", width:"10%"},
		 {text:"操作", width:"15%"}
		 ];
	var columns =  
		[
		
		
//		 function(data) { return data.bookBanquetName; },
		 function(data) { return data.loginType; },
		 function(data) { return dateToStr1(data.arriveTime); },
		 function(data) { return dateToStr1(data.leaveTime); },
		 function(data) { return data.bookName; },
		 function(data) { return data.rate+"元"; },
		 function(data) { 
			 //util.debug(data,9);
			 if(data.status=='T')
				 {
				 data.status='审核通过 ';
				 }else{
				data.status='待审核 ';	 
				 }
			 return data.status; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.酒店管理.列客房团客预定统计信息");
    tableOperation.limit = 10;
	tableOperation.date = dateRoom;
	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
	
	
	
	
//	var callback = function (result)
//	{
//           util.debug(result, 9);
//		//tableList.refresh();
//
//	}
//
//	var operation = new Operation("酒店.酒店管理.列宴会预定统计信息");
//	operation.date = dateBanquet;
//	operation.execute(callback);
	
}



function initTable2(dateRoom2)
{

	var operations = 
		[
		 {name: "确认",onclick: onConfirm2 },
         {name: "取消",onclick: onCancel2 },
         {name: "进入",onclick: onJoin2 },
		 {name: "删除",onclick: onDelete2 }
		 ];


	var titles = 
		[
//		 {text:"宴会厅", width:"10%"},
		 {text:"人员类型", width:"10%"},
		 {text:"入住时间", width:"10%"},
		 {text:"离开时间", width:"10%"},
		 {text:"预订人", width:"10%"},
		 {text:"预订价格", width:"10%"},
		 {text:"状态", width:"10%"},
		 {text:"操作", width:"15%"}
		 ];
	var columns =  
		[
		
		
//		 function(data) { return data.bookBanquetName; },
		 function(data) { return data.loginType; },
		 function(data) { return dateToStr1(data.arriveTime); },
		 function(data) { return dateToStr1(data.leaveTime); },
		 function(data) { return data.bookName; },
		 function(data) { return data.rate+"元"; },
		 function(data) { 
			// util.debug(data,9);
			 if(data.status=='T')
				 {
				 data.status='审核通过 ';
				 }else{
				data.status='待审核 ';	 
				 }
			 return data.status; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.酒店管理.列客房散客预定统计信息");
    tableOperation.limit = 10;
	tableOperation.date = dateRoom2;
	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
	
	
	
	

}




	
	
	
	function onSearch()
	{
		var temp=parseInt($('#dayRoom').val());
		var temp2=parseInt($('#monthRoom').val());
		var temp3=parseInt($('#yearRoom').val());
		if(!isNaN(temp)&&!isNaN(temp2)&&!isNaN(temp3))
			{
			dateRoom = temp3+'-'+temp2+'-'+temp;
			initTable(dateRoom);
			}else{
				alert("对不起,您输入的日期有误,请重新输入日期");	
			}
		
		
	   // alert(dateBanquet);
		
		
		
	}
	
	

	function onSearch2()
	{
		
		
		
		var temp=parseInt($('#dayRoom2').val());
		var temp2=parseInt($('#monthRoom2').val());
		var temp3=parseInt($('#yearRoom2').val());
		if(!isNaN(temp)&&!isNaN(temp2)&&!isNaN(temp3))
			{
			dateRoom2 = temp3+'-'+temp2+'-'+temp;
			initTable2(dateRoom2);
			}else{
				alert("对不起,您输入的日期有误,请重新输入日期");	
			}
		
		
	   // alert(dateBanquet);
		
		
		
	}
	
	
	
	function dateToStr1(datetime) {
		var year = datetime.getFullYear();
		var month = datetime.getMonth() + 1;// js中月份是从0开始的
		var date = datetime.getDate();

		if (month < 10) {
			month = "0" + month;
		}
		if (date < 10) {
			date = "0" + date;
		}

		var time = year + "-" + month + "-" + date;
		// var time = date+"-"+month+"-"+year;
		// alert(time);
		return time;
	}
	