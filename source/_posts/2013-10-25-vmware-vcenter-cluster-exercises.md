---
layout: post
title: '[VMware] VCenter Cluster 練習筆記'
date: 2013-10-25 08:11
comments: true
categories: [VCenter, vmware, Cluster]
---


![SHL-TEST.COM.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/154247/91YcA52rS8Owm0IT1612_SHL-TEST.COM.jpg)


vSphere ESXi: 整個虛擬化平台，算是一個作業系統
vSphere Client: 操作VM用的軟體(遠端連線到ESXi)
vCenter: 可統一管理，支援ADD 容錯


--VLAN 45(橘底)
- 準備兩台電腦，灌上vSphere ESXi，設定名稱、IP、VLAN
- 分別灌上不同OS，其中一台用來架AD網域，並將每個OS加入網域
- 找一台安裝vCenter，安裝後直接連入這台就可直接操作其他OS




Cluster


註記：
HT Hyper-threading 可將核心分成兩個序列在處理 cpu數*核心數*(2)(HT)=邏輯核心
硬碟分區格式 GPT VS MBR：MBR上限為2T(超過2T以上的空間無法分配出來)


![2013-10-27 下午 06-32-23.jpg](http://user-image.logdown.io/user/2740/blog/2734/post/154247/MiZIdkkTlW47nQrleONw_2013-10-27%20%E4%B8%8B%E5%8D%88%2006-32-23.jpg)
