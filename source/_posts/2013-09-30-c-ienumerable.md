---
layout: post
title: '[C#] IEnumerable vs IQueryable'
date: 2013-09-30 14:34
comments: true
categories: [C#, IEnumerable, IQueryable]
---
在linq的使用上，IEnumerable<T>是不可或缺的泛型介面
像是foreach迴圈就是利用IEnumerable的特性(MoveNext)來實現逐一檢查。

而IQueryable<T>又繼承了IEnumerable<T>...

兩者的差別從概念上來說：
**IEnumerable<T>**:先將查詢的值取出，再一層一層做篩選。
**IQueryable<T>**:把全部Linq翻成T-SQL，直到真正要使用時才去執行。


```c# IEnumerable
// list1
IEnumerable<Employee> list1 = myDB.Employees.Where(p => p.Name.StartsWith("S"));
list1 = list1.Take<Employee>(10); 

// list2
IQueryable<Employee> list2 = myDB.Employees.Where(p => p.Name.StartsWith("S"));
list2 = list2.Take<Employee>(10); 
```
```SQL SQL
// list1
SELECT [t0].[EmpID], [t0].[EmpName], [t0].[Salary] FROM [Employee] AS [t0]
WHERE [t0].[EmpName] LIKE @p0

// list2
SELECT TOP 10 [t0].[EmpID], [t0].[EmpName], [t0].[Salary] FROM [Employee] AS [t0]
WHERE [t0].[EmpName] LIKE @p0
```

可以看到 IQueryable 在執行時直接向SQL要求TOP 10；而 IEnumerable 則是把全部撈出來再做一些篩選。




Reference:
http://msdn.microsoft.com/zh-tw/library/ttw7t8t6.ASPX
http://www.cnblogs.com/seebook/archive/2009/02/21/1395310.html
http://www.dotnet-tricks.com/Tutorial/linq/I8SY160612-IEnumerable-VS-IQueryable.html