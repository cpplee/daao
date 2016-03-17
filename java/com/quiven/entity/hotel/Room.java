package com.quiven.entity.hotel;

import java.io.Serializable;

import com.quiven.entity.Bean;

public class Room implements Bean, Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5715918230810772817L;
	private long id;
	private long hotelId;
	private String type;
	private String roomDescription;
	
	
	public String getRoomDescription() {
		return roomDescription;
	}
	public void setRoomDescription(String roomDescription) {
		this.roomDescription = roomDescription;
	}
	
	
	private Hotel hotel;
	
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	

}
