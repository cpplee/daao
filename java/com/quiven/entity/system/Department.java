package com.quiven.entity.system;

import com.quiven.entity.Bean;


public class Department implements Bean
{
	private static final long serialVersionUID = 3801058440622157207L;

	/** 部门id */
	private Long id;
	/** 部门名称 */
	private String name;
	/** 父亲机构id */
	private Long parentId;
	/** 职能描述 */
	private String description;
	/** 部门层次id */
	private Long levelId;
	/** 部门内部编码(从根节点到当前节点的路径) */
	private String insideCode;
	/** 部门在兄弟节点中的位置 */
	private Integer place;
	/** 部门是否有效 */
	private boolean enable;

	private String vasId; // 部门对应的前端分析设备id	

	//========================================
	private boolean selectable; //映射为前台的对应树节点是否可以操作
	private Department parentDepartment; //父部门
	private DepartmentLevel departmentLevel; //部门级别

	public boolean equals(Object obj)
	{
		Department dept = (Department) obj;
		return this.id == dept.id;
	}

	public String getVasId()
	{
		return vasId;
	}

	public void setVasId(String vasId)
	{
		this.vasId = vasId;
	}

	public int hashCode()
	{
		return id.intValue();
	}

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
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

	public Long getParentId()
	{
		return parentId;
	}

	public void setParentId(Long parentId)
	{
		this.parentId = parentId;
	}

	public Long getLevelId()
	{
		return levelId;
	}

	public void setLevelId(Long levelId)
	{
		this.levelId = levelId;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getInsideCode()
	{
		return insideCode;
	}

	public void setInsideCode(String code)
	{
		this.insideCode = code;
	}

	public Integer getPlace()
	{
		return place;
	}

	public void setPlace(Integer place)
	{
		this.place = place;
	}

	public boolean getEnable()
	{
		return enable;
	}

	public void setEnable(boolean enable)
	{
		this.enable = enable;
	}

	public boolean isSelectable()
	{
		return selectable;
	}

	public void setSelectable(boolean selectable)
	{
		this.selectable = selectable;
	}

	public Department getParentDepartment()
	{
		return parentDepartment;
	}

	public void setParentDepartment(Department parentDepartment)
	{
		this.parentDepartment = parentDepartment;
	}

	public DepartmentLevel getDepartmentLevel()
	{
		return departmentLevel;
	}

	public void setDepartmentLevel(DepartmentLevel departmentLevel)
	{
		this.departmentLevel = departmentLevel;
	}
}
