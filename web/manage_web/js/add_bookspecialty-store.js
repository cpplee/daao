$import("rpc.js");
$import("html/form.js");

var store;
var storeId;



function onLoadStore(){
	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	PagePos = args.PagePos;
	var offset = 10; 
	

	
 if (sourcePage == "view4") {
		storeId = args.storeId;
		ruite.form.readonly($$("store-form"));
		fillStore();
	} else if (sourcePage == "edit4") {
		storeId = args.storeId;
		fillStore();
	}

}






function fillStore() {

	var callback = function(result) {
		ruite.form.decode(result.store, $$("store-form"));
	}
	var operation = new Operation("酒店.酒店设置.专门店信息列表.查看专门店信息");
	operation.storeId = storeId;
	operation.execute(callback);
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
