package com.quiven.operation.公用;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.directwebremoting.WebContextFactory;

import com.quiven.UserException;
import com.quiven.dao.AccountDao;
import com.quiven.dao.AccountLoginLogDao;
import com.quiven.dao.DaoManager;
import com.quiven.entity.Account;
import com.quiven.entity.AccountLoginLog;
import com.quiven.entity.Role;
import com.quiven.operation.AbstractOperation;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;
import com.quiven.system.LoginManager;
import com.quiven.util.EncodePassword;

public class 登录 extends AbstractOperation implements Operation
{
	private static Log log = LogFactory.getLog(登录.class);

	private String login;
	private String password;
	private String loginStatus;
	private String url;
	private String vcode;
	private Account account;
   private String managername;
	public void execute() throws Exception
	{
		//test
	
		
		//
		if (login == null) login = "";
		if (password == null) password = "";
		
		// 用户名不区分大小写
		login = login.trim().toLowerCase();
		password = password.trim();
		vcode    = vcode.toLowerCase();
		
         
		AccountDao dao = DaoManager.getInstance().getDao(AccountDao.class); 
		String proVcode = (String) OperationContext.getContext().getSession().getAttribute("RANDOMVALIDATECODEKEY");
		proVcode = proVcode.toLowerCase();
		//System.out.println(proVcode);
		if(vcode.equals(proVcode))
		{
			account = dao.getAccountByLogin(login, EncodePassword.encodePassword(password));
			
	}
		else
		{
			throw new UserException("您输入的的验证码错误!");
		}
		
		// 用户enable为false或者帐户不存在
		if (account == null ) 
		{
			loginStatus = "false";
		}
		else
		{
			loginStatus = "true";

			dao.increaseAccountLoginCount(account);
			
			account.setLoginCount(account.getLoginCount() + 1);
			
			OperationContext context = OperationContext.getContext();
			
			HttpServletRequest request = context.getRequest();
			HttpSession session = request.getSession();
			session.setAttribute("account", account);

			
			managername = login;
			//System.out.println(managername);
			// 向登录管理器报告用户登录
			LoginManager lm = LoginManager.getInstance();
			lm.login(session);
			
			//更新上一次登录信息
			Date now = new Date();
			String ip=request.getRemoteAddr();
			if(ip.equals("0:0:0:0:0:0:0:1"))
				ip = getserverIp();
			
			AccountLoginLog accountLoginLog = new AccountLoginLog();
			accountLoginLog.setAccountId(account.getId());
			accountLoginLog.setLoginTime(now);
			accountLoginLog.setLoginIp(ip);
			AccountLoginLogDao allDao = DaoManager.getInstance().getDao(AccountLoginLogDao.class);
			allDao.addAccountLoginLog(accountLoginLog);
			
			List<Role> roles= new ArrayList<Role>();
			roles=account.getRoles();
			Long roleId = roles.get(0).getId();
			if((roleId.equals(Long.valueOf(5)))||roleId.equals(Long.valueOf(6)))
			{
				url = "index.html";
			}
			else if((roleId.equals(Long.valueOf(7)))||roleId.equals(Long.valueOf(8)))
			{
				url = "index.html";
			}
			else
			{
				url = "index.html";
			}
			if (log.isInfoEnabled()) log.info("用户 " + login + " 登录成功");
		}
	}

	public void setPassword(String password)
	{
		this.password = password;
	}
	public void setLogin(String name)
	{
		this.login = name;
	}
	public Account getAccount()
	{
		return account;
	}

	public String getLoginStatus()
	{
		return loginStatus;
	}

	public void setLoginStatus(String loginStatus)
	{
		this.loginStatus = loginStatus;
	}
	
	private String getserverIp()
	{ 
        String localip=null;
        String netip=null;
        try { 
            Enumeration<NetworkInterface> netInterfaces = NetworkInterface.getNetworkInterfaces(); 
            InetAddress ip = null; 
            boolean finded=false;
            while(netInterfaces.hasMoreElements() && !finded)
            { 
                NetworkInterface ni=netInterfaces.nextElement(); 
                Enumeration<InetAddress> address=ni.getInetAddresses(); 
                while(address.hasMoreElements())
                { 
                    ip=address.nextElement(); 
                    
                    if( !ip.isSiteLocalAddress() && !ip.isLoopbackAddress() && ip.getHostAddress().indexOf(":")==-1)
                    {
                        netip=ip.getHostAddress(); 
                        finded=true; 
                        break; 
                    }else if(ip.isSiteLocalAddress() && !ip.isLoopbackAddress() && ip.getHostAddress().indexOf(":")==-1)
                    {
                        localip=ip.getHostAddress(); 
                    } 
                } 
            } 
        }
        catch (SocketException e) 
        { 
            e.printStackTrace(); 
        } 
        if(netip!=null && !"".equals(netip))
        { 
            return netip; 
        }
        else
        { 
            return localip; 
        } 
    }

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getVcode() {
		return vcode;
	}

	public void setVcode(String vcode) {
		this.vcode = vcode;
	}

	public String getManagername() {
		return managername;
	}

	public void setManagername(String managername) {
		this.managername = managername;
	}
	
	
	
}
