title: Rails 数据交互
date: 2015-10-11 03:44:25
tags: Ruby on Rails
---


### Rails 数据交互
**ActiveRecord**
*创建模型*

```shell
rails generate model user userName:string email:string
```

> 创建的`model`使用的是单数 而创建 `controller` 则用复数

**迁移数据**

```shell
rake db:migrate
```

**进入控制台** `rails console`

```shell
@user = User.new(:userName => 'Hu.Shihuan', :email => 'hxfsc@qq.com')
```

```shell
@user.save()
```

```shell
User.find(1)
```

```shell
User.all()
```

**数据验证**

```ruby
validates :userName, presence:true, length:{maximun:20}   存在性验证,长度不能大于20
EMAIL = /+@/i  //邮箱验证
validates:email, presence:true，length{maximun:255}，format:{with:EMAIL},uniquenese:{ case\_sensitive: false} | true  存在性验证,长度不能大于255,正则匹配，唯一性验证[不加case_sensitive 则为大小写不敏感]
```

**查看错误信息**

```shell
@user.errors.full_message
```

