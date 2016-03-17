$import("rpc.js");
$import("html/form.js");

var resaurantBarsInfo;
var store;
var propmtionActivity;
var resaurantBarsId;




function onLoadRab(){
	
	
	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	PagePos = args.PagePos;
	var offset = 10; 
	
	
	 if (sourcePage == "view3") {
		resaurantBarsId = args.resaurantBarsId;
		ruite.form.readonly($$("resaurantbar-form"));
		fillResaurantBars();
	} else if (sourcePage == "edit3") {
		resaurantBarsId = args.resaurantBarsId;
		fillResaurantBars();
	}
	
}
	

// 查看时填充餐饮店信息
function fillResaurantBars() {

	var callback = function(result) {
		util.debug(result, 9);
		ruite.form.decode(result.resaurantBarsInfo, $$("resaurantbar-form"));
	}
	var operation = new Operation("酒店.酒店设置.餐饮店信息列表.查看餐饮店信息");
	operation.resaurantBarsId = resaurantBarsId;
	operation.execute(callback);
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


function uploadfile() {

	if (confirm('确定上传？')) {

		// $("#onRoomSubmit").attr("disabled", false);
		$("#fileupload").submit();
         
	} else
		return false;
}



function addnewrestaurants() {
	ruite.form.edit($$("resaurantbar-form"));
	ruite.form.clear($$("resaurantbar-form"));
}

