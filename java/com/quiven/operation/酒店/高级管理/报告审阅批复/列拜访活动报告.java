package com.quiven.operation.酒店.高级管理.报告审阅批复;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.entity.comAccount.ComAccountActivityLog;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列拜访活动报告  extends  AbstractOperation implements Operation  {

	private int offset;
	private int limit;
	
	private int total;
	private List<ComAccountActivityLog> data;

	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		PagedList<ComAccountActivityLog> list = caDao.listActivityLog(salerId, offset, limit);
		total = list.getTotal();
		data = list.getData();
		for(ComAccountActivityLog comactivitylog : data)
		{
			long comaccountid = comactivitylog.getComAccountId();
			ComAccount comaccount = caDao.getComAccountById(comaccountid);
			comactivitylog.setComAccount(comaccount);		
		}

	
	}
	public int getOffset() {
		return offset;
	}
	public void setOffset(int offset) {
		this.offset = offset;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public List<ComAccountActivityLog> getData() {
		return data;
	}
	public void setData(List<ComAccountActivityLog> data) {
		this.data = data;
	}


}
