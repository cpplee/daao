package com.quiven.operation.酒店.酒店管理;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 团队人员分配  extends AbstractOperation implements Operation{

	private long memberId;
	private Member memberAccount;
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
	memberAccount.setId(memberId);
     HotelDao hDao = DaoManager.getInstance().getDao(HotelDao.class);
     
     hDao.updateMemberBymemberId(memberAccount);
	}

	public Member getMemberAccount() {
		return memberAccount;
	}

	public void setMemberAccount(Member memberAccount) {
		this.memberAccount = memberAccount;
	}

	public long getMemberId() {
		return memberId;
	}

	public void setMemberId(long memberId) {
		this.memberId = memberId;
	}
	
	

}
