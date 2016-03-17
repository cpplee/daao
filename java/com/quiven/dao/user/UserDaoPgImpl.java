package com.quiven.dao.user;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import zuojie.esql.util.LongArray;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.Account;
import com.quiven.entity.Role;
import com.quiven.entity.system.Department;
import com.quiven.entity.user.User;

public class UserDaoPgImpl extends BaseDao implements UserDao, PostgreSQL
{
	@Override
	public List<User> listDepartmentManagers(List<Department> allowed) throws Exception
	{
		//组装可管理机构的id
		String idIn = null;
		if (allowed.size() > 0)
		{
			StringBuffer allowIds = new StringBuffer();
			Iterator<Department> itr = allowed.iterator();
			while (itr.hasNext())
			{
				allowIds.append(itr.next().getId());
				allowIds.append(", ");
			}
			idIn = allowIds.toString();
			if (idIn.endsWith(", ")) idIn = idIn.substring(0, idIn.length() - 2);
		}
		else
		{
			idIn = "-1";
		}

		String from = " from t_user u";
		String where = " where u.department_id in (" + idIn + ") and u.enable = true";
		String order = " order by u.id";

		// 筛选出管理者，即role为2，3的用户
		from += ", t_account a, t_account_role ar";
		where += " and u.id = a.user_id and a.id = ar.account_id and ar.role_id in (2, 3) and ar.enabled = true";

		String sql = "select u.*" + from + where + order;

		return esql.list(User.class, sql);
	}

	public List<User> listDepartmentUsersByConditions(Boolean isProcessor, List<Department> allowed, long roleId, String name) throws Exception
	{
		//组装可管理机构的id
		String idIn = null;
		if (allowed.size() > 0)
		{
			StringBuffer allowIds = new StringBuffer();
			Iterator<Department> itr = allowed.iterator();
			while (itr.hasNext())
			{
				allowIds.append(itr.next().getId());
				allowIds.append(", ");
			}
			idIn = allowIds.toString();
			if (idIn.endsWith(", ")) idIn = idIn.substring(0, idIn.length() - 2);
		}
		else
		{
			idIn = "-1";
		}


		String from = " from t_user u";
		String where = " where u.department_id in (" + idIn + ") and u.processor = " + isProcessor;
		String order = " order by u.id";
		List<Object> parameters = new ArrayList<Object>();
		
		// 姓名查询条件
		if (name != null && name.length() > 0)
		{
			String _name[] = name.split(" |\n|\r\n|\t");
			boolean exist = false;
			for (int i = 0; i < _name.length; i++)
			{
				if (_name[i].trim().length() > 0)
				{
					// 用or的方式查找多关键字
					if (!exist)
					{
						exist = true;
						where += " and ( u.name like ?";
					}
					else
						where += " or u.name like ?";
					parameters.add("%%" + _name[i] + "%%");
				}
			}
			if (exist) where += ")";
		}

		if (roleId > 0)
		{
			from += ", t_account a , t_account_role ar";
			where += " and u.id = a.user_id and a.id = ar.account_id and ar.role_id = ? and ar.enabled = true";
			parameters.add(roleId);
		}
		
		String sql = "select distinct (u.*) " + from + where + order;

		return esql.list(User.class, sql, parameters.toArray());
	}

	public PagedList<User> listDepartmentUsersByConditions( List<Department> allowed, long roleId, String name,
			int offset, int limit) throws Exception
	{
		//组装可管理机构的id
		String idIn = null;
		if (allowed.size() > 0)
		{
			StringBuffer allowIds = new StringBuffer();
			Iterator<Department> itr = allowed.iterator();
			while (itr.hasNext())
			{
				allowIds.append(itr.next().getId());
				allowIds.append(", ");
			}
			idIn = allowIds.toString();
			if (idIn.endsWith(", ")) idIn = idIn.substring(0, idIn.length() - 2);
		}
		else
		{
			idIn = "-1";
		}

		PagedList<User> list = new PagedList<User>();

		String from = " from t_user u";
		String where = " where u.department_id in (" + idIn + ")";
		String order = " order by u.id offset ? limit ?";
		List<Object> parameters = new ArrayList<Object>();

		// 姓名查询条件
		if (name != null && name.length() > 0)
		{
			String _name[] = name.split(" |\n|\r\n|\t");
			boolean exist = false;
			for (int i = 0; i < _name.length; i++)
			{
				if (_name[i].trim().length() > 0)
				{
					// 用or的方式查找多关键字
					if (!exist)
					{
						exist = true;
						where += " and ( u.name like ?";
					}
					else
						where += " or u.name like ?";
					parameters.add("%%" + _name[i] + "%%");
				}
			}
			if (exist) where += ")";
		}

		if (roleId > 0)
		{
			from += ", t_account a , t_account_role ar";
			where += " and u.id = a.user_id and a.id = ar.account_id and ar.role_id = ? and ar.enabled = true";
			parameters.add(roleId);
		}

		String sql = "select count(distinct u.id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct (u.*) " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(User.class, sql, parameters.toArray()));

		return list;
	}

	@Override
	public List<User> listDepartmentProcessors(List<Department> allowed) throws Exception
	{
		//组装可管理机构的id
		String idIn = null;
		if (allowed.size() > 0)
		{
			StringBuffer allowIds = new StringBuffer();
			Iterator<Department> itr = allowed.iterator();
			while (itr.hasNext())
			{
				allowIds.append(itr.next().getId());
				allowIds.append(", ");
			}
			idIn = allowIds.toString();
			if (idIn.endsWith(", ")) idIn = idIn.substring(0, idIn.length() - 2);
		}
		else
		{
			idIn = "-1";
		}

		String from = " from t_user u";
		String where = " where u.department_id in (" + idIn + ") and u.processor = true";
		String order = " order by u.id";

		String sql = "select distinct (u.*) " + from + where + order;

		return esql.list(User.class, sql);
	}

	public User getUserById(long userId) throws Exception
	{
		// 取得用户信息
		User user = esql.helper().query(User.class, "t_user", "", "", "id=?", userId);
		// 取得用户账户信息
		user.setAccount(esql.helper().query(Account.class, "t_account", "", "", "user_id=?", userId));
		// 取得用户部门信息
		user.setDepartment(esql.helper().query(Department.class, "t_department", "", "", "id=?", user.getDepartmentId()));

		return user;
	}

	public User getProcessorById(long userId) throws Exception
	{
		// 取得用户信息
		User user = esql.helper().query(User.class, "t_user", "", "", "id=?", userId);
		// 取得用户部门信息
		Department department = esql.helper().query(Department.class, "t_department", "", "", "id=?", user.getDepartmentId());
		user.setDepartment(department);

		return user;
	}

	public List<String> listUsersByNameList(String[] nameList) throws Exception
	{
		String sql = "select * from t_user where name like ?";
		List<String> notFoundList = new LinkedList<String>();
		for (String name : nameList)
		{

			List<User> list = esql.list(User.class, sql, "%" + name + "%");
			if (list.size() == 0) notFoundList.add(name);
		}
		return notFoundList;
	}

	public List<Role> getAccountRoles(long accountId) throws Exception
	{
		String sql = "select r.* from t_role as r, t_account_role as ar"
				+ " where r.id = ar.role_id and ar.account_id = ? and ar.enabled = true";

		return esql.list(Role.class, sql, accountId);
	}

	public PagedList<Account> getAccountDetailsByRoleIds(long departmentId, long roleId, String name, int offset, int limit)
			throws Exception
	{
		String selectCount = "select count(a.id)::integer";
		String select = "select a.*, r.name as rolename";

		String tables = " from t_account a, t_account_role ar, t_user u, t_role r ";
		String filter = " where a.id = ar.account_id and a.user_id = u.id and ar.enabled = true and ar.role_id = ? and ar.department_id = ? "
				+ "  and ar.role_id = r.id ";
		String orders = " order by a.id asc";
		String limits = " limit " + limit + " offset " + offset;

		if (name == null) name = "";
		name = name.trim();
		if (name.length() > 0)
		{
			name = "%" + name + "%";
			filter += " and u.name like ? ";
		}

		String sql = select + tables + filter + orders + limits;
		List<Account> t_account = esql.list(Account.class, sql, roleId, departmentId, name);

		sql = selectCount + tables + filter;
		Integer c = esql.query(Integer.class, sql, roleId, departmentId, name);

		for (Account account : t_account)
		{
			sql = "select u.*, d.name as \"department.name\" from t_user u, t_department d, t_account a, t_account_role ar "
					+ "	where u.id = a.user_id and a.id = ar.account_id and ar.department_id = d.id and u.id = a.user_id and a.id = ?";

			User user = esql.query(User.class, sql, account.getId());
			account.setUser(user);
			account.setRoles(getAccountRoles(account.getId()));
		}

		PagedList<Account> ret = new PagedList<Account>();
		ret.setData(t_account);
		ret.setTotal(c);

		return ret;
	}

	public List<Account> getAccountsByDepartmentRole(Long departmentId, Long roleId) throws Exception
	{
		String sql = "select a.* from t_account a, t_account_role ar where a.id = ar.account_id and ar.department_id = ? and ar.role_id = ?";
		return esql.list(Account.class, sql, departmentId, roleId);
	}

	public PagedList<Account> getAccountDetailsByRoleIds(long[] roleIds, String name, int offset, int limit, long departmentId)
			throws Exception
	{
		if (roleIds == null || roleIds.length < 1) throw new Exception("未指定角色！");

		StringBuffer ids = new StringBuffer("");

		for (int i = 0; i < roleIds.length; i++)
		{
			if (i != 0) ids.append(",");

			ids.append(roleIds[i]);
		}

		String selectCount = "select count(a.id)::integer";
		String select = "select a.*,r.name as rolename";

		String tables = " from t_account as a, t_account_role as ar, t_user as u,t_role as r ";
		String filter = " where a.id = ar.account_id and a.user_id = u.id and ar.enabled = true and ar.role_id in(" + ids
				+ ")  and ar.role_id = r.id ";
		String orders = " order by a.id asc";
		String limits = " limit " + limit + " offset " + offset;

		if (name == null) name = "";
		name = name.trim();
		if (name.length() > 0)
		{
			name = "%%" + name + "%%";
			filter += " and u.name like ? ";
		}

		String sql = select + tables + filter + orders + limits;
		List<Account> t_account = esql.list(Account.class, sql, name);

		sql = selectCount + tables + filter;
		Integer c = esql.query(Integer.class, sql, name);

		for (Account account : t_account)
		{
			sql = "select u.*, d.name as \"department.name\"" + "	from t_user as u, t_department as d, t_account as a"
					+ "	where u.department_id = d.id and u.id = a.user_id and a.id = ?";

			User user = esql.query(User.class, sql, account.getId());
			account.setUser(user);
			account.setRoles(getAccountRoles(account.getId()));
		}

		PagedList<Account> ret = new PagedList<Account>();
		ret.setData(t_account);
		ret.setTotal(c);

		return ret;
	}

	public List<User> getDepartmentUsersByConditions(List<Department> allowed, Long stationId, long roleId, String gender, String name,
			String workno, String beginDate, String endDate) throws Exception
	{
		DateFormat DF = new SimpleDateFormat("yyyy-MM-dd");
		//组装可管理机构的id
		String idIn = null;
		if (allowed.size() > 0)
		{
			StringBuffer allowIds = new StringBuffer();
			Iterator<Department> itr = allowed.iterator();
			while (itr.hasNext())
			{
				allowIds.append(itr.next().getId());
				allowIds.append(", ");
			}
			idIn = allowIds.toString();
			if (idIn.endsWith(", ")) idIn = idIn.substring(0, idIn.length() - 2);
		}
		else
		{
			idIn = "-1";
		}

		String select = "select distinct(u.*) ";
		String from = " from t_user u, user_bases ub ";
		String where = "where u.department_id in (" + idIn + ") and u.id = ub.user_id ";
		List<Object> parameters = new ArrayList<Object>();

		/** TCC的岗级暂时用数据字典 */
		if (stationId != null && stationId > 0)
		{
			from += ", user_weals uw ";
			where += "and u.id = uw.user_id and uw.post_level = ? ";
			parameters.add(stationId);
		}

		if (name != null && name.length() > 0)
		{
			String _name[] = name.split(" |\n|\r\n|\t");
			boolean exist = false;
			for (int i = 0; i < _name.length; i++)
			{
				if (_name[i].trim().length() > 0)
				{
					// 用or的方式查找多关键字
					if (!exist)
					{
						exist = true;
						where += " and ( u.name like ?";
					}
					else
						where += " or u.name like ?";
					parameters.add("%%" + _name[i] + "%%");
				}
			}
			if (exist) where += ")";
		}

		if (gender != null && !gender.equals("-1"))
		{
			String userGender = "";
			userGender = gender.equals("0") ? "女" : "男";
			where += " and ub.gender = ? ";
			parameters.add(userGender);
		}

		if (workno != null && workno.length() > 0)
		{
			where += " and ub.work_no like ? ";
			parameters.add("%%" + workno + "%%");
		}

		if (roleId > 0)
		{
			from += " , t_account a , t_account_role ar ";
			where += " and u.id = a.user_id and a.id = ar.account_id and ar.role_id = ? and ar.enabled = true";
			parameters.add(roleId);
		}

		if (beginDate != null || endDate != null)
		{
			from += " ,user_staffs us ";
			where += " and u.id = us.user_id ";
			if (beginDate != null && !beginDate.equalsIgnoreCase(""))
			{
				where += " and us.employ_date >= ? ";
				Date begin = DF.parse(beginDate);
				parameters.add(begin);
			}
			if (endDate != null && !endDate.equalsIgnoreCase(""))
			{
				where += " and us.employ_date <= ? ";
				Date end = DF.parse(endDate);
				parameters.add(end);
			}
		}
		String sql = select + from + where;
		List<User> list = esql.list(User.class, sql, parameters.toArray());

		return list;

	}

	public PagedList<User> listDepartmentDeleteUsers(List<Department> allowed, int offset, int limit) throws Exception
	{
		String idIn = null;
		if (allowed.size() > 0)
		{
			StringBuffer allowIds = new StringBuffer();
			Iterator<Department> itr = allowed.iterator();
			while (itr.hasNext())
			{
				allowIds.append(itr.next().getId());
				allowIds.append(", ");
			}
			idIn = allowIds.toString();
			if (idIn.endsWith(", ")) idIn = idIn.substring(0, idIn.length() - 2);
		}
		else
		{
			idIn = "-1";
		}
		PagedList<User> list = new PagedList<User>();

		String sql = "select * from t_user where enable = false and department_id in (" + idIn + ") order by id offset ? limit ?";
		List<User> t_user = esql.list(User.class, sql, offset, limit);
		list.setData(t_user);

		sql = "select count(*) from t_user where enable = false and department_id in (" + idIn + ") ";
		list.setTotal(esql.query(Integer.class, sql));

		return list;
	}

	public void updateUser(User user) throws Exception
	{
		esql.helper().update(user, "t_user", "", "id", "id=?", user.getId());
	}

	public User checkUser(User user) throws Exception
	{
		Account account = user.getAccount();
		String sql = "select t_user.* from t_user, t_account where t_user.id = t_account.user_id and t_account.login = ?";
		return esql.query(User.class, sql, account.getLogin());
	}

	public long addUser(User user) throws Exception
	{
		//插入用户信息
		esql.helper().insert(user, "t_user", "", "id, create_date");
		long userId = getGeneratedId("t_user");

		return userId;
	}

	public Department getUserDepartment(long userId) throws Exception
	{
		String sql = "select * from t_department as d where d.id = (select department_id from t_user where id = ?)";
		return esql.query(Department.class, sql, userId);
	}

	public List<User> listClassUsers(long classId) throws Exception
	{
		String enableCondition = " and t_user.enable ='true' ";
		String sql = "select * from t_user where id in (select user_id from class_users where class_id =?)" + enableCondition;
		return esql.list(User.class, sql, classId);
	}

	public PagedList<User> listUsers(String ids) throws Exception
	{
		String enableCondition = " and t_user.enable ='true' ";
		String sql = "select * from t_user where id in (" + ids + ")" + enableCondition;
		PagedList<User> plst = new PagedList<User>();
		plst.setData(esql.list(User.class, sql));
		sql = "select count(id) from t_user where id in (" + ids + ") " + enableCondition;
		plst.setTotal(esql.query(Integer.class, sql));
		return plst;
	}

	public PagedList<User> listUsersWithClass(long userId, String ids) throws Exception
	{
		String enableCondition = " and u.enable ='true' ";
		String sql = "";
		PagedList<User> listUsers = new PagedList<User>();
		sql = "select distinct u.*, d.name as department_name from class_users as cu, classes as c, t_user as u, t_department as d "
				+ "where cu.user_id = u.id and cu.class_id = c.id and c.responser = ? and u.department_id = d.id and u.id in (" + ids + ")"
				+ enableCondition + "order by u.id asc";
		List<User> ulst = esql.list(User.class, sql, userId);
		listUsers.setData(ulst);

		sql = "select count( distinct (cu.user_id) ) from class_users as cu, classes as c, t_user as u where cu.user_id = u.id and "
				+ "cu.class_id = c.id and c.responser = ?" + enableCondition + " and u.id in (" + ids + ")";
		listUsers.setTotal(esql.query(Integer.class, sql, userId));

		return listUsers;
	}

	public void deleteUser(long id) throws Exception
	{
		String sql = "delete from t_user where id = ?";
		esql.update(sql, id);

	}

	public List<User> listUserByName(String name) throws Exception
	{
		if (name == null) return null;
		String sql = "select * from t_user where name = ?";
		return esql.list(User.class, sql, name);
	}

	public User getUserByIdentifier(String ID) throws Exception
	{
		String sql = "select t_user.* from t_user, user_details where t_user.id = user_details.id and identifier = ?";
		List<User> lst = esql.list(User.class, sql, ID);
		if (lst.size() > 1) throw new Exception("data errors!!! duplicate Identifier numbers @ user_details.id = " + ID);
		if (lst.size() < 1) return null;
		return lst.get(0);
	}

	public PagedList<User> listUserById(long id) throws Exception
	{
		String sql = "select * from t_user where id = ?";
		PagedList<User> listUsers = new PagedList<User>();
		List<User> l = esql.list(User.class, sql, id);
		listUsers.setData(l);
		return listUsers;
	}

	public void updatePhoto(long userId, byte[] file) throws Exception
	{
		String sql = "delete from t_user_photo where user_id=?";
		esql.update(sql, userId);
		sql = "insert into t_user_photo(user_id, photo) values(?,?)";
		esql.update(sql, userId, file);
	}

	public List<Account> getAccountDetailsByRoleIds(long roleId, long departmentId, String name) throws Exception
	{
		String select = "select a.*,r.name as rolename";

		String tables = " from t_account as a, t_account_role as ar, t_user as u, t_role as r ";
		String filter = " where a.id = ar.account_id and a.user_id = u.id and ar.enabled = true and ar.role_id = ? and ar.department_id = ? "
				+ "  and ar.role_id = r.id ";
		String orders = " order by a.id asc";

		if (name == null) name = "";
		name = name.trim();
		if (name.length() > 0)
		{
			name = "%%" + name + "%%";
			filter += " and u.name like ? ";
		}

		String sql = select + tables + filter + orders;
		List<Account> t_account = esql.list(Account.class, sql, roleId, departmentId, name);
		for (Account account : t_account)
		{
			sql = "select u.*, d.name as \"department.name\"" + "	from t_user as u, t_department as d, t_account as a"
					+ "	where u.department_id = d.id and u.id = a.user_id and a.id = ?";

			User user = esql.query(User.class, sql, account.getId());
			account.setUser(user);
			account.setRoles(getAccountRoles(account.getId()));
		}
		return t_account;
	}


	public void updateUserDiskUse(User user, long use) throws Exception
	{
		String sql = "update quotas set used = used + ? where user_id = ?";
		esql.update(sql, use, user.getId());
	}

	public PagedList<User> listAllowedUsers(String deptIds, String namelike, int offset, int limit) throws Exception
	{
		String sql = "select * from t_user where ";// and t_user.name like '%?%'
		// limit ? offset ?";
		StringBuffer cnds = new StringBuffer();
		if (deptIds != null && deptIds.length() > 1)
		{
			if (deptIds.startsWith("[")) deptIds = deptIds.substring(1);
			if (deptIds.endsWith("]")) deptIds = deptIds.substring(0, deptIds.length() - 1);
			cnds.append("t_user.department_id in (" + deptIds + ") ");
		}
		if (namelike != null && namelike.length() > 0)
		{
			if (cnds.length() > 0)
			{
				cnds.append(" and ");
			}
			cnds.append("t_user.name like '%" + namelike.trim() + "%' ");
		}
		String page = " limit " + limit + " offset " + offset;
		PagedList<User> plst = new PagedList<User>();
		plst.setData(esql.list(User.class, sql + cnds.toString() + page));
		plst.setTotal(esql.query(Integer.class, "select count(id) from t_user where " + cnds));

		return plst;
	}

	public String getUserName(long id) throws Exception
	{
		String sql = "select name from t_user where id = ?";
		return esql.query(String.class, sql, id);
	}

	public void updateUserPracticeEnable(Long id, boolean enable) throws Exception
	{
		String sql = "update t_user set practice_enable = ? where id = ?";
		esql.update(sql, enable, id);
	}

	public void updateUserPracticeEnable(List<Long> list, boolean enable) throws Exception
	{
		String sql = "update t_user set practice_enable = ? where id = any(?)";
		esql.update(sql, enable, new LongArray(list));
	}

	public PagedList<User> getUsersByDepartmentId(long departmentId, int limit, int offset) throws Exception
	{
		String sql = "select u.*, d.name as department_name from t_user as u, t_department as d where u.department_id = d.id  and department_id in (select id from managing_departments(?)) limit ? offset ?";

		PagedList<User> userList = new PagedList<User>();
		userList.setData(esql.list(User.class, sql, new LongArray(departmentId), limit, offset));

		String count = "select count(*) from t_user as u, t_department as d where u.department_id = d.id  and department_id in (select id from managing_departments(?)) ";
		userList.setTotal(esql.query(Integer.class, count, new LongArray(departmentId)));

		return userList;
	}

	public long getAccountUserDepartmentId(String login) throws Exception
	{
		String sql = "select u.department_id from t_account a, t_user u where a.user_id = u.id and a.login = ?";
		if (esql.query(Long.class, sql, login) != null)
			return esql.query(Long.class, sql, login);
		else
			return -1;
	}

	@Override
	public String getUserPostById(long id) throws Exception
	{
		String sql = "select post from t_user where id = ?";
		return esql.query(String.class, sql, id);
	}

	@Override
	public String getUserGenderById(long id) throws Exception
	{
		String sql = "select gender from t_user where id = ?";
		return esql.query(String.class, sql, id);
	}

	@Override
	public boolean existAccount(String accountName) throws Exception
	{
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void getUserQuota(long userId) throws Exception
	{
		// TODO Auto-generated method stub

	}

	@Override
	public void restorePassword(long accountId) throws Exception
	{
		// TODO Auto-generated method stub

	}

	public void resetUser(Long id) throws Exception
	{
		String sql = "update t_user set enable = not(enable) where id = " + id;
		esql.update(sql);
	}

	public List<User> listUserByRoleName(String roleName) throws Exception
	{
		String sql = "select u.*  from t_user u ,t_account a,t_account_role ar ,t_role r where u.id=a.user_id and a.id=ar.account_id  and ar.role_id=r.id and u.enable = true and r.name=? ";
		return esql.list(User.class, sql, roleName);
	}

	public boolean existPhoto(Long userId) throws Exception
	{
		String sql = "select user_id from t_user_photo where user_id=?";
		return esql.query(Long.class, sql, userId) == null ? false : true;
	}
}
