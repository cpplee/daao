package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class Store implements Bean{
	/**
	 * 
	 */
	private static final long serialVersionUID = 5631385879468230582L;
	private long id;		
	private long hotelId;
	private String storeName;	
	private String storeContent;
	private String storeLocation;
	private String storeImgurl;
	private String storeCode;
	private long storePrice;
	
	
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
	
	public String getStoreCode() {
		return storeCode;
	}
	public void setStoreCode(String storeCode) {
		this.storeCode = storeCode;
	}
	public String getStoreName() {
		return storeName;
	}
	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}
	public String getStoreContent() {
		return storeContent;
	}
	public void setStoreContent(String storeContent) {
		this.storeContent = storeContent;
	}
	public String getStoreLocation() {
		return storeLocation;
	}
	public void setStoreLocation(String storeLocation) {
		this.storeLocation = storeLocation;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getStoreImgurl() {
		return storeImgurl;
	}
	public void setStoreImgurl(String storeImgurl) {
		this.storeImgurl = storeImgurl;
	}

	public long getStorePrice() {
		return storePrice;
	}
	public void setStorePrice(long storePrice) {
		this.storePrice = storePrice;
	}
	
	


}
