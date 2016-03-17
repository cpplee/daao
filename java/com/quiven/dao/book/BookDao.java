package com.quiven.dao.book;

import com.quiven.dao.PagedList;
import com.quiven.entity.comAccount.ComAccountBookBanquet;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.entity.comAccount.Saler;
import com.quiven.entity.member.MemberBookingBanquet;
import com.quiven.entity.member.MemberBookingRestaurant;
import com.quiven.entity.member.MemberBookingRoom;
import com.quiven.entity.member.MemberBookingStore;

public interface BookDao {
	//添加房间预定信息
	public String addBookRoomInfo(long hotelId, long memberId, String roomType,
			MemberBookingRoom memberBookingRoom) throws Exception;
	//添加饭店/酒吧预定信息
	public String addBookRestaurantIonfo(long hotelId, long memberId,
			long resaurantbarsid,
			MemberBookingRestaurant memberBookingRestaurant) throws Exception;
	//添加宴会厅/会议厅预定信息
	public String addBookBanquetInfo(long hotelId, long memberId,
			long banquetId, MemberBookingBanquet memberBookingBanquet)
			throws Exception;
	//添加专门店购买信息
	public String addBookSpecialtyInfo(long hotelId, long memberId,
			long storeId, MemberBookingStore memberBookingStore)
			throws Exception;
	//显示房间预定列表
	public PagedList<MemberBookingRoom> listBookRoom(long hotelId, int offset, int limit) throws Exception;

	//删除预定房间
	public void deleteBookRoom(long id)throws Exception;
	
	//确认房间订单
	public void confirmBookRoom(long id)throws Exception;
	
	//取消已通过审核的的房间订单
	public void cancelBookRoom(long id)throws Exception;
	
	//显示餐饮店/酒吧预定列表
	public PagedList<MemberBookingRestaurant> listBookRestaurant(long hotelId,int  offset,
			int limit) throws Exception;

	//删除餐饮店/酒吧预定订单
	public void deleteBookRestaurant(long id)throws Exception;
	//确定餐饮店的订单
	public void confirmBookRestaurant(long id)throws Exception;
	
	//取消已经确定的餐饮店的订单
	public void cancelBookRestaurant(long id) throws Exception;
	
	//列宴会/会议厅预定列表
	public PagedList<MemberBookingBanquet> listBookBanquet(long hotelId,int  offset,int limit) throws Exception;
	//删除宴会/会议厅订单
	public void deleteBookBanquet(long id)throws Exception;
	//确认宴会/会议厅订单
	public void confirmBookBanquet(long id)throws Exception;
	//取消已确认的宴会/会议厅订单
	public void cancelBookBanquet(long id)throws Exception;
	
	//列专门店预定订单列表
	public PagedList<MemberBookingStore> listBookStore(long hotelId,int offset,int limit)throws Exception;
	//删除专门店预定订单
	public void deleteBookStore(long id)throws Exception;
	
	public void confirmBookStore(long id) throws Exception;
	
	public void cancelBookStore(long id) throws Exception;
	
	
	public PagedList<ComAccountBookRoom> listComAccountBookRoom(long hotelId,int offset,int limit) throws Exception;
	public void confirmComAccountBookRoom(long id) throws Exception;
	public void cancelComAccountBookRoom(long id) throws Exception;
	public void deleteComAccountBookRoom(long id) throws Exception;
	
	public PagedList<ComAccountBookBanquet> listComAccountBookBanquet(long hotelId,int offset,int limit) throws Exception;
	public void confirmComAccountBanquet(long id) throws Exception;
	public void cancelComAccountBanquet(long id) throws Exception;
	public void deleteComAccountBanquet(long id) throws Exception;
}
