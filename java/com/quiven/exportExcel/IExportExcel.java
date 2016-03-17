package com.quiven.exportExcel;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface IExportExcel 
{
	void export(HttpServletRequest request, HttpServletResponse response, String excelType) throws Exception;
}
