const e=JSON.parse('{"key":"v-4801783f","path":"/dependencies/mybatis/mybatis-y-config-load.html","title":"MyBatis详解 - 配置解析过程","lang":"zh-CN","frontmatter":{"order":40,"category":["MyBatis"],"description":"【本文为中优先级】通过上文我们知道MyBatis初始化过程中会解析配置，那具体是如何解析的呢？ 1. 回顾上文配置解析方法 上文配置解析中，我们看到如下的主体方法： 通过以上源码，我们就能看出，在mybatis的配置文件中： configuration节点为根节点。; 在configuration节点之下，我们可以配置10个子节点， 分别为：prope...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/dependencies/mybatis/mybatis-y-config-load.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MyBatis详解 - 配置解析过程"}],["meta",{"property":"og:description","content":"【本文为中优先级】通过上文我们知道MyBatis初始化过程中会解析配置，那具体是如何解析的呢？ 1. 回顾上文配置解析方法 上文配置解析中，我们看到如下的主体方法： 通过以上源码，我们就能看出，在mybatis的配置文件中： configuration节点为根节点。; 在configuration节点之下，我们可以配置10个子节点， 分别为：prope..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 回顾上文配置解析方法","slug":"_1-回顾上文配置解析方法","link":"#_1-回顾上文配置解析方法","children":[]},{"level":2,"title":"2. 配置文件元素","slug":"_2-配置文件元素","link":"#_2-配置文件元素","children":[{"level":3,"title":"2.1 元素1：properties","slug":"_2-1-元素1-properties","link":"#_2-1-元素1-properties","children":[]},{"level":3,"title":"2.2 元素2：envirements","slug":"_2-2-元素2-envirements","link":"#_2-2-元素2-envirements","children":[]},{"level":3,"title":"2.3 解析方法：propertiesElement、environmentsElement","slug":"_2-3-解析方法-propertieselement、environmentselement","link":"#_2-3-解析方法-propertieselement、environmentselement","children":[]},{"level":3,"title":"2.4 元素3：typeAliases","slug":"_2-4-元素3-typealiases","link":"#_2-4-元素3-typealiases","children":[]},{"level":3,"title":"2.5 解析方法：typeAliasesElement","slug":"_2-5-解析方法-typealiaseselement","link":"#_2-5-解析方法-typealiaseselement","children":[]},{"level":3,"title":"2.6 元素4：TypeHandler","slug":"_2-6-元素4-typehandler","link":"#_2-6-元素4-typehandler","children":[]},{"level":3,"title":"2.7 解析方法：typeHandlerElement","slug":"_2-7-解析方法-typehandlerelement","link":"#_2-7-解析方法-typehandlerelement","children":[]},{"level":3,"title":"2.8 元素5：objectFactory","slug":"_2-8-元素5-objectfactory","link":"#_2-8-元素5-objectfactory","children":[]},{"level":3,"title":"2.9 元素6：plugins","slug":"_2-9-元素6-plugins","link":"#_2-9-元素6-plugins","children":[]},{"level":3,"title":"2.10 元素7：mappers","slug":"_2-10-元素7-mappers","link":"#_2-10-元素7-mappers","children":[]},{"level":3,"title":"2.11 解析方法：objectFactoryElement、pluginElement、mapperElement","slug":"_2-11-解析方法-objectfactoryelement、pluginelement、mapperelement","link":"#_2-11-解析方法-objectfactoryelement、pluginelement、mapperelement","children":[]},{"level":3,"title":"2.12 元素8：settings","slug":"_2-12-元素8-settings","link":"#_2-12-元素8-settings","children":[]},{"level":3,"title":"2.13 解析方法：settingsElement","slug":"_2-13-解析方法-settingselement","link":"#_2-13-解析方法-settingselement","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":22.76,"words":6829},"filePathRelative":"dependencies/mybatis/mybatis-y-config-load.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
