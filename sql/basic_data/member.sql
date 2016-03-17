copy t_account(id, login, password) from stdin;
18	chengdu	QL0AFWMIX8NRZTKeof9cXsvb
\.

copy t_account_role(account_id, department_id, role_id, enabled) from stdin;
18	2	4	true
\.

copy t_member(id, account_id,name) from stdin;
1	18	chengdu
\.
