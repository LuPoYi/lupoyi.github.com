---
layout: post
title: '[ASP.NET] 日期處理'
date: 2013-09-05 09:07
comments: true
categories: [ASP.Net]
---
# 日期運算其實還蠻常用到的，但好像變化不多

	// 利用TimeSpan 日期相減
	TimeSpan ts = DateTime1 - DateTime2;
	int differenceInDays = ts.Days;

    // 加上指定月數、天數、時間
    DateTime DateTime3 = DateTime1.AddDays(50);
    DateTime DateTime4 = DateTime1.AddMonths(12);
  
    // 顯示特定格式
    TextBox1.Text = DateTime4.ToString("dddd"); // 星期二
    TextBox1.Text = DateTime4.ToString("MMMM");	// 七月
    TextBox1.Text = DateTime4.ToString("MMMM",CultureInfo.CreateSpecificCulture("en-US")));	// July
	TextBox1.Text = DateTime4.ToString("yyyy-MM-dd HH:mm:ss");
  
Reference:
http://www.dotblogs.com.tw/hung-chin/archive/2012/10/15/77503.aspx
http://gogo1119.pixnet.net/blog/post/28140411-%5Bc%23%5D-datetime-tostring%E6%A0%BC%E5%BC%8F%E5%8C%96%E8%99%95%E7%90%86