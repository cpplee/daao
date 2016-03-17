package com.quiven.operation.酒店.酒店设置.餐饮店信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除餐饮店 extends AbstractOperation implements Operation  {
	
	private long resaurantBarsId;
	
	
	
	public void execute() throws Exception
	{
		
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);
		HDao.deleteResaurantBarsById(resaurantBarsId);	
	
	}



	public long getResaurantBarsId() {
		return resaurantBarsId;
	}



	public void setResaurantBarsId(long resaurantBarsId) {
		this.resaurantBarsId = resaurantBarsId;
	}
	
	

}
