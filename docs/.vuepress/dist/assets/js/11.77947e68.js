(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1267:function(a,t,s){"use strict";s.r(t);var e=s(42),i=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"spring-cloud应用整合skywalking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud应用整合skywalking"}},[a._v("#")]),a._v(" Spring Cloud应用整合Skywalking")]),a._v(" "),e("h2",{attrs:{id:"_1-下载skywalking的压缩包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载skywalking的压缩包"}},[a._v("#")]),a._v(" 1. 下载Skywalking的压缩包")]),a._v(" "),e("p",[a._v("我们到 http://skywalking.apache.org/downloads/ 地址下载Skywalking的压缩包")]),a._v(" "),e("p",[e("img",{attrs:{src:s(655),alt:"image-20200129180214340"}})]),a._v(" "),e("p",[a._v("下载解压后将agent文件。agent文件夹内容如下所示")]),a._v(" "),e("p",[e("img",{attrs:{src:s(656),alt:"image-20200129181049541"}})]),a._v(" "),e("h2",{attrs:{id:"_2-配置启动环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置启动环境"}},[a._v("#")]),a._v(" 2. 配置启动环境")]),a._v(" "),e("p",[a._v("在IDEA对应项目的启动配置中添加Skywalking agent探针配置")]),a._v(" "),e("p",[a._v("我们以chinahrss-auth为例")]),a._v(" "),e("p",[a._v("点击IDEA的Edit Configurations...，然后选择Environment -> VM Options，添加如下脚本：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-javaagent:/Users/zsz/Project/software/skywalking/apache-skywalking-apm-bin/agent/skywalking-agent.jar\n-Dskywalking.agent.service_name=chinahrss-auth\n-Dskywalking.collector.backend_service=120.79.200.111:11800\n")])])]),e("p",[e("img",{attrs:{src:s(657),alt:"image-20200129181547137"}})]),a._v(" "),e("ul",[e("li",[e("p",[a._v("-javaagent:/Users/zsz/Project/software/skywalking/apache-skywalking-apm-bin/agent/skywalking-agent.jar")]),a._v(" "),e("p",[a._v("指定了探针应用agent的地址")])]),a._v(" "),e("li",[e("p",[a._v("-Dskywalking.agent.service_name=chinahrss-auth")]),a._v(" "),e("p",[a._v("指定了被手机的应用名称为chinahrss-auth")])]),a._v(" "),e("li",[e("p",[a._v("-Dskywalking.collector.backend_service=120.79.200.111:11800")]),a._v(" "),e("p",[a._v("指定了收集器的地址，即刚刚我们使用Docker Compose构建的skywalking-oap。")])])]),a._v(" "),e("h2",{attrs:{id:"_3-查看效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看效果"}},[a._v("#")]),a._v(" 3. 查看效果")]),a._v(" "),e("h3",{attrs:{id:"_3-1-主页跟踪效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-主页跟踪效果"}},[a._v("#")]),a._v(" 3.1 主页跟踪效果")]),a._v(" "),e("p",[e("img",{attrs:{src:s(658),alt:"image-20200129185146288"}})]),a._v(" "),e("h3",{attrs:{id:"_3-2-拓扑图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-拓扑图"}},[a._v("#")]),a._v(" 3.2 拓扑图")]),a._v(" "),e("p",[e("img",{attrs:{src:s(659),alt:"image-20200129185302547"}})]),a._v(" "),e("h3",{attrs:{id:"_3-3-请求链路跟踪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-请求链路跟踪"}},[a._v("#")]),a._v(" 3.3 请求链路跟踪")]),a._v(" "),e("p",[e("img",{attrs:{src:s(660),alt:"image-20200129185500824"}})]),a._v(" "),e("p",[a._v("可以清晰的看到完整的请求调用链。查看一笔失败的调用，可以看到失败的具体异常堆栈：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(661),alt:"image-20200129185918941"}})]),a._v(" "),e("h3",{attrs:{id:"_3-4-仪表盘的service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-仪表盘的service"}},[a._v("#")]),a._v(" 3.4 仪表盘的Service")]),a._v(" "),e("p",[a._v("点击仪表盘页面的Service，可以看到一些服务相关的信息，如平均响应时间、平均吞吐量、平均时延统计，如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(662),alt:"image-20200129190012976"}})]),a._v(" "),e("h3",{attrs:{id:"_3-5-仪表盘的endpoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-仪表盘的endpoint"}},[a._v("#")]),a._v(" 3.5 仪表盘的Endpoint")]),a._v(" "),e("p",[a._v("点击仪表盘页面的Endpoint，可以看到一些端点相关的信息，如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(663),alt:"image-20200129190125838"}})]),a._v(" "),e("h3",{attrs:{id:"_3-6-仪表盘的instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-仪表盘的instance"}},[a._v("#")]),a._v(" 3.6 仪表盘的Instance")]),a._v(" "),e("p",[a._v("点击仪表盘页面的Instance，可以看到一些JVM相关的信息，如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(664),alt:"image-20200129190255411"}})])])}),[],!1,null,null,null);t.default=i.exports},655:function(a,t,s){a.exports=s.p+"assets/img/image-20200129180214340.b83ae6ab.png"},656:function(a,t,s){a.exports=s.p+"assets/img/image-20200129181049541.d028d1c1.png"},657:function(a,t,s){a.exports=s.p+"assets/img/image-20200129181547137.b4e8a730.png"},658:function(a,t,s){a.exports=s.p+"assets/img/image-20200129185146288.ed2e7a7f.png"},659:function(a,t,s){a.exports=s.p+"assets/img/image-20200129185302547.72164a48.png"},660:function(a,t,s){a.exports=s.p+"assets/img/image-20200129185500824.316ac0dd.png"},661:function(a,t,s){a.exports=s.p+"assets/img/image-20200129185918941.74cc9604.png"},662:function(a,t,s){a.exports=s.p+"assets/img/image-20200129190012976.1a9aa5f8.png"},663:function(a,t,s){a.exports=s.p+"assets/img/image-20200129190125838.8a902cc3.png"},664:function(a,t,s){a.exports=s.p+"assets/img/image-20200129190255411.147aca22.png"}}]);