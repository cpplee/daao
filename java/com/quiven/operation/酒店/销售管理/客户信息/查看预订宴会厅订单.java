package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.comAccount.ComAccountBookBanquet;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 查看预订宴会厅订单 extends AbstractOperation implements Operation {
	
	private long comAccountBookBanquetId;
	private ComAccountBookBanquet comAccountBookBanquet;
	
	public void execute() throws Exception
	{	
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
	
		comAccountBookBanquet = caDao.getComBookBanquetById(comAccountBookBanquetId);
		
		HotelDao hDao = DaoManager.getInstance().getDao(HotelDao.class);
		comAccountBookBanquet.setBanquetHotelName(hDao.getHotelNamebyId(comAccountBookBanquet.getHotelId()));
		   if(comAccountBookBanquet.getBanquetStatus().equals("P")){
			   comAccountBookBanquet.setBanquetStatus("待审核");
		   }else if(comAccountBookBanquet.getBanquetStatus().equals("T"))
		   {
			   comAccountBookBanquet.setBanquetStatus("审核通过");
		   }
	}

	public long getComAccountBookBanquetId() {
		return comAccountBookBanquetId;
	}

	public void setComAccountBookBanquetId(long comAccountBookBanquetId) {
		this.comAccountBookBanquetId = comAccountBookBanquetId;
	}

	public ComAccountBookBanquet getComAccountBookBanquet() {
		return comAccountBookBanquet;
	}

	public void setComAccountBookBanquet(ComAccountBookBanquet comAccountBookBanquet) {
		this.comAccountBookBanquet = comAccountBookBanquet;
	}

	

	
}
