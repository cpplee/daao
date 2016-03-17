package com.quiven.dao;

import com.quiven.entity.AccountLoginLog;

public class AccountLoginLogDaoPgImpl extends BaseDao implements PostgreSQL, AccountLoginLogDao
{
	public void addAccountLoginLog(AccountLoginLog accountLoginLog) throws Exception
	{
		esql.helper().insert(accountLoginLog, "t_account_login_log", null, "id");
	}

	public AccountLoginLog getLastAccountLoginLog(long accountId) throws Exception
	{
		return esql.helper().query(AccountLoginLog.class, "t_account_login_log", null, null, "account_id = ? order by login_time desc limit 1", accountId);
	}

}
