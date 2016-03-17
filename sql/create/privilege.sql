-- 系统所有用户权限管理表，具体逻辑查看系统权限控制java代码来理解

-- 人员
create table t_user
(
	id						bigserial,
	account_id				int8				not null references t_department(id) on update cascade on delete cascade,
	name					varchar(100)		not null,												-- 姓名
	create_date				date				default now(),											-- 用户创建时间
	enable					boolean				not null default true,									-- 表示是否删除

	primary key (id)
);

--用户照片
create table t_user_photo
(
	user_id					int8				not null references t_user(id) on update cascade on delete cascade,
	photo					bytea,
	
	primary key (user_id)
);

-- 角色
create table t_role
(
	id				bigserial,
	name			varchar(100)		not null,								-- 名字  也被用于获取权限检查器
	description		varchar(255)		not null default '',					-- 描述
	
	unique(name),
	primary key (id)
);

-- 帐户
create table t_account
(
	id				bigserial,
	login			varchar(100)		not null,							-- 登录名,只能由字母、数字和下划线组成
	phone			varchar(100)		,									-- 登录名,只能由字母、数字和下划线组成
	email			varchar(100)		,									-- 登录名,只能由字母、数字和下划线组成
	password		varchar(1024)		not null,							-- 密码
	login_count		integer				not null default 0,					-- 登录次数
	
	unique(login),
	unique(phone),
	unique(email),

	primary key (id)
);
--账户登录日志
create table t_account_login_log
(
	id				bigserial,
	account_id		int8				not null references t_account(id) on delete cascade,		-- 帐号
	login_time		timestamp			not null default now(),										-- 上次登录时间
	login_ip		varchar(50)			not null default '127.0.0.1',								-- 上次登录ip

	primary key(id)
);

-- 帐户-机构-角色
create table t_account_role
(
	account_id		int8				not null references t_account(id) on delete cascade,		-- 帐号
	department_id	int8				not null references t_department(id) on update cascade,		-- 机构
	role_id			int8				not null references t_role(id) on delete cascade,			-- 角色
	enabled			boolean				not null default true,										-- 是否有效
	
	primary key (account_id, department_id, role_id)
);

-- 机构-角色（为用户操作方便而设此表）
create table t_department_role
(
	department_id	int8				not null references t_department(id) on update cascade,		-- 机构
	role_id			int8				not null references t_role(id) on update cascade,			-- 角色
	
	primary key (department_id, role_id)
);

-- 角色的权限
create table t_privilege
(
	role_id			int8				not null references t_role(id) on delete cascade,			-- 角色
	operation_name	varchar(250)		not null,													-- 操作
	
	primary key (role_id, operation_name)
);

-- 机构层次角色：用于控制机构分级管理
create table t_department_level_role
(
	department_level_id		int8			not null references t_department_level(id),				-- 机构分层id
	role_id					int8			not null references t_role(id),							-- 角色id
	
	primary key(department_level_id, role_id)
);
