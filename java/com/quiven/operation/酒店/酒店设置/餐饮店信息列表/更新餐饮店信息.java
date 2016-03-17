package com.quiven.operation.酒店.酒店设置.餐饮店信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.hotel.ResaurantBarsInfo;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 更新餐饮店信息 extends AbstractOperation implements Operation {
	private long resaurantBarsId;
	private ResaurantBarsInfo resaurantBarsInfo;
	
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		String newpath = (String) OperationContext.getContext().getSession().getAttribute("newpath");
		HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);
		resaurantBarsInfo.setRbaImgurl(newpath);
		HDao.updateResaurantBarsById(resaurantBarsId, resaurantBarsInfo);
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
