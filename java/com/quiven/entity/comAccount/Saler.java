package com.quiven.entity.comAccount;

import java.util.Date;

import com.quiven.entity.Bean;

public class Saler implements Bean {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8284881692239478342L;
	
	
	private long id;	
	private long accountId;					
	private String name;
	private String level;				
	private long leaderId;					
	private long hotelId;					
	private long marketId;				
	private String email;				
	private String officePhone;		
	private String fax;					
	private String mobilePhone;
	private Date startTime;
	private Date birth;
	private String sex;
	private String hotelname;
	private String position;
	private String salerCode;
	
	public long getId() {
		return id;
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
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public long getLeaderId() {
		return leaderId;
	}
	public void setLeaderId(long leaderId) {
		this.leaderId = leaderId;
	}
	public long getHotelId() {
		return hotelId;
	}
	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}
	public long getMarketId() {
		return marketId;
	}
	public void setMarketId(long marketId) {
		this.marketId = marketId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getOfficePhone() {
		return officePhone;
	}
	public void setOfficePhone(String officePhone) {
		this.officePhone = officePhone;
	}
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	public String getMobilePhone() {
		return mobilePhone;
	}
	public void setMobilePhone(String mobilePhone) {
		this.mobilePhone = mobilePhone;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getHotelname() {
		return hotelname;
	}
	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getSalerCode() {
		return salerCode;
	}
	public void setSalerCode(String salerCode) {
		this.salerCode = salerCode;
	}		
	
	


	

}
