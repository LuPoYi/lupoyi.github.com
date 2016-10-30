---
layout: post
title: '[Rails] 小技巧'
date: 2013-10-16 15:33
comments: true
categories: [rails]
---
## .erb的註解

```
<% #註解可寫在井號後面 %>

<% if false %>
或寫在這
<% end %>
```
## .rb的註解
```
# 一般只用單行註解

=begin
	多行註解比較少見
=end


```

## 檢查自己寫了多少code
```
$ bundle exec rake stats
```
![2013-10-17 下午 10-38-13.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/147937/9dPiFwgmRd61Oaf5xz2Z_2013-10-17%20%E4%B8%8B%E5%8D%88%2010-38-13.jpg)

```
$ rake routes
```

![2013-11-1 下午 02-58-54.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/147937/gXa3Ts8RrqxlUGr0Ducw_2013-11-1%20%E4%B8%8B%E5%8D%88%2002-58-54.jpg)
