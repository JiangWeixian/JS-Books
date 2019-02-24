(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{193:function(r,e,t){"use strict";t.r(e);var a=t(0),f=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"%E7%90%86%E8%A7%A3buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%90%86%E8%A7%A3buffer","aria-hidden":"true"}},[r._v("#")]),r._v(" 理解Buffer")]),r._v(" "),t("h2",{attrs:{id:"buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer","aria-hidden":"true"}},[r._v("#")]),r._v(" Buffer")]),r._v(" "),t("ul",[t("li",[r._v("打印出来的是16进制的两位数，代表"),t("code",[r._v("0~255")])]),r._v(" "),t("li",[r._v("每一位代表一个字节，分配数据也是通过字节数分配")])]),r._v(" "),t("h3",{attrs:{id:"buffer2string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer2string","aria-hidden":"true"}},[r._v("#")]),r._v(" Buffer2String")]),r._v(" "),t("ul",[t("li",[r._v("toString() - 需要指定编码格式，并不是所有编码格式都是可以的。"),t("code",[r._v("buffer")]),r._v("的相加隐含了"),t("code",[r._v("toString")]),r._v("操作。")]),r._v(" "),t("li",[r._v("对于中文文件章中文读取，设置"),t("code",[r._v("stream")]),r._v("编码格式可以避免乱码。**乱码原因在于读取stream-buffer使用了+，来进行字符串拼接。**然而每个中文字节数和英文不同，每次都出来的"),t("code",[r._v("buffer")]),r._v("不能够形成全部的中文字符串。文中使用"),t("code",[r._v("iconv")]),r._v("进行"),t("code",[r._v("buffer")]),r._v("的转移。")])]),r._v(" "),t("h3",{attrs:{id:"string2buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string2buffer","aria-hidden":"true"}},[r._v("#")]),r._v(" String2Buffer")]),r._v(" "),t("p",[r._v("new Buffer(str)")]),r._v(" "),t("h2",{attrs:{id:"buffer%E6%80%A7%E8%83%BD"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer%E6%80%A7%E8%83%BD","aria-hidden":"true"}},[r._v("#")]),r._v(" Buffer性能")]),r._v(" "),t("p",[t("strong",[r._v("网络传输")])]),r._v(" "),t("p",[r._v("网络传输的是"),t("code",[r._v("buffer")]),r._v("，事先转换为"),t("code",[r._v("buffer")]),r._v("可以提高性能。")]),r._v(" "),t("p",[t("strong",[r._v("文件读取")])]),r._v(" "),t("p",[r._v("可以设置每次读取的"),t("code",[r._v("buffer")]),r._v("长度，越长读取越快。")])])}],!1,null,null,null);e.default=f.exports}}]);