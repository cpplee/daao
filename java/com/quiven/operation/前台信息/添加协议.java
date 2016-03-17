package com.quiven.operation.前台信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.member.MemberDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.MemberAgreeList;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加协议  extends AbstractOperation implements Operation {

	
	private long memberId;
	private MemberAgreeList memberAgreeList;
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getCusAccount();
		MemberDao mccDao = DaoManager.getInstance().getDao(MemberDao.class);
		memberId = mccDao.getMemberIdByAccountId(account.getId());
		mccDao.addMemberAgreeListByMemberId(memberId, memberAgreeList);
		
		
		
	}
	
	public long getMemberId() {
		return memberId;
	}

	public void setMemberId(long memberId) {
		this.memberId = memberId;
	}

	public MemberAgreeList getMemberAgreeList() {
		return memberAgreeList;
	}
	public void setMemberAgreeList(MemberAgreeList memberAgreeList) {
		this.memberAgreeList = memberAgreeList;
	}

	
	
}
