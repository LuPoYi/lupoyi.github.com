---
layout: post
title: '[Linux] 超入門的基本指令'
date: 2013-02-15 06:24
comments: true
categories: 
---
之前在非洲服役時，曾想過用Linux取代Windows (當地經濟因素等等的...)
也嘗試用Wine來執行一些常用的Windows軟體，大致上也都沒問題，只可惜當地政府的課程始終沒有開始...

對Linux不是完全陌生，但指令倒是全忘了...
為了往後開發上不會綁手綁腳，還是必須把基本功打好，從零開始

``` bash 系統資訊
$ echo hello word
$ date
$ arch 	// x86_64
$ uname –a // list system
$ who
$ w // show online user
$ top // show system status
$ cal 2015 // calendar
$ cal 9 1752 // *
$ bc –l // calculator
$ echo 77/50 | bc –l
$ history // list command history
```

``` bash 網路
$ ifconfig
$ nslookup
$ ping
$ traceroute
$ wget // download
$ ssh 帳號@主機	// 用SSH連線
```

``` bash chmod 調整檔案權限

chmod [權限角色] [權限動作] [存取權限] 檔案/目錄
chmod [ugoa] [+-=] [rwxX] test.txt
$ chmod ugo+r test.txt 
權限角色: u(user/owner)、g(group)、o(other)、a(all)
權限動作: +(增加權限)、-(取消權限)、=(直接設定權限)
存取權限: r(read)、w(write)、x(execute)、X(execute&目錄or已被執行過)

也可用數字來調整權限
chmod [u(int)][g(int)][o(int)] 檔案/目錄
$ chmod 777 test.txt
r=4，w=2，x=1 
-rwx-r--r--(10個參數，第一個無關chmod)
2~4: user, 5~7: group, 8~10: others
755代表 rwxr-xr-x

```

Reference:

http://www.pcnet.idv.tw/pcnet/linux/linux_command.htm

http://tnrc.ncku.edu.tw/course/93/fedora_core2/page8/p8.htm

http://jdev.tw/blog/3599/linux-terminal-commands-and-shortcuts