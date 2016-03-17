package com.quiven.entity.comAccount;



import java.util.Date;

import com.quiven.entity.Bean;

public class ComAccountBookRoom implements Bean {
	
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6702697291853819522L;
	
	
	private long id;								
	private long salerId;							
	private long comAccountId;						
	private String roomContactName;				
	private long hotelId;							
	private long roomId;									
	private int roomNum;							
	private Date roomArrive;						
	private Date roomDepart;
	private String roomBookingNum;
	private int roomComps;							
	private String roomResId;					
	private String roomStatus;						
	private double roomAvgRate;					
	private String roomType;						
	private int roomCutoff;									
	private String roomHouseMthd;					
	private double roomComm;						
	private String marketSeg;		
	private String roomBookType;
	private boolean roomConfirmation;
	private boolean enable;
	
	private String roomHotelName;
	
	
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
	public long getRoomId() {
		return roomId;
	}
	public void setRoomId(long roomId) {
		this.roomId = roomId;
	}
	public int getRoomNum() {
		return roomNum;
	}
	public void setRoomNum(int roomNum) {
		this.roomNum = roomNum;
	}
	
	
	public String getMarketSeg() {
		return marketSeg;
	}
	public void setMarketSeg(String marketSeg) {
		this.marketSeg = marketSeg;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Date getRoomArrive() {
		return roomArrive;
	}
	public void setRoomArrive(Date roomArrive) {
		this.roomArrive = roomArrive;
	}
	public Date getRoomDepart() {
		return roomDepart;
	}
	public void setRoomDepart(Date roomDepart) {
		this.roomDepart = roomDepart;
	}
	public boolean isEnable() {
		return enable;
	}
	public void setEnable(boolean enable) {
		this.enable = enable;
	}
	public String getRoomBookingNum() {
		return roomBookingNum;
	}
	public void setRoomBookingNum(String roomBookingNum) {
		this.roomBookingNum = roomBookingNum;
	}
	public boolean isRoomConfirmation() {
		return roomConfirmation;
	}
	public void setRoomConfirmation(boolean roomConfirmation) {
		this.roomConfirmation = roomConfirmation;
	}

	public int getRoomComps() {
		return roomComps;
	}
	public void setRoomComps(int roomComps) {
		this.roomComps = roomComps;
	}
	public String getRoomResId() {
		return roomResId;
	}
	public void setRoomResId(String roomResId) {
		this.roomResId = roomResId;
	}
	public String getRoomStatus() {
		return roomStatus;
	}
	public void setRoomStatus(String roomStatus) {
		this.roomStatus = roomStatus;
	}
	public double getRoomAvgRate() {
		return roomAvgRate;
	}
	public void setRoomAvgRate(double roomAvgRate) {
		this.roomAvgRate = roomAvgRate;
	}
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public int getRoomCutoff() {
		return roomCutoff;
	}
	public void setRoomCutoff(int roomCutoff) {
		this.roomCutoff = roomCutoff;
	}
	public String getRoomHouseMthd() {
		return roomHouseMthd;
	}
	public void setRoomHouseMthd(String roomHouseMthd) {
		this.roomHouseMthd = roomHouseMthd;
	}
	public double getRoomComm() {
		return roomComm;
	}
	public void setRoomComm(double roomComm) {
		this.roomComm = roomComm;
	}
	public String getRoomBookType() {
		return roomBookType;
	}
	public void setRoomBookType(String roomBookType) {
		this.roomBookType = roomBookType;
	}
	public String getRoomContactName() {
		return roomContactName;
	}
	public void setRoomContactName(String roomContactName) {
		this.roomContactName = roomContactName;
	}
	public String getRoomHotelName() {
		return roomHotelName;
	}
	public void setRoomHotelName(String roomHotelName) {
		this.roomHotelName = roomHotelName;
	}

	
	
	
}
