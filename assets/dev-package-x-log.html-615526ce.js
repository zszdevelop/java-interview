const l=JSON.parse('{"key":"v-d3619cf2","path":"/develop/devlibrary/dev-package-x-log.html","title":"常用开发库 - 日志类库详解","lang":"zh-CN","frontmatter":{"order":30,"category":["Lib"],"description":"Java日志库是最能体现Java库在进化中的渊源关系的，在理解时重点理解日志框架本身和日志门面，以及比较好的实践等。要关注其历史渊源和设计（比如桥接），而具体在使用时查询接口即可， 否则会陷入JUL(Java Util Log), JCL(Commons Logging), Log4j, SLF4J, Logback，Log4j2傻傻分不清楚的境地。 ...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/develop/devlibrary/dev-package-x-log.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"常用开发库 - 日志类库详解"}],["meta",{"property":"og:description","content":"Java日志库是最能体现Java库在进化中的渊源关系的，在理解时重点理解日志框架本身和日志门面，以及比较好的实践等。要关注其历史渊源和设计（比如桥接），而具体在使用时查询接口即可， 否则会陷入JUL(Java Util Log), JCL(Commons Logging), Log4j, SLF4J, Logback，Log4j2傻傻分不清楚的境地。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 日志库简介","slug":"_1-日志库简介","link":"#_1-日志库简介","children":[]},{"level":2,"title":"2. 日志库之日志系统","slug":"_2-日志库之日志系统","link":"#_2-日志库之日志系统","children":[{"level":3,"title":"2.1 java.util.logging (JUL)","slug":"_2-1-java-util-logging-jul","link":"#_2-1-java-util-logging-jul","children":[]},{"level":3,"title":"2.2 Log4j","slug":"_2-2-log4j","link":"#_2-2-log4j","children":[]},{"level":3,"title":"2.3 Logback","slug":"_2-3-logback","link":"#_2-3-logback","children":[]},{"level":3,"title":"2.4 Log4j2","slug":"_2-4-log4j2","link":"#_2-4-log4j2","children":[]},{"level":3,"title":"2.5 Log4j vs Logback vs Log4j2","slug":"_2-5-log4j-vs-logback-vs-log4j2","link":"#_2-5-log4j-vs-logback-vs-log4j2","children":[]}]},{"level":2,"title":"3. 日志库之日志门面","slug":"_3-日志库之日志门面","link":"#_3-日志库之日志门面","children":[{"level":3,"title":"3.1 common-logging","slug":"_3-1-common-logging","link":"#_3-1-common-logging","children":[]},{"level":3,"title":"3.2 slf4j","slug":"_3-2-slf4j","link":"#_3-2-slf4j","children":[]},{"level":3,"title":"3.3 common-logging vs slf4j","slug":"_3-3-common-logging-vs-slf4j","link":"#_3-3-common-logging-vs-slf4j","children":[]}]},{"level":2,"title":"4. 日志库使用方案","slug":"_4-日志库使用方案","link":"#_4-日志库使用方案","children":[{"level":3,"title":"4.1 日志库jar包","slug":"_4-1-日志库jar包","link":"#_4-1-日志库jar包","children":[]},{"level":3,"title":"4.2 日志库配置 - 针对于日志框架","slug":"_4-2-日志库配置-针对于日志框架","link":"#_4-2-日志库配置-针对于日志框架","children":[]},{"level":3,"title":"4.3 日志库API - 针对于日志门面","slug":"_4-3-日志库api-针对于日志门面","link":"#_4-3-日志库api-针对于日志门面","children":[]}]},{"level":2,"title":"5. 日志库选型与改造","slug":"_5-日志库选型与改造","link":"#_5-日志库选型与改造","children":[{"level":3,"title":"5.1 对Java日志组件选型的建议","slug":"_5-1-对java日志组件选型的建议","link":"#_5-1-对java日志组件选型的建议","children":[]},{"level":3,"title":"5.2 对日志架构使用比较好的实践","slug":"_5-2-对日志架构使用比较好的实践","link":"#_5-2-对日志架构使用比较好的实践","children":[]},{"level":3,"title":"5.3 对现有系统日志架构的改造建议","slug":"_5-3-对现有系统日志架构的改造建议","link":"#_5-3-对现有系统日志架构的改造建议","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":19.03,"words":5709},"filePathRelative":"develop/devlibrary/dev-package-x-log.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};
