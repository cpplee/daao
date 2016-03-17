package com.quiven.dao.system;

import java.util.List;

import com.quiven.dao.PagedList;
import com.quiven.entity.Dictionary;
import com.quiven.entity.DictionaryType;

public interface DictionaryDao
{
	public long getDictionaryCount() throws Exception;

	public List<Dictionary> listDictionarys(int offset, int limit) throws Exception;

	public List<String> listDictionaryNameByCourse(long id) throws Exception;

	public PagedList<Dictionary> listDictionaryByType(long type, int offset, int limit) throws Exception;

	public List<DictionaryType> listDictionaryType() throws Exception;

	public Dictionary getDictionaryById(long id) throws Exception;
	public Dictionary getDictionaryById(Dictionary id) throws Exception;
	
	/** 通过数据字典名字获和类型取数据字典*/
	public Dictionary getDictionaryByNameAndType(String name, long typeId) throws Exception;

	/** 通过数据字典名字获取数据字典*/
	public Dictionary getDictionaryByName(String name) throws Exception;

	/** 通过typename获取数据字典type*/
	public DictionaryType getDictionaryTypeByName(String name) throws Exception;
	
	/** 通过TypeId获取数据字典*/
	public List<Dictionary> listDictionaryByTypeId(long typeId) throws Exception;
	
	/** 根据TypeName获取数据字典*/
	public List<Dictionary> listDictionaryByTypeName(String typeName) throws Exception;

	public void updateDictionary(Dictionary dictionary) throws Exception;

	public long addDictionary(Dictionary dictionary) throws Exception;

	public void deleteDictionary(long id) throws Exception;

	public PagedList<DictionaryType> listDictionaryTypePages(int offset, int limit) throws Exception;

	public PagedList<DictionaryType> listDictionaryTypeByType(long type, int offset, int limit) throws Exception;

	public void updateDictionaryType(DictionaryType type) throws Exception;

	public void addDictionaryType(DictionaryType type) throws Exception;

	public void deleteDictionaryType(long id) throws Exception;

	public DictionaryType getDictionaryTypeById(long id) throws Exception;

	public PagedList<Dictionary> searchDictionary(String name, String type, int offset, int limit, List<Dictionary> notAllowed,
			boolean keyAnd) throws Exception;

	public List<Dictionary> getAllDictionary() throws Exception;
}
