package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.dao.book.BookDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.MemberBookingStore;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加专门店预定信息 extends AbstractOperation implements Operation {
	private MemberBookingStore memberBookingStore;
	private long hotelId;
	private String message;
	private long storeId;

	public MemberBookingStore getMemberBookingStore() {
		return memberBookingStore;
	}

	public void setMemberBookingStore(MemberBookingStore memberBookingStore) {
		this.memberBookingStore = memberBookingStore;
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

	public long getStoreId() {
		return storeId;
	}

	public void setStoreId(long storeId) {
		this.storeId = storeId;
	}

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getCusAccount();
		AccountDao aDao = DaoManager.getInstance().getDao(AccountDao.class);
		long memberId = aDao.getMemberIdByAccountId(account.getId());
		BookDao bDao = DaoManager.getInstance().getDao(BookDao.class);
		message = bDao.addBookSpecialtyInfo(hotelId, memberId, storeId, memberBookingStore);
		//message="hahahahha";
	}

}
