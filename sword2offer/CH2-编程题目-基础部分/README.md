# CH2 - 编程基础

<!-- TOC -->

- [CH2 - 编程基础](#ch2---编程基础)
  - [基础](#基础)
    - [~~赋值运算符~~](#赋值运算符)
    - [实现Singleton模式](#实现singleton模式)

<!-- /TOC -->

## 基础

### ~~赋值运算符~~

`JavaScript`和`Python`并不能做到。

### 实现Singleton模式

**Python**

天生单例模式，只要把模块写在文件中。然后通过`import`导入就可以了。

**JavaScript**

关键点：

1. 注意职责单一，逻辑模块和创建单例模块应该分开。
2. 闭包`return function`是实现的关键

实现：

* [ES5-createSingleton.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/createSingleton.js)
* [ES6-createSingleton.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/createSingleton.js)





