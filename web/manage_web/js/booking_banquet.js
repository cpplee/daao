$import("rpc.js");
$import("html/form.js");

var sourcePage;
var comAccountBookBanquetId;
var comAccountName;
var comAccountId;
var comAccountBookBanquet;

function pageLoad()
{
	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	comAccountBookBanquetId = args.comAccountBookBanquetId;
	comAccountName = args.comAccountName;
	comAccountId = args.comAccountId;
	
	$("#BanquetCompanyName").val(comAccountName);
	$("#BanquetCompanyName").attr("disabled","disabled");
	//$("#banquetHotelName").attr("disabled","disabled");

	if(sourcePage == "add" )
	{				
		$("#title").text("添加公司宴会厅订单");
	}
	if(sourcePage == "edit" && comAccountBookBanquetId != null)
	{
		$("#title").text("修改公司宴会厅订单");
		fillBookingBanquet();
		
	}
}

function checkBookBanquetForm(bookRoomForm)
{
    $("form :input").trigger("blur");
    $("form :input").trigger("change");
    if ($(".form-group").hasClass("has-error")) {
        return false;
    }
    return true;
}

function encodeBookBanquetForm(bookBanquetForm)
{
	if(comAccountBookBanquet == null) comAccountBookBanquet={};
	var parsers = 
	{
		"banquetArrive": ruite.parse.date,
		"banquetDepart": ruite.parse.date,
	};
	comAccountBookBanquet = ruite.form.encode(bookBanquetForm, parsers);

}

function onSubmit()
{
	var banquetForm = $$('banquet-form');

	if (!checkBookBanquetForm())return;

	encodeBookBanquetForm(banquetForm);
	
	var callback1 = function(result)
	{
		if(result.flag==0){
			
			alert("对不起，您所预定的房间已经被预定");
			
		}else{
			
			alert("恭喜您，添加房间预定操作成功！");
			
		}
		
		
		window.location ="#";
	};
	
	var callback2 = function()
	{
		alert("恭喜您，更新宴会厅预订操作成功！");
		window.location ="#";
	};
	

	var operation;
	
	if($("#title").text() == "添加公司宴会厅订单")
	{
	
	operation = new Operation("酒店.销售管理.客户信息.添加宴会厅订单");
	operation.comAccountBookBanquet = comAccountBookBanquet;
	operation.comAccountId = comAccountId;
	operation.execute(callback1);
	}
	if($("#title").text() == "修改公司宴会厅订单")
	{
		operation = new Operation("酒店.销售管理.客户信息.更新宴会厅订单");
		operation.comAccountBookBanquet = comAccountBookBanquet;
		operation.comAccountBookBanquetId = comAccountBookBanquetId;
		operation.execute(callback2);
	}


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

function fillBookingBanquet()
{
	var callback = function(result)
	{			
		
		fillBookBanquetFormat(result.comAccountBookBanquet,  $$("banquet-form"))
	
	}

	var operation = new Operation("酒店.销售管理.客户信息.查看预订宴会厅订单");
	operation.comAccountBookBanquetId = comAccountBookBanquetId;
	operation.execute(callback);
}

