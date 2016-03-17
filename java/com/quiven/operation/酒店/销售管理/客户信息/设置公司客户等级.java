package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 设置公司客户等级 extends AbstractOperation implements Operation {
	private long comAccountId;
	private String comAccountType;
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		caDao.updateComAccountTalent(salerId, comAccountId, comAccountType);
	}

	public long getComAccountId() {
		return comAccountId;
	}

	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}

	public String getComAccountType() {
		return comAccountType;
	}

	public void setComAccountType(String comAccountType) {
		this.comAccountType = comAccountType;
	}

	

	
}
