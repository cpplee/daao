package com.quiven.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

public class SendMail
{
	//收件人邮箱地址
	private String to; 
	//发件人邮箱地址
	private String from; 
	//SMTP服务器地址
	private String smtpServer; 
	//登录SMTP服务器的用户名
	private String username ;
	//登录SMTP服务器的密码
	private String password ;
	//邮件主题
	private String subject; 
	//邮件正文
	private String content; 
	//记录所有附件文件的集合
	List<String> attachments = new ArrayList<String>();


	public SendMail(String to , String from , String smtpServer , String username , String password , String subject 
			, String content)
	{ 
		this.to = to;
		this.from = from;
		this.smtpServer = smtpServer;
		this.username = username;
		this.password = password;
		this.subject = subject;
		this.content = content;
	}
	public SendMail()
	{
		
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getSmtpServer() {
		return smtpServer;
	}

	public void setSmtpServer(String smtpServer) {
		this.smtpServer = smtpServer;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public List<String> getAttachments() {
		return attachments;
	}

	public void setAttachments(List<String> attachments) {
		this.attachments = attachments;
	}

	public String transferChinese(String strText)
	{
		try
		{
			strText = MimeUtility.encodeText(
					new String(strText.getBytes()
							, "GB2312"), "GB2312", "B");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return strText;
	}
	//增加附件，将附件文件名添加的List集合中
	public void attachfile(String fname)
	{
		attachments.add(fname);
	}
	public boolean send()
	{
		//创建邮件Session所需的Properties对象
		Properties props = new Properties();
		props.put("mail.smtp.host" , smtpServer);
		props.put("mail.smtp.auth" , "true");
		//创建Session对象
		Session session = Session.getDefaultInstance(props
				//以匿名内部类的形式创建登录服务器的认证对象
				, new Authenticator()
		{
			public PasswordAuthentication getPasswordAuthentication()
			{
				return new PasswordAuthentication(username,password); 
			}
		});
		try
		{
			//构造MimeMessage并设置相关属性值
			MimeMessage msg = new MimeMessage(session);
			//设置发件人
			msg.setFrom(new InternetAddress(from));
			//设置收件人
			InternetAddress[] addresses = {new InternetAddress(to)};
			msg.setRecipients(Message.RecipientType.TO , addresses);
			//设置邮件主题
			subject = transferChinese(subject);
			msg.setSubject(subject);    
			//构造Multipart
			Multipart mp = new MimeMultipart();
			//向Multipart添加正文
			MimeBodyPart mbpContent = new MimeBodyPart();
			mbpContent.setText(content);
			//将BodyPart添加到MultiPart中
			mp.addBodyPart(mbpContent);
			//向Multipart添加附件
			//遍历附件列表，将所有文件添加到邮件消息里
			for(String efile : attachments)
			{
				MimeBodyPart mbpFile = new MimeBodyPart();
				//以文件名创建FileDataSource对象
				FileDataSource fds = new FileDataSource(efile);
				//处理附件
				mbpFile.setDataHandler(new DataHandler(fds));
				mbpFile.setFileName(fds.getName());
				//将BodyPart添加到MultiPart中
				mp.addBodyPart(mbpFile);
			}
			//清空附件列表
			attachments.clear();
			//向Multipart添加MimeMessage
			msg.setContent(mp);
			//设置发送日期
			msg.setSentDate(new Date());
			//发送邮件
			Transport.send(msg);
		}
		catch (MessagingException mex)
		{
			mex.printStackTrace();
			return false;
		}
		return true;
	}

}
