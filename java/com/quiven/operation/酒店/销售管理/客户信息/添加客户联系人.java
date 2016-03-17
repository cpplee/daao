package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountContact;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加客户联系人 extends AbstractOperation implements Operation{
	
	private ComAccountContact comAccountContact;
	private long comAccountId;
	@Override
	public void execute() throws Exception {
	    
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao comAccountContactInfoDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = comAccountContactInfoDao.getSalerIdByAccountId(account.getId());
		long comAccountContactId = comAccountContactInfoDao.addComAccountContact(salerId,comAccountId,comAccountContact);
		if(comAccountContactId == 0)
		{
			throw new Exception("你所输入的联系人姓名已经存在请重新输入！"); 
		}
		System.out.println(comAccountContactId);
	}
	
	public ComAccountContact getComAccountContact() {
		return comAccountContact;
	}
	public void setComAccountContact(ComAccountContact comAccountContact) {
		this.comAccountContact = comAccountContact;
	}

	public long getComAccountId() {
		return comAccountId;
	}

	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}

}
