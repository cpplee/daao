package com.quiven.operation.酒店.酒店设置.餐饮店信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao; 
import com.quiven.entity.Account;
import com.quiven.entity.hotel.ResaurantBarsInfo;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 查看餐饮店信息 extends AbstractOperation implements Operation {
	private long resaurantBarsId;
	private ResaurantBarsInfo resaurantBarsInfo;
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
			Account account = OperationContext.getContext().getAccount();
			HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);							
			long roleId = HDao.getRoleIdByAccountId(account.getId());
			if (roleId == 12) {				
				long hotelId = HDao.getHotelIdByAccountId(account.getId());
				resaurantBarsId= HDao.getResaurantBarsIdByHotelId(hotelId);
				resaurantBarsInfo = HDao.getResaurantBarsByResaurantBarsId(resaurantBarsId);
			}
	}
	
	

	public long getResaurantBarsId() {
		return resaurantBarsId;
	}

	public void setResaurantBarsId(long resaurantBarsId) {
		this.resaurantBarsId = resaurantBarsId;
	}

	public ResaurantBarsInfo getResaurantBarsInfo() {
		return resaurantBarsInfo;
	}

	public void setResaurantBarsInfo(ResaurantBarsInfo resaurantBarsInfo) {
		this.resaurantBarsInfo = resaurantBarsInfo;
	}
	
}
