/**
 * 
 */
$import("rpc.js");
$import("html/form.js");




var comAccountContactId=null;
var memberBookingBanquet=null;



function pageLoad()//以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	comAccountContactId = args.comAccountContactId;
   // alert(comAccountContactId);
	fillBanquetInfo(comAccountContactId);
	$('#startDate').attr("disabled",true);
	$('#endDate').attr("disabled",true);
}



//填充联系人具体信息
function fillBanquetInfo(comAccountContactId)
{ 
	var callback = function(result)
	{	
		fillContactInfoFormat(result.memberBookingBanquet, $$("accountcontact-form"));	
	}
	var operation = new Operation("酒店.酒店管理.填充宴会人员信息");
	operation.id = comAccountContactId;
	operation.execute(callback);
}

function fillContactInfoFormat(memberBookingBanquet, contactInfoform)
{
	var formatters = 
	{
		"startDate": ruite.format.date,
		"endDate": ruite.format.date,
	};
	ruite.form.decode(memberBookingBanquet, contactInfoform, formatters);
}



function onSubmit()
{
	var banquetForm = $$('accountcontact-form');

	if (!checkAccountForm(banquetForm))return;

	encodeaccountForm(banquetForm);

	var callback = function(result)
	{
		alert("恭喜您，更新宴会填充人员操作成功！");
		window.location ="#";
	};



	var operation;

		operation = new Operation("酒店.酒店管理.更新宴会人员填充信息");
		operation.id = comAccountContactId;
		operation.memberBookingBanquet = memberBookingBanquet;
		operation.execute(callback);
	
	
}

function checkAccountForm(banquetForm)
{
    $("form :input").trigger("blur");
    $("form :input").trigger("change");
    if ($(".form-group").hasClass("has-error")) {
    	
        return false;
    }

	return true;
}

function encodeaccountForm(banquetForm)
{	
	if(memberBookingBanquet == null) memberBookingBanquet={};
	
	var parsers = {
			"startDate" : ruite.parse.date,
			"endDate" : ruite.parse.date
		};
	
	memberBookingBanquet = ruite.form.encode(banquetForm, parsers);
}

function goUrl(){
	
	history.go(-1);
	
}