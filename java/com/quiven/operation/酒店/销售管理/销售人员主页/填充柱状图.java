package com.quiven.operation.酒店.销售管理.销售人员主页;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 填充柱状图  extends AbstractOperation implements Operation {

	private long year;
	private long[] hotelData = new long[12];
	private long[] banquetData = new long[12];
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		for(int month =1 ; month<=12; month++){
			hotelData[month-1] = caDao.getComAccountBookingRoom(salerId,year,month);
			banquetData[month-1] = caDao.getComAccountBookingBanquet(salerId,year,month);
		}
	}

	public long getYear() {
		return year;
	}

	public void setYear(long year) {
		this.year = year;
	}

	public long[] getHotelData() {
		return hotelData;
	}

	public void setHotelData(long[] hotelData) {
		this.hotelData = hotelData;
	}

	public long[] getBanquetData() {
		return banquetData;
	}

	public void setBanquetData(long[] banquetData) {
		this.banquetData = banquetData;
	}

}
