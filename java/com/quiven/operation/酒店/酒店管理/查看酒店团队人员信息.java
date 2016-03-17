package com.quiven.operation.酒店.酒店管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 查看酒店团队人员信息 extends AbstractOperation implements Operation{

	
	private long memberId;
	private Member memberAccount;
	
	public long getMemberId() {
		return memberId;
	}

	public void setMemberId(long memberId) {
		this.memberId = memberId;
	}

	
	public Member getMemberAccount() {
		return memberAccount;
	}

	public void setMemberAccount(Member memberAccount) {
		this.memberAccount = memberAccount;
	}

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		
		HotelDao hDao=DaoManager.getInstance().getDao(HotelDao.class);
		memberAccount = hDao.getMemberBymemberId(memberId);
		
	}

	
}
