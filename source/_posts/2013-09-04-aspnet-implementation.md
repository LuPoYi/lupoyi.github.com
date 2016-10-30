---
layout: post
title: '[ASP.NET] 呼叫執行檔'
date: 2013-09-04 07:12
comments: true
categories: [ASP.Net]
---
## 執行指定檔案(or .exe)


## Client端

	Process p = new Process();
	p.StartInfo.FileName   = "@"C:\Users\PoYi\Desktop\test.txt"";
	p.Start();

## Server端

	System.Diagnostics.ProcessStartInfo psi = new System.Diagnostics.ProcessStartInfo();
	psi.FileName = @"C:\Users\PoYi\Desktop\test.txt";
	psi.Arguments="";
	System.Diagnostics.Process.Start(psi);

            
