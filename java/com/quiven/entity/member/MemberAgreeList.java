package com.quiven.entity.member;

import java.util.Date;

import com.quiven.entity.Bean;

public class MemberAgreeList implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 9023079812843469440L;
	private long id;			
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	private long memberId;	
	private String roomType;
	private String hotelName;
		
	private double price;		
	private String agreeCode;	
	private Date validDate;
	
	
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

	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getAgreeCode() {
		return agreeCode;
	}
	public void setAgreeCode(String agreeCode) {
		this.agreeCode = agreeCode;
	}
	public Date getValidDate() {
		return validDate;
	}
	public void setValidDate(Date validDate) {
		this.validDate = validDate;
	}	
	
	

}
