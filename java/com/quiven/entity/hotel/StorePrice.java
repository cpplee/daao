package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class StorePrice implements Bean{
	/**
	 * 
	 */
	private static final long serialVersionUID = 5631385879468230582L;
	private long id;		
	private long storeId;
	private String storePrice;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getStoreId() {
		return storeId;
	}
	public void setStoreId(long storeId) {
		this.storeId = storeId;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getStorePrice() {
		return storePrice;
	}
	public void setStorePrice(String storePrice) {
		this.storePrice = storePrice;
	}	
	
	


}
