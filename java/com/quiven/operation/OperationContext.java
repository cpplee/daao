package com.quiven.operation;

import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.quiven.entity.Account;

public class OperationContext
{
	private static ThreadLocal<OperationContext> context = new ThreadLocal<OperationContext>();

	private String name;          // 操作名
	private Account account;      //登陆账户
	private Account cusAccount;   //前台账户
	private Set<Long> departmentIds;
	
	private HttpSession session;
	private HttpServletRequest request;
	private HttpServletResponse response;
	
	private boolean rollback = false;

	public boolean isRollback()
	{
		return rollback;
	}

	public void setRollback(boolean rollback)
	{
		this.rollback = rollback;
	}

	public static void setContext(OperationContext c)
	{
		context.set(c);
	}

	public static OperationContext getContext()
	{
		return context.get();
	}

	// --------------------------------------------

	public Account getAccount()
	{
		return account;
	}

	public void setAccount(Account account)
	{
		this.account = account;
	}

	public HttpSession getSession()
	{
		return session;
	}

	public void setSession(HttpSession session)
	{
		this.session = session;
	}

	public HttpServletRequest getRequest()
	{
		return request;
	}

	public void setRequest(HttpServletRequest request)
	{
		this.request = request;
	}

	public HttpServletResponse getResponse()
	{
		return response;
	}

	public void setResponse(HttpServletResponse response)
	{
		this.response = response;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public Set<Long> getDepartmentIds()
	{
		return departmentIds;
	}

	public void setDepartmentIds(Set<Long> departmentIds)
	{
		this.departmentIds = departmentIds;
	}

	public Account getCusAccount() {
		return cusAccount;
	}

	public void setCusAccount(Account cusAccount) {
		this.cusAccount = cusAccount;
	}
}
