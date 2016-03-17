package com.quiven.operation.前台信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.member.MemberDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.MemberCommonContact;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加常用联系人信息 extends AbstractOperation implements Operation{

	private long memberId;
	private MemberCommonContact mcc;
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getCusAccount();
		MemberDao mccDao = DaoManager.getInstance().getDao(MemberDao.class);
		memberId = mccDao.getMemberIdByAccountId(account.getId());
		System.out.println(memberId);
		mccDao.addContactMemberByMemberId(memberId, mcc);
		
	}
	public long getMemberId() {
		return memberId;
	}
	public void setMemberId(long memberId) {
		this.memberId = memberId;
	}
	public MemberCommonContact getMcc() {
		return mcc;
	}
	public void setMcc(MemberCommonContact mcc) {
		this.mcc = mcc;
	}

	
	
	
}
