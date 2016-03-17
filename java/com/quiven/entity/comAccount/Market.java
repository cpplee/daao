package com.quiven.entity.comAccount;

import com.quiven.entity.Bean;

public class Market implements Bean {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6995183495672404452L;
	
	private long id;				
	private String segment;				
	private String code;				
	private String description;
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSegment() {
		return segment;
	}
	public void setSegment(String segment) {
		this.segment = segment;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}		
	
	
	

	

}
