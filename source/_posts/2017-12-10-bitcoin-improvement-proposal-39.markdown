---
layout: post
title: "[Crypto] BIP-39 mnemonic words"
date: 2017-12-10 18:26:47 +0800
comments: true
categories: [bip39, bip44, bip32, mnemonic, deterministic, wallet]
---

// 個人筆記尚未整理

錢包本身並不存放幣，存放的是私鑰

而透過私鑰能轉換成錢包地址，並到區塊鏈上將交易紀錄及餘額取回

## 隨機(non-deterministic)錢包

* 每個被隨機建立出來的私鑰沒有相關性
* 需要各別管理及備份

## deterministic wallet

* 透過一組主私鑰來建立許多子私鑰
* 只需要備份主私鑰

* Hierarchical Deterministic(HD) Wallet
* 大部分的HD錢包(Jaxx、ledgerwallet...)都實作了BIP-32、BIP-39、BIP-44

## BIP-39 / BIP-32 / BIP-44

* BIP-32 - 規範出如何建立一個HD錢包，由用一份seed產生多組私鑰
* BIP-39 - 制定由哪些字組來產生成512 bit seed
* BIP-44 - 基於BIP-32上的擴充，提供了5層path，其中包括了多幣種

目前已經成為大部分加密貨幣的標準規範

12~24字組 => 512 bit seed(BIP-39 seed) => 主私鑰 => 子私鑰(公鑰、地址)

[bip-0039-wordlists](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md "bip-0039-wordlists") - 共2048字

若錢包產出為12/24字組，那所有排列的組合共用2048的12/24次方

###　BIP-44五層path

* m/purpose'/coin_type'/account'/change/address_index
* m/44'/60'/0'/0/0 : ethererum
* m/44'/0'/0'/0/0  : bitcoin



Reference: 

https://github.com/bitcoin/bips

https://medium.com/@bun919tw/hd-wallet-970096a6d72f

http://blog.xuite.net/metafun/life/545924715-HD+Wallet+%E5%88%86%E5%B1%A4%E7%A2%BA%E5%AE%9A%E6%80%A7%28Hierarchical+Deterministic%29%E9%8C%A2%E5%8C%85