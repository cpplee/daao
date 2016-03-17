package com.quiven.operation.酒店.高级管理.宴会会议厅预定管理;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.book.BookDao;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountBookBanquet;
import com.quiven.entity.member.MemberBookingBanquet;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列销售宴会会议厅预定列表 extends AbstractOperation implements Operation {

	private int offset;
	private int limit;
	private int total;
	private List<ComAccountBookBanquet> data;

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



	public List<ComAccountBookBanquet> getData() {
		return data;
	}

	public void setData(List<ComAccountBookBanquet> data) {
		this.data = data;
	}

	public void execute() throws Exception {
		Account account = OperationContext.getContext().getAccount();
		long accountId = account.getId();
		ComAccountDao adao = DaoManager.getInstance().getDao(
				ComAccountDao.class);
		long hotelId = adao.getHotelIdByaccountId(accountId);

		BookDao bdao = DaoManager.getInstance().getDao(BookDao.class);
		
		
		PagedList<ComAccountBookBanquet> list = bdao.listComAccountBookBanquet(hotelId, offset,limit);
		total = list.getTotal();
		setData(list.getData());

	}

	

}
