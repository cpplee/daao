package com.quiven.dao.user;

import java.util.List;

import com.quiven.dao.PagedList;
import com.quiven.entity.Account;
import com.quiven.entity.Role;
import com.quiven.entity.system.Department;
import com.quiven.entity.user.User;

public interface UserDao
{
	// 列出部门下的所有管理者
	public List<User> listDepartmentManagers(List<Department> allowed) throws Exception;
	
	// 不分页列出部门下的所有用户
	public List<User> listDepartmentUsersByConditions(Boolean isProcessor, List<Department> allowed, long roleId, String name) throws Exception;
		
	// 列出部门下的所有用户
	public PagedList<User> listDepartmentUsersByConditions( List<Department> allowed, long roleId, String name, int offset, int limit) throws Exception;
	
	// 根据用户id返回用户信息
	public User getUserById(long id) throws Exception;
	
	// 根据id返回处理人信息
	public User getProcessorById(long id) throws Exception;
	
	// 列出部门下的所有用户和处理人
	public List<User> listDepartmentProcessors(List<Department> allowed) throws Exception;
	
	public User getUserByIdentifier(String identifer) throws Exception;

	public List<User> listUserByName(String name) throws Exception;

	public List<Role> getAccountRoles(long accountId) throws Exception;

	public PagedList<Account> getAccountDetailsByRoleIds(long roleIds[], String name, int offset, int limit, long departmentId)
			throws Exception;

	public PagedList<Account> getAccountDetailsByRoleIds(long departmentId, long roleId, String name, int offset, int limit)
			throws Exception;

	public List<Account> getAccountDetailsByRoleIds(long roleId, long departmentId, String name) throws Exception;

	public PagedList<User> listDepartmentDeleteUsers(List<Department> allowed, int offset, int limit) throws Exception;

	public void updateUser(User user) throws Exception;

	public long addUser(User user) throws Exception;

	public Department getUserDepartment(long userId) throws Exception;

	public List<User> listClassUsers(long classId) throws Exception;

	public void deleteUser(long id) throws Exception;

	public PagedList<User> listUserById(long id) throws Exception;

	public void updatePhoto(long userId, byte[] file) throws Exception;


	public void updateUserDiskUse(User user, long use) throws Exception;

	public String getUserName(long id) throws Exception;

	public List<Account> getAccountsByDepartmentRole(Long currentDepartmentId, Long currentRoleId) throws Exception;
	
	public List<String> listUsersByNameList(String [] nameList) throws Exception;
	
	public void updateUserPracticeEnable(Long id, boolean enable) throws Exception;
	
	public void updateUserPracticeEnable(List<Long> list, boolean enable) throws Exception;
	
	public PagedList<User> getUsersByDepartmentId(long departmentId,int limit , int offset) throws Exception;
	
	public User checkUser (User user) throws Exception;
	
	public long getAccountUserDepartmentId(String login) throws Exception;

	public String getUserPostById(long id) throws Exception;

	public String getUserGenderById(long id) throws Exception;

	public boolean existAccount(String accountName) throws Exception;

	public void restorePassword(long accountId) throws Exception;

	public void getUserQuota(long userId) throws Exception;

	public void resetUser(Long id) throws Exception;
	
	public List<User> listUserByRoleName(String roleName) throws Exception;
	
	/** 检测用户是否有头像 */
	public boolean existPhoto(Long userId) throws Exception;
	
}




