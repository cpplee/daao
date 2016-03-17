package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 查看拜访活动信息 extends AbstractOperation implements Operation {
	
	private long comAccountActivityPlanId;
	private ComAccountActivityPlan comAccountActivityPlan;
	
	public void execute() throws Exception
	{	
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//获取当前销售人员ID	     
		comAccountActivityPlan = caDao.getComAccountActivityById(comAccountActivityPlanId);
		
	}

	

	public ComAccountActivityPlan getComAccountActivityPlan() {
		return comAccountActivityPlan;
	}

	public void setComAccountActivityPlan(ComAccountActivityPlan comAccountActivityPlan) {
		this.comAccountActivityPlan = comAccountActivityPlan;
	}



	public long getComAccountActivityPlanId() {
		return comAccountActivityPlanId;
	}



	public void setComAccountActivityPlanId(long comAccountActivityPlanId) {
		this.comAccountActivityPlanId = comAccountActivityPlanId;
	}

	
}
