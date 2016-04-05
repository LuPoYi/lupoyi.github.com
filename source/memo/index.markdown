---
layout: page
title: "Memo"
date: 2016-01-24 10:25
comments: true
sharing: true
footer: true
---

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

## Web 開發筆記

* 前端任何值皆不可信任，後端都要再判斷一次
* form當中有name的tag才能傳到後端

