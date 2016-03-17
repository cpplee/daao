package com.quiven.entity.member;

import java.util.Date;

import com.quiven.entity.Bean;

public class MemberCommonContact implements Bean{
	/**
	 * 
	 */
	private static long serialVersionUID = 1725093377914193770L;
	/**
	 * 
	 */

	private long id;			
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public static void setSerialversionuid(long serialversionuid) {
		serialVersionUID = serialversionuid;
	}
	
	private String contactPointStatus;
	private long memberId;	
	private String contactName;		
	private String contactPhone;		
	private boolean contactSex;	
	private String contactHotelName;
	private String contactMemLevel;
	private String contactMemNum;
	private Date contactDob;			
	
	
	
	
	
	public String getContactPointStatus() {
		return contactPointStatus;
	}
	public void setContactPointStatus(String contactPointStatus) {
		this.contactPointStatus = contactPointStatus;
	}

	private String contactCertificate;
	private String contactCerNum;
	private String contactCompanyName;
	
	
	
	
	public String getContactCompanyName() {
		return contactCompanyName;
	}
	public void setContactCompanyName(String contactCompanyName) {
		this.contactCompanyName = contactCompanyName;
	}
	
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
	public String getContactName() {
		return contactName;
	}
	public void setContactName(String contactName) {
		this.contactName = contactName;
	}
	public String getContactPhone() {
		return contactPhone;
	}
	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}
	
	public boolean isContactSex() {
		return contactSex;
	}
	public void setContactSex(boolean contactSex) {
		this.contactSex = contactSex;
	}
	public String getContactHotelName() {
		return contactHotelName;
	}
	public void setContactHotelName(String contactHotelName) {
		this.contactHotelName = contactHotelName;
	}
	public String getContactMemLevel() {
		return contactMemLevel;
	}
	public void setContactMemLevel(String contactMemLevel) {
		this.contactMemLevel = contactMemLevel;
	}
	public String getContactMemNum() {
		return contactMemNum;
	}
	public void setContactMemNum(String contactMemNum) {
		this.contactMemNum = contactMemNum;
	}
	public Date getContactDob() {
		return contactDob;
	}
	public void setContactDob(Date contactDob) {
		this.contactDob = contactDob;
	}
	public String getContactCertificate() {
		return contactCertificate;
	}
	public void setContactCertificate(String contactCertificate) {
		this.contactCertificate = contactCertificate;
	}
	public String getContactCerNum() {
		return contactCerNum;
	}
	public void setContactCerNum(String contactCerNum) {
		this.contactCerNum = contactCerNum;
	}

	



}
