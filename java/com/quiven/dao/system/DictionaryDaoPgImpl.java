package com.quiven.dao.system;

import java.util.ArrayList;
import java.util.List;

import com.quiven.UserException;
import com.quiven.configure.SystemConstants;
import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.Dictionary;
import com.quiven.entity.DictionaryType;

public class DictionaryDaoPgImpl extends BaseDao implements DictionaryDao, PostgreSQL
{
	public long getDictionaryCount() throws Exception
	{
		String sql = "select count(*)::integer from t_dictionary";
		return esql.query(Long.class, sql);
	}

	public List<Dictionary> listDictionarys(int offset, int limit) throws Exception
	{
		String sql = "select * from t_dictionary order by type_id, id offset ? limit ?";
		return esql.list(Dictionary.class, sql, offset, limit);
	}

	public void deleteDictionary(long id) throws Exception
	{
		if (id >= SystemConstants.BASIC_SEGMENT_NO * SystemConstants.SEGMENT_LENGTH)
			throw new UserException(SystemConstants.ERROR_MESSAGE);
		String sql = "delete from t_dictionary where id = ?";
		try
		{
			esql.update(sql, id);
		}
		catch (org.postgresql.util.PSQLException sqle)
		{
			throw new UserException("尚在使用中的数据项不能删除!!!");
		}
	}

	public Dictionary getDictionaryById(long id) throws Exception
	{
		String sql = "select * from t_dictionary where id = ?";
		return esql.query(Dictionary.class, sql, id);
	}

	public Dictionary getDictionaryById(Dictionary id) throws Exception
	{
		String sql = "select * from t_dictionary where id = ?";
		return esql.query(Dictionary.class, sql, id.getId());
	}
	public PagedList<Dictionary> listDictionaryByType(long type, int offset, int limit) throws Exception
	{

		String sql;
		PagedList<Dictionary> blst = new PagedList<Dictionary>();

		if (type >= 1)
		{
			sql = "select * from t_dictionary " + " where type_id = ? " + " order by place, id offset ? limit ?";
			blst.setData(esql.list(Dictionary.class, sql, type, offset, limit));

			sql = " select count(*) from t_dictionary " + " where type_id = ? ";
			blst.setTotal(esql.query(Integer.class, sql, type));
		}
		else
		{
			sql = "select * from t_dictionary " + " order by type_id, place, id offset ? limit ?";
			blst.setData(esql.list(Dictionary.class, sql, offset, limit));

			sql = " select count(*) from t_dictionary ";
			blst.setTotal(esql.query(Integer.class, sql));
		}

		return blst;
	}

	public List<DictionaryType> listDictionaryType() throws Exception
	{
		String sql = "select * from t_dictionary_type ";
		return esql.list(DictionaryType.class, sql);
	}

	public PagedList<DictionaryType> listDictionaryTypePages(int offset, int limit) throws Exception
	{
		PagedList<DictionaryType> blst = new PagedList<DictionaryType>();
		String sql = "select * from t_dictionary_type offset ? limit ?";
		blst.setData(esql.list(DictionaryType.class, sql, offset, limit));
		sql = "select count(*) from t_dictionary_type ";
		blst.setTotal(esql.query(Integer.class, sql));
		return blst;
	}

	public long addDictionary(Dictionary t_dictionary) throws Exception
	{
		String sql = "insert into t_dictionary " + " (name, type_id, place)  " + " values(?, ?, ?)";
		esql.update(sql, t_dictionary.getName(), t_dictionary.getTypeId(), t_dictionary.getPlace());
		return getGeneratedId("t_dictionary");
	}

	public void updateDictionary(Dictionary t_dictionary) throws Exception
	{
		String sql = "update t_dictionary set name = ?, type_id =?, place =? where id = ?";
		
		if(t_dictionary.getPlace()<1) t_dictionary.setPlace(1);
		
		Dictionary tmpDictionary = this.getDictionaryById(t_dictionary.getId());
		if(tmpDictionary.getPlace() != t_dictionary.getPlace()){
			int newPlace = t_dictionary.getPlace();
			int oldPlace = tmpDictionary.getPlace() ;
			int step = 0 ;
			List<Dictionary> list = null ;
			//新位置在旧位置前时，新位置到旧位置的所有数据的位置+1
			if(newPlace < oldPlace)
			{
				list = esql.list(Dictionary.class, "select * from t_dictionary where type_id = ? and place >= ? and place < ? ", t_dictionary.getTypeId(),
						newPlace, oldPlace);
				step = 1 ;
			}
			else //新位置在旧位置后时，旧位置到新位置的所有数据的位置-1
			{
				int maxPlace = esql.query(Integer.class, "select MAX(place) from t_dictionary where type_id = ? " ,t_dictionary.getTypeId()).intValue();
				if(newPlace > maxPlace)	t_dictionary.setPlace(maxPlace)  ;
				list = esql.list(Dictionary.class, "select * from t_dictionary where type_id = ? and place > ? and place <= ? ", t_dictionary.getTypeId(),
						oldPlace, newPlace);
				step = -1 ;
			}
			for(Dictionary d : list)
			{
				d.setPlace(d.getPlace() + step);
				esql.helper().update(d, "t_dictionary", "place", null, "id=?", d.getId());
			}
		}
		esql.update(sql, t_dictionary.getName(), t_dictionary.getTypeId(), t_dictionary.getPlace(), t_dictionary.getId());
		
	}

	public void addDictionaryType(DictionaryType type) throws Exception
	{
		Long parent_id = type.getParentId();

		if (type.getParentId() < 1 || parent_id == null)
		{
			esql.update("insert into t_dictionary_type (name, description) values(?, ?);", type.getName(), type.getDescription());
		}
		else
		{
			String sql = "insert into t_dictionary_type " + " (name, parent_id, description)  " + " values(?, ?, ?)";
			esql.update(sql, type.getName(), type.getParentId(), type.getDescription());
		}
	}

	public void deleteDictionaryType(long id) throws Exception
	{
		if (id >= SystemConstants.BASIC_SEGMENT_NO * SystemConstants.SEGMENT_LENGTH)
			throw new UserException(SystemConstants.ERROR_MESSAGE);
		String sql = "delete from t_dictionary_type where id = ?";
		esql.update(sql, id);
	}

	public void updateDictionaryType(DictionaryType type) throws Exception
	{
		if (type.getId() >= SystemConstants.BASIC_SEGMENT_NO * SystemConstants.SEGMENT_LENGTH)
			throw new UserException(SystemConstants.ERROR_MESSAGE);
		String sql = " update t_dictionary_type " + " set name = ?, parent_id =?, description =? " + " where id = ?";
		if (type.getParentId() < 0)
		{
			type.setParentId(type.getId());
		}
		esql.update(sql, type.getName(), type.getParentId(), type.getDescription(), type.getId());
	}

	public PagedList<DictionaryType> listDictionaryTypeByType(long type, int offset, int limit) throws Exception
	{
		String sql;
		PagedList<DictionaryType> blst = new PagedList<DictionaryType>();
		if (type >= 1)
		{
			sql = "select * from t_dictionary_type " + " where parent_id = ? " + " order by id offset ? limit ?";
			blst.setData(esql.list(DictionaryType.class, sql, type, offset, limit));

			sql = " select count(*) from t_dictionary_type " + " where parent_id = ? ";
			blst.setTotal(esql.query(Integer.class, sql, type));
		}
		else
		{
			sql = "select * from t_dictionary_type " + " order by id offset ? limit ?";
			blst.setData(esql.list(DictionaryType.class, sql, offset, limit));

			sql = " select count(*) from t_dictionary_type ";
			blst.setTotal(esql.query(Integer.class, sql));
		}
		return blst;
	}

	public Dictionary getDictionaryByNameAndType(String name, long typeId) throws Exception
	{
		String sql = "select * from t_dictionary where name = ? and type_id = ?";
		return esql.query(Dictionary.class, sql, name, typeId);
	}
	
	public Dictionary getDictionaryByName(String name) throws Exception
	{
		String sql = "select * from t_dictionary where name = ? ";
		return esql.query(Dictionary.class, sql, name);
	}

	public DictionaryType getDictionaryTypeByName(String name) throws Exception
	{
		String sql = "select * from t_dictionary_type where name = ? order by id";
		return esql.query(DictionaryType.class, sql, name);
	}

	public DictionaryType getDictionaryTypeById(long id) throws Exception
	{
		String sql = "select * from t_dictionary_type where id = ?";
		return esql.query(DictionaryType.class, sql, id);
	}

	public List<String> listDictionaryNameByCourse(long id) throws Exception
	{
		String sql = "select name from t_dictionary where id in ( select exam_type_id from course_exam_type where id =?)";
		return esql.list(String.class, sql, id);
	}

	public PagedList<Dictionary> searchDictionary(String name, String type, int offset, int limit, List<Dictionary> notAllowed,
			boolean keyAnd) throws Exception
	{
		String select = "select * ";
		String from = "from t_dictionary ";
		String where = " where type_id in (select id from t_dictionary_type where name = '" + type + "') ";
		String order = " order by id ";
		List<Object> parameters = new ArrayList<Object>();

		if (name != null && name.length() > 0)
		{
			String _name[] = name.split(" |\n|\r\n|\t");
			boolean exist = false;
			for (int i = 0; i < _name.length; i++)
			{
				if (_name[i].trim().length() > 0)
				{
					if (keyAnd) // 用与的方式查找多关键字
					{
						where += " and name like ?";
						parameters.add("%%" + _name[i] + "%%");
					}
					else
					// 用or的方式查找多关键字
					{
						if (!exist)
						{
							exist = true;
							where += " and ( name like ?";
						}
						else
							where += " or name like ?";
						parameters.add("%%" + _name[i] + "%%");
					}
				}
			}
			if (exist) if (!keyAnd) where += ")";
		}

		if (notAllowed != null && notAllowed.size() > 0)
		{
			String txtNotAllowed = "";
			for (Dictionary d : notAllowed)
			{
				txtNotAllowed += "," + d.getId();
			}
			txtNotAllowed = txtNotAllowed.substring(1);
			where += " and id not in(" + txtNotAllowed + ")";
		}

		String sql = "select count(*) " + from + where;
		Integer c = esql.query(Integer.class, sql, parameters.toArray());

		sql = select + from + where + order + " offset ? limit ?";
		parameters.add(offset);
		parameters.add(limit);

		List<Dictionary> dictionarys = esql.list(Dictionary.class, sql, parameters.toArray());

		PagedList<Dictionary> list = new PagedList<Dictionary>();
		list.setTotal(c);
		list.setData(dictionarys);

		return list;
	}

	public List<Dictionary> getAllDictionary() throws Exception
	{
		String sql = "select * from t_dictionary";
		return esql.list(Dictionary.class, sql);
	}

	public List<Dictionary> listDictionaryByTypeId(long typeId) throws Exception
	{
		String sql = "select * from t_dictionary where type_id = ? order by place asc";
		return esql.list(Dictionary.class, sql, typeId);
	}

	@Override
	public List<Dictionary> listDictionaryByTypeName(String typeName) throws Exception
	{
		String sql = "select d.* from t_dictionary d, t_dictionary_type dt where d.type_id = dt.id and dt.name = ? order by d.id";
		return esql.list(Dictionary.class, sql, typeName);
	}

}
