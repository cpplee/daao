package com.quiven.operation.前台信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.member.MemberDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.Member;
import com.quiven.entity.member.MemberBookingRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列消费记录信息 extends AbstractOperation implements Operation{

	private int offset;
	private int limit;
	private int total;
	private List<MemberBookingRoom> data;
	private Member member;
	



	

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
        Account account = OperationContext.getContext().getCusAccount();
        MemberDao mccDao = DaoManager.getInstance().getDao(MemberDao.class);
		long memberId = mccDao.getMemberIdByAccountId(account.getId());
		  member = mccDao.getMemberById(memberId);
		PagedList<MemberBookingRoom> list = mccDao.listMemberBookingRoom(memberId, offset, limit);

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
	public List<MemberBookingRoom> getData() {
		return data;
	}
	public void setData(List<MemberBookingRoom> data) {
		this.data = data;
	}
	
	public Member getMember() {
		return member;
	}


	public void setMember(Member member) {
		this.member = member;
	}


}
