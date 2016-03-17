package com.quiven.operation.酒店.酒店设置.宴会厅信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除宴会厅 extends AbstractOperation implements Operation  {
	
	private long banquetId;
	
	
	public void execute() throws Exception
	{
		
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);
		HDao.deleteBanquetById(banquetId);
	
	}


	public long getBanquetId() {
		return banquetId;
	}

	public void setBanquetId(long banquetId) {
		this.banquetId = banquetId;
	}

	

}
