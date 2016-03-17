package data;

public class PackageException extends Exception
{
	private static final long serialVersionUID = -9105248269970630046L;

	public PackageException(String s)
	{
		super(s);
	}

	public PackageException(String s, Throwable t)
	{
		super(s, t);
	}
}
