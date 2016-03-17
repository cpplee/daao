package com.quiven.entity;

import java.util.List;

import com.quiven.entity.user.User;

public class DepartmentRole implements Bean
{
	private static final long serialVersionUID = -5266510299443571017L;

	private long id;
	private String name;
	private Long departmentId;
	
	private List<String> operations;
	private List<User> users;

	private String departmentName;
	
	private String description;		//角色描述
	
	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	@Override
	public boolean equals(Object o)
	{
		DepartmentRole role = (DepartmentRole) o;
		return (role.getId() == id);
	}
	
	@Override
	public int hashCode()
	{
		return (int) id;
	}

	
	public Long getDepartmentId()
	{
		return departmentId;
	}
	public void setDepartmentId(Long departmentId)
	{
		this.departmentId = departmentId;
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
	public String getDepartmentName()
	{
		return departmentName;
	}
	public void setDepartmentName(String departmentName)
	{
		this.departmentName = departmentName;
	}
	public List<String> getOperations()
	{
		return operations;
	}
	public void setOperations(List<String> operations)
	{
		this.operations = operations;
	}
	public List<User> getUsers()
	{
		return users;
	}
	public void setUsers(List<User> users)
	{
		this.users = users;
	}
}
