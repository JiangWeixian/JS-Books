(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{261:function(a,e,o){"use strict";o.r(e);var _=o(0),v=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"%E7%A6%BB%E7%BA%BF%E5%BA%94%E7%94%A8%E5%92%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#%E7%A6%BB%E7%BA%BF%E5%BA%94%E7%94%A8%E5%92%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98","aria-hidden":"true"}},[a._v("#")]),a._v(" 离线应用和客户端缓存")]),a._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#%E7%A6%BB%E7%BA%BF%E5%BA%94%E7%94%A8%E5%92%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98"}},[a._v("离线应用和客户端缓存")]),a._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#%E7%A6%BB%E7%BA%BF%E7%8A%B6%E6%80%81"}},[a._v("离线状态")])]),a._v(" "),o("li",[o("a",{attrs:{href:"#%E5%BA%94%E7%94%A8%E7%BC%93%E5%AD%98"}},[a._v("应用缓存")])]),a._v(" "),o("li",[o("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8"}},[a._v("数据存储")]),a._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#cookiesessionlocalstoragesessionstorage"}},[a._v("cookie&session&localStorage&sessionStorage")])]),a._v(" "),o("li",[o("a",{attrs:{href:"#indexdb"}},[a._v("indexDB")])])])])])])]),a._v(" "),o("h2",{attrs:{id:"%E7%A6%BB%E7%BA%BF%E7%8A%B6%E6%80%81"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#%E7%A6%BB%E7%BA%BF%E7%8A%B6%E6%80%81","aria-hidden":"true"}},[a._v("#")]),a._v(" 离线状态")]),a._v(" "),o("p",[o("code",[a._v("navigator.online")]),a._v("检测是否在线。")]),a._v(" "),o("h2",{attrs:{id:"%E5%BA%94%E7%94%A8%E7%BC%93%E5%AD%98"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#%E5%BA%94%E7%94%A8%E7%BC%93%E5%AD%98","aria-hidden":"true"}},[a._v("#")]),a._v(" 应用缓存")]),a._v(" "),o("p",[o("a",{attrs:{href:""}},[a._v("xx.manifest")])]),a._v(" "),o("p",[a._v("通过修改"),o("code",[a._v("manifest")]),a._v("或者通过"),o("code",[a._v("api")]),a._v("来实现更新。")]),a._v(" "),o("ul",[o("li",[a._v("修改"),o("code",[a._v("manifest")]),a._v("触发"),o("code",[a._v("updateready")]),a._v("事件，然后手动调用代码"),o("code",[a._v("applicationCache.swapCache()")]),a._v("更新")]),a._v(" "),o("li",[a._v("可人工干预使用"),o("code",[a._v("applicationCache.update()")]),a._v("跳过检查过程更新")])]),a._v(" "),o("h2",{attrs:{id:"%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据存储")]),a._v(" "),o("h3",{attrs:{id:"cookiesessionlocalstoragesessionstorage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookiesessionlocalstoragesessionstorage","aria-hidden":"true"}},[a._v("#")]),a._v(" cookie&session&localStorage&sessionStorage")]),a._v(" "),o("p",[a._v("四种方式初步解析见"),o("a",{attrs:{href:""}},[a._v("地址")])]),a._v(" "),o("p",[o("strong",[a._v("这里再详细说明以下cookie使用规则！")]),o("code",[a._v("cookie")]),a._v("并不是一个很直观的使用方式，很不人性。"),o("code",[a._v("cookie")]),a._v("的格式如下：")]),a._v(" "),o("div",{staticClass:"language-JavaScript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[a._v("name"),o("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("value"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("expires"),o("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("expiration_time"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("path"),o("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("domain_path"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("domain"),o("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("domain_name"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("secure\n")])])]),o("p",[a._v("键值之间使用"),o("code",[a._v("=")]),a._v("，不同数据之间使用"),o("code",[a._v(";")])]),a._v(" "),o("ul",[o("li",[a._v("cookie的名字通过"),o("code",[a._v("name=value")]),a._v("指定，**其中"),o("code",[a._v("name")]),a._v("部分可以叫不同的名字，"),o("code",[a._v("value")]),a._v("部分可以很长，用来存储数据。**后面的字段是默认提供的，"),o("strong",[a._v("除了name是必须之外，后面字段都是可选的")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("expires")]),a._v("是到期时间")]),a._v(" "),o("li",[o("code",[a._v("path=domain_path;domain=domain_name")]),a._v(" - "),o("strong",[a._v("用来区分不同的"),o("code",[a._v("coookie")])])]),a._v(" "),o("li",[o("code",[a._v("secure")]),a._v("是安全认证，以怎样的方式发送cookie")])])])]),a._v(" "),o("p",[o("strong",[a._v("保存、修改、删除的方式：")])]),a._v(" "),o("p",[a._v("在使用的时候，你需要以上面的格式 "),o("strong",[a._v("拼接字符串")]),a._v("。"),o("code",[a._v("name or value")]),a._v("都是要结果"),o("code",[a._v("url")]),a._v("编码(就是编码"),o("code",[a._v("url")]),a._v("的那个函数)。最后数据变为下面的"),o("code",[a._v("xxx")])]),a._v(" "),o("div",{staticClass:"language-JavaScript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[a._v("document"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cookie"),o("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxx\ndocument"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cookie"),o("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxx\ndocument"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cookie"),o("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxx\n")])])]),o("p",[a._v("由于"),o("code",[a._v("cookie")]),a._v("通过"),o("code",[a._v("path=domain_path;domain=domain_name")]),a._v("区分"),o("code",[a._v("cookie")]),a._v("，那么就可以得到结论：")]),a._v(" "),o("ol",[o("li",[a._v("如果修改 "),o("strong",[a._v("同一个")]),o("code",[a._v("cookie")]),a._v(" - "),o("code",[a._v("path=domain_path;domain=domain_name")]),a._v("字段相同，其他字段不同")]),a._v(" "),o("li",[a._v("如果删除 - 就是设置"),o("code",[a._v("expires")])]),a._v(" "),o("li",[a._v("如果设置新的"),o("code",[a._v("cookie")]),a._v(" - "),o("code",[a._v("path=domain_path;domain=domain_name")]),a._v("不同就行")])]),a._v(" "),o("p",[o("strong",[a._v("获取的方式")])]),a._v(" "),o("p",[a._v("首先要知道 "),o("strong",[a._v("浏览器是如何保存"),o("code",[a._v("cookie")])]),a._v("，其实不同的"),o("code",[a._v("cookie")]),a._v("是全部拼接为字符串了。至少如果你通过"),o("code",[a._v("document.cookie")]),a._v("来获取"),o("code",[a._v("cookie")]),a._v("的时候，返回的结果是这样的。")]),a._v(" "),o("p",[a._v("浏览器会匹配"),o("code",[a._v("path=domain_path;domain=domain_name")]),a._v("地址如"),o("code",[a._v("www.baidu.com/xxx")]),a._v("来自动发送"),o("code",[a._v("cookie")]),a._v("。")]),a._v(" "),o("p",[o("strong",[a._v("如果我们想要获取不同"),o("code",[a._v("cookie")])])]),a._v(" "),o("p",[a._v("也就是通过"),o("code",[a._v("name")]),a._v("来查找"),o("code",[a._v("cookie")]),a._v("，例如"),o("code",[a._v("book=xxx")]),a._v("和"),o("code",[a._v("job=yyy")]),a._v("就是通过查找"),o("code",[a._v("book or job")]),a._v("。然后来找到对应"),o("code",[a._v("value")]),a._v("。")]),a._v(" "),o("h3",{attrs:{id:"indexdb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#indexdb","aria-hidden":"true"}},[a._v("#")]),a._v(" indexDB")]),a._v(" "),o("p",[a._v("一种永久离线存储方案，"),o("strong",[a._v("更大量的存储")]),a._v("。")]),a._v(" "),o("p",[a._v("可以从浏览器控制台"),o("code",[a._v("console")]),a._v("后台看到一个"),o("code",[a._v("indexDB")]),a._v("数据库。可以理解为建立在 **浏览器的数据库。**比前面几种数据存储方式，可以实现更为复杂的数据存储。")]),a._v(" "),o("p",[a._v("我没见到过实际提到的 "),o("strong",[a._v("使用实例。")])]),a._v(" "),o("p",[a._v("文中给出了如何操作的教程。")])])}],!1,null,null,null);e.default=v.exports}}]);