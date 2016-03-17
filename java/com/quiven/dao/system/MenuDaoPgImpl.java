package com.quiven.dao.system;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.Menu;

public class MenuDaoPgImpl extends BaseDao implements PostgreSQL, MenuDao
{

	public void addMenu(Menu menu) throws Exception
	{
		String sql = "insert into t_ment " + " (parent_id, name, operation, url, place)  " + " values(?, ?, ?, ?, ?)";
		esql.update(sql, menu.getParentId(), menu.getName(), menu.getOperation(), menu.getUrl(), menu.getPlace());

	}

	public void deleteMenu(long id) throws Exception
	{
		String sql = "delete from t_ment where id = ?";
		esql.update(sql, id);

	}

	public PagedList<Menu> listMenuPages(int offset, int limit) throws Exception
	{
		PagedList<Menu> blst = new PagedList<Menu>();
		String sql = "select * from t_ment offset ? limit ?";
		blst.setData(esql.list(Menu.class, sql, offset, limit));
		sql = "select count(*) from t_ment ";
		blst.setTotal(esql.query(Integer.class, sql));
		return blst;
	}

	public void updateMenu(Menu menu) throws Exception
	{
		String sql = "update t_ment " + " parent_id = ?, name = ?, operation = ?, url = ?, place = ?) " + " where id = ?";
		esql.update(sql, menu.getParentId(), menu.getName(), menu.getOperation(), menu.getUrl(), menu.getPlace(), menu.getId());
	}

	public PagedList<Menu> listSubMenuPages(long parentId, int offset, int limit) throws Exception
	{
		PagedList<Menu> blst = new PagedList<Menu>();
		String sql = "select * from t_ment where parent_id = ? offset ? limit ?";
		blst.setData(esql.list(Menu.class, sql, parentId, offset, limit));
		sql = "select count(*) from t_ment where parent_id = ?";
		blst.setTotal(esql.query(Integer.class, sql));
		return blst;
	}

}
