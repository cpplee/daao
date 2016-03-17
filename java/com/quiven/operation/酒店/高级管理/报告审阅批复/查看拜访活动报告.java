package com.quiven.operation.酒店.高级管理.报告审阅批复;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountActivityLog;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 查看拜访活动报告 extends AbstractOperation implements Operation {

	private long comAccountActivityLogId;
	private ComAccountActivityLog  comAccountActivityLog;
	
	public void execute() throws Exception
	{
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		comAccountActivityLog = caDao.getComAccountActivityLog(comAccountActivityLogId);
		Account account = OperationContext.getContext().getAccount();
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		comAccountActivityLog.setSalerName(caDao.getSalerNamebyId(salerId));
		
	}

	public long getComAccountActivityLogId() {
		return comAccountActivityLogId;
	}

	public void setComAccountActivityLogId(long comAccountActivityLogId) {
		this.comAccountActivityLogId = comAccountActivityLogId;
	}

	public ComAccountActivityLog getComAccountActivityLog() {
		return comAccountActivityLog;
	}

	public void setComAccountActivityLog(ComAccountActivityLog comAccountActivityLog) {
		this.comAccountActivityLog = comAccountActivityLog;
	}

	
}
