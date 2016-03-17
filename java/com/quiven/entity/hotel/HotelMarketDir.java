package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class HotelMarketDir implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1875772623929114147L;
	private long id;
	private long accountId;
	private long hotelId;				
	private String dirName;				
	private String dirPosition;			
	private String dirTel;					
	private String dirMobile;				
	private String dirEmail;				
	private String dirWechat;				
	private String dirQq;
	
	
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
	public String getDirName() {
		return dirName;
	}
	public void setDirName(String dirName) {
		this.dirName = dirName;
	}
	public String getDirPosition() {
		return dirPosition;
	}
	public void setDirPosition(String dirPosition) {
		this.dirPosition = dirPosition;
	}
	public String getDirTel() {
		return dirTel;
	}
	public void setDirTel(String dirTel) {
		this.dirTel = dirTel;
	}
	public String getDirMobile() {
		return dirMobile;
	}
	public void setDirMobile(String dirMobile) {
		this.dirMobile = dirMobile;
	}
	public String getDirEmail() {
		return dirEmail;
	}
	public void setDirEmail(String dirEmail) {
		this.dirEmail = dirEmail;
	}
	public String getDirWechat() {
		return dirWechat;
	}
	public void setDirWechat(String dirWechat) {
		this.dirWechat = dirWechat;
	}
	public String getDirQq() {
		return dirQq;
	}
	public void setDirQq(String dirQq) {
		this.dirQq = dirQq;
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
