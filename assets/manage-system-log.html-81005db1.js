const e=JSON.parse('{"key":"v-b036bb7a","path":"/arch/manage-system/manage-system-log.html","title":"系统操作日志功能","lang":"zh-CN","frontmatter":{"description":"1. 简介 在实际开发中，对于某些关键业务，我们通常需要记录该操作的内容，一个操作调一次记录方法，每次还得去收集参数等等。会造成大量代码重复。 我们希望代码中只有业务相关操作，在项目中使用AOP注解来完成此项功能 2. 需求 我们在之前的学习中，也使用 spring-y-aop-log (spring-y-aop-log.md) ，那么我们现在设计的系...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/arch/manage-system/manage-system-log.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"系统操作日志功能"}],["meta",{"property":"og:description","content":"1. 简介 在实际开发中，对于某些关键业务，我们通常需要记录该操作的内容，一个操作调一次记录方法，每次还得去收集参数等等。会造成大量代码重复。 我们希望代码中只有业务相关操作，在项目中使用AOP注解来完成此项功能 2. 需求 我们在之前的学习中，也使用 spring-y-aop-log (spring-y-aop-log.md) ，那么我们现在设计的系..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 需求","slug":"_2-需求","link":"#_2-需求","children":[{"level":3,"title":"2.1 老版本功能的基本需求","slug":"_2-1-老版本功能的基本需求","link":"#_2-1-老版本功能的基本需求","children":[]},{"level":3,"title":"2.1 新版本需求","slug":"_2-1-新版本需求","link":"#_2-1-新版本需求","children":[]}]},{"level":2,"title":"3. 实现思路","slug":"_3-实现思路","link":"#_3-实现思路","children":[{"level":3,"title":"3.1 日志细化","slug":"_3-1-日志细化","link":"#_3-1-日志细化","children":[]},{"level":3,"title":"3.2 请求结果获取","slug":"_3-2-请求结果获取","link":"#_3-2-请求结果获取","children":[]},{"level":3,"title":"3.3 请求异常处理","slug":"_3-3-请求异常处理","link":"#_3-3-请求异常处理","children":[]},{"level":3,"title":"3.4 请求参数","slug":"_3-4-请求参数","link":"#_3-4-请求参数","children":[]},{"level":3,"title":"3.5  请求的url等信息","slug":"_3-5-请求的url等信息","link":"#_3-5-请求的url等信息","children":[]},{"level":3,"title":"3.6 请求的方法","slug":"_3-6-请求的方法","link":"#_3-6-请求的方法","children":[]},{"level":3,"title":"3.7 异步保存","slug":"_3-7-异步保存","link":"#_3-7-异步保存","children":[]}]},{"level":2,"title":"4. 完整代码","slug":"_4-完整代码","link":"#_4-完整代码","children":[{"level":3,"title":"4.1 Log 注解","slug":"_4-1-log-注解","link":"#_4-1-log-注解","children":[]},{"level":3,"title":"4.2 LogAspect 日志拦截器","slug":"_4-2-logaspect-日志拦截器","link":"#_4-2-logaspect-日志拦截器","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.37,"words":1611},"filePathRelative":"arch/manage-system/manage-system-log.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
