---
layout: post
title: '[ASP.NET] 檔案下載寫法'
date: 2013-08-28 08:57
comments: true
categories: [ASP.Net]
---
## Response.WriteFile 檔案下載方式一

	using System.IO;
	
	string filePath = "C:/porn.jpg";
	FileInfo file = new FileInfo(filePath);
	Response.Clear()
	Response.Buffer = false; 
	Response.ContentType = "application/octet-stream"; // 指定檔案類型
	Response.AddHeader("Content-Disposition","attachment;filename="+"porn.jpg"); // 設定檔名
	// System.Web.HttpUtility.UrlEncode(newFileName, System.Text.Encoding.UTF8) 解決中文檔名亂碼
	Response.AppendHeader("Content-Length", file.Length.ToString()); // 表頭加入檔案大小
	Response.WriteFile(file.FullName);
	Response.Flush();
	Response.End();

## System.Net.WebClient.DownloadData 檔案下載方式二
 
	using System.Net;
	 
	WebClient wc = new WebClient();
	byte[] byteFile = null;
	string path = "C:/porn.jpg"; // 設定路徑
	byteFile = wc.DownloadData(path);
	string fileName = System.IO.Path.GetFileName(path); // 取得檔案名稱
	Response.AppendHeader("content-disposition", "attachment;filename=" + "porn.jpg"); //設定檔名
	// HttpContext.Current.Server.UrlEncode(fileName) 解決中文檔名亂碼
	Response.ContentType = "application/octet-stream";  // 指定檔案類型	
	Response.BinaryWrite(byteFile); // 內容轉出作檔案下載
	Response.End();


## 參考資料
http://www.dotblogs.com.tw/jerrymow/archive/2013/04/22/102084.aspx
http://blog.miniasp.com/post/2008/03/12/Caution-about-ASPNET-Response-a-Large-File.aspx
http://www.dotblogs.com.tw/whitewing/archive/2010/03/18/14102.aspx
