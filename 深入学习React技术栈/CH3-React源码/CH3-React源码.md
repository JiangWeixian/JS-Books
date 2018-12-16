# React源码
> 生命周期；以及Diff算法&VD分析

## **生命周期**

![生命周期]()

可以将生命周期分为两个阶段，分别是`mount`以及`re-render`阶段。

1. `mount` - 只会执行一次
2. `re-render` - 会因为`state or props`更新执行多次

**注意：** 图中`this.setState`被划掉意味着
