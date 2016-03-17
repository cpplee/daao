package com.quiven.entity;

import java.util.List;

import com.quiven.entity.comAccount.Saler;
import com.quiven.entity.user.User;

public class Account implements Bean
{
	private static final long serialVersionUID = -467252638311500718L;

	private long id;
	private String login;
	private String password;
    private String phone;
    private String email;
	private long loginCount;
	
	private long userId;
	private User user;
	private List<Role> roles;
	private Saler salers;
	
	
	private List<String> privilegeAnticipateNames;
	private String rolename;
	private AccountLoginLog lastLoginInfo;	//最近一次登录记录

	@Override
	public boolean equals(Object obj)
	{
		Account account = (Account)obj;
		return this.id == account.id;
	}
	@Override
	public int hashCode()
	{
		// TODO Auto-generated method stub
		return (int)id;
	}
	public long getId()
	{
		return id;
	}
	public void setId(long id)
	{
		this.id = id;
	}
	public String getLogin()
	{
		return login;
	}
	public void setLogin(String login)
	{
		this.login = login;
	}
	public String getPassword()
	{
		return password;
	}
	public void setPassword(String password)
	{
		this.password = password;
	}
	public long getUserId()
	{
		return userId;
	}
	public void setUserId(long userId)
	{
		this.userId = userId;
	}
	public long getLoginCount()
	{
		return loginCount;
	}
	public void setLoginCount(long loginCount)
	{
		this.loginCount = loginCount;
	}
	public User getUser()
	{
		return user;
	}
	public void setUser(User user)
	{
		this.user = user;
	}
	public List<Role> getRoles()
	{
		return roles;
	}
	public void setRoles(List<Role> roles)
	{
		this.roles = roles;
	}
	public String getRolename()
	{
		return rolename;
	}
	public void setRolename(String rolename)
	{
		this.rolename = rolename;
	}
	public List<String> getPrivilegeAnticipateNames()
	{
		return privilegeAnticipateNames;
	}
	public void setPrivilegeAnticipateNames(List<String> privilegeAnticipateNames)
	{
		this.privilegeAnticipateNames = privilegeAnticipateNames;
	}
	public AccountLoginLog getLastLoginInfo()
	{
		return lastLoginInfo;
	}
	public void setLastLoginInfo(AccountLoginLog lastLoginInfo)
	{
		this.lastLoginInfo = lastLoginInfo;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Saler getSalers() {
		return salers;
	}
	public void setSalers(Saler salers) {
		this.salers = salers;
	}
	
}
