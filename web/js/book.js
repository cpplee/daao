$import("rpc.js");
$import("html/form.js");

$(function(){
	var date = new Date;
	$("#roomArrive").val(dateToStr1(date));
	$("#roomDepart").val(dateToStr2(date));
});