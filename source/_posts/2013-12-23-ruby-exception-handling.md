---
layout: post
title: '[Ruby] 例外處理'
date: 2013-12-23 15:57
comments: true
categories: [ruby]
---
好像各語言都大同小異，try..catch..finally語法轉換一下就差不多了

#  例外處理
``` ruby begin..end當中的rescue
begin
  # 有機會發生例外的code
rescue
  # 發現例外後要執行的code
ensure
  # 無論是否例外都會執行的code
end
```

而當例外發生時，如果沒有指定變數，Ruby會將錯誤資訊存放至$!及$@
* $! (例外物件)
  * .class
  * .message
  * .backtrace (等同於$@)
* $@ (例外的位置資訊)


``` ruby example
begin
	abc = 1 / 0
rescue => ex
	puts "Except class:  #{ex.class}"
  	puts "Except message: #{ex.message}"
ensure
	puts 'Always print'
end

Except class:  ZeroDivisionError
Except message: divided by 0
Always print
=> nil
```

Reference:
http://blog.tonycube.com/2011/07/ruby8.html
  

