package com.quiven.entity;

public class Dictionary implements Bean
{
	private static final long serialVersionUID = -5801058440622157207L;

	private Long id;
	private long typeId;
	private String name;
	private String description;
	private int place;
	private boolean fixed;

	

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public long getTypeId()
	{
		return typeId;
	}

	public void setTypeId(long typeId)
	{
		this.typeId = typeId;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public int getPlace()
	{
		return place;
	}

	public void setPlace(int place)
	{
		this.place = place;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public boolean isFixed()
	{
		return fixed;
	}

	public void setFixed(boolean fixed)
	{
		this.fixed = fixed;
	}
}
