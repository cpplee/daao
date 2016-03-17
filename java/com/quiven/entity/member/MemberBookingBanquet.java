package com.quiven.entity.member;

import java.util.Date;

import com.quiven.entity.Bean;

public class MemberBookingBanquet implements Bean {

	private static final long serialVersionUID = 1L;
	private long id;
	private long memberId;
	private long hotelId;
	private long banquetId;
	private String bookName;
	private String bookBanquetName;
	private String bookBanquetCerType;
	private String bookBanquetCerNumber;
	private String bookBanquetPhone;
	private String state;
	private Date startDate;
	private Date endDate;
	private String useType;
	private long peopleNum;
	private long price;
	private String tips;

	// 外部使用变量
	private String starttime;
	private String endtime;

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

	public long getBanquetId() {
		return banquetId;
	}

	public void setBanquetId(long banquetId) {
		this.banquetId = banquetId;
	}

	public String getBookBanquetName() {
		return bookBanquetName;
	}

	public void setBookBanquetName(String bookBanquetName) {
		this.bookBanquetName = bookBanquetName;
	}

	public String getBookBanquetCerType() {
		return bookBanquetCerType;
	}

	public void setBookBanquetCerType(String bookBanquetCerType) {
		this.bookBanquetCerType = bookBanquetCerType;
	}

	public String getBookBanquetCerNumber() {
		return bookBanquetCerNumber;
	}

	public void setBookBanquetCerNumber(String bookBanquetCerNumber) {
		this.bookBanquetCerNumber = bookBanquetCerNumber;
	}

	public String getBookBanquetPhone() {
		return bookBanquetPhone;
	}

	public void setBookBanquetPhone(String bookBanquetPhone) {
		this.bookBanquetPhone = bookBanquetPhone;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getUseType() {
		return useType;
	}

	public void setUseType(String useType) {
		this.useType = useType;
	}

	public long getPeopleNum() {
		return peopleNum;
	}

	public void setPeopleNum(long peopleNum) {
		this.peopleNum = peopleNum;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
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

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

}
