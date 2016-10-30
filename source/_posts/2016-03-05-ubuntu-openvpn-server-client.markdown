---
layout: post
title: "[Ubuntu] 架設 OpenVpn Server & Client"
date: 2016-03-05 11:42:49 +0800
comments: true
categories: [ubuntu, Openvpn, vpn]
---
## OpenVpn

```bash
apt-get update
apt-get install openvpn easy-rsa
```

```bash
gunzip -c /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz > /etc/openvpn/server.conf
vim /etc/openvpn/server.conf
```

```bash /etc/openvpn/server.conf
# dh dh1024.pem
dh2048.pem

ca ca.crt
cert server.crt
key server.key

# 拿掉註解
push "redirect-gateway def1 bypass-dhcp"
user nobody
group nogroup
# 補上8.8.8.8
push "dhcp-option DNS 8.8.8.8"
;push "dhcp-option DNS 208.67.222.222"
;push "dhcp-option DNS 208.67.220.220"

#其他基本上維持預設即可
```

### Packet Forwarding

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
vim /etc/sysctl.conf
```

```bash /etc/sysctl.conf
# 拿掉註解
net.ipv4.ip_forward=1
```

### Uncomplicated Firewall

```bash
ufw allow ssh
ufw allow 1194/udp
ufw allow 80 # 開外連進來所需要的port
vim /etc/default/ufw
```

```bash /etc/default/ufw
# 將DROP改成ACCEPT
DEFAULT_FORWARD_POLICY="ACCEPT"
```

```bash
vim /etc/ufw/before.rules
```

```bash /etc/ufw/before.rules 加入OPENVPN RULES(11~18行)
#
# rules.before
#
# Rules that should be run before the ufw command line added rules. Custom
# rules should be added to one of these chains:
#   ufw-before-input
#   ufw-before-output
#   ufw-before-forward
#

# START OPENVPN RULES
# NAT table rules
*nat
:POSTROUTING ACCEPT [0:0]
# Allow traffic from OpenVPN client to ppp0
-A POSTROUTING -s 10.8.0.0/8 -o ppp0 -j MASQUERADE
COMMIT
# END OPENVPN RULES

```

```bash
ufw enable
ufw status
```

### Generate Certificate Authority

```bash
cp -r /usr/share/easy-rsa/ /etc/openvpn
mkdir /etc/openvpn/easy-rsa/keys
vim /etc/openvpn/easy-rsa/vars
```

```bash /etc/openvpn/easy-rsa/vars
export KEY_COUNTRY=“TW”
export KEY_PROVINCE=“Taiwan”
export KEY_CITY=“Taipei”
export KEY_ORG="My Company Name"
export KEY_EMAIL="sammy@example.com"
export KEY_OU="MYOrganizationalUnit"

export KEY_NAME=“server”
```

```bash
openssl dhparam -out /etc/openvpn/dh2048.pem 2048
cd /etc/openvpn/easy-rsa
. ./vars
./clean-all
./build-ca
```

### Generate Server-side Key

```bash
./build-key-server server
cp /etc/openvpn/easy-rsa/keys/{server.crt,server.key,ca.crt} /etc/openvpn
```

啟動Server

```bash
service openvpn start
service openvpn status
# service openvpn stop
```

### Generate Client-side Key

```bash
./build-key bob01
mkdir /etc/openvpn/bob01
cp /etc/openvpn/easy-rsa/keys/bob01.crt,bob01.key /etc/openvpn/bob01/
cp /etc/openvpn/easy-rsa/ca.crt /etc/openvpn/bob01/
cp /usr/share/doc/openvpn/examples/sample-config-files/client.conf  /etc/openvpn/bob01/bob01.ovpn
vim /etc/openvpn/bob01/bob01.ovpn
```

```bash /etc/openvpn/bob01/bob01.ovpn
remote MY_SERVER_IP 1194
ca ca.crt
cert bob01.crt
key bob01.key
```

最後在client端把/etc/openvpn/bob01/抓下來，用bob01.ovpn啟動即可
