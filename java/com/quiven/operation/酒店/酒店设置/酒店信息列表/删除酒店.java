package com.quiven.operation.酒店.酒店设置.酒店信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除酒店 extends AbstractOperation implements Operation  {
	
	private long hotelId;
	
	
	
	public void execute() throws Exception
	{
		
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);
		HDao.deleteHotelById(hotelId);
	
	
	}

	public long getHotelId() {
		return hotelId;
	}

	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}

}
