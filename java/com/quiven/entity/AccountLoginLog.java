package com.quiven.entity;

import java.util.Date;

/**
 * 账户登录日志
 */
public class AccountLoginLog implements Bean
{
	private static final long serialVersionUID = 1L;

	/** 流水号 */
	private long id;
	/** 帐号 */
	private long accountId;
	/** 登录时间 */
	private Date loginTime;
	/** 登录地址 */
	private String loginIp;
	public long getId()
	{
		return id;
	}
	public void setId(long id)
	{
		this.id = id;
	}
	public long getAccountId()
	{
		return accountId;
	}
	public void setAccountId(long accountId)
	{
		this.accountId = accountId;
	}
	public Date getLoginTime()
	{
		return loginTime;
	}
	public void setLoginTime(Date loginTime)
	{
		this.loginTime = loginTime;
	}
	public String getLoginIp()
	{
		return loginIp;
	}
	public void setLoginIp(String loginIp)
	{
		this.loginIp = loginIp;
	}
}
