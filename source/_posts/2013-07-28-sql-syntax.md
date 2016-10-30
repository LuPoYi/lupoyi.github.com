---
layout: post
title: '[SQL] 常用語法'
date: 2013-07-28 06:41
comments: true
categories: [sql]
---
不一定是常用…而是記不太起來，每次都要查…

DBCC CHECKIDENT ( *tablename*, RESEED, new_reseed_value ) 強制重設table的識別值

	DBCC CHECKIDENT(tablename,  RESEED, 0)	// 歸零識別值

SQL驗證
Data Source=___;Initial catalog=___;User ID=___;Password=___

Windows驗證
Data Source=___;Initial Catalog=___;integrated security=sspi

union:上下重直合併

萬用字元
%
_:代表一個字元
〔〕:指定字元範圍；[0-9]、[A-D]、[ABCD]
〔^〕:排除字元範圍:[^ABC]

