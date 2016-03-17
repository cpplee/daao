/**
 * 
 */
$import("rpc.js");
$import("html/form.js");
var hotelInfoSeter;


	



function fillSalerFormat(hotelInfoSeter, hotelInfoSeterform)
{
	
	var formatters = 
	{
			
	};
	ruite.form.decode(hotelInfoSeter, hotelInfoSeterform, formatters);
}


function fillHotelInfoSeter()
{ 
	var callback = function(result)
	{	
		
		fillSalerFormat(result.hotelInfoSeter,  $$("hotelInfoSeter-form"));
	}
	var operation = new Operation("酒店.通用设置.查看酒店个人信息");
	operation.execute(callback);
}


function checkSalerForm(hotelInfoSeterForm)
{	
	
	return true;
}

function encodeSalerForm(hotelInfoSeterForm)
{	
	
	if(hotelInfoSeter == null) hotelInfoSeter={};

	var parsers = 
	{
		
	};

	hotelInfoSeter = ruite.form.encode(hotelInfoSeterForm, parsers);

}

function onSubmit()
{
	
	var hotelInfoSeterForm = $$('hotelInfoSeter-form');

	if (!checkSalerForm(hotelInfoSeterForm))return;
	
	encodeSalerForm(hotelInfoSeterForm);
	
	var callback1 = function()
	{	
		 $('#myModal_salerinfo').modal('show');
		 ruite.form.readonly($$("hotelInfoSeter-form"));
	
	};
	
	var operation;
	operation = new Operation("酒店.通用设置.更新酒店个人信息");
	operation.hotelInfoSeter = hotelInfoSeter;
	operation.execute(callback1);
}

function reset()
{
	
	ruite.form.edit($$("hotelInfoSeter-form"));
	
}

function goUrl(){
	
	history.go(-1);
}