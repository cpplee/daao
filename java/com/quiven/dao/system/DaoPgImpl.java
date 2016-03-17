package com.quiven.dao.system;

import java.util.Dictionary;
import java.util.List;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.Account;
import com.quiven.entity.Menu;
import com.quiven.entity.system.Department;

public class DaoPgImpl extends BaseDao implements Dao, PostgreSQL
{
	public List<Menu> getAccountMenuItems(Account account, long menuId) throws Exception
	{
		String sql = "select distinct m.* ";
		sql += "from t_menu m, t_account_role a, t_privilege p ";
		sql += "where a.account_id = ? " +
				"and a.role_id = p.role_id " +
				"and m.operation like p.operation_name || '%' " +
				"and m.parent_id = ? " + 
				"order by m.place";
		
		return esql.list(Menu.class, sql, account.getId(), menuId);
	}

	public List<Dictionary> getDictinarysByTypeName(String typeName) throws Exception
	{
		String sql = "select d.* from t_dictionary_type as t, dictionary as d where d.type_id = t.id and t.name = ? order by d.place asc";

		return esql.list(Dictionary.class, sql, typeName);
	}

	public List<Department> getAllDepartments() throws Exception
	{
		String sql = "select * from t_department order by id";
		return esql.list(Department.class, sql);
	}

	public Long getDictinarysTypeIdByTypeName(String typeName) throws Exception
	{
		String sql = "select id from t_dictionary_type as t where t.name = ?";
		return esql.query(Long.class, sql, typeName);
	}

	public List<Menu> getAllMenuItems(long menuId) throws Exception
	{
		String sql = "select * from t_menu where parent_id = ? order by place";
		return esql.list(Menu.class, sql, menuId);
	}
}
