---
layout: post
title: "[Golang] Golang 101 入門筆記"
date: 2016-04-02 20:59:38 +0800
comments: true
categories: [Go, Golang, basic, beginning]
---
## Hello Go!
```go hello.go
package main

import "fmt"

func main() {
    fmt.Println("hello, go!")
}
```
```bash
$ go run hello.go
Hello Go!
```


## 基本結構、定義變數

### 常數
```go 常數 const identifier [type] = value
const Pi = 3.14159
const Monday, Tuesday, Wednesday, Thursday, Friday, Saturday = 1, 2, 3, 4, 5, 6
const (
  Unknown = 0
  Female = 1
  Male = 2
)
// "iota"
```

### 變數

```go 變數 var identifier type / var identifier [type] = value
var a int
var b bool
var str string

var a int = 15
var i = 5
var b bool = false
var str string = "Hello Go!"


// := 初始化並給值(local限定)
i := 1
s := "hi"
```

### 類型轉換

* int : int8, int16, int32, int64
* uint : uint8, uint16, uint32, uint64
* float: float32, float64
* 不同類型之間做計算都需要經過類型轉換

```go 類型轉換 valueOfTypeB = typeB(valueOfTypeA)
var a int
var b int32
a = 15
b = a + 6 // cannot use a + 6 (type int) as type int32 in assignment
b = int32(a) + 6
```

### 指針

```go pointer
// 若有一個變數為abc，則 &abc 可取得 abc 的記憶體位置
  var i1 = 5
  fmt.Printf("An integer: %d, its location in memory: %p\n", i1, &i1)

// 要直接定義pointer的話，使用 *abc
  var intP *int
  intP = &i1
  fmt.Printf("The value at memory location %p is %d\n", intP, *intP)

```

## 判斷式、迴圈

```go if/else/switch/for
if abc > 5 {

} else if abc < -5  {

} else {

}

switch abc {
  case 1:
    ......
  case 2:
    ......
  default:
    ......
}

for i := 0; i < 5; i++ {

}

// break 中斷並跳出迴圈或判斷式
// continue 略過當次剩餘的code，直接跳至迴圈下一run
```

## Function

```go function
func say() {
  println("Hi~")
}

// min, max = MinMax(44, 33)
func MinMax(a int, b int) (min int, max int) {
  if a < b {
      min = a
      max = b
  } else { // a = b or a < b
      min = b
      max = a
  }
  return
}


func Min(a ...int) int {

}
```

## 其他備忘

* 不同類型之間做計算都需要經過類型轉換
* import library或是變數卻沒使用的話會跳錯
* 駝峰式命名

Reference:

https://github.com/Unknwon/the-way-to-go_ZH_CN/blob/master/eBook/directory.md