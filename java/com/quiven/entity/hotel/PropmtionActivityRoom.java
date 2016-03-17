package com.quiven.entity.hotel;

import com.quiven.entity.Bean;

public class PropmtionActivityRoom implements Bean {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1049880671246085254L;
	private long roomId;
	private long propId;
	
	
	public long getRoomId() {
		return roomId;
	}
	public void setRoomId(long roomId) {
		this.roomId = roomId;
	}
	public long getPropId() {
		return propId;
	}
	public void setPropId(long propId) {
		this.propId = propId;
	}
}
