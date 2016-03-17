package com.quiven.operation.前台信息;


import com.quiven.dao.DaoManager;
import com.quiven.dao.member.MemberDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;



public class 查询基本信息 extends  AbstractOperation implements Operation {

	private Member member;
	private Account account;
	private long account_id;
	@Override 
	public void execute() throws Exception {
		 Account account = OperationContext.getContext().getCusAccount();
		 System.out.println(account.getId());
	  account_id = account.getId();
		 MemberDao memberDao = DaoManager.getInstance().getDao(MemberDao.class);
			member = memberDao.getMemberbyMembeId(account_id);
	}
	
	public Member getMember() {
		return member;
	}
	public void setMember(Member member) {
		this.member = member;
	}
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	public long getAccount_id() {
		return account_id;
	}
	public void setAccount_id(long account_id) {
		this.account_id = account_id;
	}

	 
}
