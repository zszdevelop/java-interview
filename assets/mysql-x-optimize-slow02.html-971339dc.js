const l=JSON.parse('{"key":"v-0da6742a","path":"/db/mysql/mysql-x-optimize-slow02.html","title":"MySQL - 慢查询的12个原因","lang":"zh-CN","frontmatter":{"order":211,"category":["Mysql","数据库"],"description":"0. 前言 日常开发中，我们经常会遇到数据库慢查询。那么导致数据慢查询都有哪些常见的原因呢？今天田螺哥就跟大家聊聊导致MySQL慢查询的12个常见原因，以及对应的解决方法。 image-20221204221904146 1. SQL没加索引 很多时候，我们的慢查询，都是因为没有加索引。如果没有加索引的话，会导致全表扫描的。因此，应考虑在where的条...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/mysql/mysql-x-optimize-slow02.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MySQL - 慢查询的12个原因"}],["meta",{"property":"og:description","content":"0. 前言 日常开发中，我们经常会遇到数据库慢查询。那么导致数据慢查询都有哪些常见的原因呢？今天田螺哥就跟大家聊聊导致MySQL慢查询的12个常见原因，以及对应的解决方法。 image-20221204221904146 1. SQL没加索引 很多时候，我们的慢查询，都是因为没有加索引。如果没有加索引的话，会导致全表扫描的。因此，应考虑在where的条..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 前言","slug":"_0-前言","link":"#_0-前言","children":[]},{"level":2,"title":"1. SQL没加索引","slug":"_1-sql没加索引","link":"#_1-sql没加索引","children":[]},{"level":2,"title":"2. SQL 索引不生效","slug":"_2-sql-索引不生效","link":"#_2-sql-索引不生效","children":[{"level":3,"title":"2.1 隐式的类型转换，索引失效","slug":"_2-1-隐式的类型转换-索引失效","link":"#_2-1-隐式的类型转换-索引失效","children":[]},{"level":3,"title":"2.2 查询条件包含or，可能导致索引失效","slug":"_2-2-查询条件包含or-可能导致索引失效","link":"#_2-2-查询条件包含or-可能导致索引失效","children":[]},{"level":3,"title":"2.3. like通配符可能导致索引失效。","slug":"_2-3-like通配符可能导致索引失效。","link":"#_2-3-like通配符可能导致索引失效。","children":[]},{"level":3,"title":"2.4 查询条件不满足联合索引的最左匹配原则","slug":"_2-4-查询条件不满足联合索引的最左匹配原则","link":"#_2-4-查询条件不满足联合索引的最左匹配原则","children":[]},{"level":3,"title":"2.5 在索引列上使用mysql的内置函数","slug":"_2-5-在索引列上使用mysql的内置函数","link":"#_2-5-在索引列上使用mysql的内置函数","children":[]},{"level":3,"title":"2.6 对索引进行列运算（如，+、-、*、/）,索引不生效","slug":"_2-6-对索引进行列运算-如-、-、-、-索引不生效","link":"#_2-6-对索引进行列运算-如-、-、-、-索引不生效","children":[]},{"level":3,"title":"2.7 索引字段上使用（！= 或者 < >），索引可能失效","slug":"_2-7-索引字段上使用-或者-索引可能失效","link":"#_2-7-索引字段上使用-或者-索引可能失效","children":[]},{"level":3,"title":"2.8 索引字段上使用is null， is not null，索引可能失效","slug":"_2-8-索引字段上使用is-null-is-not-null-索引可能失效","link":"#_2-8-索引字段上使用is-null-is-not-null-索引可能失效","children":[]},{"level":3,"title":"2.9 左右连接，关联的字段编码格式不一样","slug":"_2-9-左右连接-关联的字段编码格式不一样","link":"#_2-9-左右连接-关联的字段编码格式不一样","children":[]},{"level":3,"title":"2.10 优化器选错了索引","slug":"_2-10-优化器选错了索引","link":"#_2-10-优化器选错了索引","children":[]}]},{"level":2,"title":"3. limit深分页问题","slug":"_3-limit深分页问题","link":"#_3-limit深分页问题","children":[{"level":3,"title":"3.1 limit深分页为什么会变慢","slug":"_3-1-limit深分页为什么会变慢","link":"#_3-1-limit深分页为什么会变慢","children":[]},{"level":3,"title":"3.2 如何优化深分页问题","slug":"_3-2-如何优化深分页问题","link":"#_3-2-如何优化深分页问题","children":[]}]},{"level":2,"title":"4. 单表数据量太大","slug":"_4-单表数据量太大","link":"#_4-单表数据量太大","children":[{"level":3,"title":"4.1 单表数据量太大为什么会变慢？","slug":"_4-1-单表数据量太大为什么会变慢","link":"#_4-1-单表数据量太大为什么会变慢","children":[]},{"level":3,"title":"4.2 一棵B+树可以存多少数据量","slug":"_4-2-一棵b-树可以存多少数据量","link":"#_4-2-一棵b-树可以存多少数据量","children":[]},{"level":3,"title":"4.3 如何解决单表数据量太大，查询变慢的问题","slug":"_4-3-如何解决单表数据量太大-查询变慢的问题","link":"#_4-3-如何解决单表数据量太大-查询变慢的问题","children":[]}]},{"level":2,"title":"5. join 或者子查询过多","slug":"_5-join-或者子查询过多","link":"#_5-join-或者子查询过多","children":[]},{"level":2,"title":"6. in元素过多","slug":"_6-in元素过多","link":"#_6-in元素过多","children":[]},{"level":2,"title":"7. 数据库在刷脏页","slug":"_7-数据库在刷脏页","link":"#_7-数据库在刷脏页","children":[{"level":3,"title":"7.1 什么是脏页","slug":"_7-1-什么是脏页","link":"#_7-1-什么是脏页","children":[]},{"level":3,"title":"7.2 一条更新语句是如何执行的？","slug":"_7-2-一条更新语句是如何执行的","link":"#_7-2-一条更新语句是如何执行的","children":[]},{"level":3,"title":"7.3 为什么会出现脏页呢？","slug":"_7-3-为什么会出现脏页呢","link":"#_7-3-为什么会出现脏页呢","children":[]},{"level":3,"title":"7.4 什么时候会刷脏页（flush）？","slug":"_7-4-什么时候会刷脏页-flush","link":"#_7-4-什么时候会刷脏页-flush","children":[]},{"level":3,"title":"7.5 为什么刷脏页会导致SQL变慢呢？","slug":"_7-5-为什么刷脏页会导致sql变慢呢","link":"#_7-5-为什么刷脏页会导致sql变慢呢","children":[]}]},{"level":2,"title":"8. order by 文件排序","slug":"_8-order-by-文件排序","link":"#_8-order-by-文件排序","children":[{"level":3,"title":"8.1 order by 的 Using filesort文件排序","slug":"_8-1-order-by-的-using-filesort文件排序","link":"#_8-1-order-by-的-using-filesort文件排序","children":[]},{"level":3,"title":"8.2 order by文件排序效率为什么较低","slug":"_8-2-order-by文件排序效率为什么较低","link":"#_8-2-order-by文件排序效率为什么较低","children":[]},{"level":3,"title":"8.3 如何优化order by的文件排序","slug":"_8-3-如何优化order-by的文件排序","link":"#_8-3-如何优化order-by的文件排序","children":[]}]},{"level":2,"title":"9. 拿不到锁","slug":"_9-拿不到锁","link":"#_9-拿不到锁","children":[]},{"level":2,"title":"10. delete + in子查询不走索引！","slug":"_10-delete-in子查询不走索引","link":"#_10-delete-in子查询不走索引","children":[]},{"level":2,"title":"11、group by使用临时表","slug":"_11、group-by使用临时表","link":"#_11、group-by使用临时表","children":[{"level":3,"title":"11.1 group by的执行流程","slug":"_11-1-group-by的执行流程","link":"#_11-1-group-by的执行流程","children":[]},{"level":3,"title":"11.2  group by可能会慢在哪里？","slug":"_11-2-group-by可能会慢在哪里","link":"#_11-2-group-by可能会慢在哪里","children":[]},{"level":3,"title":"11.3 如何优化group by呢？","slug":"_11-3-如何优化group-by呢","link":"#_11-3-如何优化group-by呢","children":[]}]},{"level":2,"title":"12. 系统硬件或网络资源","slug":"_12-系统硬件或网络资源","link":"#_12-系统硬件或网络资源","children":[]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":27.82,"words":8346},"filePathRelative":"db/mysql/mysql-x-optimize-slow02.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};
