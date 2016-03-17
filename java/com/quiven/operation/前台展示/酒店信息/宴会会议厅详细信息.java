package com.quiven.operation.前台展示.酒店信息;
import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.BanquetInfo;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;


public class 宴会会议厅详细信息  extends  AbstractOperation implements Operation  {

	private long banquestId;//宴会厅ID
	private BanquetInfo banquestinfo;
	private String hotelname;
	public long getBanquestId() {
		return banquestId;
	}

	public void setBanquestId(long banquestId) {
		this.banquestId = banquestId;
	}

	public BanquetInfo getBanquestinfo() {
		return banquestinfo;
	}

	public void setBanquestinfo(BanquetInfo banquestinfo) {
		this.banquestinfo = banquestinfo;
	}

	public String getHotelname() {
		return hotelname;
	}

	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}

	public void execute() throws Exception
	{
		
		HotelDao hotelDao= DaoManager.getInstance().getDao(HotelDao.class);
		banquestinfo=hotelDao.getBanquestInfoByBanquestId(banquestId);
		hotelname=hotelDao.getHotelNamebyId(banquestinfo.getHotelId());
	}

	



}
