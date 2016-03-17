package com.quiven.dao;

import java.util.Collection;
import java.util.List;

import com.quiven.entity.Account;
import com.quiven.entity.DepartmentRole;
import com.quiven.entity.Role;
import com.quiven.entity.member.Member;
import com.quiven.entity.system.Department;
import com.quiven.entity.user.User;

public interface AccountDao
{
	// 列所有帐户
	public PagedList<Account> listAccount(long department, int offset, int limit) throws Exception;
	
	public Boolean checkExist(String name) throws Exception;

	public Account getAccountByLogin(String login, String password) throws Exception;

	public Account getUserAccount(User user) throws Exception;
	
	public Account getAccountByUserId(long userId) throws Exception;

	public Account getAccountByLogin(String login) throws Exception;

	public List<Account> getAllAccounts() throws Exception;

	public List<Role> getAccountRoles(long accountId) throws Exception;

	void increaseAccountLoginCount(Account account) throws Exception;

	public long addAccount(Account account) throws Exception;
	

	public long addAccountForResume(Account account) throws Exception;

	public void updateAccount(Account account) throws Exception;
	
	public void updateLoginName(Account account) throws Exception;

	public void deleteAccount(Long id) throws Exception;
	
	public void deleteAccountRoles(Long id, long roleId ) throws Exception;

	public void updateAccountPassword(Account account, String pwd) throws Exception;

	public void enableAccount(long id, boolean enable) throws Exception;

	public PagedList<Account> listAccountPages(String username, String logname, int logincnt, int condition, long departmentId,
			boolean enable, int offset, int limit) throws Exception;

	public List<String> getAllOperationNames() throws Exception;

	public Collection<Role> getOperationRoles(String name) throws Exception;

	public Collection<DepartmentRole> getAccountDepartmentRoles(long accountId) throws Exception;

	public String getAccountPassword(Account account) throws Exception;

	public Account getAccountById(long accountId) throws Exception;

	public Department selectDep(long departmentId);

	public void addAccountDeparmentRole(User user, long departmentId, long roleId) throws Exception;

	public void addAccountDepartmentRole(long accountId, long departmentId, long roleId) throws Exception;
	
	public String getUserLogin(long user_id) throws Exception;
	
	// 判断帐号是否注册过
	public boolean existAccount(String login) throws Exception;
	
	// 取所有有效用户的账户信息
	public List<Account> getAllAccountOfEnableUser() throws Exception;
	
	//得到会员信息
	public Member getMemberInfoById(long memberid) throws Exception;
	public long getMemberIdByAccountId(long accoundId) throws Exception;
	
	//注册会员
	public String addAccount(Member member,String password)throws Exception;
	
     //得到loginType
	public String getLoginTypeByAccountId(long accountId) throws Exception;
}
