package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.entity.Account;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 显示会员信息_宴会 extends AbstractOperation implements Operation {

	private Member member;
	private String bookName;
	private String bookBanquetCerType;
	private String bookBanquetCerNumber;
	private String bookBanquetPhone;

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

	public String getBookBanquetCerType() {
		return bookBanquetCerType;
	}

	public void setBookBanquetCerType(String bookBanquetCerType) {
		this.bookBanquetCerType = bookBanquetCerType;
	}

	public String getBookBanquetCerNumber() {
		return bookBanquetCerNumber;
	}

	public void setBookBanquetCerNumber(String bookBanquetCerNumber) {
		this.bookBanquetCerNumber = bookBanquetCerNumber;
	}

	public String getBookBanquetPhone() {
		return bookBanquetPhone;
	}

	public void setBookBanquetPhone(String bookBanquetPhone) {
		this.bookBanquetPhone = bookBanquetPhone;
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
		bookBanquetCerType = member.getCertificate();
		bookBanquetCerNumber = member.getCerNum();
		bookBanquetPhone = member.getPhone();

	}

}
