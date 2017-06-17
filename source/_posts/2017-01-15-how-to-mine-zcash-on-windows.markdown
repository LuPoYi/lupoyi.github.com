---
layout: post
title: "[ZCash] 如何使用Windows來挖礦"
date: 2017-01-15 13:32:55 +0800
comments: true
categories: [Zcash, mining, windows, zec]
---

## ZCash錢包

首先要下載一個錢包並取得address(t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE)來存放你挖到的幣

推薦[Jaxx](https://jaxx.io/)，支援windows/macos/ios/android...，幣別也支援btc/eth/etc/zec....。

Nvidia挖ZCash會比較快，如果是AMD可考慮挖Ethereum之類的

## Miner 挖礦軟體

~~使用[Nicehash miner](https://github.com/etherchain-org/nheqminer/releases/latest)~~

~~載好解壓縮後會發現有一個"xheqminer.exe"~~

[nheqminer-0.5c](https://github.com/nicehash/nheqminer/releases)挖的效率好很多

一樣是開cmd後面接一些參數就能挖了

## 礦池

如果是組礦機多張顯卡，算力夠強的話可以考慮自己挖，只是台桌機的話就加入礦池吧

礦池是你提供多少算力，就會回饋給你，收益比較穩定

自己solo的話就是有挖到block才有收益

http://zcash.flypool.org/

通常礦池首頁都會寫很清楚該怎麼做

```
nheqminer.exe -cd 0 -l <礦池server> -u <你自己的錢包地址>.<自命名worker> 
```

```bash 
nheqminer.exe -cd 0 -l asia1-zcash.flypool.org:3333 -u t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE.bob1
```

監控挖礦情況
http://zcash.flypool.org/miners/t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE



Reference:

https://www.cryptocompare.com/mining/guides/how-to-mine-zcash-with-gpu-and-cpu/

http://zcash.flypool.org/