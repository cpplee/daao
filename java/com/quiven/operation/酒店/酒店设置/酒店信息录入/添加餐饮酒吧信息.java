package com.quiven.operation.酒店.酒店设置.酒店信息录入;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.ResaurantBarsInfo;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加餐饮酒吧信息  extends AbstractOperation implements Operation{
	private ResaurantBarsInfo resaurantBarsInfo; 

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();
		String newpath = (String) OperationContext.getContext().getSession().getAttribute("newpath");		
		System.out.println(newpath);
		HotelDao hoteldao = DaoManager.getInstance().getDao(HotelDao.class);
		long hotelId = hoteldao.getHotelIdByAccountId(account.getId());
		resaurantBarsInfo.setRbaImgurl(newpath);
		System.out.println(resaurantBarsInfo.getRbaImgurl());
		hoteldao.addRetaurantBarInfo(hotelId, resaurantBarsInfo);
	}

	
	
	public ResaurantBarsInfo getResaurantBarsInfo() {
		return resaurantBarsInfo;
	}

	public void setResaurantBarsInfo(ResaurantBarsInfo resaurantBarsInfo) {
		this.resaurantBarsInfo = resaurantBarsInfo;
	}

	


}
