package com.quiven.operation.前台信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.member.MemberDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 更新基本信息 extends AbstractOperation implements Operation{


	private Member member;
	private long account_id;
	

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getCusAccount();
	    account_id = account.getId();
		MemberDao memberDao = DaoManager.getInstance().getDao(MemberDao.class);
		System.out.println("证件代码："+member.getEmail());
		 memberDao.updateMember(member, account_id);
		
		
	}



	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public long getAccount_id() {
		return account_id;
	}

	public void setAccount_id(long account_id) {
		this.account_id = account_id;
	}
	
}
