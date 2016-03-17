COPY t_market (id, segment, code, description) FROM stdin;
1	KNR	010	铁路
2	LNR	020	航空
3	WHOLESALER	030	批发
4	MICE	040	散客
5	TOUR&LEISURE	050	旅游
\.

copy t_account(id, login, password) from stdin;
15	chujixiaoshou1	QL0AFWMIX8NRZTKeof9cXsvb
16	zhongjixiaoshou1	QL0AFWMIX8NRZTKeof9cXsvb
17	gaojixiaoshou1	QL0AFWMIX8NRZTKeof9cXsvb
\.

copy t_account_role(account_id, department_id, role_id, enabled) from stdin;
15	6	8	true
16	6	9	true
17	6	10	true
\.

COPY t_saler (id, account_id, name, level, leader_id, hotel_id, market_id,birth,email,office_phone,mobile_phone,start_time,sex,fax,position,saler_code) FROM stdin;
1	17	销售人1	1	\N	2	1	19990909	17729@qq.com	89779898	1898989889	20090908	男	898989	高级销售	LANT001
2	16	销售人2	1	1	2	2	18990909	1749@qq.com	89779898	1898989889	20090908	男	2324124	中级销售	LANT002
3	15	销售人3	1	1	2	3	13990909	1629@qq.com	89779898	1898989889	20090908	女	2414412	低级销售	LANT003
\.

COPY t_com_account_type (id, comtype) FROM stdin;
1	核心客户
2	潜力客户
3	忠实客户
4	潜在客户
\.

COPY t_com_account(id, saler_id, cname, address_1, address_2, address_3, city, province, country, comtype_id, com_account_code, postal, market_segment_id,com_telphone,com_fax,com_email,com_wechat,web_address,com_frequency,keynotes,enable) FROM stdin;
1	1	Nokia	Guangcheng Plaza	26F	\N	Chengdu	SC	China	1	010001001	610015	1	85990226	87979876	09877@qq.com	uygyuhg	www.baidu.com	非常频繁	无	true
2	1	Philips	Chuanxin Plaza	28F	\N	Chengdu	SC	China	2	010001002	610021	1	85990225	876876678	9875488@qq.com	uihjbdwad	www.youku.com	非常频繁	无	true
3	1	SONY	Chuanxin Plaza	27F	\N	Chengdu	SC	China	2	010001003	610200	2	85990227	877687668	0865445@qq.com	mbfrewdwd	www.qq.com	非常频繁	无	true
\.

COPY t_com_account_contacts(id, com_account_id, saler_id, com_contact_name, com_contact_position,com_contact_tel,com_contact_mobile,com_contact_fax,com_contact_skype,com_contact_webchat,com_contact_qq,dob,spouse,com_contact_email)FROM stdin;
1	1	1	Ms.Cao	Chun	6786876	13899992222	1234567	wdad	dwadaw	1234567	2012-09-02	小女士	146539@qq.com
2	1	1	Mr.Toshiya	Wasb	6786876	13899992222	23213231	wdwd	dwadaw	1234567	2012-09-02	魏女士	16579@qq.com
3	2	1	Mr.oiohoya	pasd	6786876	13899992222	23213231	wadd	dwadaw	1234567	2015-08-02	网女士	12349@qq.com
4	2	1	Mr.Posdiya	Oaqw	6786876	13899992222	23213231	wadd	dwadaw	1234567	2013-04-02	写女士	16879@qq.com
5	3	1	Mr.oiohoya	pasd	6786876	13899992222	23213231	wdwd	dwadaw	1234567	2012-06-02	找女士	10889@qq.com
6	3	1	Mr.Posdiya	Oaqw	6786876	13899992222	23213231	wdad	dwadaw	1234567	2015-04-02	宋女士	19089@qq.com
\.


COPY t_com_account_activity_plan (id, saler_id, com_account_id, activity_date, activity_time, activity_description,activity_address,cost,outcome,activity_person,retonin) FROM stdin;
1	1	1	2013-09-09	'2000-10-10 8:40'	吃饭,在东风酒店	成都大酒店	200	300	王先生	0.5
2	1	2	2013-09-10	'2000-10-10 19:40'	喝酒,在酒吧	皇冠大酒店	200	300	赵女士	0.5
3	1	1	2013-09-10	'2000-10-10 20:40'	喝酒,在酒吧	皇冠大酒店	200	300	钱先生	0.5
4	1	2	2013-09-11	'2000-10-10 23:40'	约会,在情谊酒吧	五星级大酒店	500	800	李先生	0.5
5	1	3	2013-08-11	'2000-10-10 23:40'	约会,在情谊酒吧	五星级大酒店	500	800	李先生	0.5
6	1	3	2013-07-12	'2000-10-10 23:40'	约会,在情谊酒吧	五星级大酒店	500	800	李先生	0.5
\.

COPY t_com_account_activity_log (id, saler_id, com_account_id, actlog_person, actlog_date, actlog_time,activity_detail,remarks,reviews) FROM stdin;
1	1	1	王新生	2013-09-09	'2000-10-10 8:40'	吃饭,在东风酒店,成都大酒店	花费很多	已阅
2	1	2	找新生	2013-09-09	'2000-10-10 8:40'	吃饭,在东风酒店,成都大酒店	花费很多	已阅
3	2	1	王西安	2013-09-09	'2000-10-10 8:40'	吃饭,在东风酒店,成都大酒店	花费很多	已阅
4	2	2	苏新生	2013-09-09	'2000-10-10 8:40'	吃饭,在东风酒店,成都大酒店	花费很多	已阅
5	3	1	哒新生	2013-09-09	'2000-10-10 8:40'	吃饭,在东风酒店,成都大酒店	花费很多	已阅
\.

COPY t_com_account_booking_room (id, room_booking_num,saler_id, hotel_id,room_id,com_account_id,room_num,room_contact_name, room_arrive,room_depart,room_status,room_avg_rate,room_confirmation,room_cutoff,room_comps,room_res_id,room_book_type,room_type,room_house_mthd,room_comm, market_seg,enable ) FROM stdin;
1	100	1	1	2	1	100	韦东鑫	2015-09-23 19:10	2015-10-23 19:40	P	1000	false	3	1	2	网络预订	标间	2	200	中国	true
2	101	1	2	3	1	100	送波动	2015-09-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
3	102	1	3	2	2	100	为程总	2015-08-23 1:10	2015-10-23 19:40	P	1000	false	3	1	2	网络预订	标间	2	200	中国	true
4	213	1	4	3	2	100	程佳欣	2015-08-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
5	123	2	1	3	3	50	招新让	2015-07-13 12:12	2015-10-20 10:40	P	300	true	3	1	2	网络预订	标间	2	200	中国	true
6	124	1	1	3	3	50	赵兴然	2015-07-13 12:12	2015-10-20 10:40	P	300	true	3	1	2	网络预订	标间	2	200	中国	true
7	101	1	2	3	1	100	送波动	2015-06-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
8	101	1	2	3	1	100	送波动	2015-06-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
9	101	1	2	3	1	100	送波动	2015-05-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
10	101	1	2	3	1	100	送波动	2015-05-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
11	101	1	2	3	1	100	送波动	2015-04-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
12	101	1	2	3	1	100	送波动	2015-04-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
13	101	1	2	3	1	100	送波动	2015-03-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
14	101	1	2	3	1	100	送波动	2015-03-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
15	101	1	2	3	1	100	送波动	2015-02-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
16	101	1	2	3	1	100	送波动	2015-02-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
17	101	1	2	3	1	100	送波动	2015-02-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
18	101	1	2	3	1	100	送波动	2015-02-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
19	101	1	2	3	1	100	送波动	2015-02-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
20	101	1	2	3	1	100	送波动	2015-02-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
21	101	1	2	3	1	100	送波动	2015-04-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
22	101	1	2	3	2	100	送波动	2015-04-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
23	101	1	2	3	2	100	送波动	2015-04-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
24	101	1	2	3	2	100	送波动	2015-04-23 9:10	2015-10-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
25	101	1	2	3	1	100	送波动	2015-11-23 9:10	2015-12-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
26	101	1	2	3	1	100	送波动	2015-12-23 9:10	2015-12-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
27	101	1	2	3	1	100	送波动	2015-10-23 9:10	2015-12-23 19:40	P	1000	true	3	1	2	网络预订	标间	2	200	中国	true
\.

COPY t_com_account_booking_banquet (id,banquet_booking_num, saler_id, hotel_id,banquet_id,com_account_id,banquet_contact_name, banquet_arrive,banquet_depart,banquet_status,banquet_rate,banquet_confirmation,banquet_cutoff,enable,banquet_book_type,banquet_res_id ) FROM stdin;
1	100	1	1	2	1	韦东鑫	2015-09-23 19:10	2015-10-23 19:40	P	1000	false	3	true	网络预订	3
2	200	1	2	3	1	卫东	2015-09-23 9:10	2015-10-23 19:40	P	1000	false	3	true	网络预订	2
3	201	1	3	2	2	牛韦	2015-08-23 1:10	2015-10-23 19:40	P	1000	true	3	true	网络预订	1
4	300	1	4	3	2	王家怒	2015-08-23 9:10	2015-10-23 19:40	P	1000	true	3	true	网络预订	3
5	209	2	1	3	1	写雄鹰	2015-07-13 12:12	2015-10-20 10:40	P	300	true	3	true	网络预订	3
6	100	1	1	2	1	韦东鑫	2015-07-23 19:10	2015-10-23 19:40	P	1000	false	3	true	网络预订	3
7	200	1	2	3	1	卫东	2015-06-23 9:10	2015-10-23 19:40	P	1000	false	3	true	网络预订	2
8	201	1	3	2	2	牛韦	2015-06-23 1:10	2015-10-23 19:40	P	1000	true	3	true	网络预订	1
9	300	1	4	3	2	王家怒	2015-05-23 9:10	2015-10-23 19:40	P	1000	true	3	true	网络预订	3
10	209	2	1	3	1	写雄鹰	2015-05-13 12:12	2015-10-20 10:40	P	300	true	3	true	网络预订	3
11	100	1	1	2	1	韦东鑫	2015-04-23 19:10	2015-10-23 19:40	P	1000	false	3	true	网络预订	3
12	200	1	2	3	1	卫东	2015-04-23 9:10	2015-10-23 19:40	P	1000	false	3	true	网络预订	2
13	201	1	3	2	2	牛韦	2015-03-23 1:10	2015-10-23 19:40	P	1000	true	3	true	网络预订	1
14	300	1	4	3	2	王家怒	2015-03-23 9:10	2015-10-23 19:40	P	1000	true	3	true	网络预订	3
15	209	2	1	3	1	写雄鹰	2015-02-13 12:12	2015-10-20 10:40	P	300	true	3	true	网络预订	3
16	100	1	1	2	1	韦东鑫	2015-02-23 19:10	2015-10-23 19:40	P	1000	false	3	true	网络预订	3
17	200	1	2	3	1	卫东	2015-01-23 9:10	2015-10-23 19:40	P	1000	false	3	true	网络预订	2
18	201	1	3	2	2	牛韦	2015-01-23 1:10	2015-10-23 19:40	P	1000	true	3	true	网络预订	1
19	300	1	4	3	2	王家怒	2015-10-23 9:10	2015-10-23 19:40	P	1000	true	3	true	网络预订	3
20	209	2	1	3	1	写雄鹰	2015-10-13 12:12	2015-10-20 10:40	P	300	true	3	true	网络预订	3
21	100	1	1	2	1	韦东鑫	2015-11-23 19:10	2015-11-23 19:40	P	1000	false	3	true	网络预订	3
22	200	1	2	3	1	卫东	2015-11-23 9:10	2015-11-23 19:40	P	1000	false	3	true	网络预订	2
23	201	1	3	2	2	牛韦	2015-12-23 1:10	2015-12-23 19:40	P	1000	true	3	true	网络预订	1
24	300	1	4	3	2	王家怒	2015-12-23 9:10	2015-12-23 19:40	P	1000	true	3	true	网络预订	3
25	209	2	1	3	1	写雄鹰	2015-12-13 12:12	2015-12-20 10:40	P	300	true	3	true	网络预订	3
\.

COPY t_com_account_activity_description (id, com_account_type,com_account_description) FROM stdin;
1	核心客户	尝试交叉销售机会
2	忠实客户	把主要用户签为会员
3	潜力客户	年度答谢会
\.




