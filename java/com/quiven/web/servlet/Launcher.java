package com.quiven.web.servlet;

import javax.naming.Context;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.quiven.configure.SystemConfigure;
import com.quiven.dao.DaoManager;
import com.quiven.operation.OperationManager;


public class Launcher extends HttpServlet implements ServletContextListener
{
	private static final long serialVersionUID = -3436651019725988874L;
	private static Log log = LogFactory.getLog(Launcher.class);

	public void init() throws ServletException
	{
		super.init();

		try
		{
			log.info("启动管理平台...");

			Context context = new javax.naming.InitialContext();
			context = (Context) context.lookup("java:comp/env");

			// 载入系统配置
			try
			{
				SystemConfigure.load((String) context.lookup("configure")); 
			}
			catch (Exception e)
			{
				throw new Exception("请检查tomcat目录下的xml配置文件", e);
			}
			
			// 初始化DAO管理器
			DaoManager.initialize((DataSource) context.lookup("jdbc/daao"));
			
			// 文件管理器
			//FileManager.initialize();

			// 操作管理器
			OperationManager.initialize();

			// 报表管理系统
			//ReportManager.initialize();
			
			// 网络消息管理器
			//MessageManager.initialize();
			
			// 测试连接管理器
			//ConnectManager.initialize();
				
			//发送短信管理器
			//SendMessageManager.initialize();
			
			log.info("启动中心管理平台完毕！");
		}
		catch (Exception e)
		{
			log.fatal("启动中心管理平台失败！", e);

			throw new ServletException("启动中心管理平台失败: " + e.getMessage(), e);
		}
	}

	@Override
	public void destroy()
	{
		log.info("关闭中心管理平台系统...");
		
		//ReportManager.destroy();
		
		log.info("关闭中心管理平台完毕！");

		super.destroy();
	}

	public void contextInitialized(ServletContextEvent arg0)
	{
		
	}

	public void contextDestroyed(ServletContextEvent arg0)
	{
		
	}
}

