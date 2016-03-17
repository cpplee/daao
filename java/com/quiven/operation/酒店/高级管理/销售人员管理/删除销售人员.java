package com.quiven.operation.酒店.高级管理.销售人员管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除销售人员 extends AbstractOperation implements Operation {

	private long salerId;



	public long getSalerId() {
		return salerId;
	}



	public void setSalerId(long salerId) {
		this.salerId = salerId;
	}



	public void execute() throws Exception {

		ComAccountDao caDao = DaoManager.getInstance().getDao(
				ComAccountDao.class);
		caDao.deleteSaler(salerId);

	}
	

}
