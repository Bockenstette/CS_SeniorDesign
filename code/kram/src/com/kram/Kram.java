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
}
