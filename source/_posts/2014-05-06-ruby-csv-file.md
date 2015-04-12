---
layout: post
title: '[ruby] 匯出批次csv檔'
date: 2014-05-06 21:14
comments: true
categories: [ruby, rails, csv]
---
讀取或寫入csv在ruby都蠻方便的，只是編碼或格式要稍微注意一下

##  匯出csv
```ruby
header = ['name','money','age']
body = ['ruby','1000','18']
```

```ruby export_to_csv_string 匯出csv的string格式再利用send_data下載
  head = 'EF BB BF'.split(' ').map{|a|a.hex.chr}.join() # 加入BOM，解決excel中文亂碼

    
  csv_string = CSV.generate(csv = head) do |csv|
    csv << header
    csv << body
  end
  
  # > csv_string.encoding 執行這句會發現預設編碼為ACSII
  csv_string.force_encoding('big5')
  # BOM也可以這樣加 csv_string = "\xEF\xBB\xBF#{csv_string}"  
  # 若不需要調整格式就直接下載
  send_data csv_string
```
 
```ruby export_to_csv 直接匯出檔案
 require 'csv'
 CSV.open("export.csv","w") do |csv|
   csv << header
   csv << body
 end
```
## 半形轉全形
在某些情況會需要轉出全形字元，照理說不用才對，~~可能是因為合作對方的系統太爛~~
其實也不太確定怎解，我單純用硬幹的方式
```ruby convert_to_wide_word 大小寫英文數字轉全形字元
def self.convert_to_wide_word(text)
  text.gsub(/[a-v]/){|a|(a.ord + 41608).chr('big5').encode('utf-8')}
    .gsub(/[w-z]/){|a|(a.ord + 41673).chr('big5').encode('utf-8')}
    .gsub(/[A-Z]/){|a|(a.ord + 41614).chr('big5').encode('utf-8')}
    .gsub(/[0-9]/){|a|(a.ord + 41599).chr('big5').encode('utf-8')}
end

convert_to_wide_word("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
 => "０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬ
 ＭＮＯＰＱＲＳＴＵＶＷＸＹＺ" 
```
匯出匯入csv也可以試試FasterCSV這個gem

Reference:

http://www.sitepoint.com/guide-ruby-csv-library-part/

http://blog.inheart.tw/2013/09/rubyraisl-csv-excel.html

http://salayhin.wordpress.com/2014/05/10/export-csv-file-from-rails-console/