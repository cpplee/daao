package com.quiven.operation.前台展示.酒店信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.Hotel;
import com.quiven.entity.hotel.Hotel_Room;
import com.quiven.entity.hotel.PropmtionActivity;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 列房间信息 extends AbstractOperation implements Operation {

	private long hotelId;
	private Hotel hotel;
	private List<Hotel_Room> data;
	private List<PropmtionActivity> promotion;

	public List<PropmtionActivity> getPromotion() {
		return promotion;
	}

	public void setPromotion(List<PropmtionActivity> promotion) {
		this.promotion = promotion;
	}

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

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	
	
	public void execute() throws Exception {

		HotelDao hotelDao = DaoManager.getInstance().getDao(HotelDao.class);
		hotel = hotelDao.getHotelRoombyHotelId(hotelId);
		
		PagedList<Hotel_Room> list_hotel_room = hotelDao.getroominfo(hotelId);
		data = list_hotel_room.getData();
		
		PagedList<PropmtionActivity> list_promotion = hotelDao.getpromotion(hotelId);
		promotion = list_promotion.getData();
	}
	
	

}
