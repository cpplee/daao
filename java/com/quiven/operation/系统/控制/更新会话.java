package com.quiven.operation.系统.控制;

import javax.servlet.http.HttpSession;

import org.directwebremoting.ScriptSession;
import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;

import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.system.ScriptSessionManager;

public class 更新会话 extends AbstractOperation implements Operation
{
	private String data;
	public void execute() throws Exception
	{	
		WebContext webContext = WebContextFactory.get();
		HttpSession session = webContext.getHttpServletRequest().getSession();
		String httpSessionId = session.getId();
		ScriptSession currentScriptSession = webContext.getScriptSession();	
		ScriptSessionManager.getInstance().add(httpSessionId, currentScriptSession);
		data = httpSessionId + currentScriptSession.getId(); 
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
}
