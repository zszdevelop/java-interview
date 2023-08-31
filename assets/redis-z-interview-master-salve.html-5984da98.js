const e=JSON.parse('{"key":"v-3cb03fda","path":"/db/redis/redis-z-interview-master-salve.html","title":"Redis面试 - 集群-主从复制","lang":"zh-CN","frontmatter":{"order":1070,"category":["数据库","Redis"],"description":"1 Redis集群的主从复制模型是怎样的？ 主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master)，后者称为从节点(slave)；数据的复制是单向的，只能由主节点到从节点。 主从复制的作用主要包括： 数据冗余：主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。; 故障恢复：当主节点出现问题时，...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/redis/redis-z-interview-master-salve.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Redis面试 - 集群-主从复制"}],["meta",{"property":"og:description","content":"1 Redis集群的主从复制模型是怎样的？ 主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master)，后者称为从节点(slave)；数据的复制是单向的，只能由主节点到从节点。 主从复制的作用主要包括： 数据冗余：主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。; 故障恢复：当主节点出现问题时，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1 Redis集群的主从复制模型是怎样的？","slug":"_1-redis集群的主从复制模型是怎样的","link":"#_1-redis集群的主从复制模型是怎样的","children":[]},{"level":2,"title":"2 Redis 全量复制的三个阶段？","slug":"_2-redis-全量复制的三个阶段","link":"#_2-redis-全量复制的三个阶段","children":[]},{"level":2,"title":"3 Redis 为什么会设计增量复制？","slug":"_3-redis-为什么会设计增量复制","link":"#_3-redis-为什么会设计增量复制","children":[]},{"level":2,"title":"4 Redis 增量复制的流程？","slug":"_4-redis-增量复制的流程","link":"#_4-redis-增量复制的流程","children":[]},{"level":2,"title":"5 增量复制如果在网络断开期间，repl_backlog_size环形缓冲区写满之后，从库是会丢失掉那部分被覆盖掉的数据，还是直接进行全量复制呢？","slug":"_5-增量复制如果在网络断开期间-repl-backlog-size环形缓冲区写满之后-从库是会丢失掉那部分被覆盖掉的数据-还是直接进行全量复制呢","link":"#_5-增量复制如果在网络断开期间-repl-backlog-size环形缓冲区写满之后-从库是会丢失掉那部分被覆盖掉的数据-还是直接进行全量复制呢","children":[]},{"level":2,"title":"6 Redis 为什么不持久化的主服务器自动重启非常危险呢?","slug":"_6-redis-为什么不持久化的主服务器自动重启非常危险呢","link":"#_6-redis-为什么不持久化的主服务器自动重启非常危险呢","children":[]},{"level":2,"title":"7 Redis 为什么主从全量复制使用RDB而不使用AOF？","slug":"_7-redis-为什么主从全量复制使用rdb而不使用aof","link":"#_7-redis-为什么主从全量复制使用rdb而不使用aof","children":[]},{"level":2,"title":"8 Redis 为什么还有无磁盘复制模式？","slug":"_8-redis-为什么还有无磁盘复制模式","link":"#_8-redis-为什么还有无磁盘复制模式","children":[]},{"level":2,"title":"9 Redis 为什么还会有从库的从库的设计？","slug":"_9-redis-为什么还会有从库的从库的设计","link":"#_9-redis-为什么还会有从库的从库的设计","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":11,"words":3299},"filePathRelative":"db/redis/redis-z-interview-master-salve.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
