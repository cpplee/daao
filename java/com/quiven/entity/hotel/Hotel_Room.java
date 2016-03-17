package com.quiven.entity.hotel;

import java.io.Serializable;

import com.quiven.entity.Bean;

public class Hotel_Room implements Bean, Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 5730765660003681283L;
	private long id;
	private String roomType;	
	private String type;
	private String roomDescription; 
	private String url;
	private String hotelId;
	//网络价格
	private String onlinePayType;
	private double onlinePrice;

	
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
	
	
	public String getRoomDescription() {
		return roomDescription;
	}
	public void setRoomDescription(String roomDescription) {
		this.roomDescription = roomDescription;
	}
	
	public String getHotelId() {
		return hotelId;
	}
	public void setHotelId(String hotelId) {
		this.hotelId = hotelId;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
			
	
	
	
			
	

}
