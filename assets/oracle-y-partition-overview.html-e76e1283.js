const e=JSON.parse('{"key":"v-59b15e13","path":"/db/oracle/oracle-y-partition-overview.html","title":"oracle分区表概念篇(partition)","lang":"zh-CN","frontmatter":{"description":"1.表空间及分区表的概念 表空间：; 是一个或多个数据文件的集合，所有的数据对象都存放在指定的表空间中，但主要存放的是表，所以称作表空间。 分区表：; 当表中的数据量不断增大，查询数据的速度就会变慢，应用程序的性能就会下降，这时就应该考虑对表进行分区。表进行分区后，逻辑上表仍然是一张完整的表，只是将表中的数据在物理上存放到多个表空间（物理文件上），这样...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/oracle/oracle-y-partition-overview.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"oracle分区表概念篇(partition)"}],["meta",{"property":"og:description","content":"1.表空间及分区表的概念 表空间：; 是一个或多个数据文件的集合，所有的数据对象都存放在指定的表空间中，但主要存放的是表，所以称作表空间。 分区表：; 当表中的数据量不断增大，查询数据的速度就会变慢，应用程序的性能就会下降，这时就应该考虑对表进行分区。表进行分区后，逻辑上表仍然是一张完整的表，只是将表中的数据在物理上存放到多个表空间（物理文件上），这样..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1.表空间及分区表的概念","slug":"_1-表空间及分区表的概念","link":"#_1-表空间及分区表的概念","children":[]},{"level":2,"title":"2. 表分区的具体作用","slug":"_2-表分区的具体作用","link":"#_2-表分区的具体作用","children":[]},{"level":2,"title":"3. 什么时候使用分区","slug":"_3-什么时候使用分区","link":"#_3-什么时候使用分区","children":[]},{"level":2,"title":"4. 表分区的优缺点","slug":"_4-表分区的优缺点","link":"#_4-表分区的优缺点","children":[]},{"level":2,"title":"5. 表分区的几种类型及操作方法","slug":"_5-表分区的几种类型及操作方法","link":"#_5-表分区的几种类型及操作方法","children":[{"level":3,"title":"5.1 范围分区(range) maxvalue","slug":"_5-1-范围分区-range-maxvalue","link":"#_5-1-范围分区-range-maxvalue","children":[]},{"level":3,"title":"5.2 列表分区(list) default","slug":"_5-2-列表分区-list-default","link":"#_5-2-列表分区-list-default","children":[]},{"level":3,"title":"5.3 散列分区(hash)","slug":"_5-3-散列分区-hash","link":"#_5-3-散列分区-hash","children":[]},{"level":3,"title":"5.4 组合分区","slug":"_5-4-组合分区","link":"#_5-4-组合分区","children":[]}]},{"level":2,"title":"6. 分区表的维护操作","slug":"_6-分区表的维护操作","link":"#_6-分区表的维护操作","children":[]},{"level":2,"title":"7. 分区相关查询","slug":"_7-分区相关查询","link":"#_7-分区相关查询","children":[{"level":3,"title":"7.1 查询表上有多少个分区","slug":"_7-1-查询表上有多少个分区","link":"#_7-1-查询表上有多少个分区","children":[]},{"level":3,"title":"7.2 查询索引信息","slug":"_7-2-查询索引信息","link":"#_7-2-查询索引信息","children":[]},{"level":3,"title":"7.3 查询所有分区表信息","slug":"_7-3-查询所有分区表信息","link":"#_7-3-查询所有分区表信息","children":[]},{"level":3,"title":"7.4 查询所有分区","slug":"_7-4-查询所有分区","link":"#_7-4-查询所有分区","children":[]},{"level":3,"title":"7.5 查询某一分区上的表","slug":"_7-5-查询某一分区上的表","link":"#_7-5-查询某一分区上的表","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":7.77,"words":2332},"filePathRelative":"db/oracle/oracle-y-partition-overview.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
