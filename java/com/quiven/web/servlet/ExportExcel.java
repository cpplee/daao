package com.quiven.web.servlet;

import java.io.IOException;
import java.net.SocketException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.quiven.UserException;
import com.quiven.dao.DaoManager;
import com.quiven.exportExcel.ExportFactory;
import com.quiven.exportExcel.IExportExcel;

public class ExportExcel extends HttpServlet
{
	private static final long serialVersionUID = -2177764888566144881L;
	private Log log = LogFactory.getLog(ExportExcel.class);
	
	

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		request.setCharacterEncoding("UTF-8");

		DaoManager dm = DaoManager.getInstance();
		try
		{
			dm.begin();
			//设置Response参数
			response.setContentType("application/vnd.ms-excel");
			String fileName = request.getParameter("fileName");
			
			

			if ("".equalsIgnoreCase(fileName) || fileName == null) fileName = "新建文件.xls";
			response.setHeader("Content-Disposition", "attachment;filename=" + new String(fileName.getBytes("GBK"), "ISO8859-1"));
			//解析客户端来的type列表，并查询出来
			String excelType = request.getParameter("excelType");
			if(excelType == null)
				throw new Exception("excelType is null!");
		
			IExportExcel export = ExportFactory.get(excelType);
			export.export(request, response, excelType);
			
			dm.commit();
		}
		catch (UserException e)
		{
			response.sendError(404, e.getMessage());
		}
		catch (SocketException e)
		{
		}
		catch (Exception e)
		{
			log.error("导出信息出错", e);
			response.sendError(503, e.getMessage());
		}
		finally
		{
			dm.end();
		}
	}
}
