$import("rpc.js");
$import("html/form.js");
var banquetInfo;
var banquetId;



function pageLoadBanquet(){
	

	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	PagePos = args.PagePos;
	var offset = 10; 
	
	
	 if (sourcePage == "view2") {
			
		banquetId = args.banquetId;
		ruite.form.readonly($$("banquet-form"));
		fillBanquet();
		
	} else if (sourcePage == "edit2") {
		banquetId = args.banquetId;
		fillBanquet();
	} 
	
}





// 查看时填充宴会厅信息
function fillBanquet() {

	var callback = function(result) {
		util.debug(result,9);
		ruite.form.decode(result.banquetInfo, $$("banquet-form"));
	}
	var operation = new Operation("酒店.酒店设置.宴会厅信息列表.查看宴会厅信息");
	operation.banquetId = banquetId;
	operation.execute(callback);
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


function uploadfile() {

	if (confirm('确定上传？')) {

		//alert($('#rba_imgurl').val());
		// $("#onRoomSubmit").attr("disabled", false);
		$("#fileupload").submit();

	} else
		return false;
}



function addnewbanquets() {
	ruite.form.edit($$("banquet-form"));
	ruite.form.clear($$("banquet-form"));
}
