const e=JSON.parse('{"key":"v-8e7e28da","path":"/db/mysql/mysql-x-optimize-slow2.html","title":"如何调优慢查询SQL","lang":"zh-CN","frontmatter":{"description":"1. 简介 我们在写程序的时候如何定位并优化慢查询呢？具体场景具体分析，大体思路如下 1. 根据慢日志定位慢查询sql 2. 使用explain等工具分析sql 3. 修改sql或者尽量让sql走索引 2. 根据慢日志定位慢查询sql 1. 查看慢日志配置情况 结果如下 image-20210405231229429 Longquerytime: 默认...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/mysql/mysql-x-optimize-slow2.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"如何调优慢查询SQL"}],["meta",{"property":"og:description","content":"1. 简介 我们在写程序的时候如何定位并优化慢查询呢？具体场景具体分析，大体思路如下 1. 根据慢日志定位慢查询sql 2. 使用explain等工具分析sql 3. 修改sql或者尽量让sql走索引 2. 根据慢日志定位慢查询sql 1. 查看慢日志配置情况 结果如下 image-20210405231229429 Longquerytime: 默认..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 根据慢日志定位慢查询sql","slug":"_2-根据慢日志定位慢查询sql","link":"#_2-根据慢日志定位慢查询sql","children":[]},{"level":2,"title":"3. 使用explain等工具分析sql","slug":"_3-使用explain等工具分析sql","link":"#_3-使用explain等工具分析sql","children":[]},{"level":2,"title":"4. 修改sql或者尽量让sql走索引","slug":"_4-修改sql或者尽量让sql走索引","link":"#_4-修改sql或者尽量让sql走索引","children":[{"level":3,"title":"4.1 方案一：查询其他有索引的字段","slug":"_4-1-方案一-查询其他有索引的字段","link":"#_4-1-方案一-查询其他有索引的字段","children":[]},{"level":3,"title":"4.2 方案二：添加索引","slug":"_4-2-方案二-添加索引","link":"#_4-2-方案二-添加索引","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.56,"words":467},"filePathRelative":"db/mysql/mysql-x-optimize-slow2.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
