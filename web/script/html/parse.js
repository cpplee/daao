/**
 * 用于格式化输入的函数
 * 参见 form.js 
 */

if (!ruite) var ruite = {};
if (!ruite.parse) ruite.parse = {};

ruite.parse.date = function (s)
{
	if (null == s || '' == s)
	{
		return new Date(2000, 0, 1, 0, 0, 0, 0).getTime();
	}
	
	var pattern = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
	
	var d = s.match(pattern);
	if (d == null) return null;	
	
	var date = new Date(parseInt(d[1],10), parseInt(d[2],10) - 1, parseInt(d[3],10), 0, 0, 0, 0);
	return date.getTime();
}

ruite.parse.month = function (s)
{
	var pattern = /^(\d{4})-(\d{1,2})$/;
	
	var d = s.match(pattern);
	if (d == null) return null;	
	
	var date = new Date(parseInt(d[1],10), parseInt(d[2],10) - 1, 1, 0, 0, 0, 0);
	
	return date.getTime();
}

ruite.parse.timestamp = function (s)
{
	var pattern = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;
	
	var d = s.match(pattern);
	if (d == null) return null;	
	
	var date = new Date(parseInt(d[1],10), parseInt(d[2],10) - 1, parseInt(d[3],10), parseInt(d[4],10), parseInt(d[5],10), 0, 0);
	
	return date.getTime();
}

ruite.parse.time = function (s)
{
	var pattern = /^(\d{1,2}):(\d{1,2})$/;
	
	var d = s.match(pattern);
	if (d == null) return null;	
	
	var date = new Date(2000, 0, 1, parseInt(d[1],10), parseInt(d[2],10), 0, 0);
	
	return date.getTime();
}
