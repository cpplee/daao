/**
 * 
 */

function pageLoad(){
	
	  // alert(123);
	
	if($.cookie("loginType")=='散客')
	 {
	//	alert($.cookie("loginType"));
	   $('#customerli').hide();
	 
	 }		
	
	
	
}
	
	


function showmessage(str){
	
	var callback = function (data)
	{	
		
	//	util.debug(data, 9);
		alert(1233);
	}
	
	var operation = new Operation("客户.公司客户.发送询价");
	
	operation.execute(callback);
	
	
}