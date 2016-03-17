package com.quiven.entity.hotel;

import java.util.Date;

import com.quiven.entity.Bean;

public class ContractRoomPrice implements Bean{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5737181630210579882L;
	private long id;							
	private long hotelId;						
	private String contractCusType;	
	private String contractPackageCode;
	private Date contractStartDate;
	private Date contractEndDate;
	private String roomType;							
	private double contractPrice;				
	private String contractProjectName;			
	private String contractPriceType;				
	private String contractPriceCode;				
	private float contractSupplements;
	
	
	
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
	public String getContractCusType() {
		return contractCusType;
	}
	public void setContractCusType(String contractCusType) {
		this.contractCusType = contractCusType;
	}
	public String getContractPackageCode() {
		return contractPackageCode;
	}
	public void setContractPackageCode(String contractPackageCode) {
		this.contractPackageCode = contractPackageCode;
	}
	public Date getContractStartDate() {
		return contractStartDate;
	}
	public void setContractStartDate(Date contractStartDate) {
		this.contractStartDate = contractStartDate;
	}
	public Date getContractEndDate() {
		return contractEndDate;
	}
	public void setContractEndDate(Date contractEndDate) {
		this.contractEndDate = contractEndDate;
	}
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public double getContractPrice() {
		return contractPrice;
	}
	public void setContractPrice(double contractPrice) {
		this.contractPrice = contractPrice;
	}
	public String getContractProjectName() {
		return contractProjectName;
	}
	public void setContractProjectName(String contractProjectName) {
		this.contractProjectName = contractProjectName;
	}
	public String getContractPriceType() {
		return contractPriceType;
	}
	public void setContractPriceType(String contractPriceType) {
		this.contractPriceType = contractPriceType;
	}
	public String getContractPriceCode() {
		return contractPriceCode;
	}
	public void setContractPriceCode(String contractPriceCode) {
		this.contractPriceCode = contractPriceCode;
	}
	public float getContractSupplements() {
		return contractSupplements;
	}
	public void setContractSupplements(float contractSupplements) {
		this.contractSupplements = contractSupplements;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}					

	
}
