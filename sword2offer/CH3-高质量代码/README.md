# CH3-高质量代码

<!-- TOC -->

- [CH3-高质量代码](#ch3-高质量代码)
  - [高质量](#高质量)
    - [Tips](#tips)
    - [数的次幂](#数的次幂)
    - [打印出一串数字](#打印出一串数字)
    - [O(1)方式删除某个节点](#o1方式删除某个节点)
    - [调整数组使得奇数在偶数前面](#调整数组使得奇数在偶数前面)
    - [链表到数K节点](#链表到数k节点)

<!-- /TOC -->

## 高质量

* 边界测试
* 错误输入情况

### Tips

1. 借助两个指针是一个比较好的方法

### 数的次幂

意在强调程序鲁棒性。不然这个完全可以由内置函数实现。

**Python**

* [Python-baseExp.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/Python/baseExp.py)

**JavaScript**

* [ES5-baseExp.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/ES5/baseExp.js)
* [ES6-baseExp.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/ES6/baseExp.js)

### 打印出一串数字

打印`1~n`，需要考虑大数问题。

文中给的输入时位数，比如说**3位**，那么就输出`0`到**所有三位的数字。**

那么可以在设定的`[0, 1, 2..., 9]`的情况下，动态规划的问题。

也就是得到**1位**的情况，然后在**此基础上得到2位的情况。**

例如`[0, 1, 2..., 9]`，同时**2位情况为`[10, 11, 12..., 19]`，然后优势前缀为`[20, 21, 22..., 29]`**

**只是以书中的思路解决问题，一般情况下直接使用内置函数就好了，比如range**

**Python**

* [Python-printNumsRange.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/Python/printNumRange.py)

**JavaScript**

* [ES5-printNumsRange.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/ES5/printNumRange.js)
* [ES6-printNumsRange.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/ES6/printNumRange.js)

### O(1)方式删除某个节点

文中的条件是，传递的是删除的节点。通过传递节点来达到删除的目的。

但是问题在于一般来说，都是传入删除节点的`value`，寻找各个节点，然后再删除这个节点。

所以我觉得`O(1)`方式只在某个条件下成立。

不先实现了。

### 调整数组使得奇数在偶数前面

对于`Python or JavaScript`来说，可以通过内置函数实现`O(n)`算法(**以空间换时间**)

如果不通过这样方式。

设置两个指针，一个在前(start)，一个在后(end)。

1. 如果后面的的遇到偶数，前面为奇数。就交换
2. 直到start在end之后

**Python**

* [Python-exchangeOdd.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/Python/exchangeOdd.py)

**JavaScript**

* [ES5-exchangeOdd.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/ES5/exchangeOdd.js)
* [ES6-exchangeOdd.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/ES6/exchangeOdd.js)

### 链表到数K节点

这个问题在于，**如果不知道链表长度**，那么想要直到链表倒数就要先获取长度之后然后再进行查找。这是第一种方法。

还有一种方法是借助两个指针(对不起，我看答案了。)

一个指针指向开头，另一个距离第一个**k个位置。**当后面那个达到末尾的时候，前一个就是到数第到数k个。

在链表长度比较长的情况下，提升比较明显。

**Python**

* [Python-linkListLastK.py](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/Python/linkListLastK.py)

**JavaScript**

* [ES5-linkListLastK.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/ES5/linkedListLastK.js)
* [ES6-linkListLastK.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH3-%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81/ES6/linkedListLastK.js)