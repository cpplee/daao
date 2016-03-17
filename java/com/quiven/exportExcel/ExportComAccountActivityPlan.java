package com.quiven.exportExcel;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.operation.OperationContext;

public class ExportComAccountActivityPlan implements IExportExcel
{
	//按项目组页面搜索条件导出对应员工信息
	public void export(HttpServletRequest request, HttpServletResponse response, String excelType) throws Exception
	{
		ServletContext  servletcontext = request.getSession().getServletContext();
		String Outputfilepath = servletcontext.getRealPath("/template/Account.xls");

		OutputStream os = response.getOutputStream(); //创建页面响应输出流
		File file = new File(Outputfilepath);
		POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(file));
		HSSFWorkbook wb = new HSSFWorkbook(fs);
		
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao  caDao =  DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		
		for(int i=6;i>=0;i--)
		{
			if(i == 4)
			{
				continue;
			}
			else
			{
				wb.removeSheetAt(i);
			}
		}
		

		List<ComAccountActivityPlan> data = caDao.listComAccountActivityPlan(salerId);
		HSSFSheet sheet = wb.getSheetAt(0);

		for(ComAccountActivityPlan a : data)
		{
			a.setCompanyName(caDao.getCompanyNameBySalerId(a.getComAccountId()));
		}
		
		int row = 5;
		for(ComAccountActivityPlan b : data)
		{
			HSSFCell cell = sheet.getRow(row).getCell(0);
			cell.setCellValue((b == null) ? "" :b.getCompanyName());
			
			cell = sheet.getRow(row).getCell(1);
			cell.setCellValue((b == null) ? "" :b.getActivityPerson());
			
			cell = sheet.getRow(row).getCell(3);
			cell.setCellValue((b == null) ? "" :b.getActivityDescription());
			
			cell = sheet.getRow(row).getCell(16);
			cell.setCellValue(b.getCost());
			
			cell = sheet.getRow(row).getCell(17);
			cell.setCellValue(b.getOutcome());
			
			cell = sheet.getRow(row).getCell(18);
			cell.setCellValue(b.getRetonin());
			
			row++;
		}
		
		wb.write(os);
		os.close();
		response.flushBuffer();
	}
}
