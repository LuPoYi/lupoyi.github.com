---
layout: post
title: '[C#] DataTable 的操作備忘'
date: 2013-03-03 12:05
comments: true
categories: [C#]
---

稍微記一下，相關變化都蠻簡單的

DataTable dt = new DataTable();

// 定義欄位
dt.Columns.Add("name");
dt.Columns.Add("cardNumber");
// 也可定義欄位型態 
// dt.Columns.Add("ID", typeof(Int32));

dt.Rows.Add("Bob", "12345");
dt.Rows.Add("Ada", "10000");
dt.Rows.Add("Kilin","20000");
// 也可用DataRow來存放資料


// 格式相同直接放入GridView
GridView.DataSource = dt;
GridView.DataBind();
