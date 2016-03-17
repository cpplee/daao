package com.quiven.operation.酒店.酒店管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.member.MemberBookingRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 填充预定房间人员信息 extends AbstractOperation implements Operation{

	
	private long id;
	private MemberBookingRoom memberBookingRoom;

	
	
	
	public long getId() {
		return id;
	}




	public void setId(long id) {
		this.id = id;
	}







	public MemberBookingRoom getMemberBookingRoom() {
		return memberBookingRoom;
	}




	public void setMemberBookingRoom(MemberBookingRoom memberBookingRoom) {
		this.memberBookingRoom = memberBookingRoom;
	}




	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		
		HotelDao hDao=DaoManager.getInstance().getDao(HotelDao.class);
		memberBookingRoom = hDao.getMemberBookingRoomById(id);
	//	memberBookingRoom.setStarttime(memberBookingRoom.getArriveTime());
		
	}

	
}
