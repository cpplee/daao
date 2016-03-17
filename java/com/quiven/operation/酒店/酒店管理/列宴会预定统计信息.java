package com.quiven.operation.酒店.酒店管理;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.member.Member;
import com.quiven.entity.member.MemberBookingBanquet;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列宴会预定统计信息 extends  AbstractOperation implements Operation{

	private int offset;
	private int limit;
	
	private int total;
	private List<MemberBookingBanquet> data;
	
	//待查询的日期
	private String date;
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		Account account = OperationContext.getContext().getAccount();
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);

		long hotelId = HDao.getHotelIdByAccountId(account.getId());
//		System.out.println(hotelId);
//		System.out.println("=======");
//		System.out.println(date);
		//待查询的日期应在时间段中
		PagedList<MemberBookingBanquet> list = HDao.listMemberBookingBanquetByDate(date, hotelId, offset, limit);
		total = list.getTotal();
		setData(list.getData());
		
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



	public List<MemberBookingBanquet> getData() {
		return data;
	}



	public void setData(List<MemberBookingBanquet> data) {
		this.data = data;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}




	

}
