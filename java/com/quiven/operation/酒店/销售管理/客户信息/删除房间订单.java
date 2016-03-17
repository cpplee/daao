package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除房间订单 extends AbstractOperation implements Operation  {
	
	private long comAccountBookRoomId;
	
	public void execute() throws Exception
	{
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.deleteRoomBooking(comAccountBookRoomId);
	
	
	}

	public long getComAccountBookRoomId() {
		return comAccountBookRoomId;
	}

	public void setComAccountBookRoomId(long comAccountBookRoomId) {
		this.comAccountBookRoomId = comAccountBookRoomId;
	}

	



}
