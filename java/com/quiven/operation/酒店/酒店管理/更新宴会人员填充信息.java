package com.quiven.operation.酒店.酒店管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.member.MemberBookingBanquet;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 更新宴会人员填充信息 extends AbstractOperation implements Operation {
	private long id;
	private MemberBookingBanquet memberBookingBanquet;
	
	public void execute() throws Exception
	{
		HotelDao hDao = DaoManager.getInstance().getDao(HotelDao.class);
		hDao.updateMemberBookingBanquetById(id, memberBookingBanquet);
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public MemberBookingBanquet getMemberBookingBanquet() {
		return memberBookingBanquet;
	}

	public void setMemberBookingBanquet(MemberBookingBanquet memberBookingBanquet) {
		this.memberBookingBanquet = memberBookingBanquet;
	}


}
