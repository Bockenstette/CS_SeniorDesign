package com.kram;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.kram.database.DatabaseManager;

@Path( "KRAM" )
@Produces( MediaType.APPLICATION_JSON )
public class KRAM
{
	public static void main( String[] args )
	{
		DatabaseManager dbManager = DatabaseManager.getInstance();

		try
		{
			dbManager.updateItem( 1, "Damaged", "Barely" );
		}
		catch ( Exception e )
		{
		}
	}
}
