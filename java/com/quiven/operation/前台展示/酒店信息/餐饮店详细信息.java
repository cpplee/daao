package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.ResaurantBarsInfo;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 餐饮店详细信息 extends AbstractOperation implements Operation {

	private long resaurantbarsid;// 餐饮店ID号
	private ResaurantBarsInfo resaurantbarinfo;
	private String hotelname;

	public long getResaurantbarsid() {
		return resaurantbarsid;
	}

	public void setResaurantbarsid(long resaurantbarsid) {
		this.resaurantbarsid = resaurantbarsid;
	}

	public ResaurantBarsInfo getResaurantbarinfo() {
		return resaurantbarinfo;
	}

	public void setResaurantbarinfo(ResaurantBarsInfo resaurantbarinfo) {
		this.resaurantbarinfo = resaurantbarinfo;
	}

	public String getHotelname() {
		return hotelname;
	}

	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}
	public void execute() throws Exception {

		HotelDao hotelDao = DaoManager.getInstance().getDao(HotelDao.class);
		resaurantbarinfo = hotelDao.getResaurantBarsInfoById(resaurantbarsid);
		hotelname=hotelDao.getHotelNamebyId(resaurantbarinfo.getHotelId());
	}


}
