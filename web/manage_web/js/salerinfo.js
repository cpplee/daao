/**
 * Created by qichengzong on 2015/4/7.
 */
$import("rpc.js");
$import("html/form.js");
var saler;

$(function(){
	fillsalerInfo();
})


function fillSalerFormat(saler, salerform)
{
	
	var formatters = 
	{
		"birth": ruite.format.date	
	};
	ruite.form.decode(saler, salerform, formatters);
}


function fillsalerInfo()
{ 
	var callback = function(result)
	{	
		//util.debug(result,9);
		fillSalerFormat(result.saler,  $$("salerInfo-form"));
	}
	var operation = new Operation("酒店.通用设置.查看个人信息");
	operation.execute(callback);
}


function checkSalerForm(salerForm)
{	
	
	return true;
}

function encodeSalerForm(salerForm)
{	
	
	if(saler == null) saler={};

	var parsers = 
	{
		"birth": ruite.parse.date	
	};

	saler = ruite.form.encode(salerForm, parsers);

}


function onSubmit()
{
	
	var salerForm = $$('salerInfo-form');

	if (!checkSalerForm(salerForm))return;
	
	encodeSalerForm(salerForm);
	
	var callback1 = function()
	{	
		 $('#myModal_salerinfo').modal('show');
		 ruite.form.readonly($$("salerInfo-form"));
	
	};
	
	var operation;
	operation = new Operation("酒店.通用设置.更新个人信息");
	operation.saler = saler;
	operation.execute(callback1);
}

function reset()
{
	
	ruite.form.edit($$("salerInfo-form"));
	
}

function goUrl(){
	
	history.go(-1);
}
