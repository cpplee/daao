package com.quiven.operation.酒店.高级管理.房间预定管理;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.book.BookDao;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列销售预定房间 extends AbstractOperation implements Operation {

	private int offset;
	private int limit;
	private int total;
	private List<ComAccountBookRoom> data;

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

	public void execute() throws Exception {
		Account account = OperationContext.getContext().getAccount();
		long accountId = account.getId();
		ComAccountDao adao = DaoManager.getInstance().getDao(
				ComAccountDao.class);
		long hotelId = adao.getHotelIdByaccountId(accountId);

		BookDao bdao = DaoManager.getInstance().getDao(BookDao.class);
		PagedList<ComAccountBookRoom> list = bdao.listComAccountBookRoom(hotelId, offset,limit);
		total = list.getTotal();
		setData(list.getData());
    
	}

}
