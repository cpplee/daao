package com.quiven.operation.前台信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.member.MemberDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.MemberCommonContact;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列常用联系人信息 extends AbstractOperation implements Operation{

	private int offset;
	private int limit;
	private int total;
	private List<MemberCommonContact> data;
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
        Account account = OperationContext.getContext().getCusAccount();
        MemberDao mccDao = DaoManager.getInstance().getDao(MemberDao.class);
		long memberId = mccDao.getMemberIdByAccountId(account.getId());
		PagedList<MemberCommonContact> list = mccDao.listMemberCommonContact(memberId, offset, limit);
	
		data = list.getData();
		total = list.getTotal();
		setTotal(total);
		setData(data);		
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
	public List<MemberCommonContact> getData() {
		return data;
	}
	public void setData(List<MemberCommonContact> data) {
		this.data = data;
	}

}
