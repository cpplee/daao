package com.quiven.operation.酒店.高级管理.销售人员管理;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.Saler;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列销售人员  extends  AbstractOperation implements Operation  {

	private int offset;
	private int limit;
	
	private int total;
	private List<Saler> data;

	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		PagedList<Saler> list = caDao.listSaler(salerId, offset, limit);
		total = list.getTotal();
		setData(list.getData());
	
	
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
	public List<Saler> getData() {
		return data;
	}
	public void setData(List<Saler> data) {
		this.data = data;
	}



}
