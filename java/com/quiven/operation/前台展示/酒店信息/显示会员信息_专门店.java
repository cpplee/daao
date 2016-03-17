package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.entity.Account;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 显示会员信息_专门店 extends AbstractOperation implements Operation {

	private Member member;
	private String bookName;
	private String bookStoreCerType;
	private String bookStoreCerNumber;
	private String bookStorePhone;

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookStoreCerType() {
		return bookStoreCerType;
	}

	public void setBookStoreCerType(String bookStoreCerType) {
		this.bookStoreCerType = bookStoreCerType;
	}

	public String getBookStoreCerNumber() {
		return bookStoreCerNumber;
	}

	public void setBookStoreCerNumber(String bookStoreCerNumber) {
		this.bookStoreCerNumber = bookStoreCerNumber;
	}

	public String getBookStorePhone() {
		return bookStorePhone;
	}

	public void setBookStorePhone(String bookStorePhone) {
		this.bookStorePhone = bookStorePhone;
	}

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getCusAccount();
		AccountDao aDao = DaoManager.getInstance().getDao(AccountDao.class);
		long memberId = aDao.getMemberIdByAccountId(account.getId());
		// System.out.println(memberId);
		member = aDao.getMemberInfoById(memberId);
		bookName = member.getName();
		bookStoreCerType = member.getCertificate();
		bookStoreCerNumber = member.getCerNum();
		bookStorePhone = member.getPhone();

	}

}
