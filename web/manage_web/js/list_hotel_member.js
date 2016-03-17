var tableList;					// 人事信息表格
var tableOperation;				// tableList的操作

var currentDepartmentId = -1;	// 当前选择的地市网点节点的id




/** 添加销售人员 */

function AddSaler()
{
	window.location.href="customer_operation.html?sourcePage=add";
}

/** 编辑 */
function onEdit(data)
{
	// util.debug(data,3);
	window.location.href = "customer_operation.html?memberId=" + data.id + "&sourcePage=edit";
}

/** 查看信息 */
function onView(data)
{
	// util.debug(data,3);
	window.location.href = "customer_operation.html?memberId=" + data.id + "&sourcePage=view";
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
	var operation = new Operation("酒店.酒店管理.删除团队人员");
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
          {text:"", width:"5%"},
		 {text:"客户编码", width:"5%"},
		 {text:"客户姓名", width:"5%"},
		 {text:"出生日期", width:"5%"},
		 {text:"客户性别", width:"5%"},
		 {text:"公司名称", width:"5%"},
		 {text:"担任职务", width:"5%"},
		 {text:"酒店名称", width:"5%"},
		 {text:"客户类型", width:"5%"},
		 {text:"会员级别", width:"5%"},
		 {text:"会员卡号", width:"5%"},
		 {text:"证件名称", width:"5%"},
		 {text:"证件号码", width:"5%"},
		 {text:"手机号码", width:"5%"},
		 {text:"电子邮箱", width:"5%"},
		 {text:"QQ", width:"5%"},
		 {text:"微信", width:"5%"},
		 {text:"积分规则", width:"5%"} 
		 ];
	var columns =  
		[
		
		 function(data) 
		 {
			 return  TableList.link2(operations, data);
		 },
		 function(data) { return data.accountId; },
		 function(data) { return data.name;},
		 function(data) { return 
			 if(data.dob==null){
				 
				 data.dob = '';
			 }else{
				 
				 dateToStr(data.dob);
			 }
			 
		 },
		 function(data) {  
			 
	     if(data.sex==true){
			       return '男';
		 }else{
			      return '女';	 
		    }; 
		 },
		 function(data) { return data.companyName; },
		 function(data) { return data.companyJob; },
		 function(data) { return data.hotelName; },
		 function(data) { return data.loginType; },
		 function(data) { return data.memLevel; },
		 function(data) { return data.memNum; },
		 function(data) { return data.certificate; },
		 function(data) { return data.cerNum; },
		 function(data) { return data.phone; },
		 function(data) { return data.email; },
		 function(data) { return data.qq; },
		 function(data) { return data.wechat; },
		 function(data) { return data.pointStatus; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.酒店管理.列客户信息");

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
	
	$$('excelType').value = "拜访活动批复报告";
	$$('fileName').value = "拜访活动批复报告.xls";
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
function reverseChoose()
{
	$("#container_div :checkbox").each(function (){
		this.checked = !this.checked;
	})
}

