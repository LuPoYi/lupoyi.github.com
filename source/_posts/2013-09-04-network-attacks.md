---
layout: post
title: '[ASP.NET] 資安基本概念'
date: 2013-09-04 01:25
comments: true
categories: [network security, ASP.Net]
---
以往都是寫供內部使用的網站，也沒想過有什麼資安的問題…
也就是說資安這一環，幾乎是無知的狀態…
***
# SQL Injection
**將字串中夾帶SQL指令，讓SERVER認為是正常指令而執行**

## ASP.NET 防範方法
1. 避免直接將使用者輸入的資料作為SQL指令；或是利用SQLParameter來處理參數
2. 將設定customErrors:On，至少出錯時不會show出程式碼
3. 設定專屬SQL帳號及必要權限，避免使用sa
4. 其他...

***


# XSS
**－通常是指對方將有害程式碼惡意嵌入網頁當中，使得其他人連進此網頁時會受到影響；或是對方竊取更高的權限、Cookie等等…；(常見的為JavaScript)**


## ASP.NET 防範方法
1. 盡量保持ValidateRequest為啟用
2. 進行Html Encode(前端或後端)
3. 其他...必須防範所有有機會寫入Html tag的地方

***

Reference:
http://anti-hacker.blogspot.tw/2008/01/xss.html
http://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC
https://www.google.com.tw/#q=csrf
http://blog.darkthread.net/blogs/darkthreadtw/archive/2008/05/07/are-your-website-naked.aspx