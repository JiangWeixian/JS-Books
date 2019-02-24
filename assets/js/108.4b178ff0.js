(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{185:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"初入react世界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初入react世界","aria-hidden":"true"}},[t._v("#")]),t._v(" 初入React世界")]),t._v(" "),s("h2",{attrs:{id:"jsx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsx","aria-hidden":"true"}},[t._v("#")]),t._v(" JSX")]),t._v(" "),s("p",[t._v("只要稍微写过"),s("code",[t._v("React")]),t._v("其实也没有看的必要。")]),t._v(" "),s("h2",{attrs:{id:"react生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" React生命周期")]),t._v(" "),s("blockquote",[s("p",[t._v("名字可能不对，但是希望领会意思")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("*带有"),s("code",[t._v("mount")]),t._v("关键字的钩子函数都是只会触发一次的钩子函数。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("willreviceprops")]),t._v(" - 接受"),s("code",[t._v("props")]),t._v("在"),s("code",[t._v("props")]),t._v("更新的时候触发。\n出现的情况在，如果"),s("code",[t._v("props")]),t._v("有个默认值，但是会被父类控制传递。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果"),s("code",[t._v("props")]),t._v("用在"),s("code",[t._v("render")]),t._v("中，本身"),s("code",[t._v("props")]),t._v("更新就会触发"),s("code",[t._v("render")]),t._v("这个就没有问题")])]),t._v(" "),s("blockquote",[s("p",[t._v("但是如果"),s("code",[t._v("props")]),t._v("本没有直接用在了"),s("code",[t._v("render")]),t._v("中，而是用来异步获取后端的数据。而默认设置的"),s("code",[t._v("props")]),t._v("可能不对（因为会被更新，我们需要的是更新之后的数据）。所以这个"),s("strong",[t._v("钩子函数就会被认为是"),s("code",[t._v("watch")]),t._v("的函数")])])])]),t._v(" "),s("li",[s("p",[t._v("shouldupdate - 优化的关键，接受"),s("code",[t._v("props state")]),t._v("。"),s("strong",[t._v("因为如果调用了"),s("code",[t._v("this.setState")]),t._v("以及接受了"),s("code",[t._v("props")]),t._v("，即使"),s("code",[t._v("state or props")]),t._v("没有任何变化，还是会导致组件的更新！")])]),t._v(" "),s("blockquote",[s("p",[t._v("如果"),s("code",[t._v("return false")]),t._v("的话，组件就不会更新。一般会和现有的"),s("code",[t._v("props state")]),t._v("进行比较，作为性能的优化点")])]),t._v(" "),s("blockquote",[s("p",[t._v("同时也可以作为"),s("code",[t._v("watch")]),t._v("实现部分，因为会接受新的"),s("code",[t._v("nextProps")]),t._v("。可以实现不更新组件，而进行异步的数据操作。")])])]),t._v(" "),s("li",[s("p",[t._v("willupdate")])]),t._v(" "),s("li",[s("p",[t._v("didupdate")]),t._v(" "),s("blockquote",[s("p",[t._v("这两个目前看起来没有什么特别的地方")])])])]),t._v(" "),s("h2",{attrs:{id:"reactdom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reactdom","aria-hidden":"true"}},[t._v("#")]),t._v(" ReactDOM")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("常见的是"),s("code",[t._v("render")]),t._v("函数")])]),t._v(" "),s("li",[s("p",[t._v("以及可以通过传递组件名然后找到组件名在真实页面中的"),s("code",[t._v("DOM")]),t._v("元素。")])])]),t._v(" "),s("h3",{attrs:{id:"refs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refs","aria-hidden":"true"}},[t._v("#")]),t._v(" Refs")]),t._v(" "),s("p",[s("code",[t._v("React")]),t._v("比"),s("code",[t._v("Vue")]),t._v("设计合理的地方，可以异步的获取组件真实的"),s("code",[t._v("DOM")]),t._v("元素。")]),t._v(" "),s("h2",{attrs:{id:"通过组件包裹的方式组合组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过组件包裹的方式组合组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过组件包裹的方式组合组件")]),t._v(" "),s("blockquote",[s("p",[t._v("个人认为比较好的方式，就是这种类似原生的方式。")])]),t._v(" "),s("p",[s("strong",[t._v("但是之前一直对如何嵌套的组合组件的方式是不太清楚的，如下")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Tabs\n  classPrefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tabs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  defaultActiveIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabs-bar"')]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TabPane key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" tab"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tab 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("第一个 Tab 里的内容"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TabPane"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TabPane key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" tab"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tab 2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("第二个 Tab 里的内容"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TabPane"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TabPane key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" tab"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tab 3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("第三个 Tab 里的内容"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("TabPane"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Tabs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])]),s("ol",[s("li",[s("p",[s("code",[t._v("tabs")]),t._v("嵌套这"),s("code",[t._v("tabpane")]),t._v(".")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("tabpane")]),t._v("内还可以嵌套其他内容，"),s("strong",[t._v("关键在于对于"),s("code",[t._v("tabpane")]),t._v("也是先类似的方式。")])])])])])}],!1,null,null,null);a.default=r.exports}}]);