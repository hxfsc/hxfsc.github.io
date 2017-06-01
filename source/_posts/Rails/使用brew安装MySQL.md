title: Rails开始
date: 2017-05-26 15:14:20
tags: Ruby on Rails
---
- 安装MySQL `brew install mysql`

- 启动MySQL `mysql.server start`

- 启动后登陆 `mysql -uroot -p`

- 在 Ruby on Rails 下使用  
  - 在Gemfile文件增加上 `gem 'mysql2'`

  - 配置文件 `config/database.yml`

  ```yml
  development:
      adapter: mysql
      encoding: utf8
      reconnect: false  
      database: database_name   #创建的mysql数据库名
      pool: 5
      username: root            #连接mysql的用户名
      password:                 #连接mysql的用户名的密码
      host: localhost           #连接mysql的服务器
  ```

 
