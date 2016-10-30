---
layout: post
title: '[ASP.NET] 列印'
date: 2013-09-04 02:46
comments: true
categories: [ASP.Net]
---
# 列印指定文件

    string filePath = "C:\\test.txt";
    
    // 使用預設印表機
    LocalPrintServer ps = new LocalPrintServer();
    PrintQueue queue = ps.DefaultPrintQueue;
    
    // 指定特定印表機
    PrintServer ps = new PrintServer(@"\\TY-SRV-PRINT01");
    PrintQueue queue = new PrintQueue(ps, "FUJIXEROX");
    
    PrintSystemJobInfo pj = queue.AddJob(filePath);
    Stream myStream = pj.JobStream;
    Byte[] myByteBuffer = System.IO.File.ReadAllBytes(filePath);
    myStream.Write(myByteBuffer, 0, myByteBuffer.Length);
    myStream.Close();
    
    queue.Commit();





  