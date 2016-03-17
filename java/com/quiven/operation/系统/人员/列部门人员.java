package com.quiven.operation.系统.人员;


import java.util.List;

import com.quiven.dao.AccountDao;
import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.system.department.DepartmentDao;
import com.quiven.dao.user.UserDao;
import com.quiven.entity.Account;
import com.quiven.entity.system.Department;
import com.quiven.entity.user.User;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列部门人员 extends AbstractOperation implements Operation
{
	private Long departmentId;	//部门id
	private int offset;
	private int limit;
	private String name ;
	private long roleId ;
	
	private List<User> data;
	private int total;
	
	public void execute() throws Exception
	{
		DepartmentDao dDao = DaoManager.getInstance().getDao(DepartmentDao.class);
		UserDao uDao = DaoManager.getInstance().getDao(UserDao.class);
		AccountDao aDao = DaoManager.getInstance().getDao(AccountDao.class);
		
		// 如果没有传入部门id，则默认使用当前登录用户的部门
		if (departmentId == null || departmentId <= 0)	
		{
			// 获取当前登录帐户
			Account account = OperationContext.getContext().getAccount();
			departmentId = account.getUser().getDepartmentId();
		}
		
		List<Department> subList = dDao.getManageSubDepartments(null, departmentId);
		// 第一个参数false表示用户，而不是现场处理人
		PagedList<User> list = uDao.listDepartmentUsersByConditions( subList, roleId, name, offset, limit);
		total = list.getTotal();
		data = list.getData();
		
		User admin = new User();
		for (User u : data)
		{
			// 总行角色查询用户时，自动隐藏admin
			if (u.getId() == 1 && OperationContext.getContext().getAccount().getId() == 2)
				admin = u;
				
			// 取得帐号信息
			u.setAccount(aDao.getAccountByUserId(u.getId()));
			// 取得部门信息
			u.setDepartment(dDao.getDepartmentById(u.getDepartmentId()));
			// 取得角色信息（虽然是roles但是本项目每个用户只有一个role）
			u.setRoles(uDao.getAccountRoles(u.getAccount().getId()));
		}
		data.remove(admin);
	}

	public Long getDepartmentId()
	{
		return departmentId;
	}

	public void setDepartmentId(Long departmentId)
	{
		this.departmentId = departmentId;
	}

	public int getOffset()
	{
		return offset;
	}

	public void setOffset(int offset)
	{
		this.offset = offset;
	}

	public int getLimit()
	{
		return limit;
	}

	public void setLimit(int limit)
	{
		this.limit = limit;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public long getRoleId()
	{
		return roleId;
	}

	public void setRoleId(long roleId)
	{
		this.roleId = roleId;
	}

	public List<User> getData()
	{
		return data;
	}

	public void setData(List<User> data)
	{
		this.data = data;
	}

	public int getTotal()
	{
		return total;
	}

	public void setTotal(int total)
	{
		this.total = total;
	}
}
