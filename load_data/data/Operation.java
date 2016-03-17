package data;

import com.quiven.entity.Bean;

public class Operation implements Bean
{
	private static final long serialVersionUID = 1L;

	private int id;
	private String name;
	
	public int getId()
	{
		return id;
	}
	public void setId(int id)
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
}
