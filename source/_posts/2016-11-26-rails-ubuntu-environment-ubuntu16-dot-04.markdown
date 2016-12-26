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

# skip doc
echo "gem: --no-ri --no-rdoc" > ~/.gemrc

gem install bundler
```

```bash 安裝mysql
sudo apt-get install mysql-server mysql-client libmysqlclient-dev
```



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

# 加上
passenger_root /usr/lib/ruby/vendor_ruby/phusion_passenger/locations.ini;
passenger_ruby /home/bob/.rbenv/shims/ruby;
```

### 這邊先跳過 capistrano deploy

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

Reference: 

https://gorails.com/deploy/ubuntu/16.04