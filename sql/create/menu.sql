-- 动态配置系统中的菜单

-- 菜单
create table t_menu
(
	id				bigserial,
	parent_id		int8			references t_menu(id),  			-- 父菜单
	name			varchar(64)		not null,
	operation		varchar(255)	not null,						-- 菜单对应的虚操作名(用于控制菜单的显示)
	url				varchar(255)	not null default '',			-- 菜单打开的url
	group_name		varchar(255),									-- 父菜单名字
	place			integer			not null,						-- 同级菜单中的位置
	
	primary key(id)
);

--create table menu_operations
--(
	--menu_id			int8			references t_menu(id),			-- 菜单id
	--operation		varchar(255)	not null						-- 菜单对应的真操作名(1对多)
--);
