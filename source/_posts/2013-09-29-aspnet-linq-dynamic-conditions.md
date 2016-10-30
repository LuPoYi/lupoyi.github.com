---
layout: post
title: '[ASP.NET] Linq 動態條件搜尋'
date: 2013-09-29 08:10
comments: true
categories: [ASP.Net, Linq, PredicateBuilder]
---
一般Linq在多種動態條件的組合時會顯得比較麻煩，要額外加很多if else判斷式來達成
而「PredicateBuilder」可以解決這些麻煩，原理上是將where的條件獨立出來


``` Console
static void linqPB()
    {
        var list = new List<string> { "apple", "bob", "coco", "durex", "enter", "fuck"};
        var searchKeyword = new List<string> { "o", "e" };
        var predicate = PredicateBuilder.False<string>();

        foreach (var word in searchKeyword)
        {
            var temp = word;  // 避免參考到相同變數位址
            predicate = predicate.Or(p => p.Contains(temp));
        }
        var qry = list.Where(predicate.Compile());

        foreach (var item in qry)
        {
            Console.WriteLine(item);
        }
        Console.Read();
    }
// result: apple bob coco durex enter
```

主要的重點如下，將條件放入xxx
```
  var predicate = PredicateBuilder.False();	// 這邊的true/false會與下列的or做串接
  predicate = predicate.Or(p => p.name.Contains(xxx));
  predicate = predicate.Or(p => p.department.Contains (xxx));
  myDB.employee.Where (predicate);
```


Reference:
要使用PredicateBuilder，需要加入參考: LinqKit.dll
http://www.albahari.com/nutshell/predicatebuilder.aspx   
http://blog.sanc.idv.tw/2010/10/linq.html
http://leaflet-t-h.blogspot.tw/2011/11/linq-predicatebuilder.html