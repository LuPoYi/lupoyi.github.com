---
layout: post
title: "[Crypto] 加密貨幣(DASH Pivx Zcash Monero)筆記"
date: 2017-11-04 16:22:35 +0800
comments: true
categories: [ZCash, Monero, Dash, zec, xmr, private]
---

// 個人筆記尚未整理

## Pirvacy Coins 匿名貨幣 - 強調隱私

Bitcoin 本身具有一定的隱私性，錢包地址跟使用者之間沒有直接的關聯性
所有交易都是公開的，任何人都可以知道某錢包地址現在或過去有過多少交易，但理論上無法得知該錢包是持有者是誰。

但今天你發送一筆交易給朋友或是客戶，對方得知了你的錢包地址，就可以觀察你持有多少BTC，就像你的銀行存款暴露在外一樣，任何人只要知道你的錢包地址都可以查得到你的餘額及所有交易紀錄。當然你也可以一直換錢包地址或是透過交易所發送來隱藏你主要的錢包地址，而這些匿名貨幣用各自的手段去解決這些問題。

## Dash

### 主要特色是雙層網路並提供即時發送及匿名發送
> 150 seconds/block

#### Masternodes 主節點

* 需抵押 1000 Dash
* 具投票權可以決定Dash未來走向
* 45%的區塊獎勵
* 持續 sync blockchain
* 提供 InstantSend(即時發送) 服務
* 提供 PirvateSend(匿名發送) 服務

#### PirvateSend 匿名發送 - 混幣(Coinjoin)

* 該筆交易會在Masternodes上與相同數量的交易進行合併，併成同一筆交易來混淆你的資金流向

#### InstantSend 即時發送

* 每個block產生後會隨機挑選10個Masternodes來提供InstantSend服務
* 發送交易時這10個Masternodes會優先收到廣播，而它們會對其他node廣播說這筆發送方已被鎖定，如果在這同時收到另一筆來自發送方的交易將會被reject
* 這時該筆交易會馬上收到5confirm，即完成交易 (1.3秒)

## Pivx

### 特色與Dash相同 - PoS版本的Dash
> 60 seconds/block

#### Masternodes 主節點

* 需抵押 10000 Pivx
* 具投票權可以決定Pivx未來走向
* 持續 sync blockchain
* 提供 InstantSend(即時發送) 服務
* 提供 PirvateSend(匿名發送) 服務

#### PirvateSend 匿名發送 - 混幣(Coinjoin)

* 該筆交易會在Masternodes上與相同數量的交易進行合併，併成同一筆交易來混淆你的資金流向
* Zerocoin Protocol(zPiv)

#### InstantSend 即時發送(SwiftTx)

* SwiftTx

## Zcash

### 主要特色是錢包地址分為兩種類型，Public address(t-addrs)及 Shielded address(z-addrs)

#### Public address(t-addrs)

* t開頭的地址
* 與其他加密貨幣地址相同，在公開帳本可查詢餘額、歷史交易

#### Shielded address(z-addrs)

* z開頭的地址 
* 零知識證明(Zero-knowledge proof) - zk-SNARKs
* 無法在公司帳本上查詢

![Zcash Transaction Type](https://z.cash/images/basic-txn-types_v2.png)


## Monero(XMR) - not yet

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



Reference:

https://www.youtube.com/watch?v=591J9KcKgHM

http://bitcoin-yoro.com/altcoin/dashmonerozcash

https://moneroforcash.com/monero-vs-dash-vs-zcash-vs-bitcoinmixers.php

https://pivx.org/coin-specs/