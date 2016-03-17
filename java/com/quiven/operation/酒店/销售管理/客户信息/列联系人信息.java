package com.quiven.operation.酒店.销售管理.客户信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountContact;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列联系人信息  extends  AbstractOperation implements Operation  {
					
	private long comAccountId;
	private int offset;
	private int limit;

	private List<ComAccountContact> data;
	private int total;

	
	public void execute() throws Exception
	{
		Account account =  OperationContext.getContext().getAccount();
		ComAccountDao uDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = uDao.getSalerIdByAccountId(account.getId());
		PagedList<ComAccountContact> list = uDao.ListAllConnactInfo(salerId,comAccountId, offset, limit);
		total = list.getTotal();
		data = list.getData();
	}


	public long getComAccountId() {
		return comAccountId;
	}


	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
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


	public List<ComAccountContact> getData() {
		return data;
	}


	public void setData(List<ComAccountContact> data) {
		this.data = data;
	}


	public int getTotal() {
		return total;
	}


	public void setTotal(int total) {
		this.total = total;
	}
	
}
