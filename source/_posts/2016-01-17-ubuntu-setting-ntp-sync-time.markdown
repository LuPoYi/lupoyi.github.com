---
layout: post
title: "[Ubuntu] 設定NTP校正時間"
date: 2016-01-17 23:34:01 +0800
comments: true
categories: [ubuntu, ntp]
---

### 校正系統時間

類似OTP(google authenticator)這種服務當你系統時間不對就完全不能用

```bash
$ date # 確認目前時間
$ dpkg -l | grep ntp # 檢查是否已安裝
$ sudo apt-get install ntp
$ vim /etc/ntp.conf
  # 加上
  server tock.stdtime.gov.tw
  server watch.stdtime.gov.tw
  server time.stdtime.gov.tw
  server clock.stdtime.gov.tw
  server tick.stdtime.gov.tw

$ ntpdate time.stdtime.gov.tw
```

Reference:

http://pineapplelin.pixnet.net/blog/post/25364493-ubuntu%E5%A6%82%E4%BD%95%E8%A8%AD%E5%AE%9Antp%E6%A0%A1%E6%99%82

http://www.nowtaxes.com.tw/node/1112