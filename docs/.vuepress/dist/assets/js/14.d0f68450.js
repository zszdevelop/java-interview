(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1044:function(t,a,s){"use strict";s.r(a);var _=s(42),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"阿里云cdn使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#阿里云cdn使用"}},[t._v("#")]),t._v(" 阿里云CDN使用")]),t._v(" "),_("h2",{attrs:{id:"_1-背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),_("p",[t._v("App升级是项目必不可少的环节。在项目初期公司将升级文件都放在公司的文件服务器中，下载的人少，下载速度还有几百K的速度。")]),t._v(" "),_("p",[t._v("但随着公司业务的扩张，用户量的增加。公司内部的文件服务器带宽完全撑不住,下载速度只剩下10k左右，下载一个30M的apk需要1个小时")]),t._v(" "),_("blockquote",[_("p",[t._v("带宽是单位时间内某一点到另一点的“最高数据率”，带宽属于共享资源，例如我们app下载，随着同时下载的人数增加，带宽会被瓜分")])]),t._v(" "),_("p",[_("img",{attrs:{src:s(432),alt:"image-20191227201242056"}})]),t._v(" "),_("p",[t._v("所以我们考虑使用云来解决")]),t._v(" "),_("h2",{attrs:{id:"_2-云存储还是cdn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-云存储还是cdn"}},[t._v("#")]),t._v(" 2. 云存储还是CDN?")]),t._v(" "),_("p",[t._v("云存储和CDN 都能解决我们的问题。")]),t._v(" "),_("h3",{attrs:{id:"_2-1-云存储"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-云存储"}},[t._v("#")]),t._v(" 2.1 云存储")]),t._v(" "),_("p",[t._v("将我们的apk等要下载的文件上传到云存储中，我们从云存储中下载。")]),t._v(" "),_("p",[t._v("存储apk 不需要多大的存储空间，反而是下载apk需要非常大的下行流量。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("价格：")]),t._v(" "),_("p",[t._v("以下为阿里云存储的 "),_("code",[t._v("1TB")]),_("strong",[t._v("一个月的 下行流量价格505")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:s(433),alt:"2941577448356_.pic_hd"}})]),t._v(" "),_("h3",{attrs:{id:"_2-2-cdn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-cdn"}},[t._v("#")]),t._v(" 2.2 CDN")]),t._v(" "),_("p",[t._v("我们使用CDN的方式，对我们的文件服务器进行CDN 加速。")]),t._v(" "),_("blockquote",[_("p",[t._v("CDN 第一次加载的时候，会将文件保存在CDN 的缓存服务器中供就近的用户下载。因为"),_("strong",[t._v("有缓存可能会遇到缓存导致异常等风险")])])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("价格")]),t._v(" "),_("p",[t._v("以下为阿里CDN的 "),_("code",[t._v("1TB")]),_("strong",[t._v("一个月的CDN加速包,价格162")]),t._v("。与云存储的下行流量价格差了3倍")])])]),t._v(" "),_("p",[_("img",{attrs:{src:s(434),alt:"771577431970_.pic_hd"}})]),t._v(" "),_("h3",{attrs:{id:"_2-3-选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-选择"}},[t._v("#")]),t._v(" 2.3 选择")]),t._v(" "),_("ul",[_("li",[t._v("阿里云存储下行流量和CDN加速包价格相差了3倍")]),t._v(" "),_("li",[t._v("缓存问题，经过处理也是能解决的。可以逐步测试推进")])]),t._v(" "),_("p",[t._v("所以最终还是选CND加速。cdn未来还能做全站的加速")]),t._v(" "),_("h2",{attrs:{id:"_3-cdn使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-cdn使用"}},[t._v("#")]),t._v(" 3. CDN使用")]),t._v(" "),_("h3",{attrs:{id:"_3-1-购买cdn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-购买cdn"}},[t._v("#")]),t._v(" 3.1 购买CDN")]),t._v(" "),_("h3",{attrs:{id:"_3-2-配置要加速的cdn域名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-配置要加速的cdn域名"}},[t._v("#")]),t._v(" 3.2 配置要加速的CDN域名")]),t._v(" "),_("p",[_("img",{attrs:{src:s(435),alt:"image-20191228221208058"}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("我选择ip解析的比较多。直接映射到你对应的服务器，交由nginx 解析成对应的服务中")])]),t._v(" "),_("li",[_("p",[t._v("如果选择域名解析，切记不能选择同名的域名，否则会造成循环解析，无法回源。")])])]),t._v(" "),_("h3",{attrs:{id:"_3-3-配置域名解析下的cname"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-配置域名解析下的cname"}},[t._v("#")]),t._v(" 3.3 配置域名解析下的CNAME")]),t._v(" "),_("p",[t._v("我们点开详情可以看到cname的配置，将陪cname的值配置到域名解析中")]),t._v(" "),_("p",[_("img",{attrs:{src:s(436),alt:"image-20191227205527503"}})]),t._v(" "),_("p",[t._v("配置域名解析")]),t._v(" "),_("p",[_("img",{attrs:{src:s(437),alt:"image-20191227205654300"}})]),t._v(" "),_("h3",{attrs:{id:"_3-4-nginx-配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-nginx-配置"}},[t._v("#")]),t._v(" 3.4 nginx 配置")]),t._v(" "),_("p",[t._v("因为源站信息配置域名，所以在nginx 上要配置域名解析")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("server {\n    listen       80;\n    server_name  filecdn.xxx.com;\n\n    location / {\n        root   /home/ftpuser/file;\n        autoindex on;\n        add_header Access-Control-Allow-Origin *;\n        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';\n        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';\n\n        if ($request_method = 'OPTIONS') {\n            return 204;\n        }\n    }\n}\n")])])]),_("h2",{attrs:{id:"_4-查看是否使用到了cdn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看是否使用到了cdn"}},[t._v("#")]),t._v(" 4. 查看是否使用到了CDN")]),t._v(" "),_("p",[t._v("CDN配置之后大概几分钟就能生效")]),t._v(" "),_("ul",[_("li",[t._v("我们可以使用host 命令来查看是否使用到了CDN")])]),t._v(" "),_("p",[_("img",{attrs:{src:s(438),alt:"image-20191227210711647"}})]),t._v(" "),_("ul",[_("li",[t._v("使用dig命令来查看是否使用到了CDN")])]),t._v(" "),_("p",[_("img",{attrs:{src:s(439),alt:"image-20191227210828792"}})]),t._v(" "),_("h3",{attrs:{id:"实际下载速度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实际下载速度"}},[t._v("#")]),t._v(" 实际下载速度")]),t._v(" "),_("p",[t._v("同一个文件下载速度。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("使用CDN的为1M 每秒")])]),t._v(" "),_("li",[_("p",[t._v("未使用CDN的为100k每秒")])])])])}),[],!1,null,null,null);a.default=e.exports},432:function(t,a,s){t.exports=s.p+"assets/img/image-20191227201242056.77b7a3c8.png"},433:function(t,a,s){t.exports=s.p+"assets/img/2941577448356_.pic_hd.738a7e52.jpg"},434:function(t,a,s){t.exports=s.p+"assets/img/771577431970_.pic_hd.8748f7aa.jpg"},435:function(t,a,s){t.exports=s.p+"assets/img/image-20191228221208058.0efd1635.png"},436:function(t,a,s){t.exports=s.p+"assets/img/image-20191227205527503.0fa248f0.png"},437:function(t,a,s){t.exports=s.p+"assets/img/image-20191227205654300.d6efb802.png"},438:function(t,a,s){t.exports=s.p+"assets/img/image-20191227210711647.f191bf06.png"},439:function(t,a,s){t.exports=s.p+"assets/img/image-20191227210828792.dca32fac.png"}}]);