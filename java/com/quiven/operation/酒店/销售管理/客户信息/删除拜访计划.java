package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除拜访计划 extends AbstractOperation implements Operation  {
	
	private long comAccountActivityPlanId;
	
	public void execute() throws Exception
	{
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.deleteActivity(comAccountActivityPlanId);;
	
	
	}

	public long getComAccountActivityPlanId() {
		return comAccountActivityPlanId;
	}

	public void setComAccountActivityPlanId(long comAccountActivityPlanId) {
		this.comAccountActivityPlanId = comAccountActivityPlanId;
	}



}
