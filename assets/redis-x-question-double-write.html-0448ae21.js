const e=JSON.parse('{"key":"v-b57923bc","path":"/db/redis/redis-x-question-double-write.html","title":"Redis保证缓存与数据库双写时的数据一致性","lang":"zh-CN","frontmatter":{"description":"1.引言 在读取缓存方面的方案流程图; image-20191008234809789 更新缓存方面; 对于更新完数据库，是更新缓存，还是删除缓存，又或者是先删除缓存，再更新数据库，其实大家存在很大的争议。 2. 三种更新策略 1. 先更新数据库，再更新缓存 2. 先删除缓存，再更新数据库 3. 先更新数据库，再删除缓存（推荐） 2.1 先更新数据库，...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/redis-x-question-double-write.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Redis保证缓存与数据库双写时的数据一致性"}],["meta",{"property":"og:description","content":"1.引言 在读取缓存方面的方案流程图; image-20191008234809789 更新缓存方面; 对于更新完数据库，是更新缓存，还是删除缓存，又或者是先删除缓存，再更新数据库，其实大家存在很大的争议。 2. 三种更新策略 1. 先更新数据库，再更新缓存 2. 先删除缓存，再更新数据库 3. 先更新数据库，再删除缓存（推荐） 2.1 先更新数据库，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1.引言","slug":"_1-引言","link":"#_1-引言","children":[]},{"level":2,"title":"2. 三种更新策略","slug":"_2-三种更新策略","link":"#_2-三种更新策略","children":[{"level":3,"title":"2.1 先更新数据库，再更新缓存","slug":"_2-1-先更新数据库-再更新缓存","link":"#_2-1-先更新数据库-再更新缓存","children":[]},{"level":3,"title":"2.2 先删缓存，在更新数据库（争议最大）","slug":"_2-2-先删缓存-在更新数据库-争议最大","link":"#_2-2-先删缓存-在更新数据库-争议最大","children":[]},{"level":3,"title":"2.3 先更新数据库，再删除缓存","slug":"_2-3-先更新数据库-再删除缓存","link":"#_2-3-先更新数据库-再删除缓存","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":7.41,"words":2222},"filePathRelative":"db/redis/redis-x-question-double-write.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};