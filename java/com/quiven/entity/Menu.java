package com.quiven.entity;

import java.io.Serializable;
import java.util.List;

public class Menu implements Bean, Serializable
{
	private static final long serialVersionUID = 1L;

	private long id;
	private Long parentId;
	private String name;
	private String operation;
	private String url;
	private String groupName;
	private int place;
	
	private List<Menu> subMenus;

	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public Long getParentId()
	{
		return parentId;
	}

	public void setParentId(Long parentId)
	{
		this.parentId = parentId;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getOperation()
	{
		return operation;
	}

	public void setOperation(String action)
	{
		this.operation = action;
	}

	public int getPlace()
	{
		return place;
	}

	public void setPlace(int place)
	{
		this.place = place;
	}

	public static long getSerialVersionUID()
	{
		return serialVersionUID;
	}

	public String getUrl()
	{
		return url;
	}

	public void setUrl(String url)
	{
		this.url = url;
	}

	public String getGroupName()
	{
		return groupName;
	}

	public void setGroupName(String groupName)
	{
		this.groupName = groupName;
	}

	public List<Menu> getSubMenus()
	{
		return subMenus;
	}

	public void setSubMenus(List<Menu> subMenus)
	{
		this.subMenus = subMenus;
	}
}
