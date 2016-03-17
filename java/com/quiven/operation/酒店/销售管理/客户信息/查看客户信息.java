package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.entity.comAccount.Saler;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 查看客户信息 extends AbstractOperation implements Operation {
	private long comAccountId;
	private ComAccount comAccount;
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//获取当前销售人员ID
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		Saler saler = caDao.getSalerBySalerId(salerId);
		comAccount= caDao.getComAccountByIdAndSalerId(salerId,comAccountId);
		comAccount.setSaler(saler);
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
