package data;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.util.LinkedList;
import java.util.List;

import org.postgresql.jdbc3.Jdbc3PoolingDataSource;

import zuojie.esql.Esql;
import zuojie.esql.EsqlPgsqlImpl;

public class SetSequenceToBasic
{
	private static final long SEGMENT_LENGTH = 1000L * 10000 * 10000;
	private static final long BASIC_SEGMENT_NO = 1000L;

	private Esql esql;
	private List<String> tables;
	private long segNumber;

	private SetSequenceToBasic(Esql esql, String file, int seg) throws Exception
	{
		this.esql = esql;
		segNumber = seg;
		BufferedReader in = new BufferedReader(new FileReader(file));
		tables = new LinkedList<String>();
		String name = in.readLine();
		while (name != null)
		{
			if (!name.startsWith("--")) tables.add(name);
			name = in.readLine();
		}
	}

	public static void main(String[] args) throws Exception
	{
		if (args.length != 2)
		{
			System.out.println("usage: SetSequenceToBasic configfile segments_number");
			System.out.println("configfile : configrue file , contains table name.");
			System.out.println("segments_number : the segment number of current data, used for serial fixing.\n");
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
//			String[] ag = new String[2];
//			ag[0] = "basic.txt";
//			ag[1] = "0";
			SetSequenceToBasic loader = new SetSequenceToBasic(esql, args[0], Integer.parseInt(args[1]));
			loader.updateId();
			loader.fixSequence();

			esql.commit();
		}
		catch (Exception ex)
		{
			System.out.println("更新失败， 操作全部撤销。");
			throw ex;
		}
		finally
		{
			esql.end();
		}
	}

	private void fixSequence() throws Exception
	{

		long down = segNumber * SEGMENT_LENGTH + 1;
		long baseSeg = BASIC_SEGMENT_NO * SEGMENT_LENGTH;
		for (String tableName : this.tables)
		{
			String seqName = tableName + "_id_seq";
			System.out.println("修复序列: " + tableName);
			String sql = "select max(id) from " + tableName + " where id < ?";
			Long nextSqun = esql.query(Long.class, sql, baseSeg);
			sql = "select setval('" + seqName + "', ?)";
			if (nextSqun == null)
			{
				nextSqun = down;
			}
			else
			{
				nextSqun = nextSqun + down;
			}
			esql.query(Long.class, sql, nextSqun);
		}
	}

	private void updateId() throws Exception
	{
		long base = SEGMENT_LENGTH * BASIC_SEGMENT_NO + 1;
		for (String tableName : this.tables)
		{
			System.out.println("更新: " + tableName);
			String sql = "update " + tableName + " set id = id + ? where id < ?";
			esql.update(sql, base, base);
		}
	}
}
