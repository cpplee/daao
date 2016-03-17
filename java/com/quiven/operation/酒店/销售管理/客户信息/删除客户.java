package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除客户 extends AbstractOperation implements Operation  {
	
	private long comAccountId;
	
	
	
	public void execute() throws Exception
	{
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.deleteComAccountById(comAccountId);
	
	
	}

	public long getComAccountId() {
		return comAccountId;
	}

	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}

}
