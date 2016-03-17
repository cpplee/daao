package com.quiven.dao.system.department;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import zuojie.esql.util.LongArray;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.system.Department;

public class DepartmentDaoPgImpl extends BaseDao implements DepartmentDao, PostgreSQL
{
	//添加部门
	public long addDepartment(Department department) throws Exception
	{
		esql.helper().insert(department, "t_department", null, "id, inside_code, place");
		// 刚添加的部门id
		Long departmentId = getGeneratedId("t_department");
		
		// 如果是省分行，需要向t_department_role表中添加部门对应的角色
		if (department.getLevelId() == 2)
		{
			String sql = "insert into t_department_role(role_id, department_id) values(?, ?)";
			esql.update(sql, 3, departmentId);
			esql.update(sql, 4, departmentId);
		}
		
		return departmentId;
	}
	
	//删除部门 
	public void deleteDepartment(Department department) throws Exception
	{
		String sql = "delete from t_department where id = ?";
		esql.update(sql, department.getId());
	}
	
	//更新机构
	public void updateDepartment(Department department) throws Exception
	{
		esql.helper().update(department, "t_department", "", "id, inside_code", "id=?", department.getId());
	}
	
	//根据部门id取得部门信息
	public Department getDepartmentById(Long id) throws Exception
	{
		String sql = "select * from t_department where id = ?";
		Department dpt = esql.query(Department.class, sql, id);
		sql = "select * from t_department where id = ?";
		dpt.setParentDepartment(esql.query(Department.class, sql, dpt.getParentId()));
		return dpt;
	}
	
	public List<Department> listSubDepartments(long id) throws Exception
	{
		if (id > 0)
		{
			String sql = "select * from t_department where parent_id = ? and enable = true order by id ";
			return esql.list(Department.class, sql, id);
		}
		else
		{
			String sql = "select * from t_department where enable = true order by id ";
			return esql.list(Department.class, sql);
		}
	}

	//分页列出所有可管理的当前机构的子机构
	public PagedList<Department> listManageSubDepartments(Set<Long> departmentIds, long departmentId, int offset, int limit) throws Exception
	{
		PagedList<Department> list = new PagedList<Department>();
		
		String sql = "select distinct sub.* from sub_departments(?) as sub, managing_departments(?) as mag where sub.id = mag.id order by id offset ? limit ?";
		List<Department> data =  esql.list(Department.class, sql, new LongArray(departmentId), new LongArray(departmentIds), offset, limit);
		for(Department d : data)
		{
			sql = "select * from t_department where id = ?";
			d.setParentDepartment(esql.query(Department.class, sql, d.getParentId()));
		}
		sql = "select count(distinct sub.id) from sub_departments(?) as sub, managing_departments(?) as mag where sub.id = mag.id";
		int total = esql.query(Integer.class, sql, new LongArray(departmentId), new LongArray(departmentIds));
		
		list.setData(data);
		list.setTotal(total);
		return list;
	}
	
	@Override
	public PagedList<Department> listLowestManageSubDepartments(Set<Long> departmentIds, long departmentId, int offset, int limit) throws Exception
	{
		PagedList<Department> list = new PagedList<Department>();
		
		String sql = "select distinct sub.* from sub_departments(?) as sub, managing_departments(?) as mag where sub.id = mag.id and sub.level_id = 3 order by id offset ? limit ?";
		List<Department> data =  esql.list(Department.class, sql, new LongArray(departmentId), new LongArray(departmentIds), offset, limit);
		for(Department d : data)
		{
			sql = "select * from t_department where id = ?";
			d.setParentDepartment(esql.query(Department.class, sql, d.getParentId()));
		}
		sql = "select count(distinct sub.id) from sub_departments(?) as sub, managing_departments(?) as mag where sub.id = mag.id  and sub.level_id = 3";
		int total = esql.query(Integer.class, sql, new LongArray(departmentId), new LongArray(departmentIds));
		
		list.setData(data);
		list.setTotal(total);
		return list;
	}
	
	public List<Department> getLowestManageSubDepartments(Set<Long> departmentIds, Long departmentId) throws Exception
	{
		String sql = "select distinct * from sub_departments(?) where level_id = 3 order by id";
		List<Department> data =  esql.list(Department.class, sql, new LongArray(departmentId));
		for(Department d : data)
		{
			sql = "select * from t_department where id = ?";
			d.setParentDepartment(esql.query(Department.class, sql, d.getParentId()));
		}
		return data;
	}
	//取得所有可管理的当前机构的子机构
	public List<Department> getManageSubDepartments(Set<Long> departmentIds, Long departmentId) throws Exception
	{
		String sql = "select distinct * from sub_departments(?) order by id";
		List<Department> data =  esql.list(Department.class, sql, new LongArray(departmentId));
		for(Department d : data)
		{
			sql = "select * from t_department where id = ?";
			d.setParentDepartment(esql.query(Department.class, sql, d.getParentId()));
		}
		
		return data;
	}
	
	//列出当前用户的可管理部门
	public List<Department> getManageDepartmants(Set<Long> departmentIds) throws Exception
	{
		String sql = "select * from managing_departments(?) order by id";
		List<Department> result = esql.list(Department.class, sql, new LongArray(departmentIds));
		return result;
	}
	
	//列出当前部门的所有父亲部门
	public List<Department> getParentDepartments(long departmentId) throws Exception
	{
		String sql = "select * from parent_departments(?)";
		return esql.list(Department.class, sql, departmentId);
	}
	
	//判断是否可以被管理
	public boolean canBeManaged(Set<Long> departmentIds, long departmentId) throws Exception
	{
		String sql = "select id from managing_departments(?) where id = ?";
		return esql.query(Long.class, sql, new LongArray(departmentIds), departmentId) != null;
	}

	public List<Department> listDepartmentByLevelId(long levelId) throws Exception
	{
		String sql = "select * from t_department where level_id = ? ";
		return esql.list(Department.class, sql, levelId);
	}

	public Department getDepartmentByName(String name) throws Exception
	{
		String sql = "select * from t_department where name = ?";
		Department dpt = esql.query(Department.class, sql, name);
		return dpt;
	}

	@Override
	public List<Department> listDepartmentsLevel3ByLevel(Department department) throws Exception
	{
		String sql = "select * from t_department where level_id = 3";
		List<Object> parameters = new ArrayList<Object>();
		
		// 如果省分行
		if (department.getLevelId() == 2)
		{
			sql += " and parent_id = ?";
			parameters.add(department.getId());
		}
		
		return esql.list(Department.class, sql, parameters.toArray());
	}

	@Override
	public Department getDepartmentByVasId(String vasId) throws Exception
	{
		return esql.helper().query(Department.class, "t_department", null, null, "vas_id = ?", vasId);
	}

	public List<Department> getLowerSubDepartment(Department department) throws Exception
	{
		if(department.getLevelId() == 1)
		{
			String sql = "select * from t_department where level_id = 2";
			return esql.list(Department.class, sql);
		}
		else 
		{
			String sql = "select * from t_department where level_id = 3";
			List<Object> parameters = new ArrayList<Object>();	
			sql += " and parent_id = ?";
			parameters.add(department.getId());
			return esql.list(Department.class, sql, parameters.toArray());
		}
	}
	
}
