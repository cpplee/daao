package com.quiven.operation.前台展示.酒店信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.Store;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 列专门店信息 extends  AbstractOperation implements Operation{
	private String address;
	private int offset;
	private int limit;
	private int total;
	private List<Store> data;
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		HotelDao hDao = DaoManager.getInstance().getDao(HotelDao.class);
		PagedList<Store> list = hDao.getStoreListbyAddress(address,offset,limit);
		setTotal(list.getTotal());
		
		for(Store h : list.getData())
		{
			long storeMinPrice = hDao.GetLowestPriceOfStoreToHotel(h.getId());
			h.setStorePrice(storeMinPrice);
		}
		setData(list.getData());
		
		
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
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
	public List<Store> getData() {
		return data;
	}
	public void setData(List<Store> data) {
		this.data = data;
	}
	
	
}
