package com.quiven.operation.公用;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 前台用户注册 extends AbstractOperation implements Operation {
	private Member member;
	private String password;
	private String message;

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
			AccountDao aDao = DaoManager.getInstance().getDao(AccountDao.class);
			//System.out.println(member.getName() + "" + member.getPhone() + ""+ member.getEmail());
			//System.out.println(password);
			setMessage(aDao.addAccount(member, password));

	}

}
