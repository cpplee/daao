package com.quiven.entity.comAccount;

import com.quiven.entity.Bean;

public class ComAccount  implements Bean
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 3448133826854533352L;
	private long id;						
	private long salerId;					
	private String cname;					
				
	private String address1;				
	private String address2;				
	private String address3;				
	private String city;				
	private String province;				
	private String country;					
	private long comtypeId;			    		
	private String comAccountCode;
	private String postal;					
	private String marketSegmentId;	
	private String comTelphone;
	private String comFax;				    
	private String comEmail;				
	private String comWechat;				
	private String webAddress;				
	private String comFrequency;			
	private String keynotes;				
	private boolean enable;
	private Saler saler;
	private String comaccounttype;
	
	
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
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getAddress3() {
		return address3;
	}
	public void setAddress3(String address3) {
		this.address3 = address3;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public long getComtypeId() {
		return comtypeId;
	}
	public void setComtypeId(long comtypeId) {
		this.comtypeId = comtypeId;
	}
	public String getComAccountCode() {
		return comAccountCode;
	}
	public void setComAccountCode(String comAccountCode) {
		this.comAccountCode = comAccountCode;
	}
	public String getPostal() {
		return postal;
	}
	public void setPostal(String postal) {
		this.postal = postal;
	}
	public String getMarketSegmentId() {
		return marketSegmentId;
	}
	public void setMarketSegmentId(String marketSegmentId) {
		this.marketSegmentId = marketSegmentId;
	}
	public String getComTelphone() {
		return comTelphone;
	}
	public void setComTelphone(String comTelphone) {
		this.comTelphone = comTelphone;
	}
	public String getComFax() {
		return comFax;
	}
	public void setComFax(String comFax) {
		this.comFax = comFax;
	}
	public String getComEmail() {
		return comEmail;
	}
	public void setComEmail(String comEmail) {
		this.comEmail = comEmail;
	}
	public String getComWechat() {
		return comWechat;
	}
	public void setComWechat(String comWechat) {
		this.comWechat = comWechat;
	}
	public String getWebAddress() {
		return webAddress;
	}
	public void setWebAddress(String webAddress) {
		this.webAddress = webAddress;
	}
	public String getComFrequency() {
		return comFrequency;
	}
	public void setComFrequency(String comFrequency) {
		this.comFrequency = comFrequency;
	}
	public String getKeynotes() {
		return keynotes;
	}
	public void setKeynotes(String keynotes) {
		this.keynotes = keynotes;
	}
	public boolean isEnable() {
		return enable;
	}
	public void setEnable(boolean enable) {
		this.enable = enable;
	}
	public Saler getSaler() {
		return saler;
	}
	public void setSaler(Saler saler) {
		this.saler = saler;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getComaccounttype() {
		return comaccounttype;
	}
	public void setComaccounttype(String comaccounttype) {
		this.comaccounttype = comaccounttype;
	}
	
	
	
	
	
	
	
}
