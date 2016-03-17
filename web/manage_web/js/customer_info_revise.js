$import("html/form.js");

var comAccountId;
var comAccount;
var sourcePage;
var comAccountName;

function pageLoad()//以后可能还需要增加新内容
{
	var args = util.getURLArgs();
	comAccountId = args.comAccountId;
	sourcePage = args.sourcePage;	
	if(sourcePage == "edit" && comAccountId != null)
	{
		
		fillComAccount();		
	}
	addButton();	
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

function addButton()
{
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

	var callback2 = function()
	{
		alert("恭喜您，更改客户信息操作成功！");		
		window.location ="#";
	};
		operation = new Operation("酒店.销售管理.客户信息.更新客户信息");
		operation.comAccountId = comAccountId;	
		operation.comAccount = comAccount;
		operation.execute(callback2);
	
	
}
