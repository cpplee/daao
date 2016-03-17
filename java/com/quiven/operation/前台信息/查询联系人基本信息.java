package com.quiven.operation.前台信息;


import com.quiven.dao.DaoManager;
import com.quiven.dao.member.MemberDao;

import com.quiven.entity.member.MemberCommonContact;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;




public class 查询联系人基本信息 extends  AbstractOperation implements Operation {

	private MemberCommonContact mcc;
	
	private long id;
	@Override 
	public void execute() throws Exception {
		     
		 MemberDao memberDao = DaoManager.getInstance().getDao(MemberDao.class);
		  mcc = memberDao.getMemberCommonContactByid(id);
			
	}
	public MemberCommonContact getMember() {
		return mcc;
	}
	public void setMember(MemberCommonContact mcc) {
		this.mcc = mcc;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	


	 
}
