package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class BanquetPrice implements Bean{
	/**
	 * 
	 */
	private static final long serialVersionUID = -5284385317832030527L;
	private long id;			
	private String banquetName;	
	private String banpTimeBucket;	
	private double banpPrice;		
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getBanpTimeBucket() {
		return banpTimeBucket;
	}
	public void setBanpTimeBucket(String banpTimeBucket) {
		this.banpTimeBucket = banpTimeBucket;
	}
	public double getBanpPrice() {
		return banpPrice;
	}
	public void setBanpPrice(double banpPrice) {
		this.banpPrice = banpPrice;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getBanquetName() {
		return banquetName;
	}
	public void setBanquetName(String banquetName) {
		this.banquetName = banquetName;
	}	
	


}
