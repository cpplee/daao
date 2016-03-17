package com.quiven.dao;

import com.quiven.entity.AccountLoginLog;

public interface AccountLoginLogDao
{
	/**
	 * 添加账户登录日志
	 * @param accountLoginLog 登录日志
	 * @throws Exception
	 */
	public void addAccountLoginLog(AccountLoginLog accountLoginLog) throws Exception;
	
	/**
	 * 获取账户最近一次登录日志
	 * @param accountId 账户id
	 * @return
	 * @throws Exception
	 */
	public AccountLoginLog getLastAccountLoginLog(long accountId) throws Exception;
}
