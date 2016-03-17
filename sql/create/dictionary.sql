-- 数据字典的用途原本是用来定义系统中各属性字段的值，比如“民族”、“血型”之类的可以增加的字段
-- 所以本预警系统的“基本预警规则”也是通过数据字典来完成，没有建另外的表

-- 数据字典类型
create table t_dictionary_type
(
	id					bigserial ,
	name				varchar(250)		not null,														-- 名
	parent_id			int8				references t_dictionary_type(id) on update cascade,				-- 父类型id
	description			text				not null default '',											-- 描述信息
	
	unique (name),
	
	primary key (id)
);


-- 数据字典
create table t_dictionary
(
	id					bigserial,
	type_id				int8				not null references t_dictionary_type(id) on update cascade ,		-- 类型
	name				varchar(250)		not null,														-- 名称
	description			varchar(250)		not null default '',											-- 描述
	place				integer				not null,														-- 同一类型下的显示顺序
	fixed				boolean				not null default false,											-- 是否允许修改名称

	unique (type_id, name),

	primary key (id)	
);

