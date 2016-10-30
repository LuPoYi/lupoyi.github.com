---
layout: post
title: '[ASP.NET] Linq基本用法'
date: 2013-08-23 02:28
comments: true
categories: [Linq]
---
公司前輩跟我提過可以用用看Linq比較潮(?)
寫.NET的時候就不需要寫的這麼..無腦

    sqlStr += "Select ...";
    sqlStr += "from ....";
    sqlStr += "join ...";
    sqlStr += "where ...."
		
    string sql = @"SELECT ...
               FROM table1
               WHERE field3 = @Param1";


基本Linq類似這樣

    var Query =
    	from q in myDB.Employee
    	where q.Name == "Bob"
    	select q;
      
Group By
    
    int[] values = {1,2,3,4,5,6};
    var Query =
        from p in values
        group p by p % 2 ==0;
        // values => 1 3 5 0 2 4


