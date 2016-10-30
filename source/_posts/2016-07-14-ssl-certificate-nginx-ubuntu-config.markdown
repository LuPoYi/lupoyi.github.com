---
layout: post
title: "[Ubuntu] 自行簽署的SSL憑證及Nginx設定"
date: 2016-07-14 20:00:55 +0800
comments: true
categories: [ssl, https, nginx, ubuntu]
---

自簽SSL單純只是讓資料傳送時加密，避免使用明文傳輸資料而被直接監聽到封包

要上Production的話還是必須找SSL服務來簽

```bash openssl
# 我習慣在nginx把ssl裝在opt/nginx底下
mkdir /opt/nginx/ssl
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /opt/nginx/ssl/nginx.key -out /opt/nginx/ssl/nginx.crt
# 填寫基本資料
# Common Name 填 Domain Name 或 IP
# 建立金鑰nginx.key及憑證nginx.crt
```

```bash nginx.conf
server {
  listen 80 default_server;

  # 將所有HTTP requests轉至HTTPS
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl default_server;

  ssl_certificate /opt/nginx/ssl/nginx.crt;
  ssl_certificate_key /opt/nginx/ssl/nginx.key;
  
  # 其他ssl參數設定
  ...

  server_name default_server;
  root /home/path/rails/public;   # <--- rails路徑
  rails_env production;
  passenger_enabled on;
}

```

```bash 產dhparam -out
sudo openssl dhparam -out /opt/nginx/ssl/dhparam.pem 2048

```

SSL設定最佳解可以參考 https://mozilla.github.io/server-side-tls/ssl-config-generator/


Reference:

https://blog.gtwang.org/linux/nginx-create-and-install-ssl-certificate-on-ubuntu-linux/

https://ksmx.me/letsencrypt-ssl-https/

https://mozilla.github.io/server-side-tls/ssl-config-generator/