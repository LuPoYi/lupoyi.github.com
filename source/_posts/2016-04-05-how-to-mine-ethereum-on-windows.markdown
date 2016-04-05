---
layout: post
title: "[Ethereum] 如何使用Windows來挖礦"
date: 2016-04-05 15:48:43 +0800
comments: true
categories: [Ethereum, mining, windows, nanopool, dwarfpool]
---

## 1. 安裝geth
[下載geth](https://github.com/ethereum/go-ethereum/releases)

解壓縮後不用執行放在C:\

建立錢包並設定密碼

```bash C:\
geth account new
```

同步所有交易
```bash C:\
geth --rpc
```
// 第一次似乎可以用geth --rpc --fast來快速sync完整node(沒試過)


## 2. 安裝mining軟體(最下面的即可)

[下載mining軟體](https://build.ethdev.com/builds/Windows%20C%2B%2B%20develop%20branch/)
照一般安裝流程

安裝好後可以測設備的算力，正常來說是GPU比較快(AMD > nVidia)
```bash C:\Program Files\Ethereum (版號)\Release
ethminer -G -M # GPU
ethminer -M    # CPU
```

## 3. 挖礦

挖礦前blockchain要先sync過，也就是"geth --rpc"

看需要自己挖還是加入別人礦池

### 自己挖

```bash C:\Program Files\Ethereum (版號)\Release
ethminer -G # GPU
```

### 加入礦池

需按照[各大礦池](http://cryptomining-blog.com/7529-ethereum-mining-is-getting-way-too-centralized/)的教學操作，這邊使用nanopool(另外還有dwarfpool/ethpool...)

```bash C:\Program Files\Ethereum (版號)\Release
// ethminer.exe http://asia1.nanopool.org:8888/YOUR_WALLET_ADDRESS -G
ethminer.exe http://asia1.nanopool.org:8888/0xb2944f316e14887bce4b5fae1c66ac78ba7c9123 -G
```

也可以加上worker跟mail(會通知你的worker是否關閉)
```bash C:\Program Files\Ethereum (版號)\Release
ethminer.exe http://asia1.nanopool.org:8888/YOUR_WALLET_ADDRESS/YOUR_WORKER_NAME/YOUR_EMAIL -G
```

## 4. 看成果(礦池)

可依照nanopool提供的api查看目前情況

http://asia1.nanopool.org/api/balance/0xb2944f316e14887bce4b5fae1c66ac78ba7c9123 
http://asia1.nanopool.org/account/0xb2944f316e14887bce4b5fae1c66ac78ba7c9123/bob

nanopool一天會結算四次，最少要有0.1 Eth才會發transaction到你的wallet

```bash C:\
geth attach
> eth.coinbase
"0xb2944f316e14887bce4b5fae1c66ac78ba7c9123"
> eth.acccounts
["0xb2944f316e14887bce4b5fae1c66ac78ba7c9123"]
> eth.getBalance(eth.coinbase)
0
```

記得要sync到最新才能拿到正確資訊

可以到[Etherchain](https://www.etherchain.org/)看一下Recent blocks是不是已經sync到最新的block



Reference:
https://www.cryptocompare.com/mining/guides/how-to-mine-ethereum/

