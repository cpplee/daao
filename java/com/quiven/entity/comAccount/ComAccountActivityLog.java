package com.quiven.entity.comAccount;

import java.util.Date;

import com.quiven.entity.Bean;

public class ComAccountActivityLog implements Bean{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3091980374639796641L;
	private long id;								
	private long salerId;					 		
	private long comAccountId;						
	private String actlogPerson;				
	private Date actlogDate;	
	private Date actlogTime;	
	private String activityDetail;					
	private String remarks;							
	private String reviews;
	
	private String salerName;
	private ComAccount comAccount;


	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getSalerId() {
		return salerId;
	}
	public void setSalerId(long salerId) {
		this.salerId = salerId;
	}
	public long getComAccountId() {
		return comAccountId;
	}
	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}


	public String getActivityDetail() {
		return activityDetail;
	}
	public void setActivityDetail(String activityDetail) {
		this.activityDetail = activityDetail;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String reviews) {
		this.reviews = reviews;
	}
	public ComAccount getComAccount() {
		return comAccount;
	}
	public void setComAccount(ComAccount comAccount) {
		this.comAccount = comAccount;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Date getActlogDate() {
		return actlogDate;
	}
	public void setActlogDate(Date actlogDate) {
		this.actlogDate = actlogDate;
	}
	public Date getActlogTime() {
		return actlogTime;
	}
	public void setActlogTime(Date actlogTime) {
		this.actlogTime = actlogTime;
	}
	public String getActlogPerson() {
		return actlogPerson;
	}
	public void setActlogPerson(String actlogPerson) {
		this.actlogPerson = actlogPerson;
	}
	public String getSalerName() {
		return salerName;
	}
	public void setSalerName(String salerName) {
		this.salerName = salerName;
	}
	

}
