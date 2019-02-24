(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{279:function(t,a,e){"use strict";e.r(a);var v=e(0),_=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"表单脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表单脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 表单脚本")]),t._v(" "),e("blockquote",[e("p",[t._v("和表单有关的操作")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E8%A1%A8%E5%8D%95%E8%84%9A%E6%9C%AC"}},[t._v("表单脚本")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%89%8D%E8%A8%80"}},[t._v("前言")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E8%A1%A8%E5%8D%95"}},[t._v("表单")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E8%A1%A8%E5%8D%95%E5%B1%9E%E6%80%A7"}},[t._v("表单属性")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6"}},[t._v("事件")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E8%A1%A8%E5%8D%95%E5%BA%8F%E5%88%97%E5%8C%96"}},[t._v("表单序列化")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%8E%A7%E4%BB%B6%E7%9A%84%E5%85%B1%E4%BA%AB%E5%AD%97%E6%AE%B5"}},[t._v("控件的共享字段")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#html5"}},[t._v("HTML5")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%96%87%E6%9C%AC%E6%A1%86"}},[t._v("文本框")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%AF%8C%E6%96%87%E6%9C%AC"}},[t._v("富文本")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E9%80%89%E6%8B%A9%E6%A1%86"}},[t._v("选择框")])])])])]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("表单的涉及量很多，之所以在这里单独列出一章，可以类比"),e("code",[t._v("canvas")]),t._v("。")]),t._v(" "),e("p",[t._v("在表单之上实现独立的接口，就像是如果我们使用了"),e("code",[t._v("form input")]),t._v("，可以通过获取"),e("code",[t._v("form")]),t._v("其中一个属性来获取"),e("code",[t._v("input")]),t._v("，而不需要单独的通过"),e("code",[t._v("document.getElementxx")]),t._v("来获取其中的表单元素。")]),t._v(" "),e("h2",{attrs:{id:"表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表单","aria-hidden":"true"}},[t._v("#")]),t._v(" 表单")]),t._v(" "),e("h3",{attrs:{id:"表单属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表单属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 表单属性")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH14-%E8%A1%A8%E5%8D%95%E8%84%9A%E6%9C%AC/img/%E8%A1%A8%E5%8D%95%E5%B1%9E%E6%80%A7.PNG",alt:"表单属性"}})]),t._v(" "),e("ul",[e("li",[t._v("其中控件指的就是"),e("code",[t._v("input")]),t._v("此类元素")])]),t._v(" "),e("h3",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),e("p",[t._v("如果"),e("code",[t._v("form")]),t._v("中有"),e("code",[t._v("submit button")]),t._v("即使没有自定义在上面绑定事件。点击或者"),e("code",[t._v("enter")]),t._v("都会向浏览器发送数据，数据拼接的是控件"),e("code",[t._v("value")]),t._v("数据。")]),t._v(" "),e("p",[t._v("因此我们可以通过自定义"),e("code",[t._v("submit")]),t._v("事件，注意这个"),e("code",[t._v("submit")]),t._v("是绑定在"),e("code",[t._v("form")]),t._v("上面的，通过"),e("code",[t._v("submit button")]),t._v("触发而已。"),e("strong",[t._v("当我们通过CH12说明的阻止方式来阻止默认行为的时候，以便实现前端的验证。")]),t._v("，然后通过"),e("code",[t._v("form.submit()")]),t._v("来自动触发。")]),t._v(" "),e("p",[t._v("类似的事件很多都可以通过这样的方式手动触发，比如"),e("code",[t._v("click() select()")]),t._v("，区别在于有些手动触发的还是会 **触发绑定的事件，而有一些不会。**就像是"),e("code",[t._v("submit")])]),t._v(" "),e("ol",[e("li",[t._v("我们通过"),e("code",[t._v("addEvent..")]),t._v("来绑定事件，又阻止了默认行为")]),t._v(" "),e("li",[t._v("然后"),e("code",[t._v("form.submit()")]),t._v("来手动提交")]),t._v(" "),e("li",[t._v("要是第二点还是会触发第一点的话，那么"),e("code",[t._v("form.submit()")]),t._v("也会被阻止掉，所以"),e("code",[t._v("submit()")]),t._v("不会触发第一点的事件绑定")])]),t._v(" "),e("h3",{attrs:{id:"表单序列化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表单序列化","aria-hidden":"true"}},[t._v("#")]),t._v(" 表单序列化")]),t._v(" "),e("p",[t._v("也就是前端预处理提交字段，进行"),e("code",[t._v("url")]),t._v("编码(不是只针对"),e("code",[t._v("url")]),t._v(")。")]),t._v(" "),e("h2",{attrs:{id:"控件的共享字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控件的共享字段","aria-hidden":"true"}},[t._v("#")]),t._v(" 控件的共享字段")]),t._v(" "),e("p",[t._v("每个控件都会有的属性。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH14-%E8%A1%A8%E5%8D%95%E8%84%9A%E6%9C%AC/img/%E5%85%B1%E4%BA%AB%E5%AD%97%E6%AE%B5.PNG",alt:"共享字段"}})]),t._v(" "),e("p",[t._v("意味着 "),e("strong",[t._v("可以")]),t._v("在"),e("code",[t._v("html")]),t._v("阶段指定。")]),t._v(" "),e("h3",{attrs:{id:"html5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML5")]),t._v(" "),e("p",[t._v("在表单上添加了很多字段API.")]),t._v(" "),e("ul",[e("li",[t._v("required")]),t._v(" "),e("li",[t._v("type = url or eamil")]),t._v(" "),e("li",[t._v("pattern - 输入验证的正则表达式，当有这个"),e("code",[t._v("pattern")]),t._v("的时候，可以通过"),e("code",[t._v("checkValdity()")]),t._v("来验证某个控件是否有效。")]),t._v(" "),e("li",[t._v("novalidate - 禁用验证")])]),t._v(" "),e("h2",{attrs:{id:"文本框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本框","aria-hidden":"true"}},[t._v("#")]),t._v(" 文本框")]),t._v(" "),e("p",[t._v("分为"),e("code",[t._v("input")]),t._v("和"),e("code",[t._v("textarea")]),t._v("两种模式。")]),t._v(" "),e("p",[t._v("可以选择"),e("code",[t._v("focus -> range")]),t._v("来选择文本字段，更多操作看书。")]),t._v(" "),e("h3",{attrs:{id:"富文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#富文本","aria-hidden":"true"}},[t._v("#")]),t._v(" 富文本")]),t._v(" "),e("p",[t._v("交互文本框。")]),t._v(" "),e("p",[t._v("无论是"),e("code",[t._v("iframe.designMode")]),t._v("还是"),e("code",[t._v("html5 contenteditable")]),t._v("方法，都是富文本。")]),t._v(" "),e("p",[t._v("默认自定义了一些方法，操作富文本。例如"),e("code",[t._v("document.execCommand()")]),t._v("来执行一些命令。(可能"),e("code",[t._v("document")]),e("strong",[t._v("可能可以")]),t._v("变为某个富文本的元素，因为文中操作iframe的例子是"),e("code",[t._v("iframe.docuemnt.execCommad")]),t._v(")")]),t._v(" "),e("h2",{attrs:{id:"选择框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择框","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择框")]),t._v(" "),e("p",[t._v("指的是:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("name"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ul",[e("li",[t._v("和表单一样，有默认属性，以及自定义方法，在某些操作上可以不使用"),e("code",[t._v("document dom")]),t._v("方法。")]),t._v(" "),e("li",[t._v("对于单选来说，设置"),e("code",[t._v("selected")]),t._v("为"),e("code",[t._v("true")]),t._v("会取消其他的选择")])])])}],!1,null,null,null);a.default=_.exports}}]);