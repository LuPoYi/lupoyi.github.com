---
layout: post
title: '[Mac] Ruby on Rails 基本環境建置 - 10.12 Sierra'
date: 2016-10-30 15:39:21 +0800
comments: true
categories: [mac, ruby, rails, Sierra]
---

```bash Installing Homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```bash Installing Ruby
# 改用相對輕量的rbenv取代肥肥的rvm
brew install rbenv ruby-build

echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

rbenv install 2.3.1
rbenv global 2.3.1
```

```bash Installing Rails
gem install rails -v 4.2.6
rbenv rehash
```

```bash others
brew install mysql
```