# 1. 构建Web应用
> Web需要的基本知识

<!-- TOC -->

- [1. 构建Web应用](#1-构建web应用)
  - [1.1. 原生基本知识](#11-原生基本知识)
  - [1.2. cookie](#12-cookie)
    - [1.2.1. 性能](#121-性能)
  - [session](#session)
    - [字符串查询](#字符串查询)
    - [缓存问题](#缓存问题)
  - [安全](#安全)
    - [XSS](#xss)
  - [性能](#性能)

<!-- /TOC -->

## 1.1. 原生基本知识

原生Nodejs就带有很多解析字符串之类的方法和函数。

## 1.2. cookie

关于[cookie]()介绍，在JS高级程序设计已经解释过了。

* 服务器通过`set-cookie`来设置客户端`cookie`。但是 **客户端可以供过`document.cookie`来设置，最好通过设置`httponly`来限制`document.cookie`无法使用**。客户端是通过`secure`的`cookie`字段。

### 1.2.1. 性能

* cookie不要太大
* httponly
* 不同域名设置不同`cookie`，类似只设置了`baidu.com`下面的`cookie`那么所有`baidu.com`下面的`path`都会发送。

## session

cookie和session成对出现。

文中一般设置在`req.session`设置或者修改，借助`req`全局性，然后通过获取`req.session`(已经重新设置或修改过了)然后设置到`res.cookie`中。

设置方法如下：

![sessionincookie]()

### 字符串查询

就是url地址上查询方式。**将sessionid放到地址上。**

文中提到一个重定向方法，就是如果url上没有sessionid，那么就设置重定向，关键在于`res`中`location`的值，以及302状态码字。服务器会重定向到`location`上面。

### 缓存问题

session一般存储在`redis`上面，一般和`session`的存储服务保持很长的连接。减少网络消耗。因为网络消耗的事件是大于硬盘的。

## 安全

具体可见[xss-csrf]分析。

### XSS

脚本攻击，前端解析字符串之后，直接`innerHTML=一些数据`。如果这些数据带有`script`脚本，就会被解惑`cookie`

## 性能

关于这部分，我之前总结过[一篇文章]() - 前三个客户端/服务器都能够设置，后面两个服务器设置，然后客户端再下一次请求的时候发送。

文中提到的最佳实践和总结的一样，设置一个永远不会到期的时间，然后通过服务器控制 **文件名**来实现客户端更新。