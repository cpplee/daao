package com.quiven.operation.酒店.酒店设置.酒店信息列表;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.entity.Account;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.Hotel;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列酒店信息 extends AbstractOperation implements Operation {

	private int offset;
	private int limit;

	private List<Hotel> data;
	private int total;

	public void execute() throws Exception {

		Account account = OperationContext.getContext().getAccount();
		HotelDao HDao = DaoManager.getInstance().getDao(
				HotelDao.class);

		long roleId = HDao.getRoleIdByAccountId(account.getId());
		if (roleId == 12) {
			// System.out.println(roleId+"啊啊啊啊啊啊啊"+account.getId());
			long hotelId = HDao.getHotelIdByAccountId(account.getId());
			
			 System.out.println(roleId+"啊啊啊啊啊啊啊"+hotelId);
			long hotelCode = HDao.getHotelCodeByHotelId(hotelId);
			System.out.println(roleId+"啊啊啊啊啊啊啊123213"+hotelCode);
			PagedList<Hotel> list = HDao.listHotel(hotelCode, offset, limit);
			total = list.getTotal();
			data = list.getData();
		
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

	public List<Hotel> getData() {
		return data;
	}

	public void setData(List<Hotel> data) {
		this.data = data;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

}
