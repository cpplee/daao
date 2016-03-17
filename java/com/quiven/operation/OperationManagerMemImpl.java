package com.quiven.operation;

import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.quiven.UserException;
import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.entity.Account;
import com.quiven.entity.DepartmentRole;
import com.quiven.entity.Role;

public class OperationManagerMemImpl extends OperationManager
{
	private static final Log log = LogFactory.getLog(OperationManagerMemImpl.class);

	private static final long REFRESH_DELAY = 8 * 1000;  // 修改权限系统后的刷新延时
	
	/** 从操作名到角色集合的映射 operation.name --> role */
	private Map<String, Set<Role>> operationRoles = new ConcurrentHashMap<String, Set<Role>>();

	/** 从帐号, 角色到部门的映射 account.id , role.id --> department.id */
	private Map<String, Set<Long>> accountRoleDepartmentIds = new ConcurrentHashMap<String, Set<Long>>();

	private Timer timer = new Timer();
	private TimerTask task;
	
	private boolean isSubmit = true;	//是否已经提交过修改权限系统的操作
	@Override
	public void loadPrivileges() throws Exception
	{
		// 从操作名到角色集合的映射 operation.name --> role
		Map<String, Set<Role>> map1 = new HashMap<String, Set<Role>>();
		// 从帐户角色到部门集合的映射 account.id + role.id --> department
		Map<String, Set<Long>> map2 = new HashMap<String, Set<Long>>();

		AccountDao dao = DaoManager.getInstance().getDao(AccountDao.class);

		// 载入所有操作的角色
		List<String> names = dao.getAllOperationNames();
		for (String name : names)
		{
			// 查出到所有子操作
			List<String> children = tree.getAllChildren(name);

			if (children == null)
			{
				// 除去菜单虚操作日志提醒
				if (name.startsWith("菜单虚操作"))
					continue;
				
				log.warn("操作不存在: " + name);
				continue;
			}
			Collection<Role> r = dao.getOperationRoles(name);

			// 依次注册每个子操作
			for (String s : children)
			{
				Class<? extends Operation> clazz = operations.get(s);
				if (clazz == null) continue;

				Set<Role> roles = map1.get(s);
				if (roles == null) roles = new HashSet<Role>();
				roles.addAll(r);

				map1.put(s, roles);
			}
		}

		// 载入所有用户的角色信息
		List<Account> accounts = dao.getAllAccounts();
		for (Account account : accounts)
		{
			Collection<DepartmentRole> roles = dao.getAccountDepartmentRoles(account.getId());
			for (DepartmentRole role : roles)
			{
				String s = account.getId() + "+" + role.getId();
				Set<Long> departmentIds = map2.get(s);
				if (departmentIds == null)
				{
					departmentIds = new HashSet<Long>();
					map2.put(s, departmentIds);
				}
				departmentIds.add(role.getDepartmentId());
			}
		}

		synchronized (this)
		{
			operationRoles = map1;
			accountRoleDepartmentIds = map2;
		}
	}

	public Set<Long> getAccountOperationDepartmentIds(Account account, String operation) throws Exception
	{
		Map<String, Set<Role>> map1 = null;
		Map<String, Set<Long>> map2 = null;
		synchronized (this)
		{
			map1 = operationRoles;
			map2 = accountRoleDepartmentIds;
		}

		Set<Long> departmentIds = new HashSet<Long>();

		if (operation.startsWith("公用.")) return departmentIds;

		Class<? extends Operation> c = operations.get(operation);
		if (c == null) throw new UserException("操作 " + operation + " 不存在");

		Set<Role> roles = map1.get(operation);
		if (roles == null) throw new UserException("帐户 " + account.getLogin() + " 没有执行操作 " + operation + " 的权限");

		for (Role role : roles)
		{
			String s = account.getId() + "+" + role.getId();
			Set<Long> a = map2.get(s);
			if (a == null) continue;
			departmentIds.addAll(a);
		}

		if (departmentIds.size() == 0) throw new UserException("帐户 " + account.getLogin() + " 没有执行操作 " + operation + " 的权限");

		return departmentIds;
	}
	
	public Set<Long> getAccountOperationDepartmentIdsForManageTree(Account account, String operation) throws Exception
	{
		Map<String, Set<Role>> map1 = null;
		Map<String, Set<Long>> map2 = null;
		synchronized (this)
		{
			map1 = operationRoles;
			map2 = accountRoleDepartmentIds;
		}

		Set<Long> departmentIds = new HashSet<Long>();

		if (operation.startsWith("公用.")) return departmentIds;

		Class<? extends Operation> c = operations.get(operation);
		if (c == null) throw new UserException("操作 " + operation + " 不存在");

		Set<Role> roles = map1.get(operation);
		if (roles == null) throw new UserException("帐户 " + account.getLogin() + " 没有权限执行操作 " + operation + " 的权限");

		for (Role role : roles)
		{
			if (!"员工".equals(role.getName()))
			{
				String s = account.getId() + "+" + role.getId();
				Set<Long> a = map2.get(s);
				if (a == null) continue;
				departmentIds.addAll(a);
			}
		}

		if (departmentIds.size() == 0) throw new UserException("帐户 " + account.getLogin() + " 没有权限执行操作 " + operation + " 的权限");

		return departmentIds;
	}
	
	public void refresh(boolean flag)
	{
		task = new RefreshPrivilegeTask();
		if(flag)
			timer.schedule(task, 0);
		else if(isSubmit)
		{
			timer.schedule(task, REFRESH_DELAY);
			isSubmit = false;
		}
	}
	
	// =======================
	
	private class RefreshPrivilegeTask extends TimerTask
	{
		public void run()
		{
			DaoManager dm = DaoManager.getInstance();
			try
			{
				dm.begin();
				log.trace("刷新权限系统");
				loadPrivileges();
				isSubmit = true;
			}
			catch (Exception e)
			{
				log.error("刷新权限系统错误", e);
			}
			finally
			{
				dm.end();
			}
		}
	}
}
