$import("rpc.js");
$import("html/form.js");
var comAccountContact;
var sourcePage;
var comAccounName;
var comAccountId;
var comAccountContactId;

function pageLoad()//后面可能还有修改这个函数
{
	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	comAccountId = args.comAccountId; 
	comAccounName = args.comAccountName;
	comAccountContactId = args.comAccountContactId;
	
	$$('account').setAttribute("value",comAccounName);
	$("#account").attr("disabled","disabled");
	
	if (sourcePage == null && comAccountId != null)
	{
		$("#title").text("新建联系人信息");
	}
	else if(sourcePage == "add" && comAccountId != null)
	{
		$("#title").text("添加联系人信息");
		$$('submit').style.display = "none";
	}
	else if(sourcePage == "view" && comAccountId != null)
	{
		$$('submit').style.display = "none";
	}
	else if(sourcePage == "edit"  && comAccountId != null) 
	{	
		
		$("#title").text("修改联系人信息");
		fillContactInfo();
	}
	else
	{
		alert('进入用户信息页面参数错误：请重新操作！');
		window.lacation = "../index.html";
	}

}

function checkContactForm(contactForm)
{
    $("form :input").trigger("blur");
    if ($(".form-group").hasClass("has-error")) {
        return false;
    }
	return true;
}

function encodeContactForm(contactForm)
{	
	if(comAccountContact == null) comAccountContact={};
	var parsers = 
	{
    	"dob": ruite.parse.date
	};
	comAccountContact = ruite.form.encode(contactForm, parsers);
}



function onSubmit()
{
	var contactForm = $$('contact-form');

	if (!checkContactForm(contactForm))return;

	encodeContactForm(contactForm);

	var callback1 = function()
	{
		if($("#title").text() == "添加联系人信息")
		{
			alert("恭喜您，添加客户联系人操作成功！");
		}
		if($("#title").text() == "新建联系人信息")
		{
			alert("恭喜您，新建客户联系人操作成功！");
		}
		window.location ="#";
	};
	
	var callback2 = function()
	{
		alert("恭喜您，更新客户联系人操作成功！");
		window.location ="#";
	};
	

	var operation;
	if($("#title").text() == "添加联系人信息" || $("#title").text() == "新建联系人信息")
	{
	operation = new Operation("酒店.销售管理.客户信息.添加客户联系人");
	operation.comAccountContact = comAccountContact;
	operation.comAccountId = comAccountId;
	operation.execute(callback1);
	}
	if($("#title").text() == "修改联系人信息")
	{
		operation = new Operation("酒店.销售管理.客户信息.更新客户联系人信息");
		operation.comAccountContact = comAccountContact;
		operation.comAccountContactId = comAccountContactId;
		operation.execute(callback2);
	}


}


function fillContactInfoFormat(comAccountContact, Contactform)
{
	var formatters = 
	{
		"dob": ruite.format.date,
		
	};
	ruite.form.decode(comAccountContact, Contactform, formatters);
}


function fillContactInfo()
{ 
	var callback = function(result)
	{			
		fillContactInfoFormat(result.comAccountContact, $$("contact-form"));
		
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看联系人信息");
	operation.comAccountContactId = comAccountContactId;
	operation.execute(callback);
}
//查
