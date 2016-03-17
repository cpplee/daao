package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加客户  extends AbstractOperation implements Operation{
	private ComAccount comAccount; 
	private long comAccountId;


	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();

		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		
		ComAccountDao comAccountDao = DaoManager.getInstance().getDao(ComAccountDao.class);
	    comAccountId = comAccountDao.addComAccount(salerId,comAccount);
		if(comAccountId == 0)
		{
			throw new Exception("你所输入的公司名称已经存在请重新输入！"); 
		}
		
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
