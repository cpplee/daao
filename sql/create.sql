begin;

\encoding UTF-8

create schema tmp authorization daaouser;
grant all on schema tmp to public;
set search_path = tmp;

set session authorization daaouser;

create function get_generated_id(text) returns int8 as $BODY$
	select currval($1 || '_id_seq');
$BODY$ language sql;

\i create/department.sql
\i create/dictionary.sql
\i create/privilege.sql
\i create/menu.sql
\i create/hotel.sql
\i create/member.sql
\i create/com_account.sql


reset session authorization;

drop schema public cascade;
alter schema tmp rename to public;
set search_path = public;

commit;
