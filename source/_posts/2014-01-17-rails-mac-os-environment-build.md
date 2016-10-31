---
layout: post
title: '[Mac] Ruby on Rails 基本環境建置 - 10.9 Mavericks'
date: 2014-01-17 12:47
comments: true
categories: [mac, ruby, rails, Mavericks]
---
是說終於買了mac，省去開箱文趕緊把環境用好來繼續練習Rails
但使用上還是有一點不習慣，會覺得有些地方也蠻不人性化，但相對穩定就是了


## 以下環境為OS X 10.9.1 Mavericks
1.安裝xcode-select
Command line tool已經獨立出來，不需要安裝XCode了
``` bash terminal
$ xcode-select --install
```
![螢幕快照 2014-01-17 下午9.07.40.png](http://user-image.logdown.io/user/2740/blog/2734/post/176032/wrVy25UMQkeJEnuNKSEq_%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202014-01-17%20%E4%B8%8B%E5%8D%889.07.40.png)


如果安裝失敗的話也可以到[這裡](https://developer.apple.com/downloads/index.action?q=xcode)下載

![螢幕快照 2014-01-17 下午10.01.05.png](http://user-image.logdown.io/user/2740/blog/2734/post/176032/umDZbcPSNWfhQ0VNDr7l_%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202014-01-17%20%E4%B8%8B%E5%8D%8810.01.05.png)


2.安裝homebrew
``` bash terminal
$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
```

3.安裝所需要的工具
``` bash terminal
$ brew install git
```

4.安裝RVM
``` bash terminal
$ curl -L https://get.rvm.io | bash -s stable
```
5.透過RVM來安裝RUBY
``` bash terminal
$ rvm install ruby
```
6.透過RVM來安裝RubyGems
``` bash terminal
$ rvm rubygems current
```
7.安裝Rails
``` bash terminal
$ gem install rails
```

===

* XCode:官方提供的一個IDE，主要用來開發IOS APP，不過它也包含了一些開發其他語言所需的環境
* Homebrew: OSX 套件管理工具
* RVM (Ruby Version Manager):Ruby版本管理工具，便於切換不同版本


Reference:

http://www.computersnyou.com/2025/2013/06/install-command-line-tools-in-osx-10-9-mavericks-how-to/
http://www.slideshare.net/marsz330/ruby-on-rails-for-mac