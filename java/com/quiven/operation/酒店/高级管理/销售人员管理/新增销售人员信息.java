package com.quiven.operation.酒店.高级管理.销售人员管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.comAccount.Saler;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 新增销售人员信息 extends AbstractOperation implements Operation{
	
	private Saler salerAccount;
		
	public Saler getSalerAccount() {
		return salerAccount;
	}

	public void setSalerAccount(Saler salerAccount) {
		this.salerAccount = salerAccount;
	}

	public void execute() throws Exception {
	    
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.addSaler(salerAccount);
		
	}
	
	

}
