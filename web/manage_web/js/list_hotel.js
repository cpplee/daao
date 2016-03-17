var tableList;					//人事信息表格
var tableOperation;				//tableList的操作

var currentDepartmentId = -1;	//当前选择的地市网点节点的id


var date = new Date();
/** 修改信息 */

function newAcitivity()
{
	window.location.href="addActivity.html?sourcePage=new";
}

function addHotel(data)
{
	window.location.href ="HotelInfo.html#section-1";
}

function addBanquet(data)
{
	window.location.href ="HotelInfo.html#section-4";
}

function addResaurantBars(data)
{
	window.location.href ="HotelInfo.html#section-5";
}

function addStore(data)
{
	window.location.href ="HotelInfo.html#section-6";
}

function onEdit1(data)
{
	window.location.href="add_hotel.html?hotelId="+data.id+"&sourcePage=edit1&PagePos=hotel";
}

/** 查看信息 */
function onView1(data)
{
	
	//date = data.activityDate;
	window.location.href="add_hotel.html?hotelId="+data.id+"&sourcePage=view1&PagePos=hotel";
	
}

/** 删除信息 */
function onDelete1(data)
{
	var callback = function ()
	{

		alert("成功删除酒店信息!");
		tableList.refresh();

	}
	if(!confirm("确认删除酒店信息吗?"))	return;
	var operation = new Operation("酒店.酒店设置.酒店信息列表.删除酒店");
	
	operation.hotelId = data.id;	
	operation.execute(callback);
} 

/** 初始化信息表格 */
function initTable1()
{
	

	var operations = 
		[
		 {name: "查看",onclick: onView1 },
		 {name: "修改",onclick: onEdit1 },
		 {name: "删除",onclick: onDelete1 }

		 ];

	var checks = 
		[];

	var titles = 
		[
		 {text:"", width:"5%"},
		 {text:"酒店名称", width:"19%"},
		 {text:"所在国家", width:"19%"},
		 {text:"所在城市", width:"19%"},
		 {text:"联系电话", width:"19%"},
		 {text:"操作", width:"19%"}
		 ];
	var columns =  
		[
		 function(data) 
		 {
			// alert(123);
			// util.debug(data,9);
			 return  TableList.link2(checks, data);
		 },
		
		 function(data) { return data.cname; },		
		 function(data) { return data.country; },		
		 function(data) { return data.city; },
		 function(data) { return data.telephone; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.酒店设置.酒店信息列表.列酒店信息");
	//tableOperation.departmentId = currentDepartmentId;

	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
}


/** 查看信息 */
function onView2(data)
{
	//util.debug(data,3);
	//date = data.activityDate;
	window.location.href="add_banquet.html?banquetId="+data.id+"&sourcePage=view2&PagePos=banquet";
	
}

function onEdit2(data)
{
	window.location.href="add_banquet.html?banquetId="+data.id+"&sourcePage=edit2&PagePos=banquet";
}

/** 删除信息 */
function onDelete2(data)
{
	var callback = function ()
	{

		alert("成功删除宴会厅信息!");
		tableList.refresh();

	}
	if(!confirm("确认删除宴会厅信息吗?"))	return;
	var operation = new Operation("酒店.酒店设置.宴会厅信息列表.删除宴会厅");
	
	operation.banquetId = data.id;	
	operation.execute(callback);
} 

/** 初始化信息表格 */
function initTable2()
{
	

	var operations = 
		[
		 {name: "查看",onclick: onView2 },
		 {name: "修改",onclick: onEdit2 },
		 {name: "删除",onclick: onDelete2 }

		 ];

	var checks = 
		[];

	var titles = 
		[
		 {text:"", width:"5%"},
		 {text:"宴会厅名称", width:"19%"},
		 {text:"宴会厅位置", width:"19%"},
		 {text:"宴会厅容量", width:"19%"},
		 {text:"宴会厅套餐", width:"19%"},
		 {text:"操作", width:"19%"}
		 ];
	var columns =  
		[
		 function(data) 
		 {			 
			 return  TableList.link2(checks, data);
		 },
		
		 function(data) { return data.banName; },		
		 function(data) { return data.banLocation; },		
		 function(data) { return data.banContain; },
		 function(data) { return data.banSize; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.酒店设置.宴会厅信息列表.列宴会厅信息");
	//tableOperation.departmentId = currentDepartmentId;

	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
}


/** 查看信息 */
function onView3(data)
{
	//util.debug(data,3);
	//date = data.activityDate;
	window.location.href="add_restaurant.html?resaurantBarsId="+data.id+"&sourcePage=view3&PagePos=resaurantBars";
	
}

function onEdit3(data)
{
	window.location.href="add_restaurant.html?resaurantBarsId="+data.id+"&sourcePage=edit3&PagePos=resaurantBars";
}

/** 删除信息 */
function onDelete3(data)
{
	var callback = function ()
	{

		alert("成功删除餐饮店信息!");
		tableList.refresh();

	}
	if(!confirm("确认删除餐饮店信息吗?"))	return;
	var operation = new Operation("酒店.酒店设置.餐饮店信息列表.删除餐饮店");
	
	operation.resaurantBarsId = data.id;	
	operation.execute(callback);
} 

/** 初始化信息表格 */
function initTable3()
{
	

	var operations = 
		[
		 {name: "查看",onclick: onView3 },
		 {name: "修改",onclick: onEdit3 },
		 {name: "删除",onclick: onDelete3 }

		 ];

	var checks = 
		[];

	var titles = 
		[
		 {text:"", width:"5%"},
		 {text:"餐厅名称", width:"19%"},
		 {text:"餐厅位置", width:"19%"},
		 {text:"餐厅容量", width:"19%"},
		 {text:"餐厅价格", width:"19%"},
		 {text:"操作", width:"19%"}
		 ];
	var columns =  
		[
		 function(data) 
		 {				 
			 return  TableList.link2(checks, data);
		 },
		
		 function(data) { return data.rbaName; },		
		 function(data) { return data.rbaLocation; },		
		 function(data) { return data.rbaBoxContain; },
		 function(data) { return data.rbaPrice; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.酒店设置.餐饮店信息列表.列餐饮店信息");
	//tableOperation.departmentId = currentDepartmentId;

	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
}


/** 查看信息 */
function onView4(data)
{
	//util.debug(data,3);
	//date = data.activityDate;
	window.location.href="add_bookspecialty-store.html?storeId="+data.id+"&sourcePage=view4&PagePos=store";
	
}

function onEdit4(data)
{
	window.location.href="add_bookspecialty-store.html?storeId="+data.id+"&sourcePage=edit4&PagePos=store";
}

/** 删除信息 */
function onDelete4(data)
{
	var callback = function ()
	{

		alert("成功删除专门店信息!");
		tableList.refresh();

	}
	if(!confirm("确认删除专门店信息吗?"))	return;
	var operation = new Operation("酒店.酒店设置.专门店信息列表.删除专门店");
	
	operation.storeId = data.id;	
	operation.execute(callback);
} 


/** 初始化信息表格 */
function initTable4()
{	
    
	var operations = 
		[
		 {name: "查看",onclick: onView4 },
		 {name: "修改",onclick: onEdit4 },
		 {name: "删除",onclick: onDelete4 }

		 ];

	var checks = 
		[];

	var titles = 
		[
		 {text:"", width:"5%"},
		 {text:"专门店名称", width:"19%"},
		 {text:"专门店代码", width:"19%"},
		 {text:"专门店位置", width:"19%"},
		 {text:"娱乐设施", width:"19%"},		 
		 {text:"操作", width:"19%"}
		 ];
	var columns =  
		[
		 function(data) 
		 {	
			 //util.debug(data,9);
			 return  TableList.link2(checks, data);
		 },
		
		 function(data) { return data.storeName; },	
		 function(data) { return data.storeCode; },
		 function(data) { return data.storeLocation; },		
		 function(data) { return data.storeContent; },		 
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];	

	tableOperation = new Operation("酒店.酒店设置.专门店信息列表.列专门店信息");
	//tableOperation.departmentId = currentDepartmentId;

	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
}

/** 页面加载函数 */
function pageLoad1()
{
	//initTrees();
  //  alert(123);
	initTable1();
  //alert(456);

	//loadRoles(-1);
}

/** 页面加载函数 */
function pageLoad2()
{
	//initTrees();

	initTable2();


	//loadRoles(-1);
}

/** 页面加载函数 */
function pageLoad3()
{
	//initTrees();

	initTable3();


	//loadRoles(-1);
}


/** 页面加载函数 */
function pageLoad4()
{
	//initTrees();    
	initTable4();


	//loadRoles(-1);
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

function onExport()
{	
	$$('excelType').value = "酒店信息汇总";
	$$('fileName').value = "酒店信息汇总.xls";
	$$('export_form').submit();
}

function reverseChoose()
{
	$("#container_div :checkbox").each(function (){
		this.checked = !this.checked;
	})
}

