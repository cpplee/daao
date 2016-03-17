package com.quiven.entity.user;

import java.util.Date;
import java.util.Dictionary;
import java.util.List;

import com.quiven.entity.Account;
import com.quiven.entity.Bean;
import com.quiven.entity.Role;
import com.quiven.entity.system.Department;

public class User implements Bean
{

	private static final long serialVersionUID = -5650845754208964430L;
	
	private long id; 				// 用户id
	private String name; 			// 用户姓名
	private Long accountId; 		// 
	private Date createDate; 		// 用户创建时间
	private boolean enable = true; 	// 表示用户是否有效

	// 非数据库字段值
	private Long departmentId; 		// 用户部门id
	private Account account; 		// 帐户信息
	private List<Role> roles; 		// 角色信息
	private Department department;	// 部门信息
	private Dictionary dictionary; 	// 数据字典信息

	public boolean equals(Object obj)
	{
		User u = (User) obj;
		return this.id == u.id;
	}

	public int hashCode()
	{
		return (int) id;
	}

	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public Long getDepartmentId()
	{
		return departmentId;
	}

	public void setDepartmentId(Long departmentId)
	{
		this.departmentId = departmentId;
	}

	public boolean isEnable()
	{
		return enable;
	}

	public void setEnable(boolean enable)
	{
		this.enable = enable;
	}

	public Account getAccount()
	{
		return account;
	}

	public void setAccount(Account account)
	{
		this.account = account;
	}

	public List<Role> getRoles()
	{
		return roles;
	}

	public void setRoles(List<Role> roles)
	{
		this.roles = roles;
	}

	public Department getDepartment()
	{
		return department;
	}

	public void setDepartment(Department department)
	{
		this.department = department;
	}

	public Dictionary getDictionary()
	{
		return dictionary;
	}

	public void setDictionary(Dictionary dictionary)
	{
		this.dictionary = dictionary;
	}

	public Date getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(Date createDate)
	{
		this.createDate = createDate;
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}


}
