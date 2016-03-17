package com.quiven.dao.system.department;

import com.quiven.dao.PagedList;
import com.quiven.entity.system.DepartmentLevel;

public interface DepartmentLevelDao
{
	/**
	 * 添加机构层次
	 * @param level
	 * @throws Exception
	 */
	public void addDepartmentLevel(DepartmentLevel level) throws Exception;
	
	/**
	 * 删除机构层次
	 * @param id
	 * @throws Exception
	 */
	public void deleteDepartmentLevel(long id) throws Exception;
	
	/**
	 * 更新机构层次
	 * @param level
	 * @throws Exception
	 */
	public void updateDepartmentLevel(DepartmentLevel level) throws Exception;
	
	/**
	 * 分页取出机构层次
	 * @param offset
	 * @param limit
	 * @return
	 * @throws Exception
	 */
	public PagedList<DepartmentLevel> getDepartmentLevels(int offset, int limit) throws Exception;
	
	/**
	 * 根据部门级别名称取出级别
	 * @param name
	 * @return
	 * @throws Exception
	 */
	public Long getDepartmentLevelLevelByName(String name) throws Exception;
	
	// 根据部门级别名称取出级别
	public String getDepartmentLevelNameById(long id) throws Exception;
	
	// 根据部门id获得等级
	public DepartmentLevel getDepartmentLevelById(long id) throws Exception;
}
