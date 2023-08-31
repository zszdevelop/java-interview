const e=JSON.parse('{"key":"v-303cd4c4","path":"/db/redis/db-redis-x-redis-object.html","title":"Redis进阶 - 数据类型：对象机制详解","lang":"zh-CN","frontmatter":{"order":110,"category":["数据库","Redis"],"description":"1. 引入:从哪里开始学习底层？ 我在整理Redis底层设计时，发现网上其实是有很多资料的，但是缺少一种自上而下的承接。这里我将收集很多网上的资料并重新组织，来帮助你更好的理解Redis底层设计。 我们在前文已经阐述了Redis 5种基础数据类型详解 (https://java.isture.com/redis/started/Redis%E5%85%...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/redis/db-redis-x-redis-object.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Redis进阶 - 数据类型：对象机制详解"}],["meta",{"property":"og:description","content":"1. 引入:从哪里开始学习底层？ 我在整理Redis底层设计时，发现网上其实是有很多资料的，但是缺少一种自上而下的承接。这里我将收集很多网上的资料并重新组织，来帮助你更好的理解Redis底层设计。 我们在前文已经阐述了Redis 5种基础数据类型详解 (https://java.isture.com/redis/started/Redis%E5%85%..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 引入:从哪里开始学习底层？","slug":"_1-引入-从哪里开始学习底层","link":"#_1-引入-从哪里开始学习底层","children":[]},{"level":2,"title":"2. 为什么Redis会设计redisObject对象","slug":"_2-为什么redis会设计redisobject对象","link":"#_2-为什么redis会设计redisobject对象","children":[]},{"level":2,"title":"3. redisObject数据结构","slug":"_3-redisobject数据结构","link":"#_3-redisobject数据结构","children":[]},{"level":2,"title":"4. 命令的类型检查和多态","slug":"_4-命令的类型检查和多态","link":"#_4-命令的类型检查和多态","children":[]},{"level":2,"title":"5. 对象共享","slug":"_5-对象共享","link":"#_5-对象共享","children":[]},{"level":2,"title":"6. 引用计数以及对象的消毁","slug":"_6-引用计数以及对象的消毁","link":"#_6-引用计数以及对象的消毁","children":[]},{"level":2,"title":"7. 小结","slug":"_7-小结","link":"#_7-小结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":7.93,"words":2378},"filePathRelative":"db/redis/db-redis-x-redis-object.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
