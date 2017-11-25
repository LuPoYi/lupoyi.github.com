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

* 使用 CryptoNote 演算法
* Ring Signature
* RingCT

* Private
* Untraceable

* viewkey可以選擇性公開交易 
* address - 95 character string (public view key & public spend key)
* add some fake transaction to mix


```
Alice 要發送交易給 Bob
Alice 將 Bob 的 public view key & public spend key 再加上 randon data 來產生一次性的公鑰 供 Bob 後續使用
一次性的公鑰大家都看得到
Bob可以用一次性的公鑰推出一次性的私鑰，最後用private spend key來發送給別人
整個交易都不需要Bob的address
// A 發送給 B => 使用A+ 發送給 B+ (而A+/B+無法推回A/B)
```

## Dash

* 主要特色是雙層網路並提供即時發送及匿名發送

* Masternodes 主節點
    - 需抵押 1000 Dash
    - 具投票權可以決定Dash未來走向
    - 45%的區塊獎勵
    - 持續 sync blockchain
    - 提供 InstantSend(即時發送) 服務
    - 提供 PirvateSend(匿名發送) 服務


* PirvateSend 匿名發送 - 混幣(Coinjoin)
    - 發送 PirvateSend
        + 該筆交易會在Masternodes上與相同數量的交易進行合併，併成同一筆交易來混淆你的資金流向


* InstantSend 即時發送
    - 發送 InstantSend
        + 每個block產生後會隨機挑選10個Masternodes來提供InstantSend服務
        + 發送交易時這10個Masternodes會優先收到廣播，而它們會對其他node廣播說這筆發送方已被鎖定，如果在這同時收到另一筆來自發送方的交易將會被reject
        + 這時該筆交易會馬上收到5confirm，即完成交易 (1.3秒)

## ZCash

 * Zero-knowledge proof (zk snarks)
 * 2100w
 * t-addresses(public address) vs z-addresses(shielded address)

Reference:

https://www.youtube.com/watch?v=591J9KcKgHM
http://bitcoin-yoro.com/altcoin/dashmonerozcash
https://moneroforcash.com/monero-vs-dash-vs-zcash-vs-bitcoinmixers.php
https://talk.shadowproject.io/topic/563/%E7%BB%88%E6%9E%81%E9%9A%90%E7%A7%81-%E5%8C%BF%E5%90%8D-%E8%B4%A7%E5%B8%81%E5%A4%A7%E6%AF%94%E6%8B%BC