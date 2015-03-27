---
layout: post
title: '[ASP.NET] Reset Password in Active Directory'
date: 2014-02-14 12:47
comments: true
categories: [C#, Active Directory, Password]
---
重設密碼建議還是用LDAP去抓USER，以免抓錯人之類的

``` C# Reset Password in Active Directory
DirectoryEntry userDirEntry = new DirectoryEntry("LDAP://" + ldapStr, adminAccount, adminPassword);
userDirEntry.Invoke("SetPassword", CreateRandomPassword(8));	// 重設新密碼
userDirEntry.CommitChanges();


userDirEntry.Properties["pwdLastSet"].Value = 0; // 下次登入會強制要求改密碼
userDirEntry.CommitChanges();

userDirEntry.Close();
```

``` C# Generate Random Password (Winform)

public static string CreateRandomPassword(int passwordLength) 
{
      string allowedChars = "abcdefghijkmnprstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789~!@#$%^&*()_+?";
      char[] chars = new char[passwordLength];
      for (int i = 0; i < passwordLength; i++)
      {
            chars[i] = allowedChars[rd.Next(0, allowedChars.Length)];   
            // random.next(min,max) =>int
      }
      string strPwd = new string(chars);

      while (!((Regex.IsMatch(strPwd, "[0-9]")) && 
      (Regex.IsMatch(strPwd, "[a-z]")) && 
      (Regex.IsMatch(strPwd, "[A-Z]")) && 
      (Regex.IsMatch(strPwd, @"[\W]"))))    
      // \w  [a-zA-Z0-9_]  , \W ![a-zA-Z0-9_]
      {
            strPwd = CreateRandomPassword(8);   
      }

      return strPwd;
}

// 靜態避免短時期內產生相同亂數
static Random rd = new Random(GetRandomSeed());
static int GetRandomSeed()
{
      byte[] bytes = new byte[4];
      System.Security.Cryptography.RNGCryptoServiceProvider rng = 
      new System.Security.Cryptography.RNGCryptoServiceProvider();
      rng.GetBytes(bytes);
      return BitConverter.ToInt32(bytes, 0);
}


```