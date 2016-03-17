package com.quiven.operation.酒店.酒店管理;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.member.Member;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 列客户信息 extends  AbstractOperation implements Operation{

	private int offset;
	private int limit;
	
	private int total;
	private List<Member> data;
	
	
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		
		HotelDao hDao=DaoManager.getInstance().getDao(HotelDao.class);
		PagedList<Member> list = hDao.listHotelMember(offset, limit);
		
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



	public List<Member> getData() {
		return data;
	}



	public void setData(List<Member> data) {
		this.data = data;
	}
	
	

}
