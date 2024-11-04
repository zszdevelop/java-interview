const e=JSON.parse('{"key":"v-58ff83b5","path":"/dependencies/mybatis/mybatis-i-pagehelper.html","title":"MyBatis PageHelper分页","lang":"zh-CN","frontmatter":{"description":"1. 准备知识 MyBatis的相关知识体系以及常见的数据库分页方式，MySQL物理分页的方式等。 1.1 逻辑分页和物理分页的区别？ 为什么会出现PageHelper这类框架？ 这便要从逻辑分页和物理分页开始说起： 逻辑分页：从数据库将所有记录查询出来，存储到内存中，展示当前页，然后数据再直接从内存中获取（前台分页）; 物理分页：只从数据库中查询当前...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/dependencies/mybatis/mybatis-i-pagehelper.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MyBatis PageHelper分页"}],["meta",{"property":"og:description","content":"1. 准备知识 MyBatis的相关知识体系以及常见的数据库分页方式，MySQL物理分页的方式等。 1.1 逻辑分页和物理分页的区别？ 为什么会出现PageHelper这类框架？ 这便要从逻辑分页和物理分页开始说起： 逻辑分页：从数据库将所有记录查询出来，存储到内存中，展示当前页，然后数据再直接从内存中获取（前台分页）; 物理分页：只从数据库中查询当前..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 准备知识","slug":"_1-准备知识","link":"#_1-准备知识","children":[{"level":3,"title":"1.1 逻辑分页和物理分页的区别？","slug":"_1-1-逻辑分页和物理分页的区别","link":"#_1-1-逻辑分页和物理分页的区别","children":[]},{"level":3,"title":"1.2 不同数据库的物理分页是如何实现的？","slug":"_1-2-不同数据库的物理分页是如何实现的","link":"#_1-2-不同数据库的物理分页是如何实现的","children":[]},{"level":3,"title":"1.3 PageHelper是如何实现物理分页的前提:MyBatis的插件机制？","slug":"_1-3-pagehelper是如何实现物理分页的前提-mybatis的插件机制","link":"#_1-3-pagehelper是如何实现物理分页的前提-mybatis的插件机制","children":[]}]},{"level":2,"title":"2. 简单示例","slug":"_2-简单示例","link":"#_2-简单示例","children":[{"level":3,"title":"2.1 第一种：RowBounds方式的调用","slug":"_2-1-第一种-rowbounds方式的调用","link":"#_2-1-第一种-rowbounds方式的调用","children":[]},{"level":3,"title":"2.2 第二种：Mapper接口方式的调用startPage","slug":"_2-2-第二种-mapper接口方式的调用startpage","link":"#_2-2-第二种-mapper接口方式的调用startpage","children":[]},{"level":3,"title":"2.3 第三种：Mapper接口方式的调用offsetPage","slug":"_2-3-第三种-mapper接口方式的调用offsetpage","link":"#_2-3-第三种-mapper接口方式的调用offsetpage","children":[]},{"level":3,"title":"2.4 第四种:参数方法调用","slug":"_2-4-第四种-参数方法调用","link":"#_2-4-第四种-参数方法调用","children":[]},{"level":3,"title":"2.5 第五种:参数对象","slug":"_2-5-第五种-参数对象","link":"#_2-5-第五种-参数对象","children":[]},{"level":3,"title":"2.6 第六种：ISelect 接口方式","slug":"_2-6-第六种-iselect-接口方式","link":"#_2-6-第六种-iselect-接口方式","children":[]}]},{"level":2,"title":"3. 进一步理解","slug":"_3-进一步理解","link":"#_3-进一步理解","children":[{"level":3,"title":"3.1 PageHelper是如何实现分页的？","slug":"_3-1-pagehelper是如何实现分页的","link":"#_3-1-pagehelper是如何实现分页的","children":[]},{"level":3,"title":"3.2 使用PageHelper有何注意点","slug":"_3-2-使用pagehelper有何注意点","link":"#_3-2-使用pagehelper有何注意点","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":6.35,"words":1905},"filePathRelative":"dependencies/mybatis/mybatis-i-pagehelper.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};