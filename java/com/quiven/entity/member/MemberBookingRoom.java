package com.quiven.entity.member;

import java.util.Date;

import com.quiven.entity.Bean;

public class MemberBookingRoom implements Bean{
	
	private static final long serialVersionUID = -8661675585409783525L;
	private long id;			
	private long memberId;	
	private long hotelId;	
	private long roomId;
	private String bookCerType;
	private String bookCerNumber;
	private String bookName;
	private String bookPhone;
	private Date arriveTime;	
	private Date leaveTime;	
	private int personNum;	
	private int roomNum;	
	private Double rate;		
	private String status;		
	private String tips;
	private String type;
	private String roomDescription;
	private String state;
	
	
	//外部使用变量
	private String starttime;
	private String leavetime;
	
	//外部使用变量
	private String loginType;
   
	
	
	
	
	public String getStarttime() {
		return starttime;
	}
	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}
	public String getLeavetime() {
		return leavetime;
	}
	public void setLeavetime(String leavetime) {
		this.leavetime = leavetime;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getRoomDescription() {
		return roomDescription;
	}
	public void setRoomDescription(String roomDescription) {
		this.roomDescription = roomDescription;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getMemberId() {
		return memberId;
	}
	public void setMemberId(long memberId) {
		this.memberId = memberId;
	}
	public long getHotelId() {
		return hotelId;
	}
	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}
	public long getRoomId() {
		return roomId;
	}
	public void setRoomId(long roomId) {
		this.roomId = roomId;
	}
	public String getBookCerType() {
		return bookCerType;
	}
	public void setBookCerType(String bookCerType) {
		this.bookCerType = bookCerType;
	}
	
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookPhone() {
		return bookPhone;
	}
	public void setBookPhone(String bookPhone) {
		this.bookPhone = bookPhone;
	}
	public Date getArriveTime() {
		return arriveTime;
	}
	public void setArriveTime(Date arriveTime) {
		this.arriveTime = arriveTime;
	}
	public Date getLeaveTime() {
		return leaveTime;
	}
	public void setLeaveTime(Date leaveTime) {
		this.leaveTime = leaveTime;
	}
	public int getPersonNum() {
		return personNum;
	}
	public void setPersonNum(int personNum) {
		this.personNum = personNum;
	}
	public int getRoomNum() {
		return roomNum;
	}
	public void setRoomNum(int roomNum) {
		this.roomNum = roomNum;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getTips() {
		return tips;
	}
	public void setTips(String tips) {
		this.tips = tips;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getBookCerNumber() {
		return bookCerNumber;
	}
	public void setBookCerNumber(String bookCerNumber) {
		this.bookCerNumber = bookCerNumber;
	}
	public Double getRate() {
		return rate;
	}
	public void setRate(Double rate) {
		this.rate = rate;
	}
	public String getLoginType() {
		return loginType;
	}
	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}	

	
}
