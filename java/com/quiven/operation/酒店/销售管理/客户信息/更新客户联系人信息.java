package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.comAccount.ComAccountContact;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 更新客户联系人信息 extends AbstractOperation implements Operation {
	private long comAccountContactId;
	private ComAccountContact comAccountContact;
	
	public void execute() throws Exception
	{
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.updateComAccountContactById(comAccountContactId, comAccountContact);
	}

	

	public long getComAccountContactId() {
		return comAccountContactId;
	}

	public void setComAccountContactId(long comAccountContactId) {
		this.comAccountContactId = comAccountContactId;
	}



	public ComAccountContact getComAccountContact() {
		return comAccountContact;
	}



	public void setComAccountContact(ComAccountContact comAccountContact) {
		this.comAccountContact = comAccountContact;
	}



}
