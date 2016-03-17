package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 查看预订房间订单 extends AbstractOperation implements Operation {
	
	private long comAccountBookRoomId;
	private ComAccountBookRoom comAccountBookRoom;
	
	public void execute() throws Exception
	{	
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//获取当前销售人员ID	     
		comAccountBookRoom = caDao.getComBookRoomById(comAccountBookRoomId);
		
		HotelDao hDao = DaoManager.getInstance().getDao(HotelDao.class);
		comAccountBookRoom.setRoomHotelName(hDao.getHotelNamebyId(comAccountBookRoom.getHotelId()));
		if(comAccountBookRoom.getRoomStatus().equals("P")){
			comAccountBookRoom.setRoomStatus("待审核 ");
		}else if(comAccountBookRoom.getRoomStatus().equals("T")){
			comAccountBookRoom.setRoomStatus("审核通过");
		}
	}

	public long getComAccountBookRoomId() {
		return comAccountBookRoomId;
	}

	public void setComAccountBookRoomId(long comAccountBookRoomId) {
		this.comAccountBookRoomId = comAccountBookRoomId;
	}

	public ComAccountBookRoom getComAccountBookRoom() {
		return comAccountBookRoom;
	}

	public void setComAccountBookRoom(ComAccountBookRoom comAccountBookRoom) {
		this.comAccountBookRoom = comAccountBookRoom;
	}

	
}
