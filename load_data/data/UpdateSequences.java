package data;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.postgresql.jdbc3.Jdbc3PoolingDataSource;

import zuojie.esql.Esql;
import zuojie.esql.EsqlPgsqlImpl;

public class UpdateSequences
{
	public static final long SEGMENT_LENGTH = 1000L * 10000 * 10000;
	public static final int BASIC_SEGMENT = 1000;

	private static Map<String, Integer> companies = new HashMap<String, Integer>();

	private Esql esql;
	private int segment;

	private UpdateSequences(Esql esql, String company) throws Exception
	{
		this.esql = esql;

		loadCompanies();

		Integer n = companies.get(company);
		if (n == null) throw new Exception("指定的公司不存在: " + company);

		this.segment = n;
	}

	private void loadCompanies() throws Exception
	{
		BufferedReader reader = null;
		try
		{
			reader = new BufferedReader(new FileReader("sql/companies.txt"));
			for (;;)
			{
				String line = reader.readLine();
				if (line == null) break;
				line = line.trim();
				if (line.equals("")) continue;

				String[] a = line.split("=");
				if (a.length != 2) throw new Exception("格式错误: sql/companies.txt");

				companies.put(a[0], new Integer(a[1]));
			}
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

	public static void main(String[] args) throws Exception
	{
		if (args.length != 1)
		{
			System.out.println("usage: java data.UpdateSequences " + companies.keySet());
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

			UpdateSequences loader = new UpdateSequences(esql, args[0]);
			loader.load();

			esql.commit();
		}
		finally
		{
			esql.end();
		}
	}

	private void load() throws Exception
	{
		String sql = "select relname from pg_class where relkind='S' and relnamespace=(select oid from pg_namespace where nspname='public')";
		List<String> sequences = esql.list(String.class, sql);

		for (String s : sequences)
		{
			if (!s.endsWith("_id_seq")) continue;

			System.out.println("更新: " + s);

			String table = s.substring(0, s.length() - "_id_seq".length());

			long firstId = SEGMENT_LENGTH * segment + 1;
			long lastId = SEGMENT_LENGTH * (segment + 1);

			sql = String.format("select max(id) from %s where id < ?", table);
			Long max = esql.query(Long.class, sql, BASIC_SEGMENT * SEGMENT_LENGTH);
			sql = String.format("select min(id) from %s where id < ?", table);
			Long min = esql.query(Long.class, sql, BASIC_SEGMENT * SEGMENT_LENGTH);

			if (max != null && (min < firstId || lastId < max)) System.err.println("WARNING: 序列越界: " + s);

			if (max == null) max = SEGMENT_LENGTH * segment;
			if (max <= 0L) max = 1L;

			sql = String.format("select setval('%s', ?)", s);
			esql.query(Long.class, sql, max);
		}
	}
}
