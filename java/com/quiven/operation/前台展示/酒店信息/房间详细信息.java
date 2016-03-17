package com.quiven.operation.前台展示.酒店信息;
import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.Hotel_Room;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;


public class 房间详细信息  extends  AbstractOperation implements Operation  {

	private long roomId;//房间ID号
	private Hotel_Room room;

	public long getRoomId() {
		return roomId;
	}



	public void setRoomId(long roomId) {
		this.roomId = roomId;
	}



	public Hotel_Room getRoom() {
		return room;
	}



	public void setRoom(Hotel_Room room) {
		this.room = room;
	}



	
	

	public void execute() throws Exception
	{
		
		HotelDao hotelDao= DaoManager.getInstance().getDao(HotelDao.class);
		room=hotelDao.getRoombyRoomId(roomId);
	}

	


}
