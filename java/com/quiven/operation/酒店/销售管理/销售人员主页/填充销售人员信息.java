package com.quiven.operation.酒店.销售管理.销售人员主页;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.Saler;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 填充销售人员信息 extends AbstractOperation implements Operation {

	private Saler saler;
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		//获取当前销售人员ID
		long salerId = caDao.getSalerIdByAccountId(account.getId());
	    saler =	caDao.getSalerBySalerId(salerId);
	    saler.setHotelname(caDao.getHotelNameById(saler.getHotelId()));
	}

	public Saler getSaler() {
		return saler;
	}

	public void setSaler(Saler saler) {
		this.saler = saler;
	}

	
	
}
