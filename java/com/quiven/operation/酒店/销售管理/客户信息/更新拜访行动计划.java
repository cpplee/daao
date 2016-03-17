package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 更新拜访行动计划 extends AbstractOperation implements Operation {
	private long comAccountActivityId;
	private ComAccountActivityPlan comAccountActivityPlan;
	
	public void execute() throws Exception
	{
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.updateActivity(comAccountActivityId, comAccountActivityPlan);
	}

	public long getComAccountActivityId() {
		return comAccountActivityId;
	}

	public void setComAccountActivityId(long comAccountActivityId) {
		this.comAccountActivityId = comAccountActivityId;
	}

	public ComAccountActivityPlan getComAccountActivityPlan() {
		return comAccountActivityPlan;
	}

	public void setComAccountActivityPlan(
			ComAccountActivityPlan comAccountActivityPlan) {
		this.comAccountActivityPlan = comAccountActivityPlan;
	}

	

}
