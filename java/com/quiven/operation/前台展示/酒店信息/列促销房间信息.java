package com.quiven.operation.前台展示.酒店信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.Hotel_Room;
import com.quiven.entity.hotel.PropmtionActivity;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 列促销房间信息 extends AbstractOperation implements Operation {

	private long hotelId;// 酒店ID
	private long promotionid;// 促销id

	private List<Hotel_Room> data;

	private PropmtionActivity promotioninfo;

	public List<Hotel_Room> getData() {
		return data;
	}

	public void setData(List<Hotel_Room> data) {
		this.data = data;
	}

	public long getHotelId() {
		return hotelId;
	}

	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}

	public PropmtionActivity getPromotioninfo() {
		return promotioninfo;
	}

	public void setPromotioninfo(PropmtionActivity promotioninfo) {
		this.promotioninfo = promotioninfo;
	}

	public long getPromotionid() {
		return promotionid;
	}

	public void setPromotionid(long promotionid) {
		this.promotionid = promotionid;
	}

	public void execute() throws Exception {

		HotelDao hotelDao = DaoManager.getInstance().getDao(HotelDao.class);
		promotioninfo = hotelDao.getpromotioninfo(promotionid);
		PagedList<Hotel_Room> list_hotel_room = hotelDao.getpromotionroominfo(
				hotelId, promotionid);
		data = list_hotel_room.getData();

	}

}
