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

// 顯示目錄下檔案
ls -lh
```

## 查詢系統資訊

```bash linux
// 記憶體用量
$ free -h

// 硬體規格
$ cat /proc/cpuinfo
$ cat /proc/cpuinfo | grep processor | wc -l

$ cat /proc/meminfo
$ sudo lshw
$ ls /sys/class/net

// 登入的user
$ w

$ whoami
$ date
$ cal 
$ uptime

// os版本資訊
$ uname -a
$ lsb_release -a

$ more /proc/partitions
$ ls /dev/[sh]d*
$ df -h
$ sudo fdisk -l
```

## 網路設定
```bash /etc/network/interfaces
  # 有線
  auto eth0
  iface eth0 inet dhcp
  # iface wlan0 inet static
  # address 192.168.1.150
  # netmask 255.255.255.0
  # gateway 192.168.1.1

  # wifi
  auto wlan0
  iface wlan0 inet dhcp
  wpa-ssid <SSID>
  wpa-psk <PASSWORD>
```

```
$ route add default gw 192.168.1.1 # gateway
$ sudo ifconfig eth0 down && sudo ifconfig eth0 up
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


## Ubuntu rails 基本環境建置

```bash ruby on rails
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get install nodejs
curl -L get.rvm.io | bash -s stable
source /etc/profile.d/rvm.sh
rvm requirements
rvm install 2.3.0
rvm rubygems current

# fix nokogiri error
sudo apt-get install build-essential patch
sudo apt-get install ruby-dev zlib1g-dev liblzma-dev
sudo apt-get install libgmp-dev

echo 'gem: --no-document' >> ~/.gemrc
gem install rails
```


```bash ngnix passenger
sudo apt-get install libpcre3-dev # fix ngnix ssl
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

```bash network
$ sudo vim /etc/network/interfaces
$ sudo /etc/init.d/networking restart

```

## Linux List The Open Ports And The Process That Owns Them

```bash check ports
$ sudo lsof -i
$ sudo netstat -lptu
$ sudo netstat -tulpn
```

## Git
 
```bash git
$ git config --list
$ git remote -v
$ git remote add origin <url>
$ git remote rm origin
$ git branch --set-upstream-to=origin/master master
$ git commit --amend # 修改上一次commit
$ git commit --amend -m "update file" # 把commit併到上一次commit
# 空目錄無法上git，可放一個.keep檔
```

## Web 開發筆記

* 前端任何值皆不可信任，後端都要再判斷一次
* form當中有name的tag才能傳到後端
* Filter Input
* Escape Output
* One Time Token
