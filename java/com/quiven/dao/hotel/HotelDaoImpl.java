package com.quiven.dao.hotel;

import java.util.ArrayList;
import java.util.List;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.hotel.BanquetInfo;
import com.quiven.entity.hotel.BanquetPrice;
import com.quiven.entity.hotel.ContractRoomPrice;
import com.quiven.entity.hotel.Hotel;
import com.quiven.entity.hotel.HotelInfoSeter;
import com.quiven.entity.hotel.HotelManager;
import com.quiven.entity.hotel.HotelMarketDir;
import com.quiven.entity.hotel.HotelMiceIncharger;
import com.quiven.entity.hotel.HotelRerserContact;
import com.quiven.entity.hotel.HotelSaleIncharger;
import com.quiven.entity.hotel.Hotel_Room;
import com.quiven.entity.hotel.OnlinePriceRoom;
import com.quiven.entity.hotel.PropmtionActivity;
import com.quiven.entity.hotel.ResaurantBarsInfo;
import com.quiven.entity.hotel.Room;
import com.quiven.entity.hotel.Store;
import com.quiven.entity.member.Member;
import com.quiven.entity.member.MemberBookingBanquet;
import com.quiven.entity.member.MemberBookingRoom;

public class HotelDaoImpl extends BaseDao implements HotelDao, PostgreSQL {

	public long addHotelInfo(long hotelId, Hotel hotel) throws Exception {

		String sql = "insert into t_hotel(cname,ename,city,hotel_code,post_as,country,hotel_county,province,telephone,fax,email,region,hotel_intro,location_des,img_url)"
				+ "values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

		esql.update(sql, hotel.getCname(), hotel.getEname(), hotel.getCity(),
				hotel.getHotelCode(), hotel.getPostAs(), hotel.getCountry(),
				hotel.getHotelCounty(), hotel.getProvince(),
				hotel.getTelephone(), hotel.getFax(), hotel.getEmail(),
				hotel.getRegion(), hotel.getHotelIntro(),
				hotel.getLocationDes(),
				hotel.getImgUrl());
		long Id = getGeneratedId("t_hotel");
		return Id;
	}

	public long addHotelInfoSeter(long hotelId, HotelInfoSeter hotelSeter)
			throws Exception {

		String sql = "insert into t_hotel_info_seter(set_name,set_position,set_tel,set_mobile,set_email,set_wechat,set_qq,hotel_id)"
				+ "values(?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelSeter.getSetName(), hotelSeter.getSetPosition(),
				hotelSeter.getSetTel(), hotelSeter.getSetMobile(),
				hotelSeter.getSetEmail(), hotelSeter.getSetWechat(),
				hotelSeter.getSetQq(), hotelId);
		long Id = getGeneratedId("t_hotel_info_seter");
		return Id;

	}

	public long addHotelMarketDir(long hotelId, HotelMarketDir hotelMarketDir)
			throws Exception {

		String sql = "insert into t_hotel_market_dir(dir_name,dir_position,dir_tel,dir_mobile,dir_email,dir_wechat,dir_qq,hotel_id)"
				+ "values(?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelMarketDir.getDirName(),
				hotelMarketDir.getDirPosition(), hotelMarketDir.getDirTel(),
				hotelMarketDir.getDirMobile(), hotelMarketDir.getDirEmail(),
				hotelMarketDir.getDirWechat(), hotelMarketDir.getDirQq(),
				hotelId);
		long Id = getGeneratedId("t_hotel_market_dir");
		return Id;

	}

	public long addHotelMiceIncharger(long hotelId,
			HotelMiceIncharger hotelMiceIncharger) throws Exception {

		String sql = "insert into t_hotel_mice_incharger(mic_name,mic_position,mic_tel,mic_mobile,mic_email,mic_wechat,mic_qq,hotel_id)"
				+ "values(?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelMiceIncharger.getMicName(),
				hotelMiceIncharger.getMicPosition(),
				hotelMiceIncharger.getMicTel(),
				hotelMiceIncharger.getMicMobile(),
				hotelMiceIncharger.getMicEmail(),
				hotelMiceIncharger.getMicWechat(),
				hotelMiceIncharger.getMicQq(), hotelId);
		long Id = getGeneratedId("t_hotel_mice_incharger");
		return Id;
	}

	public long addHotelRerserContact(long hotelId,
			HotelRerserContact hotelRerserContact) throws Exception {

		String sql = "insert into t_hotel_rerser_contact(con_name,con_position,con_tel,con_mobile,con_email,con_wechat,con_qq,hotel_id)"
				+ "values(?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelRerserContact.getConName(),
				hotelRerserContact.getConPosition(),
				hotelRerserContact.getConTel(),
				hotelRerserContact.getConMobile(),
				hotelRerserContact.getConEmail(),
				hotelRerserContact.getConWechat(),
				hotelRerserContact.getConQq(), hotelId);
		long Id = getGeneratedId("t_hotel_rerser_contact");
		return Id;

	}

	public long addHotelSaleIncharger(long hotelId,
			HotelSaleIncharger hotelSaleIncharger) throws Exception {

		String sql = "insert into t_hotel_sale_incharger(inc_name,inc_position,inc_tel,inc_mobile,inc_email,inc_wechat,inc_qq,hotel_id)"
				+ "values(?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelSaleIncharger.getIncName(),
				hotelSaleIncharger.getIncPosition(),
				hotelSaleIncharger.getIncTel(),
				hotelSaleIncharger.getIncMobile(),
				hotelSaleIncharger.getIncEmail(),
				hotelSaleIncharger.getIncWechat(),
				hotelSaleIncharger.getIncQq(), hotelId);
		long Id = getGeneratedId("t_hotel_sale_incharger");
		return Id;

	}

	public long addHotelManager(long hotelId, HotelManager hotelmanager)
			throws Exception {

		String sql = "insert into t_hotel_manager(man_name,man_position,man_tel,man_mobile,man_email,man_wechat,man_qq,hotel_id)"
				+ "values(?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelmanager.getManName(),
				hotelmanager.getManPosition(), hotelmanager.getManTel(),
				hotelmanager.getManMobile(), hotelmanager.getManEmail(),
				hotelmanager.getManWechat(), hotelmanager.getManQq(), hotelId);
		long Id = getGeneratedId("t_hotel_manager");
		return Id;

	}

	public long addRoomInfo(long hotelId, Room room) throws Exception {
		String sql = "insert into t_room (hotel_id,type,room_description)"
				+ "values(?,?,?)";
		esql.update(sql, hotelId, room.getType(), room.getRoomDescription());
		long Id = getGeneratedId("t_room");
		return Id;
	}

	public long addBanquetInfo(long hotelId, BanquetInfo banquetInfo)
			throws Exception {
		String sql = "insert into t_banquet_info(hotel_id,ban_name,ban_code,ban_type,ban_location,ban_contain,ban_special_intro,ban_combo,ban_privilige,ban_size,ban_dimension,ban_imgurl)"
				+ "values(?,?,?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelId, banquetInfo.getBanName(),
				banquetInfo.getBanCode(), banquetInfo.getBanType(),
				banquetInfo.getBanLocation(), banquetInfo.getBanContain(),
				banquetInfo.getBanSpecialIntro(), banquetInfo.getBanCombo(),
				banquetInfo.getBanPrivilige(), banquetInfo.getBanSize(),
				banquetInfo.getBanDimension(),
				banquetInfo.getBanImgurl());
		long Id = getGeneratedId("t_banquet_info");
		return Id;
	}

	public long addRetaurantBarInfo(long hotelId,
			ResaurantBarsInfo restaurantBarsInfo) throws Exception {
		String sql = "insert into t_resaurant_bars_info(hotel_id,rba_name,rba_rb_code,rba_location,rba_price,rba_box,rba_box_contain,rba_special_service,rba_privilige,rba_imgurl)"
				+ "values(?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelId, restaurantBarsInfo.getRbaName(),
				restaurantBarsInfo.getRbaRbCode(),
				restaurantBarsInfo.getRbaLocation(),
				restaurantBarsInfo.getRbaPrice(),
				restaurantBarsInfo.getRbaBox(),
				restaurantBarsInfo.getRbaBoxContain(),
				restaurantBarsInfo.getRbaSpecialService(),
				restaurantBarsInfo.getRbaPrivilige(),
				restaurantBarsInfo.getRbaImgurl());
		long Id = getGeneratedId("t_resaurant_bars_info");
		return Id;
	}

	public long addStoreInfo(long hotelId, Store store) throws Exception {
		String sql = "insert into t_store(hotel_id,store_name,store_location,store_code,store_content,store_imgurl)"
				+ "values(?,?,?,?,?,?)";
		esql.update(sql, hotelId, store.getStoreName(),
				store.getStoreLocation(), store.getStoreCode(),
				store.getStoreContent(),store.getStoreImgurl());
		long Id = getGeneratedId("t_store");
		return Id;
	}

	public String getHotelNamebyId(long hotelId) throws Exception {
		String sql = "select cname from t_hotel where id = ?";
		String name = esql.query(String.class, sql, hotelId);
		return name;

	}

	public long addOnlineRoomPrice(long hotelId, OnlinePriceRoom roomPrice)
			throws Exception {

		String sql = "insert into t_online_price_room (hotel_id,online_pay_type,room_type,online_hotel_code,online_price,online_project_name,online_supplements,online_package_code,online_start_date,online_end_date)"
				+ "values(?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelId, roomPrice.getOnlinePayType(),
				roomPrice.getRoomType(), roomPrice.getOnlineHotelCode(),
				roomPrice.getOnlinePrice(), roomPrice.getOnlineProjectName(),
				roomPrice.getOnlineSupplements(),
				roomPrice.getOnlinePackageCode(),
				roomPrice.getOnlineStartDate(), roomPrice.getOnlineEndDate());
		long Id = getGeneratedId("t_online_price_room");
		return Id;

	}

	public long addContrastRoomPrice(long hotelId,
			ContractRoomPrice contractRoomPrice) throws Exception {

		String sql = "insert into t_contract_room_price (hotel_id,contract_cus_type,contract_package_code,contract_start_date,contract_end_date,room_type,contract_price,contract_project_name,contract_price_type,contract_price_code,contract_supplements)"
				+ "values(?,?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql, hotelId, contractRoomPrice.getContractCusType(),
				contractRoomPrice.getContractPackageCode(),
				contractRoomPrice.getContractStartDate(),
				contractRoomPrice.getContractEndDate(),
				contractRoomPrice.getRoomType(),
				contractRoomPrice.getContractPrice(),
				contractRoomPrice.getContractProjectName(),
				contractRoomPrice.getContractPriceType(),
				contractRoomPrice.getContractPriceCode(),
				contractRoomPrice.getContractSupplements());
		long Id = getGeneratedId("t_contract_room_price");
		return Id;

	}

	public long addBanquetPrice(long hotelId, BanquetPrice banquetPrice)
			throws Exception {

		String sql = "insert into t_banquet_price (hotel_id,banquet_name,banp_time_bucket,banp_price)"
				+ "values(?,?,?,?)";
		esql.update(sql, hotelId, banquetPrice.getBanquetName(),
				banquetPrice.getBanpTimeBucket(), banquetPrice.getBanpPrice());
		long Id = getGeneratedId("t_banquet_price");
		return Id;
	}

	public PagedList<Hotel> getHotelbyAddress(String address, int offset,
			int limit) throws Exception {
		PagedList<Hotel> list = new PagedList<Hotel>();
		List<Object> parameters = new ArrayList<Object>();
		String from = "from t_hotel";
		String where = " where city = ?";
		parameters.add(address);
		String sql = "select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));
		sql = "select distinct * " + from + where;
		list.setData(esql.list(Hotel.class, sql, parameters.toArray()));
		return list;
	}

	// 添加房型照片
	public long addRoomphoto(long hotelId, long roomId, String newpath)
			throws Exception {

		String sql = "insert into t_room_photo (hotel_id,url,room_id)"
				+ "values(?,?,?)";
		esql.update(sql, hotelId, newpath, roomId);
		long Id = getGeneratedId("t_room_photo");
		return Id;
	}

	@Override
	public Hotel getHotelRoombyHotelId(long hotelId) throws Exception {
		// TODO Auto-generated method stub

		String sql = "select * from t_hotel where id=?";

		Hotel hotel = esql.query(Hotel.class, sql, hotelId);

		return hotel;
	}

	@Override
	public PagedList<Hotel_Room> getroominfo(long hotelId) throws Exception {
		// TODO Auto-generated method stub
		PagedList<Hotel_Room> list = new PagedList<Hotel_Room>();
		List<Object> parameters = new ArrayList<Object>();
		parameters.add(hotelId);
		String sql = "select distinct a.id,a.hotel_id,c.room_type,c.online_pay_type,c.online_price,a.room_description,b.url from t_room  a inner join t_room_photo  b on a.hotel_id=? and  a.id=b.room_id  inner join t_online_price_room c on a.type=c.room_type and  a.hotel_id=c.hotel_id ";
		list.setData(esql.list(Hotel_Room.class, sql, parameters.toArray()));
		return list;

	}


	@Override
	public Hotel_Room getRoombyRoomId(long roomId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select a.id,a.hotel_id,a.type,a.room_description,b.url from t_room  a inner join t_room_photo  b on  a.id=b.room_id and a.id=?";
		Hotel_Room room = esql.query(Hotel_Room.class, sql, roomId);

		return room;
	}

	@Override
	public long GetLowestPriceOfRoomToHotel(long hotelId) throws Exception {

		String sql = "select distinct min(online_price) from t_online_price_room where hotel_id = ?";
		Long a = esql.query(Long.class, sql, hotelId);
		if (a == null) {
			return 0;
		} else {
			return a;
		}

	}

	@Override
	public PagedList<BanquetInfo> getBanquetInfoListbyAddress(String address,
			int offset, int limit) throws Exception {

		PagedList<BanquetInfo> list = new PagedList<BanquetInfo>();
		List<Object> parameters = new ArrayList<Object>();
		String from = "from t_banquet_info";
		String where = " where ban_location = ?";
		parameters.add(address);
		String sql = "select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));
		sql = "select distinct * " + from + where;
		list.setData(esql.list(BanquetInfo.class, sql, parameters.toArray()));
		return list;

	}

	@Override
	public PagedList<ResaurantBarsInfo> getResaurantBarsInfoListbyAddress(
			String address, int offset, int limit) throws Exception {

		PagedList<ResaurantBarsInfo> list = new PagedList<ResaurantBarsInfo>();
		List<Object> parameters = new ArrayList<Object>();
		String from = "from t_resaurant_bars_info";
		String where = " where rba_location = ?";
		parameters.add(address);
		String sql = "select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));
		sql = "select distinct * " + from + where;
		list.setData(esql.list(ResaurantBarsInfo.class, sql,
				parameters.toArray()));
		return list;

	}

	@Override
	public PagedList<Store> getStoreListbyAddress(String address, int offset,
			int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<Store> list = new PagedList<Store>();
		List<Object> parameters = new ArrayList<Object>();
		String from = "from t_store";
		String where = " where store_location = ?";
		parameters.add(address);
		String sql = "select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));
		sql = "select distinct * " + from + where;
		list.setData(esql.list(Store.class, sql, parameters.toArray()));
		return list;

	}

	@Override
	public long GetLowestPriceOfBanquetToHotel(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select distinct min(banp_price) from t_banquet_price where id = ?";
		Long a = esql.query(Long.class, sql, id);
		if (a == null) {
			return 0;
		} else {
			return a;
		}
	}

	@Override
	public long GetLowestPriceOfResaurantBarsToHotel(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select distinct min(rba_price) from t_resaurant_bars_info where id = ?";
		Long a = esql.query(Long.class, sql, id);
		if (a == null) {
			return 0;
		} else {
			return a;
		}
	}

	@Override
	public long GetLowestPriceOfStoreToHotel(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select distinct min(store_price) from t_store_price where id = ?";
		Long a = esql.query(Long.class, sql, id);
		if (a == null) {
			return 0;
		} else {
			return a;
		}
	}

	@Override
	public BanquetInfo getBanquestInfoByBanquestId(long banquestid)
			throws Exception {
		// TODO Auto-generated method stub

		String sql = "select * from t_banquet_info where id=?";

		BanquetInfo banquest = esql.query(BanquetInfo.class, sql, banquestid);

		return banquest;
	}

	@Override
	public ResaurantBarsInfo getResaurantBarsInfoById(long resaurantbarsid)
			throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_resaurant_bars_info where id=?";
		ResaurantBarsInfo resaurantbarinfo = esql.query(
				ResaurantBarsInfo.class, sql, resaurantbarsid);
		return resaurantbarinfo;
	}

	@Override
	public Store getStoreByid(long storeid) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_store where id=?";
		Store store = esql.query(Store.class, sql, storeid);
		return store;
	}

	@Override
	public PagedList<PropmtionActivity> getpromotion(long hotelid)
			throws Exception {
		// TODO Auto-generated method stub
		PagedList<PropmtionActivity> promotion = new PagedList<PropmtionActivity>();
		List<Object> parameters = new ArrayList<Object>();
		String sql = "select distinct * from t_propmtion_activity where hotel_id=?";
		parameters.add(hotelid);
		promotion.setData(esql.list(PropmtionActivity.class, sql,
				parameters.toArray()));
		return promotion;

	}

	@Override
	public PropmtionActivity getpromotioninfo(long promotionid)
			throws Exception {
		// TODO Auto-generated method stub
		String sql = "select distinct * from t_propmtion_activity where id=?";
		PropmtionActivity promotioninfo = esql.query(PropmtionActivity.class,
				sql, promotionid);
		return promotioninfo;

	}

	@Override
	public PagedList<Hotel_Room> getpromotionroominfo(long hotelId,
			long promotionid) throws Exception {
		// TODO Auto-generated method stub
		PagedList<Hotel_Room> list = new PagedList<Hotel_Room>();
		List<Object> parameters = new ArrayList<Object>();
		parameters.add(hotelId);
		parameters.add(promotionid);
		parameters.add(hotelId);
		String sql = "select distinct  a.id,a.hotel_id,a.type,d.online_pay_type,d.online_price,a.room_description,b.url from t_room  a inner join t_room_photo  b on  a.id=b.room_id and a.hotel_id=? inner join t_propmtion_activity_room  c on c.room_id=a.id and c.prop_id=? inner join t_online_price_room d on a.type=d.room_type and d.hotel_id=?";
		list.setData(esql.list(Hotel_Room.class, sql, parameters.toArray()));
		return list;

		
	}
	
	public long addPropmtionActivityInfo(long hotelId,PropmtionActivity propmtionActivity) throws Exception {
		String sql = "insert into t_propmtion_activity(hotel_id,prop_activity_name,prop_activity_company,prop_activity_code,prop_activity_condition,prop_activity_imgurl)"
				+ "values(?,?,?,?,?,?)";
		esql.update(sql, hotelId, propmtionActivity.getPropActivityName(),
				propmtionActivity.getPropActivityCompany(), propmtionActivity.getPropActivityCode(),
				propmtionActivity.getPropActivityCondition(),propmtionActivity.getPropActivityImgurl());
		long Id = getGeneratedId("t_propmtion_activity");
		return Id;
	}

	@Override
	public PagedList<Hotel> getHotelList(long accountid) throws Exception {
	
	
		return null;
	}
	
	
	@Override
	public long getHotelIdByAccountId(long accountId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select hotel_id from t_hotel_info_seter where account_id = ?  " ;
		return esql.query(Long.class, sql, accountId);
	}

	@Override
	public long getRoleIdByAccountId(long accountId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select role_id from t_account_role where account_id = ?  " ;
		return esql.query(Long.class, sql, accountId);
	}

	@Override
	public PagedList<Hotel> listHotel(long hotelCode, int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<Hotel> list = new PagedList<Hotel>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_hotel ct";
		String order = " order by ct.id offset ? limit ?";
		String where = " where ct.hotel_code = ? and ct.enable = true ";
		parameters.add(hotelCode);

		String sql = "select count(distinct ct.id) " + from + where ;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct *" + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(Hotel.class, sql, parameters.toArray()));
		return list;
	}

	@Override
	public Hotel getHotelByHotelId(long hotelId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_hotel where id=?";
		Hotel hotel = esql.query(Hotel.class, sql, hotelId);
		return hotel;
	}

	@Override
	public void deleteHotelById(long hotelId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "update t_hotel set enable = false where id = ?";
		esql.update(sql,hotelId);
	}

	@Override
	public void updateHotelById(long hotelId, Hotel hotel) throws Exception {
		// TODO Auto-generated method stub
		String sql = "update t_hotel set cname = ?,ename= ?,hotel_code= ?,telephone= ?,fax= ?,email= ?,post_as= ?,hotel_intro= ?,country= ?,province= ?,city= ?,hotel_county= ?,region= ?,location_des= ?,img_url= ? where id = ?";
		esql.update(sql,hotel.getCname(),hotel.getEname(),hotel.getHotelCode(),hotel.getTelephone(),hotel.getFax(),hotel.getEmail(),hotel.getPostAs(),hotel.getHotelIntro(),hotel.getCountry(),hotel.getProvince(),hotel.getCity(),hotel.getHotelCounty(),hotel.getRegion(),hotel.getLocationDes(),hotel.getImgUrl(),hotelId);
	}

	@Override
	public long getBanquetIdByHotelId(long hotelId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select ban_code from t_banquet_info where hotel_id=?";
		Long banquetId =  esql.query(Long.class, sql, hotelId);		
		if(banquetId == null)
		{
			banquetId = (long) 0;
		}
		return banquetId;
	}
	
	@Override
	public BanquetInfo getBanquetByBanquetId(long banquetId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_banquet_info where id=?";
		BanquetInfo banquetInfo = esql.query(BanquetInfo.class, sql, banquetId);
		return banquetInfo;
	}

	@Override
	public PagedList<BanquetInfo> listbanquetInfo(long banquetId, int offset,
			int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<BanquetInfo> list = new PagedList<BanquetInfo>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_banquet_info bi";
		String order = " order by bi.id offset ? limit ?";
		String where = " where bi.ban_code = ? ";
		parameters.add(banquetId);

		String sql = "select count(distinct bi.id) " + from + where ;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct *" + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(BanquetInfo.class, sql, parameters.toArray()));
		return list;
	}

	@Override
	public void updateBanquetById(long banquetId, BanquetInfo banquetInfo)
			throws Exception {
		// TODO Auto-generated method stub
		String sql = "update t_banquet_info set ban_name= ?,ban_code= ?,ban_location= ?,ban_contain= ?,ban_size= ?,ban_special_intro= ?,ban_imgurl= ? where id = ?";
		esql.update(sql,banquetInfo.getBanName(),banquetInfo.getBanCode(),banquetInfo.getBanLocation(),banquetInfo.getBanContain(),banquetInfo.getBanSize(),banquetInfo.getBanSpecialIntro(),banquetInfo.getBanImgurl(),banquetId);
	}

	@Override
	public void deleteBanquetById(long banquetId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "delete from t_banquet_info where id = ?";
		esql.update(sql,banquetId);
	}

	@Override
	public long getResaurantBarsIdByHotelId(long hotelId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select rba_rb_code from t_resaurant_bars_info where hotel_id=?";
		Long resaurantBarsId = esql.query(Long.class, sql, hotelId);
		if(resaurantBarsId == null)
		{
			resaurantBarsId = (long) 0;
		}
		return resaurantBarsId;
	}

	@Override
	public PagedList<ResaurantBarsInfo> listResaurantBarsInfo(
			long resaurantBarsId, int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<ResaurantBarsInfo> list = new PagedList<ResaurantBarsInfo>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_resaurant_bars_info rb";
		String order = " order by rb.id offset ? limit ?";
		String where = " where rb.rba_rb_code = ? ";
		parameters.add(resaurantBarsId);

		String sql = "select count(distinct rb.id) " + from + where ;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct *" + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(ResaurantBarsInfo.class, sql, parameters.toArray()));
		return list;
	}

	@Override
	public ResaurantBarsInfo getResaurantBarsByResaurantBarsId(
			long resaurantBarsId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_resaurant_bars_info where id=?";
		ResaurantBarsInfo resaurantBarsInfo = esql.query(ResaurantBarsInfo.class, sql, resaurantBarsId);
		return resaurantBarsInfo;
	}

	@Override
	public void updateResaurantBarsById(long resaurantBarsId,
			ResaurantBarsInfo resaurantBarsInfo) throws Exception {
		// TODO Auto-generated method stub
		String sql = "update t_resaurant_bars_info set rba_name= ?,rba_rb_code= ?,rba_location= ?,rba_price= ?,rba_box= ?,rba_box_contain= ?,rba_special_service= ?,rba_imgurl= ? where id = ?";
		esql.update(sql,resaurantBarsInfo.getRbaName(),resaurantBarsInfo.getRbaRbCode(),resaurantBarsInfo.getRbaLocation(),resaurantBarsInfo.getRbaPrice(),resaurantBarsInfo.getRbaBox(),resaurantBarsInfo.getRbaBoxContain(),resaurantBarsInfo.getRbaSpecialService(),resaurantBarsInfo.getRbaImgurl(),resaurantBarsId);
	}

	@Override
	public void deleteResaurantBarsById(long resaurantBarsId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "delete from t_resaurant_bars_info where id = ?";
		esql.update(sql,resaurantBarsId);
	}

	@Override
	public long getStoreIdByHotelId(long hotelId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select id from t_store where hotel_id=?";
		Long store = esql.query(Long.class, sql, hotelId);
		if(store == null)
		{
			store = (long) 0;
		}
		return store;
	}

	@Override
	public PagedList<Store> listStoreInfo(long storeId, int offset, int limit)
			throws Exception {
		// TODO Auto-generated method stub
		PagedList<Store> list = new PagedList<Store>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_store st";
		String order = " order by st.id offset ? limit ?";
		String where = " where st.id = ? ";
		parameters.add(storeId);

		String sql = "select count(distinct st.id) " + from + where ;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct *" + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(Store.class, sql, parameters.toArray()));
		return list;
	}

	@Override
	public Store getStoreByStoreId(long storeId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_store where id=?";
		Store store = esql.query(Store.class, sql, storeId);
		return store;
	}

	@Override
	public void updateStoreById(long storeId, Store store) throws Exception {
		// TODO Auto-generated method stub
		String sql = "update t_store set store_name= ?,store_code= ?,store_location= ?,store_content= ?,store_imgUrl= ? where id = ?";
		esql.update(sql,store.getStoreName(),store.getStoreCode(),store.getStoreLocation(),store.getStoreContent(),store.getStoreImgurl(),storeId);
	}

	@Override
	public void deleteStoreById(long storeId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "delete from t_store where id = ?";
		esql.update(sql,storeId);
	}

	@Override
	public long getHotelCodeByHotelId(long hotelId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select hotel_code from t_hotel where id = ?  " ;
		return esql.query(Long.class, sql, hotelId);
	}

	@Override
	public HotelInfoSeter getHotelInfoSeter(long hotelId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_hotel_info_seter where hotel_id=?";
		HotelInfoSeter hotelInfoSeter = esql.query(HotelInfoSeter.class, sql, hotelId);
		return hotelInfoSeter;
	}

	@Override
	public void updateHotelInfoSeter(HotelInfoSeter hotelInfoSeter)
			throws Exception {
		esql.helper().update(hotelInfoSeter, "t_hotel_info_seter", "", "id,set_name,set_position,set_tel,set_mobile,set_email,set_wechat,set_qq", "id=?", hotelInfoSeter.getId());
		
	}

	@Override
	public long getHotelInfoSeterIdByAccountId(long accountId) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select id from t_hotel_info_seter where account_id = ?  " ;
		return esql.query(Long.class, sql, accountId);
		

	}

	@Override
	public PagedList<Member> listHotelMember(int offset, int limit)
			throws Exception {
		PagedList<Member> list = new PagedList<Member>();
		List<Object> parameters = new ArrayList<Object>();
		String from = "from t_member";
		String where = "";
		String sql = "select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));
		sql = "select distinct * " + from + where;
		list.setData(esql.list(Member.class, sql, parameters.toArray()));
		return list;
	}

	@Override
	public Member getMemberBymemberId(long memberId) throws Exception {
		// TODO Auto-generated method stub
		String sql ="select * from t_member where id = ? ";
		return esql.query(Member.class,sql, memberId);
	}

	@Override
	public void updateMemberBymemberId(Member memberAccount) throws Exception {
		// TODO Auto-generated method stub
		//System.out.println(memberAccount.getId());
		//esql.helper().update(memberAccount, "t_member", "", "id,account_id,name,mem_type,company_name,company_job,sex, qq,hotel_name,mem_level,mem_num,point_status,phone,certificate,cer_num,email, wechat, dob",  "id=?", memberAccount.getId());
		String sql = "update t_member set account_id= ?,name= ?,login_type= ?,company_name= ?,company_job= ?,sex= ?,qq= ?,hotel_name= ?,mem_level= ?,mem_num= ?,point_status= ?,phone= ?,certificate= ?,cer_num= ?,wechat= ?,dob = ? where id = ?";
		esql.update(sql,memberAccount.getAccountId(),memberAccount.getName(),memberAccount.getLoginType(),memberAccount.getCompanyName(),memberAccount.getCompanyJob(),memberAccount.getSex(),memberAccount.getQq(),memberAccount.getHotelName(),memberAccount.getMemLevel(),memberAccount.getMemNum(),memberAccount.getPointStatus(),memberAccount.getPhone(),memberAccount.getCertificate(),memberAccount.getCerNum(),memberAccount.getWechat(),memberAccount.getDob(),memberAccount.getId());

	}

	@Override
	public PagedList<MemberBookingBanquet> listMemberBookingBanquetByDate(
			String date, long hotelId, int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<MemberBookingBanquet> list = new PagedList<MemberBookingBanquet>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_member_booking_banquet st";
		String order = " order by st.id offset ? limit ?";
		//String where = " where st.hotel_id = ? ";
		String where = " where st.hotel_id = ? AND ? BETWEEN st.start_date AND st.end_date";
		parameters.add(hotelId);
       parameters.add(date);
		String sql = "select count(distinct st.id) " + from + where ;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		//sql = "select distinct *" + from + where ;
		sql = "select distinct *" + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(MemberBookingBanquet.class, sql, parameters.toArray()));
		return list;
		
		
	}

	@Override
	public PagedList<MemberBookingRoom> listMemberBookingRoomByDate(
			String date, long hotelId, int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<MemberBookingRoom> list = new PagedList<MemberBookingRoom>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_member_booking_room st";
		String order = " order by st.id offset ? limit ?";
		//String where = " where st.hotel_id = ? ";
		String where = " where st.hotel_id = ? AND ? BETWEEN st.arrive_time AND st.leave_time";
		parameters.add(hotelId);
       parameters.add(date);
		String sql = "select count(distinct st.id) " + from + where ;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		//sql = "select distinct *" + from + where ;
		sql = "select distinct *" + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(MemberBookingRoom.class, sql, parameters.toArray()));
		return list;
		
	}

	@Override
	public String getLoginTypeByMemberId(long memberId) throws Exception {
		// TODO Auto-generated method stub
		
		String sql = "select login_type from t_member where id = ?";
		return esql.query(String.class, sql, memberId);
		
	}

	@Override
	public MemberBookingBanquet getMemberBookingBanquetById(long id)
			throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_member_booking_banquet where id = ?";
		return esql.query(MemberBookingBanquet.class, sql, id);
	}

	@Override
	public void updateMemberBookingBanquetById(long id,
			MemberBookingBanquet memberBookingBanquet) throws Exception {
		// TODO Auto-generated method stub
		String sql = "update t_member_booking_banquet set start_date = ?,end_date= ?,book_name= ?,book_banquet_phone= ?,use_type= ?,people_num= ?,book_banquet_name= ?,price= ?,book_banquet_cer_type= ?,book_banquet_cer_number= ?,tips= ?,state= ? where id = ?";
		esql.update(sql,memberBookingBanquet.getStartDate(),memberBookingBanquet.getEndDate(),memberBookingBanquet.getBookName(),memberBookingBanquet.getBookBanquetPhone(),memberBookingBanquet.getUseType(),memberBookingBanquet.getPeopleNum(),memberBookingBanquet.getBookBanquetName(),memberBookingBanquet.getPrice(),memberBookingBanquet.getBookBanquetCerType(),memberBookingBanquet.getBookBanquetCerNumber(),memberBookingBanquet.getTips(),memberBookingBanquet.getState(),id);
	}

	@Override
	public MemberBookingRoom getMemberBookingRoomById(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_member_booking_room where id = ?";
		return esql.query(MemberBookingRoom.class, sql, id);
	}

	@Override
	public void updateMemberBookingRoomById(long id,
			MemberBookingRoom memberBookingRoom) throws Exception {
		// TODO Auto-generated method stub
		
		String sql ="update t_member_booking_room set book_name = ?,book_phone = ?,room_num = ?,person_num= ? ,rate = ?,book_cer_type = ?,book_cer_number = ?,tips = ?,status = ? where id = ?";
		esql.update(sql,memberBookingRoom.getBookName(),memberBookingRoom.getBookPhone(),memberBookingRoom.getRoomNum(),memberBookingRoom.getPersonNum(),memberBookingRoom.getRate(),memberBookingRoom.getBookCerType(),memberBookingRoom.getBookCerNumber(),memberBookingRoom.getTips(),memberBookingRoom.getStatus(),id);
	}	

	
	/*
	 *author:zhengjunwei
	 * 
	*/
	public List<Hotel>  getResaurantBarsForEnquiry (String province,String city,String hotelCounty,double price,long roomNum,
			long adultNum ) throws Exception {
		
		List<Hotel> listB = new ArrayList<Hotel>();
		List<Hotel> listA = new ArrayList<Hotel>();
	
		List<Object> parameters = new ArrayList<Object>();
		
		parameters.add(province);
		parameters.add(city);
		parameters.add(hotelCounty);
		parameters.add(roomNum);

		
		String sql ="select id,cname,region,country,province,city,hotel_county,post_as,telephone,fax,email from (select hotel_id,count(id)as resaurant_sum from t_resaurant_bars_info group by hotel_id) AS TSUM join t_hotel on TSUM.hotel_id=t_hotel.id where province=? and city = ? and hotel_county=? and resaurant_sum >= ?";
		listB=esql.list(Hotel.class, sql, parameters.toArray());
		
		
		 
		for(int i=0;i<listB.size();i++){
			
			List<ResaurantBarsInfo> listRba = new ArrayList<ResaurantBarsInfo>();
			
			List<Object> params = new ArrayList<Object>();
			params.add(listB.get(i).getId());

			String Ssql="select id,hotel_id,rba_name,rba_location,rba_price,rba_box_contain from t_resaurant_bars_info where hotel_id=? order by rba_price asc, rba_box_contain desc ";
			listRba=esql.list(ResaurantBarsInfo.class, Ssql, params.toArray());
           			
		
			int listRbaLength=listRba.size();
			
			
			
			for(int j=0;j<=(listRbaLength-roomNum);j++){
				
				long containSum=0;
				long priceSum=0;
				
				for(int k=j;k<(j+roomNum);k++){
					
				       containSum=containSum + Integer.parseInt(listRba.get(k).getRbaBoxContain());
				       priceSum=priceSum + listRba.get(k).getRbaPrice();
				       
				    }
				    
				 if( priceSum<=price  && containSum>=adultNum) {
					 
					 listB.get(i).setHotelPrice(priceSum);
					 listA.add(listB.get(i));
                     break;				 		 
					 }
				}
			
		}
		
		return listA;
		
	}
	

	
	 public List<Hotel>  getBanquetForEnquiry (String province,String city,String hotelCounty,double price,long roomNum ,
		      long adultNum) throws Exception {
			
		
		List<Hotel> listB = new ArrayList<Hotel>();
		List<Hotel> listA = new ArrayList<Hotel>();

		List<Object> parameters = new ArrayList<Object>();
		
		parameters.add(province);
		parameters.add(city);
		parameters.add(hotelCounty);
		parameters.add(roomNum);
		
	   // double avgPrice=price/roomNum;
		
		String sql ="select id,cname,region,country,province,city,hotel_county,post_as,telephone,fax,email from (select hotel_id,count(id)as banquet_sum from t_banquet_info group by hotel_id) AS TSUM join t_hotel on TSUM.hotel_id=t_hotel.id where province=? and city = ? and hotel_county=? and banquet_sum >= ?";
		listB=esql.list(Hotel.class, sql, parameters.toArray());
		
		 
		for(int i=0;i<listB.size();i++){
			
			List<BanquetInfo> listRba = new ArrayList<BanquetInfo>();
			
			List<Object> params = new ArrayList<Object>();
			params.add(listB.get(i).getId());
		
			String Ssql="select TB.id,TB.hotel_id,ban_name,ban_location,ban_contain,banp_price AS banq_price from t_banquet_info AS TB join t_banquet_price AS TP on TB.id=TP.id where TB.hotel_id=?  order by banp_price asc, ban_contain desc ";
			listRba=esql.list(BanquetInfo.class, Ssql, params.toArray());
			
		
			int listRbaLength=listRba.size();
			
			
			for(int j=0;j<=(listRbaLength-roomNum);j++){
				
				
				
				long containSum=0;
				long priceSum=0;
				
				for(int k=j;k<(j+roomNum);k++){
					
				       containSum=containSum + Integer.parseInt(listRba.get(k).getBanContain());
				       priceSum=priceSum + listRba.get(k).getBanqPrice();
				       
				    }
				    
				 if( priceSum<=price  && containSum>=adultNum) {
					 
					 listB.get(i).setHotelPrice(priceSum);
					 listA.add(listB.get(i));
                     break;				 		 
					 }
				}	
		}
		
		return listA;
		
		}
	
	
	 public HotelManager getHotelManagerByHotelId(long hotelId)throws Exception{
	    	
	    	String sql="select * from t_hotel_manager where hotel_id=?";
	        
	    	HotelManager hotelManager=esql.query(HotelManager.class, sql, hotelId);
	    	
	    	return hotelManager;
	    }
	
	
}
