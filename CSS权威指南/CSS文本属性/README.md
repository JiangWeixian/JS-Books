# 文本属性

<!-- TOC -->

- [文本属性](#文本属性)
  - [前置知识 - 字体行](#前置知识---字体行)
  - [text-indent - 缩进](#text-indent---缩进)
  - [line-height](#line-height)
  - [vertical-align](#vertical-align)
  - [处理空白符](#处理空白符)
  - [比较少用到的，但是很有用](#比较少用到的但是很有用)

<!-- /TOC -->

## 前置知识 - 字体行

首先要记住下面这张图，理解其他文本属性很重要

![line-height](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/img/lineheight.PNG)

## text-indent - 缩进

**注意：**

1. 块元素属性，不是行内元素
2. 百分比单位一般是根据父元素的

## line-height

* 百分比(或者缩放因子)是相对于字体大小而言
* 字体上下的空白是可以被计算出来的，是`(lh - font-size)/2`

## vertical-align

**只能够是行内元素**，所有属性如下图所示：

![verticalalign](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/img/verticalalign.PNG)

* baseline - 是对于基线而言
* bottom - 是针对文本框下边界而言
* 具体数值
  * 如果是百分比 - 相对于lineheight得到数值
  * 数值 - 在当前位置上上移动或者下移动，正的为上移，负的为下移

## 处理空白符

字体和字体之间本来就有的空白不算，这里的处理指的是原本只有一个空格，现在却有两个。如下图所示：

![处理空白和黄行](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7/img/whitespace.PNG)


## 比较少用到的，但是很有用

* word-space and letter-space - 字体间距和字母间距
* text-transform - 字体变换
* text-decoration - 像划线之类的装饰
* direction - 文本方向