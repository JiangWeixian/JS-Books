# 漫谈React
> 与CSS结合的最佳实践；性能优化

## 前言

知识点很多。

## **Event System**

1. React中事件不能等价与原生事件系统

  > 只是重写了其中部分，缺失的那部分只能够通过原生的方法添加

  > 而且只有冒泡模式，没有捕获方式

2. 阻止事件冒泡

  > 如果是原生和`React`混用的情况，如果**阻止了React事件冒泡不能够阻止原生事件冒泡。但是如果阻止了原生的，就一定会阻止`React`的**

## **几个概念**

什么时候受控模式？什么时候非受控模式？

> 无论是原生组件还是还是非原生组件。组件的数据是通过`state or props`进行控制的。而非受控的模式是通过**原生`DOM`的方式进行控制的**


## **With CSS-Modules**

具体见[CSS-modules](https://github.com/JiangWeixian/JS-Tips/blob/master/React/React-CSSModules.md)这部分的总结

## **Commuication**

父子通信是比较明白的。兄弟之间通信也能够实现。只要数据在父级处理然后分发就可以了。

**但是如何实现层级比较深的组件通信：不是父子，也不是兄弟**

文中推荐了`events`通过`pub/sub`的方式。需要`events`这个`npm`包。

## **HOC**

> HOC的作用需要好好研究一下


## **Optimize React**

> 优化React。其中有些实现可能不需要通过插件的方式了，集成为了现有的API。

