package com.quiven.exportExcel;

//name的值由JS前台传

public class ExportFactory
{
	public static IExportExcel get(String name) throws Exception
	{

		if(name.equalsIgnoreCase("公司客户信息"))
		{
			return new ExportComAccount();
		}
		else if(name.equalsIgnoreCase("客户信息汇总"))
		{
			return new ExportComAccountInfo();
		}
		else if(name.equalsIgnoreCase("拜访活动批复报告"))
		{
			return new ExportComAccountActivityLog();
		}
		else if(name.equalsIgnoreCase("拜访活动"))
		{
			return new ExportComAccountActivityPlan();
		}
		else
		{
			throw new Exception("exportExcel is wrong!");
		}
		
	}
}
