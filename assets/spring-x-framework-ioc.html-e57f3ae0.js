const e=JSON.parse('{"key":"v-78a6eeab","path":"/dependencies/spring/spring-x-framework-ioc.html","title":"Spring基础 - Spring核心之控制反转(IOC)","lang":"zh-CN","frontmatter":{"order":30,"category":["Spring"],"description":"在Spring基础 - Spring简单例子引入Spring的核心 (https://pdai.tech/md/spring/spring-x-framework-helloworld.html)中向你展示了IoC的基础含义，同时以此发散了一些IoC相关知识点; 本节将在此基础上进一步解读IOC的含义以及IOC的使用方式。 1. 引入 我们在Sprin...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/dependencies/spring/spring-x-framework-ioc.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Spring基础 - Spring核心之控制反转(IOC)"}],["meta",{"property":"og:description","content":"在Spring基础 - Spring简单例子引入Spring的核心 (https://pdai.tech/md/spring/spring-x-framework-helloworld.html)中向你展示了IoC的基础含义，同时以此发散了一些IoC相关知识点; 本节将在此基础上进一步解读IOC的含义以及IOC的使用方式。 1. 引入 我们在Sprin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 引入","slug":"_1-引入","link":"#_1-引入","children":[]},{"level":2,"title":"2. 如何理解IoC","slug":"_2-如何理解ioc","link":"#_2-如何理解ioc","children":[{"level":3,"title":"2.1 Spring Bean是什么","slug":"_2-1-spring-bean是什么","link":"#_2-1-spring-bean是什么","children":[]},{"level":3,"title":"2.2 IoC是什么","slug":"_2-2-ioc是什么","link":"#_2-2-ioc是什么","children":[]},{"level":3,"title":"2.3 IoC能做什么","slug":"_2-3-ioc能做什么","link":"#_2-3-ioc能做什么","children":[]},{"level":3,"title":"2.4 IoC和DI是什么关系","slug":"_2-4-ioc和di是什么关系","link":"#_2-4-ioc和di是什么关系","children":[]}]},{"level":2,"title":"3. Ioc 配置的三种方式","slug":"_3-ioc-配置的三种方式","link":"#_3-ioc-配置的三种方式","children":[{"level":3,"title":"3.1 xml 配置","slug":"_3-1-xml-配置","link":"#_3-1-xml-配置","children":[]},{"level":3,"title":"3.2 Java 配置","slug":"_3-2-java-配置","link":"#_3-2-java-配置","children":[]},{"level":3,"title":"3.3 注解配置","slug":"_3-3-注解配置","link":"#_3-3-注解配置","children":[]}]},{"level":2,"title":"4. 依赖注入的三种方式","slug":"_4-依赖注入的三种方式","link":"#_4-依赖注入的三种方式","children":[{"level":3,"title":"4.1 setter方式","slug":"_4-1-setter方式","link":"#_4-1-setter方式","children":[]},{"level":3,"title":"4.2 构造函数","slug":"_4-2-构造函数","link":"#_4-2-构造函数","children":[]},{"level":3,"title":"4.3 成员变量/ 接口注入","slug":"_4-3-成员变量-接口注入","link":"#_4-3-成员变量-接口注入","children":[]}]},{"level":2,"title":"5. IoC和DI使用问题小结","slug":"_5-ioc和di使用问题小结","link":"#_5-ioc和di使用问题小结","children":[{"level":3,"title":"5.1 为什么推荐构造器注入方式？","slug":"_5-1-为什么推荐构造器注入方式","link":"#_5-1-为什么推荐构造器注入方式","children":[]},{"level":3,"title":"5.2 我在使用构造器注入方式时注入了太多的类导致Bad Smell怎么办？","slug":"_5-2-我在使用构造器注入方式时注入了太多的类导致bad-smell怎么办","link":"#_5-2-我在使用构造器注入方式时注入了太多的类导致bad-smell怎么办","children":[]},{"level":3,"title":"5.3 @Autowired和@Resource以及@Inject等注解注入有何区别？","slug":"_5-3-autowired和-resource以及-inject等注解注入有何区别","link":"#_5-3-autowired和-resource以及-inject等注解注入有何区别","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":18.48,"words":5544},"filePathRelative":"dependencies/spring/spring-x-framework-ioc.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
