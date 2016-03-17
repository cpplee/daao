package com.quiven.operation.酒店.销售管理.销售人员主页;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 填充核心客户数量 extends AbstractOperation implements Operation {

	private long count;
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//获取当前销售人员ID
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		count = caDao.getCoreAccountCount(salerId);
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	
	
	
}
