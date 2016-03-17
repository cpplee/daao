package com.quiven.operation.酒店.酒店设置.专门店信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除专门店 extends AbstractOperation implements Operation  {
	
	private long storeId;
	
	
	public void execute() throws Exception
	{
		
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);
		HDao.deleteStoreById(storeId);
	
	}


	public long getStoreId() {
		return storeId;
	}


	public void setStoreId(long storeId) {
		this.storeId = storeId;
	}	

}
