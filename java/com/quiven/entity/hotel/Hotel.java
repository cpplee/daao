package com.quiven.entity.hotel;

import java.io.Serializable;

import com.quiven.entity.Bean;

public class Hotel implements Bean, Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 4342946536064606980L;
	
	private long id;				
	private String cname;				
	private String ename;				
	private String city; 				
	private String postAs;				
	private String country;			
	private String hotelCounty;		
	private String province;			
	private String telephone;		
	private String fax; 	
	private String hotelIntro;
	private String email;				
	private String region;
	private String hotelCode;
	private String imgUrl;
	private String locationDes;			
	private int collection;				
	private boolean enable;
	private long  hotelPrice;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPostAs() {
		return postAs;
	}
	public void setPostAs(String postAs) {
		this.postAs = postAs;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getHotelCounty() {
		return hotelCounty;
	}
	public void setHotelCounty(String hotelCounty) {
		this.hotelCounty = hotelCounty;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getLocationDes() {
		return locationDes;
	}
	public void setLocationDes(String locationDes) {
		this.locationDes = locationDes;
	}
	public int getCollection() {
		return collection;
	}
	public void setCollection(int collection) {
		this.collection = collection;
	}
	public boolean isEnable() {
		return enable;
	}
	public void setEnable(boolean enable) {
		this.enable = enable;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getHotelCode() {
		return hotelCode;
	}
	public void setHotelCode(String hotelCode) {
		this.hotelCode = hotelCode;
	}
	public String getHotelIntro() {
		return hotelIntro;
	}
	public void setHotelIntro(String hotelIntro) {
		this.hotelIntro = hotelIntro;
	}
	public long getHotelPrice() {
		return hotelPrice;
	}
	public void setHotelPrice(long hotelPrice) {
		this.hotelPrice = hotelPrice;
	} 		
	

}
