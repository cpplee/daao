package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.entity.Account;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 显示会员信息_酒店 extends AbstractOperation implements Operation {

	private Member member;
	private String bookName;
	private String bookCerType;
	private String bookCerNumber;
	private String bookPhone;
	
	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookCerType() {
		return bookCerType;
	}

	public void setBookCerType(String bookCerType) {
		this.bookCerType = bookCerType;
	}

	public String getBookCerNumber() {
		return bookCerNumber;
	}

	public void setBookCerNumber(String bookCerNumber) {
		this.bookCerNumber = bookCerNumber;
	}

	public String getBookPhone() {
		return bookPhone;
	}

	public void setBookPhone(String bookPhone) {
		this.bookPhone = bookPhone;
	}

	
	
	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getCusAccount();
		AccountDao aDao = DaoManager.getInstance().getDao(AccountDao.class);
		long memberId = aDao.getMemberIdByAccountId(account.getId());
		// System.out.println(memberId);
		member = aDao.getMemberInfoById(memberId);
		bookName=member.getName();
		bookCerType=member.getCertificate();
		bookCerNumber=member.getCerNum();
		bookPhone=member.getPhone();

	}

}
