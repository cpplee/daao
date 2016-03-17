package com.quiven.operation.酒店.酒店设置.专门店信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.Store;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 更新专门店信息 extends AbstractOperation implements Operation {
	private long storeId;
	private Store store;
	
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
		String newpath = (String) OperationContext.getContext().getSession().getAttribute("newpath");
		
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);
		store.setStoreImgurl(newpath);
		HDao.updateStoreById(storeId, store);
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
