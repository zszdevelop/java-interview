const e=JSON.parse('{"key":"v-762571e6","path":"/db/mongodb/mongodb-action-custom-query.html","title":"spring-data-mongodb的自定义Query查询","lang":"zh-CN","frontmatter":{"description":"1. 背景 我们spring-data-mongodb 默认的 MongoRepository接口只能实现一些简单的固定查询。如果遇到复杂的情况完全应付不过来。 1.1 场景需求 例如：我们要查询用户的需求 1. 默认查询所有用户 2. 可以根据用户名模糊查询 3. 根据部门、用户状态查询 这几种情况，可能只执行一种，或要组合其他几种。 常用的Mong...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/mongodb/mongodb-action-custom-query.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"spring-data-mongodb的自定义Query查询"}],["meta",{"property":"og:description","content":"1. 背景 我们spring-data-mongodb 默认的 MongoRepository接口只能实现一些简单的固定查询。如果遇到复杂的情况完全应付不过来。 1.1 场景需求 例如：我们要查询用户的需求 1. 默认查询所有用户 2. 可以根据用户名模糊查询 3. 根据部门、用户状态查询 这几种情况，可能只执行一种，或要组合其他几种。 常用的Mong..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"1.1 场景需求","slug":"_1-1-场景需求","link":"#_1-1-场景需求","children":[]}]},{"level":2,"title":"2. 数据准备","slug":"_2-数据准备","link":"#_2-数据准备","children":[{"level":3,"title":"2.1 构建用户domain","slug":"_2-1-构建用户domain","link":"#_2-1-构建用户domain","children":[]},{"level":3,"title":"2.2 实现MongoRepository","slug":"_2-2-实现mongorepository","link":"#_2-2-实现mongorepository","children":[]},{"level":3,"title":"2.3 初始化数据与controller","slug":"_2-3-初始化数据与controller","link":"#_2-3-初始化数据与controller","children":[]}]},{"level":2,"title":"3. 实现自定义查询（复杂场景）","slug":"_3-实现自定义查询-复杂场景","link":"#_3-实现自定义查询-复杂场景","children":[{"level":3,"title":"3.1 创建接口","slug":"_3-1-创建接口","link":"#_3-1-创建接口","children":[]},{"level":3,"title":"3.2 创建实现类 （命名与接口名一致，且以Impl结尾）","slug":"_3-2-创建实现类-命名与接口名一致-且以impl结尾","link":"#_3-2-创建实现类-命名与接口名一致-且以impl结尾","children":[]}]},{"level":2,"title":"4. 自定义Query 基本用法","slug":"_4-自定义query-基本用法","link":"#_4-自定义query-基本用法","children":[{"level":3,"title":"4.1. 根据字段进行全匹配查询","slug":"_4-1-根据字段进行全匹配查询","link":"#_4-1-根据字段进行全匹配查询","children":[]},{"level":3,"title":"4.2 and多条件查询","slug":"_4-2-and多条件查询","link":"#_4-2-and多条件查询","children":[]},{"level":3,"title":"4.3 or或查询","slug":"_4-3-or或查询","link":"#_4-3-or或查询","children":[]},{"level":3,"title":"4.4 in查询","slug":"_4-4-in查询","link":"#_4-4-in查询","children":[]},{"level":3,"title":"4.5 数值比较","slug":"_4-5-数值比较","link":"#_4-5-数值比较","children":[]},{"level":3,"title":"4.6 正则查询","slug":"_4-6-正则查询","link":"#_4-6-正则查询","children":[]},{"level":3,"title":"4.7 查询总数","slug":"_4-7-查询总数","link":"#_4-7-查询总数","children":[]},{"level":3,"title":"4.8 分组查询","slug":"_4-8-分组查询","link":"#_4-8-分组查询","children":[]},{"level":3,"title":"4.9 排序","slug":"_4-9-排序","link":"#_4-9-排序","children":[]},{"level":3,"title":"4.10 分页","slug":"_4-10-分页","link":"#_4-10-分页","children":[]}]},{"level":2,"title":"5. 综合分页查询","slug":"_5-综合分页查询","link":"#_5-综合分页查询","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":9.72,"words":2917},"filePathRelative":"db/mongodb/mongodb-action-custom-query.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
