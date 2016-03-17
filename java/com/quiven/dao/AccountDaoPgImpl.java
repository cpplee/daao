package com.quiven.dao;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import zuojie.esql.util.LongArray;

import com.quiven.UserException;
import com.quiven.entity.Account;
import com.quiven.entity.AccountLoginLog;
import com.quiven.entity.DepartmentRole;
import com.quiven.entity.Role;
import com.quiven.entity.member.Member;
import com.quiven.entity.system.Department;
import com.quiven.entity.user.User;
import com.quiven.util.EncodePassword;

public class AccountDaoPgImpl extends BaseDao implements AccountDao, PostgreSQL
{
	public PagedList<Account> listAccount(long departmentId, int offset, int limit) throws Exception
	{
		String sql1 = "";
		List<Account> accounts = new ArrayList<Account>();
		Integer c;
		
		if (departmentId == -1)
		{
			sql1 = "select * from t_account order by id offset ? limit ?";
			accounts = esql.list(Account.class, sql1, offset, limit);
			for (Account account : accounts)
			{
				String sql2 = "select * from t_user where id = ?";
				User user = esql.query(User.class, sql2, account.getUserId());
				account.setUser(user);
				
				String sql3 = "select r.* from t_role as r, t_account_role as ar" 
						+ " where r.id = ar.role_id and ar.account_id = ? and ar.enabled = true";
				
				account.setRoles(esql.list(Role.class, sql3, account.getId()));
			}

			String sql4 = "select count(*) from t_account";
			c = esql.query(Integer.class, sql4);
		}
		else
		{
			List<Long> departmentIds = new ArrayList<Long>();
			departmentIds.add(departmentId);
			sql1 = "select a.* from t_account as a,t_user as u where a.user_id = u.id and u.department_id in (select id from managing_departments(?)) order by a.id offset ? limit ?";
			accounts = esql.list(Account.class, sql1, new LongArray(departmentIds), offset, limit);
			for (Account account : accounts)
			{
				String sql2 = "select * from t_user where id = ?";
				User user = esql.query(User.class, sql2, account.getUserId());
				account.setUser(user);
				
				String sql3 = "select r.* from t_role as r, t_account_role as ar" 
						+ " where r.id = ar.role_id and ar.account_id = ? and ar.enabled = true";
				
				account.setRoles(esql.list(Role.class, sql3, account.getId()));
			}

			String sql4 = "select count(a.*) from t_account as a,t_user as u where a.user_id = u.id and u.department_id in (select id from managing_departments(?))";
			c = esql.query(Integer.class, sql4, new LongArray(departmentIds));
		}
			
		PagedList<Account> list = new PagedList<Account>();
		list.setData(accounts);
		list.setTotal(c);

		return list;
	}
	
	
	/**=====================用到的函数=================================**/
	
	
	
	public Department selectDep(long departmentId)
	{
		Department d = new Department();
		String sql = "select * from t_department where id=?";
		try
		{
			d = esql.query(Department.class, sql, departmentId);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return d;

	}

	public Account getAccountByLogin(String login, String password) throws Exception
	{
		//查询当前有效的帐号
		Account account = esql.helper().query(Account.class, "t_account", null, null, "login = ? and password = ?", login, password);
		if (account == null) 
			return null;
		
		//装载账户的用户信息
		account.setUser(esql.helper().query(User.class, "t_user", null, null, "id = ?", account.getUserId()));
		account.setRoles(esql.list(Role.class, "select distinct r.* from "+
				"t_role r,t_account_role ar where ar.account_id = ? and r.id = ar.role_id",account.getId()));
		return account;
	}

	public List<Account> getAllAccounts() throws Exception
	{
		String sql = "select * from t_account";
		return esql.list(Account.class, sql);
	}

	// 获取某个账户的全部角色
	public List<Role> getAccountRoles(long accountId) throws Exception
	{
		String sql = "select distinct r.*, d.id as department_id, d.name as department_name, d.inside_code " +
				"from t_account_role ar, t_role r, t_department d " +
				"where ar.account_id = ? and ar.role_id = r.id and ar.department_id = d.id ";
		return esql.list(Role.class, sql, accountId);
	}

	public List<DepartmentRole> getAccountDepartmentRoles(long accountId) throws Exception
	{
		String sql = "select r.*, ar.department_id from t_account_role ar, t_role r where ar.account_id = ? and ar.role_id = r.id";
		return esql.list(DepartmentRole.class, sql, accountId);
	}

	public void increaseAccountLoginCount(Account account) throws Exception
	{
		String sql = "update t_account set login_count = login_count + 1 where login = ?";
		esql.update(sql, account.getLogin());
	}

	public long addAccount(Account account) throws Exception
	{
		String sql = "select t_account.id from t_account where t_account.user_id = ?";
		Long id = esql.query(Long.class, sql, account.getUserId());
		if (id != null)
		{
			sql = "update t_account set user_id =?, login =?, password = ?, login_count = ? where t_account.id = ?";
			esql.update(sql, account.getUserId(), account.getLogin(), EncodePassword.encodePassword(account.getPassword()), account
					.getLoginCount(), id);
			return 0;
		}
		sql = " insert into t_account (user_id, login, password, login_count) values(?, ?, ?, ?)";
		esql.update(sql, account.getUserId(), account.getLogin(), EncodePassword.encodePassword(account.getPassword()), account
				.getLoginCount());
		return getGeneratedId("t_account");
	}

	public long addAccountForResume(Account account) throws Exception
	{
		String sql = "insert into t_account(id, user_id, login, password, login_count) values(?, ?, ?, ?, ?)";
		return esql.update(sql, account.getId(), account.getUserId(), account.getLogin(), EncodePassword.encodePassword(account.getPassword()), account.getLoginCount());
	}
	/**
	 * 这个ID为userId
	 */
	public void deleteAccount(Long id) throws Exception
	{
		if (id == null) return;
		String sql = "select id from t_account where user_id = ?";
		Long accountId = esql.query(Long.class, sql, id);
		if(accountId == null)
			return;
		sql = "delete from t_account_role where account_id = ?";
		esql.update(sql, accountId);
		sql = "delete " + " from t_account " + " where id = ? ";
		esql.update(sql, accountId);
	}
	
	public void deleteAccountRoles(Long id, long roleId) throws Exception
	{
		if (id == null) return;
		String sql = "select id from t_account where user_id = ?";
		Long accountId = esql.query(Long.class, sql, id);
		if(accountId == null)
			return;
		sql = "delete from t_account_role where account_id = ? and role_id <> ?";
		esql.update(sql, accountId, roleId);
	}

	public void updateAccount(Account account) throws Exception
	{
		esql.helper().update(account, "t_account", "", "id", "id=?", account.getId());
	}
	
	public void updateLoginName(Account account) throws Exception
	{
		try
		{
			String sql = " update t_account set login =? where user_id = ?";
			esql.update(sql, account.getLogin(), account.getUserId());
		}
		catch(Exception e)
		{
			throw new UserException("登录名已经存在了！");
		}
	}

	public PagedList<Account> listAccountPages(String username, String logname, int logincnt, int condition, long departmentId,
			boolean enable, int offset, int limit) throws Exception
	{
		PagedList<Account> lst = new PagedList<Account>();
		String sql = "";
		String pageInformation = " offset ? limit ? ";
		
		if (username != null)
		{
			sql = "select t_account.* from t_account, t_user  where t_user.id = t_account.user_id  and t_user.name like '%"
					+ username + "%' order by id desc ";
			lst.setData(esql.list(Account.class, sql + pageInformation, offset, limit));

			List<Account> acntlst = lst.getData();
			for (Account acnt : acntlst)
			{
				sql = "select t_user.* from t_user where t_user.id =  ?";
				acnt.setUser(esql.query(User.class, sql, acnt.getUserId()));
			
				sql = "select t_role.*, d.id as department_id, d.name as department_name from t_role, t_account_role, t_department d " 
					+ " where t_role.id = t_account_role.role_id "
					+ " and t_account_role.department_id = d.id and t_account_role.account_id = ? and t_account_role.enabled = true";
			
				acnt.setRoles(esql.list(Role.class, sql, acnt.getId()));
			}

			sql = "select count(t_account.*) from  t_account, t_user " + " where t_user.id = t_account.user_id " + " and t_user.name like '%"
					+ username + "%' ";
			Integer c = esql.query(Integer.class, sql);
			lst.setTotal(c);

			return lst;
		}
		if (logname != null)
		{
			sql = "select * from t_account  where login like '%" + logname + "%'" + " order by id desc ";
			lst.setData(esql.list(Account.class, sql + pageInformation, offset, limit));

			List<Account> acntlst = lst.getData();
			for (Account acnt : acntlst)
			{
				sql = "select t_user.* from t_user where t_user.id =  ?";
				acnt.setUser(esql.query(User.class, sql, acnt.getUserId()));
				
				
				sql = "select t_role.*, d.id as department_id, d.name as department_name from t_role, t_account_role, t_department d " + " where t_role.id = t_account_role.role_id "
					+ " and t_account_role.department_id = d.id and t_account_role.account_id = ? and t_account_role.enabled = true";
			
				acnt.setRoles(esql.list(Role.class, sql, acnt.getId()));
			}

			sql = "select count(t_account.*)  " + " from t_account " + " where t_account.login like '%" + logname + "%' ";
			Integer c = esql.query(Integer.class, sql);
			lst.setTotal(c);

			return lst;
		}
		if (logincnt >= 0)
		{
			sql = "select * " + " from t_account " + " where login_count ";
			String SqlCNT = "select count(*) " + " from t_account " + " where login_count ";
			switch (condition)
			{
			case 1:
			{
				sql = sql + " >= ";
				SqlCNT = SqlCNT + " >= ";
				break;
			}
			case 2:
			{
				sql = sql + "> ";
				SqlCNT = SqlCNT + " > ";
				break;
			}
			case 3:
			{
				sql = sql + "= ";
				SqlCNT = SqlCNT + " = ";
				break;
			}
			case 4:
			{
				sql = sql + "< ";
				SqlCNT = SqlCNT + " < ";
				break;
			}
			case 5:
			{
				sql = sql + "<= ";
				SqlCNT = SqlCNT + " <= ";
				break;
			}
			default:
			{
				throw new Exception("unvalid search condition.");
			}
			}
			sql = sql + " ?  order by login_count desc";
			SqlCNT = SqlCNT + " ?";
			lst.setData(esql.list(Account.class, sql + pageInformation, logincnt, offset, limit));

			List<Account> acntlst = lst.getData();
			for (Account acnt : acntlst)
			{
				sql = "select t_user.* from t_user where t_user.id =  ?";
				acnt.setUser(esql.query(User.class, sql, acnt.getUserId()));
				
				sql = "select t_role.*, d.id as department_id, d.name as department_name from t_role, t_account_role, t_department d " + " where t_role.id = t_account_role.role_id "
					+ " and t_account_role.department_id = d.id and t_account_role.account_id = ? and t_account_role.enabled = true";
			
				acnt.setRoles(esql.list(Role.class, sql, acnt.getId()));
			}
			Integer c = esql.query(Integer.class, SqlCNT, logincnt);
			lst.setTotal(c);
			return lst;
		}
		if (departmentId > 0)
		{
			sql = "select distinct t_account.* from t_account, t_account_role, t_role, t_user where t_user.id = t_account.user_id and t_account.id = t_account_role.account_id "
					+ " and t_account_role.role_id = t_role.id and t_user.department_id in (select id from sub_departments(?)) and t_account_role.enabled = true and t_user.enable = true";
			lst.setData(esql.list(Account.class, sql + pageInformation, new LongArray(departmentId), offset, limit));

			List<Account> acntlst = lst.getData();
			for (Account acnt : acntlst)
			{
				sql = "select t_user.* from t_user where t_user.id =  ?";
				acnt.setUser(esql.query(User.class, sql, acnt.getUserId()));
				
				sql = "select t_role.*, d.id as department_id, d.name as department_name from t_role, t_account_role, t_department d " + " where t_role.id = t_account_role.role_id "
					+ " and t_account_role.department_id = d.id and t_account_role.account_id = ? and t_account_role.enabled = true";
			
				acnt.setRoles(esql.list(Role.class, sql, acnt.getId()));
			}

			sql = "select count(distinct t_account.id) from t_account, t_account_role, t_role, t_user where t_user.id = t_account.user_id and t_account.id = t_account_role.account_id "
					+ " and t_account_role.role_id = t_role.id and t_user.department_id in (select id from sub_departments(?)) and t_account_role.enabled = true and t_user.enable = true";
			Integer c = esql.query(Integer.class, sql, new LongArray(departmentId));
			lst.setTotal(c);

			return lst;
		}
		sql = "select * from t_account ";
		lst.setData(esql.list(Account.class, sql + pageInformation, offset, limit));

		List<Account> acntlst = lst.getData();
		for (Account acnt : acntlst)
		{
			sql = "select t_user.* from t_user where t_user.id =  ?";
			acnt.setUser(esql.query(User.class, sql, acnt.getUserId()));
			
			sql = "select t_role.*, d.id as department_id, d.name as department_name from t_role, t_account_role, t_department d " + " where t_role.id = t_account_role.role_id "
				+ " and t_account_role.department_id = d.id and t_account_role.account_id = ? and t_account_role.enabled = true";
		
			acnt.setRoles(esql.list(Role.class, sql, acnt.getId()));
		}

		sql = "select count(*)  from t_account ";
		Integer c = esql.query(Integer.class, sql);
		lst.setTotal(c);
		return lst;
	}

	public void enableAccount(long id, boolean enable) throws Exception
	{
		String sql = "update t_account_role  set enabled = ? where account_id = ?";
		esql.update(sql, enable, id);
	}

	public void updateAccountPassword(Account account, String password) throws Exception
	{
		String sql = "update t_account set password = ? where id = ?";
		esql.update(sql, password, account.getId());
	}

	public List<String> getAllOperationNames() throws Exception
	{
		String sql = "select distinct operation_name from t_privilege";
		return esql.list(String.class, sql);
	}

	public Collection<Role> getOperationRoles(String name) throws Exception
	{
		String sql = "select r.* from t_role r, t_privilege p where p.operation_name = ? and p.role_id = r.id";
		return esql.list(Role.class, sql, name);
	}

	public Account getUserAccount(User user) throws Exception
	{
		String sql = "select * from t_account where t_account.user_id = ?";
		return esql.query(Account.class, sql, user.getId());
	}
	
	public Account getAccountByUserId(long userId) throws Exception
	{
		String sql = "select * from t_account where user_id = ?";
		return esql.query(Account.class, sql, userId);
	}

	public String getAccountPassword(Account account) throws Exception
	{
		String sql = "select password from t_account where id = ?";
		return esql.query(String.class, sql, account.getId());
	}

	public Account getAccountById(long accountId) throws Exception
	{
		String sql = "select * from t_account where id = ?";
		return esql.query(Account.class, sql, accountId);
	}

	public Account getAccountByLogin(String login) throws Exception
	{
		String sql = "select * from t_account where login = ? ";
		Account account = esql.query(Account.class, sql, login);
		
		if (account == null) return null;

		sql = "select * from t_user where id = ?";
		User user = esql.query(User.class, sql, account.getUserId());
		account.setUser(user);
		
		return account;
	}

	public Boolean checkExist(String name) throws Exception
	{
		String sql = "select count(*) from t_account where login = ?";
		return esql.query(Integer.class, sql, name) > 0 ? true : false;
	}

	public void addAccountDeparmentRole(User user, long departmentId, long roleId) throws Exception
	{
		String sql = "insert into t_account_role (account_id, department_id, role_id, enabled) values(?, ?, ?, true)";
		esql.update(sql, user.getAccount().getId(), departmentId, roleId);
	}
	public void addAccountDepartmentRole(long accountId, long departmentId, long roleId) throws Exception
	{
		String sql = "insert into t_account_role (account_id, department_id, role_id, enabled) values(?, ?, ?, true)";
		esql.update(sql, accountId, departmentId, roleId);
	}
	
	public String getUserLogin(long user_id) throws Exception
	{
		String sql = "select login from t_account where user_id = ?";
		return esql.query(String.class, sql, user_id);
	}


	@Override
	public boolean existAccount(String login) throws Exception
	{
		String sql = "select id from t_account where login = ?";
		return esql.query(Long.class, sql, login) == null ? false : true;
	}


	@Override
	public List<Account> getAllAccountOfEnableUser() throws Exception
	{
		String sql = "select * from t_account";
		List<Account> accountList = esql.list(Account.class, sql);
		
		for (Account account : accountList)
		{
			account.setUser(esql.helper().query(User.class, "t_user", null, null, "id = ?", account.getUserId()));
			if (!account.getUser().isEnable())
			{
				accountList.remove(account);
				continue;
			}
			account.setLastLoginInfo(esql.helper().query(AccountLoginLog.class, "t_account_login_log", null, null, "account_id = ? order by login_time desc limit 1", account.getId()));
		}
		
		return accountList;
	}
	
	@Override
	public long getMemberIdByAccountId(long accoundId) throws Exception {
		// TODO Auto-generated method stub
		String sql="select id from t_member where account_id=?";
		long accountid=esql.query(long.class, sql, accoundId);
		
		return accountid;
	}


	@Override
	public Member getMemberInfoById(long memberid) throws Exception {
		// TODO Auto-generated method stub
		String sql="select * from t_member where id=?";
		return esql.query(Member.class, sql,memberid );
	}


	@Override
	public String addAccount(Member member, String password) throws Exception {
		// TODO Auto-generated method stub
		//检测用户名是否被注册
		String sql1 = "select count(*) from t_account where  login= ?";
		long count= esql.query(long.class, sql1, member.getName());
		//检测电话是否被注册
		String sql_phone= "select count(*) from t_account where  phone= ?";
		long count_phone=esql.query(long.class, sql_phone,member.getPhone() );
		//检测email是否已被注册
		String sql_email= "select count(*) from t_account where  email= ?";
		long count_email=esql.query(long.class, sql_email,member.getEmail() );
		
		if(count!=0)
		{
			return "该用户名已被注册!";
		}
		else if(count_phone!=0)
		{
			return "该电话号码已被注册!";
		}
		else if(count_email!=0)
		{
			return "该邮箱已被注册!";
		}
		else
		{
			//添加t_account表中的數據
			String sql2="insert into t_account (login, phone,email,password) values(?, ?, ?, ?)";
			esql.update(sql2,member.getName(),member.getPhone(),member.getEmail(), EncodePassword.encodePassword(password));
			long accountid=getGeneratedId("t_account");
			//添加t_account_role表信息
			String sql3="insert into t_account_role(account_id,department_id,role_id) values(?,?,?)";
			esql.update(sql3, accountid,2,4);
			//添加t_member表信息
			//取得新註冊用戶的用戶類型
			String sql4="select name from t_role where id=?";
			String memberType=esql.query(String.class, sql4,4);
			String sql5="insert into t_member(account_id,mem_type,name,phone,email,login_type) values(?,?,?,?,?,?)";
			esql.update(sql5, accountid,memberType,member.getName(),member.getPhone(),member.getEmail(),member.getLoginType());
			return "注册成功，请返回登录！";
		}
	}


	@Override
	public String getLoginTypeByAccountId(long accountId) throws Exception {
		// TODO Auto-generated method stub
		String sql="select login_type from t_member where account_id=?";
		String loginType= esql.query(String.class, sql, accountId);
		
		return loginType;
	}
}


