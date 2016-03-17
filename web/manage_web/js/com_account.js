$import("html/form.js");

var comAccountId;
var comAccount;
var sourcePage;
/**添加变量*/
var comAccountContactId;
var comAccountName;
var comAccountContactName;
var comAccountBookRoom;
var comAccountBookBanquet;
var comAccountActivityPlanId;
var comAccountBookRoomId;
var comAccountActivityPlan;
var comAccountType;
var comAccountTalentAnalysis;


function pageLoad()//以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	comAccountId = args.comAccountId;
	sourcePage = args.sourcePage;	
	if (sourcePage == null)
	{		
		$$('title').innerHTML="添加客户信息";
	}
	else if(sourcePage == "view" && comAccountId !=null)
	{
	
		$$('submit').style.display = "none";
		$$('addContact').style.display = "none";
		$$('addActivity').style.display = "none";
		$$('addRoom').style.display = "none";
		$$('addBanquet').style.display = "none";
		ruite.form.readonly($$("account-form"));
		ruite.form.readonly($$("accountcontact-form"));
		fillComAccount();
	
		//fillContact();
	}
	else if(sourcePage == "edit" && comAccountId != null)
	{
		
		fillComAccount();
		//fillContact();
	}
	else
	{
		alert('进入用户信息页面参数错误：请重新操作！');
		window.location = "../index.html";
	}
	addButton();
	
}
function onView(data)
{
	parent.main.document.body.scrollTop = 0;
	comAccountContactId = data.id;
	fillContactInfo(data);	
	$('#Contact-Modal').modal('show');
	
}

function onEdit(data)
{
	
	window.location.href = "add_contact.html?comAccountId=" + comAccountId + "&sourcePage=edit&comAccountName=" 
	+ comAccountName+"&comAccountContactId="+data.id;

	
}
function onDelete(data)
{
	var callback = function ()
	{
		alert("成功删除客户联系人‘" + data.comContactName + "’!");
		tableList.refresh();

	}
	if(!confirm("确认删除‘" + data.comContactName + "’用户吗?该操作不可逆！删除后会删除其他表，请谨慎！！！"))	return;
	var operation = new Operation("酒店.销售管理.客户信息.删除客户联系人");
	operation.comAccountContactsId = data.id;
	operation.execute(callback);
}

function fillContactInfoFormat(comAccountContact, contactInfoform)
{
	var formatters = 
	{
		"dob": ruite.format.date,	
	};
	ruite.form.decode(comAccountContact, contactInfoform, formatters);
}

//填充联系人具体信息
function fillContactInfo(data)
{ 
	var callback = function(result)
	{	
		$("#company").val(comAccountName);
		fillContactInfoFormat(result.comAccountContact, $$("accountcontact-form"))	
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看联系人信息");
	operation.comAccountContactId = data.id;
	operation.execute(callback);
}

//查看时填充公司客户信息
function fillComAccount()
{
	
	var callback = function(result)
	{	
		comAccountName = result.comAccount.cname;
		ruite.form.decode(result.comAccount, $$("account-form"));
		$("#salername").val(result.comAccount.saler.name);
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看客户信息");
	operation.comAccountId = comAccountId;
	operation.execute(callback);
}
//查看时填充联系人列表
function fillContact()
{
	
	if(sourcePage)
	{
		$("div[id!=bookingrooms] [id=input-page]").attr("id","in");
		$("div[id!=bookingrooms] span[id=totalSpan]").attr("id","total");
		$("div[id!=bookingrooms] span[id=recordSpan]").attr("id","record");
	
	var	operations = 
			[
			 {name: "查看",onclick: onView },
			 {name: "修改",onclick: onEdit },
			 {name: "删除",onclick: onDelete },	 
			 ];

	var titles = 
		[
		 
		 {text:"联系人姓名", width:"10%"},
		 {text:"联系人职位", width:"10%"},
		 {text:"联系人电话", width:"10%"},
		 {text:"联系人手机", width:"10%"},
		 {text:"联系人邮箱", width:"10%"},
		 {text:"联系人传真", width:"10%"},
		 {text:"操作", width:"15%"}
		 ];

	var columns =  
		[
		
		 function(data)
		 {	
			
			 return data.comContactName; 
		 },
		 function(data) { return data.comContactPosition; },
		 function(data) { return data.comContactTel; },
		 function(data) { return data.comContactMobile; },
		 function(data) { return data.comContactEmail; },
		 function(data) { return data.comContactFax; },
		 function(data) 
		 {
			 return  TableList.link1(operations, data);
		 }

		 ];

	tableOperation = new Operation("酒店.销售管理.客户信息.列联系人信息");
	tableOperation.comAccountId =comAccountId;
	tableList = new TableList(tableOperation, titles, columns);
	tableList.create($$('contacts'));
	tableList.refresh();
	addButton();
	}

}

function checkAccountForm(accountForm)
{
    $("form :input").trigger("blur");
    $("form :input").trigger("change");
    if ($(".form-group").hasClass("has-error")) {
        return false;
    }

	return true;
}

function encodeaccountForm(accountForm)
{

	if (comAccount == null) comAccount = {};
	if($$('title').innerHTML == "添加客户信息")
	comAccount.comAccountCode = "111222333";

	comAccount.id = "";
	comAccount.cname = $$('cname').value;
	comAccount.address1 = $$('address-1').value;
	comAccount.address2 = $$('address-2').value;
	comAccount.address3 = $$('address-3').value;
	comAccount.city = $$('city').value;
	comAccount.province = $$('prov').value;
	comAccount.country = $$('country').value;
	comAccount.postal = $$('postal').value;
	comAccount.comTelphone = $$('comTelphone').value;
	comAccount.comFax = $$('comFax').value;
	comAccount.comEmail = $$('comEmail').value;
	comAccount.webAddress = $$('webAddress').value;
	comAccount.comWechat = $$('comWechat').value;
	comAccount.comAccountCode = $$('comAccountCode').value;
	comAccount.marketSegmentId = $$('marketSegmentId').value;
	comAccount.comtypeId = $$('comtypeId').value;
	comAccount.comFrequency = $$('comFrequency').value;
	comAccount.keynotes = $$('keynotes').value;
	
	comAccountName = comAccount.cname;
	
}

function onSubmit()
{
	var accountForm = $$('account-form');

	if (!checkAccountForm(accountForm))return;

	encodeaccountForm(accountForm);

	var callback1 = function(result)
	{
		alert("恭喜您，添加客户操作成功！");
		$$('AccountDetail').setAttribute("style","display:");
		comAccountId = result.comAccountId;
		window.location ="#";
	};

	var callback2 = function()
	{
		alert("恭喜您，更改客户信息操作成功！");
		$$('AccountDetail').setAttribute("style","display:");
		window.location ="#";
	};

	var operation;
	if($$('title').innerHTML == "添加客户信息")
	{		
		operation = new Operation("酒店.销售管理.客户信息.添加客户");
		//alert(1);
		operation.comAccount = comAccount;
		operation.execute(callback1);
	}
	
	if($$('title').innerHTML == "编辑客户信息")
	{
		//alert(2);
		operation = new Operation("酒店.销售管理.客户信息.更新客户信息");
		operation.comAccountId = comAccountId;	
		operation.comAccount = comAccount;
		operation.execute(callback2);
	}
	
}


function editContact()
{

}

function addContact()
{
	//alert(comAccount.cname);
	window.location.href = "add_contact.html?comAccountId=" + comAccountId + "&comAccountName=" 
	+comAccount.cname;
	
}


function onGenerateAccountCode()
{
	$$('comAccountCode').setAttribute("value","111222333");
}


//列活动
function list_activity()
{
	if(sourcePage)
	{
		$("div[id!=activity] [id=input-page]").attr("id","in");
		$("div[id!=activity] span[id=totalSpan]").attr("id","total");
		$("div[id!=activity] span[id=recordSpan]").attr("id","record");		
		var	operations = 
			[
			 {name: "查看",onclick: onViewActivity },
			 {name: "修改",onclick: onEditActivity },
			 {name: "删除",onclick: onDeleteActivity },	 
			 ];

		var titles = 
			[
			 {text:"拜访人物", width:"10%"},
			 {text:"拜访地点", width:"10%"},
			 {text:"拜访日期", width:"10%"},
			 {text:"拜访时间", width:"10%"},
			 {text:"操作", width:"10%"},
			 ];

		var columns =  
			[

			 function(data) { return data.activityPerson; },
			 function(data) { return data.activityAddress; },
			 function(data) { return dateToStr(data.activityDate);},
			 function(data) { return TimeToStr(data.activityTime);},
			 function(data) 
			 {
				 return  TableList.link1(operations, data);
			 }

			 ];

		tableOperation = new Operation("酒店.销售管理.客户信息.列活动");
		tableOperation.comAccountId = comAccountId;
		tableList = new TableList(tableOperation, titles, columns);
		tableList.create($$('activity'));
		tableList.refresh();	
		addButton();
		
	}
}

function onViewActivity(data)
{
	parent.main.document.body.scrollTop = 0;	
	$('#Activity-myModal').modal('show');
	fillActivity(data);
	ruite.form.readonly($$("activity-form"));	
}

function onEditActivity(data)
{
	window.location.href = "addActivity.html?comAccountActivityPlanId="+data.id + "&sourcePage=edit&comAccountName=" + comAccountName;
}

function onDeleteActivity(data)
{
	var callback = function ()
	{
		alert("成功删除拜访计划!");
		tableList.refresh();

	}
	if(!confirm("确认删除拜访计划吗?该操作不可逆！删除后会删除其他表，请谨慎！！！"))	return;
	var operation = new Operation("酒店.销售管理.客户信息.删除拜访计划");
	operation.comAccountActivityPlanId = data.id;
	operation.execute(callback);
}
function onConfirmRoom(data)
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
function onCancelRoom(data)
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

function fillActivityFormat(comAccountActivityPlan, activityform)
{
	var formatters = 
	{
		"activityDate": ruite.format.date,
		"activityTime": ruite.format.time,
		
	};
	ruite.form.decode(comAccountActivityPlan, activityform, formatters);
}

function fillActivity(data)
{ 
	var callback = function(result)
	{		
		$("#companyname").val(comAccountName);
		fillActivityFormat(data,$$("activity-form"));	
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看拜访活动信息");
	operation.comAccountActivityPlanId = data.id;
	operation.execute(callback);	
}
//列订单
function list_bookingRoom ()
{
	if(sourcePage)
	{
		$("div[id!=bookingrooms] [id=input-page]").attr("id","in");
		$("div[id!=bookingrooms] span[id=totalSpan]").attr("id","total");
		$("div[id!=bookingrooms] span[id=recordSpan]").attr("id","record");
		var	operations = 
			[
             {name: "确认",onclick: onConfirmRoom },
             {name: "取消",onclick: onCancelRoom },
			 {name: "查看",onclick: onViewRoom },
			 {name: "修改",onclick: onEditRoom },
			 {name: "删除",onclick: onDeleteRoom },	 
			 ];
		
		var titles = 
			[	 
			 {text:"到达时间", width:"10%"},
			 {text:"离开时间", width:"10%"},
			 {text:"预订数量", width:"10%"},
			 {text:"房间类型", width:"10%"},
			 {text:"房间均价", width:"10%"},
			 {text:"订单状态", width:"10%"},
			 {text:"操作", width:"15%"}

			 ];

		var columns =  
			[
			 function(data) { 
				//util.debug(data,9);
				 return dateToStr(data.roomArrive); },
			 function(data) { return dateToStr(data.roomDepart); },
			 function(data) { return data.roomNum; },
			 function(data) { return data.roomType; },
			 function(data) { return data.roomAvgRate; },
			 function(data) {  if(data.roomStatus=='P'){
				return data.roomStatus='待审核';
			 }else{
				return data.roomStatus='审核通过';
			 } },
			 function(data) 
			 {
				 return  TableList.link1(operations, data);
			 }

			 ];

		tableOperation = new Operation("酒店.销售管理.客户信息.列预订房间订单");
		tableOperation.comAccountId = comAccountId;
		tableList = new TableList(tableOperation, titles, columns);
		tableList.create($$('bookingrooms'));
		tableList.refresh();
		addButton();
	}	
}


function fillBookRoomFormat(comAccountBookRoom, bookRoomform)
{
	var formatters = 
	{
		"roomArrive": ruite.format.date,
		"roomDepart": ruite.format.date,
		
	};
	ruite.form.decode(comAccountBookRoom, bookRoomform, formatters);
}


function fillBookingRoomsInfo(data)
{ 
	var callback = function(result)
	{	
	
		$("#roomcompanyname").val(comAccountName);
		fillBookRoomFormat(result.comAccountBookRoom, $$("bookingRooms-form"))
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看预订房间订单");
	operation.comAccountBookRoomId = data.id;
	operation.execute(callback);
}
function onViewRoom(data)
{
	parent.main.document.body.scrollTop = 0;
	$('#BookingRooms-Modal').modal('show');
	fillBookingRoomsInfo(data);	
	ruite.form.readonly($$("bookingRooms-form"));
}

function onEditRoom(data)
{
	
	window.location.href = "booking_room.html?comAccountId=" + comAccountId + "&sourcePage=edit&comAccountName=" 
	+ comAccountName+"&comAccountBookRoomId="+data.id;

}

function onDeleteRoom(data)
{
	
	var callback = function ()
	{
		alert("成功删除房间订单!");
		tableList.refresh();

	}
	if(!confirm("确认删除房间订单吗?该操作不可逆！删除后会删除其他表，请谨慎！！！"))	return;
	var operation = new Operation("酒店.销售管理.客户信息.删除房间订单");
	operation.comAccountBookRoomId = data.id;
	operation.execute(callback);
	
}






//确认预定房间
function onConfrimBanquet(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	if(!confirm("是否确认通过审核？"))	return;
	var operation = new Operation("酒店.高级管理.宴会会议厅预定管理.确认销售宴会会议厅订单");
	operation.id = data.id;
	operation.execute(callback);
}
//取消审核
function onCancelBanquet(data)
{
	var callback = function ()
	{

		tableList.refresh();

	}
	if(!confirm("是否取消已审核通过的订单？"))	return;
	var operation = new Operation("酒店.高级管理.宴会会议厅预定管理.取消销售宴会会议厅订单审核");
	operation.id = data.id;
	operation.execute(callback);
}


function list_bookingBanquet()
{
	if(sourcePage)
	{
		$("div[id!=bookingbanquet] [id=input-page]").attr("id","in");
		$("div[id!=bookingbanquet] span[id=totalSpan]").attr("id","total");
		$("div[id!=bookingbanquet] span[id=recordSpan]").attr("id","record");
		var	operations = 
			[
			 {name: "确认",onclick: onConfrimBanquet },
			 {name: "取消",onclick: onCancelBanquet },
			 {name: "查看",onclick: onViewBanquet },
			 {name: "修改",onclick: onEditBanquet },
			 {name: "删除",onclick: onDeleteBanquet },	 
			 ];
		
		var titles = 
			[	 
			 {text:"宴会厅名称", width:"10%"},
			 {text:"到达时间", width:"10%"},
			 {text:"离开时间", width:"10%"},
			 {text:"宴会厅价格", width:"10%"},
			 {text:"订单状态", width:"10%"},
			 {text:"操作", width:"15%"}

			 ];

		var columns =  
			[
			 function(data) { return data.banquetinfo.banName; },
			 function(data) { return dateToStr(data.banquetArrive); },
			 function(data) { return dateToStr(data.banquetDepart); },
			 function(data) { return data.banquetRate; },
			 function(data) { if(data.banquetStatus=='P'){
				 return data.banquetStatus='待审核';
				 
			 }else{
				 return data.banquetStatus='审核通过';
			 } },
			
			 function(data) 	
			 {
				 return  TableList.link1(operations, data);
			 }

			 ];

		tableOperation = new Operation("酒店.销售管理.客户信息.列宴会厅订单");
		tableOperation.comAccountId = comAccountId;
		tableList = new TableList(tableOperation, titles, columns);
		tableList.create($$('bookingbanquet'));
		tableList.refresh();
		addButton();
	}
	
}

function onViewBanquet(data)
{
	
	parent.main.document.body.scrollTop = 0;
	$('#BookingBanquet-Modal').modal('show');
	fillBookingBanquet(data);
	ruite.form.readonly($$("banquet-form"));
}

function onEditBanquet(data)
{	
	window.location.href = "booking_banquet.html?comAccountId=" + comAccountId + "&sourcePage=edit&comAccountName=" 
	+ comAccountName+"&comAccountBookBanquetId="+data.id;
}

function onDeleteBanquet(data)
{
	var callback = function ()
	{
		alert("成功删宴会厅订单!");
		tableList.refresh();

	}
	if(!confirm("确认删除宴会厅订单吗?该操作不可逆！删除后会删除其他表，请谨慎！！！"))	return;
	var operation = new Operation("酒店.销售管理.客户信息.删除宴会厅订单");
	operation.comAccountBookBanquetId = data.id;
	operation.execute(callback);
}

function fillBookBanquetFormat(comAccountBookBanquet, bookBanquetform)
{
	var formatters = 
	{
		"banquetArrive": ruite.format.date,
		"banquetDepart": ruite.format.date,
		
	};
	ruite.form.decode(comAccountBookBanquet, bookBanquetform, formatters);
}

function fillBookingBanquet(data)
{ 
	var callback = function(result)
	{		
		$("#BanquetCompanyName").val(comAccountName);
		fillBookBanquetFormat(result.comAccountBookBanquet, $$("banquet-form"));
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看预订宴会厅订单");
	operation.comAccountBookBanquetId = data.id;
	operation.execute(callback);
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

function addContent()
{
	if($("#contacts-tab").attr("aria-expanded") == "true")		
	{
		window.location.href = "add_contact.html?comAccountId=" + comAccountId + "&sourcePage=add&comAccountName=" 
		+ comAccountName;		
	}
	if($("#activity-tab").attr("aria-expanded") == "true")
	{		
		
		window.location.href = "addActivity.html?comAccountId=" + comAccountId + "&sourcePage=add&comAccountName=" 
		+ comAccountName;
		
	}
	if($("#bookingsrooms-tab").attr("aria-expanded") == "true")
	{
		
		window.location.href = "booking_room.html?comAccountId=" + comAccountId + "&sourcePage=add&comAccountName=" 
		+ comAccountName;
		
	}
	if($("#bookingbanquet-tab").attr("aria-expanded") == "true")
	{
		
		window.location.href = "booking_banquet.html?comAccountId=" + comAccountId + "&sourcePage=add&comAccountName=" 
		+ comAccountName;
		
	}
}
function addButton()
{
	//var m = $("div[id=contacts] button[title=addbutton]");
	var a = $("div[id=contacts] button[title=addbutton]");
	var b = $("div[id=activity] button[title=addbutton]");
	var c = $("div[id=bookingrooms] button[title=addbutton]");
	var d = $("div[id=bookingbanquet] button[title=addbutton]");

	if($("#contacts-tab").attr("aria-expanded") && (a.length == 0))
	{
		var $li = $("<button title='addbutton' class='btn btn-success addbutton-style' type='button'>添加</button>");
		var $a = $("div[id=contacts] .input-go-page");
		$li.insertAfter($a);
		$(".addbutton-style").attr("onclick","addContent();");
	}

	if($("#activity-tab").attr("aria-expanded") && (b.length == 0))
	{
		var $li = $("<button title='addbutton' class='btn btn-success addbutton-style' type='button'>添加</button>");
		var $a = $("div[id=activity] .input-go-page");
		$li.insertAfter($a);
		$(".addbutton-style").attr("onclick","addContent();");
	}

	if($("#bookingsrooms-tab").attr("aria-expanded") && (c.length == 0))
	{
		var $li = $("<button title='addbutton' class='btn btn-success addbutton-style' type='button'>添加</button>");
		var $a = $("div[id=bookingrooms] .input-go-page");
		$li.insertAfter($a);
		$(".addbutton-style").attr("onclick","addContent();");
	}

	if($("#bookingbanquet-tab").attr("aria-expanded") && (d.length == 0))
	{
		var $li = $("<button title='addbutton' class='btn btn-success addbutton-style' type='button'>添加</button>");
		var $a = $("div[id=bookingbanquet] .input-go-page");
		$li.insertAfter($a);
		$(".addbutton-style").attr("onclick","addContent();");
	}	
}

//为了修改联系人信息ID实现控制栏的正常显示，所有的相似代码起相同作用
function ChangeId()
{
	$("div[id!=activity] [id=input-page]").attr("id","in");
	$("div[id!=activity] span[id=totalSpan]").attr("id","total");
	$("div[id!=activity] span[id=recordSpan]").attr("id","record");
}

function Business_analysis()
{
	window.location.href = "analysis.html?comAccountId="+comAccountId+"&comAccountName="+comAccountName;
}

function showTalentAnalysis()
{
	parent.main.document.body.scrollTop = 0;
	$('#TalentAnalysis-Modal').modal('show');
	ruite.form.edit($$("talent_analysis_form"));
}

function showTalentAnalysis1()
{
	parent.main.document.body.scrollTop = 0;
	$('#TalentAnalysis-Modal').modal('show');
	ruite.form.readonly($$("talent_analysis_form"));
	fillTableTalent();
}
function updateComAccountType()
{
	
	var callback = function(result)
	{		
		;
	}
	if($("#TotalScore3").val() <= 27 )
	{
		comAccountType = "潜在客户";
	}
	if($("#TotalScore3").val() > 27 && $("#TotalScore3").val() <= 38)
	{
		comAccountType = "潜力客户";
	}
	if($("#TotalScore3").val() > 38 &&　$("#TotalScore3").val() <= 49)
	{
		comAccountType = "忠实客户";
	}
	if($("#TotalScore3").val() > 50)
	{
		comAccountType = "核心客户";
    }
	var operation = new Operation("酒店.销售管理.客户信息.设置公司客户等级");
	operation.comAccountId = comAccountId;
	operation.comAccountType = comAccountType;
	operation.execute(callback);
}

function encodeTalentAnalysisForm(TalentForm)
{	
	if(comAccountTalentAnalysis == null) comAccountTalentAnalysis={};
	var parsers = 
	{
			
	};
	comAccountTalentAnalysis = ruite.form.encode(TalentForm, parsers);
}

function addTalentAnalysis()
{
	var TalentForm = $$('talent_analysis_form');
	
	encodeTalentAnalysisForm(TalentForm);
	
	var callback = function(result)
	{		
		
	}
	var operation = new Operation("酒店.销售管理.客户信息.添加客户潜力分析结果");
	operation.comAccountId = comAccountId;
	operation.comAccountTalentAnalysis = comAccountTalentAnalysis;
	operation.execute(callback);
}

function fillTableTalent()
{
	var callback = function(result)
	{	
		if(result.comAccountTalentAnalysis)
		{
			ruite.form.decode(result.comAccountTalentAnalysis, $$("talent_analysis_form"));
		}		
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看客户潜力分析结果");
	operation.comAccountId = comAccountId;
	operation.execute(callback);
}