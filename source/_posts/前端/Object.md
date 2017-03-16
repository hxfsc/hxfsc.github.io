title: jQuery在Firefox不支持background-position-x解决办法
date: 2016-01-01 01:21:18
tags: 前端, javascript
---


# Object

### 创建方式

### 字面量方式
```javascript
    var p = {
        key: value
    }
```

### new Object
```javascript
   var obj = new Object();
```


# defineProperties

### 理解

```javascript
get set writeable enuerable configurable value

```
# defineProperty

## 构造器和类型检测

### 构造器
    constructor
    最顶级的构造器为Function() 她自已的构造器为他本身
    次顶级的构造器为 Object Math Array...
### 检测
```javascript
    typeof
    instanceof -> 和构造器相关
```
### 对象工厂
```javascript
    function PersonFactory( name, age ){
        return {
            name: name,
            age: age
        }
    }
    var p1 = PersonFactory( "Hu.Shihuan", 22 );
    var p2 = PersonFactory( "Google", 22 )
```
> 此对象缺点是两者对象是独立，不能共用
## 构造器函数 ` contructor `
```javascript
    function Person(){
        var age = 30   //此属性实例对象无法访问 只是作为内部成员变更
        this.age = 30  //此属性实例对象可以访问
    }

    Preson.prototype.count = 1 // prototype 共用属性 
```








