package com.quiven.operation.酒店.酒店管理;

import java.util.ArrayList;
import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.MemberBookingRoom;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列客房团客预定统计信息 extends  AbstractOperation implements Operation{

	private int offset;
	private int limit;
	
	private int total;
	private List<MemberBookingRoom> data;
	
	//待查询的日期
	private String date;
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		Account account = OperationContext.getContext().getAccount();
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);
        long hotelId =HDao.getHotelIdByAccountId(account.getId());
        
		//待查询的日期应在时间段中
		PagedList<MemberBookingRoom> list = HDao.listMemberBookingRoomByDate(date, hotelId, offset, limit);
		//total = list.getTotal();
		 List<MemberBookingRoom> newlist = new ArrayList<MemberBookingRoom>();
		 int i = 0;
		
		for(MemberBookingRoom mbr : list.getData())
		{
			      String loginType = HDao.getLoginTypeByMemberId(mbr.getMemberId());
			      
			      if(loginType.equals("团客"))
			      {
			    	  mbr.setLoginType(loginType);
			    	//  System.out.println(loginType);
			    	  newlist.add(mbr);	  
			    	  i++;
			      }		      
			      
		}
		 System.out.println("===============");
		 System.out.println(i);
		setData(newlist);
		total = i;
		setTotal(total);
		// setData(list.getData());
		
	}



	public int getOffset() {
		return offset;
	}



	public void setOffset(int offset) {
		this.offset = offset;
	}



	public int getLimit() {
		return limit;
	}



	public void setLimit(int limit) {
		this.limit = limit;
	}



	public int getTotal() {
		return total;
	}



	public void setTotal(int total) {
		this.total = total;
	}






	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public List<MemberBookingRoom> getData() {
		return data;
	}



	public void setData(List<MemberBookingRoom> data) {
		this.data = data;
	}







	

}
