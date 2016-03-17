package com.quiven.operation.酒店.通用设置;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.HotelInfoSeter;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 更新酒店个人信息 extends AbstractOperation implements Operation{

	private HotelInfoSeter hotelInfoSeter;

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		Account account = OperationContext.getContext().getAccount();
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);
		long hotelInfoSeterId = HDao.getHotelInfoSeterIdByAccountId(account.getId());
		long hotelId = HDao.getHotelIdByAccountId(account.getId());
		hotelInfoSeter.setId(hotelInfoSeterId);
		hotelInfoSeter.setHotelId(hotelId);
		hotelInfoSeter.setAccountId(account.getId());
		HDao.updateHotelInfoSeter(hotelInfoSeter);
		
	}

	public HotelInfoSeter getHotelInfoSeter() {
		return hotelInfoSeter;
	}

	public void setHotelInfoSeter(HotelInfoSeter hotelInfoSeter) {
		this.hotelInfoSeter = hotelInfoSeter;
	}
	
	
}
