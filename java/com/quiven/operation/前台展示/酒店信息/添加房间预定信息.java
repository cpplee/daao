package com.quiven.operation.前台展示.酒店信息;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.dao.book.BookDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.MemberBookingRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加房间预定信息 extends AbstractOperation implements Operation {
	private MemberBookingRoom memberBookingRoom;
	private long hotelId;
	private String roomType;
	private String message;

	public long getHotelId() {
		return hotelId;
	}

	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}

	public MemberBookingRoom getMemberBookingRoom() {
		return memberBookingRoom;
	}

	public void setMemberBookingRoom(MemberBookingRoom memberBookingRoom) {
		this.memberBookingRoom = memberBookingRoom;
	}

	public String getRoomType() {
		return roomType;
	}

	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getCusAccount();
		AccountDao aDao = DaoManager.getInstance().getDao(AccountDao.class);
		long memberId = aDao.getMemberIdByAccountId(account.getId());
		BookDao bDao = DaoManager.getInstance().getDao(BookDao.class);
		message = bDao.addBookRoomInfo(hotelId, memberId, roomType,
				memberBookingRoom);

	}

	

}
