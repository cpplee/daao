package com.quiven.operation.酒店.高级管理.房间预定管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.book.BookDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 取消销售预定房间审核 extends  AbstractOperation implements Operation  {

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
		bDao.cancelComAccountBookRoom(id);
	}
}
