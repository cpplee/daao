package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class HotelInfoSeter implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6208770750864314634L;
	private long id;					
	private long accountId;		
	private long setHotelId;				
	private String setName;				
	private String setPosition;			
	private String setTel;					
	private String setMobile;				
	private String setEmail;				
	private String setWechat;				
	private String setQq;
	private String hotelname;
	private long hotelId;
	public long getHotelId() {
		return hotelId;
	}
	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}
	public long getId() {
		return id;
	}
	public String getHotelname() {
		return hotelname;
	}
	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getAccountId() {
		return accountId;
	}
	public void setAccountId(long accountId) {
		this.accountId = accountId;
	}
	public long getSetHotelId() {
		return setHotelId;
	}
	public void setSetHotelId(long setHotelId) {
		this.setHotelId = setHotelId;
	}
	public String getSetName() {
		return setName;
	}
	public void setSetName(String setName) {
		this.setName = setName;
	}
	public String getSetPosition() {
		return setPosition;
	}
	public void setSetPosition(String setPosition) {
		this.setPosition = setPosition;
	}
	public String getSetTel() {
		return setTel;
	}
	public void setSetTel(String setTel) {
		this.setTel = setTel;
	}
	public String getSetMobile() {
		return setMobile;
	}
	public void setSetMobile(String setMobile) {
		this.setMobile = setMobile;
	}
	public String getSetEmail() {
		return setEmail;
	}
	public void setSetEmail(String setEmail) {
		this.setEmail = setEmail;
	}
	public String getSetWechat() {
		return setWechat;
	}
	public void setSetWechat(String setWechat) {
		this.setWechat = setWechat;
	}
	public String getSetQq() {
		return setQq;
	}
	public void setSetQq(String setQq) {
		this.setQq = setQq;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
		
	
	


}
