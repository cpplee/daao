package com.quiven.operation.酒店.酒店设置.酒店信息录入;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.dao.hotel.HotelDao;
import com.quiven.entity.Account;
import com.quiven.entity.hotel.PropmtionActivity;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加促销信息  extends AbstractOperation implements Operation{
	private PropmtionActivity propmtionActivity; 

	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();

		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		long hotelId = caDao.getHotelIdBySalerId(salerId);
		String ImgUrl = (String) OperationContext.getContext().getSession().getAttribute("newpath");
		propmtionActivity.setPropActivityImgurl(ImgUrl);
		HotelDao hoteldao = DaoManager.getInstance().getDao(HotelDao.class);
		hoteldao.addPropmtionActivityInfo(hotelId, propmtionActivity);
	}

	public PropmtionActivity getPropmtionActivity() {
		return propmtionActivity;
	}

	public void setPropmtionActivity(PropmtionActivity propmtionActivity) {
		this.propmtionActivity = propmtionActivity;
	}

	


}
