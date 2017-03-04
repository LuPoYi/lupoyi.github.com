---
layout: post
title: "[Ubuntu] Ruby on Rails 基本環境建置 - Ubuntu 16.04 LTS"
date: 2016-11-26 16:56:10 +0800
comments: true
categories: [ubuntu, ruby, rails]
---


```bash 建立user
sudo adduser bob
sudo adduser bob sudo
su bob
```

```bash 安裝常用lib
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install vim nodejs
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
```

## Install Ruby & Rails

```bash 使用rbenv來管理ruby
cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.3.1
rbenv global 2.3.1
ruby -v

# rvm 
# sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
# gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
# curl -sSL https://get.rvm.io | bash -s stable
# source ~/.rvm/scripts/rvm
# rvm install 2.3.1
# rvm use 2.3.1 --default

# skip doc
echo "gem: --no-ri --no-rdoc" > ~/.gemrc

gem install bundler
```

## Install Passenger & Nginx

```bash install nginx
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add Passenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger & Nginx
sudo apt-get install -y nginx-extras passenger

sudo service nginx start
```

```bash /etc/nginx/nginx.conf
##
# Phusion Passenger
##
# Uncomment it if you installed ruby-passenger or ruby-passenger-enterprise
##

include /etc/nginx/passenger.conf;
```

```bash /etc/nginx/passenger.conf
# 加上
passenger_root /usr/lib/ruby/vendor_ruby/phusion_passenger/locations.ini;
passenger_ruby /home/bob/.rbenv/shims/ruby;
```

```bash /etc/nginx/sites-enabled/default
server {
        listen 80 default_server;
        listen [::]:80 default_server ipv6only=on;

        server_name poyi.com;
        passenger_enabled on;
        rails_env    production;
        root         /home/bob/poyi/public;

        # redirect server error pages to the static page /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # 註解掉
        # root /var/www/html;
}
```

## Install Mysql

```bash 安裝mysql
sudo apt-get install mysql-server mysql-client libmysqlclient-dev
```

## Install Redis

```bash 安裝redis
sudo apt-get update
sudo apt-get install build-essential tcl

cd /tmp
curl -O http://download.redis.io/redis-stable.tar.gz
tar xzvf redis-stable.tar.gz
cd redis-stable
make
make test
sudo make install

sudo mkdir /etc/redis
sudo cp /tmp/redis-stable/redis.conf /etc/redis
```

```bash 修改/etc/redis/redis.conf
# 兩個地方要改
supervised systemd
dir /var/lib/redis
```

```bash 新增/etc/systemd/system/redis.service
[Unit]
Description=Redis In-Memory Data Store
After=network.target

[Service]
User=redis
Group=redis
ExecStart=/usr/local/bin/redis-server /etc/redis/redis.conf
ExecStop=/usr/local/bin/redis-cli shutdown
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash 新增redis user並給權限
sudo adduser --system --group --no-create-home redis
sudo mkdir /var/lib/redis
sudo chown redis:redis /var/lib/redis
sudo chmod 770 /var/lib/redis
```

```bash
sudo systemctl enable redis # 設定開機啟動
sudo systemctl start redis
sudo systemctl stop redis
sudo systemctl status redis
```

## Install SSDB

```bash 安裝ssdb
wget --no-check-certificate https://github.com/ideawu/ssdb/archive/master.zip
unzip master
cd ssdb-master
make
sudo make install
```

```bash 新增 /usr/lib/systemd/system/ssdb.service
[Unit]
Description=SSDB
After=network.target

[Service]
LimitCORE=infinity
LimitNOFILE=100000
LimitNPROC=100000
PIDFile=/usr/local/ssdb/var/ssdb.pid
WorkingDirectory=/usr/local/ssdb
ExecStart=/usr/local/ssdb/ssdb-server /usr/local/ssdb/ssdb.conf -s restart -d
ExecStop=/usr/local/ssdb/ssdb-server /usr/local/ssdb/ssdb.conf -s stop -d
Type=forking
KillMode=none
Restart=on-failure
RestartSec=10s
User=root

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable ssdb # 設定開機啟動
sudo systemctl start ssdb
sudo systemctl stop ssdb
sudo systemctl status ssdb
```

### 這邊先跳過 capistrano deploy

Reference: 

https://gorails.com/deploy/ubuntu/16.04
