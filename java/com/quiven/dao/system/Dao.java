package com.quiven.dao.system;

import java.util.Dictionary;
import java.util.List;

import com.quiven.entity.Account;
import com.quiven.entity.Menu;
import com.quiven.entity.system.Department;

public interface Dao
{
	public abstract List<Menu> getAccountMenuItems(Account account, long menuId) throws Exception;

	public abstract List<Dictionary> getDictinarysByTypeName(String typeName) throws Exception;
	
	public abstract Long getDictinarysTypeIdByTypeName(String typeName) throws Exception;

	public abstract List<Department> getAllDepartments() throws Exception;
	
	public List<Menu> getAllMenuItems(long menuId) throws Exception;

}