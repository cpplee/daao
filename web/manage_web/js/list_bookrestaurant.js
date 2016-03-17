var tableList;					// 人事信息表格
var tableOperation;				// tableList的操作

var currentDepartmentId = -1;	// 当前选择的地市网点节点的id


//确认预定宴会厅或会议厅
function onConfirm(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	//alert(data.id);
	if(!confirm("是否确认通过审核？"))	return;
	var operation = new Operation("酒店.高级管理.餐饮店酒吧预定管理.确认餐饮店订单");
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
	var operation = new Operation("酒店.高级管理.餐饮店酒吧预定管理.取消预定餐饮店审核");
	operation.id = data.id;
	operation.execute(callback);
}
/** 删除信息 */
function onDelete(data)
{
	var callback = function ()
	{

		alert("成功删除--" + data.bookManName + "--的订单!");
		tableList.refresh();

	}
	if(!confirm("确认删除--" + data.bookManName + "--的订单吗?"))	return;
	var operation = new Operation("酒店.高级管理.餐饮店酒吧预定管理.删除餐饮店酒吧预定订单");
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
		 
		 {text:"姓名", width:"10%"},
		 {text:"联系电话", width:"10%"},
		 {text:"用餐时间", width:"10%"},
		 {text:"饭店名称", width:"10%"},
		 {text:"预定房号", width:"10%"},
		 {text:"活动人数", width:"10%"},
		 {text:"状态", width:"10%"},
		 {text:"操作", width:"10%"}
		 ];
	var columns =  
		[
		
		
		 function(data) { return data.bookManName; },
		 function(data) { return data.bookRestaurantPhone; },
		 function(data) { return data.eatdate; },
		 function(data) { return data.bookRestaurantName; },
		 function(data) { return data.resaurantId; },
		 function(data) { return data.manNum; },
		 function(data) { return data.state; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.高级管理.餐饮店酒吧预定管理.列餐饮店酒吧预定列表");

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


