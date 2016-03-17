package com.quiven.web.dwr;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;

import com.quiven.UserException;
import com.quiven.dao.DaoManager;
import com.quiven.entity.Account;
import com.quiven.operation.Operation;
import com.quiven.operation.OperationContext;
import com.quiven.operation.OperationManager;


/** 用于和权限系统搭配的通用DWR类 */
public class RPC
{
	private static Log log = LogFactory.getLog(RPC.class);

	public static Object call(String name, Operation operation) throws Exception
	{
		//if (log.isTraceEnabled()) log.trace("通过DWR执行操作: " + operation);
		OperationContext context = createOperationContext();
		OperationContext.setContext(context);

		Map<String, Object> map = new HashMap<String, Object>();
		DaoManager dm = DaoManager.getInstance();
		try
		{
			dm.begin();
			
			Account account = context.getAccount();
			Account cusAccount = context.getCusAccount();
			//前台账户和后台账户区分开
			if(!name.startsWith("公用.") && (name.startsWith("客户.") || name.startsWith("前台信息.")))
			{
				if(cusAccount ==null)
				{
					throw new UserException("请重新登录系统");
				}
				else
				{
					Set<Long> departmentIds = OperationManager.getInstance().getAccountOperationDepartmentIds(cusAccount, name);
					context.setDepartmentIds(departmentIds);
				}
			}
			else
			{
				if (!name.startsWith("公用.") && !name.startsWith("前台展示."))
				{
					if(account ==null)
					{
						throw new UserException("请先登录系统");
					}
					else
					{
						Set<Long> departmentIds = OperationManager.getInstance().getAccountOperationDepartmentIds(account, name);
						context.setDepartmentIds(departmentIds);
					}
				}
			}
			
			

			operation.execute();
			
			map.put("data", operation);

			if (!context.isRollback()) dm.commit();
		}
		catch (UserException e)
		{
			// 如果抛出的异常是UserException, 表示用户错误操作引起的异常, 就不再抛出, 并不在日志中记录, 只把信息返回给客户端
			map.put("message", e.getMessage());
//			e.printStackTrace();
		}
		finally
		{
			dm.end();
			
			// TODO 结束后, 应该删除 OperationContext
		}
		
		return map;
	}
	
	private static OperationContext createOperationContext()
	{
		WebContext wc = WebContextFactory.get();
		
		HttpServletRequest request = wc.getHttpServletRequest();
		HttpServletResponse response = wc.getHttpServletResponse();
		HttpSession session = request.getSession(false);
		Account account = null;
		Account cusAccount = null;
		if (session != null)
		{
			account = (Account) session.getAttribute("account");
			cusAccount = (Account) session.getAttribute("cusAccount");
		}
		
		OperationContext context = new OperationContext();
		OperationContext.setContext(context);

		context.setAccount(account);
		context.setCusAccount(cusAccount);
		context.setSession(session);
		context.setRequest(request);
		context.setResponse(response);
		
		return context;
	}
}