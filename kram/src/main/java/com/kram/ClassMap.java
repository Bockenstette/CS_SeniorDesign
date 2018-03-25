package com.kram;

import java.util.HashMap;

public class ClassMap extends HashMap< String, Object >
{
	private static final long serialVersionUID = 1L;

	private class Value
	{
		private Class< ? >	type;
		private String		sqlType;

		public Class< ? > getType()
		{
			return type;
		}

		public String getSqlType()
		{
			return sqlType;
		}

		// TODO: Pretty unsafe way of doing this, but good enough for now
		public Value( Class< ? > type )
		{
			this.type = type;
			switch ( type.getName() )
			{
			case "String":
				sqlType = "VARCHAR( 255 )";
				break;
			case "int":
				sqlType = "INTEGER";
				break;
			case "float":
				sqlType = "DOUBLE";
				break;
			case "double":
				sqlType = "DECIMAL( 8, 2 )";
				break;
			}
		}
	};

	private HashMap< String, Value > classMap = null;

	public ClassMap()
	{
		classMap = new HashMap< String, Value >();
	}

	public void put( String key, Class< ? > value )
	{
		classMap.put( key, new Value( value.getClass() ) );
	}

	public Class< ? > getType( String key )
	{
		return classMap.get( key ).getType();
	}

	public String getSqlType( String key )
	{
		return classMap.get( key ).getSqlType();
	}
}
