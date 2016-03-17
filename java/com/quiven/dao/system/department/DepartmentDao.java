package com.quiven.dao.system.department;

import java.util.List;
import java.util.Set;

import com.quiven.dao.PagedList;
import com.quiven.entity.system.Department;

public interface DepartmentDao
{
	/**
	 * 添加部门
	 * @param dept 部门对象
	 * @return 生成的部门编号
	 * @throws Exception
	 */
	public long addDepartment(Department department) throws Exception;
	
	/**
	 * 删除部门信息
	 * @param department 部门信息
	 * @throws Exception
	 */
	public void deleteDepartment(Department department) throws Exception;
	
	/**
	 * 更新部门信息
	 * @param department 部门信息
	 * @throws Exception
	 */
	public void updateDepartment(Department department) throws Exception;
	
	/**
	 * 根据部门id取得部门信息
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public Department getDepartmentById(Long id) throws Exception;
	
	/**
	 * 根据部门名称取得部门信息
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public Department getDepartmentByName(String name) throws Exception;

	/**
	 * 列出指定部门的子部门
	 * @param id 指定部门id
	 * @return
	 * @throws Exception
	 */
	public List<Department> listSubDepartments(long id) throws Exception;

	/**
	 * 分页列出所有可管理的当前机构的子机构
	 * @param departmentIds 用户角色可管理的部门
	 * @param id 前台传入的部门参数
	 * @return
	 * @throws Exception
	 */
	public PagedList<Department> listManageSubDepartments(Set<Long> departmentIds, long departmentId, int offset, int limit) throws Exception;
	

	/**
	 * 取得所有可管理的当前机构的子机构
	 * @param departmentIds 用户角色可管理的部门
	 * @param id 前台传入的部门参数
	 * @return
	 * @throws Exception 
	 */
	public List<Department> getManageSubDepartments(Set<Long> departmentIds, Long departmentId) throws Exception;
	
	/**
	 * 列出当前用户的可管理部门
	 * @param departmentIds
	 * @return
	 * @throws Exception
	 */
	public List<Department> getManageDepartmants(Set<Long> departmentIds) throws Exception;
	
	/**
	 * 列出当前部门的所有父亲部门
	 * @param departmentId
	 * @return
	 * @throws Exception
	 */
	public List<Department> getParentDepartments(long departmentId) throws Exception;
	
	/**
	 * 判断是否可以被管理
	 * @param departmentIds
	 * @param departmentId
	 * @return
	 * @throws Exception
	 */
	public boolean canBeManaged(Set<Long> departmentIds, long departmentId) throws Exception;
	
	// 根据levelId取出部门
	public List<Department> listDepartmentByLevelId(long levelId) throws Exception;
	
	// 列出某一级别部门的所有叶子节点，参数的levelId小于3
	public List<Department> listDepartmentsLevel3ByLevel(Department department) throws Exception;
	
	// 根据vasId取出部门
	public Department getDepartmentByVasId(String vasId) throws Exception;
	
	//获取最低等级地市
	public PagedList<Department> listLowestManageSubDepartments(Set<Long> departmentIds, long departmentId, int offset, int limit) throws Exception;
	
	// 获取最低等级地市allData
	public List<Department> getLowestManageSubDepartments(Set<Long> departmentIds, Long departmentId) throws Exception;
	
	//获取所给部门的下一级部门
	public List<Department> getLowerSubDepartment(Department department) throws Exception;
}