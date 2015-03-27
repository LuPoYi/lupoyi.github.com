---
layout: post
title: '[ASP.NET] Connect to SQL Server'
date: 2013-09-30 12:25
comments: true
categories: 
---
最陽春的寫法

``` c# 用SQL驗證來登入
string QueryString = "Data Source=xxxx;Initial Catalog=xxxx;User ID=xxxx;Password=xxxx";
```

``` c# QUERY
SqlConnection conn = new SqlConnection(QueryString);
conn.Open();

sqlStr = "SELECT name FROM Employee";

SqlCommand cmd = new SqlCommand(sqlStr, conn);
SqlDataReader dr = cmd.ExecuteReader();
while (dr.Read())
{
		// 將找到的值取出來
    string user = dr["name"].ToString();
    //...
}

conn.Close();

```

``` c# UPDATE INSERT DELETE
SqlConnection conn = new SqlConnection(QueryString);
conn.Open();

sqlStr = "UPDATE Employee SET name = 'Bob'";

SqlCommand cmd = new SqlCommand(sqlStr, conn);
cmd.ExecuteNonQuery();

conn.Close();
```


``` c# 用Parameter
sqlStr = "SELECT * FROM Employee WHERE action = @Action";
cmd.Parameters.Add(new SqlParameter("@Action", item.ACTION));
```