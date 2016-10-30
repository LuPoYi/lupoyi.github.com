---
layout: post
title: "[Ruby] AES 加密解密"
date: 2015-11-07 14:48:06 +0800
comments: true
categories: [ruby, aes, encrypt, decrypt]
---

###對稱金鑰加密：加解密使用的金鑰是同一把

- DES (Data Encryption Standard)
- AES (Advanced Encryption Standard) 


###非對稱金鑰加密系統(公開金鑰加密)，加解密不同把key(公鑰私鑰)

- RSA



```ruby 加密解密
$key = "自定key" # 可利用rails的sercret key(Rails.application.secrets.secret_key_base)
$iv  = "自定iv" 

# AES 加密
def aes_encrypt(data)
  cipher = OpenSSL::Cipher::AES128.new(:CBC)
  cipher.encrypt
  cipher.key = $key
  cipher.iv = $iv
  encrypted = cipher.update(data) + cipher.final
  encrypted_base64 = Base64.encode64(encrypted)
  return encrypted_base64
end

# 解密  
def aes_decrypt(encrypted_base64)
  encrypted = Base64.decode64(encrypted_base64)
  decipher = OpenSSL::Cipher::AES128.new(:CBC)
  decipher.decrypt
  decipher.key = $key
  decipher.iv  = $iv
  data = decipher.update(encrypted) + decipher.final
  return data
end
  
```

Reference: 

http://wemee.blogspot.tw/2015/01/ruby-product-key-ruby.html

http://webos-goodies.jp/archives/encryption_in_ruby.html

http://blog.ifyouseewendy.com/blog/2014/11/20/encryption-in-ruby/


