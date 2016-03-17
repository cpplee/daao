var tableList;					//人事信息表格
var tableOperation;				//tableList的操作

var currentDepartmentId = -1;	//当前选择的地市网点节点的id



function addComAccount(data)
{
	window.location.href = "add_com_account.html";
}

/** 修改信息 */
function onEdit(data)
{
	//util.debug(data,3);
	window.location.href = "customer_info_revise.html?comAccountId=" + data.id + "&sourcePage=edit";
}

/** 查看信息 */
function onView(data)
{
	//util.debug(data,3);
	window.location.href = "com_account.html?comAccountId=" + data.id + "&sourcePage=view";
}

/** 删除信息 */
function onDelete(data)
{
	var callback = function ()
	{

		alert("成功删除用户‘" + data.cname + "’!");
		tableList.refresh();

	}
	if(!confirm("确认删除‘" + data.cname + "’用户吗?该操作不可逆！删除后会删除其他表，请谨慎！！！"))	return;
	var operation = new Operation("酒店.销售管理.客户信息.删除客户");
	operation.comAccountId = data.id;
	operation.execute(callback);
} 

/** 初始化信息表格 */
function initTable()
{

	var operations = 
		[
		 {name: "查看",onclick: onView },
		 {name: "修改",onclick: onEdit },
		 {name: "删除",onclick: onDelete }

		 ];

	var checks = 
		[];

	var titles = 
		[
		 {text:"", width:"5%"},
		 {text:"公司名称", width:"19%"},
		 {text:"公司代码", width:"19%"},
		 {text:"客户级别", width:"19%"},
		 {text:"操作", width:"19%"}
		 ];
	var columns =  
		[
		 function(data) 
		 {
		
			 return  TableList.link2(checks, data);
		 },

		 function(data) { return data.cname; },
		 function(data) { return data.comAccountCode; },
		 function(data) { return data.comaccounttype; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.销售管理.客户信息.列客户信息");
	//tableOperation.departmentId = currentDepartmentId;

	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
	
}


/** 页面加载函数 */
function pageLoad()
{
	//initTrees();

	
	initTable();


	//loadRoles(-1);
}

/** 加载角色信息 */
function loadRoles(departmentId)
{
	dwr.util.removeAllOptions('role_select');
	dwr.util.addOptions('role_select', [{id: -1,name: "全部"}], "id", "name");

	var callback = function(result)
	{
		var data = result.data;
		dwr.util.addOptions('role_select', data, "id", "name");
	};

	var operation = new Operation("系统.权限.列部门角色");
	operation.departmentId = departmentId;
	operation.execute(callback);
}

/** 搜索按钮点击 */
function onSearch()
{
	if(tableList==null ) return ;

	tableOperation.name = $$('name_input').value;
	tableOperation.roleId = $$('role_select').value;

	// 修复offset bug
	tableList.reset();
	tableList.refresh();
}


function showModal()
{
	$('#myModal').modal('show');
}

function onExport()
{
	var choose =[]; 
	$('input[type="checkbox"]:checked').each(function(){ 
		choose.push($(this).val()); 
	}); 
	
	
	$$('choose_option').value = choose;
	$$('excelType').value = "客户信息汇总";
	$$('fileName').value = "客户信息汇总.xls";
	$$('export_form').submit();
}

function reverseChoose()
{
	$("#container_div :checkbox").each(function (){
		this.checked = !this.checked;
	})
}

function judgeChecked()
{
	
	if($("#container_div input[type='checkbox']").prop("checked")==true)
	{
			array.push($("input[type='checkbox']").val());
	}
	for(var i = 0 ;i < array.length;i++)
	{
		alert(array[i]);
	}
}
