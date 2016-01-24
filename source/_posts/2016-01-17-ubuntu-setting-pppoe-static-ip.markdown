---
layout: post
title: "[ubuntu] 設定 PPPoE 固定IP"
date: 2016-01-17 16:08:49 +0800
comments: true
categories: [ubuntu, PPPoE, StaticIP]
---

#### 一般設定IP會直接寫在/etc/network/interfaces 看是要static還是dynamic

```bash /etc/network/interfaces
auto p1p1
iface p1p1 inet static

address 192.168.1.100
netmask 255.255.255.0
gateway 192.168.1.1
```

#### 而需要使用PPPoE 輸入電信商提供的帳號來登入時

#####帳號以中華電信為例

* xxxxxxxx@hinet.net        取得動態IP (原有帳號格式)
* xxxxxxxx@ip.hinet.net     取得固定IP  僅限一台電腦使用

```bash
$ sudo apt-get install pppoeconf
$ sudo pppoeconf
```
接著照著說明下一步，輸入帳號密碼等等的，全部設定完即可使用

也可以看到/etc/network/interfaces被加了一些設定

Reference: 

http://note.drx.tw/2008/08/networkpppoe-adsl.html