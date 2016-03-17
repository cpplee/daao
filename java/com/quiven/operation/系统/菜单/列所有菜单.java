package com.quiven.operation.系统.菜单;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.system.Dao;
import com.quiven.entity.Menu;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 列所有菜单 extends AbstractOperation implements Operation
{
	private static final long ROOT = 1L;
	private List<Menu> items;

	public void execute() throws Exception
	{	
		Dao dao = DaoManager.getInstance().getDao(Dao.class);
		
		items = dao.getAllMenuItems(ROOT);
		for(Menu m : items)
		{
			List<Menu> subMenus = dao.getAllMenuItems(m.getId());
			m.setSubMenus(subMenus);
		}
	}

	public List<Menu> getItems()
	{
		return items;
	}
	
	public void setItems(List<Menu> items)
	{
		this.items = items;
	}
}
