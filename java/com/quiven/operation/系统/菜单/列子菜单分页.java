package com.quiven.operation.系统.菜单;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.system.MenuDao;
import com.quiven.entity.Menu;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 列子菜单分页 extends AbstractOperation implements Operation
{

	private long id;
	private List<Menu> data;
	private int total;
	private int offset;
	private int limit;

	public void execute() throws Exception
	{
		MenuDao dao = DaoManager.getInstance().getDao(MenuDao.class);
		PagedList<Menu> blst = dao.listSubMenuPages(id, offset, limit);

		total = blst.getTotal();
		data = blst.getData();

	}
	
	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public List<Menu> getData()
	{
		return data;
	}

	public void setData(List<Menu> data)
	{
		this.data = data;
	}

	public int getTotal()
	{
		return total;
	}

	public void setTotal(int total)
	{
		this.total = total;
	}

	public int getOffset()
	{
		return offset;
	}

	public void setOffset(int offset)
	{
		this.offset = offset;
	}

	public int getLimit()
	{
		return limit;
	}

	public void setLimit(int limit)
	{
		this.limit = limit;
	}
}
