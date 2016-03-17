package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 新增拜访行动计划  extends AbstractOperation implements Operation{
	private ComAccountActivityPlan comAccountActivityPlan; 
	private String  comAccountName;

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();

		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		ComAccountDao comAccountDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		comAccountDao.addActivityByComPanyName(salerId, comAccountName, comAccountActivityPlan);
		
	}

	
	
	public ComAccountActivityPlan getComAccountActivityPlan() {
		return comAccountActivityPlan;
	}

	public void setComAccountActivityPlan(
			ComAccountActivityPlan comAccountActivityPlan) {
		this.comAccountActivityPlan = comAccountActivityPlan;
	}



	public String getComAccountName() {
		return comAccountName;
	}



	public void setComAccountName(String comAccountName) {
		this.comAccountName = comAccountName;
	}
	
	
}
