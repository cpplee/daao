package com.quiven.entity.comAccount;

import java.util.Date;

import com.quiven.entity.Bean;
import com.quiven.entity.hotel.BanquetInfo;

public class ComAccountBookBanquet implements Bean {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2233473340329629496L;
	private long id;																															
	private long salerId;								
	private long comAccountId;									
	private String banquetContactName;									
	private long hotelId;												
	private long banquetId;											
	private Date banquetArrive;																						
	private Date banquetDepart;																						
	private String banquetResId;																													
	private String banquetStatus;														
	private double banquetRate;																																
	private int banquetCutoff;																									
	private boolean banquetConfirmation;
	private String banquetBookType;
	private String banquetBookingNum;
	private BanquetInfo banquetinfo;
	private boolean enable;
	
	private String banquetHotelName;
	
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

	public long getHotelId() {
		return hotelId;
	}
	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}
	public long getBanquetId() {
		return banquetId;
	}
	public void setBanquetId(long banquetId) {
		this.banquetId = banquetId;
	}
	
	
	public BanquetInfo getBanquetinfo() {
		return banquetinfo;
	}
	public void setBanquetinfo(BanquetInfo banquetinfo) {
		this.banquetinfo = banquetinfo;
	}

	public Date getBanquetArrive() {
		return banquetArrive;
	}
	public void setBanquetArrive(Date banquetArrive) {
		this.banquetArrive = banquetArrive;
	}
	public Date getBanquetDepart() {
		return banquetDepart;
	}
	public void setBanquetDepart(Date banquetDepart) {
		this.banquetDepart = banquetDepart;
	}

	public boolean isEnable() {
		return enable;
	}
	public void setEnable(boolean enable) {
		this.enable = enable;
	}
	public boolean isBanquetConfirmation() {
		return banquetConfirmation;
	}
	public void setBanquetConfirmation(boolean banquetConfirmation) {
		this.banquetConfirmation = banquetConfirmation;
	}
	public String getBanquetBookingNum() {
		return banquetBookingNum;
	}
	public void setBanquetBookingNum(String banquetBookingNum) {
		this.banquetBookingNum = banquetBookingNum;
	}
	public String getBanquetResId() {
		return banquetResId;
	}
	public void setBanquetResId(String banquetResId) {
		this.banquetResId = banquetResId;
	}
	public String getBanquetStatus() {
		return banquetStatus;
	}
	public void setBanquetStatus(String banquetStatus) {
		this.banquetStatus = banquetStatus;
	}
	public double getBanquetRate() {
		return banquetRate;
	}
	public void setBanquetRate(double banquetRate) {
		this.banquetRate = banquetRate;
	}
	public int getBanquetCutoff() {
		return banquetCutoff;
	}
	public void setBanquetCutoff(int banquetCutoff) {
		this.banquetCutoff = banquetCutoff;
	}
	public String getBanquetBookType() {
		return banquetBookType;
	}
	public void setBanquetBookType(String banquetBookType) {
		this.banquetBookType = banquetBookType;
	}
	public String getBanquetContactName() {
		return banquetContactName;
	}
	public void setBanquetContactName(String banquetContactName) {
		this.banquetContactName = banquetContactName;
	}
	public String getBanquetHotelName() {
		return banquetHotelName;
	}
	public void setBanquetHotelName(String banquetHotelName) {
		this.banquetHotelName = banquetHotelName;
	}

	
}
