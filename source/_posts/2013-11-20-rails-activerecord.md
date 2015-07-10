---
layout: post
title: '[Rails] ActiveRecord'
date: 2013-11-20 07:39
comments: true
categories: [rails]
---
``` ruby Model之間要關聯時，雙方都要設定 (單複數要注意)
class Boss < ActiveRecord::Base
  has_one :employee 
  has_many :employees
end

class Employee < ActiveRecord::Base
	belongs_to :boss
end

```

``` ruby 常用參數
class Employee < ActiveRecord::Base
    belongs_to :manager, :class_name => "User", :foreign_key => "manager_id" ,:order => "id desc"
end

# class_name => "User" 變更關聯class name
# :foreign_key => "manager_id"變更關聯foreign key,預設為class_id
# :order => "id desc" 排序
```


``` ruby 資料驗證
class Group < ActiveRecord::Base
	validates :name, presence: true # 此欄位必填
  
  validates :name, :length => { :minimum => 2 }
  validates :bio, :length => { :maximum => 500 }
  validates :password, :length => { :in => 6..20 }
  validates :registration_number, :length => { :is => 6 }
  
=begin
  others helpler:
    acceptance
    validates_associated
    confirmation
    exclusion
    format
    inclusion
    length
    numericality
    presence
    uniqueness
    validates_with
    validates_each
=end
end

```


Reference:
http://guides.rubyonrails.org/v3.2.13/active_record_validations_callbacks.html#validation-helpers