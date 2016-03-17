var tableList;					// 人事信息表格
var tableOperation;				// tableList的操作

var currentDepartmentId = -1;	// 当前选择的地市网点节点的id




/** 添加销售人员 */

function AddSaler()
{
	window.location.href="salerinfo2.html?sourcePage=add";
}

/** 编辑 */
function onEdit(data)
{
	// util.debug(data,3);
	window.location.href = "salerinfo2.html?salerId=" + data.id + "&sourcePage=edit";
}

/** 查看信息 */
function onView(data)
{
	// util.debug(data,3);
	window.location.href = "salerinfo2.html?salerId=" + data.id + "&sourcePage=view";
}

/** 删除信息 */
function onDelete(data)
{
	var callback = function ()
	{

		alert("成功删除用户‘" + data.name + "’!");
		tableList.refresh();

	}
	if(!confirm("确认删除‘" + data.name + "’用户吗?该操作不可逆！删除后会删除其他表，请谨慎！！！"))	return;
	var operation = new Operation("酒店.高级管理.销售人员管理.删除销售人员");
	operation.salerId = data.id;
	operation.execute(callback);
} 


/** 初始化信息表格 */
function initTable()
{

	var operations = 
		[
		 {name: "查看",onclick: onView },
		 {name: "分配",onclick: onEdit },
		 {name: "删除",onclick: onDelete }
		 ];


	var titles = 
		[
		 
		 {text:"名称", width:"10%"},
		 {text:"级别", width:"10%"},
		 {text:"电子邮件", width:"10%"},
		 {text:"电话", width:"10%"},
		 {text:"手机", width:"10%"},
		 {text:"操作", width:"10%"}
		 ];
	var columns =  
		[
		
		
		 function(data) { return data.name; },
		 function(data) { return data.level; },
		 function(data) { return data.email; },
		 function(data) { return data.officePhone; },
		 function(data) { return data.mobilePhone; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.高级管理.销售人员管理.列销售人员");

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


