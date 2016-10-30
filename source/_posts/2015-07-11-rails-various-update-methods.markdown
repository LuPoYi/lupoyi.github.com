---
layout: post
title: "[Rails] 各種update method"
date: 2015-07-11 17:16:55 +0800
comments: true
categories: [rails, update, update_columns, update_all]
---

##正規Rails的更新 - update

會觸發validation、callback、也會更新updated_at

```Ruby update 寫法 (for 單筆)
> Comment.last.update(message: 'bbb')
   (0.1ms)  begin transaction
  SQL (0.4ms)  UPDATE "comments" SET "message" = ?, "updated_at" = ? WHERE "comments"."id" = ?  [["message", "bbb"], ["updated_at", "2015-07-11 09:42:02.303661"], ["id", 200]]
   (9.1ms)  commit transaction
 => true
```


##相當於直接下SQL的更新 - update_columns, update_all

而 update_columns 及 update_all 是直接幫你下SQL更新欄位，會忽視Rails的validation，也沒有callback，updated_at也不會更新。所以最好是很確定要更新的值沒問題再使用這類語法。


```Ruby update_columns 寫法 (for 單筆)
> Comment.where(:id => 200).first.update_columns(message: 'bbbbb', post_id: 3)
  SQL (9.2ms)  UPDATE "comments" SET "message" = 'bbbbb', "post_id" = 3 WHERE "comments"."id" = ?  [["id", 200]]

# update_column 跟 update_columns 相同，只是傳入值key跟value必須是string，並用逗點分隔
> Comment.where(:id => 200).first.update_column('message' ,'bbbbb')
```


```Ruby update_all 寫法 (for relation)
> Comment.where(:id => 200).update_all(message: 'aaaaaaaaaa', post_id: 10)
  SQL (9.2ms)  UPDATE "comments" SET "message" = 'aaaaaaaaaa', "post_id" = 10 WHERE "comments"."id" = ?  [["id", 200]]
 => 1
```


## 其他 - update_attribute
忽視validation，有callback，會更新updated_at

```Ruby update_attribute 寫法 (for 單筆)
> Comment.last.update_attribute('message' ,'bbbbb')
   (0.1ms)  begin transaction
  SQL (0.4ms)  UPDATE "comments" SET "message" = ?, "updated_at" = ? WHERE "comments"."id" = ?  [["message", "bbbbb"], ["updated_at", "2015-07-11 09:45:55.190026"], ["id", 200]]
   (8.5ms)  commit transaction
 => true
```
