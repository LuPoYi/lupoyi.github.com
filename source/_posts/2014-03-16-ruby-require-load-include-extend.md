---
layout: post
title: '[Ruby] require,load,include,extend'
date: 2014-03-16 21:14
comments: true
categories: [ruby, extend, load, require, include]
---
## require vs load
首先require與load都是用來載入指定的檔案
差別在於使用require只會調用一次，且副檔名可省略，load則相反。

```ruby random.rb
$a = (rand * 10).floor
```

```ruby use_require.rb 產出的兩個值相同(只載入一次random.rb)
require "./random"
puts $a
require "./random" # 此行無效果
puts $a
```

```ruby use_load.rb 產生的兩個值不一定相同
load "./random.rb"
puts $a
load "./random.rb"
puts $a
```

___

## include vs extend

include: 將目標當作instance來使用；並不直接擁有method，需建立一個實例後才能用
extend: 相當於把目標的code直接放進來；具有目標的class methods

```ruby include_extend.rb
module Say
  def say_hi
    puts "Hi!"
  end
end

class People
  include Say
end

class Person
  extend Say # 具有Say的method，可直接呼叫
end
```

```bash irb
001 > require './include_extend.rb'
 => true 
002 > Person.say_hi
Hi!
 => nil 
003 > People.new.say_hi
Hi!
 => nil 
```

Reference:

http://www.slideshare.net/BruceLi2/rubypart2

http://cat-son.blogspot.tw/2012/10/2-rubyinclude-extendrequire.html#sthash.QduzPsMe.cFJYqpMb.dpbs

