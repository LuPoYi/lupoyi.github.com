---
layout: post
title: "[Zcash] 如何使用Windows來挖礦"
date: 2017-01-15 13:32:55 +0800
comments: true
categories: [Zcash, mining, windows, zec]
---

## Zcash錢包

首先要下載一個錢包並取得address(t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE)來存放你挖到的幣

推薦[Jaxx](https://jaxx.io/)，支援windows/macos/ios/android...，幣別也支援btc/eth/etc/zec....。

## miner

使用[Nicehash miner](https://github.com/etherchain-org/nheqminer/releases/latest)

載好解壓縮後會發現有一個"xheqminer.exe"

一樣是開cmd後面接一些參數就能挖了

## 礦池

http://zcash.flypool.org/

通常礦池首頁都會寫很清楚該怎麼做

"Windows - NVIDIA"

"NiceHash Miner"

"asia1-zcash.flypool.org"

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