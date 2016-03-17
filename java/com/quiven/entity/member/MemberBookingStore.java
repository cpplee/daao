package com.quiven.entity.member;

import com.quiven.entity.Bean;

public class MemberBookingStore implements Bean{
	
	
	private static final long serialVersionUID = 1L;	
	private long id;
	private long memberId;
	private long hotelId;
	private long storeId;
	private String bookName;
	private String bookStoreName;
	private String bookStoreCerType;
	private String bookStoreCerNumber;
	private String bookStorePhone;
	private	long bookStorePrice;
	private String bookStoreContent;
	private String tips;
	private String state;
	
	
	
	

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
	public long getStoreId() {
		return storeId;
	}
	public void setStoreId(long storeId) {
		this.storeId = storeId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookStoreName() {
		return bookStoreName;
	}
	public void setBookStoreName(String bookStoreName) {
		this.bookStoreName = bookStoreName;
	}
	public String getBookStoreCerType() {
		return bookStoreCerType;
	}
	public void setBookStoreCerType(String bookStoreCerType) {
		this.bookStoreCerType = bookStoreCerType;
	}
	public String getBookStoreCerNumber() {
		return bookStoreCerNumber;
	}
	public void setBookStoreCerNumber(String bookStoreCerNumber) {
		this.bookStoreCerNumber = bookStoreCerNumber;
	}
	public String getBookStorePhone() {
		return bookStorePhone;
	}
	public void setBookStorePhone(String bookStorePhone) {
		this.bookStorePhone = bookStorePhone;
	}
	
	public String getBookStoreContent() {
		return bookStoreContent;
	}
	public void setBookStoreContent(String bookStoreContent) {
		this.bookStoreContent = bookStoreContent;
	}
	public String getTips() {
		return tips;
	}
	public void setTips(String tips) {
		this.tips = tips;
	}
	public long getBookStorePrice() {
		return bookStorePrice;
	}
	public void setBookStorePrice(long bookStorePrice) {
		this.bookStorePrice = bookStorePrice;
	}
	
	
	
	
	
}
