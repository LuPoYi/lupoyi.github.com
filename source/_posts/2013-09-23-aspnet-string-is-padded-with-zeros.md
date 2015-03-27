---
layout: post
title: '[C#] 字串補零'
date: 2013-09-23 14:01
comments: true
categories: [ASP.Net]
---
最近常常手動新增假員工AD帳號來測我的程式
在嘗試跑程式step by step來測試時，想說奇怪怎麼假帳號會有電腦資產
原來這帳號跟設計部門的元老經理的員工工號重複了...
還好有及時發現沒有把程式執行完，不然IT部門就要起飛了...

所以想說寫個迴圈來測是不是有其他工號也有重複的案例
而工號欄位都是五位數(BOB00001~BOB99999)
像我的工號是4104需要補足五位數
有三種方式：

    int myEmpNo = 4104;
    empNo.ToString("00000");  
    empNo.ToString("D5");						 
    empNo.ToString().PadLeft(5,'0'); 
    // 04104

查了才知道原來ToString蠻方便的，有些好用的例子

    empNo.ToString("BOB00000"); // BOB04104
    empNo.ToString("C");  // NT$4,104.00
    empNo.ToString("C", new System.Globalization.CultureInfo("en-US")); $4,104.00
    
    int myPhoneNo =123456789;
    myPhoneNo.ToString("(##) ###-####"); // (12) 345-6789
    
    
PadLeft ：字串向右靠齊，將指定字元填滿左邊。
PadRight：字串向左靠齊，將指定字元填滿右邊。

Reference:
[http://msdn.microsoft.com/zh-tw/library/0c899ak8(v=vs.95).aspx](http://msdn.microsoft.com/zh-tw/library/0c899ak8(v=vs.95).aspx)
http://www.dotblogs.com.tw/ethon.chi/archive/2010/09/27/17917.aspx