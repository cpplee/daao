package com.quiven.exportExcel;

import java.io.File;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import jxl.Workbook;
import jxl.format.Colour;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;

import com.quiven.configure.SystemConfigure;
import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccount;

public class ExportComAccountProfile implements IExportExcel
{
	//按项目组页面搜索条件导出对应员工信息
	public void export(HttpServletRequest request, HttpServletResponse response, String excelType) throws Exception
	{
		HttpSession session = request.getSession(false);
		
		Account account = null;
		account = (Account) session.getAttribute("account");
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//获取当前销售人员ID
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		List<ComAccount> data = caDao.listComAccount( salerId);

		OutputStream os = response.getOutputStream(); //创建页面响应输出流
		
		String relativelyPath=System.getProperty("user.dir");
		
		File templateHome = new File(SystemConfigure.get("TemplateHome"));
		Workbook wb = Workbook.getWorkbook(new File(templateHome,"Account Profile.xls"));
		WritableWorkbook wwb = Workbook.createWorkbook(os,wb); //向输出流中创建可写入的工作薄对象
		
		WritableCellFormat format = new WritableCellFormat(); //初始化单元格样式对象
		format.setBackground(Colour.LIGHT_GREEN); //设置单元格样式对象的背景色为浅蓝色
		//WritableSheet sheet = wwb.createSheet(excelType, 1); //在工作薄对象中创建一个电子表格
		WritableSheet sheet = wwb.getSheet(1); 
		
		
		// 设置表头
		Label label = new Label(0, 10, "飞利浦", format);
		sheet.addCell(label);
		label = new Label(1, 10, "飞利浦责任有限公司", format);
		sheet.addCell(label);
		label = new Label(2, 10, "飞利浦（中国）", format);
		sheet.addCell(label);
		label = new Label(3, 10, "knR", format);
		sheet.addCell(label);
		label = new Label(4, 10, "PHILIPS", format);
		sheet.addCell(label);
		label = new Label(5, 10, "地区", format);
		sheet.addCell(label);
		label = new Label(6, 10, "郭总", format);
		sheet.addCell(label);
		label = new Label(7, 10, "关键", format);
		sheet.addCell(label);
		label = new Label(8, 10, "电子产业", format);
		sheet.addCell(label);
		label = new Label(9, 10, "1000", format);
		sheet.addCell(label);
		label = new Label(10, 10, "", format);
		sheet.addCell(label);
		label = new Label(11, 10, "GE", format);
		sheet.addCell(label);
		label = new Label(12, 10, "医院，超市", format);
		sheet.addCell(label);
		label = new Label(13, 10, "川新假日", format);
		sheet.addCell(label);
		label = new Label(14, 10, "成都", format);
		sheet.addCell(label);
		label = new Label(15, 10, "四川", format);
		sheet.addCell(label);
		label = new Label(16, 10, "610021", format);
		sheet.addCell(label);
		label = new Label(17, 10, "中国", format);
		sheet.addCell(label);
		
		//sheet.setColumnView(0, 16); //设置列的宽度，第一个参数代表列序号
		

		/*label = new Label(1, 0, "中文全称", format);
		sheet.setColumnView(1, 16);
		sheet.addCell(label);

		label = new Label(2, 0, "地址", format);
		sheet.setColumnView(2, 50);
		sheet.addCell(label);

		label = new Label(3, 0, "类型", format);
		sheet.setColumnView(3, 16);
		sheet.addCell(label);

		label = new Label(4, 0, "客户代码", format);
		sheet.setColumnView(4, 16);
		sheet.addCell(label);

		label = new Label(5, 0, "邮编", format);
		sheet.setColumnView(5, 16);
		sheet.addCell(label);
*/
		/*int row = 1; //从第二行开始，第一行为表头
		for (ComAccount comAccount : data)
		{

			label = new Label(0, row, (comAccount == null) ? "" : comAccount.getName());
			sheet.addCell(label);

			label = new Label(1, row, (comAccount== null) ? "" : comAccount.getSeccondaryName());
			sheet.addCell(label);

			label = new Label(2, row, (comAccount== null) ? "" :	comAccount.getAddress1()
					+","+comAccount.getAddress2()+","+comAccount.getAddress3()+","+comAccount.getCity()
					+","+comAccount.getProvince()+","+comAccount.getCountry());
			sheet.addCell(label);

			label = new Label(3, row, (comAccount== null) ? "" : comAccount.getComtype());
			sheet.addCell(label);

			label = new Label(4, row, (comAccount == null) ? "" : comAccount.getComAccountCode());
			sheet.addCell(label);

			label = new Label(5, row, (comAccount== null) ? "" : comAccount.getPostal());
			sheet.addCell(label);

			row++;
		}*/
		wwb.write();
		wwb.close();
		wb.close();
		os.close();
		response.flushBuffer();
	}
}
