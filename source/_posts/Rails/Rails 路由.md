title: Rails 资源
date: 2015-10-11 01:36:26
tags: Ruby on Rails
---

### Rails 路由
**排除路由控制器**

`config/routes.rb`文件 修改

```ruby
    resources :posts, :excepet => :show
```

**常用路由写法**

```ruby
    get 'posts/:id', :to => 'posts#show'
```
简单的`Get` 请求

**小试一下**

```ruby

<%= link_to '测试一',{:controller => 'posts', :action => 'show', :id => 1 } %>

```

**命名路由**

```ruby
    get 'post/:id', :to => 'posts:show', :as => 'show_post'
```

**小试一下**

```ruby

<%= link_to '测试一', show_post_path %>

```

**集合路由**

`config/routes.rb`文件 修改

- 方式一

```ruby
resources :posts do
    get 'recent' :on => :collection
end
```

- 方式二 `这种方式更为简洁`

```ruby
resources :posts do
    collection on
        get 'recent'
    end
end
```

**成员路由**

```ruby
resources :posts do
    member do
        get 'recent'
    end
end
```



