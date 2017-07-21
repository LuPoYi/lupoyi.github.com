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

## Miner 挖礦軟體 (挑一款即可)

### EWBF Miner

[EWBF's CUDA Zcash miner](https://bitcointalk.org/index.php?topic=1707546.0)

* EWBF Miner - 效率好30% - 使用時會吃掉大部分顯卡效能無法正常使用

### Nicehash - nheqminer-0.5c

[nheqminer-0.5c](https://github.com/nicehash/nheqminer/releases)

* Nicehash - 不開大型遊戲的話，電腦還可以正常使用

## 礦池

如果是組礦機多張顯卡，算力夠強的話可以考慮自己挖，只是台桌機的話就加入礦池吧

礦池是你提供多少算力，就會回饋給你，收益比較穩定

自己solo的話就是有挖到block才有收益

http://zcash.flypool.org/

通常礦池首頁都會寫很清楚該怎麼做

```bash EWBF Miner
miner.exe --server <server> --user <address>.<worker> --port <port> --cuda_devices 0 1 2 3
miner.exe --server asia1-zcash.flypool.org --user t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE.bob3 --port 3333 --cuda_devices 0 1 2 3
```

```bash Nicehash Miner
nheqminer.exe -cd 0 -l <礦池server> -u <你自己的錢包地址>.<自命名worker> 
nheqminer.exe -cd 0 -l asia1-zcash.flypool.org:3333 -u t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE.bob2
```

監控挖礦情況 (Nvidia GTX960)

http://zcash.flypool.org/miners/t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE

## 打包至桌面一鍵開挖

```bash EWBF_Miner.bat
@echo on
E:
cd "Zec Miner 0.3.4b\0.3.4b"
miner.exe --server asia1-zcash.flypool.org --user t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE.bob3 --port 3333 --cuda_devices 0 1 2 3
```

```bash Nicehash_Miner.bat
@echo on
E:
cd "Windows_x64_nheqminer-5c"
nheqminer.exe -cd 0 -l asia1-zcash.flypool.org:3333 -u t1bjg8ZSVhW2LzRP3BiHZKbMGipLJuxibYE.bob2
```
Reference:

https://www.cryptocompare.com/mining/guides/how-to-mine-zcash-with-gpu-and-cpu/

http://zcash.flypool.org/