$import("rpc.js");
$import("html/form.js");
var hotel;
var hotelinfoseter;
var hotelRerserContact;
var hotelSaleIncharger;
var hotelMiceIncharger;
var hotelMarketDir;
var hotelManager;
var room;
var banquetInfo;
var resaurantBarsInfo;
var store;
var propmtionActivity;
var hotelId;
var banquetId;
var resaurantBarsId;
var storeId;

function scrollBodyTopTo(pos)
{
	$("html,body").animate({scrollTop:pos},0); 
}

$(function(){
	alert(123);
	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	PagePos = args.PagePos;
	var offset = 10; 
	
	if(PagePos == "hotel")
	{
		//alert(0);
		scrollBodyTopTo($("#section-1").offset().top-offset);   
	}
	if(PagePos == "banquet")
	{
		//alert(0);
		scrollBodyTopTo($("#section-4").offset().top-offset); 
	}
	if(PagePos == "resaurantBars")
	{
		//alert(0);
		scrollBodyTopTo($("#section-5").offset().top-offset); 
	}

	if(PagePos == "store")
	{
		//alert(0);
		scrollBodyTopTo($("#section-6").offset().top-offset); 
	}
	
	
	if (sourcePage == "view1") {
		hotelId = args.hotelId;
		ruite.form.readonly($$("hotel-form"));
		fillHotel();
	} else if (sourcePage == "edit1") {
		hotelId = args.hotelId;
		fillHotel();
	} else if (sourcePage == "view2") {
		banquetId = args.banquetId;
		ruite.form.readonly($$("banquet-form"));
		fillBanquet();
	} else if (sourcePage == "edit2") {
		banquetId = args.banquetId;
		fillBanquet();
	} else if (sourcePage == "view3") {
		resaurantBarsId = args.resaurantBarsId;
		ruite.form.readonly($$("resaurantbar-form"));
		fillResaurantBars();
	} else if (sourcePage == "edit3") {
		resaurantBarsId = args.resaurantBarsId;
		fillResaurantBars();
	} else if (sourcePage == "view4") {
		storeId = args.storeId;
		ruite.form.readonly($$("store-form"));
		fillStore();
	} else if (sourcePage == "edit4") {
		storeId = args.storeId;
		fillStore();
	}

});

// 查看时填充酒店信息
function fillHotel() {

	var callback = function(result) {
		ruite.form.decode(result.hotel, $$("hotel-form"));
	}
	var operation = new Operation("酒店.酒店设置.酒店信息列表.查看酒店信息");
	operation.hotelId = hotelId;
	operation.execute(callback);
}

// 查看时填充宴会厅信息
function fillBanquet() {

	var callback = function(result) {
		ruite.form.decode(result.banquetInfo, $$("banquet-form"));
	}
	var operation = new Operation("酒店.酒店设置.宴会厅信息列表.查看宴会厅信息");
	operation.banquetId = banquetId;
	operation.execute(callback);
}

// 查看时填充餐饮店信息
function fillResaurantBars() {

	var callback = function(result) {
		ruite.form.decode(result.resaurantBarsInfo, $$("resaurantbar-form"));
	}
	var operation = new Operation("酒店.酒店设置.餐饮店信息列表.查看餐饮店信息");
	operation.resaurantBarsId = resaurantBarsId;
	operation.execute(callback);
}

// 查看时填充专门店信息
function fillStore() {

	var callback = function(result) {
		ruite.form.decode(result.store, $$("store-form"));
	}
	var operation = new Operation("酒店.酒店设置.专门店信息列表.查看专门店信息");
	operation.storeId = storeId;
	operation.execute(callback);
}

function checkHotelForm(hotelForm) {
	$("form#hotel-form :input").trigger("blur");
	if ($("form#hotel-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeHotelForm(hotelForm) {
	if (hotel == null)
		hotel = {};
	var parsers = {

	};
	hotel = ruite.form.encode(hotelForm, parsers);
}

function onSubmit() {
	var args = util.getURLArgs();
	sourcePage = args.sourcePage;

	if (sourcePage == "edit1") {
		hotelId = args.hotelId;

		var hotelForm = $$('hotel-form');

		if (!checkHotelForm(hotelForm))
			return;

		encodeHotelForm(hotelForm);

		var callback1 = function() {
			alert("恭喜您，修改酒店信息操作成功！");
			ruite.form.readonly($$("hotel-form"));
			window.location = "#";
		};

		var operation;
		operation = new Operation("酒店.酒店设置.酒店信息列表.更新酒店信息");
		operation.hotelId = hotelId;
		operation.hotel = hotel;
		operation.execute(callback1);

	} else {

		var hotelForm = $$('hotel-form');

		if (!checkHotelForm(hotelForm))
			return;

		encodeHotelForm(hotelForm);

		var callback1 = function() {
			alert("恭喜您，添加酒店信息操作成功！");
			ruite.form.readonly($$("hotel-form"));
			window.location = "#";
		};

		var operation;
		operation = new Operation("酒店.酒店设置.酒店信息录入.添加酒店信息");
		operation.hotel = hotel;
		operation.execute(callback1);
	}

}

function checkHotelSeterForm(hotelSeterForm) {

	$("form#hotelinfo-seter :input").trigger("blur");
	if ($("form#hotelinfo-seter .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeHotelSeterForm(hotelSeterForm) {
	if (hotelinfoseter == null)
		hotelinfoseter = {};
	var parsers = {

	};
	hotelinfoseter = ruite.form.encode(hotelSeterForm, parsers);
}

function onSeterSubmit() {

	var hotelSeterForm = $$('hotelinfo-seter');

	if (!checkHotelSeterForm(hotelSeterForm))
		return;

	encodeHotelSeterForm(hotelSeterForm);

	var callback1 = function() {
		alert("恭喜您，添加酒店信息设置人操作成功！");
		ruite.form.readonly($$("hotelinfo-seter"));
		window.location = "#";
	};

	var operation;
	operation = new Operation("酒店.酒店设置.酒店信息录入.添加信息设置人信息");
	operation.hotelinfoseter = hotelinfoseter;
	operation.execute(callback1);

}

function checkRerserContactForm(hotelRerserContactForm) {
	$("form#resercontact-form :input").trigger("blur");
	if ($("form#resercontact-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeRerserContactForm(hotelRerserContactForm) {
	if (hotelRerserContact == null)
		hotelRerserContact = {};
	var parsers = {

	};
	hotelRerserContact = ruite.form.encode(hotelRerserContactForm, parsers);

}

function onRerserContactSubmit() {

	var hotelRerserContactForm = $$('resercontact-form');

	if (!checkRerserContactForm(hotelRerserContactForm))
		return;

	encodeRerserContactForm(hotelRerserContactForm);

	var callback1 = function() {
		alert("恭喜您，添加客房预订联系人信息操作成功！");
		ruite.form.readonly($$("resercontact-form"));
		window.location = "#";
	};

	var operation;
	operation = new Operation("酒店.酒店设置.酒店信息录入.添加客房预订联系人信息");
	operation.hotelRerserContact = hotelRerserContact;
	util.debug(hotelRerserContact, 9);
	operation.execute(callback1);

}

function checkSaleInchargerForm(hotelSaleInchargerForm) {
	$("form#salecharger-form :input").trigger("blur");
	if ($("form#salecharger-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeSaleInchargerForm(hotelSaleInchargerForm) {
	if (hotelSaleIncharger == null)
		hotelSaleIncharger = {};
	var parsers = {

	};
	hotelSaleIncharger = ruite.form.encode(hotelSaleInchargerForm, parsers);
}

function onSaleInchargerSubmit() {

	var hotelSaleInchargerForm = $$('salecharger-form');

	if (!checkSaleInchargerForm(hotelSaleInchargerForm))
		return;

	encodeSaleInchargerForm(hotelSaleInchargerForm);

	var callback1 = function() {
		alert("恭喜您，添加销售负责人信息操作成功！");
		ruite.form.readonly($$("salecharger-form"));
		window.location = "#";
	};

	var operation;
	operation = new Operation("酒店.酒店设置.酒店信息录入.添加销售负责人信息");
	operation.hotelSaleIncharger = hotelSaleIncharger;
	operation.execute(callback1);

}

function checkMiceInchargerForm(hotelMiceInchargerForm) {
	$("form#michotel-form :input").trigger("blur");
	if ($("form#michotel-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeMiceInchargerForm(hotelMiceInchargerForm) {
	if (hotelMiceIncharger == null)
		hotelMiceIncharger = {};
	var parsers = {

	};
	hotelMiceIncharger = ruite.form.encode(hotelMiceInchargerForm, parsers);
}

function onMiceInchargerSubmit() {

	var hotelMiceInchargerForm = $$('michotel-form');

	if (!checkMiceInchargerForm(hotelMiceInchargerForm))
		return;

	encodeMiceInchargerForm(hotelMiceInchargerForm);

	var callback1 = function() {
		alert("恭喜您，添加会议负责人信息操作成功！");
		ruite.form.readonly($$("michotel-form"));
		window.location = "#";
	};

	var operation;
	operation = new Operation("酒店.酒店设置.酒店信息录入.添加会议负责人信息");
	operation.hotelMiceIncharger = hotelMiceIncharger;
	operation.execute(callback1);

}

function checkMarketDirForm(hotelMarketDirForm) {
	$("form#marketdir-form :input").trigger("blur");
	if ($("form#marketdir-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeMarketDirForm(hotelMarketDirForm) {
	if (hotelMarketDir == null)
		hotelMarketDir = {};
	var parsers = {

	};
	hotelMarketDir = ruite.form.encode(hotelMarketDirForm, parsers);
}

function onMarketDirSubmit() {

	var hotelMarketDirForm = $$('marketdir-form');

	if (!checkMarketDirForm(hotelMarketDirForm))
		return;

	encodeMarketDirForm(hotelMarketDirForm);

	var callback1 = function() {
		alert("恭喜您，添加市场总监信息操作成功！");
		ruite.form.readonly($$("marketdir-form"));
		window.location = "#";
	};

	var operation;
	operation = new Operation("酒店.酒店设置.酒店信息录入.添加市场总监信息");
	operation.hotelMarketDir = hotelMarketDir;
	operation.execute(callback1);

}

function checkHotelManagerForm(hotelManagerForm) {
	$("form#hotelmanager-form :input").trigger("blur");
	if ($("form#hotelmanager-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeHotelManagerForm(hotelManagerForm) {
	if (hotelManager == null)
		hotelManager = {};
	var parsers = {

	};
	hotelManager = ruite.form.encode(hotelManagerForm, parsers);
}

function onHotelManagerSubmit() {

	var hotelManagerForm = $$('hotelmanager-form');

	if (!checkHotelManagerForm(hotelManagerForm))
		return;

	encodeHotelManagerForm(hotelManagerForm);

	var callback1 = function() {
		alert("恭喜您，添加总经理信息操作成功！");
		ruite.form.readonly($$("hotelmanager-form"));
		window.location = "#";
	};

	var operation;
	operation = new Operation("酒店.酒店设置.酒店信息录入.添加酒店经理信息");
	operation.hotelManager = hotelManager;
	operation.execute(callback1);

}

function checkRoomForm(hotelRoomForm) {
	$("form#room-form :input").trigger("blur");
	if ($("form#room-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeRoomForm(hotelRoomForm) {
	if (room == null)
		room = {};
	var parsers = {

	};
	room = ruite.form.encode(hotelRoomForm, parsers);
}

function onRoomSubmit() {

	var hotelRoomForm = $$('room-form');

	if (!checkRoomForm(hotelRoomForm))
		return;

	encodeRoomForm(hotelRoomForm);

	var callback1 = function() {
		alert("恭喜您，添加房间信息操作成功！");
		ruite.form.readonly($$("room-form"));

	};

	var operation;
	operation = new Operation("酒店.酒店设置.酒店信息录入.添加房间信息");
	operation.room = room;
	operation.execute(callback1);

}

function checkBanquetForm(hotelBanquetForm) {
	$("form#banquet-form :input").trigger("blur");
	if ($("form#banquet-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeBanquetForm(hotelBanquetForm) {
	if (banquetInfo == null)
		banquetInfo = {};
	var parsers = {

	};
	banquetInfo = ruite.form.encode(hotelBanquetForm, parsers);
}

function onBanquetSubmit() {
	var args = util.getURLArgs();
	sourcePage = args.sourcePage;

	if (sourcePage == "edit2") {

		banquetId = args.banquetId;
		var hotelBanquetForm = $$('banquet-form');

		if (!checkBanquetForm(hotelBanquetForm))
			return;

		encodeBanquetForm(hotelBanquetForm);

		var callback1 = function() {
			alert("恭喜您，更新宴会厅信息操作成功！");
			ruite.form.readonly($$("banquet-form"));

		};

		var operation;
		operation = new Operation("酒店.酒店设置.宴会厅信息列表.更新宴会厅信息");
		operation.banquetId = banquetId;
		operation.banquetInfo = banquetInfo;
		operation.execute(callback1);

	} else {

		var hotelBanquetForm = $$('banquet-form');

		if (!checkBanquetForm(hotelBanquetForm))
			return;

		encodeBanquetForm(hotelBanquetForm);

		var callback1 = function() {
			alert("恭喜您，添加宴会厅信息操作成功！");
			ruite.form.readonly($$("banquet-form"));

		};

		var operation;
		operation = new Operation("酒店.酒店设置.酒店信息录入.添加宴会厅信息");
		operation.banquetInfo = banquetInfo;
		operation.execute(callback1);
	}
}

function checkResaurantBarForm(hotelResaurantBarForm) {
	$("form#resaurantbar-form :input").trigger("blur");
	if ($("form#resaurantbar-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeResaurantBarForm(hotelResaurantBarForm) {
	if (resaurantBarsInfo == null)
		resaurantBarsInfo = {};
	var parsers = {

	};
	resaurantBarsInfo = ruite.form.encode(hotelResaurantBarForm, parsers);
}

function onResaurantBarSubmit() {

	var args = util.getURLArgs();
	sourcePage = args.sourcePage;

	if (sourcePage == "edit3") {

		resaurantBarsId = args.resaurantBarsId;
		var hotelResaurantBarForm = $$('resaurantbar-form');

		if (!checkResaurantBarForm(hotelResaurantBarForm))
			return;

		encodeResaurantBarForm(hotelResaurantBarForm);

		var callback1 = function() {
			alert("恭喜您，更新餐饮店信息操作成功！");
			ruite.form.readonly($$("resaurantbar-form"));

		};

		var operation;
		operation = new Operation("酒店.酒店设置.餐饮店信息列表.更新餐饮店信息");
		operation.resaurantBarsId = resaurantBarsId;
		operation.resaurantBarsInfo = resaurantBarsInfo;
		operation.execute(callback1);
	} else {
		var hotelResaurantBarForm = $$('resaurantbar-form');

		if (!checkResaurantBarForm(hotelResaurantBarForm))
			return;

		encodeResaurantBarForm(hotelResaurantBarForm);

		var callback1 = function() {
			alert("恭喜您，添加餐饮酒吧信息操作成功！");
			ruite.form.readonly($$("resaurantbar-form"));

		};

		var operation;
		operation = new Operation("酒店.酒店设置.酒店信息录入.添加餐饮酒吧信息");
		operation.resaurantBarsInfo = resaurantBarsInfo;
		operation.execute(callback1);
	}

}

function checkStoreForm(hotelStoreForm) {
	$("form#store-form :input").trigger("blur");
	if ($("form#store-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodeStoreForm(hotelStoreForm) {
	if (store == null)
		store = {};
	var parsers = {

	};
	store = ruite.form.encode(hotelStoreForm, parsers);
}

function onStoreSubmit() {

	var args = util.getURLArgs();
	sourcePage = args.sourcePage;

	if (sourcePage == "edit4") {

		storeId = args.storeId;

		var hotelStoreForm = $$('store-form');

		if (!checkStoreForm(hotelStoreForm))
			return;

		encodeStoreForm(hotelStoreForm);

		var callback1 = function() {
			alert("恭喜您，更新专门店服务操作成功！");
			ruite.form.readonly($$("store-form"));

		};

		var operation;
		operation = new Operation("酒店.酒店设置.专门店信息列表.更新专门店信息");
		operation.storeId = storeId;
		operation.store = store;
		operation.execute(callback1);
	} else {
		
		var hotelStoreForm = $$('store-form');

		if (!checkStoreForm(hotelStoreForm))
			return;

		encodeStoreForm(hotelStoreForm);

		var callback1 = function() {
			alert("恭喜您，添加专门店服务操作成功！");
			ruite.form.readonly($$("store-form"));

		};

		var operation;
		operation = new Operation("酒店.酒店设置.酒店信息录入.添加专门店服务");
		operation.store = store;
		operation.execute(callback1);
	}

}

function checkPropmtionActivityInfoForm(hotelPropmtionActivityInfoForm) {
	$("form#sale-form :input").trigger("blur");
	if ($("form#sale-form .form-group").hasClass("has-error")) {
		return false;
	}
	return true;
}

function encodePropmtionActivityInfoForm(hotelPropmtionActivityInfoForm) {
	if (propmtionActivity == null)
		propmtionActivity = {};
	var parsers = {

	};
	propmtionActivity = ruite.form.encode(hotelPropmtionActivityInfoForm,
			parsers);
}

function onPropmtionActivityInfoSubmit() {

	var hotelPropmtionActivityInfoForm = $$('sale-form');

	if (!checkPropmtionActivityInfoForm(hotelPropmtionActivityInfoForm))
		return;

	encodePropmtionActivityInfoForm(hotelPropmtionActivityInfoForm);

	var callback1 = function() {
		alert("恭喜您，添加促销信息操作成功！");
		ruite.form.readonly($$("sale-form"));

	};

	var operation;
	operation = new Operation("酒店.酒店设置.酒店信息录入.添加促销信息");
	operation.propmtionActivity = propmtionActivity;
	operation.execute(callback1);

}

function uploadfile() {

	if (confirm('确定上传？')) {

		// $("#onRoomSubmit").attr("disabled", false);
		$("#fileupload").submit();

	} else
		return false;
}

function addnewrooms() {
	ruite.form.edit($$("room-form"));
	ruite.form.clear($$("room-form"));
}

function addnewbanquets() {
	ruite.form.edit($$("banquet-form"));
	ruite.form.clear($$("banquet-form"));
}

function addnewrestaurants() {
	ruite.form.edit($$("resaurantbar-form"));
	ruite.form.clear($$("resaurantbar-form"));
}

function addnewstores() {
	ruite.form.edit($$("store-form"));
	ruite.form.clear($$("store-form"));
}

function addnewpromption() {
	ruite.form.edit($$("sale-form"));
	ruite.form.clear($$("sale-form"));
}
