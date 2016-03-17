package com.quiven.dao.comAccount;

import java.util.Date;
import java.util.List;

import com.quiven.dao.PagedList;
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.entity.comAccount.ComAccountActivityLog;
import com.quiven.entity.comAccount.ComAccountActivityPlan;
import com.quiven.entity.comAccount.ComAccountBookBanquet;
import com.quiven.entity.comAccount.ComAccountBookRoom;
import com.quiven.entity.comAccount.ComAccountContact;
import com.quiven.entity.comAccount.ComAccountTalentAnalysis;
import com.quiven.entity.comAccount.Saler;
import com.quiven.entity.hotel.BanquetInfo;

public interface ComAccountDao {

	public long addComAccount(long salerId,ComAccount comAccount)throws Exception;

	public ComAccount getComAccountById(long id) throws Exception;

	public ComAccount getComAccountByEglishName(String name) throws Exception;

	public List<ComAccount> getComAccountByChineseName(String secondaryName) throws Exception;

	public List<ComAccount> getComAccountByCity(String city) throws Exception;

	public List<ComAccount> getComAccountByCountry(String country) throws Exception;

	public List<ComAccount> getComAccountByProvince(String province) throws Exception;
	
	public List<ComAccountContact> ListComAccountContact(long salerId) throws Exception;

	public long addComAccountContact(long salerId,long comAccountId,ComAccountContact comAccountContact)throws Exception;

	public PagedList<ComAccountContact> ListAllConnactInfo(long salerId,long comAccountId, int offset, int limit) throws Exception;

	public PagedList<ComAccount> listComAccount(long salerId, int offset, int limit) throws Exception;

	public List<ComAccount> listComAccount(long salerId) throws Exception;

	public long getSalerIdByAccountId(long accountId) throws Exception;
	
	public void updateSaler(Saler saler) throws Exception;

	public ComAccount getComAccountByIdAndSalerId(long salerId,long comAccountId) throws Exception;
	//查看联系人信息
	public ComAccountContact getComAccountContactById(long comAccountContactId) throws Exception;
     
	//添加函数

	public PagedList<ComAccountActivityPlan> listContactAcivity(long salerId,long comAccountId, int offset, int limit) throws Exception;
	
	public PagedList<ComAccountBookRoom> listBooking(long salerId,long comAccountId, int offset, int limit) throws Exception;
	
	/**1月28日  王东杰*/
	public void deleteComAccountById(long comAccountId) throws Exception;
	
	public void updateComAccountById(long comAccountId,ComAccount comAccount) throws Exception;
	
	public void deleteComAccountContact(long comAccountContactsId) throws Exception;
	
	public  Saler getSalerBySalerId(long salerId) throws Exception;
	
	public void updateComAccountContactById(long comAccountContactId,ComAccountContact comAccount) throws Exception;
	
	public PagedList<ComAccountBookBanquet> listBookingBanquet(long salerId,long comAccountId, int offset, int limit) throws Exception;
	
	public long addActivity(long salerId,long ComAccountId,ComAccountActivityPlan comAccountActivityPlan)throws Exception;
	
	public void updateActivity(long comAccountActivityPlanId,ComAccountActivityPlan comAccountActivityPlan)throws Exception;
	
	public void deleteActivity(long comAccountActivityPlanId) throws Exception;
	
	public ComAccountActivityPlan getComAccountActivityById(long comAccountActivityPlanId) throws Exception;
	
	public BanquetInfo getBanquetById(long BanquetId) throws Exception;
	
	public void updateRoom(long comAccountRoomId,ComAccountBookRoom comAccountBookRoom) throws Exception;
	
	public void deleteRoomBooking(long RoomBookingId) throws Exception;
	
	public ComAccountBookRoom getComBookRoomById(long comAccountRoomId) throws Exception;
	
	public long addBookRoom(ComAccountBookRoom comAccountBookRoom) throws Exception;
	
	public ComAccountBookBanquet getComBookBanquetById(long comAccountBanquetId) throws Exception;
	
	public void updateBanquet(long comAccountBanquetId,ComAccountBookBanquet comAccountBookBanquet) throws Exception;
	
	public void deleteBanquetBooking(long BanquetBookingId) throws Exception;
	
	public long addBookBanquet(ComAccountBookBanquet comAccountBanquet) throws Exception;
	
	public long getHotelIdBySalerId(long salerId) throws Exception;
	
	public PagedList<ComAccountActivityLog> listActivityLog(long salerId, int offset, int limit) throws Exception;
	
	public PagedList<Saler> listSaler(long salerId, int offset, int limit) throws Exception;
	
	public List<ComAccountActivityLog> listComAccountActivitylog(long salerId) throws Exception;
	
	public String getSalerNamebyId(long salerId) throws Exception;
	
	public List<ComAccountActivityPlan> listComAccountActivityPlan(long salerId) throws Exception;
	
	public String getCompanyNameBySalerId(long comAccountId) throws Exception;
	
	public String getHotelNameById(long hotelId) throws Exception;
	
	public PagedList<ComAccountActivityPlan> listActivityPlan(long salerId, int offset, int limit) throws Exception;
	
	public ComAccountActivityLog  getComAccountActivityLog(long comAccountActivityLogId) throws Exception;
	
	public void updateReviewsById(long comAccountActivityLogId,String reviews) throws Exception;
	
	public PagedList<ComAccountActivityPlan> listActivityTime(long salerId) throws Exception;
	
	public void updateActivityTime(long id,String activityDate,Date activityTime)throws Exception;
	
	public long getCoreAccountCount(long salerId) throws Exception;
	
	public long getNicheAccountCount(long salerId) throws Exception;
	
	public long getProspAccountCount(long salerId) throws Exception;
	
	public long getSuspeAccountCount(long salerId) throws Exception;
	
	public List<String> listCompanyName(long salerId) throws Exception; 
	
	public long addActivityByComPanyName(long salerId,String ComAccountName,ComAccountActivityPlan comAccountActivityPlan)throws Exception;
	
	public void updateComAccountTalent(long salerId,long comAccountId,String comAccountType) throws Exception;
	
	public long addComAccountTalentAnalysis(long salerId,long comAccountId,ComAccountTalentAnalysis comAccountTalentAnalysis) throws Exception;
	
	public ComAccountTalentAnalysis getComAccountTalentAnalysis(long salerId,long comAccountId) throws Exception;
	
	public long getCoreBookingRoomAtMoth(long salerId) throws Exception;
	
	public long getNicheBookingRoomAtMoth(long salerId) throws Exception;
	
	public long getProsBookingRoomAtMoth(long salerId) throws Exception;
	
	public long getSuspeBookingRoomAtMoth(long salerId) throws Exception;
	
	public long getCoreBookingBanquetAtMoth(long salerId) throws Exception;
	
	public long getNicheBookingBanquetAtMoth(long salerId) throws Exception;
	
	public long getProsBookingBanquetAtMoth(long salerId) throws Exception;
	
	public long getSuspeBookingBanquetAtMoth(long salerId) throws Exception;
	
	public double getCoreAccountRoomNightPrice(long salerId) throws Exception;
	
	public double getNicheAccountRoomNightPrice(long salerId) throws Exception;
	
	public double getProspAccountRoomNightPrice(long salerId) throws Exception;
	
	public double getSuspectAccountRoomNightPrice(long salerId) throws Exception;
	
	public long getComAccountBookingRoom(long salerId, long year, long month) throws Exception;
	
	public long getComAccountBookingBanquet(long salerId, long year, long month) throws Exception;
	
	public double getCoreAccountBanquetPrice(long salerId) throws Exception;
	
	public double getNicheAccountBanquetPrice(long salerId) throws Exception;
	
	public double getProspAccountBanquetPrice(long salerId) throws Exception;
	
	public double getSuspectAccountBanquetPrice(long salerId) throws Exception;

	public String getComAccountTypeByid(long comtypeId) throws Exception;
	
	/*7月13  龍敬文*/
	public void deleteSaler(long SalerId) throws Exception;

	public void addSaler(Saler salerAccount) throws Exception;
	
	public long getHotelIdByaccountId( long accountId)throws Exception;
	//
	
	public boolean confirmRoomDateByDate(ComAccountBookRoom comAccountBookRoom) throws Exception;
	
	public boolean confirmBanquertDateByDate(ComAccountBookBanquet comAccountBookBanquet) throws Exception;
    
	
}
