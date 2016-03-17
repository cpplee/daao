package com.quiven.operation.系统.菜单;

import com.quiven.dao.DaoManager;
import com.quiven.dao.system.MenuDao;
import com.quiven.entity.Menu;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 更新菜单 extends AbstractOperation implements Operation
{
	private Menu data;

	public void execute() throws Exception
	{
		MenuDao dao = DaoManager.getInstance().getDao(MenuDao.class);
		dao.updateMenu(data);
	}
	
	public Menu getData()
	{
		return data;
	}

	public void setData(Menu data)
	{
		this.data = data;
	}
}
