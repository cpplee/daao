package com.quiven.dao.book;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.comAccount.ComAccountBookBanquet;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.entity.comAccount.Saler;
import com.quiven.entity.member.MemberBookingBanquet;
import com.quiven.entity.member.MemberBookingRestaurant;
import com.quiven.entity.member.MemberBookingRoom;
import com.quiven.entity.member.MemberBookingStore;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BookDaoPgImpl extends BaseDao implements BookDao, PostgreSQL {

	@Override
	public String addBookRoomInfo(long hotelId, long memberId, String roomType,
			MemberBookingRoom memberBookingRoom) throws Exception {
		// TODO Auto-generated method stub
		// 更改预订用户的证件类型，证件号码，手机号码，名字
		String sql2 = "update t_member set certificate=?,cer_num=?,name=?,phone=? where id=?";
		esql.update(sql2, memberBookingRoom.getBookCerType(),
				memberBookingRoom.getBookCerNumber(),
				memberBookingRoom.getBookName(),
				memberBookingRoom.getBookPhone(), memberId);
		// 获取可预订类型房间的id号
		String sql1 = "select min(id) from t_room where hotel_id=? and type=? ";
		long roomId = esql.query(long.class, sql1, hotelId, roomType);

		String sql7 = "select  min(b.id)  from t_member_booking_room a inner join t_room b on a.room_id=b.id and a.hotel_id=? and b.type=?";
		long roomId2 = esql.query(long.class, sql7, hotelId, roomType);

		// 判断可预订类型的房间数量是否满足预定的数量
		String sql6 = "select count(*) from t_room where hotel_id=? and type=? and state='T'";
		long roomnum = esql.query(long.class, sql6, hotelId, roomType);

		// 判断该时段是否有可预订的餐厅
		DateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		String starttime = dateformat.format(memberBookingRoom.getArriveTime());
		String endtime = dateformat.format(memberBookingRoom.getLeaveTime());
		String sql8 = "select distinct min(b.id)  from t_member_booking_room a inner join t_room b on a.room_id=b.id and a.hotel_id=? and b.type=? and (?<=a.arrive_time or ?>=a.leave_time) and b.id not in (select e.id  from t_member_booking_room d inner join t_room e on d.room_id=e.id and d.hotel_id=? and e.type=? and ((?>=d.arrive_time and ?<d.leave_time) or (?>d.arrive_time and ?<=d.leave_time) or (?<=d.arrive_time and ?>=d.leave_time)))";
		long roomId3 = esql.query(long.class, sql8, hotelId, roomType, endtime,
				starttime, hotelId, roomType, starttime, starttime, endtime,
				endtime, starttime, endtime);

		if (roomId == 0) {
			return "暂无可预订的" + roomType;
		} else if (roomnum < memberBookingRoom.getRoomNum()) {
			return "可预订的" + roomType + "房型数量暂不足"
					+ memberBookingRoom.getRoomNum() + "个,最多可预订" + roomnum;
		} else if (roomId2 == 0) {
			// 执行插入操作
			String sql4 = "insert into t_member_booking_room(hotel_id,member_id,room_id,book_cer_type,book_cer_number,book_name,book_phone,arrive_time,leave_time,person_num,room_num,rate,tips)"
					+ " values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
			esql.update(sql4, hotelId, memberId, roomId,
					memberBookingRoom.getBookCerType(),
					memberBookingRoom.getBookCerNumber(),
					memberBookingRoom.getBookName(),
					memberBookingRoom.getBookPhone(),
					memberBookingRoom.getArriveTime(),
					memberBookingRoom.getLeaveTime(),
					memberBookingRoom.getPersonNum(),
					memberBookingRoom.getRoomNum(),
					memberBookingRoom.getRate(), memberBookingRoom.getTips());
			return "恭喜您，预订成功！";

		} else if (roomId3 == 0) {
			return starttime + "日-" + endtime + "日,暂无可预订的" + roomType
					+ ",请重新选择房型或时间！";
		} else {

			String sql4 = "insert into t_member_booking_room(hotel_id,member_id,room_id,book_cer_type,book_cer_number,book_name,book_phone,arrive_time,leave_time,person_num,room_num,rate,tips)"
					+ " values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
			esql.update(sql4, hotelId, memberId, roomId3,
					memberBookingRoom.getBookCerType(),
					memberBookingRoom.getBookCerNumber(),
					memberBookingRoom.getBookName(),
					memberBookingRoom.getBookPhone(),
					memberBookingRoom.getArriveTime(),
					memberBookingRoom.getLeaveTime(),
					memberBookingRoom.getPersonNum(),
					memberBookingRoom.getRoomNum(),
					memberBookingRoom.getRate(), memberBookingRoom.getTips());
		}
		return "预订成功！";
	}

	@Override
	public String addBookRestaurantIonfo(long hotelId, long memberId,
			long resaurantbarsid,
			MemberBookingRestaurant memberBookingRestaurant) throws Exception {
		// TODO Auto-generated method stub
		// 更改预订用户的证件类型，证件号码，手机号码，名字
		String sql1 = "update t_member set certificate=?,cer_num=?,name=?,phone=? where id=?";
		esql.update(sql1, memberBookingRestaurant.getBookRestaurantCerType(),
				memberBookingRestaurant.getBookRestaurantCerNumber(),
				memberBookingRestaurant.getBookManName(),
				memberBookingRestaurant.getBookRestaurantPhone(), memberId);
		// 判断该时段是否有可预订的餐厅

		DateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		String eatdate = dateformat
				.format(memberBookingRestaurant.getEatDate());
		String sql3 = "select count(id)  from t_member_booking_restaurant where  hotel_id=? and resaurant_id=? and ?=eat_date";
		long num = esql.query(long.class, sql3, hotelId, resaurantbarsid,
				eatdate);
		if (num != 0) {
			return eatdate + "无可预定的餐厅，请从新选择日期！";
		}

		String sql2 = "insert into t_member_booking_restaurant(member_id,hotel_id,resaurant_id,eat_time,eat_date,book_man_name,man_num,book_restaurant_name,book_restaurant_cer_type,book_restaurant_cer_number,book_restaurant_phone,book_restaurant_price,serve_name,tips)"
				+ " values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql2, memberId, hotelId, resaurantbarsid,
				memberBookingRestaurant.getEatTime(),
				memberBookingRestaurant.getEatDate(),
				memberBookingRestaurant.getBookManName(),
				memberBookingRestaurant.getManNum(),
				memberBookingRestaurant.getBookRestaurantName(),
				memberBookingRestaurant.getBookRestaurantCerType(),
				memberBookingRestaurant.getBookRestaurantCerNumber(),
				memberBookingRestaurant.getBookRestaurantPhone(),
				memberBookingRestaurant.getBookRestaurantPrice(),
				memberBookingRestaurant.getServeName(),
				memberBookingRestaurant.getTips());
		return "餐饮预定成功！";
	}

	@Override
	public String addBookBanquetInfo(long hotelId, long memberId,
			long banquetId, MemberBookingBanquet memberBookingBanquet)
			throws Exception {
		// TODO Auto-generated method stub
		// 判断该时段是否有可预订的宴会厅和会议厅

		DateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		String starttime = dateformat.format(memberBookingBanquet
				.getStartDate());
		String endtime = dateformat.format(memberBookingBanquet.getEndDate());
		String sql3 = "select count(id)  from t_member_booking_banquet where  hotel_id=? and banquet_id=? and ((?>=start_date and ?<end_date) or (?>start_date and ?<=end_date) or (?<=start_date and ?>=end_date))";
		long num = esql.query(long.class, sql3, hotelId, banquetId, starttime,
				starttime, endtime, endtime, starttime, endtime);
		if (num != 0) {
			return starttime + "日-" + endtime + "日，无可预定的"+memberBookingBanquet.getUseType()+"厅，请从新选择日期！";
		} else {

			// 更改预订用户的证件类型，证件号码，手机号码，名字
			String sql1 = "update t_member set certificate=?,cer_num=?,name=?,phone=? where id=?";
			esql.update(sql1, memberBookingBanquet.getBookBanquetCerType(),
					memberBookingBanquet.getBookBanquetCerNumber(),
					memberBookingBanquet.getBookName(),
					memberBookingBanquet.getBookBanquetPhone(), memberId);
			String sql2 = "insert into t_member_booking_banquet(member_id,hotel_id,banquet_id,book_name,book_banquet_name,book_banquet_cer_type,book_banquet_cer_number,book_banquet_phone,start_date,end_date,use_type,people_num,price ,tips)"
					+ "values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			esql.update(sql2, memberId, hotelId, banquetId,
					memberBookingBanquet.getBookName(),
					memberBookingBanquet.getBookBanquetName(),
					memberBookingBanquet.getBookBanquetCerType(),
					memberBookingBanquet.getBookBanquetCerNumber(),
					memberBookingBanquet.getBookBanquetPhone(),
					memberBookingBanquet.getStartDate(),
					memberBookingBanquet.getEndDate(),
					memberBookingBanquet.getUseType(),
					memberBookingBanquet.getPeopleNum(),
					memberBookingBanquet.getPrice(),
					memberBookingBanquet.getTips());
			return memberBookingBanquet.getUseType() + "厅预定成功！";
		}
	}

	@Override
	public String addBookSpecialtyInfo(long hotelId, long memberId,
			long storeId, MemberBookingStore memberBookingStore)
			throws Exception {
		// TODO Auto-generated method stub
		// 更改预订用户的证件类型，证件号码，手机号码，名字
		String sql1 = "update t_member set certificate=?,cer_num=?,name=?,phone=? where id=?";
		esql.update(sql1, memberBookingStore.getBookStoreCerType(),
				memberBookingStore.getBookStoreCerNumber(),
				memberBookingStore.getBookName(),
				memberBookingStore.getBookStorePhone(), memberId);
		String sql2 = "insert into  t_member_booking_store(member_id,hotel_id,store_id,book_name,book_store_name,book_store_cer_type,book_store_cer_number,book_store_phone,book_store_price,book_store_content,tips)"
				+ " values(?,?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql2, memberId, hotelId, storeId,
				memberBookingStore.getBookName(),
				memberBookingStore.getBookStoreName(),
				memberBookingStore.getBookStoreCerType(),
				memberBookingStore.getBookStoreCerNumber(),
				memberBookingStore.getBookStorePhone(),
				memberBookingStore.getBookStorePrice(),
				memberBookingStore.getBookStoreContent(),
				memberBookingStore.getTips());
		return "购买成功！";
	}

	@Override
	public PagedList<MemberBookingRoom> listBookRoom(long hotelId, int offset,
			int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<MemberBookingRoom> list=new PagedList<MemberBookingRoom>();
		List<Object> parameters=new ArrayList<Object>();
		String sql1="select count(distinct id) from t_member_booking_room where hotel_id=?";
		list.setTotal(esql.query(Integer.class, sql1, hotelId));
		
		String sql2="select distinct * from t_member_booking_room where hotel_id=? order by id offset ? limit ?";
		parameters.add(hotelId);
		parameters.add(offset);
		parameters.add(limit);
		List<MemberBookingRoom> listBookRoom=new ArrayList<MemberBookingRoom>();
		listBookRoom=esql.list(MemberBookingRoom.class, sql2, parameters.toArray());
		DateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		for(MemberBookingRoom bookroom:listBookRoom)
		{
			
			String arrivetime = dateformat.format(bookroom.getArriveTime());
			bookroom.setStarttime(arrivetime);
			String leavetime=dateformat.format(bookroom.getLeaveTime());
			bookroom.setLeavetime(leavetime);
			if(bookroom.getStatus().equals("P"))
				bookroom.setStatus("待审核");
			else
				bookroom.setStatus("审核通过");
			
		}
		list.setData(listBookRoom);
		return list;
		
		

	}

	@Override
	public void deleteBookRoom(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="delete from t_member_booking_room where id=?";
		esql.update(sql, id);
	}

	@Override
	public void confirmBookRoom(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="update  t_member_booking_room set status='T' where id=?";
		esql.update(sql, id);
	}

	@Override
	public void cancelBookRoom(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="update t_member_booking_room set status='P' where id=?";
		esql.update(sql, id);
	}

	@Override
	public PagedList<MemberBookingRestaurant> listBookRestaurant(long hotelId,
			int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<MemberBookingRestaurant> list=new PagedList<MemberBookingRestaurant>();
		List<Object> parameters=new ArrayList<Object>();
		String sql1="select count(distinct id) from t_member_booking_restaurant where hotel_id=?";
		list.setTotal(esql.query(Integer.class, sql1, hotelId));
		
		String sql2="select distinct * from t_member_booking_restaurant where hotel_id=? order by id offset ? limit ?";
		parameters.add(hotelId);
		parameters.add(offset);
		parameters.add(limit);
		List<MemberBookingRestaurant> listBookRestaurant=new ArrayList<MemberBookingRestaurant>();
		listBookRestaurant=esql.list(MemberBookingRestaurant.class, sql2, parameters.toArray());
		DateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		for(MemberBookingRestaurant bookRestaurant:listBookRestaurant)
		{
			String eatdate = dateformat.format(bookRestaurant.getEatDate());
			bookRestaurant.setEatdate(eatdate);
			if(bookRestaurant.getState().equals("P"))
				bookRestaurant.setState("待审核");
			else
				bookRestaurant.setState("审核通过");
	
		}
		list.setData(listBookRestaurant);
		return list;
	}

	@Override
	public void deleteBookRestaurant(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="delete from t_member_booking_restaurant where id=?";
		esql.update(sql, id);
	}
	
	@Override
	public void confirmBookRestaurant(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="update t_member_booking_restaurant set state='T' where id=?";
		esql.update(sql, id);
	}

	@Override
	public void cancelBookRestaurant(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="update t_member_booking_restaurant set state='P' where id=?";
		esql.update(sql, id);
	}
	@Override
	public PagedList<MemberBookingBanquet> listBookBanquet(long hotelId,
			int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<MemberBookingBanquet> list=new PagedList<MemberBookingBanquet>();
		List<Object> parameters=new ArrayList<Object>();
		String sql1="select count(distinct id) from t_member_booking_banquet where hotel_id=?";
		list.setTotal(esql.query(Integer.class, sql1, hotelId));
		
		String sql2="select distinct * from t_member_booking_banquet where hotel_id=? order by id offset ? limit ?";
		parameters.add(hotelId);
		parameters.add(offset);
		parameters.add(limit);
		List<MemberBookingBanquet> listBookBanquet=new ArrayList<MemberBookingBanquet>();
		listBookBanquet=esql.list(MemberBookingBanquet.class, sql2, parameters.toArray());
		DateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		for(MemberBookingBanquet bookBanquet:listBookBanquet)
		{
			
			String starttime = dateformat.format(bookBanquet.getStartDate());
			bookBanquet.setStarttime(starttime);
			String endtime=dateformat.format(bookBanquet.getEndDate());
			bookBanquet.setEndtime(endtime);
			if(bookBanquet.getState().equals("P"))
				bookBanquet.setState("待审核");
			else
				bookBanquet.setState("审核通过");
			
		}
		list.setData(listBookBanquet);
		return list;
		
	}

	@Override
	public void deleteBookBanquet(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="delete from t_member_booking_banquet where id=?";
		esql.update(sql, id);
	}

	@Override
	public void confirmBookBanquet(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="update t_member_booking_banquet set state='T' where id=?";
		esql.update(sql, id);
	}

	@Override
	public void cancelBookBanquet(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="update t_member_booking_banquet set state='P' where id=?";
		esql.update(sql, id);
	}

	@Override
	public PagedList<MemberBookingStore> listBookStore(long hotelId,
			int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
		PagedList<MemberBookingStore> list=new PagedList<MemberBookingStore>();
		List<Object> parameters=new ArrayList<Object>();
		String sql1="select count(distinct id) from t_member_booking_store where hotel_id=?";
		list.setTotal(esql.query(Integer.class, sql1, hotelId));
		
		String sql2="select distinct * from t_member_booking_store where hotel_id=? order by id offset ? limit ?";
		parameters.add(hotelId);
		parameters.add(offset);
		parameters.add(limit);
	//	list.setData(esql.list(MemberBookingStore.class, sql2, parameters.toArray()));
	//	return list;
		List<MemberBookingStore> listBookStore=new ArrayList<MemberBookingStore>();
		listBookStore = esql.list(MemberBookingStore.class, sql2, parameters.toArray());
		for(MemberBookingStore bookStore:listBookStore)
		{
			if(bookStore.getState().equals("P"))
			{
				bookStore.setState("待审核");
			}else{
				bookStore.setState("审核通过");
			}
		}
		list.setData(listBookStore);
         return list;
		
//		List<MemberBookingBanquet> listBookBanquet=new ArrayList<MemberBookingBanquet>();
//		listBookBanquet=esql.list(MemberBookingBanquet.class, sql2, parameters.toArray());
//		DateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
//		for(MemberBookingBanquet bookBanquet:listBookBanquet)
//		{
//			
//			String starttime = dateformat.format(bookBanquet.getStartDate());
//			bookBanquet.setStarttime(starttime);
//			String endtime=dateformat.format(bookBanquet.getEndDate());
//			bookBanquet.setEndtime(endtime);
//			if(bookBanquet.getState().equals("P"))
//				bookBanquet.setState("待审核");
//			else
//				bookBanquet.setState("审核通过");
//			
//		}
//		list.setData(listBookBanquet);
//		return list;
		
		
	}

	@Override
	public void deleteBookStore(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="delete from t_member_booking_store where id=?";
		esql.update(sql, id);
	}

	@Override
	public void confirmBookStore(long id) throws Exception {
		// TODO Auto-generated method stub
		
		String sql="update t_member_booking_store set state='T' where id=?";
		esql.update(sql, id);
		
	}

	@Override
	public void cancelBookStore(long id) throws Exception {
		// TODO Auto-generated method stub
		
		String sql="update t_member_booking_store set state='P' where id=?";
		esql.update(sql, id);
		
	}

	@Override
	public PagedList<ComAccountBookRoom> listComAccountBookRoom(long hotelId,
			int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
	
		
		PagedList<ComAccountBookRoom> list =new PagedList<ComAccountBookRoom>();
		List<Object> parameters = new ArrayList<Object>();
		String sql1 = "select count(distinct id) from t_com_account_booking_room where hotel_id= ?";
		list.setTotal(esql.query(Integer.class, sql1, hotelId));
		
		String sql2 = "select distinct * from t_com_account_booking_room where hotel_id= ? order by id offset ? limit ?";
		
		parameters.add(hotelId);
		parameters.add(offset);
		parameters.add(limit);
		
		List<ComAccountBookRoom> listComAccountBookRoom = new ArrayList<ComAccountBookRoom>();
		listComAccountBookRoom = esql.list(ComAccountBookRoom.class, sql2, parameters.toArray());
		
		for(ComAccountBookRoom cabr : listComAccountBookRoom)
		{
			if(cabr.getRoomStatus().equals("P"))
			{
				cabr.setRoomStatus("待审核");
			}else{
				cabr.setRoomStatus("审核通过");
			}
			
			
		}
		
		list.setData(listComAccountBookRoom);
		return list;
		
	}

	@Override
	public void confirmComAccountBookRoom(long id) throws Exception {
		// TODO Auto-generated method stub
		
		String sql="update t_com_account_booking_room set room_status='T' where id=?";
		esql.update(sql, id);
	}

	@Override
	public void cancelComAccountBookRoom(long id) throws Exception {
		// TODO Auto-generated method stub

		String sql="update t_com_account_booking_room set room_status='P' where id=?";
		esql.update(sql, id);
		
	}

	@Override
	public void deleteComAccountBookRoom(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="delete from t_com_account_booking_room where id=?";
		esql.update(sql, id);
	}

	@Override
	public void confirmComAccountBanquet(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="update t_com_account_booking_banquet set banquet_status='T' where id=?";
		esql.update(sql, id);
	}

	@Override
	public void cancelComAccountBanquet(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql = "update t_com_account_booking_banquet set banquet_status='P' where id=?";
	   esql.update(sql, id);
	   
	}

	@Override
	public void deleteComAccountBanquet(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="delete from t_com_account_booking_banquet where id=?";
		esql.update(sql, id);
		
	}

	@Override
	public PagedList<ComAccountBookBanquet> listComAccountBookBanquet(
			long hotelId, int offset, int limit) throws Exception {
		// TODO Auto-generated method stub

		PagedList<ComAccountBookBanquet> list =new PagedList<ComAccountBookBanquet>();
		List<Object> parameters = new ArrayList<Object>();
		String sql1 = "select count(distinct id) from t_com_account_booking_banquet where hotel_id= ?";
		list.setTotal(esql.query(Integer.class, sql1, hotelId));
		
		String sql2 = "select distinct * from t_com_account_booking_banquet where hotel_id= ? order by id offset ? limit ?";
		
		parameters.add(hotelId);
		parameters.add(offset);
		parameters.add(limit);
		
		List<ComAccountBookBanquet> listComAccountBanquetRoom = new ArrayList<ComAccountBookBanquet>();
		listComAccountBanquetRoom = esql.list(ComAccountBookBanquet.class, sql2, parameters.toArray());
		
		for(ComAccountBookBanquet cabr : listComAccountBanquetRoom)
		{
			if(cabr.getBanquetStatus().equals("P"))
			{
				cabr.setBanquetStatus("待审核");
			}else{
				cabr.setBanquetStatus("审核通过");
			}
			
			
		}
		
		list.setData(listComAccountBanquetRoom);
		return list;
	}


}
