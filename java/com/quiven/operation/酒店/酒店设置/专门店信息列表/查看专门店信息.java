package com.quiven.operation.酒店.酒店设置.专门店信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao; 
import com.quiven.entity.Account;
import com.quiven.entity.hotel.Store;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 查看专门店信息 extends AbstractOperation implements Operation {
	private long storeId;
	private Store store;
	

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		Account account = OperationContext.getContext().getAccount();
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);							
		long roleId = HDao.getRoleIdByAccountId(account.getId());
		if (roleId == 12) {				
			long hotelId = HDao.getHotelIdByAccountId(account.getId());
			storeId= HDao.getStoreIdByHotelId(hotelId);
			store = HDao.getStoreByStoreId(storeId);
		}
	}
	
	
	public long getStoreId() {
		return storeId;
	}
	public void setStoreId(long storeId) {
		this.storeId = storeId;
	}
	public Store getStore() {
		return store;
	}
	public void setStore(Store store) {
		this.store = store;
	}
	
	
}
