package data;

import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.sql.Connection;

import org.postgresql.jdbc3.Jdbc3PoolingDataSource;

import zuojie.esql.Esql;
import zuojie.esql.EsqlPgsqlImpl;

import com.quiven.entity.Menu;

public class LoadMenus
{
	private static final String FILE_NAME = "menus.txt";

	private Esql esql;

	private LoadMenus(Esql esql)
	{
		this.esql = esql;
	}

	public static void main(String[] args) throws Exception
	{
		if (args.length != 1)
		{
			System.err.println("usage: java LoadMenus <company>");
			return;
		}

		Jdbc3PoolingDataSource ds = new Jdbc3PoolingDataSource();
		ds.setServerName("localhost");
		ds.setDatabaseName("daao");
		ds.setUser("daaouser");
		ds.setPassword("123");

		// 根据数据库类型和数据源创建esql对象
		Esql esql = new EsqlPgsqlImpl();
		esql.setDataSource(ds);
		
		//Esql esql = Esql.create("PostgreSQL", ds);

		try
		{
			esql.begin(Connection.TRANSACTION_READ_COMMITTED);

			LoadMenus loader = new LoadMenus(esql);
			loader.load("sql/" + args[0] + "/" + FILE_NAME);

			esql.commit();
		}
		finally
		{
			esql.end();
		}
	}

	private void load(String filename) throws Exception
	{
		LineNumberReader reader = null;
		try
		{
			reader = new LineNumberReader(new InputStreamReader(new FileInputStream(filename), "UTF-8"));
			for (;;)
			{
				String line = reader.readLine();
				if (line == null) break;

				line = line.trim();
				if (line.equals("")) continue;
				if (line.startsWith("#")) continue;

				String[] columns = line.split("[ \t]+");
				if (columns.length != 4) throw new Exception("列数不正确");

				System.out.printf("Import: %s %s\n", columns[0], columns[1]);

				Menu parent = getMenu(columns[0]);
				if (parent == null) throw new Exception("父菜单不存在: " + columns[0]);

				addMenu(parent.getId(), columns[1], columns[2], columns[3]);
			}
		}
		catch (Exception e)
		{
			int n = reader.getLineNumber();
			throw new Exception("LINE: " + n + ": " + e, e);
		}
		finally
		{
			if (reader != null) try
			{
				reader.close();
			}
			catch (Exception e)
			{
			}
		}

	}

	private void addMenu(Long parentId, String name, String operation, String url) throws Exception
	{
		String sql = "select max(place) from t_menu where parent_id = ?";
		Integer place = esql.query(Integer.class, sql, parentId);
		if (place == null) place = 0;

		sql = "insert into t_menu (parent_id, place, name, operation, url) values (?, ?, ?, ?, ?)";
		esql.update(sql, parentId, place + 1, name, operation, url);
	}

	private Menu getMenu(String name) throws Exception
	{
		String sql = "select * from t_menu where name = ?";
		return esql.query(Menu.class, sql, name);
	}
}
