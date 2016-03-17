package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountTalentAnalysis;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加客户潜力分析结果 extends AbstractOperation implements Operation {
	private long comAccountId;
	private ComAccountTalentAnalysis comAccountTalentAnalysis;
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//获取当前销售人员ID
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		caDao.addComAccountTalentAnalysis(salerId, comAccountId, comAccountTalentAnalysis);
	}

	public long getComAccountId() {
		return comAccountId;
	}

	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}

	public ComAccountTalentAnalysis getComAccountTalentAnalysis() {
		return comAccountTalentAnalysis;
	}

	public void setComAccountTalentAnalysis(
			ComAccountTalentAnalysis comAccountTalentAnalysis) {
		this.comAccountTalentAnalysis = comAccountTalentAnalysis;
	}

	
	
}
