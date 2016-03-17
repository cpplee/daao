package com.quiven.dao.system.department;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.system.DepartmentLevel;

public class DepartmentLevelDaoPgImpl extends BaseDao implements DepartmentLevelDao, PostgreSQL
{
	public void addDepartmentLevel(DepartmentLevel level) throws Exception
	{
		String sql = "insert into t_department_level (name, level) values(?, ?)";
		esql.update(sql, level.getName(), level.getLevel());
	}

	public void deleteDepartmentLevel(long id) throws Exception
	{
		String sql = "delete from t_department_level where id = ? ";
		esql.update(sql, id);
	}

	public void updateDepartmentLevel(DepartmentLevel level) throws Exception
	{
		String sql = "update t_department_level set name = ?, level = ? where id = ?";
		esql.update(sql, level.getName(), level.getLevel(), level.getId());
	}

	public PagedList<DepartmentLevel> getDepartmentLevels(int offset, int limit) throws Exception
	{
		PagedList<DepartmentLevel> list = new PagedList<DepartmentLevel>();
		String sql = "select * from t_department_level order by id offset ? limit ?";
		list.setData(esql.list(DepartmentLevel.class, sql, offset, limit));
		sql = "select count(*) from t_department_level";
		list.setTotal(esql.query(Integer.class, sql));
		return list;
	}

	public Long getDepartmentLevelLevelByName(String name) throws Exception
	{
		String sql = "select level from t_department_level where name = ?";
		return esql.query(Long.class, sql, name);
	}
	
	public String getDepartmentLevelNameById(long id) throws Exception
	{
		String sql = "select name from t_department_level where id = ?";
		return esql.query(String.class, sql, id);
	}

	@Override
	public DepartmentLevel getDepartmentLevelById(long id) throws Exception
	{
		return esql.helper().query(DepartmentLevel.class, "t_department_level", null, null, "id = ?", id);
	}
}
