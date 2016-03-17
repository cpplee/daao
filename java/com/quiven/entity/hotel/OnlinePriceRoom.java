package com.quiven.entity.hotel;

import java.util.Date;

import com.quiven.entity.Bean;

public class OnlinePriceRoom implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7523635519697409817L;
	private long id;						
	private long hotelId;					
	private String onlinePayType;				
	private String roomType;	
	private Date onlineStartDate;
	private Date onlineEndDate;
	private String onlinePackageCode;
	private String onlineHotelCode;					
	private double onlinePrice;
	private String onlineProjectName;						
	private float onlineSupplements;
	

	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getHotelId() {
		return hotelId;
	}
	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}
	public String getOnlinePayType() {
		return onlinePayType;
	}
	public void setOnlinePayType(String onlinePayType) {
		this.onlinePayType = onlinePayType;
	}
	
	public double getOnlinePrice() {
		return onlinePrice;
	}
	public void setOnlinePrice(double onlinePrice) {
		this.onlinePrice = onlinePrice;
	}
	
	public float getOnlineSupplements() {
		return onlineSupplements;
	}
	public void setOnlineSupplements(float onlineSupplements) {
		this.onlineSupplements = onlineSupplements;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public Date getOnlineStartDate() {
		return onlineStartDate;
	}
	public void setOnlineStartDate(Date onlineStartDate) {
		this.onlineStartDate = onlineStartDate;
	}
	public Date getOnlineEndDate() {
		return onlineEndDate;
	}
	public void setOnlineEndDate(Date onlineEndDate) {
		this.onlineEndDate = onlineEndDate;
	}
	public String getOnlinePackageCode() {
		return onlinePackageCode;
	}
	public void setOnlinePackageCode(String onlinePackageCode) {
		this.onlinePackageCode = onlinePackageCode;
	}
	public String getOnlineHotelCode() {
		return onlineHotelCode;
	}
	public void setOnlineHotelCode(String onlineHotelCode) {
		this.onlineHotelCode = onlineHotelCode;
	}
	
	public String getOnlineProjectName() {
		return onlineProjectName;
	}
	public void setOnlineProjectName(String onlineProjectName) {
		this.onlineProjectName = onlineProjectName;
	}
	
	
	


}
