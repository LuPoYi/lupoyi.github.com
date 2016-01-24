---
layout: post
title: '[Ruby] 變數'
date: 2013-12-14 13:19
comments: true
categories: 
---
Ruby 有一個重要特性 **Convention Over Configuration**

希望去做到一個約定成俗的習慣/慣例，省去過多的設定，讓程式更為簡潔。(ex:route maping)

Ruby命名也有一定的慣例

* $name:全域變數
* @name:實例變數，作用域僅限定於 self 指示的物件
* name:區域變數(小寫字母或底線開頭；初始化前並沒有 nil 值)
* Name:常數(大寫開頭；重覆定義時會出現警告)

``` ruby 全域變數 vs 實例變數 vs 區域變數
ruby> $foo
	=> nil
ruby> @foo
  => nil
ruby> foo
ERR: (eval):1: undefined local variable or method `foo' for main(Object)
ruby> Foo = 2
	=> 2
ruby> Foo = 3
  => warning: alread initialized constant Foo
  => 3

```



