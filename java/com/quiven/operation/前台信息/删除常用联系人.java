package com.quiven.operation.前台信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.member.MemberDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除常用联系人 extends AbstractOperation implements Operation {

	private int id;
	
	@Override
	public void execute() throws Exception {
		MemberDao memberDao= DaoManager.getInstance().getDao(MemberDao.class);
		memberDao.deleteMemberCommonContactByid(id);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
