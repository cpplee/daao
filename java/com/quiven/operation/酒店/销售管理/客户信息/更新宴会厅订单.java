package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.comAccount.ComAccountBookBanquet;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 更新宴会厅订单 extends AbstractOperation implements Operation {
	private long comAccountBookBanquetId;
	private ComAccountBookBanquet comAccountBookBanquet;
	
	public void execute() throws Exception
	{
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.updateBanquet(comAccountBookBanquetId, comAccountBookBanquet);
	
	}

	public long getComAccountBookBanquetId() {
		return comAccountBookBanquetId;
	}

	public void setComAccountBookBanquetId(long comAccountBookBanquetId) {
		this.comAccountBookBanquetId = comAccountBookBanquetId;
	}

	public ComAccountBookBanquet getComAccountBookBanquet() {
		return comAccountBookBanquet;
	}

	public void setComAccountBookBanquet(ComAccountBookBanquet comAccountBookBanquet) {
		this.comAccountBookBanquet = comAccountBookBanquet;
	}

	
}
