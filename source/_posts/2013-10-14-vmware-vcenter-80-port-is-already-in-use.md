---
layout: post
title: '[VMware] VCenter 80 Port 已被使用'
date: 2013-10-14 13:50
comments: true
categories: [vmware]
---
在嘗試安裝vCenter時，中途出現了「VMware VirtualCenter HTTP Port: 80」

![2013-10-14 下午 02-30-11.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/147088/Dh30xvaKQpiGNxLRUEAh_2013-10-14%20%E4%B8%8B%E5%8D%88%2002-30-11.jpg)

![181188866_x.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/147088/BSI6GB26R6GYxsu7JrMh_181188866_x.jpg)

原因是vCenter自動安裝時會把SQL Server及.NET Framework相關的元件裝上，導致IIS佔用了80Port。

解法之一就是直接在Roles裡把IIS移掉就行了(想在vCenter上使用IIS就要另求解了)


<br>
Reference:
http://blog.xuite.net/cadmus.lin/yo/43386562-%E3%80%90%E7%B3%BB%E3%80%91%E5%A6%82%E4%BD%95%E6%9F%A5%E8%A9%A2%E5%93%AA%E5%80%8B%E7%A8%8B%E5%BC%8F%E4%BD%94%E7%94%A8%E4%BA%86%E6%8C%87%E5%AE%9APort