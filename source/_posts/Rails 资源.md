title: Rails 资源
date: 2015-10-11 01:42:32
tags: Ruby on Rails
---

# Rails 资源
---

**资源**
--
*创建资源*

    rails generate controller posts index show create new

创建一个posts控制器

分别创建 index、show、create、new四种行为

*删除资源*

    rails destroy controller posts

然后在`config/routs.rb`文件里面给`posts`相关的资源删除即可完整的删除一个controller


*修改默认访问主页*
>在项目目录的config目录里面修改`ruotes.rb`文件

```ruby
root "posts#index"
```

*查看工程路由*

除了在工程文件`config/routes.rb`里面查看，还可以使用命令

    rake routes

**简写routes**

可以在`config/routes.rb`里面简写

    resources 'posts'

这样RESTFull七种请求方式都已经具备了


**创建完整的scanfocll**

    rails generate scaffold Post content:text

就完整的创建了一个`posts`资源

+ 创建`scanffold`与`controller`的区别在于`posts`使用的是首字母大写的单数
+ `scanffold`命令后面可以接上模型名称

**数据迁移**

    bundle exec rake db:migrate

>这一步是必须的