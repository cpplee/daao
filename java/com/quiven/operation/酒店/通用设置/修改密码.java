package com.quiven.operation.酒店.通用设置;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.entity.Account;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;
import com.quiven.util.EncodePassword;

public class 修改密码 extends AbstractOperation implements Operation {
	private static Log log = LogFactory.getLog(修改密码.class);
	private String oldPass;
	private String newPass;
	private Account account;
	private String isSuccess;
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		account = new Account();
		if (oldPass == null) {
			oldPass = "";
			newPass = "";
			setIsSuccess("false");
			if (log.isInfoEnabled()) log.info("用户 " + account.getLogin() + " 修改密码失败");
		}
		else if (newPass == null){
			oldPass = "";
			newPass = "";
			setIsSuccess("false");
			if (log.isInfoEnabled()) log.info("用户 " + account.getLogin() + " 修改密码失败");
		}
		else {
			OperationContext context = OperationContext.getContext();
			HttpServletRequest request = context.getRequest();
			HttpSession session = request.getSession();
			account = (Account)session.getAttribute("account");
			AccountDao accountDao = DaoManager.getInstance().getDao(AccountDao.class);
			if (EncodePassword.encodePassword(oldPass).equals(account.getPassword())) {
				account.setPassword(EncodePassword.encodePassword(newPass));
				accountDao.updateAccount(account);
				setIsSuccess("true");
				if (log.isInfoEnabled()) log.info("用户 " + account.getLogin() + " 修改密码成功");
			}
			else {
				setIsSuccess("false");
				if (log.isInfoEnabled()) log.info("用户 " + account.getLogin() + " 修改密码失败");
			}
		}
	}
	
	public String getOldPass() {
		return oldPass;
	}

	public void setOldPass(String oldPass) {
		this.oldPass = oldPass;
	}

	public String getNewPass() {
		return newPass;
	}

	public void setNewPass(String newPass) {
		this.newPass = newPass;
	}

	public String getIsSuccess() {
		return isSuccess;
	}

	public void setIsSuccess(String isSuccess) {
		this.isSuccess = isSuccess;
	}

}
