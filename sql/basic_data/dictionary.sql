COPY t_dictionary_type (id, name, parent_id, description) FROM stdin;
1	数据字典	1	
2	规则基本类型	1	八项预警基本规则
3	报警级别	1	报警的级别（黄、红、绿）
4	处理状态	1	预警信息处理的状态
5	报警方式	1	预警处理时采用的报警方式
\.

COPY t_dictionary (id, type_id, name, description, place, fixed) FROM stdin;
12	2	打斗抢劫		1	f
26	2	面部遮挡		2	f
4	2	禁区进入		3	f
30	2	声音异常		4	f
24	2	室内滞留		5	f
6	2	室外徘徊		6	f
9	2	异常奔跑		7	f
3	2	单向越界		8	f
31	3	红色		1	f
32	3	黄色		2	f
33	3	绿色		3	f
41	4	未处理		1	f
42	4	已处理		2	f
51	5	已关注		1	f
52	5	短信		2	f
53	5	IP对讲		3	f
54	5	人工处理		4	f
\.
