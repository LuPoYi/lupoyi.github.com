---
layout: post
title: '[C#] String常用語法'
date: 2013-07-22 11:37
comments: true
categories: [ASP.NET(C#)]
---

StringBuilder: 用append串接；大量動態字串時效率較高
String: 用+串接；固定字串時，效率較高
## 一般情況都用String



**String.IndexOf**
找字串中第一次出現的index
```
if(employeeName.IndexOf("Admin") == -1)	// 可判斷Name中是否有符合Admin的字串
```
**String.LastIndexOf**
找字串中最後一次出現的index

**Substring(int startIndex,	int length)** 擷取字串

    string str = "台灣駐史瓦濟蘭大使館";
    str.Substring(3, 6);	// output: 史瓦濟蘭大使

**Split** 分隔字串

    string wholeString = "Bob.Lu";
    string[] spiltString = wholeString.Split(new string[] { "." }, StringSplitOptions.RemoveEmptyEntries);
    aryUserInfo[0].ToString(); // output: Bob
    
**Regex.IsMatch(string input,	string pattern)** 是否包含xxx

    Regex.IsMatch(strPwd, "[0-9]")  // = Regex.IsMatch(strPwd, @"\d")
    
    Regex.IsMatch(strPwd, @"[\W]")
    
pattern表示法 :
\d : [0-9] 數字
\D : 數字以外的字元
\w : [a-zA-Z0-9_]
\W : \w以外的字元

