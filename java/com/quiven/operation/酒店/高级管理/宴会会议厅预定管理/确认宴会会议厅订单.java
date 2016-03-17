package com.quiven.operation.酒店.高级管理.宴会会议厅预定管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.book.BookDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 确认宴会会议厅订单 extends  AbstractOperation implements Operation  {
	private long id;
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		BookDao bDao=DaoManager.getInstance().getDao(BookDao.class);
		bDao.confirmBookBanquet(id);
		
	}

	
	

}
