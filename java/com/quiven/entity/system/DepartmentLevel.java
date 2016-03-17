package com.quiven.entity.system;

import com.quiven.entity.Bean;

public class DepartmentLevel implements Bean
{
	private static final long serialVersionUID = -580148958522157207L;

	private long id;
	private String name;
	private long level;
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
	public long getLevel()
	{
		return level;
	}
	public void setLevel(long level)
	{
		this.level = level;
	}

	
}
