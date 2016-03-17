var tableList;					//人事信息表格
var tableOperation;				//tableList的操作

var currentDepartmentId = -1;	//当前选择的地市网点节点的id


var date = new Date();
/** 修改信息 */

function newAcitivity()
{
	window.location.href="addActivity.html?sourcePage=new";
}
function onEdit(data)
{
	window.location.href="addActivity.html?sourcePage=edit&comAccountActivityPlanId="+data.id+"&comAccountName="+data.companyName;
}

/** 查看信息 */
function onView(data)
{
	//util.debug(data,3);
	date = data.activityDate;
	window.location.href="account_plan_manage.html?date="+dateToStr(date);
	
}

/** 删除信息 */
function onDelete(data)
{
	var callback = function ()
	{

		alert("成功删除拜访活动计划!");
		tableList.refresh();

	}
	if(!confirm("确认删除拜访计划吗?"))	return;
	var operation = new Operation("酒店.销售管理.销售活动.删除销售活动");
	operation.activityPlanId = data.id;
	
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
		 {text:"拜访人", width:"19%"},
		 {text:"拜访日期", width:"19%"},
		 {text:"拜访时间", width:"19%"},
		 {text:"操作", width:"19%"}
		 ];
	var columns =  
		[
		 function(data) 
		 {
			 
			 return  TableList.link2(checks, data);
		 },

		 function(data) { return data.companyName; },
		 function(data) { return data.activityPerson; },
		 function(data) { return dateToStr(data.activityDate); },
		 function(data) { return TimeToStr(data.activityTime); },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.销售管理.销售活动.列销售活动");
	//tableOperation.departmentId = currentDepartmentId;

	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
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


/** 页面加载函数 */
function pageLoad()
{
	//initTrees();

	initTable();


	//loadRoles(-1);
}



function onExport()
{
	$$('excelType').value = "拜访活动";
	$$('fileName').value = "拜访活动.xls";
	$$('export_form').submit();
}

function reverseChoose()
{
	$("#container_div :checkbox").each(function (){
		this.checked = !this.checked;
	})
}

