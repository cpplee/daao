package com.quiven.operation.系统.菜单;

import com.quiven.dao.DaoManager;
import com.quiven.dao.system.MenuDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 删除菜单 extends AbstractOperation implements Operation
{

	private long id;

	public void execute() throws Exception
	{
		MenuDao dao = DaoManager.getInstance().getDao(MenuDao.class);
		dao.deleteMenu(id);
	}

	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

}
