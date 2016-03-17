package com.quiven.operation;

import java.util.Set;

import com.quiven.UserException;
import com.quiven.dao.DaoManager;
import com.quiven.dao.system.department.DepartmentDao;

public abstract class AbstractOperation implements Operation
{
	// 检查登陆者否有用此操作管理此部门的权限。
	// @departmentId : 被操作资源所在的部门ID
	protected void checkOperationPrivilege(long departmentId) throws Exception
	{
		OperationContext context = OperationContext.getContext();
		Set<Long> roles = context.getDepartmentIds(); 

		DepartmentDao dao = DaoManager.getInstance().getDao(DepartmentDao.class);
		if (!dao.canBeManaged(roles, departmentId))
		{
			throw new UserException("此账号没有权限进行这项操作！");
		}
	}
	
	public String toString()
	{
		return this.getClass().getCanonicalName();
	}
}
