package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class ResaurantBarsInfo implements Bean{
	/**
	 * 
	 */
	private static final long serialVersionUID = 2645511444907516737L;
	private long id;						
	private long hotelId;					
	private String rbaName;				
	private String rbaRbCode;				
	private String rbaLocation;			
	private long rbaPrice;				
	private int rbaBox;
	private String rbaImgurl;
	private String rbaBoxContain;			
	private String rbaSpecialService;			
	private String rbaPrivilige;
	
	
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
	public String getRbaName() {
		return rbaName;
	}
	public void setRbaName(String rbaName) {
		this.rbaName = rbaName;
	}
	public String getRbaRbCode() {
		return rbaRbCode;
	}
	public void setRbaRbCode(String rbaRbCode) {
		this.rbaRbCode = rbaRbCode;
	}
	public String getRbaLocation() {
		return rbaLocation;
	}
	public void setRbaLocation(String rbaLocation) {
		this.rbaLocation = rbaLocation;
	}
	public long getRbaPrice() {
		return rbaPrice;
	}
	public void setRbaPrice(long rbaPrice) {
		this.rbaPrice = rbaPrice;
	}
	public int getRbaBox() {
		return rbaBox;
	}
	public void setRbaBox(int rbaBox) {
		this.rbaBox = rbaBox;
	}
	public String getRbaBoxContain() {
		return rbaBoxContain;
	}
	public void setRbaBoxContain(String rbaBoxContain) {
		this.rbaBoxContain = rbaBoxContain;
	}
	public String getRbaSpecialService() {
		return rbaSpecialService;
	}
	public void setRbaSpecialService(String rbaSpecialService) {
		this.rbaSpecialService = rbaSpecialService;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getRbaPrivilige() {
		return rbaPrivilige;
	}
	public void setRbaPrivilige(String rbaPrivilige) {
		this.rbaPrivilige = rbaPrivilige;
	}
	public String getRbaImgurl() {
		return rbaImgurl;
	}
	public void setRbaImgurl(String rbaImgurl) {
		this.rbaImgurl = rbaImgurl;
	}
	
}
