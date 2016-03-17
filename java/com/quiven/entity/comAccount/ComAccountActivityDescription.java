package com.quiven.entity.comAccount;

import com.quiven.entity.Bean;

public class ComAccountActivityDescription implements Bean
{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6010273572400820273L;
	private long id;								
	private String comAccountType; 		
	private String comAccountDescription;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getComAccountType() {
		return comAccountType;
	}
	public void setComAccountType(String comAccountType) {
		this.comAccountType = comAccountType;
	}
	public String getComAccountDescription() {
		return comAccountDescription;
	}
	public void setComAccountDescription(String comAccountDescription) {
		this.comAccountDescription = comAccountDescription;
	}
	
	


}
