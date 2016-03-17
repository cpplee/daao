package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除客户联系人 extends AbstractOperation implements Operation  {
	
	private long comAccountContactsId;
	
	public void execute() throws Exception
	{
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.deleteComAccountContact(comAccountContactsId);
	
	
	}

	public long getComAccountContactsId() {
		return comAccountContactsId;
	}



	public void setComAccountContactsId(long comAccountContactsId) {
		this.comAccountContactsId = comAccountContactsId;
	}


}
