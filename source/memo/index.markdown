---
layout: page
title: "Memo"
date: 2016-01-24 10:25
comments: true
sharing: true
footer: true
---

## 查詢容量

```bash du檢視檔案資料夾/df檢視整體磁區
// 目錄下各檔案資料夾的所佔空間
$ du -smh *

// 列出佔用空間前 5 名
$ du -s /var/* | sort -rn | head -5

// 依磁區
$ df -h
```

## 查詢系統資訊

```bash linux
// 記憶體用量
$ free -h
$ cat /proc/meminfo

// 硬體規格
$ sudo lshw
```

## 壓縮/解壓縮

```bash tar
$ tar -czvf FileName.tar.gz DirName
$ tar -xzvf FileName.tar.gz
  c 壓縮
  x 解壓縮
  z 使用gzip 
  v 過程中顯示檔案
  f 指定檔名
```

## mysql dump/load

```bash mysql
// dump
mysqldump -u root -p mydb > mydb20160202.sql

// load
mysql -u root -p mydb < mydb20160202.sql
```


## Ubuntu rails 環境建置

```bash ruby on rails
sudo apt-get update
sudo apt-get install nodejs
curl -L get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm requirements
rvm install 2.3.0
rvm rubygems current

# fix nokogiri error
sudo apt-get install build-essential patch
sudo apt-get install ruby-dev zlib1g-dev liblzma-dev
sudo apt-get install libgmp-dev

gem install rails
```


```bash ngnix passenger
gem install passenger
rvmsudo passenger-install-nginx-module

# fix nginx
wget -O init-deb.sh https://www.linode.com/docs/assets/660-init-deb.sh

sudo mv init-deb.sh /etc/init.d/nginx
sudo chmod +x /etc/init.d/nginx

sudo /usr/sbin/update-rc.d -f nginx defaults

sudo service nginx start

vim /opt/nginx/conf/nginx.conf
```

## user

```bash
$ passwd
```

## shutdown

```bash shutdown

$ sudo shutdown -h now
$ sudo reboot

```

## network

```
$ sudo vim /etc/network/interfaces
$ sudo /etc/init.d/networking restart

```

## Linux List The Open Ports And The Process That Owns Them

```
$ sudo lsof -i
$ sudo netstat -lptu
$ sudo netstat -tulpn
```

## Git
 
```
$ git remote -v
$ git remote add origin <url>
$ git remote rm origin
$ git branch --set-upstream-to=origin/master master
```

## Web 開發筆記

* 前端任何值皆不可信任，後端都要再判斷一次
* form當中有name的tag才能傳到後端

