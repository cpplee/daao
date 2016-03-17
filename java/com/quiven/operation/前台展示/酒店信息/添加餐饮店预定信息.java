package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.dao.book.BookDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.MemberBookingRestaurant;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加餐饮店预定信息 extends AbstractOperation implements Operation {
	private MemberBookingRestaurant memberBookingRestaurant;
	private long hotelId;
	private String message;
	private long resaurantbarsid;

	public MemberBookingRestaurant getMemberBookingRestaurant() {
		return memberBookingRestaurant;
	}

	public void setMemberBookingRestaurant(
			MemberBookingRestaurant memberBookingRestaurant) {
		this.memberBookingRestaurant = memberBookingRestaurant;
	}

	public long getHotelId() {
		return hotelId;
	}

	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public long getResaurantbarsid() {
		return resaurantbarsid;
	}

	public void setResaurantbarsid(long resaurantbarsid) {
		this.resaurantbarsid = resaurantbarsid;
	}

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getCusAccount();
		AccountDao aDao = DaoManager.getInstance().getDao(AccountDao.class);
		long memberId = aDao.getMemberIdByAccountId(account.getId());
		BookDao bDao = DaoManager.getInstance().getDao(BookDao.class);

		message = bDao.addBookRestaurantIonfo(hotelId, memberId,
				resaurantbarsid, memberBookingRestaurant);

	}

}
