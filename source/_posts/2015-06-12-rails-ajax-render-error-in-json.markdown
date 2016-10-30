---
layout: post
title: '[Rails] AJAX render errors in json'
date: 2015-06-12 19:02:48 +0800
comments: true
categories: [rails]
---
```javascript new.html.erb
$.ajax({
  url: URL,
  async:false,
  data:{
    amount: 100,
  },
  dataType:'json',
  method:'post',
  success:function(data){
    // do success things
  },
  error:function(xhr){
    var errors = $.parseJSON(xhr.responseText).errors
    alert(errors);
  }
);
```

```ruby orders_controller.rb 
def create
  if amount < 100
    render :json => { :errors => "金額不足" }, :status => 422
    return 
  end
end
```

當錯誤回傳時，使用422(Unprocessable Entity)來做error handling



Reference: 

http://travisjeffery.com/b/2012/04/rendering-errors-in-json-with-rails/
http://stackoverflow.com/questions/16133923/400-vs-422-response-to-post-of-data
