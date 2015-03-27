---
layout: post
title: '[Rails] Bootstrap for Rails'
date: 2013-12-07 06:46
comments: true
categories: [rails]
---

``` bash add to gemfile.rb and remember to bundle install
gem 'bootstrap-sass'
```

``` bash 新增一個app/assets/stylesheets/styles.css.scss並將bootstrap import
@import 'bootstrap'
```

``` bash app/assets/javascripts/application.js 加入bootstrap
//= require bootstrap
```
這樣就可以用了yaya