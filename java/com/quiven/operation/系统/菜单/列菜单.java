package com.quiven.operation.系统.菜单;

import java.util.ArrayList;
import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.system.Dao;
import com.quiven.entity.Account;
import com.quiven.entity.Menu;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列菜单 extends AbstractOperation implements Operation
{
	private static final long ROOT = 1L;
	private long menuId;
	private List<Menu> items;

	public void execute() throws Exception
	{	
		OperationContext context = OperationContext.getContext();	
		Account account = context.getAccount();
		Dao dao = DaoManager.getInstance().getDao(Dao.class);
		
		List<Menu> allParentMenu = dao.getAccountMenuItems(account, ROOT);
		items = new ArrayList<Menu>();
		for(Menu m : allParentMenu)
		{
			List<Menu> subMenus = dao.getAccountMenuItems(account, m.getId());
			if (subMenus.size() > 0)
			{
				/** 只取有子菜单的父菜单 */
				m.setSubMenus(subMenus);
				items.add(m);
			}
		}
	}

	public long getMenuId()
	{
		return menuId;
	}
	public void setMenuId(long id)
	{
		this.menuId = id;
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
