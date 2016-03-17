$import("rpc.js");
$import("html/form.js");

var sourcePage;
var comAccountActivityPlanId;
var comAccountName;
var comAccountActivityPlan;
var comAccountId;


function pageLoad()
{

	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	comAccountActivityPlanId = args.comAccountActivityPlanId;
	comAccountName = args.comAccountName;
	comAccountId = args.comAccountId;
	if(comAccountName)
	{
		$("#companyname").append("<option>"+comAccountName+"</option>");
		$("#companyname").attr("disabled","disabled");			
	}
	else
	{
		fillCompanyName();
	}
	
	if(sourcePage == "new")
	{
		$("#activitytitle").text("新增拜访行动计划");
	}
	if(sourcePage == "add" )
	{				
		$("#activitytitle").text("添加拜访行动计划");
	}
	if(sourcePage == "edit" && comAccountActivityPlanId != null)
	{
		$("#activitytitle").text("更新拜访行动计划");
		fillActivityInfo();
	}
}

function checkActivityForm(activityForm)
{
    $("form :input").trigger("blur");
    if ($(".form-group").hasClass("has-error")) {
        return false;
    }

	
	return true;
}

function encodeActivityForm(activityForm)
{
	
	if(comAccountActivityPlan == null) comAccountActivityPlan={};

	var parsers = 
	{
		"activityDate": ruite.parse.date,
		"activityTime": ruite.parse.time
	};
	comAccountActivityPlan = ruite.form.encode(activityForm, parsers);
	

}


function onSubmit()
{
	
	var activityForm = $$('activity-form');

	if (!checkActivityForm(activityForm))return;

	encodeActivityForm(activityForm);
	
	var callback1 = function()
	{
	
		alert("恭喜您，添加拜访行动计划操作成功！");
		window.location ="#";
	};
	
	var callback2 = function()
	{
		alert("恭喜您，更新拜访行动计划操作成功！");
		window.location ="#";
	};
	
	var callback3 = function()
	{
		alert("恭喜您，新增拜访行动计划操作成功！");
		window.location ="#";
	};
	
	

	var operation;
	
	if($("#activitytitle").text() == "添加拜访行动计划")
	{
	
	operation = new Operation("酒店.销售管理.客户信息.添加拜访行动计划");
	operation.comAccountActivityPlan = comAccountActivityPlan;
	operation.comAccountId = comAccountId;
	operation.execute(callback1);
	}
	if($("#activitytitle").text() == "更新拜访行动计划")
	{
		operation = new Operation("酒店.销售管理.客户信息.更新拜访行动计划");
		operation.comAccountActivityPlan = comAccountActivityPlan;
		operation.comAccountActivityId = comAccountActivityPlanId;
		operation.execute(callback2);
	}
	if($("#activitytitle").text() == "新增拜访行动计划")
	{
		operation = new Operation("酒店.销售管理.客户信息.新增拜访行动计划");
		operation.comAccountActivityPlan = comAccountActivityPlan;
		operation.comAccountName = $("#companyname").val();
		operation.execute(callback3);
	}


}

function fillActivityFormat(comAccountActivityPlan, activityform)
{
	var formatters = 
	{
		"activityDate": ruite.format.date,
		"activityTime": ruite.format.time,
		
	};
	ruite.form.decode(comAccountActivityPlan, activityform, formatters);
}


function fillActivityInfo()
{ 
	var callback = function(result)
	{			
		fillActivityFormat(result.comAccountActivityPlan,  $$("activity-form"));
	
	}
	var operation = new Operation("酒店.销售管理.客户信息.查看拜访活动信息");
	operation.comAccountActivityPlanId = comAccountActivityPlanId;
	operation.execute(callback);
}


function fillCompanyName()
{
	var callback = function(result)
	{			
		for(var i = 0;i<result.data.length;i++)
		{
			$("#companyname").append("<option value="+result.data[i]+">"+result.data[i]+"</option>");
		}
	}
	var operation = new Operation("酒店.销售管理.销售活动.列公司名称");
	operation.execute(callback);
}

