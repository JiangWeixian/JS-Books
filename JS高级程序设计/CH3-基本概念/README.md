# JS - 基本概念
> 介绍基础语法知识（这部分我会快速略过）

这部分更推荐[youdontkonwjs]()

<!-- TOC -->

- [JS - 基本概念](#js---基本概念)
  - [typeof](#typeof)
  - [类型](#类型)
    - [Boolean(**)需要注意的](#boolean需要注意的)
    - [Number(**)需要注意的](#number需要注意的)
      - [NaN - 属于Number](#nan---属于number)
    - [parseInt & toString](#parseint--tostring)
    - [String](#string)
    - [Object](#object)
  - [操作符](#操作符)
    - [++a和a++ - 多么痛的领悟](#a和a---多么痛的领悟)
    - [!](#)
    - [&& or ||](#-or-)
    - [关系运算符 - > or >=](#关系运算符----or-)
      - [==](#)

<!-- /TOC -->

## typeof

`typeof`能够返回的数据类型。

* undefined - `null == undefined`为`true`
* number
* string
* function
* object
* boolean

`ES6`新增加了`symbol`；`array or set`的`typeof`返回类型为`object`。

并不意味着上面就是`JavaScript`的数据类型。一般来说我们认为`JavaScript`数据类型为：

* undefined
* number
* string
* object
* boolean

甚至细分除了`object`之外是 [**值类型数据**]()。

## 类型

**如果**涉及到类型转换关系，一般有三种：

0. `falsy or truty`
1. `valueof`
2. `toString->valueof`
3. `toString`

**注意boolean的valueof都是转化为0 or 1的结果。**

不太好总结，只能记忆什么时候应用什么规则。

### Boolean(**)需要注意的

如果通过`Boolean(**)`来得到`true or false`，那么就要涉及到`falsy or truthy`的列表数值。

### Number(**)需要注意的

如果是`boolean`就是`0 or 1`简单转换关系。

优先调用`valueof`，如果数值是`NaN`。那么再调用`toString->valueof`。

#### NaN - 属于Number

一个自身不等于自身的数值。

### parseInt & toString

`parseInt`可以实现 **多进制到十进制转换**。

`toString`实现 **十进制到多进制转换**。

含有参数可指定转换关系。

### String

不可改变。

所以想要通过`.prototype.xx.call`方法来对`string`实现调用在其他类型上面的函数，如果`xx`会改变自身，就无法实现调用。

**特别注意**

`string`上调用`+`，是使用`toString`进行类型转换

### Object

所有`object`都有`constructor`

## 操作符

### ++a和a++ - 多么痛的领悟

关键在于你需要怎么解释他。

++a作用在语句表达是之前，后面作用在语句表达式之后。

语句表达式含义为 **一行代码**: `++a`在 **一行代码**执行之前生效，另一个在 **执行之后**

**注意**

`++`或者其他设计类型转换的 **操作符号**，优先调用`valueof`；如果不存在`valueof`或者`valueof`的返回数值是`NaN`的话，那么就先调用`toString`，然后调用`valueOf`

### !

`if (xx) or if (!xx)`都是 **Boolean(xx)需要注意的**所提到的转换规则。

### && or ||

注意这两个返回结果并不是`false or true`。而是类似三元运算符的操作。

### 关系运算符 - > or >=

这个操作符的返回结果是`true or false`。

两种结合的转换规则，`valueof`的返回数值是`NaN`的话，那么就先调用`toString`，然后调用`valueOf`

#### ==

这个转换规则也有点不同,**前提是设计到了转换。**

只调用`valueof`。因为如果返回的是`NaN`,就进行`NaN`的相等比较。

* 只有一个`NaN`,判断是否等于`NaN`
* 两个`NaN`，永远是`false`