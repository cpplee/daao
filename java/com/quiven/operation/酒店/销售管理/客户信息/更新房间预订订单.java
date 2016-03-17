package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 更新房间预订订单 extends AbstractOperation implements Operation {
	private long comAccountBookRoomId;
	private ComAccountBookRoom comAccountBookRoom;
	
	public void execute() throws Exception
	{
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.updateRoom(comAccountBookRoomId, comAccountBookRoom);
	
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
