---
layout: post
title: '[Mac] 直接在終端機開啟sublime'
date: 2014-01-19 04:31
comments: true
categories: [mac]
---
應該有更方便的用法吧我想，但目前對我來說算好用了:D

``` bash 執行這行指令
ln -s /Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime
```

```
$ open id_rsa.pub
No application knows how to open /Users/Bob/.ssh/id_rsa.pub.
$ ln -s /Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime
$ sublime id_rsa.pub
```

Reference:
http://jocoomadao.blogspot.tw/2013/11/macterminal-sublime.html
