$import("html/form.js");
var hotel;
var hotelId;
var managerId;
var manager;

function pageLoad()
{
	var args = util.getURLArgs();
	hotelId = args.hotelId;
	sourcePage = args.sourcePage;
	if (sourcePage == null)
	{
		$$('table-title').innerHTML="添加酒店信息";
	}
	else if(sourcePage == "view" && hotelId !=null)
	{
		
		$$('table-title').innerHTML="查看酒店信息";
		$$('submit').style.display = "none";
		ruite.form.readonly($$("hotel-form"));
		fillHotel();
	}
	else if(sourcePage == "edit" && hotelId != null)
	{
		
		$$('table-title').innerHTML="修改酒店信息";
		fillHotel();
	}
	else
	{
		alert('进入用户信息页面参数错误：请重新操作！');
		window.location = "../index.html";
	}
	initTable();
}

function checkHotelForm(hotelForm)
{
	if($$('cname').value == ""){
		alert("酒店中文名不能为空！");
		return false;
	}
	if($$('ename').value == "")
	{
		alert("酒店英文名不能为空！");
		return false;
	}
	
	if($$('address1').value == "")
	{
		alert("地址一不能为空");
		return false;
	}
	
	if($$('city').value == ""){
		alert("酒店所在城市不能为空");
		return false;
	}
	
	if($$('postas').value == ""){
		alert("邮编不能为空");
		return false;
	}

	if($$('country').value == "")
	{
		alert("请选择你的酒店所在的国家！");
		return false;
	}
	
	if($$('region').value == "")
	{
		alert("请选择您的酒店所在的地区");
		return false;
	}
	if($$('province').value == "")
	{
		alert("酒店所在的省份不能为空");
		return false;
	}
	if($$('telephone').value == "")
	{
		alert("酒店固定电话不能为空!");
		return false;
	}

	if($$('fax').value == "")
	{
		alert("酒店传真号不能为空");
		return false;
	}
	return true;
}

function encodeHotelForm(hotelForm)
{

	if (hotel == null) hotel = {};
	if($$('table-title').innerHTML == "添加酒店信息")
	
	
	hotel.id = "";
	hotel.cname = $$('cname').value;
	hotel.ename = $$('ename').value;
	hotel.address1 = $$('address1').value;
	hotel.address2 = $$('address2').value;
	hotel.address3 = $$('address3').value;
	hotel.city = $$('city').value;
	hotel.province = $$('province').value;
	hotel.country = $$('country').value;
	hotel.postAs = $$('postas').value;
	hotel.region = $$('region').value;
	hotel.telephone = $$('telephone').value;
	hotel.fax = $$('fax').value;
}

function onSubmit()
{
	var hotelForm = $$('hotel-form');

	if (!checkHotelForm(hotelForm))return;
	encodeHotelForm(hotelForm);
	
	var callback1 = function(result)
	{
		alert("恭喜您，添加酒店信息操作成功！");
		hotelId = result.hotelId;
		window.location ="#";
	};
	var callback2 = function(result)
	{
		alert("恭喜您，更新酒店信息操作成功！");
		window.location ="#";
	};
	
	var operation;
	if($$('table-title').innerHTML == "添加酒店信息")
	{
		
	operation = new Operation("酒店.高级管理.添加酒店信息");
	operation.hotel = hotel;
	operation.execute(callback1);
	}
	
	if($$('table-title').innerHTML == "修改酒店信息")
	{
		
		operation = new Operation("酒店.高级管理.更新酒店信息");
		operation.hotel = hotel;
		operation.hotelId = hotelId;
		operation.execute(callback2);		
	}
}

function fillHotel()
{
	var callback = function(result)
	{	
		ruite.form.decode(result.hotel, $$("hotel-form"));
	}
	
	var operation = new Operation("酒店.高级管理.查看酒店信息");
	operation.hotelId = hotelId;
	operation.execute(callback);
}

function onEdit(data)
{
	
	$('#myModal').modal('show');
	$("#save").show();
	$("#cancel").text("取消");
	$("#myModalLabel").text("修改酒店经理信息");
	ruite.form.edit($$("manager-form"));
	fillManager();
	
}

/** 查看信息 */
function onView(data)
{
	
	$('#myModal').modal('show');
	$("#save").hide();
	$("#myModalLabel").text("酒店经理信息详情");
	ruite.form.readonly($$("manager-form"));
	fillManager();
}

/** 删除信息 */
function onDelete(data)
{
	var callback = function ()
	{

		alert("成功删除酒店经理‘" + data.name + "’!");
		tableList.refresh();

	}
	if(!confirm("确认删除‘" + data.name + "’吗?请谨慎操作！！！"))	return;
	var operation = new Operation("酒店.高级管理.删除酒店经理");
	operation.managerId = data.id;
	operation.execute(callback);
} 

function initTable()
{

	var operations = 
		[
		 {name: "查看",onclick: onView },
		 {name: "修改",onclick: onEdit },
		 {name: "删除",onclick: onDelete }

		 ];


	var titles = 
		[
		 {text:"姓名", width:"20%"},
		 {text:"电子邮件", width:"20%"},
		 {text:"办公电话", width:"20%"},
		 {text:"操作", width:"20%"}
		 ];
	var columns =  
		[
		 function(data) { return data.name; },
		 function(data) { return data.email; },
		 function(data) { return data.officePhone; },
		 function(data) 
		 {
		     managerId = data.id; 
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.高级管理.列酒店经理信息");
	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('container_div'));
	tableList.refresh();
}



function fillManager()
{
	var callback = function(result)
	{	
	 
		ruite.form.decode(result.manager, $$("manager-form"));		
	}
	
	var operation = new Operation("酒店.高级管理.查看酒店经理信息");
	operation.managerId = managerId;
	operation.execute(callback);
}

function onSubmitManager()
{
	var managerForm = $$('manager-form');

	if (!checkManagerForm(managerForm))return;
	encodeManagerForm(managerForm);
	
	var callback = function(result)
	{
		alert("恭喜您，更新酒店经理信息操作成功！");
		window.location ="#";
		window.parent.frames.main.location.reload();
	};
	
	var operation;	
	operation = new Operation("酒店.高级管理.更新酒店经理信息");
	operation.manager = manager;
	operation.managerId = managerId;
	operation.execute(callback);
}

function checkManagerForm(managerForm)
{
	if($$('name').value == ""){
		alert("姓名不能为空！");
		return false;
	}
	if($$('email').value == "")
	{
		alert("电子邮件不能为空！");
		return false;
	}
	
	if($$('officePhone').value == "")
	{
		alert("办公电话不能为空");
		return false;
	}
	
	if($$('managerFax').value == ""){
		alert("传真号不能为空");
		return false;
	}
	
	if($$('mobilePhone').value == ""){
		alert("手机号不能为空");
		return false;
	}
	return true;
}

function encodeManagerForm(managerForm)
{

	if (manager == null) manager = {};
	
	manager.name = $$('name').value;
	manager.email = $$('email').value;
	manager.officePhone = $$('officePhone').value;
	manager.mobilePhone = $$('mobilePhone').value;
	manager.managerFax = $$('managerFax').value;
}
