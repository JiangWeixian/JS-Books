# CH4- 解决面试题的思路

## 解决思路

* 画图简化问题

此章节大量用到树结构，对于树，`JavaScript`中试着使用`class`关键字创建。对于私有方法和私有属性，并没有像`function`那么好用。

### 二叉树镜像

大致意思如图。

![树的镜像]()

同样这也是比较适合递归的方法：

1. 左右子树都需要递归，因此我们能够得到左右子树的**根节点下的左右节点**。
2. 只要交换这两个节点
3. 同时递归中返回**根节点**

**Python**

* [Python-mirrorTree.py](https://github.com/JiangWeixian/Algo/tree/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/Python)

**JavaScript**

* [ES5-mirrorTree.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES5/mirrorTree.js)
* [ES6-mirrorTree.js](https://github.com/JiangWeixian/Algo/blob/master/Sword2offer/CH4-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF/ES6/mirrorTree.js)
