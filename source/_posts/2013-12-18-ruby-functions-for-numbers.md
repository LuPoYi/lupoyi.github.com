---
layout: post
title: '[Ruby] Functions for Numbers'
date: 2013-12-18 03:40
comments: true
categories: [ruby]
---
``` ruby Math
> 2 ** 3 # 次方
 => 8
 
 =begin
  Addition (+)
  Subtraction (-)
  Multiplication (*)
  Division (/)
  Exponentiation (**)
  Modulo (%)
 =end
```


``` ruby 常用的
> 9.9.integer?
 => false
 
> -5.abs
 => 5
 
> 5.6.round # 取最近的整數/四捨五入
 => 6
 
> 9.9.floor	# 取整數/無條件捨去
 => 9 
 
> 2.next
 => 3

```

``` ruby 二元運算
n & num
n | num
n ^ num (XOR)
n << num (向左位移)
n >> num (向右位移)
```
 
 

Reference: http://www.tutorialspoint.com/ruby/ruby_builtin_functions.htm