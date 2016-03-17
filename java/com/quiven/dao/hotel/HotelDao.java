package com.quiven.dao.hotel;

import java.util.List;

import com.quiven.dao.PagedList;
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


public interface HotelDao {
	
	public long addHotelInfo(long hotelId,Hotel hotel)throws Exception;
	
	public long addHotelInfoSeter(long hotelId,HotelInfoSeter hotelSeter) throws Exception;
	
	public long addHotelMarketDir(long hotelId,HotelMarketDir hotelMarketDir) throws Exception;
	
	public long addHotelMiceIncharger(long hotelId,HotelMiceIncharger hotelMiceIncharger) throws Exception;
	
	public long addHotelRerserContact(long hotelId,HotelRerserContact hotelRerserContact) throws Exception;
	
	public long addHotelSaleIncharger(long hotelId,HotelSaleIncharger hotelSaleIncharger) throws Exception;
	
	public long addHotelManager(long hotelId,HotelManager hotelmanager) throws Exception;
	
	public long addRoomInfo(long hotelId,Room room) throws Exception;
	
	public long addBanquetInfo(long hotelId,BanquetInfo banquetInfo) throws Exception;
	
	public long addRetaurantBarInfo(long hotelId,ResaurantBarsInfo restaurantBarsInfo) throws Exception;
	
	public long addStoreInfo(long hotelId,Store store)throws Exception;
	
	public String getHotelNamebyId(long hotelId) throws Exception;
	
	public long addOnlineRoomPrice(long hotelId,OnlinePriceRoom roomPrice) throws Exception;
	
	public long addContrastRoomPrice(long hotelId,ContractRoomPrice contractRoomPrice) throws Exception;
	
	public long addBanquetPrice(long hotelId,BanquetPrice banquetPrice) throws Exception;
	
	public PagedList<Hotel>  getHotelbyAddress(String address,int offset, int limit) throws Exception;

	public long addRoomphoto(long hotelId, long roomid, String url) throws Exception;
	
	public Hotel getHotelRoombyHotelId(long hotelId)throws Exception;
	
	public PagedList<Hotel_Room> getroominfo(long hotelId) throws Exception;
	
	public Hotel_Room getRoombyRoomId(long roomId)throws Exception;
	
	public long GetLowestPriceOfRoomToHotel(long hotelId) throws Exception;
	
	public long GetLowestPriceOfBanquetToHotel(long hotelId) throws Exception;
	public long GetLowestPriceOfResaurantBarsToHotel(long hotelId) throws Exception;
	public long GetLowestPriceOfStoreToHotel(long hotelId) throws Exception;
	
	
	public PagedList<BanquetInfo>  getBanquetInfoListbyAddress(String address,int offset, int limit) throws Exception;
	public PagedList<ResaurantBarsInfo>  getResaurantBarsInfoListbyAddress(String address,int offset, int limit) throws Exception;
	public PagedList<Store>  getStoreListbyAddress(String address,int offset, int limit) throws Exception;

	public BanquetInfo getBanquestInfoByBanquestId(long banquestid) throws Exception;
	
	public ResaurantBarsInfo getResaurantBarsInfoById(long resaurantbarsid)throws Exception;
	
	public Store getStoreByid(long storeid) throws Exception;
	
	public PagedList<PropmtionActivity> getpromotion(long hotelid)throws Exception;
	
	public PropmtionActivity getpromotioninfo(long promotionid)throws Exception;
	
	public PagedList<Hotel_Room> getpromotionroominfo(long hotelId,long promotionid) throws Exception;
	
	public long addPropmtionActivityInfo(long hotelId,PropmtionActivity propmtionActivity)throws Exception;
	
	public PagedList<Hotel> getHotelList(long accountid)throws Exception;
	
	public long getRoleIdByAccountId(long accountId)throws Exception;
	
	public long getHotelIdByAccountId(long accountId)throws Exception;
	public long getHotelInfoSeterIdByAccountId(long accountId) throws Exception;
	public long getHotelCodeByHotelId(long hotelId)throws Exception;
	public PagedList<Hotel> listHotel(long hotelCode, int offset, int limit)throws Exception;
	
	public Hotel getHotelByHotelId(long hotelId)throws Exception;
	
	public void deleteHotelById(long hotelId)throws Exception;
	
	public void updateHotelById(long hotelId, Hotel hotel)throws Exception;
	
	public long getBanquetIdByHotelId(long hotelId)throws Exception;
	
	public BanquetInfo getBanquetByBanquetId(long banquetId)throws Exception;
	
	public PagedList<BanquetInfo> listbanquetInfo(long banquetId, int offset, int limit)throws Exception;
	
	public void updateBanquetById(long banquetId, BanquetInfo banquetInfo)throws Exception;
	
	public void deleteBanquetById(long banquetId)throws Exception;
	
	public long getResaurantBarsIdByHotelId(long hotelId)throws Exception;
	
	public PagedList<ResaurantBarsInfo> listResaurantBarsInfo(long resaurantBarsId, int offset, int limit)throws Exception;
	
	public ResaurantBarsInfo getResaurantBarsByResaurantBarsId(long resaurantBarsId)throws Exception;
	
	public void updateResaurantBarsById(long resaurantBarsId, ResaurantBarsInfo resaurantBarsInfo)throws Exception;
	
	public void deleteResaurantBarsById(long resaurantBarsId)throws Exception;
	
	public long getStoreIdByHotelId(long hotelId)throws Exception;
	
	public PagedList<Store> listStoreInfo(long storeId, int offset, int limit)throws Exception;
	
	public Store getStoreByStoreId(long storeId)throws Exception;
	
	public void updateStoreById(long storeId, Store store)throws Exception;
	
	public void deleteStoreById(long storeId)throws Exception;
	
	public HotelInfoSeter getHotelInfoSeter(long hotelId)throws Exception;
	public void updateHotelInfoSeter(HotelInfoSeter hotelInfoSeter) throws Exception;

	
	public PagedList<Member> listHotelMember(int offset, int limit) throws Exception;
    public Member getMemberBymemberId(long memberId) throws Exception;
    public void updateMemberBymemberId(Member memberAccount) throws Exception;

    
    //宴会预定情况统计
    public PagedList<MemberBookingBanquet> listMemberBookingBanquetByDate(String date,long hotelId,int offset,int limit) throws Exception;
    public PagedList<MemberBookingRoom>  listMemberBookingRoomByDate(String date,long hotelId,int offset,int limit) throws Exception;
     public String getLoginTypeByMemberId(long memberId) throws Exception;
     
     //填充宴会人员信息
     public MemberBookingBanquet getMemberBookingBanquetById(long id) throws Exception;
     public void updateMemberBookingBanquetById(long id,MemberBookingBanquet memberBookingBanquet) throws Exception;
     
     public MemberBookingRoom getMemberBookingRoomById(long id) throws Exception;
     
     public void updateMemberBookingRoomById(long id,MemberBookingRoom memberBookingRoom) throws Exception;
     /*author:zhengjunwei*/
     public List<Hotel>  getResaurantBarsForEnquiry (String province,String city,String hotelCounty,double price, long adultNum, long roomNum) throws Exception;
     public List<Hotel>  getBanquetForEnquiry (String province,String city,String hotelCounty,double price, long adultNum,long roomNum) throws Exception;
     public HotelManager getHotelManagerByHotelId(long hotelId)throws Exception;
     
}
