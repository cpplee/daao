/**
 * 用于格式化输入输出的函数
 * 参见 form.js 
 */

if (!ruite) var ruite = {};
if (!ruite.format) ruite.format = {};

/**用户借书时间显示，如果未归还则显示"未归还"*/
ruite.format.returnDate = function (date)
{
	if (null == date)
	{
		return "未归还";
	}
	else
	{
		return ruite.format.date(date);
	}
}

/**根据Date类型显示时间，仅显示年月日*/
ruite.format.date = function (date)
{	
	//alert(date);
	if (null == date || 1899 == date.getFullYear()) return "";
	
	if (typeof(date) == "number") date = new Date(date);

	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	
	var s = "";
	s += year;

	s += "-";
	if (month < 10) s += "0";
	s += month;
	
	s += "-";
	if (day < 10) s += "0";
	s += day;
	
	return s;
}

/**根据Date类型显示时间，仅显示年月*/
ruite.format.month = function (date)
{
	if( date == null ) return "N/A";
	
	if (typeof(date) == "number") date = new Date(date);

	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	
	var s = "";
	s += year;

	s += "-";
	if (month < 10) s += "0";
	s += month;
	
	return s;
}


ruite.format.timestamp = function (date)
{
	if( date == null ) return "N/A";
	
	if (typeof(date) == "number") date = new Date(date);

	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	
	var s = "";
	s += year;

	s += "-";
	if (month < 10) s += "0";
	s += month;
	
	s += "-";
	if (day < 10) s += "0";
	s += day;
	
	s += " "
	if (hour < 10) s += "0";
	s += hour;

	s += ":"
	if (minute < 10) s += "0";
	s += minute;
	
	return s;
}

//只显示时间点
ruite.format.time = function (date)
{
	if( date == null ) return "N/A";
	
	if (typeof(date) == "number") date = new Date(date);

	var hour = date.getHours();
	var minute = date.getMinutes();
	
	var s = "";
	
	if (hour < 10) s += "0";
	s += hour;

	s += ":"
	if (minute < 10) s += "0";
	s += minute;
	
	return s;
}

// 显示到秒
ruite.format.second = function (date)
{
	if( date == null ) return "N/A";
	
	if (typeof(date) == "number") date = new Date(date);

	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds(); 
	
	var s = "";
	s += year;

	s += "年";
	if (month < 10) s += "0";
	s += month;
	
	s += "月";
	if (day < 10) s += "0";
	s += day;
	
	s += "日 "
	if (hour < 10) s += "0";
	s += hour;

	s += ":"
	if (minute < 10) s += "0";
	s += minute;
	
	s += ":"
	if (second < 10) s += "0";
	s += second;
	
	return s;
}

