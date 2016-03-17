package com.quiven.dao.system;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import zuojie.esql.util.LongArray;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.Account;
import com.quiven.entity.Role;
import com.quiven.entity.user.User;

public class RoleDaoPgImpl extends BaseDao implements RoleDao, PostgreSQL
{
	private final long YuanGongRoleId = 100000000000001L; // 员工角色ID
	
	public Set<String> MUST_HAVE_OP = new HashSet<String>();		//每个角色必须拥有的操作
	
	/**=====================用到的函数=================================**/
	
	public void updateRole(Role role) throws Exception
	{
		esql.helper().update(role, "t_role", null, "id", "id=?", role.getId());
		
		esql.helper().delete("t_privilege", "role_id=?", role.getId());
		
		addRoleOperations(role);
	}
	
	public List<Role> listAccountDepRoles(long accountId, long departmentId) throws Exception
	{
		String sql = "select r.*, d.name as department_name, d.id as department_id " +
				"from t_account_role ar, t_role r, t_department d " +
				"where ar.role_id = r.id and d.id = ar.department_id and ar.department_id = ? and ar.account_id = ? order by r.id";
		return esql.list(Role.class, sql, departmentId, accountId);
	}
	
	public List<Role> listAccountNotHaveDepRoles(long accountId, long departmentId) throws Exception
	{
		List<Role> list = listAccountDepRoles(accountId, departmentId);
		List<Long> roleIds = new ArrayList<Long>();
		for (Role r : list)
		{
			roleIds.add(r.getId());
		}
		String sql = "select r.* from t_department_role dr, t_role r where dr.role_id = r.id and dr.department_id = ? and r.id <> all (?) order by r.id";
		return esql.list(Role.class, sql, departmentId, new LongArray(roleIds));
	}
	
	public List<Role> listAccountRoles(long accountId) throws Exception
	{
		String sql = "select r.*, d.name as department_name, d.id as department_id " +
				"from t_account_role ar, t_role r, t_department d " +
				"where ar.account_id = r.id and d.id = ar.department_id and ar.account_id = ? order by r.id";
		return esql.list(Role.class, sql, accountId);
	}
	
	public PagedList<Role> listDepartmentRoles(long departmentId, int limit, int offset) throws Exception
	{
		PagedList<Role> list = new PagedList<Role>();
		
		String sql = "select r.* from t_role r, t_department_role dr where r.id = dr.role_id and dr.department_id = ? limit ? offset ?";
		List<Role> data = esql.list(Role.class, sql, departmentId, limit, offset);
		
		sql = "select count(*) from t_department_role where department_id = ?";
		int total = esql.query(Integer.class, sql, departmentId);
		
		list.setData(data);
		list.setTotal(total);
		
		return list;
	}
	
	// 向某一个人员添加角色
	public void setAccountRoles(long accountId, long departmentId, List<Long> roleIds) throws Exception
	{
		String sql = "";

		sql = "delete from t_account_role where account_id = ? and department_id = ?";
		esql.update(sql, accountId, departmentId);
		
		for (Long roleId : roleIds)
		{
			sql = "insert into t_account_role(account_id, department_id, role_id, enabled) values(?, ?, ?, true)";
			esql.update(sql, accountId, departmentId, roleId);
		}
	}
	
	// 得到某一个角色中的人员
	public List<User> getRoleUsers(long roleId, long departmentId) throws Exception
	{
		String sql = "";
		sql = "select u.* from t_user as u, t_account as a, t_account_role as ar where u.id = a.user_id and "
				+ "a.id = ar.account_id and ar.role_id = ? and ar.department_id = ? and ar.enabled = true";
		
		sql += " and a.login not in ('admin')";			//管理员的帐号谁也别改

		return esql.list(User.class, sql, roleId, departmentId);
	}
	
	// 得到某一个角色中的人员
	public List<User> getRoleNotHaveUsers(long roleId, long departmentId) throws Exception
	{
		List<User> list = getRoleUsers(roleId, departmentId);
		List<Long> userIds = new ArrayList<Long>();
		for (User user : list)
		{
			userIds.add(user.getId());
		}
		String sql = "";
		sql = "select u.* from t_user as u, t_account as a, t_account_role as ar where u.id = a.user_id and "
				+ "a.id = ar.account_id and ar.role_id <> ? and u.id <> all (?) and ar.department_id = ? and enabled = true";

		sql += " and a.login not in ('admin')";			//管理员的帐号谁也别改
		return esql.list(User.class, sql, roleId, new LongArray(userIds), departmentId);
	}
	
	// 向某一个角色添加人员
	public void setRoleAccounts(long roleId, long departmentId, List<Long> userIds) throws Exception
	{
		String sql = "delete from t_account_role ar, t_account a where ar.account_id = a.id and role_id = ? and department_id = ?";
		
		sql += " and a.login not in ('admin')";			//管理员的帐号谁也别改
		esql.update(sql, roleId, departmentId);
		
		for (long userId : userIds)
		{
			sql = "insert into t_account_role(account_id, department_id, role_id, enabled) values(?, ?, ?, true)";
			esql.update(sql, userId, departmentId, roleId);
		}
	}
	
	public Role getRoleByName(String name) throws Exception
	{
		String sql = "select * from t_role where name = ?";

		return esql.query(Role.class, sql, name);
	}

	// 向account_roles表中添加一条权限记录
	public void setPrivilege(long departmentId, long roleId, List<User> t_user) throws Exception
	{
		String sql = "";
		long accountId = 0;
		for (User user : t_user)
		{
			sql = "select id from t_account where user_id = ?";
			accountId = esql.query(Long.class, sql, user.getId());

			sql = "select enabled from t_account_role where department_id = ? and role_id = ? and account_id = ?";
			if (esql.query(Boolean.class, sql, departmentId, roleId, accountId) == null)
			{
				sql = "insert into t_account_role(account_id, department_id, role_id, enabled) values(?, ?, ?, true)";
				esql.update(sql, accountId, departmentId, roleId);
			}
			else if (!esql.query(Boolean.class, sql, departmentId, roleId, accountId))
			{
				sql = "update t_account_role set enabled = true where department_id = ? and role_id = ? and account_id = ?";
				esql.update(sql, departmentId, roleId, accountId);
			}
		}
	}
	
	public Role getRoleById(long id) throws Exception
	{
//		String sql = "select r.*, d.name as department_name from t_role r, t_department d where r.department_id = d.id and r.id = ?";
//		Role role = esql.query(Role.class, sql, id);
//		if (role == null) throw new Exception("该角色不存在！");
//
//		sql = "select operation_name from t_privilege where role_id = ?";
//		role.setOperations(esql.list(String.class, sql, id));
//
//		sql = "select u.* from t_account_role ar, t_account a, t_user u where ar.account_id = a.id and a.user_id = u.id and ar.role_id = ?";
//		role.setUsers(esql.list(User.class, sql, id));
//
//		return role;
		Role role = esql.helper().query(Role.class, "t_role", null, null, "id=?", id);
		
		/** 查出此角色的所有菜单 */
		String sql = "select m.id from t_menu m, t_privilege p " +
					"where m.operation like p.operation_name || '%' " +
					"and p.role_id = ?";
		role.setMenuIds(esql.list(Long.class, sql, id));
		
		return role;
	}
	
	// 添加角色
	public void addRole(Role role, long departmentId) throws Exception
	{
		esql.helper().insert(role, "t_role", null, "id");
		role.setId(getGeneratedId("t_role"));
		
		String sql = "insert into t_department_role(role_id, department_id) values(?, ?)";
		esql.update(sql, role.getId(), departmentId);
		
		addRoleOperations(role);
	}
	
	public void addRoleOperations(Role role) throws Exception
	{
		List<Long> menuIds = role.getMenuIds();

		Set<String> operations = new HashSet<String>();
		for (long mId : menuIds)
		{
			operations.addAll(getMenuOperationsById(mId));
		}
		MUST_HAVE_OP.add("个人");
		MUST_HAVE_OP.add("消息");
		MUST_HAVE_OP.add("错误操作");
		MUST_HAVE_OP.add("系统.菜单.列菜单");
		MUST_HAVE_OP.add("无操作");		//用于加载根菜单
		operations.addAll(MUST_HAVE_OP);
		
		addOperationsToPrivileges(role.getId(), operations);
	}
	
	public Set<String> getMenuOperationsById(long menuId) throws Exception
	{
		Set<String> operations = new HashSet<String>();
		/** 菜单的所有真操作 */
		String sql = "select operation from t_menu_operation where menu_id = ?";
		operations.addAll(esql.list(String.class, sql, menuId));
		
		/** 菜单的所有虚操作 */
		sql = "select operation from t_menu where id = ?";
		operations.add(esql.query(String.class, sql, menuId));
		
		return operations;
	}
	
	public void addOperationsToPrivileges(long roleId, Set<String> operations) throws Exception
	{
		String sql = "insert into t_privilege(role_id, operation_name) values(?, ?)";
		for (String op : operations)
		{
			esql.update(sql, roleId, op);
		}
	}
	
	/**=====================用到的函数=================================**/
	
	// 分页列某一个部门下的已有角色
	/*public PagedList<Role> getRolesByDepartmentAccount(long departmentId, int offset, int limit, OperationContext context) throws Exception
	{
		String select = "select distinct r.*";
		String selectCount = "select count(distinct r.id)";
		String tables = " from t_role as r, t_department_role as dr";
		String joins = " where r.id = dr.role_id";
		String filters = "";

		List<Object> arguments = new ArrayList<Object>();

		filters = " and r.id <> ? and dr.role_id <> ? and dr.department_id = ?";
		arguments.add(YuanGongRoleId);
		arguments.add(YuanGongRoleId);

		if (departmentId > 0) // 如果用户点选了权限机构树,则列点选的机构的下属机构树
			arguments.add(departmentId);
		else
			// 否则列该用户下属机构树
			arguments.add(context.getAccount().getUser().getDepartmentId());

		String orders = " order by r.id asc";
		String offsetAndlimit = " offset ? limit ?";

		String sql = selectCount + tables + joins + filters;
		Integer c = esql.query(Integer.class, sql, arguments.toArray());

		if (limit > 0)
		{
			arguments.add(offset);
			arguments.add(limit);
			sql = select + tables + joins + filters + orders + offsetAndlimit;
		}
		else
			sql = select + tables + joins + filters + orders;

		List<Role> data = esql.list(Role.class, sql, arguments.toArray());

		PagedList<Role> ret = new PagedList<Role>();
		ret.setData(data);
		ret.setTotal(c);

		return ret;
	}*/

	public List<Role> getUserRoles(User user) throws Exception
	{
		List<Object> arguments = new ArrayList<Object>();
		arguments.add(user.getId());
		arguments.add(YuanGongRoleId);

		String sql = "select r.* from t_account a, t_account_role ar, t_role r where a.user_id = ? and a.id = ar.account_id and r.id <> ? and ar.role_id = r.id and ar.enabled = true";
		return esql.list(Role.class, sql, arguments.toArray());
	}


	// 删除某一个部门内的某一个角色
	public void deleteRole(long roleId, long departmentId) throws Exception
	{
		String sql = "delete from t_department_role where role_id = ? and department_id = ?";
		esql.update(sql, roleId, departmentId);

		sql = "delete from t_account_role where role_id = ? and department_id = ?";
		esql.update(sql, roleId, departmentId);
	}

	/**
	 * 在点击系统管理.权限管理.添加角色后，查找某一部门下没有的角色
	 * @param departmentLevelId
	 * 			  当前用户所选部门的level_id
	 * @param departmentId
	 *            当前用户所选择的部门ID
	 * @param offset
	 * @param limit
	 * @return
	 * @throws Exception
	 */
	// 查询某一个部门下没有的角色
	public PagedList<Role> searchNotExistRole(long departmentLevelId, long departmentId, int limit, int offset) throws Exception
	{
		String sql = "";
		List<Object> arguments = new ArrayList<Object>();

		sql = "select distinct r.* from t_role as r where r.id <> ? and r.id not in "
				+ "(select dr.role_id from t_department_role as dr where dr.department_id = ?) and "
				+ " r.id in (select role_id from department_level_roles where department_level_id = ?)";
		arguments.add(YuanGongRoleId);
		arguments.add(departmentId);
		arguments.add(departmentLevelId);
		
		PagedList<Role> list = new PagedList<Role>();
		int total = esql.list(Role.class, sql, arguments.toArray()).size();

		sql += "limit ? offset ? ";
		arguments.add(limit);
		arguments.add(offset);
		List<Role> data = esql.list(Role.class, sql, arguments.toArray());

		list.setData(data);
		list.setTotal(total);
		return list;
	}

	// 分页列出某一个角色中的所有用户
	public PagedList<User> listRoleUsers(long roleId, long departmentId, int limit, int offset) throws Exception
	{
		String sql = "";
		sql = "select u.*, d.name as department_name from t_user as u, t_account a, t_account_role ar, t_department d"
				+ " where d.id = u.department_id and u.id = a.user_id and a.id = ar.account_id and ar.role_id = ? "
				+ "and ar.department_id = ? and enabled = true limit ? offset ?";

		PagedList<User> list = new PagedList<User>();
		list.setData(esql.list(User.class, sql, roleId, departmentId, limit, offset));

		sql = "select count(u.*) from t_user as u, t_account as a, t_account_role as ar where u.id = a.user_id and "
				+ "a.id = ar.account_id and ar.role_id = ? and ar.department_id = ? and enabled = true";
		list.setTotal(esql.query(Integer.class, sql, roleId, departmentId));

		return list;
	}

	// 删除某一个角色下的某一个人
	public void deleteRoleUser(long roleId, long departmentId, long accountId) throws Exception
	{
		String sql = "delete from t_account_role where role_id = ? and department_id = ? and account_id = ? ";
		esql.update(sql, roleId, departmentId, accountId);
	}

	public PagedList<Role> listRoles(int limit, int offset, Account account) throws Exception
	{
		String sql = "";
		List<Object> arguments = new ArrayList<Object>();

	
		sql = "select * from t_role where id <> ? ";
		arguments.add(YuanGongRoleId);

		PagedList<Role> list = new PagedList<Role>();
		int total = esql.list(Role.class, sql, arguments.toArray()).size();

		sql += " limit ? offset ?";
		arguments.add(limit);
		arguments.add(offset);

		List<Role> data = esql.list(Role.class, sql, arguments.toArray());

		list.setTotal(total);
		list.setData(data);

		return list;
	}

	public Long getUserRoleDepartment(long roleId, long accountId) throws Exception
	{
		String sql = "select department_id from t_account_role where account_id = ?  and role_id = ?";
		return esql.query(Long.class, sql, accountId, roleId);
	}
	
	public List<User> listUserByRoleName(String roleName) throws Exception
	{
		String sql = "select u.* from t_account_role ar, t_role r, t_account a, t_user u where ar.role_id = r.id and ar.account_id = a.id and a.user_id = u.id and r.name = ?";
		return esql.list(User.class, sql, roleName);
	}
	public long getRoleIdByAccountId(long accountId) throws Exception
	{
		String sql = "select role_id from t_account_role where account_id = ? ";
		return esql.query(Long.class, sql, accountId);	
	}
	
}
