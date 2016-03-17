package com.quiven.exportExcel;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
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
import com.quiven.entity.comAccount.ComAccountActivityLog;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.operation.OperationContext;

public class ExportComAccountActivityLog implements IExportExcel
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
			if(i == 5)
			{
				continue;
			}
			else
			{
				wb.removeSheetAt(i);
			}
		}
		

		List<ComAccountActivityLog> data = caDao.listComAccountActivitylog(salerId);
		HSSFSheet sheet = wb.getSheetAt(0);

		for(ComAccountActivityLog a : data)
		{
			a.setSalerName(caDao.getSalerNamebyId(salerId));
		}



		int row  = 5;
		for(ComAccountActivityLog comAccountActivityLog : data)
		{
			HSSFCell cell = sheet.getRow(row).getCell(0);
			cell.setCellValue((comAccountActivityLog== null) ? "" :ConvertToString(comAccountActivityLog.getActlogDate()));

			cell = sheet.getRow(row).getCell(1);
			cell.setCellValue((comAccountActivityLog== null) ? "" :comAccountActivityLog.getActlogPerson());

			cell = sheet.getRow(row).getCell(2);
			cell.setCellValue((comAccountActivityLog== null) ? "" :comAccountActivityLog.getSalerName());

			cell = sheet.getRow(row).getCell(3);
			cell.setCellValue((comAccountActivityLog== null) ? "" :comAccountActivityLog.getActivityDetail());

			cell = sheet.getRow(row).getCell(4);
			cell.setCellValue((comAccountActivityLog== null) ? "" :comAccountActivityLog.getRemarks());

			cell = sheet.getRow(row).getCell(5);
			cell.setCellValue((comAccountActivityLog== null) ? "" :comAccountActivityLog.getReviews());


			row++;	    		
		}	
		
		wb.write(os);
		os.close();
		response.flushBuffer();
	}
	private String ConvertToString(Date actlogDate) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String date  = formatter.format(actlogDate);
		return date;
	}
}
