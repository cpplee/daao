create table t_member
(
    id           			 bigserial,						--前台注册普通用户ID
	account_id				 int8  			not null references t_account(id) on update cascade on delete cascade,                              --普通用户的级别
    name		 			 varchar(250),																										--普通用户的真实姓名
	mem_type				 varchar(100),																										--客户类型
	company_name			varchar(200),																										--公司名称
	company_job				varchar(200),																										--公司职位
	sex			 			 boolean default true,																								--true代表男性
    qq						 varchar(250),																										--qq号
	hotel_name				 varchar(250),																										--酒店集团名称
	mem_level				 varchar(100),																										--会员级别
	mem_num					 varchar(100),																										--会员卡号
	point_status				 text,																												--积分规则
    phone					 varchar(250),																										--手机号码
	certificate				 varchar(100),																										--证件名称
	cer_num					 varchar(100),																										--证件号码
	email					 varchar(250),																										--邮箱号
	wechat					 varchar(250),																										--微信
	dob			 			 Date,																												--生日
	login_type					 varchar(250),																										--前台用户类型
	member_code				 bigserial,																										--团队编码
	primary key(id)  
);


create table t_member_booking_room																												--普通客户预订房间
(
	id						bigserial,																												--订单id	
	member_id				int8 				not null references t_member(id) on update cascade on delete cascade,								--普通客户ID
	hotel_id				int8 				not null references t_hotel(id) on update cascade on delete cascade,								--酒店ID	
	room_id					int8				not null references t_room(id) on update cascade on delete cascade,									--房间ID
	book_cer_type			varchar(250),																											--证件类型
	book_cer_number			varchar(250),																											--证件号码
	book_name				varchar(250),																											--预订者姓名
	book_phone				varchar(250),																											--预订手机号码
	arrive_time				Date,																													--入住时间
	leave_time				Date,																													--离开时间
	person_num				int,																													--入住人数
	room_num				int,																													--房间数量
	rate					decimal(12,2)		not null,																							--房间价格
	status					varchar(250)		not null default 'P',																				--预订订单状态
	tips					varchar(400),					--客户要求            
	primary key(id)
);

create table t_member_booking_banquet
(
	id								bigserial,
	member_id						int8 				not null references t_member(id) on update cascade on delete cascade,								--普通客户ID
	hotel_id						int8 			,								--酒店ID
	banquet_id						int8				not null references t_banquet_info(id) on update cascade on delete cascade,							--宴会厅ID
	book_name						varchar(200),																											--预订人姓名
	book_banquet_name				varchar(200),																											--预订人名称
	book_banquet_cer_type			varchar(250),																											--证件类型
	book_banquet_cer_number			varchar(250),																											--证件号码
	book_banquet_phone				varchar(250),																											--预订手机号码
	state							varchar(100)         not null default 'P',																			    --订单状态
	start_date						Date,																												--开始日期	
	end_date						Date,																													--结束日期
	use_type						varchar(10),																											--确定使用类型
	people_num						int,																													--确定人数
	price							decimal(12,2),																													--价格
	tips							varchar(400),																													--备注
	primary key(id)
);

create table t_member_booking_restaurant
(
	id									bigserial,
	member_id							int8 				not null references t_member(id) on update cascade on delete cascade,								--普通客户ID
	hotel_id							int8 				not null references t_hotel(id) on update cascade on delete cascade,								--酒店ID
	resaurant_id						int8 				not null references t_resaurant_bars_info(id) on update cascade on delete cascade,					--餐厅ID
	eat_time							Date,																													--吃饭时间
	eat_date							Date,																													--吃饭日期
	book_man_name						varchar(200),																											--预订人姓名										
	man_num								int,																													--吃饭人数
	book_restaurant_name				varchar(200),																											--预订人名称
	book_restaurant_cer_type			varchar(250),																											--证件类型
    state							varchar(100)         not null default 'P',																			    --订单状态
	book_restaurant_cer_number			varchar(250),																											--证件号码
	book_restaurant_phone				varchar(250),																											--预订手机号码
	book_restaurant_price				decimal(12,2),																											--预订价格
	serve_name							varchar(250),																											--服务名称
	tips							varchar(400),																																		--备注信息
	primary key(id)
);

create table t_member_booking_store
(
	id								bigserial,
	member_id						int8 				not null references t_member(id) on update cascade on delete cascade,								--普通客户ID
	hotel_id						int8 				not null references t_hotel(id) on update cascade on delete cascade,								--酒店ID
	store_id						int8 				not null references t_store(id) on update cascade on delete cascade,								--餐厅ID
	book_name						varchar(200),																											--预订人姓名										
	book_store_name					varchar(200),																											--专门店名称
	book_store_cer_type				varchar(250),																											--证件类型
    state							varchar(100)         not null default 'P',																			    --订单状态
	book_store_cer_number			varchar(250),																											--证件号码
	book_store_phone				varchar(250),																											--预订手机号码
	book_store_price				decimal(12,2),																										--预订价格
	book_store_content 				varchar(400),																													--项目或服务
	tips							varchar(400),																							--备注信息
	primary key(id)
);
 
create table t_member_agree_list
(
	id						bigserial,																											--合同ID
	member_id				int8 				not null references t_member(id) on update cascade on delete cascade,								--普通客户ID
	hotel_name				varchar(200),																										--酒店名称
	room_type				varchar(100),																										--房间类型				
	price					decimal(12,2),																										--房间价格
	agree_code				varchar(200),																										--合同号码
	valid_date				Date,																												--截止日期
	primary key(id)
);

create table t_member_enquiry_content
(
	id						bigserial,																											--评论ID
	member_id				int8 				not null references t_member(id) on update cascade on delete cascade,							--普通客户ID
	activity_name			varchar(200),																										--询价活动名称
	company_name			varchar(200),																										--公司名称
	enquiry_phone			varchar(100),																										--询价电话
	enquiry_email			varchar(100),																										--询价邮箱
	enquiry_date			Date,																												--日期
	person_num				int,																												--活动人数
	room_num				int,																												--房间数量
	use_type				varchar(200),																										--活动用途
	enquiry_start_time		Date,																												--开始时间
	enquiry_end_time		Date,																												--结束时间
	enquiry_address			varchar(200),																										--活动地点
	ensure_person_num		int,																												--确定人数
	layout				varchar(200),																											--摆设方式
	contents				text,																												--备注
	primary key(id)
);

create table t_member_enquiry_hotel
(
	id 					   			bigserial,
	member_enquiry_id				int8 not null references t_member_enquiry_content(id) on update cascade on delete cascade,						--询价的ID
	hotel_id						int8,																										--询价里面的酒店ID
	primary key(id)
);

create table t_member_common_contact
(
	id					    bigserial,																											--常用联系人ID
	member_id				int8 				not null references t_member(id) on update cascade on delete cascade,							--普通客户ID
	contact_name					varchar(250),																										--常用联系人姓名
	contact_phone					varchar(250),																										--常用联系人电话
	contact_sex						boolean default true,																								--常用联系人性别
	contact_company_name			varchar(250),																										--常用联系人公司名称
	contact_hotel_name				 varchar(250),																										--酒店集团名称
	contact_mem_level				 varchar(100),																										--会员级别
	contact_mem_num					 varchar(100),																										--会员卡号
	contact_point_status				 	text,																												--积分规则
	contact_dob								Date,																												--常用联系人的生日
	contact_certificate				 varchar(100),																										--常用联系人证件名称
	contact_cer_num					 varchar(100),																										--常用联系人证件号码
	primary key(id)					
) ;