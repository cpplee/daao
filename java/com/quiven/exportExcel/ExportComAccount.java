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
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.entity.comAccount.ComAccountActivityLog;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.entity.comAccount.ComAccountContact;
import com.quiven.operation.OperationContext;

public class ExportComAccount implements IExportExcel
{
	//按项目组页面搜索条件导出对应员工信息
	public static String[] ConvertStrToArray(String str)
	{
		String[] strArray = null;
		strArray = str.split(",");
		return strArray;		
	}

	public void export(HttpServletRequest request, HttpServletResponse response, String excelType) throws Exception
	{
		ServletContext  servletcontext = request.getSession().getServletContext();
		String Outputfilepath = servletcontext.getRealPath("/template/Account.xls");

		OutputStream os = response.getOutputStream(); //创建页面响应输出流
		File file = new File(Outputfilepath);
		POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(file));
		HSSFWorkbook wb = new HSSFWorkbook(fs);
		wb.removeSheetAt(0);
		wb.removeSheetAt(5);

		Account account = OperationContext.getContext().getAccount();
		ComAccountDao  caDao =  DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());

		String ChooseOption = request.getParameter("ChooseOption");
		String choose[] = ConvertStrToArray(ChooseOption);
		String order[] = {"1","2","3","4","5"};
		boolean flag[] = {false,false,false,false,false};
		for(int i = 0;i<order.length;i++)
		{
			for(int j =0;j<choose.length;j++)
			{
				if(choose[j].equals(order[i]))
				{
					flag[i] = true;
					break;
				}
			}
		}



		if(flag[0] == true)
		{

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
		}



		if(flag[1] == true)
		{

			List<ComAccountContact> data = caDao.ListComAccountContact(salerId);
			HSSFSheet sheet = wb.getSheetAt(1);

			int row  = 4;
			for(ComAccountContact comAccountContact : data)
			{
				HSSFCell cell = sheet.getRow(row).getCell(0);
				cell.setCellValue((comAccountContact== null) ? "":comAccountContact.getComContactName());

				cell = sheet.getRow(row).getCell(1);
				cell.setCellValue((comAccountContact== null) ? "" :comAccountContact.getComContactPosition());

				cell = sheet.getRow(row).getCell(2);
				cell.setCellValue((comAccountContact== null) ? "" :comAccountContact.getComContactTel());

				cell = sheet.getRow(row).getCell(3);
				cell.setCellValue((comAccountContact== null) ? "" :comAccountContact.getComContactMobile());

				cell = sheet.getRow(row).getCell(4);
				cell.setCellValue((comAccountContact== null) ? "" :comAccountContact.getComContactEmail());

				cell = sheet.getRow(row).getCell(5);
				cell.setCellValue((comAccountContact== null) ? "" :comAccountContact.getComContactFax());

				cell = sheet.getRow(row).getCell(6);
				cell.setCellValue((comAccountContact== null) ? "" :comAccountContact.getComContactSkype());

				cell = sheet.getRow(row).getCell(7);
				cell.setCellValue((comAccountContact== null) ? "" :comAccountContact.getComContactQq());

				cell = sheet.getRow(row).getCell(8);
				cell.setCellValue((comAccountContact== null) ? "" :comAccountContact.getComContactWebchat());

				cell = sheet.getRow(row).getCell(9);
				cell.setCellValue((comAccountContact== null) ? "" :ConvertToString(comAccountContact.getDob()));
				row++;	    		
			}		
		}
		
		if(flag[2] == true)
		{
			
		}
		if(flag[3] == true)
		{
			List<ComAccountActivityPlan> data = caDao.listComAccountActivityPlan(salerId);
			HSSFSheet sheet = wb.getSheetAt(3);

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
			
		
			
		}
		if(flag[4] == true)
		{
			List<ComAccountActivityLog> data = caDao.listComAccountActivitylog(salerId);
			HSSFSheet sheet = wb.getSheetAt(4);

			for(ComAccountActivityLog a : data)
			{
				a.setSalerName(caDao.getSalerNamebyId(salerId));
			}



			int row  = 5;
			for(ComAccountActivityLog comAccountActivityLog : data)
			{
				HSSFCell cell = sheet.getRow(row).getCell(0);
				cell.setCellValue(((comAccountActivityLog== null) ? "":ConvertToString(comAccountActivityLog.getActlogDate())));

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

		}



		for(int k = flag.length-1 ; k >= 0 ; k--)
		{
			if(flag[k] == false)
			{
				wb.removeSheetAt(k);
			}
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
