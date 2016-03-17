package com.quiven.system;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpSession;

import com.quiven.entity.Account;

/**
 * 登录管理器 管理登录用户
 * 
 * @author zuojie
 */
public class LoginManager
{
	private static LoginManager instance = new LoginManager();

	public static LoginManager getInstance()
	{
		return instance;
	}

	private Map<Long, HttpSession> sessions = new ConcurrentHashMap<Long, HttpSession>();// 所有登录会话

	private LoginManager()
	{
	}

	public void login(HttpSession session)
	{
		Account account = (Account) session.getAttribute("account");
		if (account == null) return;
		
		long accountId = account.getId();
//		HttpSession s = sessions.get(accountId);
//		if (s != null) 
//		{
//			SendPushService.msg = "您的帐号已在其他地点登录，您已被迫下线。请妥善保管好您的帐号信息！";
//			SendPushService.offlineSig = true;
//			SendPushService.offlineAccountId = accountId;
//			SendPushService.Sig = true;
//			s.invalidate();
//		}
		
		sessions.put(accountId, session);
	}

	public void logout(HttpSession session)
	{
		Account account = (Account) session.getAttribute("account");
		if (account == null) return;
		
		long accountId = account.getId();
		sessions.remove(accountId);
	}

	public int getOnlineUserCount()
	{
		return sessions.size();
	}
	
	public HttpSession getHttpSession(Long accountId)
	{
		return sessions.get(accountId);
	}
}
