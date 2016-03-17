function showModal()
{
	util.debug($('#myModal'),3);
	$('#myModal').modal('show');
}

function onExport1()
{
	var value =[]; 
	$('input[name="account"]:checked').each(function(){ 
		value.push($(this).val()); 
	}); 
	$$('ChooseOption').value = value;
	$$('excelType').value = "公司客户信息";
	$$('fileName').value = "公司客户信息.xls";
	$$('export_form').submit();
	
}

function onExport2()
{	
	$$('excelType').value = "拜访计划";
	$$('fileName').value = "拜访计划.xls";
	$$('export_form').submit();
}


