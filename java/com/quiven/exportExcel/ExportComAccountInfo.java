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
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.operation.OperationContext;

public class ExportComAccountInfo implements IExportExcel
{
	public Long[]  StrToLong(String a)
	{
        Long[] num = new Long[a.length()];
        for (int i = 0; i < a.length(); i++) 
        	num[i] = Long.parseLong(a); 
		return num;
		
	}
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
		
		String ChooseOption = request.getParameter("choose_option");

		for(int i=6;i>=0;i--)
		{
			if(i == 1)
			{
				continue;
			}
			else
			{
				wb.removeSheetAt(i);
			}
		}
		

		List<ComAccount> data = caDao.listComAccount(salerId);

		HSSFSheet sheet = wb.getSheetAt(0);

		int row  = 4;
		for(ComAccount comAccount : data)
		{
			HSSFCell cell = sheet.getRow(row).getCell(0);
			cell.setCellValue((comAccount== null) ? "":comAccount.getCname());

			cell = sheet.getRow(row).getCell(1);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getComAccountCode());

			cell = sheet.getRow(row).getCell(2);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getMarketSegmentId());

			cell = sheet.getRow(row).getCell(3);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getMarketSegmentId());

			cell = sheet.getRow(row).getCell(4);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getAddress1());

			cell = sheet.getRow(row).getCell(5);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getAddress2());

			cell = sheet.getRow(row).getCell(6);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getAddress3());

			cell = sheet.getRow(row).getCell(7);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getCity());

			cell = sheet.getRow(row).getCell(8);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getCountry());

			cell = sheet.getRow(row).getCell(9);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getPostal());

			cell = sheet.getRow(row).getCell(10);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getComTelphone());

			cell = sheet.getRow(row).getCell(11);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getComFax());

			cell = sheet.getRow(row).getCell(12);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getComEmail());

			cell = sheet.getRow(row).getCell(13);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getWebAddress());

			cell = sheet.getRow(row).getCell(14);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getComWechat());

			cell = sheet.getRow(row).getCell(15);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getComWechat());

			cell = sheet.getRow(row).getCell(16);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getComFrequency());

			cell = sheet.getRow(row).getCell(17);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getKeynotes());

			cell = sheet.getRow(row).getCell(17);
			cell.setCellValue((comAccount== null) ? "" :comAccount.getWebAddress());


			row++;	    		
		}
		
		wb.write(os);
		os.close();
		response.flushBuffer();
	}
}
