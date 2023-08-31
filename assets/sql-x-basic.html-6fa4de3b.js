const l=JSON.parse('{"key":"v-422f4f78","path":"/db/sql/sql-x-basic.html","title":"SQL语法基础","lang":"zh-CN","frontmatter":{"order":10,"category":["数据库"],"description":"1. 基础 模式定义了数据如何存储、存储什么样的数据以及数据如何分解等信息，数据库和表都有模式。 主键的值不允许修改，也不允许复用(不能使用已经删除的主键值赋给新数据行的主键)。 SQL(Structured Query Language)，标准 SQL 由 ANSI 标准委员会管理，从而称为 ANSI SQL。各个 DBMS 都有自己的实现，如 PL...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/sql/sql-x-basic.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"SQL语法基础"}],["meta",{"property":"og:description","content":"1. 基础 模式定义了数据如何存储、存储什么样的数据以及数据如何分解等信息，数据库和表都有模式。 主键的值不允许修改，也不允许复用(不能使用已经删除的主键值赋给新数据行的主键)。 SQL(Structured Query Language)，标准 SQL 由 ANSI 标准委员会管理，从而称为 ANSI SQL。各个 DBMS 都有自己的实现，如 PL..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 基础","slug":"_1-基础","link":"#_1-基础","children":[{"level":3,"title":"1.1 SQL 支持以下三种注释:","slug":"_1-1-sql-支持以下三种注释","link":"#_1-1-sql-支持以下三种注释","children":[]},{"level":3,"title":"1.2 数据库创建与使用:","slug":"_1-2-数据库创建与使用","link":"#_1-2-数据库创建与使用","children":[]}]},{"level":2,"title":"2. 创建表","slug":"_2-创建表","link":"#_2-创建表","children":[]},{"level":2,"title":"3. 修改表","slug":"_3-修改表","link":"#_3-修改表","children":[]},{"level":2,"title":"4. 插入","slug":"_4-插入","link":"#_4-插入","children":[]},{"level":2,"title":"5. 更新","slug":"_5-更新","link":"#_5-更新","children":[]},{"level":2,"title":"6. 删除","slug":"_6-删除","link":"#_6-删除","children":[]},{"level":2,"title":"7. 查询","slug":"_7-查询","link":"#_7-查询","children":[{"level":3,"title":"7.1 DISTINCT","slug":"_7-1-distinct","link":"#_7-1-distinct","children":[]},{"level":3,"title":"7.2 LIMIT","slug":"_7-2-limit","link":"#_7-2-limit","children":[]}]},{"level":2,"title":"8 排序","slug":"_8-排序","link":"#_8-排序","children":[]},{"level":2,"title":"9. 过滤","slug":"_9-过滤","link":"#_9-过滤","children":[]},{"level":2,"title":"10. 通配符","slug":"_10-通配符","link":"#_10-通配符","children":[]},{"level":2,"title":"11. 计算字段","slug":"_11-计算字段","link":"#_11-计算字段","children":[]},{"level":2,"title":"12. 函数","slug":"_12-函数","link":"#_12-函数","children":[{"level":3,"title":"12.1 汇总","slug":"_12-1-汇总","link":"#_12-1-汇总","children":[]},{"level":3,"title":"12.2 文本处理","slug":"_12-2-文本处理","link":"#_12-2-文本处理","children":[]},{"level":3,"title":"12.3 日期和时间处理","slug":"_12-3-日期和时间处理","link":"#_12-3-日期和时间处理","children":[]},{"level":3,"title":"12.4 数值处理","slug":"_12-4-数值处理","link":"#_12-4-数值处理","children":[]}]},{"level":2,"title":"13. 分组","slug":"_13-分组","link":"#_13-分组","children":[]},{"level":2,"title":"14. 子查询","slug":"_14-子查询","link":"#_14-子查询","children":[]},{"level":2,"title":"15. 连接","slug":"_15-连接","link":"#_15-连接","children":[{"level":3,"title":"15.1 内连接","slug":"_15-1-内连接","link":"#_15-1-内连接","children":[]},{"level":3,"title":"15.2 自连接","slug":"_15-2-自连接","link":"#_15-2-自连接","children":[]},{"level":3,"title":"15.3 自然连接","slug":"_15-3-自然连接","link":"#_15-3-自然连接","children":[]},{"level":3,"title":"15.4 外连接","slug":"_15-4-外连接","link":"#_15-4-外连接","children":[]}]},{"level":2,"title":"16. 组合查询","slug":"_16-组合查询","link":"#_16-组合查询","children":[]},{"level":2,"title":"17. 视图","slug":"_17-视图","link":"#_17-视图","children":[]},{"level":2,"title":"18. 存储过程","slug":"_18-存储过程","link":"#_18-存储过程","children":[]},{"level":2,"title":"19. 游标","slug":"_19-游标","link":"#_19-游标","children":[]},{"level":2,"title":"20. 触发器","slug":"_20-触发器","link":"#_20-触发器","children":[]},{"level":2,"title":"21. 事务管理","slug":"_21-事务管理","link":"#_21-事务管理","children":[]},{"level":2,"title":"22. 字符集","slug":"_22-字符集","link":"#_22-字符集","children":[]},{"level":2,"title":"23. 权限管理","slug":"_23-权限管理","link":"#_23-权限管理","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":13.34,"words":4003},"filePathRelative":"db/sql/sql-x-basic.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};
