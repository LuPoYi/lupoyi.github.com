---
layout: post
title: '[JavaScript] 中斷事件或動作的觸發'
date: 2014-01-13 14:00
comments: true
categories: [jquery, javascript]
---
# bubble up 冒泡
當底層的元件被觸發時，會將所屬的父元件會連帶被觸發 - 多層觸發
而要處理這問題通常會用到 stopPropagation() 或 preventDefault()

## stopPropagation()
停止向上層bubble up，但仍然會觸發browser
看例子比較快 http://jsfiddle.net/dA6R3/1/
``` html 加入event.stopPropagation(); 當點擊下去時，就不會向上觸發其他動作

<div class="p">
    <div class="a"></div>
</div>

<script>
$(".p").click(function(event){
    alert("p 外");
});

$(".a").click(function(event){
    alert("a 內");
    event.stopPropagation();
});
</script>
```




## preventDefault()
會將預設的動作停掉不讓它執行，不會觸發browser
看例子比較快 http://jsfiddle.net/88dcF/1/
``` html 加入event.preventDefault(); 當點擊下去時，就不會執行預設動作(連到GOOGLE)
<a href="http://www.google.com">go to google</a>
<div id="check"></div>

<script>
$("a").click(function(event) {
  event.preventDefault();
  $("<div>").append("Ya").appendTo("#check");
});
</script>
```



Reference:
http://www.neoease.com/stoppropagation-and-preventdefault-and-return-false/
http://yiyingloveart.blogspot.tw/2013/08/eventpreventdefaultreturn-false.html