package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class HotelMiceIncharger implements Bean{
	/**
	 * 
	 */
	private static final long serialVersionUID = -9131157111611290992L;
	private long id;
	private long accountId;
	private long hotelId;				
	private String micName;				
	private String micPosition;			
	private String micTel;					
	private String micMobile;				
	private String micEmail;				
	private String micWechat;				
	private String micQq;
	
	
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
	public String getMicName() {
		return micName;
	}
	public void setMicName(String micName) {
		this.micName = micName;
	}
	public String getMicPosition() {
		return micPosition;
	}
	public void setMicPosition(String micPosition) {
		this.micPosition = micPosition;
	}
	public String getMicTel() {
		return micTel;
	}
	public void setMicTel(String micTel) {
		this.micTel = micTel;
	}
	public String getMicMobile() {
		return micMobile;
	}
	public void setMicMobile(String micMobile) {
		this.micMobile = micMobile;
	}
	public String getMicEmail() {
		return micEmail;
	}
	public void setMicEmail(String micEmail) {
		this.micEmail = micEmail;
	}
	public String getMicWechat() {
		return micWechat;
	}
	public void setMicWechat(String micWechat) {
		this.micWechat = micWechat;
	}
	public String getMicQq() {
		return micQq;
	}
	public void setMicQq(String micQq) {
		this.micQq = micQq;
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
