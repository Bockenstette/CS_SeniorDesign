package com.kram;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("KRAM")
public class KRAM {

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String retrieveItems()
	{
		return "Item Retrieved";
	}
	
	public static void main(String[] args)
	{
		
		System.out.println("test");
	}
}
