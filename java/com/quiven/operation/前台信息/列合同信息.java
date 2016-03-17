package com.quiven.operation.前台信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.member.MemberDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.MemberAgreeList;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列合同信息 extends AbstractOperation implements Operation{

	
	private int limit;
	private int total;
	private int offset;
	private List<MemberAgreeList> data;
	@Override
	public void execute() throws Exception {
		
		    Account account = OperationContext.getContext().getCusAccount();
	        MemberDao mccDao = DaoManager.getInstance().getDao(MemberDao.class);
			long memberId = mccDao.getMemberIdByAccountId(account.getId());
			PagedList<MemberAgreeList> list = mccDao.listMemberAgreeList(memberId, offset, limit);
		
			data = list.getData();
			total = list.getTotal();
			setTotal(total);
			setData(data);		
		
		
		
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
	public int getOffset() {
		return offset;
	}
	public void setOffset(int offset) {
		this.offset = offset;
	}
	public List<MemberAgreeList> getData() {
		return data;
	}
	public void setData(List<MemberAgreeList> data) {
		this.data = data;
	}

	
	
}
