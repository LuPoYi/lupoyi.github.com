---
layout: post
title: "[Ubuntu] Linux 稍微進階的常用指令"
date: 2016-10-19 19:01:28 +0800
comments: true
categories: [linux, ubuntu, command]
---

#### 稍微進階是對我來說啦

## grep

```bash 找該目錄底下所有出現'bob'的檔案
grep -r 'bob' *
```

```bash 找abc.txt內所有出現'bob'或'poyi'的內容 (| => OR)
grep -E 'bob|poyi' abc.txt
egrep 'bob|poyi' abc.txt
```

```bash 找abc.txt內所有出現'bob'及'poyi'的內容 (.* => AND)
grep -E 'bob.*poyi|200.*poyi' abc.txt
```

```bash 找abc.txt內沒有出現'bob'的內容 (NOT)
grep -v 'bob' abc.txt
```

## find 找檔案

```bash 在/home目錄下找檔名為production.log的檔案
find /home -name production.log
find /home -iname production.log # 不分大小寫
```

```bash 在/home目錄下找所有的log folder
find /home -type d -name log
```

## locate 找檔案(查系統index，不是直接掃目錄)
```bash 
locate nginx.conf
```

* Ctrl + c : 終止正在執行的程式
* Ctrl + l : clear

* Ctrl + w : 刪除文字至上一個空白
* Ctrl + u : 刪除游標前
* Ctrl + k : 刪除游標後
* Ctrl + h : Backspace
* Ctrl + d : Del

* Ctrl + a : 游標移到最前面
* Ctrl + e : 游標移到最後面
* Ctrl + f : 往右移一個字元
* Ctrl + b : 往左移一個字元



Reference: 

http://www.arthurtoday.com/2010/12/ubuntu-findlocatewhereiswhich.html

http://blog.jex.tw/blog/2013/11/26/grep/