---
layout: post
title: "[Crypto] 加密貨幣(XMR DASH ZEC)筆記"
date: 2017-11-04 16:22:35 +0800
comments: true
categories: [ZCash, Monero, Dash, zec, xmr, private]
---

// 個人筆記尚未整理

## 匿名貨幣 - 強調隱私, 自動混幣...

```
Bitcoin 本身有一定的隱私性，錢包地址跟使用者之間沒有直接的關聯性
所有交易都是公開的，任何人都可以知道某錢包現在或過去有過多少交易，但理論上無法得知該錢包是誰擁有的

// 今天你發送一筆交易給朋友，他得知了你的錢包地址後，就可以一直觀察你持有多少BTC，就像你的銀行存款暴露在外一樣
// 當然也可以換不同錢包或是透過交易所發送來隱藏你主要的錢包地址
// 而這些Privacy Coins就是為了解決這問題 - Pirvate transactions
```

## Monero(XMR)

* Base on Bitcoin
* CryptoNote
* Ring Signature

* 100% privacy by default
* viewkey可以選擇性公開交易 
* untraceable
* address - 95 character string (public view key & public spend key)
* 混幣(mixin)
* 與bytecoin同技術? 
* Ring Signature
* add some fake transaction to mix

* Ring Signatures - ring size
* RingCT

```
Alice 要發送交易給 Bob
Alice 將 Bob 的 public view key & public spend key 再加上 randon data 來產生一次性的公鑰 供 Bob 後續使用
一次性的公鑰大家都看得到
Bob可以用一次性的公鑰推出一次性的私鑰，最後用private spend key來發送給別人
整個交易都不需要Bob的address
// A 發送給 B => 使用A+ 發送給 B+ (而A+/B+無法推回A/B)
```

## Dash

* 多筆 mix transaction?
* 混幣 - 將多筆交易包起來發送，沒辦法準確知道誰發多少誰拿多少
* coin mixing
* 交易速度快

## ZCash

 * Zero-knowledge proof (zk snarks)
 * 2100w

Reference:

https://www.youtube.com/watch?v=591J9KcKgHM
http://bitcoin-yoro.com/altcoin/dashmonerozcash
https://moneroforcash.com/monero-vs-dash-vs-zcash-vs-bitcoinmixers.php
https://talk.shadowproject.io/topic/563/%E7%BB%88%E6%9E%81%E9%9A%90%E7%A7%81-%E5%8C%BF%E5%90%8D-%E8%B4%A7%E5%B8%81%E5%A4%A7%E6%AF%94%E6%8B%BC