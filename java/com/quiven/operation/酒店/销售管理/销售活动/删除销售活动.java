package com.quiven.operation.酒店.销售管理.销售活动;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除销售活动  extends  AbstractOperation implements Operation  {

	private long activityPlanId;
	
	public void execute() throws Exception
	{
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.deleteActivity(activityPlanId);
		
	
	}

	public long getActivityPlanId() {
		return activityPlanId;
	}

	public void setActivityPlanId(long activityPlanId) {
		this.activityPlanId = activityPlanId;
	}


	
	
}
