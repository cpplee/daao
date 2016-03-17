-- 初始用户密码为：123
copy t_user(id,account_id, name) from stdin;
1	1	系统管理员
\.

copy t_account(id, login, password) from stdin;
1	admin	QL0AFWMIX8NRZTKeof9cXsvb
\.



copy t_account_role(account_id, department_id, role_id, enabled) from stdin;
1	1	1	true
\.
