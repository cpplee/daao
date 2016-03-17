package com.quiven.operation.酒店.酒店设置.宴会厅信息列表;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao; 
import com.quiven.entity.Account;
import com.quiven.entity.hotel.BanquetInfo;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 查看宴会厅信息 extends AbstractOperation implements Operation {
	private long banquetId;
	private BanquetInfo banquetInfo;
	
	
	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		
			
			HotelDao HDao = DaoManager.getInstance().getDao(HotelDao.class);							
		
				banquetInfo = HDao.getBanquetByBanquetId(banquetId);
			
	}
	
	public long getBanquetId() {
		return banquetId;
	}
	public void setBanquetId(long banquetId) {
		this.banquetId = banquetId;
	}
	public BanquetInfo getBanquetInfo() {
		return banquetInfo;
	}
	public void setBanquetInfo(BanquetInfo banquetInfo) {
		this.banquetInfo = banquetInfo;
	}
		
	
}
