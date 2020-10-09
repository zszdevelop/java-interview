(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1304:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"单点登录sso"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单点登录sso"}},[t._v("#")]),t._v(" 单点登录SSO")]),t._v(" "),n("p",[n("strong",[t._v("在多个应用系统中，只需要登录一次，就可以访问其他相互信任的应用系统")])]),t._v(" "),n("h2",{attrs:{id:"_1-什么是单点登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是单点登录"}},[t._v("#")]),t._v(" 1. 什么是单点登录？")]),t._v(" "),n("p",[t._v("单点登录的英文名叫做：Single Sign On（简称SSO）")]),t._v(" "),n("p",[t._v("在初学/以前的时候，一般我们就"),n("strong",[t._v("单系统")]),t._v("，所有的功能都在同一个系统上")]),t._v(" "),n("p",[n("img",{attrs:{src:a(729),alt:"image-20200310224320499"}})]),t._v(" "),n("p",[t._v("后来，我们为了"),n("strong",[t._v("合理利用资源和降低耦合性")]),t._v("，于是把单系统"),n("strong",[t._v("拆分")]),t._v("成多个子系统")]),t._v(" "),n("h2",{attrs:{id:"_2-案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-案例"}},[t._v("#")]),t._v(" 2. 案例")]),t._v(" "),n("p",[t._v("比如阿里系的淘宝和天猫，很明显地我们可以知道这是两个系统，但是你在使用的时候，登录了天猫，淘宝也会自动登录")]),t._v(" "),n("p",[n("img",{attrs:{src:a(730),alt:"image-20200310224716521"}})]),t._v(" "),n("p",[t._v("简单来说，单点登录就是在多个系统中，用户只需要一次登录，各个系统即可感知该用户已经登录")]),t._v(" "),n("h2",{attrs:{id:"_3-多系统登录的问题与解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-多系统登录的问题与解决"}},[t._v("#")]),t._v(" 3. 多系统登录的问题与解决")]),t._v(" "),n("h3",{attrs:{id:"_3-1-session不共享问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-session不共享问题"}},[t._v("#")]),t._v(" 3.1 Session不共享问题")]),t._v(" "),n("p",[t._v("单系统登录功能主要是用Session保存用户信息来实现的，但我们清楚的事：多系统既可能有多个Tomcat，而Session是依赖当前系统的Tomcat，所以系统A的Session 和系统B的Session是"),n("strong",[t._v("不共享的")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(731),alt:"image-20200310225941897"}})]),t._v(" "),n("p",[t._v("解决系统之间Session不共享问题有以下几种方案：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Tomcat 集群Session全局复制（集群内每个tomcat的session完全同步）")]),t._v(" "),n("p",[t._v("影响集群的性能，不建议")])]),t._v(" "),n("li",[n("p",[t._v("根据请求的IP进行Hash映射到对应的机器上（这就相当于请求的IP一直会访问同一个服务器）")]),t._v(" "),n("p",[t._v("如果服务器宕机了，会丢失了一大部分Session的数据，不建议")])]),t._v(" "),n("li",[n("p",[t._v("把Session数据放在Redis中，（使用Redis模式Session）"),n("strong",[t._v("建议")])])])]),t._v(" "),n("p",[t._v("我们可以把登录功能 **单独抽取 **出来，做成一个子系统")]),t._v(" "),n("p",[n("img",{attrs:{src:a(732),alt:"image-20200310230508580"}})]),t._v(" "),n("p",[t._v("SSO（登录系统）的逻辑如下：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录功能(SSO单独的服务)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaotaoResult")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据用户名查询用户信息")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbUserExample")]),t._v(" example "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbUserExample")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Criteria")]),t._v(" criteria "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCriteria")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tcriteria"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("andUsernameEqualTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbUser")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userMapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectByExample")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaotaoResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户不存在"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//核对密码")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbUser")]),t._v(" user "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DigestUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5DigestAsHex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBytes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPassword")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaotaoResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"密码错误"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//登录成功，把用户信息写入redis")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//生成一个用户token")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" token "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UUID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomUUID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tjedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("USER_TOKEN_KEY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("objectToJson")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置session过期时间")]),t._v("\n\tjedisCluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("expire")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("USER_TOKEN_KEY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SESSION_EXPIRE_TIME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaotaoResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ok")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),n("p",[t._v("其他子系统登录时，"),n("strong",[t._v("请求SSO（登录系统）进行登录，将返回的token写到Cookie中")]),t._v("，下次访问时则把Cookie带上：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaotaoResult")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//请求参数")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tparam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tparam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//登录处理")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" stringResult "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClientUtil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("doPost")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("REGISTER_USER_URL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" USER_LOGIN_URL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaotaoResult")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaotaoResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stringResult"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//登录出错")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStatus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//登录成功后把取token信息，并写入cookie")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" token "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//写入cookie")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CookieUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TT_TOKEN"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回成功")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("总结：")]),t._v(" "),n("ul",[n("li",[t._v("SSO 系统生成一个token，并将用户信息存到Redis中，并设置过期时间")]),t._v(" "),n("li",[t._v("其他系统请求SSO系统进行登录，得到SSO返回token，写到Cookie中")]),t._v(" "),n("li",[t._v("每次请求时，Cookie都会带上，拦截得到token，判断是否已经登录")])]),t._v(" "),n("p",[t._v("到这里，其实我们会发现其实就两个变化")]),t._v(" "),n("ul",[n("li",[t._v("将登录功能抽取为一个系统（SSO）,其他系统请求SSO进行登录")]),t._v(" "),n("li",[t._v("本来将用户信息存在Session，现在将用户信息存到Redis")])]),t._v(" "),n("h3",{attrs:{id:"_3-2-cookie-跨域问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-cookie-跨域问题"}},[t._v("#")]),t._v(" 3.2 Cookie 跨域问题")]),t._v(" "),n("p",[t._v("上面我们解决了Session不能共享的问题，其实还有另外一个问题。"),n("strong",[t._v("Cookie是不能跨域的")])]),t._v(" "),n("p",[t._v("比如说，我们请求``时，浏览器会自动把"),n("code",[t._v("google.com")]),t._v("的Cookie带过去给"),n("code",[t._v("google")]),t._v("的服务器，而不会把"),n("code",[t._v("www.baidu.com")]),t._v("的Cookie带过去给"),n("code",[t._v("google")]),t._v("的服务器。")]),t._v(" "),n("p",[t._v("这就意味着，"),n("strong",[t._v("由于域名不同")]),t._v("，用户向系统A登录后，系统A返回给浏览器的Cookie，用户再请求系统B的时候不会将系统A的Cookie带过去。")]),t._v(" "),n("p",[t._v("针对Cookie存在跨域问题，有几种解决方案：")]),t._v(" "),n("ol",[n("li",[t._v("服务端将Cookie写到客户端后，客户端对Cookie进行解析，将Token解析出来，此后请求都把这个Token带上就行了")]),t._v(" "),n("li",[t._v("多个域名共享Cookie，在写到客户端的时候设置Cookie的domain")]),t._v(" "),n("li",[t._v("将Token保存在SessionStroage中（不依赖Cookie就没有跨域的问题了）")])]),t._v(" "),n("p",[t._v("到这里就已经实现单点登录了")]),t._v(" "),n("h3",{attrs:{id:"_3-3-cas原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-cas原理"}},[t._v("#")]),t._v(" 3.3 CAS原理")]),t._v(" "),n("blockquote",[n("p",[t._v("SSO 仅仅是一种架构，一种设计，而 CAS 则是实现 SSO 的一种手段。两者是抽象与具体的关系。当然，除了 CAS 之外，实现 SSO 还有其他手段，比如简单的 cookie。")])]),t._v(" "),n("p",[t._v("说到单点登录，就肯定会见到这个名词：CAS  （Central Authentication Service），下面说说CAS是怎么搞的。")]),t._v(" "),n("p",[n("strong",[t._v("如果已经将登录单独抽取成系统出来")]),t._v("，我们还能这样玩。现在我们有两个系统，分别是"),n("code",[t._v("www.java3y.com")]),t._v("和"),n("code",[t._v("www.java4y.com")]),t._v("，一个SSO"),n("code",[t._v("www.sso.com")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(733),alt:"image-20200310231640764"}})]),t._v(" "),n("p",[t._v("首先，用户想要访问系统A"),n("code",[t._v("www.java3y.com")]),t._v(" 受限的资源（比如说购物车功能，购物车功能需要登录后才能访问），系统A"),n("code",[t._v("www.java3y.com")]),t._v("发现用户并没有登录，于是"),n("strong",[t._v("重定向到sso认证中心，并将自己的地址作为参数")]),t._v("。请求的地址如下：")]),t._v(" "),n("ul",[n("li",[t._v("www.sso.com?service=www.java3y.com")])]),t._v(" "),n("p",[t._v("sso认证中心发现用户未登录，将用户引导至登录页面，用户进行输入用户名和密码进行登录，用户与认证中心建立"),n("strong",[t._v("全局会话（生成一份Token，写到Cookie中，保存在浏览器上）")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(734),alt:"image-20200310232134025"}})]),t._v(" "),n("p",[t._v("随后，认证中心 "),n("strong",[t._v("重定向回系统A")]),t._v("，并把Token携带过去给系统A，重定向的地址如下")]),t._v(" "),n("ul",[n("li",[t._v("www.java3y.com?token=xxxxxxx")])]),t._v(" "),n("p",[t._v("接着，系统A去SSO 认证中心验证这个Token是否正确，如果正确，则系统A和用户建立局部会话（"),n("strong",[t._v("创建Session")]),t._v("）。到此，系统A和用户已经是登录状态了。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(735),alt:"image-20200310232354347"}})]),t._v(" "),n("p",[t._v("此时，用户想要访问系统B"),n("code",[t._v("www.java4y.com")]),t._v("受限的资源(比如说订单功能，订单功能需要登录后才能访问)，系统B"),n("code",[t._v("www.java4y.com")]),t._v("发现用户并没有登录，于是"),n("strong",[t._v("重定向到sso认证中心，并将自己的地址作为参数")]),t._v("。请求的地址如下：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("www.sso.com?service=www.java4y.com")])])]),t._v(" "),n("p",[t._v("注意，因为之前用户与认证中心"),n("code",[t._v("www.sso.com")]),t._v("已经建立了全局会话（当时已经把Cookie保存到浏览器上了），所以这次系统B"),n("strong",[t._v("重定向")]),t._v("到认证中心"),n("code",[t._v("www.sso.com")]),t._v("是可以带上Cookie的。")]),t._v(" "),n("p",[t._v("认证中心"),n("strong",[t._v("根据带过来的Cookie")]),t._v("发现已经与用户建立了全局会话了，认证中心"),n("strong",[t._v("重定向回系统B")]),t._v("，并把Token携带过去给系统B，重定向的地址如下：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("www.java4y.com?token=xxxxxxx")])])]),t._v(" "),n("p",[t._v("接着，系统B去sso认证中心验证这个Token是否正确，如果正确，则系统B和用户建立局部会话（"),n("strong",[t._v("创建Session")]),t._v("）。到此，系统B和用户已经是登录状态了。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(736),alt:"image-20200310232536824"}})]),t._v(" "),n("p",[t._v("看到这里，其实SSO认证中心就类似一个"),n("strong",[t._v("中转站")]),t._v("。")]),t._v(" "),n("blockquote",[n("p",[t._v("CAS原理")]),t._v(" "),n("ol",[n("li",[t._v("登录网址A的时候，发现用户并没有登录，重定向到SSO认证中心，并将自己的地址作为参数")])]),t._v(" "),n("p",[t._v("www.sso.com?service=www.a.com")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[t._v("认证中心发现未登录，引导登录页登录，建立全局会话（生成token，写到cookie）")])]),t._v(" "),n("li",[n("p",[t._v("重定向回系统A，把token带到系统A")])])]),t._v(" "),n("p",[t._v("www.a.com?token=xxxxxxx")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[t._v("系统A去SSO认证中心，验证token是否正确。正确建立局部会话（创建session），系统A和用户就是登录状态")])]),t._v(" "),n("li",[n("p",[t._v("系统B访问受限资源，重定向到SSO认证中心")])])]),t._v(" "),n("p",[t._v("www.sso.com?service=www.b.com")]),t._v(" "),n("p",[t._v("因为之前用户与认证中心以及建立全局会话（cookie保存到浏览器），所以这次"),n("strong",[t._v("重定向可以带上cookie")])]),t._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[t._v("认证中心根据带过来的cookie发现以及建立会话，重定向到B,并把token返回系统B")])]),t._v(" "),n("p",[t._v("www.b.com?token=xxxxxxx")]),t._v(" "),n("ol",{attrs:{start:"7"}},[n("li",[t._v("系统B去sso认证中心验证这个token是否正确。正确建立局部会话（创建session）到此，系统B和用户已经是登录状态了。")])])]),t._v(" "),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/5cdd42f9518825693f1ebf8d",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是单点登录(SSO)"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports},729:function(t,s,a){t.exports=a.p+"assets/img/image-20200310224320499.99024ef5.png"},730:function(t,s,a){t.exports=a.p+"assets/img/image-20200310224716521.78f16799.png"},731:function(t,s,a){t.exports=a.p+"assets/img/image-20200310225941897.33ed1732.png"},732:function(t,s,a){t.exports=a.p+"assets/img/image-20200310230508580.f0260fcf.png"},733:function(t,s,a){t.exports=a.p+"assets/img/image-20200310231640764.a2691d92.png"},734:function(t,s,a){t.exports=a.p+"assets/img/image-20200310232134025.0815c794.png"},735:function(t,s,a){t.exports=a.p+"assets/img/image-20200310232354347.f3516aff.png"},736:function(t,s,a){t.exports=a.p+"assets/img/image-20200310232536824.a52a9d08.png"}}]);