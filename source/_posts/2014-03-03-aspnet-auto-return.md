---
layout: post
title: '[ASP.NET] 自動寄信'
date: 2014-03-03 12:48
comments: true
categories: [C#, email]
---
一樣是紀綠一下...

```
MailMessage mailMessage = new MailMessage();
mailMessage.IsBodyHtml = true;

mailMessage.To.Add(emailAddress);
mailMessage.CC.Add(cCMailAddress);

MailAddress fromWho = new MailAddress(senderMailAddress);
mailMessage.From = fromWho;
mailMessage.Subject = title;
mailMessage.Body = "這邊可放html"

SmtpClient mailSmtp = new SmtpClient(mailServer,mailServerPort);

mailSmtp.Send(mailMessage);
```