---
layout: post
title: '[ASP.NET] 檔案資料夾存取'
date: 2013-09-18 14:49
comments: true
categories: [ASP.Net]
---

刪除

        System.IO.File.Delete(filePath);
        System.IO.Directory.Delete(folderPath);

    
搬移

        System.IO.File.Move(sourceFilePath, destinationFilePath);
        System.IO.Directory.Move(sourceFolderPath, destinationFolderPath);
            
複製

        System.IO.File.Copy(sourceFilePath, destinationFilePath, true); 
        System.IO.Directory.Copy(sourceFolderPath, destinationFolderPath, true);// true表示是否覆寫
        
取得該目標下所有檔案

        string[] files = System.IO.Directory.GetFiles(folderPath);

比較需要注意的是做任何動作之前，都要需要先檢查目標是否存在，否則會跳出錯誤。

這樣也一篇…