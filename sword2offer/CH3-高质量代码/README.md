# CH3-高质量代码

## 高质量

* 边界测试
* 错误输入情况

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
