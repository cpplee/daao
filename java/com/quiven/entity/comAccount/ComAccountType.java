package com.quiven.entity.comAccount;

import com.quiven.entity.Bean;

public class ComAccountType implements Bean{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8007462597311386658L;
	private long id;
	private String comtype;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getComtype() {
		return comtype;
	}
	public void setComtype(String comtype) {
		this.comtype = comtype;
	}

}
