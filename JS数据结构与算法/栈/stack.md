# 栈 - Stack
> FILO

## 前置知识 - JavaScript和Stack

首先要知道`Stack`基本特点：

1. FILO - 先进后出
2. 数据和数据之间没有关联 - 所以每个数据并不会嵌套另外一个数据
3. 由于**第2点**所以可以使用`JavaScript`数组实现
4. **注意数据的存储是私有的，即外部并不能访问**

## 前置知识 - Stack内置函数

* `push`
* `pop`
* `isEmpty` 
* `size`
* `clear`

**Stack基本框架**

```JavaScript
function stack () {
  var items = []
  this.push = function () {}
}
```

* `var item = []`是隐藏数据的关键

## 实现它

[stack.js]()