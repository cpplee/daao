$import("html/form.js");

var comAccountId;
var comAccountName;

function pageLoad()
{
	var args = util.getURLArgs();
	comAccountId = args.comAccountId;
	comAccountName = args.comAccountName;
	$("#company").val(comAccountName);
	$("#company").attr("disabled","disabled");
	
}