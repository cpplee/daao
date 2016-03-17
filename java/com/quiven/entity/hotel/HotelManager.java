package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class HotelManager implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6208770750864314634L;
	private long id;								
	private long hotelId;		
	private long accountId;	
	private String manName;				
	private String manPosition;			
	private String manTel;					
	private String manMobile;				
	private String manEmail;				
	private String manWechat;				
	private String manQq;
	
	
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
	public String getManName() {
		return manName;
	}
	public void setManName(String manName) {
		this.manName = manName;
	}
	public String getManPosition() {
		return manPosition;
	}
	public void setManPosition(String manPosition) {
		this.manPosition = manPosition;
	}
	public String getManTel() {
		return manTel;
	}
	public void setManTel(String manTel) {
		this.manTel = manTel;
	}
	public String getManMobile() {
		return manMobile;
	}
	public void setManMobile(String manMobile) {
		this.manMobile = manMobile;
	}
	public String getManEmail() {
		return manEmail;
	}
	public void setManEmail(String manEmail) {
		this.manEmail = manEmail;
	}
	public String getManWechat() {
		return manWechat;
	}
	public void setManWechat(String manWechat) {
		this.manWechat = manWechat;
	}
	public String getManQq() {
		return manQq;
	}
	public void setManQq(String manQq) {
		this.manQq = manQq;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public long getAccountId() {
		return accountId;
	}
	public void setAccountId(long accountId) {
		this.accountId = accountId;
	}
		
	
	


}
