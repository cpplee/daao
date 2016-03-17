package com.quiven.dao.system;

import java.util.List;
import java.util.Set;

import com.quiven.dao.PagedList;
import com.quiven.entity.Account;
import com.quiven.entity.Role;
import com.quiven.entity.user.User;
import com.quiven.operation.OperationContext;

public interface RoleDao
{
	/**=====================TCC用到的函数=================================**/
	
	/** 更新角色 */
	public void updateRole(Role role) throws Exception;
	
	/** 列指定机构下已经配置的角色 */
	public PagedList<Role> listDepartmentRoles(long departmentId, int offset, int limit) throws Exception;
	
	/** 列某个人已拥有的角色 */
	public List<Role> listAccountRoles(long accountId) throws Exception;
	
	/** 列某个人已拥有的角色(特定机构下) */
	public List<Role> listAccountDepRoles(long accountId, long departmentId) throws Exception;
	
	/** 列某个人未拥有的角色(特定机构下) */
	public List<Role> listAccountNotHaveDepRoles(long accountId, long departmentId) throws Exception;
	
	/** 设置人员角色 */
	public void setAccountRoles(long accountId, long departmentId, List<Long> roleIds) throws Exception;
	
	/** 查拥有某角色的人员 */
	public List<User> getRoleUsers(long roleId, long departmentId) throws Exception;
	
	/** 查拥有某角色的人员 */
	public List<User> getRoleNotHaveUsers(long roleId, long departmentId) throws Exception;
	
	/** 设置角色人员 */
	public void setRoleAccounts(long roleId, long departmentId, List<Long> userIds) throws Exception;
	
	/** 设置多个用户角色 */
	public void setPrivilege(long departmentId, long roleId, List<User> users) throws Exception;
	
	public Role getRoleByName(String name) throws Exception;
	
	public void addRole(Role role, long departmentId) throws Exception;
	
	public void addRoleOperations(Role role) throws Exception;
	
	public abstract Role getRoleById(long id) throws Exception;
	
	/** 获取menu对应的所有操作 */
	public Set<String> getMenuOperationsById(long menuId) throws Exception;
	
	/** 向privileges表中添加角色拥有的所有操作 */
	public void addOperationsToPrivileges(long roleId, Set<String> operations) throws Exception;
	/**=====================TCC用到的函数=================================**/
	
	

	//public abstract PagedList<Role> getRolesByDepartmentAccount(long departmentId, int offset, int limit, OperationContext context) throws Exception;

	public abstract List<Role> getUserRoles(User user) throws Exception;
	
	public void deleteRole(long roleId, long departmentId) throws Exception;
	
	public PagedList<User> listRoleUsers(long roleId, long departmentId, int limit, int offset) throws Exception;
	
	public void deleteRoleUser(long roleId, long departmentId, long accountId) throws Exception;
	
	public PagedList<Role> listRoles(int limit, int offset, Account account) throws Exception;
	
	public Long getUserRoleDepartment(long roleId, long accountId) throws Exception;

	/**
	 * 根据角色名称列出具有该角色的账户
	 * @param roleName 角色名称
	 * @return
	 * @throws Exception
	 */
	public List<User> listUserByRoleName(String roleName) throws Exception;
	
	//////////////酒店
	public long getRoleIdByAccountId(long accountId) throws Exception;
	

}
