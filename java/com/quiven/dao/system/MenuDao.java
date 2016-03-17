package com.quiven.dao.system;

import com.quiven.dao.PagedList;
import com.quiven.entity.Menu;

public interface MenuDao
{

	public PagedList<Menu> listMenuPages(int offset, int limit) throws Exception;

	public PagedList<Menu> listSubMenuPages(long parentId, int offset, int limit) throws Exception;

	public void updateMenu(Menu menu) throws Exception;

	public void addMenu(Menu menu) throws Exception;

	public void deleteMenu(long id) throws Exception;
}
