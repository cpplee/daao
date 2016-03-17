package com.quiven.dao.member;

import java.util.ArrayList;
import java.util.List;

import com.quiven.dao.BaseDao;
import com.quiven.dao.PagedList;
import com.quiven.dao.PostgreSQL;
import com.quiven.entity.hotel.Room;
import com.quiven.entity.member.Member;
import com.quiven.entity.member.MemberAgreeList;
import com.quiven.entity.member.MemberBookingRoom;
import com.quiven.entity.member.MemberCommonContact;

public class MemberDaoImpl extends BaseDao implements MemberDao, PostgreSQL{

	@Override
	public Member getMemberbyMembeId(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql = "select * from t_member where account_id=?";
		Member member= esql.query(Member.class, sql, id);
		return member;
	}

	@Override
	public void updateMember(Member member,long id) throws Exception {
		// TODO Auto-generated method stub
		String sql = "update t_member set name=?,qq=?,email=?,wechat=?,sex=?,phone=?,dob=?,company_name=?,company_job=?,hotel_name=?,mem_num=?,mem_type=? where account_id = ?";
		//System.out.println(member.getEmail()+member.getQq());
		esql.update(sql, member.getName(),member.getQq(),member.getEmail(),member.getWechat(),member.getSex(),member.getPhone(),member.getDob(),member.getCompanyName(),member.getCompanyJob(),member.getHotelName(),member.getMemNum(),member.getMemType(),id);
		
	}

	@Override
	public PagedList<MemberCommonContact> listMemberCommonContact(
			long memberId, int offset, int limit) throws Exception {
	      
		PagedList<MemberCommonContact> list = new PagedList<MemberCommonContact>();
		List<Object> parameters = new ArrayList<Object>();
		String from ="from t_member_common_contact";
		String order=" order by id offset ? limit ?";
		String where = " where member_id = ?";
		
		parameters.add(memberId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(MemberCommonContact.class, sql, parameters.toArray()));
		return list;
		
	}

	@Override
	public long getMemberIdByAccountId(long accountId) throws Exception {
		String sql = "select id from t_member where account_id = ?  " ;
		return esql.query(Long.class, sql, accountId);
	}

	@Override
	public void addContactMemberByMemberId(long memberId,
			MemberCommonContact mcc) throws Exception {
		String sql = " insert into t_member_common_contact (member_id,contact_name,contact_phone,contact_sex,contact_company_name,contact_hotel_name,contact_mem_level,contact_mem_num,contact_point_status,contact_dob,contact_certificate,contact_cer_num) "
				+ "values(?,?,?,?,?,?,?,?,?,?,?,?)";
		esql.update(sql,memberId,mcc.getContactName(),mcc.getContactPhone(),mcc.isContactSex(),mcc.getContactCompanyName(),mcc.getContactHotelName(),mcc.getContactMemLevel(),mcc.getContactMemNum(),mcc.getContactPointStatus(),mcc.getContactDob(),mcc.getContactCertificate(),mcc.getContactCerNum());
		
	}

	@Override
	public PagedList<MemberAgreeList> listMemberAgreeList(long memberId,
			int offset, int limit) throws Exception {
		// TODO Auto-generated method stub
		
		PagedList<MemberAgreeList> list = new PagedList<MemberAgreeList>();
		List<Object> parameters = new ArrayList<Object>();
		String from ="from t_member_agree_list";
		String order=" order by id offset ? limit ?";
		String where = " where member_id = ?";
		
		parameters.add(memberId);

		String sql ="select count(distinct id) " + from + where;
		list.setTotal(esql.query(Integer.class, sql, parameters.toArray()));

		sql = "select distinct * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(MemberAgreeList.class, sql, parameters.toArray()));
		return list;
	}
	@Override
	public Member getMemberById(long id) throws Exception {
		String sql = "select * from t_member where id=?";
		Member member= esql.query(Member.class, sql, id);
		return member;
	}
	
	@Override
	public void deleteMemberCommonContactByid(long id) throws Exception {
		// TODO Auto-generated method stub
		String sql="delete from t_member_common_contact where id=?";
		esql.update(sql, id);
	}
	@Override
	public MemberCommonContact getMemberCommonContactByid(long id)
			throws Exception {
		String sql = "select * from t_member_common_contact where id=?";
		MemberCommonContact mcc= esql.query(MemberCommonContact.class, sql, id);
		return mcc;
	}

	@Override
	public PagedList<MemberBookingRoom> listMemberBookingRoom(long memberId,
			int offset, int limit) throws Exception {
		PagedList<MemberBookingRoom> list = new PagedList<MemberBookingRoom>();
		List<Object> parameters = new ArrayList<Object>();
	    String from1 ="from t_member_booking_room a , t_room b";
		String where1 = " where a.room_id=b.id and a.member_id = ? and status='p'";
		
		
		String from ="from t_member_booking_room a , t_room b";
		String order=" order by a.id offset ? limit ?";
		String where = " where a.room_id=b.id and a.member_id = ? and status='p' ";
		
		parameters.add(memberId);

		String sql1 ="select count(distinct a.id) " + from1 + where1;
		list.setTotal(esql.query(Integer.class, sql1, parameters.toArray()));

		String sql = "select * " + from + where + order;
		parameters.add(offset);
		parameters.add(limit);
		list.setData(esql.list(MemberBookingRoom.class, sql, parameters.toArray()));
		
		return list;
	}
	
	@Override
	public long getRoomIdById(long id) throws Exception {
		String sql = "select room_id from t_member_booking_room where id = ?  " ;
		return esql.query(Long.class, sql, id);
	}

	@Override
	public Room getRoomByroomId(long roomId) throws Exception {

		String sql = "select * from t_room where id=?";
		Room room= esql.query(Room.class, sql, roomId);
		return room;
	}
	
	@Override
	public void addMemberAgreeListByMemberId(long memberId,
			MemberAgreeList memberAgreeList) throws Exception {
		// TODO Auto-generated method stub
		String sql = " insert into t_member_agree_list (member_id,price,agree_code,valid_date,hotel_name,room_type) "
				+ "values(?,?,?,?,?,?)";
		esql.update(sql,memberId,memberAgreeList.getPrice(),memberAgreeList.getAgreeCode(),memberAgreeList.getValidDate(),memberAgreeList.getHotelName(),memberAgreeList.getRoomType());
		
	}


	
}