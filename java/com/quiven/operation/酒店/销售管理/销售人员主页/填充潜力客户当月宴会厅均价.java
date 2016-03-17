package com.quiven.operation.酒店.销售管理.销售人员主页;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 填充潜力客户当月宴会厅均价 extends AbstractOperation implements Operation {

	private double price;
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//获取当前销售人员ID
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		price = caDao.getProspAccountBanquetPrice(salerId);

	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}


	
	
}
