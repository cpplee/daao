package com.quiven.operation.酒店.酒店设置.酒店信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao; 
import com.quiven.entity.Account;
import com.quiven.entity.hotel.Hotel;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 查看酒店信息 extends AbstractOperation implements Operation {
	private long hotelId;
	private Hotel hotel;
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getAccount();
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);		
		hotelId = HDao.getHotelIdByAccountId(account.getId());
		hotel = HDao.getHotelByHotelId(hotelId);		
	}
	
	public long getHotelId() {
		return hotelId;
	}
	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
	
	
}
