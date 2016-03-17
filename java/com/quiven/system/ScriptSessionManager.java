package com.quiven.system;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.directwebremoting.ScriptSession;

/**
 * 页面ScriptSession管理器
 * 
 * @author fangzhiyang
 *
 */
public class ScriptSessionManager
{
	private static ScriptSessionManager instance = new ScriptSessionManager();

	public static ScriptSessionManager getInstance()
	{
		return instance;
	}

	private Map<String, ScriptSession> scriptSessions = new ConcurrentHashMap<String, ScriptSession>();		// 所有登录会话

	public void add(String httpSessionId, ScriptSession scriptSession)
	{
		scriptSessions.put(httpSessionId, scriptSession);
	}

	public void remove(String sessionId)
	{
		scriptSessions.remove(sessionId);
	}

	// 得到当前scriptSession
	public ScriptSession getScriptSessionByHttpSessionId(String id)
	{
		return scriptSessions.get(id);
	}
}
