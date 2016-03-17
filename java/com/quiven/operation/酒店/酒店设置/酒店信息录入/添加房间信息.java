package com.quiven.operation.酒店.酒店设置.酒店信息录入;

import org.directwebremoting.WebContextFactory;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.Room;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加房间信息  extends AbstractOperation implements Operation{
	private Room room; 
	private String url;
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		
		Account account = OperationContext.getContext().getAccount();
		//String newpath = (String) WebContextFactory.get().getSession().getAttribute("newpath");
		String newpath = (String) OperationContext.getContext().getSession().getAttribute("newpath");
		System.out.println(newpath);
		//ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//long salerId = caDao.getSalerIdByAccountId(account.getId());
		//long hotelId = caDao.getHotelIdBySalerId(salerId);
		HotelDao hoteldao = DaoManager.getInstance().getDao(HotelDao.class);
		long hotelId = hoteldao.getHotelIdByAccountId(account.getId());
		long roomid=hoteldao.addRoomInfo(hotelId, room);
		
		long photoid=hoteldao.addRoomphoto(hotelId, roomid, newpath);
		System.out.println(photoid);
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

;

}
