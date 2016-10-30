---
layout: post
title: "[Ethereum] 如何使用Windows來挖礦"
date: 2016-04-05 15:48:43 +0800
comments: true
categories: [Ethereum, mining, windows, nanopool, dwarfpool]
---

## 1. 安裝geth
[下載geth](https://github.com/ethereum/go-ethereum/releases)

解壓縮後不用執行放在C:\ (我放在E:\不過沒差)

建立錢包並設定密碼

以下指令都需要開command line(cmd)

```bash C:\
geth account new
```

同步所有交易
```bash C:\
# --cache=看你想分配多少RAM來sync。預設只有16MB
geth --rpc --cache=8192
```
// 第一次似乎可以用geth --rpc --fast來快速sync完整node(沒試過)


## 2. 安裝mining軟體

[下載mining軟體](https://build.ethdev.com/builds/Windows%20C%2B%2B%20develop%20branch/)(載最下面的即可)
照一般安裝流程

安裝好後可以測設備的算力，正常來說是GPU比較快(AMD > nVidia)
```bash C:\Program Files\Ethereum (版號)\Release
ethminer -G -M # GPU
ethminer -M    # CPU
```

## 3. 挖礦

挖礦前blockchain要先sync過，也就是"geth --rpc"

看是要自己挖還是加入別人礦池

### 自己挖

```bash C:\Program Files\Ethereum (版號)\Release
ethminer -G # GPU
```

### 加入礦池

需按照[各大礦池](http://cryptomining-blog.com/7529-ethereum-mining-is-getting-way-too-centralized/)的教學操作，基本上都不需要註冊，直接使用礦池提供的url+你的錢包地址來挖就行了

我這邊使用nanopool(另外還有dwarfpool/ethpool...)

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

http://eth.nanopool.org/api/balance/0xb2944f316e14887bce4b5fae1c66ac78ba7c9123 
http://eth.nanopool.org/account/0xb2944f316e14887bce4b5fae1c66ac78ba7c9123/bob
https://www.etherchain.org/account/0xb2944f316e14887bce4b5fae1c66ac78ba7c9123

nanopool一天會結算四次，最少要有0.1 Eth才會發transaction到你的wallet

可以在本機下geth指令查你的錢包資訊

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

```bash geth指令整理
geth upgradedb
geth removedb # 整個blockchain會被清掉
geth --rpc --cache=8192 # sync
```

## 其他－把指令包成.bat批次檔

### ethereum_mining.bat

因為需要分別開mining, sync以及console三個cmd並執行不同指令，所以我把指令包成.bat放桌面一鍵執行，或是拿來排程執行也ok

```bat ethereum_mining.bat
echo on
E:
cd "Program Files\Ethereum 0.9.41\Release"
ethminer -F asia1.nanopool.org:8888/0xb2944f316e14887bce4b5fae1c66ac78ba7c9123/bob/maydaybob2000@gmail.com -G
```

使用GPU來挖，所以會吃顯卡效能

<a href="/images/poyi/ethereum_mining.jpg" target="_blank"><img src="/images/poyi/ethereum_mining.jpg" title="image" alt="images"></a>

### ethereum_sync.bat

```bat ethereum_sync.bat
echo on
E:
geth --rpc --cache=8192
```
sync會吃網路流量，圖中最下面的 #1401468 就是指我這台目前sync到這個block

<a href="/images/poyi/ethereum_sync.jpg" target="_blank"><img src="/images/poyi/ethereum_sync.jpg" title="image" alt="images"></a>

### ethereum_console.bat

```bat ethereum_console.bat
echo on
E:
geth attach
```

使用console前記得打開sync

<a href="/images/poyi/ethereum_console.jpg" target="_blank"><img src="/images/poyi/ethereum_console.jpg" title="image" alt="images"></a>



## 其他－將ETH所佔的C槽容量移到E槽

挖礦及同步的資料預設都放在C底下

(C:\Users\Bob\AppData\Local\Ethask)

(C:\Users\Bob\AppData\Roaming\Ethereum)

* 把C:\Users\Bob\AppData\Local\Ethask這個資料夾直接搬移到E:\ETH\Ethash
* 開cmd下指令 "mklink /D C:\Users\Bob\AppData\Local\Ethask E:\ETH\Ethash
* 這樣就行了，另一個folder也比照辦理

```bash cmd
C:\Users\Bob> mklink /D C:\Users\Bob\AppData\Local\Ethash E:\ETH\Ethash
已建立 C:\Users\Bob\AppData\Local\Ethash 的符號連結 <<===>> E:\ETH\Ethash
```


Reference:

https://www.cryptocompare.com/mining/guides/how-to-mine-ethereum/

http://nanopool.org

https://github.com/ethereum/go-ethereum/wiki/Backup-&-restore

https://diaryofdennis.com/2016/06/11/how-to-move-and-change-your-ethereum-mining-ethash-dag-folder/


