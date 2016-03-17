package com.quiven.operation.酒店.销售管理.客户信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列预订房间订单  extends  AbstractOperation implements Operation  {

	private int offset;
	private int limit;
	
	private int total;
	private List<ComAccountBookRoom> data;
	private long comAccountId;
	
	public void execute() throws Exception
	{
		Account account = OperationContext.getContext().getAccount();
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		PagedList<ComAccountBookRoom> list = caDao.listBooking(salerId,comAccountId,offset,limit);
		
		total = list.getTotal();
		data = list.getData();

		
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

	public List<ComAccountBookRoom> getData() {
		return data;
	}

	public void setData(List<ComAccountBookRoom> data) {
		this.data = data;
	}

	public long getComAccountId() {
		return comAccountId;
	}

	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}


}
