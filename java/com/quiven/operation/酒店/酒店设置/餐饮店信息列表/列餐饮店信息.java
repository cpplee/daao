package com.quiven.operation.酒店.酒店设置.餐饮店信息列表;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.entity.Account;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.ResaurantBarsInfo;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列餐饮店信息 extends AbstractOperation implements Operation {

	private int offset;
	private int limit;

	private List<ResaurantBarsInfo> data;
	private int total;

	public void execute() throws Exception {

		Account account = OperationContext.getContext().getAccount();
		HotelDao HDao = DaoManager.getInstance().getDao(
				HotelDao.class);

		long roleId = HDao.getRoleIdByAccountId(account.getId());
		if (roleId == 12) {
			
			long hotelId = HDao.getHotelIdByAccountId(account.getId());
			long resaurantBarsId = HDao.getResaurantBarsIdByHotelId(hotelId);
			if(resaurantBarsId != 0){
				
			PagedList<ResaurantBarsInfo> list = HDao.listResaurantBarsInfo(resaurantBarsId, offset, limit);
			total = list.getTotal();
			data = list.getData();
			}
		
		}
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

	public List<ResaurantBarsInfo> getData() {
		return data;
	}

	public void setData(List<ResaurantBarsInfo> data) {
		this.data = data;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

}
