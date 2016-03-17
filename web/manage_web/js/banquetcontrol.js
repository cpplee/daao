/**
 * 
 */

var tableList;					// 人事信息表格
var tableOperation;				// tableList的操作

var currentDepartmentId = -1;	// 当前选择的地市网点节点的id

var dateBanquet=null;
var comAccountContactId=null;

////确认预定宴会厅或会议厅
function onJoin(data)
{

	//util.debug(data, 9);
	window.location.href = "book_banquet_verify.html?comAccountContactId="+data.id;

}

//确认预定宴会厅或会议厅
function onConfirm(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	if(!confirm("是否确认通过审核？"))	return;
	var operation = new Operation("酒店.高级管理.宴会会议厅预定管理.确认宴会会议厅订单");
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
	var operation = new Operation("酒店.高级管理.宴会会议厅预定管理.取消宴会会议厅订单审核");
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
	var operation = new Operation("酒店.高级管理.宴会会议厅预定管理.删除宴会会议厅预定订单");
	operation.id = data.id;
	operation.execute(callback);
} 


/** 初始化信息表格 */
function initTable(dateBanquet)
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
		 {text:"宴会厅", width:"10%"},
		 {text:"联系人", width:"10%"},
		 {text:"联系电话", width:"10%"},
		 {text:"证件类型", width:"10%"},
		 {text:"结束日期", width:"10%"},
		 {text:"用途", width:"10%"},
		 {text:"状态", width:"10%"},
		 {text:"操作", width:"15%"}
		 ];
	var columns =  
		[
		
		
		 function(data) { return data.bookBanquetName; },
		 function(data) { return data.bookName; },
		 function(data) { return data.bookBanquetPhone; },
		 function(data) { return data.bookBanquetCerType; },
		 function(data) { return dateToStr1(data.endDate); },
		 function(data) { return data.useType; },
		 function(data) { 
			 if(data.state=='T')
				 {
				 data.state='审核通过 ';
				 }else{
				data.state='待审核 ';	 
				 }
			 return data.state; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.酒店管理.列宴会预定统计信息");
    tableOperation.limit = 10;
	tableOperation.date = dateBanquet;
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




	
	
	
	function onSearch()
	{
		var temp=parseInt($('#dayBanquet').val());
		var temp2=parseInt($('#monthBanquet').val());
		var temp3=parseInt($('#yearBanquet').val());
		if(!isNaN(temp)&&!isNaN(temp2)&&!isNaN(temp3))
			{
			dateBanquet = temp3+'-'+temp2+'-'+temp;
			initTable(dateBanquet);	
			
			
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
	

/** 页面加载函数 */
