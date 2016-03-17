package com.quiven.operation.酒店.酒店设置.酒店信息录入;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.HotelRerserContact;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加客房预订联系人信息  extends AbstractOperation implements Operation{
	private HotelRerserContact hotelRerserContact; 

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();

		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		long hotelId = caDao.getHotelIdBySalerId(salerId);
		HotelDao hoteldao = DaoManager.getInstance().getDao(HotelDao.class);
		hoteldao.addHotelRerserContact(hotelId, hotelRerserContact);
	}

	public HotelRerserContact getHotelRerserContact() {
		return hotelRerserContact;
	}

	public void setHotelRerserContact(HotelRerserContact hotelRerserContact) {
		this.hotelRerserContact = hotelRerserContact;
	}

	


}
