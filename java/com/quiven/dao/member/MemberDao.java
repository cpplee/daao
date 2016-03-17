package com.quiven.dao.member;

import com.quiven.dao.PagedList;
import com.quiven.entity.hotel.Room;
import com.quiven.entity.member.Member;
import com.quiven.entity.member.MemberAgreeList;
import com.quiven.entity.member.MemberBookingRoom;
import com.quiven.entity.member.MemberCommonContact;

public interface MemberDao {

	public Member getMemberbyMembeId(long id) throws Exception;

	public void updateMember(Member member, long id) throws Exception;

	public long getMemberIdByAccountId(long accountId) throws Exception;

	public PagedList<MemberCommonContact> listMemberCommonContact(
			long memberId, int offset, int limit) throws Exception;

	public void addContactMemberByMemberId(long memberId,
			MemberCommonContact membercommoncontact) throws Exception;

	public PagedList<MemberAgreeList> listMemberAgreeList(long memberId,
			int offset, int limit) throws Exception;

	// 2015-08-24李云天

	public Member getMemberById(long id) throws Exception;

	public void deleteMemberCommonContactByid(long id) throws Exception;

	public MemberCommonContact getMemberCommonContactByid(long id)
			throws Exception;

	public PagedList<MemberBookingRoom> listMemberBookingRoom(long memberId,
			int offset, int limit) throws Exception;

	public long getRoomIdById(long id) throws Exception;

	public Room getRoomByroomId(long roomId) throws Exception;

	public void addMemberAgreeListByMemberId(long memberId,
			MemberAgreeList memberAgreeList) throws Exception;
}