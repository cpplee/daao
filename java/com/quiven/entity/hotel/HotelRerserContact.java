package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class HotelRerserContact implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1898792547439190137L;
	private long id;	
	private long hotelId;
	private long accountId;				
	private String conName;				
	private String conPosition;			
	private String conTel;					
	private String conMobile;				
	private String conEmail;				
	private String conWechat;				
	private String conQq;
	
	
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getConName() {
		return conName;
	}
	public void setConName(String conName) {
		this.conName = conName;
	}
	public String getConPosition() {
		return conPosition;
	}
	public void setConPosition(String conPosition) {
		this.conPosition = conPosition;
	}
	public String getConTel() {
		return conTel;
	}
	public void setConTel(String conTel) {
		this.conTel = conTel;
	}
	public String getConMobile() {
		return conMobile;
	}
	public void setConMobile(String conMobile) {
		this.conMobile = conMobile;
	}
	public String getConEmail() {
		return conEmail;
	}
	public void setConEmail(String conEmail) {
		this.conEmail = conEmail;
	}
	public String getConWechat() {
		return conWechat;
	}
	public void setConWechat(String conWechat) {
		this.conWechat = conWechat;
	}
	public String getConQq() {
		return conQq;
	}
	public void setConQq(String conQq) {
		this.conQq = conQq;
	}
	public long getAccountId() {
		return accountId;
	}
	public void setAccountId(long accountId) {
		this.accountId = accountId;
	}
	
	


}
