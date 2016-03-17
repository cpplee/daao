--公司用户信息表
create table t_market
(
	id					bigserial,															--市场ID
	segment				varchar(250)		not null,										--市场段
	code				varchar(250)		not null,										--市场编码
	description			varchar(250),														--市场描述
	unique(segment),
	primary key (id)
);

create table t_saler
(
	id					bigserial,																							--销售人员ID
	account_id			int8				not null references t_account(id) on update cascade on delete cascade,			--登陆账号ID
	name				varchar(250)		not null,																		--销售人员姓名
	level				varchar(250)        not null,																		--销售人员等级
	leader_id			int8				references t_saler(id)	on update cascade,										--销售领导者的ID
	hotel_id			int8				not null references t_hotel(id) on update cascade,								--酒店id
	market_id			int8				not null references t_market(id) on update cascade,								--市场id
    start_time			Date ,																								--开始工作时间
	email				varchar(250),																						--电子邮件
	office_phone		varchar(250),																						--办公室电话
	fax					varchar(250),																						--传真
	mobile_phone		varchar(250),																						--手机号
	sex					varchar(3),
	position			varchar(100),																						--销售人员职位
	saler_code			varchar(100),																						--销售人员代码
	birth				date,																						--手机号

	primary key (id)	
);

create table t_com_account_type
(
    id					bigserial,													--客户类型ID；
    comtype				varchar(250) 	not null unique,												--客户类型
	primary key(id)
);

-- 数据字典类型
create table t_com_account
(
	id						bigserial ,
	saler_id				int8				not null,
	cname					varchar(250)		not null,														--中文名
	address_1				varchar(250)		,																--填写公司所在的门牌号/楼层及所在的写字楼名称
	address_2				varchar(250)		,																--填写公司所在的街道名称
	address_3				varchar(250)		,																--公司所在城市的区/县
	city					varchar(250)		,																--城市
	province				varchar(250)		,																--省份
	country					varchar(250)		,																--国家
	comtype_id			    int8				not null references t_com_account_type(id) on update cascade on delete cascade,	--客户类型ID
	com_account_code		varchar(250)		not null,														--客户代码
	postal					varchar(250)		,																--邮编：
	market_segment_id		varchar(250)		,																--市场代码ID
    com_telphone			varchar(250)	    ,																--电话号码
    com_fax				    varchar(250)		,																--传真号
	com_email				varchar(250)		,																--邮箱
	com_wechat				varchar(250)		,																--微信
	web_address				varchar(250),																		--网址
	com_frequency			varchar(250),																		--拜访频率
	keynotes				varchar(250),																		--重要提示
	enable					boolean				not null default true,											--是否可见，避免永久删除数据
	
	primary key (id)
);

create table t_com_account_contacts
(
	id								bigserial ,																								--联系人ID
	com_account_id					int8				not null references t_com_account(id) on update cascade on delete cascade,			--公司ID号
	saler_id					int8 					not null		references t_saler(id)	on update cascade on delete cascade,				--销售者的ID号	
    com_contact_name 				varchar(250)		not null,																			--联系人姓名
	com_contact_position			varchar(250),																							--联系人职位
	com_contact_tel					varchar(250),																							--联系人电话
	com_contact_mobile				varchar(250),																							--联系人手机号
	com_contact_email				varchar(250),																							--联系人邮箱
	com_contact_fax					varchar(250),																							--联系人传真号
	com_contact_skype				varchar(250),																							--联系人网络电话
	com_contact_webchat				varchar(250),																							--联系人微信
	com_contact_qq					varchar(250),																							--联系人aa							
	dob								date,																									--联系人的生日	
	spouse							varchar(250),																							--联系人伴侣的名字
    enable							boolean        	   default true ,																		--联系人信息是否可见	
	retired							boolean			   default false,																		--联系人是否退休
	
	primary key (id)
);

/*为了动态加载不同的类型客户的拜访活动*/
create table t_com_account_activity_description
(
	id							bigserial,										--固定的客户拜访活动的ID
	com_account_type 			varchar(250) not null references t_com_account_type(comtype) on update cascade,									--客户类型
    com_account_description		text,											--活动描述
    primary key (id)
);
create table t_com_account_activity_plan
(
	id							bigserial ,																									--拜访计划的id
	saler_id					int8 							references t_saler(id)	on update cascade on delete cascade,				--销售者的ID号	
	com_account_id				int8							not null references t_com_account(id) on update cascade,					--公司客户ID
	activity_person				varchar(200)					not null,																	--拜访人名称
	activity_date				Date							not	null,																	--拜访日期
	activity_time				timestamp						not null,																	--拜访时间
	activity_description		text							not null,																	--拜访形式
	activity_address			varchar(250)					not null,																	--活动地点
	cost						decimal(12,2)					not null,																	--花费
	outcome						decimal(12,2)					not null,																	--产出
	retonin					    decimal(8,7)		,																								--投资回报比		
	primary key (id)
);

create table t_com_account_activity_log
(
	id							bigserial ,																									--拜访计划的id
	saler_id					int8 							references t_saler(id)	on update cascade on delete cascade,				--销售者的ID号	
	com_account_id				int8							not null references t_com_account(id) on update cascade,					--公司客户ID
	actlog_person               varchar(200),																								--公司客户联系人名称
	actlog_date					Date                         	not	null,																	--拜访日期
	actlog_time					timestamp						not null,																	--拜访时间
	activity_detail				text							not null,																	--拜访详情
	remarks						text,																										--活动备注
	reviews						text,																										--报告审阅及批复
	primary key (id)
);

create table t_com_account_booking_room
(
	id							bigserial , 																								--订单ID
	saler_id					int8 							not null references t_saler(id)	on update cascade on delete cascade,		--销售者ID
	com_account_id				int8							not null references t_com_account(id) on update cascade,					--公司客户ID
	room_contact_name			varchar(100)					not null,																	--预订房间联系人名称
	room_booking_num			varchar(100)					not null ,																	--房间订单号
	room_id						int8,																										--房间ID
	hotel_id					int8							not null references t_hotel(id) on update cascade,							--公司客户联系人ID
	room_num					int								not null,																	--房间数量
	room_arrive					timestamp without time zone		not	null,																--到达时间
	room_depart					timestamp without time zone		not	null,																--离开时间
	room_comps					int								not null default 0,															--赠送房晚
	room_res_id					varchar(250),																								--自动生成的某种ID
	room_book_type				varchar(250),																								--预订方式
	room_status					varchar(250)					not null default 'P',														--订单状态
	room_avg_rate				decimal(12,2),																								--房间均价
	room_type					varchar(250),																							    --订单类型
	room_cutoff					int 							not null default 3,														    --提供公司客户的资料截止时间
	room_house_mthd				varchar(250),																								--房间类型
	room_comm					decimal(12,2),																								--佣金							
	market_seg					varchar(250),																								--市场段
	room_confirmation			boolean							not null default false,													--默认为没有处理
	enable						boolean							default true,

	primary key (id)
);

create table t_com_account_booking_banquet
(
	id							bigserial , 																								--订单ID
	saler_id					int8 							not null references t_saler(id)	on update cascade on delete cascade,		--销售者ID
	com_account_id				int8							not null references t_com_account(id) on update cascade,					--公司客户ID
	banquet_contact_name		varchar(100)					not null,																	--预订宴会厅名称
	hotel_id					int8							not null references t_hotel(id) on update cascade,							--公司客户联系人ID
	banquet_id					int8,																										--房间ID
	banquet_book_type					varchar(250),																								--预订方式
	banquet_arrive				timestamp without time zone		not	null,																	--到达时间
	banquet_depart				timestamp without time zone		not	null,																	--离开时间
	banquet_res_id						varchar(250),																								--自动生成的某种ID
	banquet_status						varchar(250)					not null default 'P',														--订单状态
	banquet_rate						decimal(12,2),																							    --宴会厅价格	
	banquet_booking_num			varchar(100)				 ,																	--宴会厅订单号					
	banquet_cutoff						int 							not null default 3,														    --提供公司客户的资料截止时间
	banquet_confirmation		boolean							not null default false,														--默认为没有处理
	enable						boolean							default true,
	primary key (id)
);

create table t_com_account_talent_analysis
(	
	id 										bigserial,																									--公司客户潜力分析Id
	saler_id								int8 							not null references t_saler(id)	on update cascade on delete cascade,		--销售者ID
	com_account_id							int8							not null references t_com_account(id) on update cascade,					--公司客户ID
	potential_room_nights					int,																										--潜在生意量
	rate_tolerance							int,																										--价格承受力
	company_profile  						int,																										--公司规模
	users_profile							int,																										--住客级别
	avg_lengthof_stay						int,																										--平均住店日期
	room_mix								int,																										--房型使用
	business_mix							int,																										--生意种类
	willingnessto_tryOurHotel				int,																										--合作意向
	abilitytoFulfillClientRequirements 		int,																										--是否可以满足客户需求
	term_contract							int,																										--协议签署
	locationof_office						int,																										--公司位置
	paymentTerms							int,																										--付款条款
	totalScore								int,																										--潜力分析总分	
	primary key(id)
);






