package com.quiven.entity.member;

import java.util.Date;

import com.quiven.entity.Bean;

public class MemberBookingRestaurant implements Bean {
	
	private static final long serialVersionUID = 1L;
	private long id;
	private long memberId;
	private long hotelId;
	private long resaurantId;
	private Date eatTime;
	private Date eatDate;
	private String bookManName;
	private long manNum;
	private String bookRestaurantName;
	private String bookRestaurantCerType;
	private String bookRestaurantCerNumber;
	private String bookRestaurantPhone;
	private String bookRestaurantPrice;
	private String serveName;
	private String tips;
	private String state;
	
	//外部使用变量
	private String eatdate;
	
	
	
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
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
	
	public Date getEatTime() {
		return eatTime;
	}
	public void setEatTime(Date eatTime) {
		this.eatTime = eatTime;
	}
	public Date getEatDate() {
		return eatDate;
	}
	public void setEatDate(Date eatDate) {
		this.eatDate = eatDate;
	}
	public long getManNum() {
		return manNum;
	}
	public void setManNum(long manNum) {
		this.manNum = manNum;
	}
	public String getBookRestaurantName() {
		return bookRestaurantName;
	}
	public void setBookRestaurantName(String bookRestaurantName) {
		this.bookRestaurantName = bookRestaurantName;
	}
	public String getBookRestaurantCerType() {
		return bookRestaurantCerType;
	}
	public void setBookRestaurantCerType(String bookRestaurantCerType) {
		this.bookRestaurantCerType = bookRestaurantCerType;
	}
	public String getBookRestaurantCerNumber() {
		return bookRestaurantCerNumber;
	}
	public void setBookRestaurantCerNumber(String bookRestaurantCerNumber) {
		this.bookRestaurantCerNumber = bookRestaurantCerNumber;
	}
	public String getBookRestaurantPhone() {
		return bookRestaurantPhone;
	}
	public void setBookRestaurantPhone(String bookRestaurantPhone) {
		this.bookRestaurantPhone = bookRestaurantPhone;
	}
	public String getBookRestaurantPrice() {
		return bookRestaurantPrice;
	}
	public void setBookRestaurantPrice(String bookRestaurantPrice) {
		this.bookRestaurantPrice = bookRestaurantPrice;
	}
	public String getServeName() {
		return serveName;
	}
	public void setServeName(String serveName) {
		this.serveName = serveName;
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
	public String getBookManName() {
		return bookManName;
	}
	public void setBookManName(String bookManName) {
		this.bookManName = bookManName;
	}
	public String getEatdate() {
		return eatdate;
	}
	public void setEatdate(String eatdate) {
		this.eatdate = eatdate;
	}
	public long getResaurantId() {
		return resaurantId;
	}
	public void setResaurantId(long resaurantId) {
		this.resaurantId = resaurantId;
	}
	
}
