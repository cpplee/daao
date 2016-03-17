package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class PropmtionActivity implements Bean {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
	private long hotelId;
	private String propActivityName;
	private String propActivityCompany;
	private String propActivityCode;
	private String propActivityCondition;
	private String propActivityImgurl;
	
	
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
	public String getPropActivityName() {
		return propActivityName;
	}
	public void setPropActivityName(String propActivityName) {
		this.propActivityName = propActivityName;
	}
	public String getPropActivityCompany() {
		return propActivityCompany;
	}
	public void setPropActivityCompany(String propActivityCompany) {
		this.propActivityCompany = propActivityCompany;
	}
	public String getPropActivityCode() {
		return propActivityCode;
	}
	public void setPropActivityCode(String propActivityCode) {
		this.propActivityCode = propActivityCode;
	}
	public String getPropActivityCondition() {
		return propActivityCondition;
	}
	public void setPropActivityCondition(String propActivityCondition) {
		this.propActivityCondition = propActivityCondition;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getPropActivityImgurl() {
		return propActivityImgurl;
	}
	public void setPropActivityImgurl(String propActivityImgurl) {
		this.propActivityImgurl = propActivityImgurl;
	}
	
	
	
	
	

}
