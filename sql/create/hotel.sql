	--公司用户信息表
create table t_hotel
(
	id					bigserial,																							--酒店ID										
	cname				varchar(250)		not null,																		--酒店名字
	ename				varchar(250)		not null,																		--酒店名称
	city 				varchar(250)		not null,																		--酒店所在的城市
	hotel_code			varchar(250)		not null,																		--酒店代码
	post_as				varchar(250)		not null,																		--酒店所在地区的邮政编码
	country				varchar(250)		not null,																		--酒店所在国家
	hotel_county		varchar(250)		not null,																		--酒店所在县
	province			varchar(250)		not null,																		--酒店所在的省份
	telephone			varchar(100)		not null,																		--酒店的商用电话
	fax 				varchar(100)		not null,																		--酒店的传真号码
 	email				varchar(100)		,																				--酒店邮箱
	region				varchar(100)		not null,																		--酒店所在地区
	hotel_intro			text				,																				--酒店简介
	location_des		text				,																				--地址说明
	img_url				varchar(250),																						--酒店图片上传
	collection			int 				default 0,																		--酒店被收藏的次数					
	enable 				boolean 			default true,																	--酒店信息是否可见																						
	primary key (id)
);


create table t_hotel_info_seter
(
	id						bigserial,																							--酒店信息设置人ID
	hotel_id				int8				not null references	t_hotel(id) on update cascade on delete cascade,			--所属酒店
	account_id				int8				not null references t_account(id) on update cascade on delete cascade unique,			--登陆账号ID以此来决定角色
	set_name				varchar(250)  		not null,																	--酒店信息设置人姓名
	set_position			varchar(250)		not null,																	--酒店信息设置人职位
	set_tel					varchar(250),																					--酒店信息设置人电话
	set_mobile				varchar(250),																					--酒店信息设置人电话
	set_email				varchar(250),																					--酒店信息设置人邮箱
	set_wechat				varchar(250),																					--酒店信息设置人微信
	set_qq					varchar(250),																					--酒店信息设置人qq
	primary key(id)
);

create table t_hotel_rerser_contact
(
	id						bigserial,																							--客房预订联系人ID
	hotel_id				int8				not null references	t_hotel(id) on update cascade on delete cascade,			--所属酒店
	account_id			    int8				not null references t_account(id) on update cascade on delete cascade unique,			--登陆账号ID以此来决定角色	
	con_name				varchar(250)		not null,																	--客房预订联系人姓名
	con_position			varchar(250)		not null,																	--客房预订联系人职位
	con_tel					varchar(250),																					--客房预订联系人电话
	con_mobile				varchar(250),																					--客房预订联系人电话
	con_email				varchar(250),																					--客房预订联系人邮箱
	con_wechat				varchar(250),																					--客房预订联系人微信
	con_qq					varchar(250),																					--客房预订联系人qq
	primary key(id)
);


create table t_hotel_sale_incharger
(
	id					bigserial,																							--销售负责人ID
	hotel_id			int8 				not null references	t_hotel(id) on update cascade on delete cascade,			--所属酒店
	account_id			int8				not null references t_account(id) on update cascade on delete cascade unique,			--登陆账号ID以此来决定角色	
	inc_name				varchar(250)		not null,																	--销售负责人姓名
	inc_position			varchar(250)		not null,																	--销售负责人职位
	inc_tel					varchar(250),																					--销售负责人电话
	inc_mobile				varchar(250),																					--销售负责人电话
	inc_email				varchar(250),																					--销售负责人邮箱
	inc_wechat				varchar(250),																					--销售负责人微信
	inc_qq					varchar(250),																					--销售负责人qq
	primary key(id)
);

create table t_hotel_mice_incharger
(
	id					bigserial,																							--会议负责人ID
	hotel_id			int8 				not null references	t_hotel(id) on update cascade on delete cascade,			--所属酒店
	account_id			int8				not null references t_account(id) on update cascade on delete cascade unique,		--登陆账号ID以此来决定角色
	mic_name				varchar(250)		not null,																	--会议负责人姓名
	mic_position			varchar(250)		not null,																	--会议负责人职位
	mic_tel					varchar(250),																					--会议负责人电话
	mic_mobile				varchar(250),																					--会议负责人电话
	mic_email				varchar(250),																					--会议负责人邮箱
	mic_wechat				varchar(250),																					--会议负责人微信
	mic_qq					varchar(250),																					--会议负责人qq
	primary key(id)
);

create table t_hotel_market_dir
(
	id					bigserial,																							--市场总监ID
	hotel_id			int8 				not null references	t_hotel(id) on update cascade on delete cascade,			--所属酒店
	account_id			int8				not null references t_account(id) on update cascade on delete cascade unique,			--登陆账号ID以此来决定角色	
	dir_name				varchar(250)		not null,																	--市场总监姓名
	dir_position			varchar(250)		not null,																	--市场总监职位
	dir_tel					varchar(250),																					--市场总监电话
	dir_mobile				varchar(250),																					--市场总监电话
	dir_email				varchar(250),																					--市场总监邮箱
	dir_wechat				varchar(250),																					--市场总监微信
	dir_qq					varchar(250),																					--市场总监qq
	primary key(id)
);	


create table t_hotel_manager
(
	id					bigserial,																							--酒店经理ID
	hotel_id			int8 				not null references	t_hotel(id) on update cascade on delete cascade,			--所属酒店
	account_id			int8				not null references t_account(id) on update cascade on delete cascade unique,			--登陆账号ID以此来决定角色
	man_name				varchar(250)		not null,																	--酒店经理姓名
	man_position			varchar(250)		not null,																	--酒店经理职位
	man_tel					varchar(250),																					--酒店经理电话
	man_mobile				varchar(250),																					--酒店经理电话
	man_email				varchar(250),																					--酒店经理邮箱
	man_wechat				varchar(250),																					--酒店经理微信
	man_qq					varchar(250),																					--酒店经理qq
	primary key(id)
);



create table t_room
(
	id					bigserial,																						--房间ID
	hotel_id			int8				not null references	t_hotel(id) on update cascade on delete cascade,		--酒店ID
	type				varchar(250),																					--房间类型
	room_description	text,																							--房间描述
	state				varchar(250)		not null default 'T',														--预定状态
	primary key (id)
);

create table t_room_photo
(
	id					bigserial,																						--照片ID
	hotel_id			int8				not null references	t_hotel(id) on update cascade on delete cascade,		--酒店ID
	url					varchar(250),																					--酒店图片地址
	room_id			 	int8				not null references	t_room(id) on update cascade on delete cascade,			--房间号码
	primary key (id)
);

--在线预订价格的项目名称，数据字典

create table t_online_price_room
(	
	id						bigserial,																						--价格种类ID
	hotel_id				int8				not null references	t_hotel(id) on update cascade on delete cascade,		--酒店ID
	online_pay_type			int 		not null,																	--价格种类
	room_type				varchar(200), 																					--房间类型
    online_start_date		Date,																							--在线价格的开始日期
	online_end_date			Date,																							--在线价格的结束日期
	online_package_code		varchar(100),																					--价格套系代码
	online_hotel_code		varchar(250),																					--酒店对应价格编码				
	online_price			decimal(12,2)		not null ,																	--每晚的实际价钱	
    online_project_name   	varchar(200),																					--价格对应的项目名称	
	online_supplements		float,																							--附加费
	primary key(id)
);

create table t_contract_room_price
(
	id							bigserial,																						--协议价格ID
	hotel_id					int8 			not null references	t_hotel(id) on update cascade on delete cascade	,			--所属酒店ID
	contract_cus_type			varchar(250),																					--客户类型
	contract_package_code		varchar(100),																					--协议价格套系号代码
	contract_start_date			Date,																							--协议价格开始时间
	contract_end_date			Date,																							--协议价格结束时间			
    room_type				   	varchar(250),																					--房间类型
	contract_price				decimal(12,2)		not null,																	--每晚的价钱
	contract_project_name		varchar(250),																					--价格项目名称
	contract_price_type			varchar(250),																					--价格种类
	contract_price_code			varchar(250),																					--价格编码
	contract_supplements		float,																							--附加费
	primary key(id)
);

create table  t_resaurant_bars_info
(
	id					bigserial,																						--餐厅酒吧ID
	hotel_id			int8,																							--所属酒店ID
	rba_name				varchar(250)		not null,																	--餐厅酒吧名称
	rba_rb_code				varchar(250),																					--餐厅酒吧代码
	rba_location			varchar(400),																					--餐厅酒吧位置
	rba_price				decimal(12,2),																					--餐厅价格
	rba_imgurl				varchar(200),																					--餐厅照片
	rba_box					int	,																							--酒店宝箱的数量
	rba_box_contain			varchar(250),																					--酒店包厢容量
	rba_special_service		text,																							--餐厅特色服务
	rba_privilige			varchar(200),																							--优惠比例
	primary key(id)																										

);

create table  t_banquet_info
(
	id					bigserial,																						--宴会厅/会议室ID
	hotel_id			int8,			--所属酒店ID
	ban_name				varchar(250)	 not null,																					--宴会厅/会议室名称
	ban_code				varchar(250),																					--宴会厅/会议室代码
	ban_type				varchar(250),																					--宴会厅/会议室的类型
	ban_location			varchar(250),																					--宴会厅/会议室位置
	ban_contain				varchar(250),																					--宴会厅/会议室容量
	ban_special_intro		text,																							--宴会厅/会议室特色介绍
	ban_combo				varchar(400),																					--宴会厅/会议室套餐
	ban_privilige			varchar(300),																							--宴会厅/会议室优惠
	ban_imgurl				varchar(200),																					--宴会厅/会议图片
	ban_size				int ,																							--宴会厅/会议室大小
	ban_dimension			varchar(300),																					--宴会厅/会议室尺寸
	primary key(id)
); 

create table  t_banquet_price
(
	id						bigserial,																						--宴会厅/会议室价格ID
	hotel_id				int8,																							--所属酒店
	banquet_name			varchar(200)	,																			--具体宴名称
	banp_time_bucket		varchar(250),																					--时间段
	banp_price				decimal(12,2)		not null,																	--宴会厅的价钱
	primary key(id)

); 	

create table t_store
(
	id					bigserial,																						--专门店ID
	hotel_id			int8,																							--酒店ID
	store_code			varchar(250),																					--专门店代码
	store_name				varchar(250)   not null,																		--专门店名称
	store_location			varchar(400),																					--专门店位置
	store_imgUrl		varchar(200),																					--专门店图片
	store_content				text,																					--专门店服务/娱乐设施	
	primary key(id)
);

create table t_store_price
(
	id					bigserial,																						--专门店的价格ID
	store_id			int8 			not null references	t_store(id) on update cascade on delete cascade,			--专门店所对应的ID
	store_price				decimal(12,2),																					--专门店所属服务所对应的价格
	primary key(id)
);


create table t_propmtion_activity
(
	id             		bigserial,																						--促销活动ID					
	hotel_id			int8        	not null references t_hotel(id) on update cascade on delete cascade,			--促销活动对应的的酒店ID
	prop_activity_name 				varchar(200),																	--促销活动名称	
	prop_activity_company				varchar(200),																	--促销活动的合作伙伴
	prop_activity_code					varchar(200),																	--促销活动代码
	prop_activity_condition			text,																			--促销活动的预订条款
	prop_activity_imgUrl				varchar(200),																	--促销活动的图片路径
	primary key(id)	
);

create table t_propmtion_activity_room
(
	room_id 			int8	not null references t_room(id) on update cascade on delete cascade,							--房间ID
	prop_id				int8    not null references t_propmtion_activity(id) on update cascade on delete cascade,			--促销活动的ID
	primary key(room_id,prop_id)
);












