title: jQuery在Firefox不支持background-position-x解决办法
date: 2015-09-18 11:12:46
tags: 前端
---

### jQuery在Firefox不支持background-position-x解决办法

原因很简单

Firefox不支持类似于”backgroun-position-x,backgroun-position-y” 这样的属性

解决办法也比较简单

可以用 jquery-browser-plugin 判断浏览器

https://github.com/gabceb/jquery-browser-plugin

然后

```javascript
if($.browser.mozilla){
    $(elem).css({
        "background-position":"center center",
        "-moz-transition": "all 500ms ease"
    });
}else{
    $(elem).stop(true).animate({
        "background-position-x":"-73px",
        "background-position-y":"0px"
    },300);
}
```
