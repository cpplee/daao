package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加房间预订订单  extends AbstractOperation implements Operation{
	private ComAccountBookRoom comAccountBookRoom; 
	private long comAccountId;
	private long flag;


	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();

		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		comAccountBookRoom.setSalerId(salerId);
		ComAccountDao comAccountDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long hotelId = comAccountDao.getHotelIdBySalerId(salerId);
		comAccountBookRoom.setHotelId(hotelId);
		comAccountBookRoom.setComAccountId(comAccountId);
		
		
		if(comAccountDao.confirmRoomDateByDate(comAccountBookRoom)){
			comAccountDao.addBookRoom(comAccountBookRoom);	
			flag = 1;
		}else{
			
			flag = 0;
		}
	
	    
	
		
	}

	public long getFlag() {
		return flag;
	}

	public void setFlag(long flag) {
		this.flag = flag;
	}

	public long getComAccountId() {
		return comAccountId;
	}
	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}

	public ComAccountBookRoom getComAccountBookRoom() {
		return comAccountBookRoom;
	}

	public void setComAccountBookRoom(ComAccountBookRoom comAccountBookRoom) {
		this.comAccountBookRoom = comAccountBookRoom;
	}

	
}
