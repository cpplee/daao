var tableList;					// 人事信息表格
var tableOperation;				// tableList的操作

var currentDepartmentId = -1;	// 当前选择的地市网点节点的id




////确认预定房间
//function onConfirm(data)
//{
//	var callback = function ()
//	{
//
//		tableList.refresh();
//
//	}
//	if(!confirm("是否确认通过审核？"))	return;
//	var operation = new Operation("酒店.高级管理.房间预定管理.确认房间订单");
//	operation.id = data.id;
//	operation.execute(callback);
//}
////取消审核
//function onCancel(data)
//{
//	var callback = function ()
//	{
//
//		tableList.refresh();
//
//	}
//	if(!confirm("是否取消已审核通过的订单？"))	return;
//	var operation = new Operation("酒店.高级管理.房间预定管理.取消预定房间审核");
//	operation.id = data.id;
//	operation.execute(callback);
//}
//
///** 删除信息 */
//function onDelete(data)
//{
//	var callback = function ()
//	{
//
//		alert("成功删除--" + data.bookName + "--的订单!");
//		tableList.refresh();
//
//	}
//	if(!confirm("确认删除--" + data.bookName + "--的订单吗?"))	return;
//	var operation = new Operation("酒店.高级管理.房间预定管理.删除房间预定订单");
//	operation.id = data.id;
//	operation.execute(callback);
//} 
//
//
///** 初始化信息表格 */
//function initTable()
//{
//
//	var operations = 
//		[
//		 {name: "确认",onclick: onConfirm },
//		 {name: "取消",onclick: onCancel },
//		 {name: "删除",onclick: onDelete }
//		 ];
//
//
//	var titles = 
//		[
//		 
//		 {text:"姓名", width:"10%"},
//		 {text:"联系电话", width:"10%"},
//		 {text:"入住时间", width:"10%"},
//		 {text:"离开时间", width:"10%"},
//		 {text:"预定房间号", width:"10%"},
//		 {text:"状态", width:"10%"},
//		 {text:"操作", width:"15%"}
//		 ];
//	var columns =  
//		[
//		
//		
//		 function(data) { return data.bookName; },
//		 function(data) { return data.bookPhone; },
//		 function(data) { return data.starttime; },
//		 function(data) { return data.leavetime; },
//		 function(data) { return data.roomId; },
//		 function(data) { return data.state; },
//		 function(data) 
//		 {
//			 return  TableList.link1(operations, data);
//		 }
//
//		 ];
//
//	tableOperation = new Operation("酒店.高级管理.房间预定管理.列预定房间");
//
//	tableList = new TableList(tableOperation, titles, columns);
//	tableList.create($$('container_div'));
//	tableList.refresh();
//}

//确认预定房间
function onConfirm(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	if(!confirm("是否确认通过审核？"))	return;
	var operation = new Operation("酒店.高级管理.房间预定管理.确认销售房间订单");
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
	var operation = new Operation("酒店.高级管理.房间预定管理.取消销售预定房间审核");
	operation.id = data.id;
	operation.execute(callback);
}

/** 删除信息 */
function onDelete(data)
{
	var callback = function ()
	{

		alert("成功删除--" + data.roomContactName + "--的订单!");
		tableList.refresh();

	}
	if(!confirm("确认删除--" + data.roomContactName + "--的订单吗?"))	return;
	var operation = new Operation("酒店.高级管理.房间预定管理.删除销售房间预定订单");
	operation.id = data.id;
	operation.execute(callback);
} 


/** 初始化信息表格 */
function initTable()
{

	var operations = 
		[
		 {name: "确认",onclick: onConfirm },
		 {name: "取消",onclick: onCancel },
		 {name: "删除",onclick: onDelete }
		 ];


	var titles = 
		[
		 
		 {text:"销售人员", width:"10%"},
		 {text:"房间类型", width:"10%"},
		 {text:"入住时间", width:"10%"},
		 {text:"离开时间", width:"10%"},
		 {text:"预定房间号", width:"10%"},
		 {text:"状态", width:"10%"},
		 {text:"操作", width:"15%"}
		 ];
	var columns =  
		[
		
		
		 function(data) { return data.roomContactName; },
		 function(data) { return data.roomType; },
		 function(data) { return dateToStr(data.roomArrive); },
		 function(data) { return dateToStr(data.roomDepart); },
		 function(data) { return data.roomId; },
		 function(data) {  return data.roomStatus; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.高级管理.房间预定管理.列销售预定房间");

	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
}


/** 页面加载函数 */
function pageLoad()
{
	
	initTable();

}

/** 导出信息 */
/**时间转换函数*/
function TimeToStr(datetime){ 

	var hour = datetime.getHours(); 
	var minutes = datetime.getMinutes();
	if(hour <10){
		hour = "0" + hour;
	}
	if(minutes <10){
		minutes = "0" + minutes;
	}
	
	var time = hour+":"+minutes; 
	// alert(time);
	return time;
}
function onExport()
{
	var choose =[]; 
	$('input[type="checkbox"]:checked').each(function(){ 
		choose.push($(this).val()); 
	}); 
	
	
	$$('choose_option').value = choose;
	$$('excelType').value = "销售人员列表";
	$$('fileName').value = "销售人员列表.xls";
	$$('export_form').submit();
}

function dateToStr(datetime){ 
	var year = datetime.getFullYear();
	var month = datetime.getMonth()+1;//js中月份是从0开始的
	var date = datetime.getDate(); 
	var hour = datetime.getHours(); 
	var minutes = datetime.getMinutes(); 
	var second = datetime.getSeconds();

	if(month<10){
		month = "0" + month;
	}
	if(date<10){
		date = "0" + date;
	}
	if(hour <10){
		hour = "0" + hour;
	}
	if(minutes <10){
		minutes = "0" + minutes;
	}
	if(second <10){
		second = "0" + second ;
	}

	var time = year+"-"+month+"-"+date; 
	// alert(time);
	return time;
}
