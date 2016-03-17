package com.quiven.operation.酒店.销售管理.客户信息;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccountBookBanquet;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 添加宴会厅订单  extends AbstractOperation implements Operation{
	private ComAccountBookBanquet comAccountBookBanquet; 
	private long comAccountId;
	private long flag;


	@Override
	public void execute() throws Exception {
		// TODO Auto-generated method stub
		//comAccount.setId(12);
		
		Account account = OperationContext.getContext().getAccount();

		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		comAccountBookBanquet.setSalerId(salerId);
		comAccountBookBanquet.setComAccountId(comAccountId);
		long hotelId = caDao.getHotelIdBySalerId(salerId);
		comAccountBookBanquet.setHotelId(hotelId);
		ComAccountDao comAccountDao = DaoManager.getInstance().getDao(ComAccountDao.class);	   
		
		
		if(caDao.confirmBanquertDateByDate(comAccountBookBanquet)){
			
			comAccountDao.addBookBanquet(comAccountBookBanquet);
			flag=1;
		}else{
			flag=0;
			
		}
	
		
	}


	
	
	public long getFlag() {
		return flag;
	}




	public void setFlag(long flag) {
		this.flag = flag;
	}




	public long getComAccountId() {
		return comAccountId;
	}



	public void setComAccountId(long comAccountId) {
		this.comAccountId = comAccountId;
	}


	public ComAccountBookBanquet getComAccountBookBanquet() {
		return comAccountBookBanquet;
	}


	public void setComAccountBookBanquet(ComAccountBookBanquet comAccountBookBanquet) {
		this.comAccountBookBanquet = comAccountBookBanquet;
	}

	
}
