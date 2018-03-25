package com.kram;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path( "KRAM" )
@Produces( MediaType.APPLICATION_JSON )
public class KRAM
{
	public static void main( String[] args )
	{
		System.out.println( int.class.getName() );
	}
}
