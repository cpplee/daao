package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.Store;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 土特产详细信息 extends AbstractOperation implements Operation {

	private long storeid;// 土特产ID号
	private Store store;
	private String hotelname;

	public long getStoreid() {
		return storeid;
	}



	public void setStoreid(long storeid) {
		this.storeid = storeid;
	}



	public Store getStore() {
		return store;
	}



	public void setStore(Store store) {
		this.store = store;
	}



	public String getHotelname() {
		return hotelname;
	}



	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}

	

	public void execute() throws Exception {

		HotelDao hotelDao = DaoManager.getInstance().getDao(HotelDao.class);
		store=hotelDao.getStoreByid(storeid);
		hotelname=hotelDao.getHotelNamebyId(store.getHotelId());
	}




}
