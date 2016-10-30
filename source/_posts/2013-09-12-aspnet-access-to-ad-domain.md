---
layout: post
title: '[ASP.NET] 存取AD網域'
date: 2013-09-12 01:27
comments: true
categories: [Active Directory, ASP.Net]
---

## 透過AD網域來存取帳號資料

## 查詢資料

	string QueryString = "LDAP://網域";
    DirectoryEntry de = new DirectoryEntry(QueryString,adminAccount,adminPassword);
    DirectorySearcher ds = new DirectorySearcher(de);
    SearchResultCollection Results = null;

    // 設定查詢條件：依姓名及工號查詢
    ds.Filter = @"(&(samaccountname=" + employeeName + ")(Description=" + employeeNo + "))";
    // 將查詢結果放入Results
    Results = ds.FindAll();

    foreach (SearchResult result in Results)
    {
        if (result.Properties["description"].Count > 0)
        {
            // 透過AD裡的屬性「description」，取得工號
            string resultNo = result.Properties["description"][0].ToString();
            Response.Write(resultNo);
            Response.Write("<br>");
        }
    }
    ds.Dispose(); // 釋放資源
    de.Dispose();

        

## 修改指定帳號的屬性值

    string QueryString = "LDAP://"+ userLDAP;
    DirectoryEntry de = new DirectoryEntry(QueryString, adminAccount,adminPassword);
    
    de.Properties["TelephoneNumber"].Value = 123;     
    
    // 停用此帳號：userAccountControl = 514 
    de.Properties["userAccountControl"].Value = 514;
    
    // 重設密碼
    de.Invoke("SetPassword", newPassword);
    
    de.CommitChanges();
    de.Close();

## 刪除帳號

    string QueryString = LDAP://" + userLDAP;
    DirectoryEntry user = new DirectoryEntry(QueryString, adminAccount, adminPassword);
    // 找上一層
    DirectoryEntry ou = user.Parent;
    // 再回去刪它
    ou.Children.Remove(user);
    ou.CommitChanges();


基本屬性KEY跟VALUE可以在AD裡面找到
![2013-9-15 下午 01-58-35.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/138560/iH5dxsHMS6SoXINR2EX2_2013-9-15%20%E4%B8%8B%E5%8D%88%2001-58-35.jpg)

Reference:
http://www.dotblogs.com.tw/yc421206/archive/2010/02/07/13510.aspx
