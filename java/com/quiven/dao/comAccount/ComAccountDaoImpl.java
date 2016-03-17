package com.quiven.dao.comAccount;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.entity.comAccount.ComAccountActivityLog;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.entity.comAccount.ComAccountBookBanquet;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.entity.comAccount.ComAccountContact;
import com.quiven.entity.comAccount.ComAccountTalentAnalysis;
import com.quiven.entity.comAccount.Saler;
import com.quiven.entity.hotel.BanquetInfo;

public class ComAccountDaoImpl extends BaseDao implements 	ComAccountDao, PostgreSQL {

	public long addComAccount(long salerId,ComAccount comAccount) throws Exception {

		String sql = "select t_com_account.cname from t_com_account where t_com_account.cname = ?";
		Long id = esql.query(Long.class, sql, comAccount.getCname());
		if(id != null)
		{
			return 0;
		}
		sql = " insert into t_com_account (cname,saler_id,address_1,address_2,address_3,city,province,country,comtype_id,com_account_code,postal,market_segment_id,web_address,com_telphone,com_fax,com_email,com_wechat,com_frequency,keynotes ) "
				+ "values(?,?,?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql,comAccount.getCname(),salerId,comAccount
				.getAddress1(),comAccount.getAddress2(),comAccount.getAddress3(),comAccount.getCity(),comAccount.getProvince(),
				comAccount.getCountry(),comAccount.getComtypeId(),comAccount.getComAccountCode()
				,comAccount.getPostal(),comAccount.getMarketSegmentId(),comAccount.getWebAddress(),comAccount.getComTelphone(),comAccount.getComFax(),comAccount.getComEmail(),comAccount.getComWechat(),comAccount.getComFrequency(),comAccount.getKeynotes());
		return getGeneratedId("t_com_account");
	}
	
	public ComAccount getComAccountById(long id) throws Exception {
		String sql = "select * from t_com_account where id = ?";
		ComAccount comAccount = esql.query(ComAccount.class, sql,id);
		return comAccount;
	}

	public ComAccount getComAccountByEglishName(String name)throws Exception {
		String sql = "select t_com_account.name from t_com_account where t_com_account.name = ?";
		ComAccount comAccount = esql.query(ComAccount.class, sql, name); 
		return comAccount;
	}

	public List<ComAccount> getComAccountByChineseName(String secondaryName)throws Exception {
		String sql = "select * from t_com_account where t_com_account.seccondary_name = ?";

		return esql.list(ComAccount.class, sql, secondaryName);
	}

	public List<ComAccount> getComAccountByCity(String city) throws Exception {
		String sql = "select * from t_com_account where t_com_account.city = ?";

		return esql.list(ComAccount.class, sql, city);
	}

	public List<ComAccount> getComAccountByCountry(String country)
			throws Exception {
		String sql = "select * from t_com_account where t_com_account.country = ?";

		return esql.list(ComAccount.class, sql, country);
	}

	public List<ComAccount> getComAccountByProvince(String province)
			throws Exception {
		String sql = "select * from t_com_account where t_com_account.province = ?";

		return esql.list(ComAccount.class, sql, province);
	}

	public PagedList<ComAccountContact> ListAllConnactInfo(long salerId,long comAccountId, int offset, int limit) throws Exception
	{
		PagedList<ComAccountContact> list = new PagedList<ComAccountContact>();
		List<Object> parameters = new ArrayList<Object>(); 
		String from = "from t_com_account_contacts ct";
		String order = " order by ct.id offset ? limit ?";
		String where = " where ct.com_account_id = ?  and saler_Id = ? and enable = true ";

		String sql = "select count(distinct ct.id) " + from + where ;		
		parameters.add(comAccountId);
		parameters.add(salerId);
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));
		sql = "select distinct *" + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(ComAccountContact.class, sql, parameters.toArray()));

		return list;

	}

	public long addComAccountContact(long salerId,long comAccountId,ComAccountContact comAccountContact)
			throws Exception {
		String sql = "insert into t_com_account_contacts(saler_id,com_account_id,retired,com_contact_name,com_contact_position,com_contact_tel,com_contact_mobile,com_contact_email,com_contact_fax,com_contact_skype,com_contact_webchat,com_contact_qq,dob,spouse)"
				+ " values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql,salerId,comAccountId,comAccountContact.isRetired(),comAccountContact.getComContactName(),comAccountContact.getComContactPosition()
				,comAccountContact.getComContactTel(),comAccountContact.getComContactMobile(),comAccountContact.getComContactEmail(),comAccountContact.getComContactFax()
				,comAccountContact.getComContactSkype(),comAccountContact.getComContactWebchat(),comAccountContact.getComContactQq(),comAccountContact.getDob(),comAccountContact.getSpouse());
		return getGeneratedId("t_com_account_contacts");
	}

	public PagedList<ComAccount> listComAccount(long salerId, int offset, int limit) throws Exception 
	{


		PagedList<ComAccount> list = new PagedList<ComAccount>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_com_account ct";
		String order = " order by ct.id offset ? limit ?";
		String where = " where ct.saler_id = ? and ct.enable = true ";
		parameters.add(salerId);

		String sql = "select count(distinct ct.id) " + from + where ;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct *" + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(ComAccount.class, sql, parameters.toArray()));
		return list;
	}
	public List<ComAccount> listComAccount(long salerId) throws Exception
	{
		List<ComAccount> list = new ArrayList<ComAccount>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_com_account ct";
		String where = " where ct.saler_id = ? and enable = true ";
		parameters.add(salerId);

		String sql = "select distinct *" + from + where;
		list = esql.list(ComAccount.class, sql, parameters.toArray());
		return list;
	}
	public long getSalerIdByAccountId(long accountId) throws Exception
	{
		String sql = "select id from t_saler where account_id = ?  " ;
		return esql.query(Long.class, sql, accountId);
	}

	public ComAccount getComAccountByIdAndSalerId(long salerId,long comAccountId) throws Exception
	{
		String sql = "select * from t_com_account where saler_id = ? and id = ? " ;
		return esql.query(ComAccount.class, sql, salerId,comAccountId);
	}

	public ComAccountContact getComAccountContactById(long comAccountContactId) throws Exception
	{
		String sql = "select * from t_com_account_contacts where id = ? ";
		return esql.query(ComAccountContact.class, sql, comAccountContactId);
	}

	

	public PagedList<ComAccountActivityPlan> listContactAcivity(long salerId,long comAccountId, int offset, int limit) throws Exception
	{
		PagedList<ComAccountActivityPlan> list = new PagedList<ComAccountActivityPlan>();
		List<Object> parameters = new ArrayList<Object>();
		String from =" from t_com_account_activity_plan ";
		String order=" order by id offset ? limit ?";
		String where = " where com_account_id = ? and saler_id = ? ";
		parameters.add(comAccountId);
		parameters.add(salerId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(ComAccountActivityPlan.class, sql, parameters.toArray()));
		return list;

	}

	public PagedList<ComAccountBookRoom> listBooking(long salerId,long comAccountId, int offset, int limit) throws Exception
	{
		PagedList<ComAccountBookRoom> list = new PagedList<ComAccountBookRoom>();
		List<Object> parameters = new ArrayList<Object>();
		String from ="from t_com_account_booking_room ";
		String order=" order by id offset ? limit ?";
		String where = " where com_account_id = ? and saler_id = ? and enable = true ";
		parameters.add(comAccountId);
		parameters.add(salerId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(ComAccountBookRoom.class, sql, parameters.toArray()));
		return list;

	}
 
	//将公司的信息通过enable隐藏
	public void deleteComAccountById(long comAccountId) throws Exception
	{
		String sql = "update t_com_account set enable = false where id = ?";
		esql.update(sql,comAccountId);
	}
	
	public void updateComAccountById(long comAccountId,ComAccount comAccount) throws Exception
	{
//		esql.helper().update(comAccount, "t_com_account", "", "id", "id=?", comAccountId);
		String sql = "update t_com_account set cname = ?,address_1 = ?,address_2=?,address_3=?,city=?,province=?,country=?,comtype_id=?,postal=?,market_segment_id=?,web_address=?,com_telphone=?,com_fax=?,com_email=?,com_wechat=?,com_frequency=?,keynotes=? where id = ?";
		esql.update(sql,comAccount.getCname(),comAccount.getAddress1(),
				comAccount.getAddress2(),comAccount.getAddress3(),comAccount.getCity(),
				comAccount.getProvince(),comAccount.getCountry(),comAccount.getComtypeId(),
				comAccount.getPostal(),comAccount.getMarketSegmentId(),
				comAccount.getWebAddress(),comAccount.getComTelphone(),comAccount.getComFax(),
				comAccount.getComEmail(),comAccount.getComWechat(),comAccount.getComFrequency(),
				comAccount.getKeynotes(),comAccountId);
	}
	
	public void deleteComAccountContact(long comAccountContactsId) throws Exception
	{
		String sql = "update t_com_account_contacts set enable = false where id = ?";
		esql.update(sql, comAccountContactsId);
	}

	
	public  Saler getSalerBySalerId(long salerId) throws Exception {
		
		String sql = "select * from t_saler where id = ?";
		Saler saler =  esql.query(Saler.class, sql, salerId);
		return saler;
	}

	
	public void updateComAccountContactById(long comAccountContactId, ComAccountContact comAccountContact) throws Exception {
		
		String sql = "update t_com_account_contacts set com_contact_name=?,com_contact_position=?,com_contact_tel=?,com_contact_mobile=?,com_contact_email=?,com_contact_fax=?,com_contact_skype=?,com_contact_webchat=?,com_contact_qq=?,dob=?,spouse=?,retired=? where id=?";
		esql.update(sql, comAccountContact.getComContactName(),comAccountContact.getComContactPosition(),comAccountContact.getComContactTel(),comAccountContact.getComContactMobile()
				,comAccountContact.getComContactEmail(),comAccountContact.getComContactFax(),comAccountContact.getComContactSkype(),comAccountContact.getComContactWebchat(),comAccountContact.getComContactQq()
				,comAccountContact.getDob(),comAccountContact.getSpouse(),comAccountContact.isRetired(),comAccountContactId);
	}


	public PagedList<ComAccountBookBanquet> listBookingBanquet(long salerId, long comAccountId, int offset, int limit) throws Exception
	{
		PagedList<ComAccountBookBanquet> list = new PagedList<ComAccountBookBanquet>();
		List<Object> parameters = new ArrayList<Object>();
		String from ="from t_com_account_booking_banquet ";
		String order=" order by id offset ? limit ?";
		String where = " where com_account_id = ? and saler_id =? and enable = true";
		parameters.add(comAccountId);
		parameters.add(salerId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(ComAccountBookBanquet.class, sql, parameters.toArray()));
		return list;
	
	}

	
	public long addActivity(long salerId, long ComAccountId,ComAccountActivityPlan comAccountActivityPlan) throws Exception {
		String sql = "insert into t_com_account_activity_plan (saler_id,com_account_id ,activity_person, activity_date,activity_time ,activity_description, activity_address, cost, outcome,retonin)"
				+ "values(?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql, salerId,ComAccountId,comAccountActivityPlan.getActivityPerson(),comAccountActivityPlan.getActivityDate(),comAccountActivityPlan.getActivityTime(),comAccountActivityPlan.getActivityDescription(),comAccountActivityPlan.getActivityAddress(),comAccountActivityPlan.getCost(),comAccountActivityPlan.getOutcome(),comAccountActivityPlan.getRetonin());
		
		return getGeneratedId("t_com_account_activity_plan");
	}


	public void updateActivity(long comAccountActivityPlanId,ComAccountActivityPlan comAccountActivityPlan) throws Exception {
		
		String sql = "update t_com_account_activity_plan set activity_time=?, activity_person = ?,activity_date = ?,activity_description = ?,activity_address=?, cost=?,outcome =?,retonin = ? where id = ?";
		esql.update(sql,comAccountActivityPlan.getActivityTime(),comAccountActivityPlan.getActivityPerson(),comAccountActivityPlan.getActivityDate(),comAccountActivityPlan.getActivityDescription(),comAccountActivityPlan.getActivityAddress(),comAccountActivityPlan.getCost(),comAccountActivityPlan.getOutcome(),comAccountActivityPlan.getRetonin(),comAccountActivityPlanId);
		
	}
	
	public void deleteActivity(long comAccountActivityPlanId) throws Exception
	{
		String sql = "delete from t_com_account_activity_plan where id = ?";
		esql.update(sql,comAccountActivityPlanId );
	}

	
	public ComAccountActivityPlan getComAccountActivityById( long comAccountActivityPlanId) throws Exception {
		String sql = "select * from t_com_account_activity_plan where id = ?";
		return esql.query(ComAccountActivityPlan.class, sql, comAccountActivityPlanId);		
	}


	public BanquetInfo getBanquetById(long BanquetId)throws Exception {
		String sql = "select * from t_banquet_info where id = ?";
		return esql.query(BanquetInfo.class, sql, BanquetId);
	}


	public void updateRoom(long comAccountRoomId,ComAccountBookRoom comAccountBookRoom) throws Exception {
		String sql = "update t_com_account_booking_room set room_num=?,room_arrive=?,room_depart=?,room_comps=?,room_res_id=?,room_book_type=?,room_status=?,room_avg_rate=?,room_type=?,room_cutoff=?,room_house_mthd=?,room_comm=?,market_seg=?,room_confirmation=?";
		esql.update(sql, comAccountBookRoom.getRoomNum(),comAccountBookRoom.getRoomArrive(),comAccountBookRoom.getRoomDepart(),comAccountBookRoom.getRoomComps(),
				comAccountBookRoom.getRoomResId(),comAccountBookRoom.getRoomBookType(),comAccountBookRoom.getRoomStatus(),comAccountBookRoom.getRoomAvgRate(),comAccountBookRoom.getRoomType(),comAccountBookRoom.getRoomCutoff(),comAccountBookRoom.getRoomHouseMthd(),
				comAccountBookRoom.getRoomComm(),comAccountBookRoom.getMarketSeg(),comAccountBookRoom.isRoomConfirmation());
		
	}


	public ComAccountBookRoom getComBookRoomById(long comAccountRoomId) throws Exception {
		String sql = "select * from t_com_account_booking_room where id = ?";
		return esql.query(ComAccountBookRoom.class, sql, comAccountRoomId);
	}

	
	public void deleteRoomBooking(long RoomBookingId) throws Exception {
		String sql = "update t_com_account_booking_room set enable = false where id = ?";
		esql.update(sql, RoomBookingId);		
	}


	public ComAccountBookBanquet getComBookBanquetById(long comAccountBanquetId)throws Exception {
		String sql ="select * from t_com_account_booking_banquet where id = ?";
		return esql.query(ComAccountBookBanquet.class, sql, comAccountBanquetId);
	}

	
	public void updateBanquet(long comAccountBanquetId,ComAccountBookBanquet comAccountBookBanquet) throws Exception {
		String sql ="update t_com_account_booking_banquet set banquet_contact_name=?,banquet_book_type=?,banquet_arrive=?,banquet_depart=?,banquet_res_id=?,banquet_status=?,banquet_rate=?,banquet_booking_num=?,banquet_cutoff=?,banquet_confirmation=? where id = ?";
		esql.update(sql, comAccountBookBanquet.getBanquetContactName(),comAccountBookBanquet.getBanquetBookType(),comAccountBookBanquet.getBanquetArrive(),comAccountBookBanquet.getBanquetDepart(),comAccountBookBanquet.getBanquetResId(),
				comAccountBookBanquet.getBanquetStatus(),comAccountBookBanquet.getBanquetRate(),comAccountBookBanquet.getBanquetBookingNum(),comAccountBookBanquet.getBanquetCutoff(),comAccountBookBanquet.isBanquetConfirmation(),comAccountBanquetId);
		
	}

	
	public void deleteBanquetBooking(long BanquetBookingId) throws Exception {	
		String sql = "update t_com_account_booking_banquet set enable = false where id = ?";
		esql.update(sql, BanquetBookingId);
	}


	public long addBookRoom(ComAccountBookRoom comAccountBookRoom) throws Exception {
		esql.helper().insert(comAccountBookRoom, "t_com_account_booking_room", "", "id,enable");
		long bookroomID = getGeneratedId("t_com_account_booking_room");
		return bookroomID;
	}

	
	public long getHotelIdBySalerId(long salerId) throws Exception {
		String sql = "select hotel_id from t_saler where id = ?";
		return esql.query(Long.class, sql, salerId);
	}

	
	public long addBookBanquet(ComAccountBookBanquet comAccountBanquet) throws Exception {		
		esql.helper().insert(comAccountBanquet, "t_com_account_booking_banquet", "", "id,enable");
		long bookbanquetId = getGeneratedId("t_com_account_booking_banquet");
		return bookbanquetId;
	
	}
	
	public void updateSaler(Saler saler) throws Exception {
	
		esql.helper().update(saler, "t_saler", "", "id,level,account_id,leader_id,hotel_id,market_id", "id=?", saler.getId());
	}


	public PagedList<ComAccountActivityLog> listActivityLog(long salerId,int offset, int limit) throws Exception {
		
		PagedList<ComAccountActivityLog> list = new PagedList<ComAccountActivityLog>();
		List<Object> parameters = new ArrayList<Object>();
		String from ="from t_com_account_activity_log";
		String order=" order by id offset ? limit ?";
		String where = " where saler_id in (select id from t_saler where leader_id = ?)";
		parameters.add(salerId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(ComAccountActivityLog.class, sql, parameters.toArray()));
		return list;
	
	}


	public PagedList<Saler> listSaler(long salerId, int offset, int limit)throws Exception {
		
		PagedList<Saler> list = new PagedList<Saler>();
		List<Object> parameters = new ArrayList<Object>();
		String from ="from t_saler";
		String order=" order by id offset ? limit ?";
		String where = " where leader_id = ?";
		parameters.add(salerId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(Saler.class, sql, parameters.toArray()));
		return list;
	}

	
	public List<ComAccountContact> ListComAccountContact(long salerId) throws Exception {
		
		List<ComAccountContact> list = new ArrayList<ComAccountContact>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_com_account_contacts";
		String where = " where saler_id = ? and enable = true ";
		parameters.add(salerId);

		String sql = "select distinct *" + from + where;
		list = esql.list(ComAccountContact.class, sql, parameters.toArray());
		return list;
	
	}

	
	public List<ComAccountActivityLog> listComAccountActivitylog(long salerId) throws Exception {
		
		List<ComAccountActivityLog> list = new ArrayList<ComAccountActivityLog>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_com_account_activity_log";
		String where = " where saler_id = ?";
		parameters.add(salerId);

		String sql = "select distinct *" + from + where;
		list = esql.list(ComAccountActivityLog.class, sql, parameters.toArray());
		return list;
	}


	public String getSalerNamebyId(long salerId) throws Exception {
		
		String sql = "select name from t_saler where id = ?";
		return esql.query(String.class, sql, salerId);
	}


	public List<ComAccountActivityPlan> listComAccountActivityPlan(long salerId) throws Exception {
		List<ComAccountActivityPlan> list = new ArrayList<ComAccountActivityPlan>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_com_account_activity_plan";
		String where = " where saler_id = ?";
		parameters.add(salerId);

		String sql = "select distinct *" + from + where;
		list = esql.list(ComAccountActivityPlan.class, sql, parameters.toArray());
		return list;
	}


	public String getCompanyNameBySalerId(long comAccountId) throws Exception {
		
		String sql = "select cname from t_com_account where id = ?";
		
		return esql.query(String.class, sql, comAccountId);
	}

	
	public String getHotelNameById(long hotelId) throws Exception {
		
		String sql = "select cname from t_hotel where id = ?";
		
		return esql.query(String.class, sql, hotelId);
	}

	
	public PagedList<ComAccountActivityPlan> listActivityPlan(long salerId,int offset, int limit) throws Exception {
		
		PagedList<ComAccountActivityPlan> list = new PagedList<ComAccountActivityPlan>();
		List<Object> parameters = new ArrayList<Object>();
		String from ="from t_com_account_activity_plan";
		String order=" order by id offset ? limit ?";
		String where = " where saler_id = ?";
		
		parameters.add(salerId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(ComAccountActivityPlan.class, sql, parameters.toArray()));
		return list;
		
	
	}


	public ComAccountActivityLog getComAccountActivityLog(long comAccountActivityLogId) throws Exception {
		
		String sql = "select * from t_com_account_activity_log where id = ?";
		
		return esql.query(ComAccountActivityLog.class, sql, comAccountActivityLogId);
	}

	
	public void updateReviewsById(long comAccountActivityLogId,String reviews) throws Exception {
	
		String sql = "update t_com_account_activity_log set reviews = ? where id= ?";
		esql.update(sql, reviews,comAccountActivityLogId);
	}


	public PagedList<ComAccountActivityPlan> listActivityTime(long salerId) throws Exception {
		
		PagedList<ComAccountActivityPlan> list = new PagedList<ComAccountActivityPlan>();
		List<Object> parameters = new ArrayList<Object>();
		String from ="from t_com_account_activity_plan";
		
		String where = " where saler_id = ?";
		parameters.add(salerId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where;
		list.setData(esql.list(ComAccountActivityPlan.class, sql, parameters.toArray()));
		return list;
		
	
	}

	public void updateActivityTime(long id,String activityDate,Date activityTime)throws Exception{
		String sql ="UPDATE t_com_account_activity_plan SET activity_date = ? WHERE id= ?";
		esql.update(sql, activityDate , id);	
		sql ="UPDATE t_com_account_activity_plan SET activity_time = ? WHERE id= ?";
		esql.update(sql, activityTime, id);
	}

	
	public long getCoreAccountCount(long salerId) throws Exception {
		
		String sql = "select count(id) from t_com_account where saler_id = ? and comtype_id = 1";
		
		return esql.query(Long.class, sql, salerId);
	}

	
	public long getNicheAccountCount(long salerId) throws Exception {
		
		String sql = "select count(id) from t_com_account where saler_id = ? and comtype_id = 3";
		
		return esql.query(Long.class, sql, salerId);
	}

	
	public long getProspAccountCount(long salerId) throws Exception {
		
		String sql = "select count(id) from t_com_account where saler_id = ? and comtype_id = 2";
		
		return esql.query(Long.class, sql, salerId);
	}

	
	public long getSuspeAccountCount(long salerId) throws Exception {
		
		String sql = "select count(id) from t_com_account where saler_id = ? and comtype_id = 4";
		
		return esql.query(Long.class, sql, salerId);
	}
	
	public List<String> listCompanyName(long salerId) throws Exception {
		List<String> list = new ArrayList<String>();
		List<Object> parameters = new ArrayList<Object>();
		String from = " from  t_com_account";
		String where = " where saler_id = ?";
		parameters.add(salerId);

		String sql = "select cname" + from + where;
		list = esql.list(String.class, sql, parameters.toArray());
		return list;
	}

	
	public long addActivityByComPanyName(long salerId, String ComAccountName,ComAccountActivityPlan comAccountActivityPlan) throws Exception {
		String sql = "select id from t_com_account where cname = ?";
		long comAccountId = esql.query(Long.class, sql, ComAccountName);
		
		 sql = "insert into t_com_account_activity_plan (saler_id,com_account_id ,activity_person, activity_date,activity_time ,activity_description, activity_address, cost, outcome,retonin)"
					+ "values(?,?,?,?,?,?,?,?,?,?)";
			esql.update(sql, salerId,comAccountId,comAccountActivityPlan.getActivityPerson(),comAccountActivityPlan.getActivityDate(),comAccountActivityPlan.getActivityTime(),comAccountActivityPlan.getActivityDescription(),comAccountActivityPlan.getActivityAddress(),comAccountActivityPlan.getCost(),comAccountActivityPlan.getOutcome(),comAccountActivityPlan.getRetonin());
			
			return getGeneratedId("t_com_account_activity_plan");
	}

	
	public void updateComAccountTalent(long salerId, long comAccountId,String comAccountType) throws Exception {
	
		String sql = " select id from t_com_account_type where comtype = ?";
		long comtypeId = esql.query(Long.class, sql, comAccountType);
		sql = "update t_com_account set comtype_id = ? where saler_id = ? and id = ?";
		esql.update(sql, comtypeId, salerId,comAccountId);
		
	}

	
	public long addComAccountTalentAnalysis(long salerId, long comAccountId,ComAccountTalentAnalysis comAccountTalentAnalysis) throws Exception {
	
		String sql = "insert into t_com_account_talent_analysis (saler_id,com_account_id,potential_room_nights,rate_tolerance,  company_profile,users_profile,  avg_lengthof_stay, room_mix ,business_mix,willingnessto_tryourhotel, abilitytofulfillclientrequirements, term_contract, locationof_office,paymentterms, totalscore)"
				+"values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql, salerId,comAccountId,comAccountTalentAnalysis.getPotentialRoomNights(),comAccountTalentAnalysis.getRateTolerance(),comAccountTalentAnalysis.getCompanyProfile(),comAccountTalentAnalysis.getUsersProfile(),comAccountTalentAnalysis.getAvgLengthofStay(),comAccountTalentAnalysis.getRoomMix(),comAccountTalentAnalysis.getBusinessMix(),comAccountTalentAnalysis.getWillingnesstoTryourhotel(),comAccountTalentAnalysis.getAbilitytofulfillclientrequirements(),comAccountTalentAnalysis.getTermContract(),comAccountTalentAnalysis.getLocationofOffice(),comAccountTalentAnalysis.getPaymentterms(),comAccountTalentAnalysis.getTotalscore());
		
		return getGeneratedId("t_com_account_talent_analysis");
		
	}


	public ComAccountTalentAnalysis getComAccountTalentAnalysis(long salerId, long comAccountId) throws Exception {
		
		String sql = "select * from t_com_account_talent_analysis where saler_id = ? and com_account_id = ? ";
		ComAccountTalentAnalysis comAccountTalentAnalysis = esql.query(ComAccountTalentAnalysis.class, sql, salerId,comAccountId);
		return comAccountTalentAnalysis;
	}

	
	public long getCoreBookingRoomAtMoth(long salerId) throws Exception {

		String sql = "select count(*) from t_com_account_booking_room tb,t_com_account ta  where date_part('month',tb.room_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 1 and tb.saler_id = ? ";
		return esql.query(Long.class, sql, salerId);
	}

	
	public long getNicheBookingRoomAtMoth(long salerId) throws Exception {
		String sql = "select count(*) from t_com_account_booking_room tb,t_com_account ta  where date_part('month',tb.room_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 3 and tb.saler_id = ? ";
		return esql.query(Long.class, sql, salerId);
	}


	public long getProsBookingRoomAtMoth(long salerId) throws Exception {
		String sql = "select count(*) from t_com_account_booking_room tb,t_com_account ta  where date_part('month',tb.room_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 2 and tb.saler_id = ? ";
		return esql.query(Long.class, sql, salerId);
	}

	
	public long getSuspeBookingRoomAtMoth(long salerId) throws Exception {
		String sql = "select count(*) from t_com_account_booking_room tb,t_com_account ta  where date_part('month',tb.room_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 4 and tb.saler_id = ? ";
		return esql.query(Long.class, sql, salerId);
	}


	public long getCoreBookingBanquetAtMoth(long salerId) throws Exception {

		String sql = "select count(*) from t_com_account_booking_banquet tb,t_com_account ta  where date_part('month',tb.banquet_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 1 and tb.saler_id = ? ";
		return esql.query(Long.class, sql, salerId);
	}

	
	public long getNicheBookingBanquetAtMoth(long salerId) throws Exception {
		String sql = "select count(*) from t_com_account_booking_banquet tb,t_com_account ta  where date_part('month',tb.banquet_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 3 and tb.saler_id = ? ";
		return esql.query(Long.class, sql, salerId);
	}


	public long getProsBookingBanquetAtMoth(long salerId) throws Exception {
		String sql = "select count(*) from t_com_account_booking_banquet tb,t_com_account ta  where date_part('month',tb.banquet_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 2 and tb.saler_id = ? ";
		return esql.query(Long.class, sql, salerId);
	}

	
	public long getSuspeBookingBanquetAtMoth(long salerId) throws Exception {
		String sql = "select count(*) from t_com_account_booking_banquet tb,t_com_account ta  where date_part('month',tb.banquet_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 4 and tb.saler_id = ? ";
		return esql.query(Long.class, sql, salerId);
	}

	
	public double getCoreAccountRoomNightPrice(long salerId) throws Exception {
		String sql = "select avg(room_avg_rate) from t_com_account_booking_room tb,t_com_account ta  where date_part('month',tb.room_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 1 and tb.saler_id = ? ";
		Double avg = esql.query(Double.class, sql, salerId);
		if(avg != null)
		{
			return esql.query(Double.class, sql, salerId);
		}
		else
		{
			return 0;
		}
	}

	public double getNicheAccountRoomNightPrice(long salerId) throws Exception {
		String sql = "select avg(room_avg_rate) from t_com_account_booking_room tb,t_com_account ta  where date_part('month',tb.room_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 3 and tb.saler_id = ? ";
		Double avg = esql.query(Double.class, sql, salerId);
		if(avg != null)
		{
			return esql.query(Double.class, sql, salerId);
		}
		else
		{
			return 0;
		}
		
	}


	public double getProspAccountRoomNightPrice(long salerId) throws Exception {
		String sql = "select avg(room_avg_rate) from t_com_account_booking_room tb,t_com_account ta  where date_part('month',tb.room_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 2 and tb.saler_id = ? ";
		Double avg = esql.query(Double.class, sql, salerId);
		if(avg != null)
		{
			return esql.query(Double.class, sql, salerId);
		}
		else
		{
			return 0;
		}
	}


	public double getSuspectAccountRoomNightPrice(long salerId)	throws Exception {
		String sql = "select avg(room_avg_rate) from t_com_account_booking_room tb,t_com_account ta  where date_part('month',tb.room_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 4 and tb.saler_id = ? ";
		Double avg = esql.query(Double.class, sql, salerId);
		if(avg != null)
		{
			return esql.query(Double.class, sql, salerId);
		}
		else
		{
			return 0;
		}
	}
	
	public long getComAccountBookingRoom(long salerId, long year, long month) throws Exception {
		String sql = "select sum(room_num) from t_com_account_booking_room where saler_id = ? and date_part('year',room_arrive)= ? and date_part('month',room_arrive) = ? ";
		long ComAccountBookingRoom = 0;
		if(esql.query(Long.class, sql, salerId, year , month)!=null){
			ComAccountBookingRoom = esql.query(Long.class, sql, salerId, year , month);
		}
		return ComAccountBookingRoom;
	}

	public long getComAccountBookingBanquet(long salerId, long year, long month) throws Exception {
		String sql = "select count(*) from t_com_account_booking_banquet where saler_id = ? and date_part('year',banquet_arrive)= ? and date_part('month',banquet_arrive)= ? ";
		long ComAccountBookingBanquet = 0;
		if(esql.query(Long.class, sql, salerId, year , month)!=null){
			ComAccountBookingBanquet = esql.query(Long.class, sql, salerId, year , month);
		}
		return ComAccountBookingBanquet;
	}


	public double getCoreAccountBanquetPrice(long salerId) throws Exception {
		
		String sql = "select avg(banquet_rate) from t_com_account_booking_banquet tb,t_com_account ta  where date_part('month',tb.banquet_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 1 and tb.saler_id = ? ";
		Double avg = esql.query(Double.class, sql, salerId);
		if(avg != null)
		{
			return esql.query(Double.class, sql, salerId);
		}
		else
		{
			return 0;
		}

	}


	public double getNicheAccountBanquetPrice(long salerId) throws Exception {
		String sql = "select avg(banquet_rate) from t_com_account_booking_banquet tb,t_com_account ta  where date_part('month',tb.banquet_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 3 and tb.saler_id = ? ";
		Double avg = esql.query(Double.class, sql, salerId);
		if(avg != null)
		{
			return esql.query(Double.class, sql, salerId);
		}
		else
		{
			return 0;
		}
	}


	public double getProspAccountBanquetPrice(long salerId) throws Exception {
		String sql = "select avg(banquet_rate) from t_com_account_booking_banquet tb,t_com_account ta  where date_part('month',tb.banquet_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 2 and tb.saler_id = ? ";
		Double avg = esql.query(Double.class, sql, salerId);
		if(avg != null)
		{
			return esql.query(Double.class, sql, salerId);
		}
		else
		{
			return 0;
		}
	}


	public double getSuspectAccountBanquetPrice(long salerId) throws Exception {
		String sql = "select avg(banquet_rate) from t_com_account_booking_banquet tb,t_com_account ta  where date_part('month',tb.banquet_arrive)=date_part('month',now()) and tb.com_account_id = ta.id and ta.comtype_id = 4 and tb.saler_id = ? ";
		Double avg = esql.query(Double.class, sql, salerId);
		if(avg != null)
		{
			return esql.query(Double.class, sql, salerId);
		}
		else
		{
			return 0;
		}
	}

	@Override
	public String getComAccountTypeByid(long comtypeId) throws Exception {
		String sql = "select comtype from t_com_account_type where id = ?";
		 return esql.query(String.class, sql, comtypeId);
	}
	
	//删除销售人员信息   7月13日   龙敬文
	@Override
	public void deleteSaler(long SalerId) throws Exception {
		// TODO Auto-generated method stub
		String sql="delete from t_saler where id=?";
		esql.update(sql, SalerId);
	}

	@Override
	public void addSaler(Saler salerAccount) throws Exception {
		// TODO Auto-generated method stub
		esql.helper().insert(salerAccount, "t_saler", "", "id");
		
	}

	@Override
	public long getHotelIdByaccountId(long accountId) throws Exception {
		// TODO Auto-generated method stub
		
		String sql="select hotel_id from t_saler where account_id=?";
		long hotelId=esql.query(long.class, sql, accountId);
		return hotelId;
	}

	@Override
	public boolean confirmRoomDateByDate(ComAccountBookRoom comAccountBookRoom)
			throws Exception {
		// TODO Auto-generated method stub
		
		
		String sql = "select id from t_member_booking_room st where st.hotel_id = ? AND st.room_id=? AND ? BETWEEN st.arrive_time AND st.leave_time";
	
		Long id =esql.query(Long.class, sql,comAccountBookRoom.getHotelId(),comAccountBookRoom.getRoomId(),comAccountBookRoom.getRoomArrive() );
	    
		
		if(id==null){
			
			return true;
		}else{
			
			return false;
		}
		
	
		
	}

	@Override
	public boolean confirmBanquertDateByDate(
			ComAccountBookBanquet comAccountBookBanquet) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select id from t_member_booking_banquet st where st.hotel_id = ? AND st.banquet_id=? AND ? BETWEEN st.start_date AND st.end_date";
		
		Long id =esql.query(Long.class, sql,comAccountBookBanquet.getHotelId(),comAccountBookBanquet.getBanquetId(),comAccountBookBanquet.getBanquetArrive() );
	    
		
		if(id==null){
			
			return true;
		}else{
			
			return false;
		}
	}



 


	
}
