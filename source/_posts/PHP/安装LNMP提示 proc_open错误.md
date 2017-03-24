title: 安装LNMP提示 proc_open错误
date: 2015-11-22 04:02:13
tags: Laravel
---

### 安装LNMP提示 proc_open错误

在lnmp环境下安装Laravel提示错误
​    
```shell
The Process class relies on proc_open, which is not available on your PHP installation.
```

到 `/usr/local/php/etc/php.ini` 寻找 `disable_functions` 字段 然后删除 `scandir` 字段即可 

