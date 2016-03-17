COPY t_department_level(id, name, "level") FROM stdin;
1	达奥平台	1
2	平台分部	2
3	分部细分	3
\.

COPY t_department(id, level_id, parent_id, inside_code, place, name, description) FROM stdin;
1	1	\N	1x	0	达奥平台	总平台
2	2	1	1x2x	0	客户分部	客户分部
3	2	1	1x3x	0	平台分部	平台分部
4	2	1	1x4x	0	酒店分部	酒店分部
5	3	4	1x4x5x	0	假日酒店	单体酒店
6	3	4	1x4x6x	0	成都七天酒店	连锁酒店
7	3	4	1x4x7x	0	武侯区酒店	区域酒店
\.
