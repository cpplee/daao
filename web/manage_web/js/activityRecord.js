$import("rpc.js");
$import("html/form.js");

var comAccountLogId;
function pageLoad()
{

	var args = util.getURLArgs();
	sourcePage = args.sourcePage;
	comAccountLogId = args.activitylogId;

	
	if(sourcePage == "review" &&comAccountLogId != null )
	{	
		$("#salerName").attr("disabled","disabled");
		$("#activitytitle").text("批复拜访行动计划");
		$("#salerName").attr("disabled","disabled");
		$("#actlogPerson").attr("disabled","disabled");
		$("#actlogDate").attr("disabled","disabled");
		$("#activityDetail").attr("disabled","disabled");
		$("#remarks").attr("disabled","disabled");
		fillActivityLog();
	}
	if(sourcePage == "view" && comAccountLogId != null)
	{
		$("#submit-button").css("display","none");
		ruite.form.readonly($$("activitylog-form"));
		$("#activitytitle").text("查看拜访行动计划");
		fillActivityLog();	
	}
}

function fillActivityLogFormat(comAccountActivityLog, activityLogForm)
{
	var formatters = 
	{
		"actlogDate": ruite.format.date,	
	};
	ruite.form.decode(comAccountActivityLog, activityLogForm, formatters);
}

function fillActivityLog()
{ 
	var callback = function(result)
	{					
		fillActivityLogFormat(result.comAccountActivityLog, $$("activitylog-form"));
	}
	var operation = new Operation("酒店.高级管理.报告审阅批复.查看拜访活动报告");
	operation.comAccountActivityLogId = comAccountLogId;
	operation.execute(callback);
}

function onSubmit()
{
	var callback = function(result)
	{					
		alert("恭喜您批复成功");		
	}
	
	var operation = new Operation("酒店.高级管理.报告审阅批复.批复拜访报告");
	operation.comAccountActivityLogId = comAccountLogId;
	operation.reviews = $("#reviews").val();
	operation.execute(callback);
}
