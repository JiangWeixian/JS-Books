(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{209:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F","aria-hidden":"true"}},[t._v("#")]),t._v(" 职责链模式")]),t._v(" "),a("blockquote",[a("p",[t._v("玩成语接龙吧")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F"}},[t._v("职责链模式")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F"}},[t._v("什么是职责链模式")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---"}},[t._v("前置知识 - &&")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0---%E6%A8%A1%E5%BC%8F%E7%89%B9%E7%82%B9"}},[t._v("实现 - 模式特点")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E5%AE%83"}},[t._v("实现它")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BC%98%E7%82%B9"}},[t._v("优点")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"%E4%BB%80%E4%B9%88%E6%98%AF%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是职责链模式")]),t._v(" "),a("p",[t._v("在一个任务逻辑中，接受一个输入，这个输入对应很多分支，以应付不同的情况：")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("职责链条模式的思路是将")]),t._v(" "),a("ol",[a("li",[t._v("每一块的"),a("code",[t._v("if")]),t._v("语句的业务逻辑独立出来，变为一个单独的函数。")]),t._v(" "),a("li",[t._v("和传统"),a("code",[t._v("if")]),t._v("语句一样，如果上一个"),a("code",[t._v("if")]),t._v("没有成功就自动执行下一个，直到执行成功。")])]),t._v(" "),a("p",[t._v("而每一个"),a("code",[t._v("if")]),t._v("语句都是链中的节点，"),a("strong",[t._v("要注意所有条件都不满足时候的情况！需要特殊处理！")])]),t._v(" "),a("h2",{attrs:{id:"%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86---","aria-hidden":"true"}},[t._v("#")]),t._v(" 前置知识 - &&")]),t._v(" "),a("p",[a("code",[t._v("&&")]),t._v("在"),a("code",[t._v("JavaScript")]),t._v("中并不是一条能够返回"),a("code",[t._v("boolean")]),t._v("的语句，而是类似"),a("strong",[t._v("三元运算符")]),t._v("，也就是说")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("A || B")]),t._v(" - 等价与"),a("code",[t._v("A? A:B")])]),t._v(" "),a("li",[a("code",[t._v("A && B")]),t._v(" - 等价与"),a("code",[t._v("B? B:A")])])]),t._v(" "),a("p",[a("strong",[t._v("同时也和"),a("code",[t._v("|| &&")]),t._v("运算顺序有关，举例来说("),a("code",[t._v("&&")]),t._v(")，只有"),a("code",[t._v("A")]),t._v("成立才会运行"),a("code",[t._v("B")])])]),t._v(" "),a("p",[t._v("但是我们要知道这两个符号并不是能够得到"),a("code",[t._v("boolean")])]),t._v(" "),a("h2",{attrs:{id:"%E5%AE%9E%E7%8E%B0---%E6%A8%A1%E5%BC%8F%E7%89%B9%E7%82%B9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%AE%9E%E7%8E%B0---%E6%A8%A1%E5%BC%8F%E7%89%B9%E7%82%B9","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现 - 模式特点")]),t._v(" "),a("p",[t._v("在"),a("strong",[t._v("什么是职责链模式")]),t._v("可以很明确得到一下结论：")]),t._v(" "),a("ol",[a("li",[t._v("每一个节点需要知道自己下一个节点")]),t._v(" "),a("li",[t._v("节点成功执行就终止，失败就给接下来一个节点的开始的信号")])]),t._v(" "),a("p",[t._v("在传统的函数外部，包裹节点函数，使它变为链条中节点。假设是"),a("code",[t._v("Chain()")])]),t._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("code",[t._v("new Chain")]),t._v(" - 设置本身节点的任务")]),t._v(" "),a("li",[a("code",[t._v("set")]),t._v("函数 - 设置节点的下一个节点的任务")]),t._v(" "),a("li",[a("code",[t._v("pass")]),t._v("函数 - 执行任务，并返回结果或者执行下一个节点("),a("strong",[t._v("先执行本身节点任务，然后再考虑执行下一个节点任务")]),t._v(")")])]),t._v(" "),a("h3",{attrs:{id:"%E5%AE%9E%E7%8E%B0%E5%AE%83"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%AE%9E%E7%8E%B0%E5%AE%83","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现它")]),t._v(" "),a("p",[t._v("定义"),a("code",[t._v("Chain")]),t._v("函数")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Chain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fn\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("successor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("fn")]),t._v("是本身节点任务")]),t._v(" "),a("li",[a("code",[t._v("successor")]),t._v("是下一个节点任务")])]),t._v(" "),a("p",[t._v("定义"),a("code",[t._v("set")]),t._v("，设置下一个节点")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("successor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chain\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("注意这里传递的是节点，因为要链接为链条")])]),t._v(" "),a("p",[t._v("定义"),a("code",[t._v("pass")]),t._v("，执行任务")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包括函数返回结果, 不是'next'就是成功执行了")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("successor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("successor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("return this.successor && this.successor.pass.apply(this, arguments)")]),t._v("是链条执行的关键")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("this.successor.pass")]),t._v("保证了以链条的方式执行函数。")]),t._v(" "),a("li",[t._v("在**前置知识 - &&**提到的"),a("code",[t._v("JavaScript")]),t._v("特点也是链条的关键。")])]),t._v(" "),a("p",[t._v("文中提到了直接"),a("code",[t._v("Function.prototype")]),t._v("实现的方式，我不喜欢。")]),t._v(" "),a("h3",{attrs:{id:"%E4%BC%98%E7%82%B9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BC%98%E7%82%B9","aria-hidden":"true"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("p",[t._v("设置链条和执行是两个过程。是分离开来的(因为"),a("code",[t._v("if (ret === 'next')的判断")]),t._v(")。")]),t._v(" "),a("p",[t._v("我们大可以"),a("code",[t._v("Chain.set(Chain2).set(Chain3)")]),t._v("，然后在执行"),a("code",[t._v("Chain.pass()")]),t._v("。")]),t._v(" "),a("p",[t._v("只要某一个节点成功了，就会在那个节点终止。不会继续下去。")]),t._v(" "),a("p",[a("strong",[t._v("注意，以上都没有考虑到如果所有节点都不成立的情况")])])])}],!1,null,null,null);s.default=e.exports}}]);