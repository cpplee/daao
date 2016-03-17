package com.quiven.entity;

import java.util.List;

import com.quiven.entity.user.User;

public class Role implements Bean
{
	private static final long serialVersionUID = -5266510299443571017L;

	private long id;					
	private String name;		
	private String description;	
	
	private List<String> operations;
	private List<User> users;
	
	private Long departmentId;
	private String departmentName;
	private String insideCode;
	
	private List<Long> menuIds;
	
	public List<Long> getMenuIds()
	{
		return menuIds;
	}

	public void setMenuIds(List<Long> menuIds)
	{
		this.menuIds = menuIds;
	}

	@Override
	public String toString()
	{
		return name;
	}
	
	@Override
	public boolean equals(Object o)
	{
		Role role = (Role) o;
		return (role.getId() == id);
	}
	
	@Override
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
	
	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
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

	public String getDepartmentName()
	{
		return departmentName;
	}

	public void setDepartmentName(String departmentName)
	{
		this.departmentName = departmentName;
	}

	public Long getDepartmentId()
	{
		return departmentId;
	}

	public void setDepartmentId(Long departmentId)
	{
		this.departmentId = departmentId;
	}
	
	public String getInsideCode()
	{
		return insideCode;
	}

	public void setInsideCode(String insideCode)
	{
		this.insideCode = insideCode;
	}
}
