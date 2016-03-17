package com.quiven.entity.comAccount;

import java.util.Date;

import com.quiven.entity.Bean;

public class ComAccountActivityPlan implements Bean {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2276730299694843040L;
	
	private long id;								
	private long salerId;								
	private long comAccountId;
	private long comAccountContactsId;
	private Date activityDate;
	private Date activityTime;
	private String activityDescription;						
	private double cost;								
	private double outcome;
	private String activityAddress;
	private String activityPerson;
	private double retonin;
	
	private String companyName;
	
	
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
	
	public long getComAccountContactsId() {
		return comAccountContactsId;
	}
	public void setComAccountContactsId(long comAccountContactsId) {
		this.comAccountContactsId = comAccountContactsId;
	}

	public String getActivityDescription() {
		return activityDescription;
	}
	public void setActivityDescription(String activityDescription) {
		this.activityDescription = activityDescription;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getActivityAddress() {
		return activityAddress;
	}
	public void setActivityAddress(String activityAddress) {
		this.activityAddress = activityAddress;
	}
	public long getComAccountId() {
		return comAccountId;
	}
	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}
	public String getActivityPerson() {
		return activityPerson;
	}
	public void setActivityPerson(String activityPerson) {
		this.activityPerson = activityPerson;
	}
	public double getRetonin() {
		return retonin;
	}
	public void setRetonin(double retonin) {
		this.retonin = retonin;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public double getOutcome() {
		return outcome;
	}
	public void setOutcome(double outcome) {
		this.outcome = outcome;
	}
	public Date getActivityDate() {
		return activityDate;
	}
	public void setActivityDate(Date activityDate) {
		this.activityDate = activityDate;
	}
	public Date getActivityTime() {
		return activityTime;
	}
	public void setActivityTime(Date activityTime) {
		this.activityTime = activityTime;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}


	

	
	
	

}
