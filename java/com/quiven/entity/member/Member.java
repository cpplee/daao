package com.quiven.entity.member;

import java.util.Date;

import com.quiven.entity.Bean;

public class Member implements Bean{
	
	/**
	 * 
	 */
	
	/**
	 * 
	 */
	private static long serialVersionUID = 3768935681865643526L;

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public static void setSerialversionuid(long serialversionuid) {
		serialVersionUID = serialversionuid;
	}
	/**
	 * 
	 */

	private long id ;		
	private String name	;
	private long accountId;
	private String certificate;	
	private String cerNum;	
	private String memNum	;
	private String memLevel;
	private String memType ;
	private String hotelName;	
	private String pointStatus;			
	private boolean sex;
	private Date dob;
	private String qq;
	private String wechat;
	private String hometown;
	private String phone;
	private String email;
	private String companyName;
	private String companyJob;
	private String loginType;
	private long memberCode;
	
	
	public String getMemLevel() {
		return memLevel;
	}
	public void setMemLevel(String memLevel) {
		this.memLevel = memLevel;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCompanyJob() {
		return companyJob;
	}
	public void setCompanyJob(String companyJob) {
		this.companyJob = companyJob;
	}

	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean getSex() {
		return sex;
	}
	public void setSex(boolean sex) {
		this.sex = sex;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getAccountId() {
		return accountId;
	}
	public void setAccountId(long accountId) {
		this.accountId = accountId;
	}
	public String getCertificate() {
		return certificate;
	}
	public void setCertificate(String certificate) {
		this.certificate = certificate;
	}
	public String getCerNum() {
		return cerNum;
	}
	public void setCerNum(String cerNum) {
		this.cerNum = cerNum;
	}
	public String getMemNum() {
		return memNum;
	}
	public void setMemNum(String memNum) {
		this.memNum = memNum;
	}
	
	
	
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getWechat() {
		return wechat;
	}
	public void setWechat(String wechat) {
		this.wechat = wechat;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getHometown() {
		return hometown;
	}
	public void setHometown(String hometown) {
		this.hometown = hometown;
	}
	public String getMemType() {
		return memType;
	}
	public void setMemType(String memType) {
		this.memType = memType;
	}
	public String getPointStatus() {
		return pointStatus;
	}
	public void setPointStatus(String pointStatus) {
		this.pointStatus = pointStatus;
	}
	public String getLoginType() {
		return loginType;
	}
	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}
	public long getMemberCode() {
		return memberCode;
	}
	public void setMemberCode(long memberCode) {
		this.memberCode = memberCode;
	}
	
	


}
