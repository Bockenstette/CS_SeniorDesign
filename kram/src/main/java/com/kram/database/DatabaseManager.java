package com.kram.database;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.kram.ClassMap;
import com.kram.database.connection.DatabaseConnectionManager;

@Path( "/db/" )
public class DatabaseManager
{
	private static DatabaseManager	instance			= null;
	private Connection				kramConnection		= null;
	private Statement				currentStatement	= null;

	private String			currentTable		= "";
	private final String	defaultTableFormat	= "(ItemName VARCHAR(255), " +
			"ID INTEGER NOT NULL AUTO_INCREMENT, " +
			"Quantity INTEGER NOT NULL, " +
			"Price DECIMAL(8,2) NOT NULL, " +
			"Location VARCHAR(255), " +
			"Notes VARCHAR(255), " +
			"PRIMARY KEY ( ID ))";

	private ClassMap valueTypes = createDefaultMap();

	private DatabaseManager()
	{
		try
		{
			kramConnection = DatabaseConnectionManager.getConnection();
		}
		catch ( Exception e )
		{
			String error = "Cannot get connection to database";
			System.out.printf( "%s\n\n%s\n%s", error, e.toString() );
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

	private ClassMap createDefaultMap()
	{
		ClassMap tempMap = new ClassMap();
		tempMap.put( "ID", int.class );
		tempMap.put( "Quantity", int.class );
		tempMap.put( "Price", double.class );
		tempMap.put( "Location", String.class );
		tempMap.put( "Note", String.class );

		return tempMap;
	}

	@Path( "/init/" )
	public static DatabaseManager getInstance()
	{
		if ( instance != null )
		{
			return instance;
		}

		instance = new DatabaseManager();

		return instance;
	}

	// TODO: Execute SHOW TABLES query then cycle through looking for correct table,
	// create if doesn't exist
	public void setTable( String username )
	{
		currentTable = username;
	}

	@Path( "/createtable/" )
	@POST
	public void createTable( String username )
	{
		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "CREATE TABLE " + username + defaultTableFormat;
			currentStatement.executeUpdate( sql );

			currentTable = username;

			setTable( username );
		}
		catch ( Exception e )
		{
			String error = "Cannot create table";
			System.out.printf( "%s\n\n%s\n", error, e.toString() );
		}
		finally
		{
			closeStatement();
		}
	}

	@Path( "/additem/" )
	@POST
	public < V > int addItem( String itemName, int quantity, double price, String location )
	{
		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "INSERT INTO " + currentTable + " (ItemName, Quantity, Price, Location) VALUES (\'" + itemName
					+ "\', " + quantity + ", " + price + ", \'" + location + "\')";

			currentStatement.executeUpdate( sql );
		}
		catch ( Exception e )
		{
			String error = "Cannot add item " + itemName;
			System.out.printf( "%s\n\n%s\n", error, e.toString() );
		}
		finally
		{
			closeStatement();
		}
		// TODO: Fix to be ID of just entered item
		return 1;
	}

	@Path( "/updateitem/" )
	@POST
	public < V > void updateItem( int ID, String attribute, V value ) throws Exception
	{
		if ( !valueTypes.containsKey( attribute ) )
		{
			throw new IllegalArgumentException( attribute + " is not a valid attribute" );
		}

		if ( value.getClass() != valueTypes.getType( attribute ) )
		{
			throw new IllegalArgumentException( "Type of passed value does not match stored type of " + attribute );
		}

		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "UPDATE " + currentTable + " SET " + attribute + " = " + value + "WHERE ID = " + ID;

			currentStatement.executeUpdate( sql );
		}
		catch ( Exception e )
		{
			String error = "Cannot update item " + ID;
			System.out.printf( "%s\n\n%s\n", error, e.toString() );
		}
		finally
		{
			closeStatement();
		}
	}

	@Path( "/addAtt/" )
	@POST
	public < V > void addAttribute( String attribute, Class< ? > type )
	{
		valueTypes.put( attribute, type );

		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "ALTER TABLE " + currentTable + " ADD " + attribute + " " + valueTypes.getSqlType( attribute );

			currentStatement.executeUpdate( sql );
		}
		catch ( Exception e )
		{
			String error = "Cannot add attribute " + attribute + " with type " + type;
			System.out.printf( "%s\n\n%s\n", error, e.toString() );
		}
		finally
		{
			closeStatement();
		}
	}

	@Path( "/sortbyname/" )
	@POST
	@Produces( MediaType.APPLICATION_JSON )
	public String sortByName()
	{
		String json = "{";

		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "SELECT * FROM " + currentTable + " ORDER BY ItemName DESC";

			ResultSet resultSet = currentStatement.executeQuery( sql );

			while ( resultSet.next() )
			{
				json += "\"" + resultSet.getString( 1 ) + "\": {" +
						"\"ID\":" + resultSet.getInt( 2 ) + "," +
						"\"Quantity\":" + resultSet.getInt( 3 ) + "," +
						"\"Price\":" + resultSet.getBigDecimal( 4 ) + "," +
						"\"Location\":\"" + resultSet.getString( 5 ) + "\"," +
						"\"Notes\":\"" + resultSet.getString( 6 ) + "\"" +
						"},";
			}

			json = json.substring( 0, json.length() - 1 );
			json += "}";
		}
		catch ( Exception e )
		{

		}
		finally
		{
			closeStatement();
		}

		return json;
	}

	@Path( "/sortbyprice/" )
	@POST
	@Produces( MediaType.APPLICATION_JSON )
	public String sortByPrice()
	{
		String json = "{";

		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "SELECT * FROM " + currentTable + " ORDER BY Price DESC";

			ResultSet resultSet = currentStatement.executeQuery( sql );

			while ( resultSet.next() )
			{
				json += "\"" + resultSet.getString( 1 ) + "\": {" +
						"\"ID\":" + resultSet.getInt( 2 ) + "," +
						"\"Quantity\":" + resultSet.getInt( 3 ) + "," +
						"\"Price\":" + resultSet.getBigDecimal( 4 ) + "," +
						"\"Location\":\"" + resultSet.getString( 5 ) + "\"," +
						"\"Notes\":\"" + resultSet.getString( 6 ) + "\"" +
						"},";
			}

			json = json.substring( 0, json.length() - 1 );
			json += "}";
		}
		catch ( Exception e )
		{

		}
		finally
		{
			closeStatement();
		}

		return json;
	}

	@Path( "/sortbylocation/" )
	@POST
	@Produces( MediaType.APPLICATION_JSON )
	public String sortByLocation()
	{
		String json = "{";

		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "SELECT * FROM " + currentTable + " ORDER BY Location DESC";

			ResultSet resultSet = currentStatement.executeQuery( sql );

			while ( resultSet.next() )
			{
				json += "\"" + resultSet.getString( 1 ) + "\": {" +
						"\"ID\":" + resultSet.getInt( 2 ) + "," +
						"\"Quantity\":" + resultSet.getInt( 3 ) + "," +
						"\"Price\":" + resultSet.getBigDecimal( 4 ) + "," +
						"\"Location\":\"" + resultSet.getString( 5 ) + "\"," +
						"\"Notes\":\"" + resultSet.getString( 6 ) + "\"" +
						"},";
			}

			json = json.substring( 0, json.length() - 1 );
			json += "}";
		}
		catch ( Exception e )
		{

		}
		finally
		{
			closeStatement();
		}

		return json;
	}

	@Path( "/search/" )
	@POST
	@Produces( MediaType.APPLICATION_JSON )
	public String search( String searchTerm )
	{
		String json = "{";
		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "SELECT * FROM " + currentTable + " WHERE CHARINDEX(\'" + searchTerm + "\', ItemName) > 0";

			ResultSet resultSet = currentStatement.executeQuery( sql );

			json += "\"" + searchTerm + "\": {";
			while ( resultSet.next() )
			{
				json += "\"" + resultSet.getString( 1 ) + "\": {" +
						"\"ID\":" + resultSet.getInt( 2 ) + "," +
						"\"Quantity\":" + resultSet.getInt( 3 ) + "," +
						"\"Price\":" + resultSet.getBigDecimal( 4 ) + "," +
						"\"Location\":\"" + resultSet.getString( 5 ) + "\"," +
						"\"Notes\":\"" + resultSet.getString( 6 ) + "\"" +
						"},";
			}

			json = json.substring( 0, json.length() - 1 );
			json += "}";
		}
		catch ( Exception e )
		{

		}
		finally
		{
			closeStatement();
		}

		return json += "}";
	}

	@Path( "/getbyid/" )
	@POST
	@Produces( MediaType.APPLICATION_JSON )
	public String getByID( int ID )
	{
		String json = "{";

		try
		{
			currentStatement = kramConnection.createStatement();

			String sql = "SELECT * FROM " + currentTable + " WHERE ID = " + ID;

			ResultSet resultSet = currentStatement.executeQuery( sql );

			while ( resultSet.next() )
			{
				json += "\"" + resultSet.getString( 1 ) + "\": {" +
						"\"ID\":" + resultSet.getInt( 2 ) + "," +
						"\"Quantity\":" + resultSet.getInt( 3 ) + "," +
						"\"Price\":" + resultSet.getBigDecimal( 4 ) + "," +
						"\"Location\":\"" + resultSet.getString( 5 ) + "\"," +
						"\"Notes\":\"" + resultSet.getString( 6 ) + "\"" +
						"},";
			}

			json = json.substring( 0, json.length() - 1 );
			json += "}";
		}
		catch ( Exception e )
		{

		}
		finally
		{
			closeStatement();
		}

		return json;
	}
}
