package com.quiven.entity.member;

import com.quiven.entity.Bean;

public class MemberComments implements Bean{
	/**
	 * 
	 */
	private static final long serialVersionUID = 4343742156148107972L;
	private long id;			
	private long memberId;	
	private long hotelId;
	private String contents;
	
	
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
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	
	

}
