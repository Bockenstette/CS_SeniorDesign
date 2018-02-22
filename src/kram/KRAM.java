package kram;

import java.io.*;
//import java.sql.*;
import kram.sql.*;

public class KRAM
{
  public static void main(String[] args)
  {
    MySQLConnectionManager connectionManager = new MySQLConnectionManager("jdbc:mysql://localhost:3306/db", "root", "root");
    connectionManager.Connect();
  }
}