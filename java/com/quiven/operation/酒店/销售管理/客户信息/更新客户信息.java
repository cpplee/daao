package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 更新客户信息 extends AbstractOperation implements Operation {
	private long comAccountId;
	private ComAccount comAccount;
	
	public void execute() throws Exception
	{
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.updateComAccountById(comAccountId, comAccount);
	}

	public long getComAccountId() {
		return comAccountId;
	}

	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}

	public ComAccount getComAccount() {
		return comAccount;
	}

	public void setComAccount(ComAccount comAccount) {
		this.comAccount = comAccount;
	}

}
