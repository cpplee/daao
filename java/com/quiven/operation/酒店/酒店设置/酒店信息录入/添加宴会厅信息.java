package com.quiven.operation.酒店.酒店设置.酒店信息录入;

import com.quiven.dao.DaoManager;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.BanquetInfo;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加宴会厅信息  extends AbstractOperation implements Operation{
	private BanquetInfo banquetInfo; 

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();
		String newpath = (String) OperationContext.getContext().getSession().getAttribute("newpath");		
		HotelDao hoteldao = DaoManager.getInstance().getDao(HotelDao.class);
		long hotelId = hoteldao.getHotelIdByAccountId(account.getId());
		banquetInfo.setBanImgurl(newpath);
		hoteldao.addBanquetInfo(hotelId, banquetInfo);
	}

	public BanquetInfo getBanquetInfo() {
		return banquetInfo;
	}

	public void setBanquetInfo(BanquetInfo banquetInfo) {
		this.banquetInfo = banquetInfo;
	}



}
