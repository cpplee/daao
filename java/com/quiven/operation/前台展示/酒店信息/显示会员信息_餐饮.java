package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.entity.Account;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 显示会员信息_餐饮 extends AbstractOperation implements Operation {

	private Member member;
	private String bookManName;
	private String bookRestaurantCerType;
	private String bookRestaurantCerNumber;
	private String bookRestaurantPhone;
	
	public String getBookManName() {
		return bookManName;
	}

	public void setBookManName(String bookManName) {
		this.bookManName = bookManName;
	}

	public String getBookRestaurantCerType() {
		return bookRestaurantCerType;
	}

	public void setBookRestaurantCerType(String bookRestaurantCerType) {
		this.bookRestaurantCerType = bookRestaurantCerType;
	}

	public String getBookRestaurantCerNumber() {
		return bookRestaurantCerNumber;
	}

	public void setBookRestaurantCerNumber(String bookRestaurantCerNumber) {
		this.bookRestaurantCerNumber = bookRestaurantCerNumber;
	}

	public String getBookRestaurantPhone() {
		return bookRestaurantPhone;
	}

	public void setBookRestaurantPhone(String bookRestaurantPhone) {
		this.bookRestaurantPhone = bookRestaurantPhone;
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
		bookManName=member.getName();
		bookRestaurantCerType=member.getCertificate();
		bookRestaurantCerNumber=member.getCerNum();
		bookRestaurantPhone=member.getPhone();

	}

}
