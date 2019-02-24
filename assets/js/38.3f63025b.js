(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{255:function(t,v,_){"use strict";_.r(v);var e=_(0),a=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"dom事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dom事件","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM事件")]),t._v(" "),_("blockquote",[_("p",[t._v("对ie总是要区别对待，默认讨论的是非IE")])]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#dom%E4%BA%8B%E4%BB%B6"}},[t._v("DOM事件")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6%E6%B5%81"}},[t._v("事件流")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#this%E6%8C%87%E5%90%91"}},[_("code",[t._v("this")]),t._v("指向")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BA%8B%E4%BB%B6"}},[t._v("不同的事件")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1"}},[t._v("事件对象")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E9%BB%98%E8%AE%A4%E4%BA%8B%E4%BB%B6"}},[t._v("什么是默认事件")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E5%8F%96%E6%B6%88%E5%86%92%E6%B3%A1%E5%92%8C%E9%98%BB%E6%AD%A2%E9%BB%98%E8%AE%A4%E4%BA%8B%E4%BB%B6"}},[t._v("取消冒泡和阻止默认事件")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E6%89%8B%E5%8A%A8%E8%A7%A6%E5%8F%91%E4%BA%8B%E4%BB%B6"}},[t._v("手动触发事件")])])])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B"}},[t._v("事件类型")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#html5"}},[t._v("HTML5")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E6%80%A7%E8%83%BD"}},[t._v("性能")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E6%A8%A1%E6%8B%9F%E4%BA%8B%E4%BB%B6"}},[t._v("模拟事件")])])])])]),t._v(" "),_("h2",{attrs:{id:"事件流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件流","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),_("p",[_("strong",[t._v("DOM2")])]),t._v(" "),_("p",[t._v("这里说的事件流是"),_("code",[t._v("DOM2")]),t._v("级事件流，事件触发顺序为 "),_("strong",[t._v("捕获->触发->冒泡")]),t._v("。")]),t._v(" "),_("p",[t._v("具体实现可见"),_("a",{attrs:{href:""}},[t._v("DOM事件定义")])]),t._v(" "),_("p",[_("strong",[t._v("DOM0")])]),t._v(" "),_("p",[t._v("就是通过"),_("code",[t._v("onclick")]),t._v("来实现的。")]),t._v(" "),_("p",[t._v("前者优势比较大，因为可以删除(和性能有关)，还可以在同一个事件上面绑定函数。")]),t._v(" "),_("p",[t._v("而后者只能实现一个。")]),t._v(" "),_("p",[t._v("如果在"),_("code",[t._v("document")]),t._v("绑定了"),_("code",[t._v("addEvent..")]),t._v("以及"),_("code",[t._v("onclick")]),t._v("，同时文档按钮"),_("code",[t._v("addEvent")])]),t._v(" "),_("p",[t._v("如果点击按钮，虽然也是点击在"),_("code",[t._v("document")]),t._v("上，但是"),_("code",[t._v("button")]),t._v("才是target。所以"),_("code",[t._v("document")]),t._v("的"),_("code",[t._v("dom2")]),t._v("是捕获阶段触发，"),_("code",[t._v("button")]),t._v("是触发阶段触发。")]),t._v(" "),_("p",[_("code",[t._v("document.onclick")]),t._v("是冒泡阶段。")]),t._v(" "),_("p",[_("strong",[t._v("说明onclick")]),t._v("默认是冒泡的。")]),t._v(" "),_("h3",{attrs:{id:"this指向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#this指向","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("this")]),t._v("指向")]),t._v(" "),_("p",[t._v("在"),_("code",[t._v("ie")]),t._v("和它浏览器上，"),_("code",[t._v("this")]),t._v("指向不同")]),t._v(" "),_("div",{staticClass:"language-JavaScript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ie attachEvent")]),t._v("\ndocument"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventLinster")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非ie上是document")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ie上是windows")]),t._v("\n")])])]),_("h3",{attrs:{id:"不同的事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不同的事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同的事件")]),t._v(" "),_("p",[t._v("不同"),_("code",[t._v("event")]),t._v("可能具有不同属性，处理表现结果不一样之外。")]),t._v(" "),_("p",[t._v("在是否支持冒泡，是否支持捕获上有所不同。")]),t._v(" "),_("h2",{attrs:{id:"事件对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件对象")]),t._v(" "),_("p",[t._v("指的是"),_("code",[t._v("function (event) {}")]),t._v("中的"),_("code",[t._v("event")]),t._v("。而 "),_("strong",[t._v("非IE浏览器的")]),_("code",[t._v("event")]),t._v("一般有以下属性：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH13-DOM%E4%BA%8B%E4%BB%B6/img/%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7.PNG",alt:"event属性"}})]),t._v(" "),_("p",[t._v("所以可以通过判断"),_("code",[t._v("event")]),t._v("属性来判断事件是否支持冒泡。")]),t._v(" "),_("ul",[_("li",[t._v("current or target - 区别在于，你可能点击的是"),_("code",[t._v("btn")]),t._v("。那么"),_("code",[t._v("target")]),t._v("就是"),_("code",[t._v("btn")]),t._v("，但是在传递到"),_("code",[t._v("btn")]),t._v("之前，可能被其他元素捕获了。那么此时就有"),_("code",[t._v("currenttarget")]),t._v("属性")]),t._v(" "),_("li",[t._v("通过查看"),_("code",[t._v("eventPhase")]),t._v("可以查看元素在哪个阶段触发了事件")])]),t._v(" "),_("p",[t._v("而"),_("code",[t._v("IE")]),t._v("上的事件属性为:")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH13-DOM%E4%BA%8B%E4%BB%B6/img/ie%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7.PNG",alt:"ie-event属性"}})]),t._v(" "),_("p",[_("strong",[t._v("QA")])]),t._v(" "),_("ol",[_("li",[t._v("有的时候可以看见"),_("code",[t._v("ev = event || window.event(传递过来的)")])])]),t._v(" "),_("p",[t._v("这是为了适配"),_("code",[t._v("ie")]),t._v("浏览器，因为"),_("code",[t._v("ie")]),t._v("事件是在"),_("code",[t._v("window")]),t._v("上的。")]),t._v(" "),_("h3",{attrs:{id:"什么是默认事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是默认事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是默认事件")]),t._v(" "),_("p",[t._v("比如点击链接会跳转，在有表单"),_("code",[t._v("submit")]),t._v("的时候"),_("code",[t._v("enter")]),t._v("按键会触发提交，等等。这些都是默认事件。")]),t._v(" "),_("p",[t._v("可以通过绑定事件的时候 "),_("strong",[t._v("阻止默认行为")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"取消冒泡和阻止默认事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#取消冒泡和阻止默认事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 取消冒泡和阻止默认事件")]),t._v(" "),_("ul",[_("li",[t._v("在ie上可以通过"),_("code",[t._v("window.event.cancelBubble = true")]),t._v("阻止冒泡，"),_("code",[t._v("window.event.returnValue = false")])]),t._v(" "),_("li",[t._v("而非ie就是"),_("code",[t._v("stop..")]),t._v("和"),_("code",[t._v("pre..")])])]),t._v(" "),_("h4",{attrs:{id:"手动触发事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#手动触发事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 手动触发事件")]),t._v(" "),_("h2",{attrs:{id:"事件类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件类型")]),t._v(" "),_("p",[t._v("这里详细说明了不同类型事件以及特性，比如"),_("code",[t._v("click mouse etc..")]),t._v("，判断事件是否支持可以通过以下方式：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/JS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/CH13-DOM%E4%BA%8B%E4%BB%B6/img/%E5%88%A4%E6%96%AD%E4%BA%8B%E4%BB%B6%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81.PNG",alt:"判断事件是否支持"}})]),t._v(" "),_("p",[t._v("这里判读是否支持"),_("code",[t._v("focus")]),t._v("事件，类似还有"),_("code",[t._v("mouse")]),t._v("等。")]),t._v(" "),_("ul",[_("li",[t._v("UI事件 - 比如说"),_("code",[t._v("load resize scroll select etc")]),t._v(" "),_("ul",[_("li",[t._v("load - 在页面一切都完毕之后加载，比如说"),_("code",[t._v("js css")]),t._v("等。还有一个"),_("code",[t._v("DOMContentLoaded")]),t._v("事件在页面"),_("code",[t._v("DOM")]),t._v("解析之后加载")]),t._v(" "),_("li",[t._v("unload - 离开页面的时候触发，一般用来清除内存")]),t._v(" "),_("li",[t._v("srcoll - 绑定在"),_("code",[t._v("windows")]),t._v("，但是是通过"),_("code",[t._v("document.documentElement.scrollTop || document.body.scrollTop")]),t._v("来监听这一变化的")])])]),t._v(" "),_("li",[t._v("click - 其中"),_("code",[t._v(".screenX")]),t._v("和"),_("code",[t._v("clientX")]),t._v("区别在于一个是屏幕的，一个是浏览器的。")]),t._v(" "),_("li",[t._v("键盘事件 - 通过"),_("code",[t._v("keycode")]),t._v("来判断按下了哪个按钮")]),t._v(" "),_("li",[t._v("变化事件 - 可以监听dom变化")])]),t._v(" "),_("p",[_("strong",[t._v("键盘上有alt shift等比较特殊的按键")]),t._v("，如果我们想要实现组合，比如说"),_("code",[t._v("alt+右键")]),t._v("。在"),_("code",[t._v("mouse")]),t._v("事件中可以通过"),_("code",[t._v("event.altKey")]),t._v("来同时监听"),_("code",[t._v("alt")]),t._v("而不需要额外绑定键盘事件。")]),t._v(" "),_("h3",{attrs:{id:"html5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html5","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML5")]),t._v(" "),_("ul",[_("li",[t._v("contextmeun - 菜单通过右键触发，默认都是有的。我们可以阻止这个默认事件，然后自己定义个菜单显示。")]),t._v(" "),_("li",[t._v("haschange - 监听"),_("code",[t._v("url")]),t._v("变化")]),t._v(" "),_("li",[t._v("以及一些 "),_("strong",[t._v("移动设备")]),t._v("的事件，例如设备加速度计，和各种方向。\n"),_("ul",[_("li",[t._v("还有一些触摸事件")]),t._v(" "),_("li",[t._v("一些手势事件 - 也就是多个手指的触发的事件")])])])]),t._v(" "),_("h3",{attrs:{id:"性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),_("p",[t._v("当我们删除节点的时候，没有删除节点上的事件，就有可能引起内存问题。")]),t._v(" "),_("p",[t._v("所以及时移除节点事件，"),_("code",[t._v("remove")]),t._v("或者"),_("code",[t._v(".onclick = null")])]),t._v(" "),_("h2",{attrs:{id:"模拟事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模拟事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 模拟事件")]),t._v(" "),_("p",[t._v("和发布订阅类似思想，我们可能想要自定义一个事件，可能和"),_("code",[t._v("dom")]),t._v("无关，需要自己手动触发的。")]),t._v(" "),_("p",[t._v("而这里提到的模拟事件，指的是 **自定义DOM事件，也就是原生支持的事件。**比如说自定义"),_("code",[t._v("click")]),t._v("事件。")]),t._v(" "),_("p",[t._v("这样的自定义方式对我们的意义不大，因为个人理解是针对浏览器厂商的。")])])}],!1,null,null,null);v.default=a.exports}}]);