package com.quiven.operation.酒店.销售管理.销售活动;

import java.util.Date;
import java.text.SimpleDateFormat;

import com.quiven.dao.DaoManager;
import com.quiven.dao.comAccount.ComAccountDao;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;


public class 更新拜访时间 extends AbstractOperation implements Operation {
	private long id;
	private String activityDate;
	private String activityTime;
	
	public void execute() throws Exception
	{
		ComAccountDao caDao = DaoManager.getInstance().getDao(ComAccountDao.class);
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
		Date dateformat = sdf.parse(activityTime);
		caDao.updateActivityTime(id, activityDate,dateformat);
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getActivityDate() {
		return activityDate;
	}

	public void setActivityDate(String activityDate) {
		this.activityDate = activityDate;
	}
	

	public String getActivityTime() {
		return activityTime;
	}

	public void setActivityTime(String activityTime) {
		this.activityTime = activityTime;
	}

}