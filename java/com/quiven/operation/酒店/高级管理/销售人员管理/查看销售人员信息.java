package com.quiven.operation.酒店.高级管理.销售人员管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.comAccount.Saler;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 查看销售人员信息 extends AbstractOperation implements Operation {
	private long salerId;
	private Saler salerAccount;
	public long getSalerId() {
		return salerId;
	}

	public void setSalerId(long salerId) {
		this.salerId = salerId;
	}

	public Saler getSalerAccount() {
		return salerAccount;
	}

	public void setSalerAccount(Saler salerAccount) {
		this.salerAccount = salerAccount;
	}

	
	
	public void execute() throws Exception
	{
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		salerAccount=caDao.getSalerBySalerId(salerId);
		
	}

	

	
}
