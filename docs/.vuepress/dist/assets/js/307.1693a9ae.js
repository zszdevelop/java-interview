(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{1298:function(t,a,e){"use strict";e.r(a);var n=e(42),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spring-boot-actuator监控应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-actuator监控应用"}},[t._v("#")]),t._v(" Spring Boot Actuator监控应用")]),t._v(" "),e("h2",{attrs:{id:"_1-背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),e("p",[t._v("微服务的特定决定了"),e("strong",[t._v("功能模块的部署是分布式")]),t._v("的，大部分功能模块都是运行在不同的机器上，"),e("strong",[t._v("彼此通过服务调用进行交互")]),t._v("，前后台的业务流会经过很多个微服务的处理和传递，出现了异常如何快速定位是哪个环节出现了问题？")]),t._v(" "),e("h2",{attrs:{id:"_2-actuator监控-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-actuator监控-简介"}},[t._v("#")]),t._v(" 2. Actuator监控 简介")]),t._v(" "),e("p",[t._v("Spring Boot 使用“习惯有配置的理念”，采用包扫描和自动化配置的机制来加载依赖jar 中的Spring bean，不需要任何Xml配置，就可以实现Spring 的所有配置。虽然这样做能让我们的代码变得非常间接，但是整个应用的实例创建和依赖关系等信息都被离散到各个配置类的注解是哪个，这使得"),e("strong",[t._v("我们分析整个应用中资源和实例的各种关系变得非常的困难")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("Actuator 是 Spring Boot 提供的对应用系统的自省和监控的集成功能")]),t._v("，可以查看应用配置的详细信息、例如自动化配置信息、创建的Spring beans以及一些环境属性等")]),t._v(" "),e("h3",{attrs:{id:"_3-actuator-的-rest-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-actuator-的-rest-接口"}},[t._v("#")]),t._v(" 3. Actuator 的 REST 接口")]),t._v(" "),e("h3",{attrs:{id:"_3-1-监控分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-监控分类"}},[t._v("#")]),t._v(" 3.1 监控分类")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("原生端点")])]),t._v(" "),e("li",[e("p",[t._v("用户自定义端点")]),t._v(" "),e("p",[t._v("自定义端点主要是指扩展性、用户可以根据自己的实际应用，"),e("strong",[t._v("定义一些比较关心的指标，在运行期进行监控")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-2-原生端点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-原生端点"}},[t._v("#")]),t._v(" 3.2 原生端点")]),t._v(" "),e("p",[t._v("原生端点是应用程序里提供众多Web接口，通过他们了解应用程序运行时的内部情况。原生端点又可以分成三类：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("应用配置类：")]),t._v(" "),e("p",[t._v("可以查看应用在运行期的静态信息，例如自动配置信息，加载的Springbean信息、yml文件的配置信息、环境信息、请求映射信息")])]),t._v(" "),e("li",[e("p",[t._v("度量指标类：")]),t._v(" "),e("p",[t._v("需要是运行期的动态信息，例如堆栈、请求链、一些健康指标、metrics信息等")])]),t._v(" "),e("li",[e("p",[t._v("操作控制类")]),t._v(" "),e("p",[t._v("主要是指shutdown，用户可以发送一个请求将应用的监控功能关系")])])]),t._v(" "),e("h2",{attrs:{id:"_3-3-actuator提供的13个接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-actuator提供的13个接口"}},[t._v("#")]),t._v(" 3.3 Actuator提供的13个接口")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("HTTP 方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("路径")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/auditevents")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示应用暴露的审计事件 (比如认证进入、订单失败)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/beans")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("描述应用程序上下文里全部的 Bean，以及它们的关系")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/conditions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("就是 1.0 的 /autoconfig ，提供一份自动配置生效的条件情况，记录哪些自动配置条件通过了，哪些没通过")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/configprops")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("描述配置属性(包含默认值)如何注入Bean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/env")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("获取全部环境属性")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/env/{name}")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("根据名称获取特定的环境属性值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/flyway")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提供一份 Flyway 数据库迁移信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/liquidbase")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示Liquibase 数据库迁移的纤细信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/health")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("报告应用程序的健康指标，这些值由 HealthIndicator 的实现类提供")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/heapdump")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("dump 一份应用的 JVM 堆信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/httptrace")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示HTTP足迹，最近100个HTTP request/repsponse")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/info")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("获取应用程序的定制信息，这些信息由info打头的属性提供")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/logfile")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("返回log file中的内容(如果 logging.file 或者 logging.path 被设置)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/loggers")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示和修改配置的loggers")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/metrics")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("报告各种应用程序度量信息，比如内存用量和HTTP请求计数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/metrics/{name}")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("报告指定名称的应用程序度量值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/scheduledtasks")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("展示应用中的定时任务信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/sessions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("如果我们使用了 Spring Session 展示应用中的 HTTP sessions 信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/shutdown")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("关闭应用程序，要求endpoints.shutdown.enabled设置为true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/mappings")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("描述全部的 URI路径，以及它们和控制器(包含Actuator端点)的映射关系")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/threaddump")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("获取线程活动的快照")])])])]),t._v(" "),e("h2",{attrs:{id:"_4-快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-快速上手"}},[t._v("#")]),t._v(" 4. 快速上手")]),t._v(" "),e("h3",{attrs:{id:"_4-1-添加依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-添加依赖"}},[t._v("#")]),t._v(" 4.1 添加依赖")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-web"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-actuator"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"_4-2-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-配置文件"}},[t._v("#")]),t._v(" 4.2 配置文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("info.app.name=spring-boot-actuator\ninfo.app.version= 1.0.0\ninfo.app.test=test\n\nmanagement.endpoints.web.exposure.include=*\nmanagement.endpoint.health.show-details=always\n#management.endpoints.web.base-path=/monitor\n\nmanagement.endpoint.shutdown.enabled=true\n")])])]),e("ul",[e("li",[e("code",[t._v("management.endpoints.web.base-path=/monitor")]),t._v(" 代表启用单独的url地址来监控 Spring Boot 应用，为了安全一般都启用独立的端口来访问后端的监控信息")]),t._v(" "),e("li",[e("code",[t._v("management.endpoint.shutdown.enabled=true")]),t._v(" 启用接口关闭 Spring Boot")])]),t._v(" "),e("p",[t._v("配置完成之后，启动项目就可以继续验证各个监控功能了。")]),t._v(" "),e("h2",{attrs:{id:"_5-命令详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-命令详解"}},[t._v("#")]),t._v(" 5. 命令详解")]),t._v(" "),e("p",[t._v("在 Spring Boot 2.x 中为了安全起见，Actuator 只开放了两个端点 "),e("code",[t._v("/actuator/health")]),t._v(" 和 "),e("code",[t._v("/actuator/info")]),t._v("。可以在配置文件中设置打开。")]),t._v(" "),e("h3",{attrs:{id:"_5-1-监控点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-监控点"}},[t._v("#")]),t._v(" 5.1 监控点")]),t._v(" "),e("p",[t._v("打开所有的监控点")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("management.endpoints.web.exposure.include=*\n")])])]),e("p",[t._v("也可以选择打开部分")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("management.endpoints.web.exposure.exclude=beans,trace\n")])])]),e("h3",{attrs:{id:"_5-2-定制监控路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-定制监控路径"}},[t._v("#")]),t._v(" 5.2 定制监控路径")]),t._v(" "),e("p",[t._v("Actuator 默认所有的监控点路径都在"),e("code",[t._v("/actuator/*")]),t._v("，当然如果有需要这个路径也支持定制。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("management.endpoints.web.base-path=/manage\n")])])]),e("p",[t._v("设置完重启后，再次访问地址就会变成"),e("code",[t._v("/manage/*")])]),t._v(" "),e("h3",{attrs:{id:"_5-3-health"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-health"}},[t._v("#")]),t._v(" 5.3 health")]),t._v(" "),e("p",[t._v("health 主要用来"),e("strong",[t._v("检查应用的运行状态")]),t._v("，这是我们使用最高频的一个监控点。通常使用此接口提醒我们应用实例的运行状态，以及应用不”健康“的原因，"),e("strong",[t._v("比如数据库连接、磁盘空间不够等")]),t._v("。")]),t._v(" "),e("p",[t._v("默认情况下 health 的状态是开放的，添加依赖后启动项目，访问："),e("code",[t._v("http://localhost:8080/actuator/health")]),t._v("即可看到应用的状态。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "status" : "UP"\n}\n')])])]),e("p",[t._v("默认情况下，最终的 Spring Boot 应用的状态是由 HealthAggregator 汇总而成的，汇总的算法是：")]),t._v(" "),e("ul",[e("li",[t._v("1 设置状态码顺序："),e("code",[t._v("setStatusOrder(Status.DOWN, Status.OUT_OF_SERVICE, Status.UP, Status.UNKNOWN);")]),t._v("。")]),t._v(" "),e("li",[t._v("2 过滤掉不能识别的状态码。")]),t._v(" "),e("li",[t._v("3 如果无任何状态码，整个 Spring Boot 应用的状态是 UNKNOWN。")]),t._v(" "),e("li",[t._v("4 将所有收集到的状态码按照 1 中的顺序排序。")]),t._v(" "),e("li",[t._v("5 返回有序状态码序列中的第一个状态码，作为整个 Spring Boot 应用的状态。")])]),t._v(" "),e("p",[t._v("health 通过合并几个健康指数检查应用的健康情况。Spring Boot Actuator 有几个预定义的健康指标比如"),e("code",[t._v("DataSourceHealthIndicator")]),t._v(", "),e("code",[t._v("DiskSpaceHealthIndicator")]),t._v(", "),e("code",[t._v("MongoHealthIndicator")]),t._v(", "),e("code",[t._v("RedisHealthIndicator")]),t._v("等，它使用这些健康指标作为健康检查的一部分。")]),t._v(" "),e("p",[t._v("举个例子，如果你的应用使用 Redis，"),e("code",[t._v("RedisHealthindicator")]),t._v(" 将被当作检查的一部分；如果使用 MongoDB，那么"),e("code",[t._v("MongoHealthIndicator")]),t._v(" 将被当作检查的一部分。")]),t._v(" "),e("p",[t._v("可以在配置文件中关闭特定的健康检查指标，比如关闭 redis 的健康检查：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("management.health.redise.enabled=false\n")])])]),e("p",[t._v("默认，所有的这些健康指标被当作健康检查的一部分。")]),t._v(" "),e("h3",{attrs:{id:"_5-4-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-info"}},[t._v("#")]),t._v(" 5.4 info")]),t._v(" "),e("p",[t._v("info 就是我们自己配置在配置文件中以 info 开头的配置信息，比如我们在示例项目中的配置是：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("info.app.name=spring-boot-actuator\ninfo.app.version= 1.0.0\ninfo.app.test= test\n")])])]),e("p",[t._v("启动示例项目，访问："),e("code",[t._v("http://localhost:8080/actuator/info")]),t._v("返回部分信息如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "app": {\n    "name": "spring-boot-actuator",\n    "version": "1.0.0",\n    "test":"test"\n  }\n}\n')])])]),e("h3",{attrs:{id:"_5-5-beans"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-beans"}},[t._v("#")]),t._v(" 5.5 beans")]),t._v(" "),e("p",[t._v("根据示例就可以看出，展示了 bean 的别名、类型、是否单例、类的地址、依赖等信息。")]),t._v(" "),e("p",[t._v("启动示例项目，访问："),e("code",[t._v("http://localhost:8080/actuator/beans")]),t._v("返回部分信息如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[\n  {\n    "context": "application:8080:management",\n    "parent": "application:8080",\n    "beans": [\n      {\n        "bean": "embeddedServletContainerFactory",\n        "aliases": [\n          \n        ],\n        "scope": "singleton",\n        "type": "org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory",\n        "resource": "null",\n        "dependencies": [\n          \n        ]\n      },\n      {\n        "bean": "endpointWebMvcChildContextConfiguration",\n        "aliases": [\n          \n        ],\n        "scope": "singleton",\n        "type": "org.springframework.boot.actuate.autoconfigure.EndpointWebMvcChildContextConfiguration$$EnhancerBySpringCGLIB$$a4a10f9d",\n        "resource": "null",\n        "dependencies": [\n          \n        ]\n      }\n  }\n]\n')])])]),e("h3",{attrs:{id:"_5-6-conditions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-conditions"}},[t._v("#")]),t._v(" 5.6 conditions")]),t._v(" "),e("p",[t._v("Spring Boot 的自动配置功能非常便利，但有时候也意味着出问题比较难找出具体的原因。使用 conditions 可以在应用运行时查看代码了某个配置在什么条件下生效，或者某个自动配置为什么没有生效。")]),t._v(" "),e("p",[t._v("启动示例项目，访问："),e("code",[t._v("http://localhost:8080/actuator/conditions")]),t._v("返回部分信息如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "positiveMatches": {\n     "DevToolsDataSourceAutoConfiguration": {\n            "notMatched": [\n                {\n                    "condition": "DevToolsDataSourceAutoConfiguration.DevToolsDataSourceCondition", \n                    "message": "DevTools DataSource Condition did not find a single DataSource bean"\n                }\n            ], \n            "matched": [ ]\n        }, \n        "RemoteDevToolsAutoConfiguration": {\n            "notMatched": [\n                {\n                    "condition": "OnPropertyCondition", \n                    "message": "@ConditionalOnProperty (spring.devtools.remote.secret) did not find property \'secret\'"\n                }\n            ], \n            "matched": [\n                {\n                    "condition": "OnClassCondition", \n                    "message": "@ConditionalOnClass found required classes \'javax.servlet.Filter\', \'org.springframework.http.server.ServerHttpRequest\'; @ConditionalOnMissingClass did not find unwanted class"\n                }\n            ]\n        }\n    }\n}\n')])])]),e("h3",{attrs:{id:"_5-7-heapdump"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-heapdump"}},[t._v("#")]),t._v(" 5.7 heapdump")]),t._v(" "),e("p",[t._v("返回一个 GZip 压缩的 JVM 堆 dump")]),t._v(" "),e("p",[t._v("启动示例项目，访问："),e("code",[t._v("http://localhost:8080/actuator/heapdump")]),t._v("会自动生成一个 Jvm 的堆文件 heapdump，我们可以使用 JDK 自带的 Jvm 监控工具 VisualVM 打开此文件查看内存快照。类似如下图：")]),t._v(" "),e("h3",{attrs:{id:"_5-8-shutdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-shutdown"}},[t._v("#")]),t._v(" 5.8 shutdown")]),t._v(" "),e("p",[t._v("开启接口优雅关闭 Spring Boot 应用，要使用这个功能首先需要在配置文件中开启：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("management.endpoint.shutdown.enabled=true\n")])])]),e("p",[t._v("配置完成之后，启动示例项目，使用 curl 模拟 post 请求访问 shutdown 接口。")]),t._v(" "),e("blockquote",[e("p",[t._v("shutdown 接口默认只支持 post 请求。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl -X POST "http://localhost:8080/actuator/shutdown" \n{\n    "message": "Shutting down, bye..."\n}\n')])])]),e("p",[t._v("此时你会发现应用已经被关闭。")]),t._v(" "),e("h3",{attrs:{id:"_5-9-mappings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-9-mappings"}},[t._v("#")]),t._v(" 5.9 mappings")]),t._v(" "),e("p",[t._v("描述全部的 URI 路径，以及它们和控制器的映射关系")]),t._v(" "),e("p",[t._v("启动示例项目，访问："),e("code",[t._v("http://localhost:8080/actuator/mappings")]),t._v("返回部分信息如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "/**/favicon.ico": {\n    "bean": "faviconHandlerMapping"\n  },\n  "{[/hello]}": {\n    "bean": "requestMappingHandlerMapping",\n    "method": "public java.lang.String com.neo.controller.HelloController.index()"\n  },\n  "{[/error]}": {\n    "bean": "requestMappingHandlerMapping",\n    "method": "public org.springframework.http.ResponseEntity<java.util.Map<java.lang.String, java.lang.Object>> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)"\n  }\n}\n')])])]),e("h3",{attrs:{id:"_5-10-threaddump"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-10-threaddump"}},[t._v("#")]),t._v(" 5.10 threaddump")]),t._v(" "),e("p",[t._v("/threaddump 接口会生成当前线程活动的快照。这个功能非常好，方便我们在日常定位问题的时候查看线程的情况。 主要展示了线程名、线程ID、线程的状态、是否等待锁资源等信息。")]),t._v(" "),e("p",[t._v("启动示例项目，访问："),e("code",[t._v("http://localhost:8080/actuator/threaddump")]),t._v("返回部分信息如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[\n  {\n    "threadName": "http-nio-8088-exec-6",\n    "threadId": 49,\n    "blockedTime": -1,\n    "blockedCount": 0,\n    "waitedTime": -1,\n    "waitedCount": 2,\n    "lockName": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@1630a501",\n    "lockOwnerId": -1,\n    "lockOwnerName": null,\n    "inNative": false,\n    "suspended": false,\n    "threadState": "WAITING",\n    "stackTrace": [\n      {\n        "methodName": "park",\n        "fileName": "Unsafe.java",\n        "lineNumber": -2,\n        "className": "sun.misc.Unsafe",\n        "nativeMethod": true\n      },\n      ...\n      {\n        "methodName": "run",\n        "fileName": "TaskThread.java",\n        "lineNumber": 61,\n        "className": "org.apache.tomcat.util.threads.TaskThread$WrappingRunnable",\n        "nativeMethod": false\n      }\n      ...\n    ],\n    "lockInfo": {\n      "className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject",\n      "identityHashCode": 372286721\n    }\n  }\n  ...\n]\n')])])]),e("p",[t._v("生产出现问题的时候，可以通过应用的线程快照来检测应用正在执行的任务。")]),t._v(" "),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.ityouknow.com/springboot/2018/02/06/spring-boot-actuator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot (十九)：使用 Spring Boot Actuator 监控应用"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);