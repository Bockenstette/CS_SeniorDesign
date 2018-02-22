package kram.sql;

import java.sql.*;

public class MySQLConnectionManager
{
  private Connection connection = null;
  
  private String url = "";
  private String userName = "";
  private String password = "";
  
  public MySQLConnectionManager(String url, String userName, String password)
  {
    this.url = url;
    this.userName = userName;
    this.password = password;
  }
  
  public void Connect()
  {
    if (connection != null)
    {
      return;
    }
    
    try
    {
      Class.forName("com.mysql.jdbc.Driver").newInstance();
      this.connection = DriverManager.getConnection(this.url, this.userName, this.password);
    }
    catch(Exception e) 
    {
      System.out.println(e);
    }
    
    return;
  }
  
  public void Disconnect()
  {
    // TODO: Maybe write helper class to close members? Depends on if they become really prevalent later on
    // DBUtils already has one written, need to download package though
    try { connection.close(); } catch (Exception e) { System.out.println(e); } 
  }
}

