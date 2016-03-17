package com.quiven.entity.hotel;

import java.io.Serializable;

import com.quiven.entity.Bean;

public class RoomPhoto implements Bean, Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6631503995968427565L;
	/**
	 * 
	 */
	private long id;							
	private long hotelId;
	private String url;					
	private long roomId;				

	private Hotel hotel;
	private Room room;
	
	
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public long getRoomId() {
		return roomId;
	}
	public void setRoomId(long roomId) {
		this.roomId = roomId;
	}
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
	public Room getRoom() {
		return room;
	}
	public void setRoom(Room room) {
		this.room = room;
	}

	
	
	

}
