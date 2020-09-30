(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{891:function(t,a,s){"use strict";s.r(a);var n=s(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spring-boot常见知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot常见知识点"}},[t._v("#")]),t._v(" Spring Boot常见知识点")]),t._v(" "),s("h2",{attrs:{id:"_1-spring-boot-的自动配置是如何实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-boot-的自动配置是如何实现"}},[t._v("#")]),t._v(" 1. Spring Boot 的自动配置是如何实现")]),t._v(" "),s("p",[t._v("Spring Boot 项目的启动注解是：@SpringBootApplication，其实他由下面三个注解组成的：")]),t._v(" "),s("ul",[s("li",[t._v("@SpringBootConfiguration")]),t._v(" "),s("li",[t._v("@ComponentScan")]),t._v(" "),s("li",[t._v("@EnableAutoConfiguration")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-加载过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-加载过程"}},[t._v("#")]),t._v(" 1.1 加载过程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("其中@EnableAutoConfiguration 是实现自动配置的入口，")])]),t._v(" "),s("li",[s("p",[t._v("该注解又通过 @Import 注解导入了AutoConfigurationImportSelector，在该类中加载 META-INF/spring.factories 的配置信息。")])]),t._v(" "),s("li",[s("p",[t._v("然后筛选出以EnableAutoConfiguration 为key的数据，加入到IOC 容器中，实现自动配置功能")])])]),t._v(" "),s("h2",{attrs:{id:"_2-什么是嵌入式服务器-我们为什么要使用嵌入式服务器呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是嵌入式服务器-我们为什么要使用嵌入式服务器呢"}},[t._v("#")]),t._v(" 2. 什么是嵌入式服务器？我们为什么要使用嵌入式服务器呢？")]),t._v(" "),s("p",[t._v("当我们创建一个可以部署的应用程序的时候，我们将会把服务器（例如：tomcat）嵌入到可部署的服务器中。")]),t._v(" "),s("p",[t._v("例如：对于一个 Spring Boot 应用程序来说，你可以生成一个包含 Embedded Tomcat 的应用程序 jar。你就可以像运行正常 Java 应用程序一样来运行 web 应用程序了。")]),t._v(" "),s("p",[t._v("嵌入式服务器就是我们的可执行单元包含服务器的二进制文件（例如，tomcat.jar）。")]),t._v(" "),s("blockquote",[s("p",[t._v("思考一下再你虚拟机部署应用程序需要什么")]),t._v(" "),s("ol",[s("li",[t._v("安装java")]),t._v(" "),s("li",[t._v("安装web 或者是应用程序的服务器（Tomcat、weblogic等等）")]),t._v(" "),s("li",[t._v("部署应用程序war")])]),t._v(" "),s("p",[t._v("如果我们想简化这些步骤，应该怎么做呢？")]),t._v(" "),s("p",[t._v("让我们来思考如何使服务器成为应用程序的一部分？")]),t._v(" "),s("p",[t._v("你只需要一个安装了 Java 的虚拟机，就可以直接在上面部署应用程序了，")])]),t._v(" "),s("h2",{attrs:{id:"_3-微服务同时调用多个服务-怎么支持事务的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-微服务同时调用多个服务-怎么支持事务的"}},[t._v("#")]),t._v(" 3. 微服务同时调用多个服务，怎么支持事务的？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("集成 Aatomikos 支持分布式事务")]),t._v(" "),s("p",[t._v("一般不建议这样使用，因为使用分布式事务会增加请求的响应时间，影响系统的TPS")])]),t._v(" "),s("li",[s("p",[t._v("消息的补偿机制来处理分布式事务")])])]),t._v(" "),s("h2",{attrs:{id:"_4-个服务之间通信-对restful-和rpc-这2中方式如何选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-个服务之间通信-对restful-和rpc-这2中方式如何选择"}},[t._v("#")]),t._v(" 4. 个服务之间通信，对Restful 和RPC 这2中方式如何选择")]),t._v(" "),s("p",[t._v("在传统的SOA治理中，使用rpc的居多；Spring Cloud默认使用restful进行服务之间的通讯。rpc通讯效率会比restful要高一些，但是对于大多数公司来讲，这点效率影响甚微。我建议使用restful这种方式，易于在不同语言实现的服务之间通讯。")]),t._v(" "),s("h2",{attrs:{id:"_5-怎么设计无状态服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-怎么设计无状态服务"}},[t._v("#")]),t._v(" 5. 怎么设计无状态服务")]),t._v(" "),s("h3",{attrs:{id:"_5-1-什么是无状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-什么是无状态"}},[t._v("#")]),t._v(" 5.1 什么是无状态")]),t._v(" "),s("p",[t._v("如果一个数据需要被多个服务共享，才能完成一笔交易，那么"),s("strong",[t._v("这个数据被称为状态")]),t._v("。进而依赖这个“状态”数据的服务被称为有状态服务，反之称为无状态服务")]),t._v(" "),s("h3",{attrs:{id:"_5-2-如何设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-如何设计"}},[t._v("#")]),t._v(" 5.2 如何设计")]),t._v(" "),s("p",[t._v("无状态服务原则并不是说在微服务架构里就不允许存在状态，表达的真实意思是要把有状态的业务服务改变为无状态的计算类服务，那么状态数据也就相应的迁移到对应的“有状态数据服务”中")]),t._v(" "),s("h3",{attrs:{id:"_5-3-场景说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-场景说明"}},[t._v("#")]),t._v(" 5.3 场景说明")]),t._v(" "),s("p",[t._v("例如我们以前在本地内存中建立的数据缓存、Session缓存，到现在的微服务架构中就应该把这些数据迁移到分布式缓存中存储，让业务服务变成一个无状态的计算节点。迁移后，就可以做到按需动态伸缩，微服务应用在运行时动态增删节点，就不再需要考虑缓存数据如何同步的问题。")]),t._v(" "),s("h2",{attrs:{id:"_6-spring-cache-三种常用的缓存注解和意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-spring-cache-三种常用的缓存注解和意义"}},[t._v("#")]),t._v(" 6. Spring Cache 三种常用的缓存注解和意义？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("@Cacheable：")]),t._v(" "),s("p",[t._v("用来声明方法是可缓存的，将结果存储到缓存中以便后续使用相同参数调用时不需执行实际的方法，直接从缓存中取值。")])]),t._v(" "),s("li",[s("p",[t._v("CachePut：")]),t._v(" "),s("p",[t._v("使用 @CachePut 标注的方法在执行前，不会去检查缓存中是否存在之前执行过的结果，而是每次都会执行该方法，并将执行结果以键值对的形式存入指定的缓存中。")])]),t._v(" "),s("li",[s("p",[t._v("@CacheEvict:")]),t._v(" "),s("p",[t._v("是用来标注在需要清除缓存元素的方法或类上的，当标记在一个类上时表示其中所有的方法的执行都会触发缓存的清除操作。")])])]),t._v(" "),s("h2",{attrs:{id:"_7-spring-boot-如何设置支持跨域请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-spring-boot-如何设置支持跨域请求"}},[t._v("#")]),t._v(" 7. Spring Boot 如何设置支持跨域请求")]),t._v(" "),s("h3",{attrs:{id:"_7-1-什么是跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-什么是跨域"}},[t._v("#")]),t._v(" 7.1 什么是跨域")]),t._v(" "),s("p",[t._v("现代浏览器出于安全的考虑， HTTP 请求时必须遵守同源策略，否则就是跨域的 HTTP 请求，默认情况下是被禁止的，IP（域名）不同、或者端口不同、协议不同（比如 HTTP、HTTPS）都会造成跨域问题。")]),t._v(" "),s("h3",{attrs:{id:"_7-2-支持跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-支持跨域"}},[t._v("#")]),t._v(" 7.2 支持跨域")]),t._v(" "),s("p",[t._v("配置CoreFilter")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("corsFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UrlBasedCorsConfigurationSource")]),t._v(" source "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UrlBasedCorsConfigurationSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfiguration")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowCredentials")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowedOrigins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//http:www.a.com")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowedHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowedMethods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxAge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300l")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerCorsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/**"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_8-jpa-和-hibernate-有哪些区别-jpa-可以支持动态-sql-吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-jpa-和-hibernate-有哪些区别-jpa-可以支持动态-sql-吗"}},[t._v("#")]),t._v(" 8. JPA 和 Hibernate 有哪些区别？JPA 可以支持动态 SQL 吗？")]),t._v(" "),s("h3",{attrs:{id:"_8-1-jpa-和-hibernate-有哪些区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-jpa-和-hibernate-有哪些区别"}},[t._v("#")]),t._v(" 8.1 JPA 和 Hibernate 有哪些区别？")]),t._v(" "),s("p",[t._v("JPA本身是一种规范，它的本质是一种ORM规范（不是ORM框架，因为JPA并未提供ORM实现，只是制定了规范）因为JPA是一种规范，所以，只是提供了一些相关的接口，但是接口并不能直接使用，JPA底层需要某种JPA实现，Hibernate 是 JPA 的一个实现集。")]),t._v(" "),s("h3",{attrs:{id:"_8-2-jpa-可以支持动态-sql-吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-jpa-可以支持动态-sql-吗"}},[t._v("#")]),t._v(" 8.2 JPA 可以支持动态 SQL 吗？")]),t._v(" "),s("p",[t._v("JPA 是根据实体类的注解来创建对应的表和字段，如果需要动态创建表或者字段，需要动态构建对应的实体类，再重新调用Jpa刷新整个Entity。动态SQL，mybatis支持的最好，jpa也可以支持，但是没有Mybatis那么灵活。")]),t._v(" "),s("h2",{attrs:{id:"_9-spring-boot-约定优先于配置-最大的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-spring-boot-约定优先于配置-最大的优势"}},[t._v("#")]),t._v(" 9.Spring Boot 约定优先于配置（最大的优势）")]),t._v(" "),s("p",[t._v("Spring Boot 的最大的优势是“约定优于配置“。“约定优于配置“是一种软件设计范式，开发人员按照约定的方式来进行编程，可以减少软件开发人员需做决定的数量，获得简单的好处，而又不失灵活性。")]),t._v(" "),s("h3",{attrs:{id:"_9-1-spring-boot-中-约定优于配置-的具体体现在哪里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-spring-boot-中-约定优于配置-的具体体现在哪里"}},[t._v("#")]),t._v(" 9.1 Spring Boot 中“约定优于配置”的具体体现在哪里")]),t._v(" "),s("p",[t._v("Spring Boot Starter、Spring Boot Jpa 都是“约定优于配置“的一种体现。都是通过“约定优于配置“的设计思路来设计的，Spring Boot Starter 在启动的过程中会根据约定的信息对资源进行初始化；Spring Boot Jpa 通过约定的方式来自动生成 Sql ，避免大量无效代码编写")]),t._v(" "),s("h3",{attrs:{id:"_9-2-spring-boot-在启动的时候会做的几件事情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-spring-boot-在启动的时候会做的几件事情"}},[t._v("#")]),t._v(" 9.2 Spring Boot 在启动的时候会做的几件事情")]),t._v(" "),s("ul",[s("li",[t._v("① Spring Boot 在启动时会去依赖的 Starter 包中寻找 resources/META-INF/spring.factories 文件，然后根据文件中配置的 Jar 包去扫描项目所依赖的 Jar 包。")]),t._v(" "),s("li",[t._v("② 根据 spring.factories 配置加载 AutoConfigure 类")]),t._v(" "),s("li",[t._v("③ 根据 @Conditional 注解的条件，进行自动配置并将 Bean 注入 Spring Context")])]),t._v(" "),s("p",[t._v("总结一下，其实就是 Spring Boot 在启动的时候，按照约定去读取 Spring Boot Starter 的配置信息，再根据配置信息对资源进行初始化，并注入到 Spring 容器中。这样 Spring Boot 启动完毕后，就已经准备好了一切资源，使用过程中直接注入对应 Bean 资源即可。")]),t._v(" "),s("h2",{attrs:{id:"_10-spring-、spring-boot-和-spring-cloud-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-spring-、spring-boot-和-spring-cloud-的关系"}},[t._v("#")]),t._v(" 10. Spring 、Spring Boot 和 Spring Cloud 的关系?")]),t._v(" "),s("p",[t._v("Spring 最初最核心的两大核心功能 Spring Ioc 和 Spring Aop 成就了 Spring，Spring 在这两大核心的功能上不断的发展，才有了 Spring 事务、Spring Mvc 等一系列伟大的产品，最终成就了 Spring 帝国，到了后期 Spring 几乎可以解决企业开发中的所有问题。")]),t._v(" "),s("p",[t._v("Spring Boot 是在强大的 Spring 帝国生态基础上面发展而来，发明 Spring Boot 不是为了取代 Spring ,是为了让人们更容易的使用 Spring 。")]),t._v(" "),s("p",[t._v("Spring Cloud 是一系列框架的有序集合。它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。")]),t._v(" "),s("p",[t._v("Spring Cloud 是为了解决微服务架构中服务治理而提供的一系列功能的开发框架，并且 Spring Cloud 是完全基于 Spring Boot 而开发，Spring Cloud 利用 Spring Boot 特性整合了开源行业中优秀的组件，整体对外提供了一套在微服务架构中服务治理的解决方案。")]),t._v(" "),s("p",[t._v("用一组不太合理的包含关系来表达它们之间的关系。")]),t._v(" "),s("p",[t._v("Spring ioc/aop > Spring > Spring Boot > Spring Cloud")])])}),[],!1,null,null,null);a.default=r.exports}}]);