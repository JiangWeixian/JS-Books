# CH2 - 编程基础

<!-- TOC -->

- [CH2 - 编程基础](#ch2---编程基础)
  - [基础](#基础)
    - [~~赋值运算符~~](#赋值运算符)
    - [实现Singleton模式](#实现singleton模式)
    - [二维数组查找 / 以下几个题目和数据结构有关](#二维数组查找--以下几个题目和数据结构有关)

<!-- /TOC -->

## 基础

### ~~赋值运算符~~

`JavaScript`和`Python`并不能做到。

### 实现Singleton模式

**Python**

天生单例模式，只要把模块写在文件中。然后通过`import`导入就可以了。

**JavaScript**

关键点，具体分析可见[JavaScript设计模式-单例模式](https://github.com/JiangWeixian/JS-Books/blob/master/JS%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F(Desgin-Patterns)/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.md)：

1. 注意职责单一，逻辑模块和创建单例模块应该分开。
2. 闭包`return function`是实现的关键

实现：

* [ES5-createSingleton.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/createSingleton.js)
* [ES6-createSingleton.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/createSingleton.js)

### 二维数组查找 / 以下几个题目和数据结构有关

关键在于这个二维数组特殊，里面的数据是已经排序好了的。

![题目描述]()

类似**二分搜索的快速算法很合适**缩小访范围的思路，具体可见

* [分析]() 
* [实现]()

但是并不直接能够使用。由于数据格式问题，但是这种算法的关键在于，**大或者小的方向只有一个**：

* 只能够保证一个矩形数组中，右下角元素比较大，左上角的元素比较小
* **并不能够通过中数值确定范围**，因为对于一个中间数字来说，比它小的**有可能在它的左边，也有可能在它的上面，但是最重要的是，在它右上角的数字也可能比它小，因为不同行无法比较**

，需要找到一个能够替代**中值作用的数字**，可以发现，数组右上角的数字：

1. 比它小的只能是左边，比他大只能是下面
2. 且每次缩小范围，构成一个新的数组，只会选择右上角的数字。**第一个条件永远成立**

**Python**

* [python-searchmatrix](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/Python/searchMatrix.py)

**JavaScript**

* [ES5-searchmatrix.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES5/searchMatrix.js)
* [ES6-searchmatrix.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH2-%E7%BC%96%E7%A8%8B%E9%A2%98%E7%9B%AE-%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/ES6/searchMatrix.js)