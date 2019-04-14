# Packages - React
> `packages`文件夹下的`react`文件夹

在`packages/react`文件夹下有两个文件夹，分别是`npm`和`src`。

* npm - 从`npm/index.js`文件夹来看。应该从`npm`下载`react`的时候的文件。和`src`关系为`compile src to npm folder`。
* src - 从文件来看应该是源码地址

## 有待进一步理解确认

* [ ] - 请确定是否是`src->npm`的编译方式。因为从`npm/index.js`来看，明明是从`./cjs`文件夹导出的
* [ ] - `in packages/react/src/React.js`文件中，使用的`shared`文件夹作用?

## NPM

可以理解为作为`npm`包存在的`react`入口文件。

## SRC

重点还是`src`文件夹下所有文件的理解。从名字里面可以看到`React.js`应该是入口文件，而其他文件名应该在作为`React`内部模块被使用过。例如其中的`context or lazy`文件。

**注意：一下标题名均为`folderName/fileName`的形式展开。**

## src - React.js

:::tip
主要作用：导入各部分子模块文件，然后聚合之后整合功能导出。
:::

大致概览。

* `shared/**` - 应该为`react`配置项或者版本相关
* `./ReactChildren` - 曾使用过`React.Children.map`函数实现原生`Tag`包裹`Tag`的方式（当然能够实现的功能不止这个）
* `./ReactBaseClasses` - 通过`class`创建组件
* `./ReactElement`<Badge text="不曾使用" />
  * `./ReactElementValidator` - `ReactElement`在不同`Y`环境下的包。
* `./ReactLazy` - `lazy component`
* `./ReactHooks`<Badge text="高级功能" /> <Badge text="不曾使用" />
* `ReactContext`<Badge text="高级功能" /> <Badge text="需要理解" /> - 也就是使用的`provider`相关组件。
* `memo` - `react.memo`
* `./forwardRef`<Badge text="高级功能" /> <Badge text="需要理解" />
* `./withComponentStack`<Badge text="不曾使用" />

## 题外话

1. 可以发现`react`对于变量或者包的命名方式使用的是`verb+noun`并使用`CamelCase`的方式。
2. 对于文件夹
  * 如果是`verb` - 那么就是被动
