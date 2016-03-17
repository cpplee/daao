package com.quiven.operation.酒店.销售管理.客户信息;

import java.util.List;

import com.quiven.dao.DaoManager;
import com.quiven.dao.PagedList;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.entity.Account;
import com.quiven.entity.comAccount.ComAccount;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;

public class 列客户信息 extends AbstractOperation implements Operation {
	private int offset;
	private int limit;
	
	
	private List<ComAccount> data;
	private int total;
	
	public void execute() throws Exception
	{
	
		
		Account account = OperationContext.getContext().getAccount();
	
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		
	/*	if((rDao.getRoleIdByAccountId(account.getId()) == 8)||
				(rDao.getRoleIdByAccountId(account.getId()) == 9)||
				(rDao.getRoleIdByAccountId(account.getId()) == 10))
		{
			
		}else
		{
			throws new Exception("当前用户没有执行该操作权限");
		}*/
		//获取当前销售人员ID
	
		long salerId = caDao.getSalerIdByAccountId(account.getId());
		PagedList<ComAccount> list = caDao.listComAccount( salerId, offset, limit);
		total = list.getTotal();
		data = list.getData();
		for(ComAccount a : data)
		{
			a.setComaccounttype(caDao.getComAccountTypeByid(a.getComtypeId()));
		}

	
	}



	public int getOffset() {
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}





	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public List<ComAccount> getData() {
		return data;
	}

	public void setData(List<ComAccount> data) {
		this.data = data;
	}



}
