# 边距和边框
> marigin padding border

<!-- TOC -->

- [边距和边框](#边距和边框)
  - [盒子模型](#盒子模型)
  - [margin&padding](#marginpadding)
    - [百分比数值](#百分比数值)
    - [与父类作用](#与父类作用)
  - [border](#border)

<!-- /TOC -->

## 盒子模型

IE盒子模型和W3C盒子模型。整个`box`占用宽高计算方式一致(padding+margin+width+border)，区别在于`content`区域的宽高。

* IE盒子模型(border-box) - 如果定义了宽高，那么内容区域就是(定义高度 - padding - border)。
* W3C盒子模型(content-box) - 如果定义了宽高，就是定义了内容区域高度

## margin&padding

和在一起说明，以下提到的对两者都成立。

可以归结为两个方向。分别是上下以及左右。

* [bfc](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css-bfc.md)导致上下margin消失，同时在啊[CSS表现](https://github.com/JiangWeixian/JS-Books/tree/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E5%9F%BA%E6%9C%AC%E8%A7%86%E8%A7%89%E6%A0%BC%E5%BC%8F%E5%8C%96)中也提到了如果 **上下**`margin`设置在`inline非替换元素上`并不会影响布局。而在替换元素以及`inline-block or block`则会影响布局。

现在问题来到了左右这边。**在任何情况下，无论是行内，块，还是替换非替换。左右都是有效的。**

### 百分比数值

百分比相对的是父类的`width`。即使是上下的`margin or padding`。因为在实际布局中，`height`是一个比较灵活的可变的情况。

### 与父类作用

如果父类没有设置宽高，那么`margin or padding`这些设置会扩大宽高。

如果设置了，那么可能会有溢出的情况。

## border

**不可见**

* border: none
* border-style: none

都会让`border`不可见

**隐藏**

设置颜色为`transparent`则会让`border`视觉上不可见。

**border对布局的影响和`margin or padding`类似**

