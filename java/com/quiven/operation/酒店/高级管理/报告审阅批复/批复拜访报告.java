package com.quiven.operation.酒店.高级管理.报告审阅批复;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;

public class 批复拜访报告 extends AbstractOperation implements Operation {

	private long comAccountActivityLogId;
	private String reviews;
	
	public void execute() throws Exception
	{
		
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		caDao.updateReviewsById(comAccountActivityLogId, reviews);
		
		
	}

	public long getComAccountActivityLogId() {
		return comAccountActivityLogId;
	}

	public void setComAccountActivityLogId(long comAccountActivityLogId) {
		this.comAccountActivityLogId = comAccountActivityLogId;
	}

	public String getReviews() {
		return reviews;
	}

	public void setReviews(String reviews) {
		this.reviews = reviews;
	}

	
	
}
