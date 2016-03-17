package com.quiven.web.servlet;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.quiven.system.LoginManager;
import com.quiven.system.ScriptSessionManager;

public class SessionListener implements HttpSessionListener
{
	private static Log log = LogFactory.getLog(SessionListener.class);

	public void sessionCreated(HttpSessionEvent event)
	{
		if (log.isDebugEnabled()) log.debug("创建会话: " + event.getSession().getId());
	}

	public void sessionDestroyed(HttpSessionEvent event)
	{
		if (log.isDebugEnabled()) log.debug("销毁会话: " + event.getSession().getId());
		
		LoginManager.getInstance().logout(event.getSession());
		
		String httpSessionId = event.getSession().getId();
		ScriptSessionManager.getInstance().remove(httpSessionId);
	}
}
