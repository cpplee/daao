function dateToStr1(datetime){ 
	var year = datetime.getFullYear();
	var month = datetime.getMonth()+1;//js中月份是从0开始的
	var date = datetime.getDate(); 


	if(month<10){
		month = "0" + month;
	}
	if(date<10){
		date = "0" + date;
	}

	var time = year+"-"+month+"-"+date; 
	// alert(time);
	return time;
}


function dateToStr2(datetime){ 
	var year = datetime.getFullYear();
	var month = datetime.getMonth()+1;//js中月份是从0开始的
	var date = datetime.getDate()+1; 


	if(month<10){
		month = "0" + month;
	}
	if(date<10){
		date = "0" + date;
	}

	var time = year+"-"+month+"-"+date; 
	// alert(time);
	return time;
}