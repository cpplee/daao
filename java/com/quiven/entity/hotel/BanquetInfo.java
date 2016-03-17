package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class BanquetInfo implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1528022668549364302L;
	private long id;					
	private long hotelId;				
	private String banName;				
	private String banCode;				
	private String banType;				
	private String banLocation;			
	private String banContain;				
	private String banSpecialIntro;			
	private String banCombo;
	private String banImgurl;
	private String banPrivilige;				
	private int banSize;					
	private String banDimension;
	private long banqPrice;
	
	
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
	public String getBanName() {
		return banName;
	}
	public void setBanName(String banName) {
		this.banName = banName;
	}
	public String getBanCode() {
		return banCode;
	}
	public void setBanCode(String banCode) {
		this.banCode = banCode;
	}
	public String getBanType() {
		return banType;
	}
	public void setBanType(String banType) {
		this.banType = banType;
	}
	public String getBanLocation() {
		return banLocation;
	}
	public void setBanLocation(String banLocation) {
		this.banLocation = banLocation;
	}
	public String getBanContain() {
		return banContain;
	}
	public void setBanContain(String banContain) {
		this.banContain = banContain;
	}
	public String getBanSpecialIntro() {
		return banSpecialIntro;
	}
	public void setBanSpecialIntro(String banSpecialIntro) {
		this.banSpecialIntro = banSpecialIntro;
	}
	public String getBanCombo() {
		return banCombo;
	}
	public void setBanCombo(String banCombo) {
		this.banCombo = banCombo;
	}

	public int getBanSize() {
		return banSize;
	}
	public void setBanSize(int banSize) {
		this.banSize = banSize;
	}
	public String getBanDimension() {
		return banDimension;
	}
	public void setBanDimension(String banDimension) {
		this.banDimension = banDimension;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getBanPrivilige() {
		return banPrivilige;
	}
	public void setBanPrivilige(String banPrivilige) {
		this.banPrivilige = banPrivilige;
	}
	public String getBanImgurl() {
		return banImgurl;
	}
	public void setBanImgurl(String banImgurl) {
		this.banImgurl = banImgurl;
	}

	public long getBanqPrice() {
		return banqPrice;
	}
	public void setBanqPrice(long banqPrice) {
		this.banqPrice = banqPrice;
	}
	
}
