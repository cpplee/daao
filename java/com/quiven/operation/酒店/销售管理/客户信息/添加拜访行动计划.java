package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加拜访行动计划  extends AbstractOperation implements Operation{
	private ComAccountActivityPlan comAccountActivityPlan; 
	private Long comAccountId;

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();

		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		ComAccountDao comAccountDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		comAccountDao.addActivity(salerId, comAccountId, comAccountActivityPlan);
		
	}

	
	
	public ComAccountActivityPlan getComAccountActivityPlan() {
		return comAccountActivityPlan;
	}

	public void setComAccountActivityPlan(
			ComAccountActivityPlan comAccountActivityPlan) {
		this.comAccountActivityPlan = comAccountActivityPlan;
	}
	public long getComAccountId() {
		return comAccountId;
	}



	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}
	
	public void setComAccountId(Long comAccountId) {
		this.comAccountId = comAccountId;
	}

	
}
