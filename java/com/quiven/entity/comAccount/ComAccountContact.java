package com.quiven.entity.comAccount;

import java.util.Date;

import com.quiven.entity.Bean;

public class ComAccountContact implements Bean {

	/**
	 * 
	 */
	private static final long serialVersionUID = 9043399624201025365L;

	private long id;								
	private long comAccountId;	
	private long salerId;	
	private String comContactName; 				
	private String comContactPosition;			
	private String comContactTel;					
	private String comContactMobile;				
	private String comContactEmail;			
	private String comContactFax;					
	private String comContactSkype;				
	private String comContactWebchat;				
	private String comContactQq;					
	private Date dob;									
	private String spouse;							
	private boolean enable;						
	private boolean retired;
	private ComAccount comAccount;
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getComAccountId() {
		return comAccountId;
	}
	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}
	public String getComContactName() {
		return comContactName;
	}
	public void setComContactName(String comContactName) {
		this.comContactName = comContactName;
	}
	public String getComContactPosition() {
		return comContactPosition;
	}
	public void setComContactPosition(String comContactPosition) {
		this.comContactPosition = comContactPosition;
	}
	public String getComContactTel() {
		return comContactTel;
	}
	public void setComContactTel(String comContactTel) {
		this.comContactTel = comContactTel;
	}

	public String getComContactWebchat() {
		return comContactWebchat;
	}
	public void setComContactWebchat(String comContactWebchat) {
		this.comContactWebchat = comContactWebchat;
	}
	public String getComContactQq() {
		return comContactQq;
	}
	public void setComContactQq(String comContactQq) {
		this.comContactQq = comContactQq;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getSpouse() {
		return spouse;
	}
	public void setSpouse(String spouse) {
		this.spouse = spouse;
	}
	public boolean isEnable() {
		return enable;
	}
	public void setEnable(boolean enable) {
		this.enable = enable;
	}
	public boolean isRetired() {
		return retired;
	}
	public void setRetired(boolean retired) {
		this.retired = retired;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getComContactMobile() {
		return comContactMobile;
	}
	public void setComContactMobile(String comContactMobile) {
		this.comContactMobile = comContactMobile;
	}
	public String getComContactEmail() {
		return comContactEmail;
	}
	public void setComContactEmail(String comContactEmail) {
		this.comContactEmail = comContactEmail;
	}
	public String getComContactFax() {
		return comContactFax;
	}
	public void setComContactFax(String comContactFax) {
		this.comContactFax = comContactFax;
	}
	public String getComContactSkype() {
		return comContactSkype;
	}
	public void setComContactSkype(String comContactSkype) {
		this.comContactSkype = comContactSkype;
	}
	public ComAccount getComAccount() {
		return comAccount;
	}
	public void setComAccount(ComAccount comAccount) {
		this.comAccount = comAccount;
	}
	public long getSalerId() {
		return salerId;
	}
	public void setSalerId(long salerId) {
		this.salerId = salerId;
	}
	
	
	
	
}
