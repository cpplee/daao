package com.quiven.operation.酒店.酒店设置.房间价格设置;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.OnlinePriceRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加房型在线价格  extends AbstractOperation implements Operation{
	private OnlinePriceRoom roomPrice; 

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
//		Account account = OperationContext.getContext().getAccount();
//		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
//		long salerId = caDao.getSalerIdByAccountId(account.getId());
//		long hotelId = caDao.getHotelIdBySalerId(salerId);
		Account account = OperationContext.getContext().getAccount();
		HotelDao hoteldao = DaoManager.getInstance().getDao(HotelDao.class);
		long hotelId = hoteldao.getHotelIdByAccountId(account.getId());
		hoteldao.addOnlineRoomPrice(hotelId, roomPrice);
	}

	
	public OnlinePriceRoom getRoomPrice() {
		return roomPrice;
	}

	public void setRoomPrice(OnlinePriceRoom roomPrice) {
		this.roomPrice = roomPrice;
	}



}
