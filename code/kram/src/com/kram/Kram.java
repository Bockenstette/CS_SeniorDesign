package com.kram;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/db")
public class Kram
{
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String returnTitle()
	{
		return "<p>Java Web Service</p>";
	}
}
