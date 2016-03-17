package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class HotelSaleIncharger implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2717403381700912359L;
	private long id;	
	private long accountId;
	private long hotelId;				
	private String incName;				
	private String incPosition;			
	private String incTel;					
	private String incMobile;				
	private String incEmail;				
	private String incWechat;				
	private String incQq;
	
	
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
	public String getIncName() {
		return incName;
	}
	public void setIncName(String incName) {
		this.incName = incName;
	}
	public String getIncPosition() {
		return incPosition;
	}
	public void setIncPosition(String incPosition) {
		this.incPosition = incPosition;
	}
	public String getIncTel() {
		return incTel;
	}
	public void setIncTel(String incTel) {
		this.incTel = incTel;
	}
	public String getIncMobile() {
		return incMobile;
	}
	public void setIncMobile(String incMobile) {
		this.incMobile = incMobile;
	}
	public String getIncEmail() {
		return incEmail;
	}
	public void setIncEmail(String incEmail) {
		this.incEmail = incEmail;
	}
	public String getIncWechat() {
		return incWechat;
	}
	public void setIncWechat(String incWechat) {
		this.incWechat = incWechat;
	}
	public String getIncQq() {
		return incQq;
	}
	public void setIncQq(String incQq) {
		this.incQq = incQq;
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
