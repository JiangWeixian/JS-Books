(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{247:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态模式")]),t._v(" "),s("blockquote",[s("p",[t._v("多种状态一键切换")])]),t._v(" "),s("h2",{attrs:{id:"%E4%BB%80%E4%B9%88%E6%98%AF%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是状态模式")]),t._v(" "),s("p",[t._v("准确来说是"),s("strong",[t._v("对象+状态")]),t._v("。")]),t._v(" "),s("p",[t._v("当一个对象需要多种状态切换的时候就需要这种模式。在没使用这种模式之前，对象执行业务逻辑的时候。就会出现下面的代码：")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uploadingstate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code ..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pausestate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("且这些"),s("code",[t._v("state status")]),t._v("是在频繁变化的。特别是在一种状态到另一种状态切换的时候。举例来说就是"),s("strong",[t._v("停止状态不能调到中止状态。"),s("strong",[t._v("所以对于一个停止按钮，当他再一次被点击的时候，就要判断，它当前的状态是什么？因为可能发送")]),t._v("开始->中止->停止")]),t._v("的交互情况。可能就要在每个阶段判断状态。出现上述的"),s("code",[t._v("if else")]),t._v("地狱。")]),t._v(" "),s("p",[t._v("以状态模式的逻辑，定义每一种状态为对象("),s("code",[t._v("function or object")]),t._v("，内部有函数)。在一个模块中初始化所有状态"),s("code",[t._v("uploading&pasuse&end&error")])]),t._v(" "),s("p",[t._v("重构为：")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploading")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uploadingplugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentstate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uploadingstate\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样的代码在很多函数内部会出现，即具体功能和状态切换的共同出现。")]),t._v(" "),s("p",[t._v("关键就在于这个状态模块的。")]),t._v(" "),s("p",[t._v("这是一个很大的概念，叫"),s("strong",[t._v("状态机")])]),t._v(" "),s("h2",{attrs:{id:"%E5%AE%9E%E7%8E%B0---%E6%A8%A1%E5%BC%8F%E7%89%B9%E7%82%B9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E5%AE%9E%E7%8E%B0---%E6%A8%A1%E5%BC%8F%E7%89%B9%E7%82%B9","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现 - 模式特点")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("每一个状态机都会指向它的包含模块，比如"),s("code",[t._v("upload")]),t._v("模块。为的就是"),s("strong",[t._v("调用父类的方法，实现在不同状态间切换。")])]),t._v(" "),s("p",[t._v("这是由于对于一种确定状态，向另一种状态的转换关系是确定的。不需要多种状态判断。")])]),t._v(" "),s("li",[s("p",[t._v("状态模块 - 基本上都有类似的接口函数。")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  upload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    uploading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    handler2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pause"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    uploading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    handler2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("好处在于，对于"),s("strong",[t._v("什么是状态模式")]),t._v("中的那一段代码，就可以重新写作是：")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploading")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentstate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uploadingstate\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentstate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样判断是否进行"),s("code",[t._v("uploading")]),t._v("的工作就交给了"),s("code",[t._v("state")])])])])])}],!1,null,null,null);a.default=e.exports}}]);