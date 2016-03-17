var tableList;					//人事信息表格
var tableOperation;				//tableList的操作

var currentDepartmentId = -1;	//当前选择的地市网点节点的id


/** 修改信息 */
function onReview(data)
{
	//util.debug(data,3);
	window.location.href = "activityRecord.html?activitylogId=" + data.id + "&sourcePage=review";
}

/** 查看信息 */
function onView(data)
{
	//util.debug(data,3);
	window.location.href = "activityRecord.html?activitylogId=" + data.id + "&sourcePage=view";
}


/** 初始化信息表格 */
function initTable()
{
	var checkbox = [ ];
	var operations = 
		[
		 {name: "查看",onclick: onView },
		 {name: "批复",onclick: onReview },
		 ];


	var titles = 
		[
         {text:"", width:"5%"},
		 {text:"客户名称", width:"19%"},
		 {text:"拜访人", width:"19%"},
		 {text:"拜访时间", width:"19%"},
		 {text:"操作", width:"19%"}
		 ];
	var columns =  
		[
		 function(data) 
		 {
			 return  TableList.link2(operations, data);
		 },
		 function(data) { return data.comAccount.cname; },
		 function(data) { return data.actlogPerson; },
		 function(data) { return dateToStr(data.actlogDate); },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.高级管理.报告审阅批复.列拜访活动报告");

	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
}

/**日期转换函数*/
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


/** 页面加载函数 */
function pageLoad()
{
	
	initTable();

}

function reverseChoose()
{
	$("#container_div :checkbox").each(function (){
		this.checked = !this.checked;
	})
}

/** 加载角色信息 */

function onExport()
{
	
	$$('excelType').value = "拜访活动批复报告";
	$$('fileName').value = "拜访活动批复报告.xls";
	$$('export_form').submit();
}

