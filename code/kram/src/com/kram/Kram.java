package com.kram;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.kram.database.DatabaseManager;;

@Path( "/db" )
public class Kram
{
	@GET
	@Produces( MediaType.TEXT_HTML )
	public String printText()
	{
		return "<p> Within Java Code </p>";
	}

	@Path( "/settable/{username}" )
	@GET
	@Produces( MediaType.TEXT_HTML )
	public String createTable( @PathParam( "username" ) String username )
	{
		DatabaseManager dbManager = DatabaseManager.getInstance();

		dbManager.setTable( username );

		return dbManager.showTablesHTML();
	}

	@Path( "/additem/{itemName}/{quantity}/{price}/{location}" )
	@GET
	public void addItem( @PathParam( "itemName" ) String itemName, @PathParam( "quantity" ) int quantity,
			@PathParam( "price" ) double price, @PathParam( "location" ) String location )
	{
		DatabaseManager dbManager = DatabaseManager.getInstance();

		dbManager.addItem( itemName, quantity, price, location );
	}

	@Path( "/updateitem/{ID}/{attribute}/{value}" )
	@GET
	public void updateItem( @PathParam( "ID" ) int ID, @PathParam( "attribute" ) String attribute,
			@PathParam( "value" ) Object value )
	{
		try
		{
			DatabaseManager.getInstance().updateItem( ID, attribute, value );
		}
		catch ( Exception e )
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * DO NOT USE, NO CONVERSION FROM PATHPARAM -> JAVA TYPE INCLUDED
	 * 
	 * 
	 * @Path("/addattribute/{attribute}/{type}")
	 * 
	 * @GET public void addAttribute(@PathParam("attribute") String
	 *      attribute, @PathParam("type") Class<?> type) {
	 *      DatabaseManager.getInstance().addAttribute( attribute, type ); }
	 **/

	@Path( "/namesort" )
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public String sortByName()
	{
		return DatabaseManager.getInstance().sortByName();
	}

	@Path( "/pricesort" )
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public String sortByPrice()
	{
		return DatabaseManager.getInstance().sortByPrice();
	}

	@Path( "/locsort" )
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public String sortByLocation()
	{
		return DatabaseManager.getInstance().sortByLocation();
	}

	@Path( "/search/{param}" )
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public String search( @PathParam( "param" ) String param )
	{
		return DatabaseManager.getInstance().search( param );
	}

	@Path( "/getbyid/{id}" )
	@GET
	@Produces( MediaType.APPLICATION_JSON )
	public String search( @PathParam( "id" ) int ID )
	{
		return DatabaseManager.getInstance().getByID( ID );
	}
}
