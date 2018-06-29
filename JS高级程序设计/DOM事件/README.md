# DOM事件

## 事件流

**DOM2**

这里说的事件流是`DOM2`级事件流，事件触发顺序为 **捕获->触发->冒泡**。

具体实现可见[DOM事件定义]()

**DOM0**

就是通过`onclick`来实现的。

前者优势比较大，因为可以删除(和性能有关)，还可以在同一个事件上面绑定函数。

而后者只能实现一个。

如果在`document`绑定了`addEvent..`以及`onclick`，同时文档按钮`addEvent`

如果点击按钮，虽然也是点击在`document`上，但是`button`才是target。所以`document`的`dom2`是捕获阶段触发，`button`是触发阶段触发。

`document.onclick`是冒泡阶段。

**说明onclick**默认是冒泡的。

## 事件对象


