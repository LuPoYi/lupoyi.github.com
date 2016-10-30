---
layout: post
title: '[Ruby] 匯出txt檔'
date: 2014-05-06 22:00:59 +0800
comments: true
categories: [ruby, rails, file]
---

#### 需要在正式環境上撈大量特定資料下來，又不想dump整份database，用ORM來把資料匯出成txt就很方便了

```ruby 寫入txt
all_users_mobile = User.where('mobile like ?', '+8869%').select(:mobile).uniq

# 建立txt並給予寫入權限
file = File.open('mobile_tw.txt' , 'w')

all_users_mobile.each do |mobile|
  file.puts mobile # 一行一筆mobile
end

# 記得要關掉
file.close
```

```ruby 讀取txt
# 讀取txt
file = File.open('mobile_tw.txt' , 'r')

100.times do
  file.readline
end

```


Reference:

http://ruby-doc.org/core-2.1.4/File.html