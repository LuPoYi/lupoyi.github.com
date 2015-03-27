---
layout: post
title: '[Rails] Connect SQL Server'
date: 2013-10-30 16:29
comments: true
categories: [rails, SQLServer]
---
看到官方提供的adpter..真的不知道怎麼下手.. ~~魯蛇無誤~~



## Ubuntu Connect to SQL Server

想在Unix、Linux環境上，存取SQL Server似乎大多都使用FreeTDS
``` bash 安裝FreeTDS
$ sudo apt-get install freetds-dev freetds-bin tdsodbc
```

``` bash 檢查FreeTDS版本資訊
$ tsql -C
```
![2013-11-6 上午 10-53-15.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/156771/0fBGvXZHQ4ug2ZQOTol3_2013-11-6%20%E4%B8%8A%E5%8D%88%2010-53-15.jpg)



``` bash 這時候就可以Connect SQL Server
$ tsql -H (SQL Server IP) -p 1433 -U (account) －P (password) –D (datebase name)
```
``` bash 直接下TSQL，這邊要用go才會執行
$ select * from Team
$ go
```
![2013-11-6 上午 11-03-53.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/156771/J9JDVHr7S9uu6H8nhWLj_2013-11-6%20%E4%B8%8A%E5%8D%88%2011-03-53.jpg)

這邊代表已能在Ubuntu Connect SQL Server
但Rails還需要其他套件

***
## Rails Connect to SQL Server (Error)

``` bash 安裝tiny_tds、sqlserver adapter
$ sudo gem install tiny_tds
$ sudo gem install activerecord-sqlserver-adapter
```
修改DateBase.yml
![2013-11-6 上午 11-36-45.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/156771/n2j3Og9gRCKcn9v70smh_2013-11-6%20%E4%B8%8A%E5%8D%88%2011-36-45.jpg) 

OK..在這邊理論上是可以直接在Rails調用..
但執行時卻會出錯，查了一下好像還無解 (Rails 4似乎還不太支援之類的..)
錯誤訊息可參考 > https://github.com/rails-sqlserver/activerecord-sqlserver-adapter/issues/279
暫時找不到解法，除非把Rails降到3.x版



Reference:
https://github.com/rails-sqlserver
http://www.cnblogs.com/lwm-1988/archive/2012/05/28/2520728.html
http://stackoverflow.com/questions/12010780/rails-how-to-do-search
