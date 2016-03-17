package com.quiven.operation.客户.公司客户;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;


import org.directwebremoting.ScriptBuffer;
import org.directwebremoting.ScriptSession;
import org.directwebremoting.proxy.dwr.Util;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.dao.member.MemberDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.Hotel;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;
import com.quiven.system.LoginManager;
import com.quiven.system.ScriptSessionManager;
import com.quiven.util.SendMail;

public class 发送询价 extends AbstractOperation implements Operation {

	
	
    private String date;
    private String province;
	private String city; 
	private String hotelCounty;
	private double price;



	private long adultNum;
	//private long kidNum;
	private long roomNum;
	//private String cityName;
	private String way;
	private List<Hotel> data;
	
	
	/*
	private Member member;
	private long account_id;
	*/

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub

		 Account account = OperationContext.getContext().getCusAccount();
		 HotelDao hotelDao =DaoManager.getInstance().getDao(HotelDao.class);

		 List<Hotel> data=new ArrayList<Hotel>();
		 List<Hotel> dataD=new ArrayList<Hotel>();
		 
		 
		 if(way.equals("restaurant")){
			 
			 data=hotelDao.getResaurantBarsForEnquiry(province,city,hotelCounty,price,roomNum,adultNum);	 
			
		 }else{
			 
			 data=hotelDao.getBanquetForEnquiry(province,city, hotelCounty,price,roomNum,adultNum);
			
		 }
		 
		 Hotel temp=new Hotel();
		    
			if(data.size()>3){
				
				
				for(int i=0;i<data.size();i++){
					for(int j=0;j<data.size()-i-1;j++){
						 if(data.get(j).getHotelPrice()>data.get(j+1).getHotelPrice()){
							temp=data.get(j);
						     data.set(j, data.get(j+1));   	
						     data.set(j+1, temp);
						 }
					}
				}
		
				dataD.add(data.get(0));
				dataD.add(data.get(1));
				dataD.add(data.get(2));
				this.setData(dataD);
	        
			}
			else{
				
				this.setData(data);
			}
		 
		 
		 
		/*
		 for(int i=0;i<data.size();i++){
			 long hotelSalerId = hotelDao.getHotelManagerByHotelId(data.get(i).getId()).getAccountId();
			
			 HttpSession hsession = LoginManager.getInstance().getHttpSession(hotelSalerId);	
			 ScriptSession ssession =ScriptSessionManager.getInstance().getScriptSessionByHttpSessionId(hsession.getId());		   
				ScriptBuffer scriptBuffer = new ScriptBuffer(); //构造js脚本
				String str = "您有一次询价生意请求";
				scriptBuffer.appendScript("showmessage(");
				scriptBuffer.appendData(str);
				scriptBuffer.appendScript(")");			
				Util util = new Util(ssession);
				util.addScript(scriptBuffer);	
				//SendEmail();
		 }
	      */	 
	
			
		 
		 

		 
		 /*
		 //查看这些酒店的manager是否在线，查询LoginManager
            long hotelSalerId = 18;
			HttpSession hsession = LoginManager.getInstance().getHttpSession(hotelSalerId);	
			logger.info(LoginManager.getInstance().getOnlineUserCount());
			logger.info(hsession.getId());
			 
		    ScriptSession ssession =ScriptSessionManager.getInstance().getScriptSessionByHttpSessionId(hsession.getId());		   
			ScriptBuffer scriptBuffer = new ScriptBuffer(); //构造js脚本
			String str = "您有一次询价生意请求";
			scriptBuffer.appendScript("showmessage(");
			scriptBuffer.appendData(str);
			scriptBuffer.appendScript(")");			
			Util util = new Util(ssession);
			util.addScript(scriptBuffer);
			
			
			//针对在线的推送消息，accountId->httpsession->scriptsession
			           SendEmail();
		*/

	}
	
	
	
	
	
	private void SendEmail()
	{
		SendMail sendMail = new SendMail();
        sendMail.setSmtpServer("smtp.qq.com");
        //此处设置登录的用户名
        sendMail.setUsername("1592164246@qq.com");
        //此处设置登录的密码
        sendMail.setPassword("iloveyou1");
        //设置收件人的地址
        sendMail.setTo("1241571561@qq.com");
        //设置发送人地址
        sendMail.setFrom("1592164246@qq.com");
        //设置标题
        sendMail.setSubject("测试邮件标题！");
        //设置内容
        sendMail.setContent("您有一个生意邮件！"); 
        //粘贴附件
//        File file = new File("D:/域名注册购买方案.docx");
        sendMail.attachfile("D:/userseal.txt");
        sendMail.send();
	}
	
	
	
	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}


	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
	public String getHotelCounty() {
		return hotelCounty;
	}

	public void setHotelCounty(String hotelCounty) {
		this.hotelCounty = hotelCounty;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	
	public long getAdultNum() {
		return adultNum;
	}

	public void setAdultNum(long adultNum) {
		this.adultNum = adultNum;
	}

	public long getRoomNum() {
		return roomNum;
	}

	public void setRoomNum(long roomNum) {
		this.roomNum = roomNum;
	}

	
	
	
	public String getWay() {
		return way;
	}

	public void setWay(String way) {
		this.way = way;
	}
	

	public List<Hotel> getData() {
		return data;
	}

	public void setData(List<Hotel> data) {
		this.data = data;
	}
	
	
}
