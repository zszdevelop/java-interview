const e=JSON.parse('{"key":"v-08117258","path":"/db/redis/redis-z-interview-sentinel.html","title":"Redis\u9762\u8BD5-\u96C6\u7FA4-\u54E8\u5175\u673A\u5236","lang":"zh-CN","frontmatter":{"category":["\u6570\u636E\u5E93","\u7F13\u5B58"],"summary":"Redis\u9762\u8BD5-\u96C6\u7FA4-\u54E8\u5175\u673A\u5236 1 Redis\u54E8\u5175\u673A\u5236\uFF1F\u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462? \u54E8\u5175\u7684\u6838\u5FC3\u529F\u80FD\u662F\u4E3B\u8282\u70B9\u7684\u81EA\u52A8\u6545\u969C\u8F6C\u79FB\u3002 \u4E0B\u56FE\u662F\u4E00\u4E2A\u5178\u578B\u7684\u54E8\u5175\u96C6\u7FA4\u76D1\u63A7\u7684\u903B\u8F91\u56FE\uFF1A \u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462\uFF1F\u4E0B\u9762\u662FRedis\u5B98\u65B9\u6587\u6863\u7684\u63CF\u8FF0\uFF1A \u76D1\u63A7\uFF08Monitoring\uFF09\uFF1A\u54E8\u5175\u4F1A\u4E0D\u65AD\u5730\u68C0\u67E5\u4E3B\u8282\u70B9\u548C\u4ECE\u8282\u70B9\u662F\u5426\u8FD0\u4F5C\u6B63\u5E38\u3002; \u81EA\u52A8\u6545\u969C\u8F6C\u79FB\uFF08Automatic failover\uFF09\uFF1A\u5F53\u4E3B\u8282\u70B9\u4E0D\u80FD","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/redis-z-interview-sentinel.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Redis\u9762\u8BD5-\u96C6\u7FA4-\u54E8\u5175\u673A\u5236"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-19T12:07:59.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-19T12:07:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1 Redis\u54E8\u5175\u673A\u5236\uFF1F\u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462?","slug":"_1-redis\u54E8\u5175\u673A\u5236-\u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462","link":"#_1-redis\u54E8\u5175\u673A\u5236-\u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462","children":[]},{"level":2,"title":"2 Redis \u54E8\u5175\u96C6\u7FA4\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u7EC4\u5EFA\u7684\uFF1F","slug":"_2-redis-\u54E8\u5175\u96C6\u7FA4\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u7EC4\u5EFA\u7684","link":"#_2-redis-\u54E8\u5175\u96C6\u7FA4\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u7EC4\u5EFA\u7684","children":[]},{"level":2,"title":"3 Redis \u54E8\u5175\u662F\u5982\u4F55\u76D1\u63A7Redis\u96C6\u7FA4\u7684\uFF1F","slug":"_3-redis-\u54E8\u5175\u662F\u5982\u4F55\u76D1\u63A7redis\u96C6\u7FA4\u7684","link":"#_3-redis-\u54E8\u5175\u662F\u5982\u4F55\u76D1\u63A7redis\u96C6\u7FA4\u7684","children":[]},{"level":2,"title":"4 Redis \u54E8\u5175\u5982\u4F55\u5224\u65AD\u4E3B\u5E93\u5DF2\u7ECF\u4E0B\u7EBF\u4E86\u5462\uFF1F","slug":"_4-redis-\u54E8\u5175\u5982\u4F55\u5224\u65AD\u4E3B\u5E93\u5DF2\u7ECF\u4E0B\u7EBF\u4E86\u5462","link":"#_4-redis-\u54E8\u5175\u5982\u4F55\u5224\u65AD\u4E3B\u5E93\u5DF2\u7ECF\u4E0B\u7EBF\u4E86\u5462","children":[]},{"level":2,"title":"4 Redis \u54E8\u5175\u7684\u9009\u4E3E\u673A\u5236\u662F\u4EC0\u4E48\u6837\u7684\uFF1F","slug":"_4-redis-\u54E8\u5175\u7684\u9009\u4E3E\u673A\u5236\u662F\u4EC0\u4E48\u6837\u7684","link":"#_4-redis-\u54E8\u5175\u7684\u9009\u4E3E\u673A\u5236\u662F\u4EC0\u4E48\u6837\u7684","children":[]},{"level":2,"title":"5 Redis 1\u4E3B4\u4ECE\uFF0C5\u4E2A\u54E8\u5175\uFF0C\u54E8\u5175\u914D\u7F6Equorum\u4E3A2\uFF0C\u5982\u679C3\u4E2A\u54E8\u5175\u6545\u969C\uFF0C\u5F53\u4E3B\u5E93\u5B95\u673A\u65F6\uFF0C\u54E8\u5175\u80FD\u5426\u5224\u65AD\u4E3B\u5E93\u201C\u5BA2\u89C2\u4E0B\u7EBF\u201D\uFF1F\u80FD\u5426\u81EA\u52A8\u5207\u6362\uFF1F","slug":"_5-redis-1\u4E3B4\u4ECE-5\u4E2A\u54E8\u5175-\u54E8\u5175\u914D\u7F6Equorum\u4E3A2-\u5982\u679C3\u4E2A\u54E8\u5175\u6545\u969C-\u5F53\u4E3B\u5E93\u5B95\u673A\u65F6-\u54E8\u5175\u80FD\u5426\u5224\u65AD\u4E3B\u5E93-\u5BA2\u89C2\u4E0B\u7EBF-\u80FD\u5426\u81EA\u52A8\u5207\u6362","link":"#_5-redis-1\u4E3B4\u4ECE-5\u4E2A\u54E8\u5175-\u54E8\u5175\u914D\u7F6Equorum\u4E3A2-\u5982\u679C3\u4E2A\u54E8\u5175\u6545\u969C-\u5F53\u4E3B\u5E93\u5B95\u673A\u65F6-\u54E8\u5175\u80FD\u5426\u5224\u65AD\u4E3B\u5E93-\u5BA2\u89C2\u4E0B\u7EBF-\u80FD\u5426\u81EA\u52A8\u5207\u6362","children":[]},{"level":2,"title":"6 \u4E3B\u5E93\u5224\u5B9A\u5BA2\u89C2\u4E0B\u7EBF\u4E86\uFF0C\u90A3\u4E48\u5982\u4F55\u4ECE\u5269\u4F59\u7684\u4ECE\u5E93\u4E2D\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u5E93\u5462\uFF1F","slug":"_6-\u4E3B\u5E93\u5224\u5B9A\u5BA2\u89C2\u4E0B\u7EBF\u4E86-\u90A3\u4E48\u5982\u4F55\u4ECE\u5269\u4F59\u7684\u4ECE\u5E93\u4E2D\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u5E93\u5462","link":"#_6-\u4E3B\u5E93\u5224\u5B9A\u5BA2\u89C2\u4E0B\u7EBF\u4E86-\u90A3\u4E48\u5982\u4F55\u4ECE\u5269\u4F59\u7684\u4ECE\u5E93\u4E2D\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u5E93\u5462","children":[]},{"level":2,"title":"7 \u65B0\u7684\u4E3B\u5E93\u9009\u62E9\u51FA\u6765\u540E\uFF0C\u5982\u4F55\u8FDB\u884C\u6545\u969C\u7684\u8F6C\u79FB\uFF1F","slug":"_7-\u65B0\u7684\u4E3B\u5E93\u9009\u62E9\u51FA\u6765\u540E-\u5982\u4F55\u8FDB\u884C\u6545\u969C\u7684\u8F6C\u79FB","link":"#_7-\u65B0\u7684\u4E3B\u5E93\u9009\u62E9\u51FA\u6765\u540E-\u5982\u4F55\u8FDB\u884C\u6545\u969C\u7684\u8F6C\u79FB","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1663589279000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":5.68,"words":1705},"filePathRelative":"db/redis/redis-z-interview-sentinel.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
