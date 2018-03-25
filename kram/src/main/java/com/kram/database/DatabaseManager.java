package com.kram.database;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;

import com.kram.database.connection.DatabaseConnectionManager;

public class DatabaseManager
{
	private static DatabaseManager	instance			= null;
	private Connection				kramConnection		= null;
	private Statement				currentStatement	= null;

	private String			currentTable		= "";
	private final String	defaultTableFormat	= "(ItemName VARCHAR(255) " +
			"ID INTEGER not null " +
			"Quantity INTEGER not null " +
			"Price DECIMAL(8,2) not null " +
			"Location VARCHAR(255) " +
			"PRIMARY KEY ( ID )) ";
	private String			notesTableFormat	= "(ID INTEGER not null " +
			"Note VARCHAR(255) " +
			"FOREIGN KEY ( ID ) REFERENCES " + currentTable + " ( ID ))";

	private HashMap< String, Class< ? > > valueTypes = defaultMap();

	private DatabaseManager()
	{
		try
		{
			kramConnection = DatabaseConnectionManager.getConnection();
		}
		catch ( Exception e )
		{
			String error = "Cannot get connection to database";
			System.console().printf( "%s\n\n%s\n%s", error, e.toString(), e.getStackTrace() );
		}
	}

	private void closeStatement()
	{
		try
		{
			if ( currentStatement != null )
			{
				currentStatement.close();
			}
		}
		catch ( SQLException se )
		{
			se.printStackTrace();
		}
	}

	private HashMap< String, Class< ? > > defaultMap()
	{
		HashMap< String, Class< ? > > tempMap = new HashMap< String, Class< ? > >();
		tempMap.put( "ID", int.class );
		tempMap.put( "Quantity", int.class );
		tempMap.put( "Price", double.class );
		tempMap.put( "Location", String.class );
		tempMap.put( "Note", String.class );

		return tempMap;
	}

	public static DatabaseManager getInstance()
	{
		if ( instance != null )
		{
			return instance;
		}

		instance = new DatabaseManager();

		return instance;
	}

	public void setTable( String username )
	{
		currentTable = username;
	}

	public void createTable( String username )
	{
		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "CREATE TABLE " + username + " " + defaultTableFormat;
			int result = currentStatement.executeUpdate( sql );

			System.console().printf( "%s\t%i", "Create user table", result );

			sql = "CREATE TABLE " + username + "_Notes " + notesTableFormat;
			result = currentStatement.executeUpdate( sql );

			System.console().printf( "%s\t%i", "Create notes table", result );

			setTable( username );
		}
		catch ( Exception e )
		{
			String error = "Cannot create table";
			System.console().printf( "%s\n\n%s\n%s", error, e.toString(), e.getStackTrace() );
		}
		finally
		{
			closeStatement();
		}
	}

	public < V > void addAttribute( String attribute, V value )
	{
		valueTypes.put( attribute, value.getClass() );

		try
		{
			currentStatement = kramConnection.createStatement();

			// String sql = "ALTER TABLE" + currentTable + " ADD " + attribute;
		}
		catch ( Exception e )
		{

		}
		finally
		{
			closeStatement();
		}
	}

	public < V > void updateItem( int ID, String attribute, V value ) throws Exception
	{
		if ( !valueTypes.containsKey( attribute ) )
		{
			throw new IllegalArgumentException( attribute + " is not a valid attribute" );
		}

		if ( value.getClass() != valueTypes.get( attribute ) )
		{
			throw new IllegalArgumentException( "Type of passed value does not match stored type of " + attribute );
		}

		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "UPDATE " + currentTable + " SET " + attribute + " = " + value + "WHERE ID = " + ID;

			int result = currentStatement.executeUpdate( sql );

			System.console().printf( "%s\t%i", "Update " + attribute, result );
		}
		catch ( Exception e )
		{
			String error = "Cannot update item " + ID;
			System.console().printf( "%s\n\n%s\n%s", error, e.toString(), e.getStackTrace() );
		}
		finally
		{
			closeStatement();
		}
	}
}
