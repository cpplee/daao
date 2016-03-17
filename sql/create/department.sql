-- 机构层次
create table t_department_level
(
	id					bigserial,
	name				varchar(32)			not null,														-- 名字
	level				integer				not null,														-- 机构层数
	
	primary key (id)
);

-- 机构
create table t_department
(
	id 					bigserial,																			-- 部门id	
	name				varchar(32)			not null,														-- 部门名称
	description			text				not null default '',											-- 职能描述
	level_id			int8				references t_department_level(id) on update cascade,				-- 机构层次 
	parent_id			int8				references t_department(id) on delete cascade on update cascade,	-- 上层机构的id (根机构: parent_id is null)
	inside_code			text				not null default '',											-- 编码 (从根节点到当前节点的路径，按ID进行组装)
	place				integer				default	0,														-- 序列号

	unique(name, parent_id),         																		-- 同一机构下面不能重命名限制
	primary key (id)
);


create index index_department_code on t_department(inside_code);

-------------------------------------------------------------------------------------------------

-- 列出以指定根机构的所有下属机构(包含根机构) 本函数不要在Java代码中调用，请调用sub_departments
create or replace function sub_departments1(department_ids int8[]) returns setof t_department as $BODY$
declare
	r t_department;
	c text;
	i int;
begin
	for i in array_lower(department_ids, 1) .. array_upper(department_ids, 1) 
	loop
		select inside_code into c from t_department where id = department_ids[i];
		c := c || '%';
		for r in select * from t_department where inside_code like c order by place
		loop
			return next r;
		end loop;
	end loop;
end;
$BODY$ language 'plpgsql';

-- 列出以指定根机构的所有下属机构(包含根机构)  本函数不要在Java代码中调用，请调用sub_departments
create or replace function sub_departments2(department_ids int8[]) returns setof t_department as $BODY$
declare
	r t_department;
	stack int8[];
	sp int4 = 0;
	n int8;
	i int;
begin
	for i in array_lower(department_ids, 1) .. array_upper(department_ids, 1) 
	loop
		select * into r from t_department where id = department_ids[i];
		if not found then return; end if;
--		if r.parent_id = x then return; end if;
		
		return next r;
	
		stack[sp] := x;
		sp = sp + 1;
		
		while sp > 0 
		loop
			sp := sp - 1;
			n := stack[sp];
			for r in select * from t_department where parent_id = n 
			loop
				if r.parent_id = r.id then continue; end if;
				return next r;
				stack[sp] := r.id;
				sp := sp + 1;
			end loop;
		end loop;
	end loop;
end;
$BODY$ language 'plpgsql';

create or replace function sub_departments(department_ids int8[]) returns setof t_department as $BODY$
declare
	r t_department;
begin
	for r in select distinct * from sub_departments1(department_ids)
	loop
		return next r;
	end loop;
end;
$BODY$ language 'plpgsql';


-- 列出以指定机构的所有上级机构(不包含自己)
create or replace function parent_departments(department_id int8) returns setof t_department as $BODY$
declare
   r t_department;
   x int8;
begin 
	select * into r from t_department where id = department_id;
	if not found then return; end if;
	if r.id = r.parent_id then return; end if;	

	x = r.parent_id;
	while true loop
		select * into r from t_department where id = x;
		if not found then return; end if;
		return next r;
		if r.parent_id is null or r.parent_id = r.id then return; end if;
 		x = r.parent_id;
	end loop;
end
$BODY$ language 'plpgsql';


-- 从管理者的角度能看到的机构
create or replace function managing_departments(department_ids int8[]) returns setof t_department as $BODY$
declare
	r t_department;
begin
	for r in select distinct * from sub_departments1(department_ids) loop
		return next r;
	end loop;
end;
$BODY$ language 'plpgsql';

------------------------------------------------------------------------------------------------

-- 更新机构的code
create or replace function update_department_code(department_id integer, parent_code text) returns text as $BODY$
declare
	r t_department;
	c text;
begin
	c = parent_code || department_id || '-';
	update t_department set inside_code = c where id = department_id;
	for r in select * from t_department where parent_id = department_id and id <> parent_id loop
		perform update_department_code(r.id, c);
	end loop;

	return c;
end;
$BODY$ language 'plpgsql';

-- 更新所有机构的code
create or replace function update_all_departments_code() returns text as $BODY$
declare
	r t_department;
begin
	for r in select * from t_department where parent_id is null or parent_id = id loop
		perform update_department_code(r.id, '');
	end loop;

	return 'OK';
end;
$BODY$ language 'plpgsql';

-----------------------------------------------------------------
-- 更新code的触发器
create function update_departments() returns trigger as $body$
declare
	parent_code text;
	this_code text;
	r t_department;
begin

	if TG_OP = 'UPDATE' then
		if (OLD.parent_id = NEW.parent_id) is not false and OLD.inside_code = NEW.inside_code then return NEW; end if;

		-- TODO: 检查是否形成环
	end if;

	-- 查出父节点的code
	if NEW.parent_id is null then
		parent_code := '';
	else
		select inside_code into parent_code from t_department where id = NEW.parent_id;
	end if;

	-- 计算当前机构的code
	this_code = parent_code || NEW.id || 'x';
	update t_department set inside_code = this_code where id = NEW.id;
	
	if TG_OP = 'UPDATE' then
		-- 更新子机构的code (这里不需要使用递归, 因为会级联触发)
		for r in select * from t_department where parent_id = NEW.id
		loop
			update t_department set inside_code = 'xxxx' where id = r.id;
		end loop;
	end if;

	return NEW;

end
$body$ language plpgsql;

create trigger trigger_departments after insert or update on t_department for each row 
execute procedure update_departments();
