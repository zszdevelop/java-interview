const e=JSON.parse('{"key":"v-e1f882b4","path":"/dependencies/spring-boot/springboot-y-source-main.html","title":"为什么SpringBoot中main方法执行完毕后程序不会直接退出呢","lang":"zh-CN","frontmatter":{"description":"1. 简介 正常情况下我们main方法执行结束后，该进程就结束了。那为什么springboot main函数执行完不会退出呢？ image-20220515222654390 针对这个问题我们可以转化一下思路：一个JVM进程，在什么情况下会正常退出？ 2. 什么情况JVM进程，在什么情况下会正常退出？ 2.1 方式1：System.exit()或Run...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/dependencies/spring-boot/springboot-y-source-main.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"为什么SpringBoot中main方法执行完毕后程序不会直接退出呢"}],["meta",{"property":"og:description","content":"1. 简介 正常情况下我们main方法执行结束后，该进程就结束了。那为什么springboot main函数执行完不会退出呢？ image-20220515222654390 针对这个问题我们可以转化一下思路：一个JVM进程，在什么情况下会正常退出？ 2. 什么情况JVM进程，在什么情况下会正常退出？ 2.1 方式1：System.exit()或Run..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 什么情况JVM进程，在什么情况下会正常退出？","slug":"_2-什么情况jvm进程-在什么情况下会正常退出","link":"#_2-什么情况jvm进程-在什么情况下会正常退出","children":[{"level":3,"title":"2.1 方式1：System.exit()或Runtime.exit()","slug":"_2-1-方式1-system-exit-或runtime-exit","link":"#_2-1-方式1-system-exit-或runtime-exit","children":[]},{"level":3,"title":"2.2 方式2：非daemon进程完全终止","slug":"_2-2-方式2-非daemon进程完全终止","link":"#_2-2-方式2-非daemon进程完全终止","children":[]}]},{"level":2,"title":"3. SpringBoot是如何实现","slug":"_3-springboot是如何实现","link":"#_3-springboot是如何实现","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.89,"words":568},"filePathRelative":"dependencies/spring-boot/springboot-y-source-main.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
