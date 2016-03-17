package com.quiven.operation.酒店.销售管理.销售活动;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列拜访时间  extends  AbstractOperation implements Operation  {

	private int total;
	private List<ComAccountActivityPlan> data;
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		PagedList<ComAccountActivityPlan> list = caDao.listActivityTime(salerId);
		total = list.getTotal();
		data = list.getData();
	
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}

	public List<ComAccountActivityPlan> getData() {
		return data;
	}
	public void setData(List<ComAccountActivityPlan> data) {
		this.data = data;
	}

	
}
