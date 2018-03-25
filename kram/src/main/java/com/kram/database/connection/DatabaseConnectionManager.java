package com.kram.database.connection;

import java.sql.Connection;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

public class DatabaseConnectionManager
{
	private static MysqlDataSource	kram		= null;
	private static Connection		connection	= null;

	private static final String		USERNAME	= "kram";
	private static final String		PASSWORD	= "Hx0bVSmb!?XX";
	private static final String		URL			= "den1.mysql3.gear.host";

	private static void setup() throws Exception
	{
		if ( kram != null )
		{
			return;
		}

		kram = new MysqlDataSource();

		// TODO: Certificate validation
		kram.setUser( USERNAME );
		kram.setPassword( PASSWORD );

		kram.setServerName( URL );

		kram.setCreateDatabaseIfNotExist( true );
		kram.setDatabaseName( USERNAME );

		kram.setAutoClosePStmtStreams( true );

		connection = kram.getConnection();
	}

	public static Connection getConnection() throws Exception
	{
		if ( connection != null )
		{
			return connection;
		}

		setup();

		return connection;
	}

	public static void CloseConnection() throws Exception
	{
		if ( kram != null && !connection.isClosed() )
		{
			kram.getConnection().close();
		}
	}
}
