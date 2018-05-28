# JQuery源码阅读
> 第一次阅读

<!-- TOC -->

- [JQuery源码阅读](#jquery源码阅读)
    - [正文](#正文)
    - [Deep in Deep](#deep-in-deep)
        - [New+Prototype](#newprototype)
    - [Function](#function)
        - [$.extend](#extend)

<!-- /TOC -->

## 正文

第一次阅读记录一些有用的函数，以及`JS`内部黑科技。

## Deep in Deep

JS原理、定义部分踩坑。

### New+Prototype

* 通过`new`关键词创建的对象，通过`typeof`的结果都是`object`。无论你是`number or string`。最好判断类型的方式是`Object.prototype.toString.call(val)`来进行判断。

* 可以通过的改变`prototype`的指向来改变`new`创建的对象。在`jquery`中。
    ```javascript
    jquery.fn = jquery.prototype = {
        // 一些方法
    }
    jquery.fn.init.prototype = jquery.fn
    ```

    这样通过`new jquery.fn.init()`就可以创建一个`jquery`实例。

* 实现链式方法的关键就在于`return this`    

## Function

有趣的函数实现

### $.extend

拷贝函数。

* [API地址](https://api.jquery.com/jquery.extend/)
* [在线地址](https://jsfiddle.net/boilerplate/jquery/)

实现大致功能为：

* 将一个目标复制到另一个目标上
    * 分为深度拷贝 - 需要递归，实现层次更深的拷贝（不仅仅是`level=1`的拷贝）
    * 浅拷贝 - 只有`level=1`的拷贝
* 还可以拷贝到`jq`上实现拓展
* 可以拷贝函数，实现`jq`方法上的拓展

其中，**`jq`方法上的拓展**和**递归实现的深度拷贝**需要重点注意。