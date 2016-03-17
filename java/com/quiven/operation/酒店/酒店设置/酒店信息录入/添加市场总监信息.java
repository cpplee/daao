package com.quiven.operation.酒店.酒店设置.酒店信息录入;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.HotelMarketDir;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加市场总监信息  extends AbstractOperation implements Operation{
	private HotelMarketDir hotelMarketDir; 

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();

		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		long hotelId = caDao.getHotelIdBySalerId(salerId);
		HotelDao hoteldao = DaoManager.getInstance().getDao(HotelDao.class);
		hoteldao.addHotelMarketDir(hotelId, hotelMarketDir);
	}

	public HotelMarketDir getHotelMarketDir() {
		return hotelMarketDir;
	}

	public void setHotelMarketDir(HotelMarketDir hotelMarketDir) {
		this.hotelMarketDir = hotelMarketDir;
	}

	

	


}
