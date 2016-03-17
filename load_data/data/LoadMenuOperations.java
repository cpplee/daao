package data;

import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.sql.Connection;

import org.postgresql.jdbc3.Jdbc3PoolingDataSource;

import zuojie.esql.Esql;
import zuojie.esql.EsqlPgsqlImpl;

import com.quiven.entity.Menu;

public class LoadMenuOperations
{
	private static final String FILE_NAME = "menu_operations.txt";

	private Esql esql;

	private LoadMenuOperations(Esql esql)
	{
		this.esql = esql;
	}

	public static void main(String[] args) throws Exception
	{
		if (args.length != 1)
		{
			System.err.println("LoadMenuOperations without args!");
			return;
		}

		Jdbc3PoolingDataSource ds = new Jdbc3PoolingDataSource();
		ds.setServerName("localhost");
		ds.setDatabaseName("tcc");
		ds.setUser("tccuser");
		ds.setPassword("123");

		// 根据数据库类型和数据源创建esql对象
		Esql esql = new EsqlPgsqlImpl();
		esql.setDataSource(ds);
		
		//Esql esql = Esql.create("PostgreSQL", ds);

		try
		{
			esql.begin(Connection.TRANSACTION_READ_COMMITTED);

			LoadMenuOperations loader = new LoadMenuOperations(esql);
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
				if (columns.length != 2) throw new Exception("列数不正确");

				System.out.printf("导入: %s %s\n", columns[0], columns[1]);

				Menu menu = getMenu(columns[0]);
				if (menu == null) throw new Exception("菜单不存在: " + columns[0]);

				addMenuOperation(menu.getId(), columns[1]);
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

	private void addMenuOperation(Long menuId, String operation) throws Exception
	{
		String sql = "insert into menu_operations (menu_id, operation) values (?, ?)";
		esql.update(sql, menuId, operation);
	}
	
	private Menu getMenu(String name) throws Exception
	{
		String sql = "select * from menus where name = ?";
		return esql.query(Menu.class, sql, name);
	}
}
