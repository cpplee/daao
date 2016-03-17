package com.quiven.util;

import java.security.MessageDigest;

import sun.misc.BASE64Encoder;

public class EncodePassword
{

	public static final String encodePassword(String pPassword) throws Exception
	{
		MessageDigest md = MessageDigest.getInstance("SHA");
		byte[] digest = md.digest(pPassword.getBytes("iso-8859-1"));
		
		BASE64Encoder encoder = new BASE64Encoder();
		String s = encoder.encode(digest).substring(0, 24);
		return s;
	}
}
