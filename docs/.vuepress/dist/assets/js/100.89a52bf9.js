(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{192:function(t,v,_){"use strict";_.r(v);var a=_(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"1-%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#1-%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 网络编程")]),t._v(" "),_("blockquote",[_("p",[t._v("原生，没有用框架")])]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#1-%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B"}},[t._v("1. 网络编程")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#11-%E9%80%9F%E5%86%99"}},[t._v("1.1. 速写")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#12-tcp"}},[t._v("1.2. TCP")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#121-%E7%89%B9%E7%82%B9"}},[t._v("1.2.1. 特点")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#13-http"}},[t._v("1.3. HTTP")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#14-%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8"}},[t._v("1.4. 网络安全")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#141-ssl"}},[t._v("1.4.1. SSL")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#1411-%E6%94%BB%E5%87%BB"}},[t._v("1.4.1.1. 攻击")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#142-ca"}},[t._v("1.4.2. CA")])])])])])])]),t._v(" "),_("h2",{attrs:{id:"11-%E9%80%9F%E5%86%99"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#11-%E9%80%9F%E5%86%99","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1. 速写")]),t._v(" "),_("ul",[_("li",[t._v("tcp - net模块")]),t._v(" "),_("li",[t._v("udp - dgram")]),t._v(" "),_("li",[t._v("http - http")]),t._v(" "),_("li",[t._v("websocket - 文中说的不是很清楚，可能局限于但是还不是发展的很好")])]),t._v(" "),_("p",[t._v("都可以实现即是客户端又是服务器。但是前三个要想实现，一般需要开启两个脚本文件，对应服务器A和客户端A。")]),t._v(" "),_("p",[t._v("如果想要在同一个脚本文件中，那么其实对应的服务器A与客户端B(与服务器B对应)")]),t._v(" "),_("p",[t._v("但是Websocket可以在 "),_("strong",[t._v("同一个脚本文件，实现服务器A和客户端A")])]),t._v(" "),_("h2",{attrs:{id:"12-tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#12-tcp","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2. TCP")]),t._v(" "),_("p",[t._v("实现上和"),_("code",[t._v("UDP")]),t._v("有区别。"),_("strong",[t._v("事件监听函数")]),t._v("需要在"),_("code",[t._v("createServer")]),t._v("里面。")]),t._v(" "),_("p",[_("code",[t._v("telnet 地址")]),t._v("实现"),_("code",[t._v("tcp")]),t._v("请求。")]),t._v(" "),_("h3",{attrs:{id:"121-%E7%89%B9%E7%82%B9"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#121-%E7%89%B9%E7%82%B9","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2.1. 特点")]),t._v(" "),_("ul",[_("li",[t._v("socket.setNoDelay(true)设置之后可以发送比较小的的数据，因为小的数据，服务端处理方式是等到一定量发送。")])]),t._v(" "),_("h2",{attrs:{id:"13-http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#13-http","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3. HTTP")]),t._v(" "),_("p",[_("code",[t._v("curl -v 地址")]),t._v("模仿客户端http请求。")]),t._v(" "),_("p",[t._v("以TCP为基础建立的HTTP链接。**文中提到TCP对于每个链接都要建立线程，而HTTP建立连接之后，以每个请求为单位，不需要建立线程。**可以理解为是"),_("code",[t._v("TCP")]),t._v("设置"),_("code",[t._v("keepalive")]),t._v("时候的状态。")]),t._v(" "),_("p",[t._v("客户端发送较大数据的时候，会告知服务器。服务器通过之后才会进行传输。")]),t._v(" "),_("p",[t._v("注意，文中说到的客户端，服务端事件是针对的有"),_("code",[t._v("createServer")]),t._v("创建的"),_("code",[t._v("http")]),t._v("实体。不是指的是"),_("code",[t._v("req")]),t._v("事件。")]),t._v(" "),_("h2",{attrs:{id:"14-%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#14-%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4. 网络安全")]),t._v(" "),_("h3",{attrs:{id:"141-ssl"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#141-ssl","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4.1. SSL")]),t._v(" "),_("p",[t._v("设计思想在于，数据通过公钥加密，只能够通过私钥解密。")]),t._v(" "),_("p",[t._v("客户端发送数据使用服务器公钥，服务器接受之后可以使用自己的私钥解密。")]),t._v(" "),_("p",[t._v("服务器发送对应的是使用客户端私钥。")]),t._v(" "),_("p",[t._v("所以在第一次建立连接之后。会交换两者公钥。")]),t._v(" "),_("h4",{attrs:{id:"1411-%E6%94%BB%E5%87%BB"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#1411-%E6%94%BB%E5%87%BB","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4.1.1. 攻击")]),t._v(" "),_("p",[t._v("在客户端和服务器之间，加入一个第三方。对客户端伪装服务器，对服务器伪装客户端。会有网络安全问题。")]),t._v(" "),_("h3",{attrs:{id:"142-ca"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#142-ca","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4.2. CA")]),t._v(" "),_("p",[t._v("为了解决上面问题而存在的。第三方认证。")]),t._v(" "),_("p",[t._v("首先要了解 "),_("strong",[t._v("基本概念：")])]),t._v(" "),_("ul",[_("li",[t._v("CA证书")]),t._v(" "),_("li",[t._v("服务器证书 - 带有CA签名的证书，所以客户端可以通过CA来验证服务器证书")])]),t._v(" "),_("p",[t._v("CA证书一般存在浏览器或者硬件上，在连接的时候，请求服务器证书，然后通过本地CA证书验证。")]),t._v(" "),_("p",[t._v("还有一种情况是小服务器，没办法使用正规CA证书，只要自己生成CA证书，然后在连接的时候，请求服务器证书 "),_("strong",[t._v("以及CA证书")]),t._v("，然后通过CA证书验证。")])])}],!1,null,null,null);v.default=e.exports}}]);