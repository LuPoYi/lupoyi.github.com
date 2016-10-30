---
layout: post
title: "[Bitcoin] 客製比特幣位址並匯入錢包"
date: 2016-03-05 13:32:29 +0800
comments: true
categories: [bitcoin, address,  vanitygen, wallet]
---
## 使用vanitygen客製比特幣位址

### 安裝vanitygen
```bash
sudo apt-get install build-essential libssl-dev libpcre3-dev
git clone https://github.com/samr7/vanitygen.git
cd vanitygen
make
```

### Generate Your Own Bitcoin Address
* Base58 避免使用數字0和字母大寫O以及字母大寫I和字母小寫l
* 要使用該Address的話，記得備份好Privkey避免公開，擁有Privkey即等於擁有此Address發送權

```bash 
# 指定開頭
$ ./vanitygen 1Bob
  Difficulty: 77178
  Pattern: 1Bob
  Address: 1Bobnp85Ns6JUDaMntc672ZjfsWSzrUnZH
  Privkey: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# 忽略大小寫
$ ./vanitygen -i 1boba
  Difficulty: 1100434
  Pattern: 1boba
  Address: 1BoBAeQ6vEw2wCitEvRAXuSfRJfwuVGt1L
  Privkey: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# 指定結尾
$ ./vanitygen -r bob$
Pattern: bob$
Address: 14a6Pw84woyKjysT6Uc9gJF2M8prwYtbob
Privkey: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 將 Privkey 匯入Bitcoind錢包
大部分錢包軟體都會提供匯入Privkey的功能，但我這邊使用Bitcoind

```bash
# 先確認此Address狀態
$ bitcoin-cli validateaddress 1Bobnp85Ns6JUDaMntc672ZjfsWSzrUnZH
{
  "isvalid": true,
  "address": "1Bobnp85Ns6JUDaMntc672ZjfsWSzrUnZH",
  "scriptPubKey": "76a91476816ee640da13a0d821d79a01892d8598288bb488ac",
  "ismine": false,
  "iswatchonly": false,
  "isscript": false
}
# "ismine": false => 代表此address還不是自己的
```

```bash 
# bitcoin-cli importprivkey <Privkey> [label] [rescan=true]
# label 是指你要放入哪個account，預設都會有一個””空字串的account
# rescan 填true的話，會去掃以前到現在所有的transaction確定此address是否有被使用過(但會跑很久)
#        如果只是新address的話這邊填false就行了
$ bitcoin-cli importprivkey XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX “” false
```

```bash
$ bitcoin-cli validateaddress 1Bobnp85Ns6JUDaMntc672ZjfsWSzrUnZH
{
  "isvalid": true,
  "address": "1Bobnp85Ns6JUDaMntc672ZjfsWSzrUnZH",
  "scriptPubKey": "76a91476816ee640da13a0d821d79a01892d8598288bb488ac",
  "ismine": true,
  "iswatchonly": false,
  "isscript": false,
  "iscompressed": true,
  "account": ""
} 
# "ismine": true => 現在此Address就是屬於你的
```


Reference:

https://en.bitcoin.it/wiki/Vanitygen

http://8btc.com/article-1930-1.html

