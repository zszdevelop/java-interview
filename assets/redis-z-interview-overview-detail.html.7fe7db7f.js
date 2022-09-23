const e=JSON.parse('{"key":"v-8d4cb75e","path":"/db/redis/redis-z-interview-overview-detail.html","title":"Redis\u9762\u8BD5 - redis\u95EE\u9898\u603B\u7ED3(\u7B54\u6848\u7248)","lang":"zh-CN","frontmatter":{"order":1020,"category":["\u6570\u636E\u5E93","Redis"],"summary":"Redis\u9762\u8BD5 - redis\u95EE\u9898\u603B\u7ED3(\u7B54\u6848\u7248) 1. \u5E38\u89C4\u95EE\u9898 1.1 \u4EC0\u4E48\u662FRedis\uFF0C\u4E3A\u4EC0\u4E48\u7528Redis\uFF1F Redis\u662F\u4E00\u79CD\u652F\u6301key-value\u7B49\u591A\u79CD\u6570\u636E\u7ED3\u6784\u7684\u5B58\u50A8\u7CFB\u7EDF\u3002\u53EF\u7528\u4E8E\u7F13\u5B58\uFF0C\u4E8B\u4EF6\u53D1\u5E03\u6216\u8BA2\u9605\uFF0C\u9AD8\u901F\u961F\u5217\u7B49\u573A\u666F\u3002\u652F\u6301\u7F51\u7EDC\uFF0C\u63D0\u4F9B\u5B57\u7B26\u4E32\uFF0C\u54C8\u5E0C\uFF0C\u5217\u8868\uFF0C\u961F\u5217\uFF0C\u96C6\u5408\u7ED3\u6784\u76F4\u63A5\u5B58\u53D6\uFF0C\u57FA\u4E8E\u5185\u5B58\uFF0C\u53EF\u6301\u4E45\u5316\u3002 \u8BFB\u5199\u6027\u80FD\u4F18\u5F02; Redis\u80FD\u8BFB\u7684\u901F\u5EA6\u662F110000\u6B21/s,","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/redis-z-interview-overview-detail.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Redis\u9762\u8BD5 - redis\u95EE\u9898\u603B\u7ED3(\u7B54\u6848\u7248)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-23T13:47:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-23T13:47:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5E38\u89C4\u95EE\u9898","slug":"_1-\u5E38\u89C4\u95EE\u9898","link":"#_1-\u5E38\u89C4\u95EE\u9898","children":[{"level":3,"title":"1.1  \u4EC0\u4E48\u662FRedis\uFF0C\u4E3A\u4EC0\u4E48\u7528Redis\uFF1F","slug":"_1-1-\u4EC0\u4E48\u662Fredis-\u4E3A\u4EC0\u4E48\u7528redis","link":"#_1-1-\u4EC0\u4E48\u662Fredis-\u4E3A\u4EC0\u4E48\u7528redis","children":[]},{"level":3,"title":"1.2. \u4E3A\u4EC0\u4E48Redis \u662F\u5355\u7EBF\u7A0B\u7684\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB\uFF1F","slug":"_1-2-\u4E3A\u4EC0\u4E48redis-\u662F\u5355\u7EBF\u7A0B\u7684\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB","link":"#_1-2-\u4E3A\u4EC0\u4E48redis-\u662F\u5355\u7EBF\u7A0B\u7684\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB","children":[]},{"level":3,"title":"1.3. Redis \u4E00\u822C\u6709\u54EA\u4E9B\u4F7F\u7528\u573A\u666F\uFF1F","slug":"_1-3-redis-\u4E00\u822C\u6709\u54EA\u4E9B\u4F7F\u7528\u573A\u666F","link":"#_1-3-redis-\u4E00\u822C\u6709\u54EA\u4E9B\u4F7F\u7528\u573A\u666F","children":[]}]},{"level":2,"title":"2. \u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784","slug":"_2-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784","link":"#_2-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784","children":[{"level":3,"title":"2.1 Redis \u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B\uFF1F","slug":"_2-1-redis-\u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B","link":"#_2-1-redis-\u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B","children":[]},{"level":3,"title":"2.2 \u8C08\u8C08Redis \u7684\u5BF9\u8C61\u673A\u5236\uFF08redisObject)\uFF1F","slug":"_2-2-\u8C08\u8C08redis-\u7684\u5BF9\u8C61\u673A\u5236-redisobject","link":"#_2-2-\u8C08\u8C08redis-\u7684\u5BF9\u8C61\u673A\u5236-redisobject","children":[]},{"level":3,"title":"2.3 Redis \u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784\uFF1F","slug":"_2-3-redis-\u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784","link":"#_2-3-redis-\u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784","children":[]},{"level":3,"title":"2.4 \u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds\uFF1F","slug":"_2-4-\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds","link":"#_2-4-\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds","children":[]},{"level":3,"title":"2.5 Redis \u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11\uFF1F","slug":"_2-5-redis-\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11","link":"#_2-5-redis-\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11","children":[]},{"level":3,"title":"2.6 \u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1Stream\uFF1F","slug":"_2-6-\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1stream","link":"#_2-6-\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1stream","children":[]},{"level":3,"title":"2.7 Redis Stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F\uFF1F","slug":"_2-7-redis-stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F","link":"#_2-7-redis-stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F","children":[]},{"level":3,"title":"2.8 Redis Stream\u6D88\u606FID\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898\uFF1F","slug":"_2-8-redis-stream\u6D88\u606Fid\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898","link":"#_2-8-redis-stream\u6D88\u606Fid\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898","children":[]},{"level":3,"title":"2.9 Redis Stream\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898?","slug":"_2-9-redis-stream\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898","link":"#_2-9-redis-stream\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898","children":[]},{"level":3,"title":"2.10 Redis Steam \u574F\u6D88\u606F\u95EE\u9898\uFF0C\u6B7B\u4FE1\u95EE\u9898?","slug":"_2-10-redis-steam-\u574F\u6D88\u606F\u95EE\u9898-\u6B7B\u4FE1\u95EE\u9898","link":"#_2-10-redis-steam-\u574F\u6D88\u606F\u95EE\u9898-\u6B7B\u4FE1\u95EE\u9898","children":[]}]},{"level":2,"title":"3. \u6301\u4E45\u5316\u548C\u5185\u5B58","slug":"_3-\u6301\u4E45\u5316\u548C\u5185\u5B58","link":"#_3-\u6301\u4E45\u5316\u548C\u5185\u5B58","children":[{"level":3,"title":"3.1 Redis \u7684\u6301\u4E45\u5316\u673A\u5236\u662F\u4EC0\u4E48\uFF1F\u5404\u81EA\u7684\u4F18\u7F3A\u70B9\uFF1F\u4E00\u822C\u600E\u4E48\u7528\uFF1F","slug":"_3-1-redis-\u7684\u6301\u4E45\u5316\u673A\u5236\u662F\u4EC0\u4E48-\u5404\u81EA\u7684\u4F18\u7F3A\u70B9-\u4E00\u822C\u600E\u4E48\u7528","link":"#_3-1-redis-\u7684\u6301\u4E45\u5316\u673A\u5236\u662F\u4EC0\u4E48-\u5404\u81EA\u7684\u4F18\u7F3A\u70B9-\u4E00\u822C\u600E\u4E48\u7528","children":[]},{"level":3,"title":"3.2 RDB \u89E6\u53D1\u65B9\u5F0F?","slug":"_3-2-rdb-\u89E6\u53D1\u65B9\u5F0F","link":"#_3-2-rdb-\u89E6\u53D1\u65B9\u5F0F","children":[]},{"level":3,"title":"3.3 \u90A3\u4E48\u5982\u4F55\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u5462\uFF1F","slug":"_3-3-\u90A3\u4E48\u5982\u4F55\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u5462","link":"#_3-3-\u90A3\u4E48\u5982\u4F55\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u5462","children":[]},{"level":3,"title":"3.4 \u5728\u8FDB\u884CRDB\u5FEB\u7167\u64CD\u4F5C\u7684\u8FD9\u6BB5\u65F6\u95F4\uFF0C\u5982\u679C\u53D1\u751F\u670D\u52A1\u5D29\u6E83\u600E\u4E48\u529E\uFF1F","slug":"_3-4-\u5728\u8FDB\u884Crdb\u5FEB\u7167\u64CD\u4F5C\u7684\u8FD9\u6BB5\u65F6\u95F4-\u5982\u679C\u53D1\u751F\u670D\u52A1\u5D29\u6E83\u600E\u4E48\u529E","link":"#_3-4-\u5728\u8FDB\u884Crdb\u5FEB\u7167\u64CD\u4F5C\u7684\u8FD9\u6BB5\u65F6\u95F4-\u5982\u679C\u53D1\u751F\u670D\u52A1\u5D29\u6E83\u600E\u4E48\u529E","children":[]},{"level":3,"title":"3.5 \u53EF\u4EE5\u6BCF\u79D2\u505A\u4E00\u6B21RDB\u5FEB\u7167\u5417\uFF1F","slug":"_3-5-\u53EF\u4EE5\u6BCF\u79D2\u505A\u4E00\u6B21rdb\u5FEB\u7167\u5417","link":"#_3-5-\u53EF\u4EE5\u6BCF\u79D2\u505A\u4E00\u6B21rdb\u5FEB\u7167\u5417","children":[]},{"level":3,"title":"3.6 AOF\u662F\u5199\u524D\u65E5\u5FD7\u8FD8\u662F\u5199\u540E\u65E5\u5FD7\uFF1F","slug":"_3-6-aof\u662F\u5199\u524D\u65E5\u5FD7\u8FD8\u662F\u5199\u540E\u65E5\u5FD7","link":"#_3-6-aof\u662F\u5199\u524D\u65E5\u5FD7\u8FD8\u662F\u5199\u540E\u65E5\u5FD7","children":[]},{"level":3,"title":"3.7 \u5982\u4F55\u5B9E\u73B0AOF\u7684\uFF1F","slug":"_3-7-\u5982\u4F55\u5B9E\u73B0aof\u7684","link":"#_3-7-\u5982\u4F55\u5B9E\u73B0aof\u7684","children":[]},{"level":3,"title":"3.8 \u4E09\u79CD\u5199\u56DE\u7B56\u7565\u7684\u4F18\u7F3A\u70B9","slug":"_3-8-\u4E09\u79CD\u5199\u56DE\u7B56\u7565\u7684\u4F18\u7F3A\u70B9","link":"#_3-8-\u4E09\u79CD\u5199\u56DE\u7B56\u7565\u7684\u4F18\u7F3A\u70B9","children":[]},{"level":3,"title":"3.9 \u4EC0\u4E48\u662FAOF\u91CD\u5199\uFF1F","slug":"_3-9-\u4EC0\u4E48\u662Faof\u91CD\u5199","link":"#_3-9-\u4EC0\u4E48\u662Faof\u91CD\u5199","children":[]},{"level":3,"title":"3.10 AOF\u91CD\u5199\u4F1A\u963B\u585E\u5417\uFF1F","slug":"_3-10-aof\u91CD\u5199\u4F1A\u963B\u585E\u5417","link":"#_3-10-aof\u91CD\u5199\u4F1A\u963B\u585E\u5417","children":[]},{"level":3,"title":"3.11 AOF\u65E5\u5FD7\u4F55\u65F6\u4F1A\u91CD\u5199\uFF1F","slug":"_3-11-aof\u65E5\u5FD7\u4F55\u65F6\u4F1A\u91CD\u5199","link":"#_3-11-aof\u65E5\u5FD7\u4F55\u65F6\u4F1A\u91CD\u5199","children":[]},{"level":3,"title":"3.12 AOF\u91CD\u5199\u65E5\u5FD7\u65F6\uFF0C\u6709\u65B0\u6570\u636E\u5199\u5165\u548B\u6574\uFF1F","slug":"_3-12-aof\u91CD\u5199\u65E5\u5FD7\u65F6-\u6709\u65B0\u6570\u636E\u5199\u5165\u548B\u6574","link":"#_3-12-aof\u91CD\u5199\u65E5\u5FD7\u65F6-\u6709\u65B0\u6570\u636E\u5199\u5165\u548B\u6574","children":[]},{"level":3,"title":"3.13 \u4E3B\u7EBF\u7A0Bfork\u51FA\u5B50\u8FDB\u7A0B\u7684\u662F\u5982\u4F55\u590D\u5236\u5185\u5B58\u6570\u636E\u7684\uFF1F","slug":"_3-13-\u4E3B\u7EBF\u7A0Bfork\u51FA\u5B50\u8FDB\u7A0B\u7684\u662F\u5982\u4F55\u590D\u5236\u5185\u5B58\u6570\u636E\u7684","link":"#_3-13-\u4E3B\u7EBF\u7A0Bfork\u51FA\u5B50\u8FDB\u7A0B\u7684\u662F\u5982\u4F55\u590D\u5236\u5185\u5B58\u6570\u636E\u7684","children":[]},{"level":3,"title":"3.14 \u5728\u91CD\u5199\u65E5\u5FD7\u6574\u4E2A\u8FC7\u7A0B\u65F6\uFF0C\u4E3B\u7EBF\u7A0B\u6709\u54EA\u4E9B\u5730\u65B9\u4F1A\u88AB\u963B\u585E\uFF1F","slug":"_3-14-\u5728\u91CD\u5199\u65E5\u5FD7\u6574\u4E2A\u8FC7\u7A0B\u65F6-\u4E3B\u7EBF\u7A0B\u6709\u54EA\u4E9B\u5730\u65B9\u4F1A\u88AB\u963B\u585E","link":"#_3-14-\u5728\u91CD\u5199\u65E5\u5FD7\u6574\u4E2A\u8FC7\u7A0B\u65F6-\u4E3B\u7EBF\u7A0B\u6709\u54EA\u4E9B\u5730\u65B9\u4F1A\u88AB\u963B\u585E","children":[]},{"level":3,"title":"3.15 \u4E3A\u4EC0\u4E48AOF\u91CD\u5199\u4E0D\u590D\u7528\u539FAOF\u65E5\u5FD7\uFF1F","slug":"_3-15-\u4E3A\u4EC0\u4E48aof\u91CD\u5199\u4E0D\u590D\u7528\u539Faof\u65E5\u5FD7","link":"#_3-15-\u4E3A\u4EC0\u4E48aof\u91CD\u5199\u4E0D\u590D\u7528\u539Faof\u65E5\u5FD7","children":[]},{"level":3,"title":"3.16 Redis \u8FC7\u671F\u952E\u7684\u5220\u9664\u7B56\u7565\u6709\u54EA\u4E9B?","slug":"_3-16-redis-\u8FC7\u671F\u952E\u7684\u5220\u9664\u7B56\u7565\u6709\u54EA\u4E9B","link":"#_3-16-redis-\u8FC7\u671F\u952E\u7684\u5220\u9664\u7B56\u7565\u6709\u54EA\u4E9B","children":[]},{"level":3,"title":"3.17 Redis \u5185\u5B58\u6DD8\u6C70\u7B97\u6CD5\u6709\u54EA\u4E9B?","slug":"_3-17-redis-\u5185\u5B58\u6DD8\u6C70\u7B97\u6CD5\u6709\u54EA\u4E9B","link":"#_3-17-redis-\u5185\u5B58\u6DD8\u6C70\u7B97\u6CD5\u6709\u54EA\u4E9B","children":[]},{"level":3,"title":"3.18 Redis\u7684\u5185\u5B58\u7528\u5B8C\u4E86\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F","slug":"_3-18-redis\u7684\u5185\u5B58\u7528\u5B8C\u4E86\u4F1A\u53D1\u751F\u4EC0\u4E48","link":"#_3-18-redis\u7684\u5185\u5B58\u7528\u5B8C\u4E86\u4F1A\u53D1\u751F\u4EC0\u4E48","children":[]},{"level":3,"title":"3.19 Redis\u5982\u4F55\u505A\u5185\u5B58\u4F18\u5316\uFF1F","slug":"_3-19-redis\u5982\u4F55\u505A\u5185\u5B58\u4F18\u5316","link":"#_3-19-redis\u5982\u4F55\u505A\u5185\u5B58\u4F18\u5316","children":[]},{"level":3,"title":"3.20  Redis key \u7684\u8FC7\u671F\u65F6\u95F4\u548C\u6C38\u4E45\u6709\u6548\u5206\u522B\u600E\u4E48\u8BBE\u7F6E\uFF1F","slug":"_3-20-redis-key-\u7684\u8FC7\u671F\u65F6\u95F4\u548C\u6C38\u4E45\u6709\u6548\u5206\u522B\u600E\u4E48\u8BBE\u7F6E","link":"#_3-20-redis-key-\u7684\u8FC7\u671F\u65F6\u95F4\u548C\u6C38\u4E45\u6709\u6548\u5206\u522B\u600E\u4E48\u8BBE\u7F6E","children":[]},{"level":3,"title":"3.21 Redis \u4E2D\u7684\u7BA1\u9053\u6709\u4EC0\u4E48\u7528\uFF1F","slug":"_3-21-redis-\u4E2D\u7684\u7BA1\u9053\u6709\u4EC0\u4E48\u7528","link":"#_3-21-redis-\u4E2D\u7684\u7BA1\u9053\u6709\u4EC0\u4E48\u7528","children":[]}]},{"level":2,"title":"4. \u4E8B\u52A1","slug":"_4-\u4E8B\u52A1","link":"#_4-\u4E8B\u52A1","children":[{"level":3,"title":"4.1 \u4EC0\u4E48\u662Fredis\u4E8B\u52A1\uFF1F","slug":"_4-1-\u4EC0\u4E48\u662Fredis\u4E8B\u52A1","link":"#_4-1-\u4EC0\u4E48\u662Fredis\u4E8B\u52A1","children":[]},{"level":3,"title":"4.2 Redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4\uFF1F","slug":"_4-2-redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4","link":"#_4-2-redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4","children":[]},{"level":3,"title":"4.3 Redis\u4E8B\u52A1\u7684\u4E09\u4E2A\u9636\u6BB5\uFF1F","slug":"_4-3-redis\u4E8B\u52A1\u7684\u4E09\u4E2A\u9636\u6BB5","link":"#_4-3-redis\u4E8B\u52A1\u7684\u4E09\u4E2A\u9636\u6BB5","children":[]},{"level":3,"title":"4.4 Redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0\uFF1F","slug":"_4-4-redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0","link":"#_4-4-redis\u4E8B\u52A1\u5176\u5B83\u5B9E\u73B0","children":[]},{"level":3,"title":"4.5 Redis\u4E8B\u52A1\u4E2D\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406\uFF1F","slug":"_4-5-redis\u4E8B\u52A1\u4E2D\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406","link":"#_4-5-redis\u4E8B\u52A1\u4E2D\u51FA\u73B0\u9519\u8BEF\u7684\u5904\u7406","children":[]},{"level":3,"title":"4.6 Redis\u4E8B\u52A1\u4E2Dwatch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462\uFF1F","slug":"_4-6-redis\u4E8B\u52A1\u4E2Dwatch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462","link":"#_4-6-redis\u4E8B\u52A1\u4E2Dwatch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462","children":[]},{"level":3,"title":"4.7 \u4E3A\u4EC0\u4E48 Redis \u4E0D\u652F\u6301\u56DE\u6EDA\uFF1F","slug":"_4-7-\u4E3A\u4EC0\u4E48-redis-\u4E0D\u652F\u6301\u56DE\u6EDA","link":"#_4-7-\u4E3A\u4EC0\u4E48-redis-\u4E0D\u652F\u6301\u56DE\u6EDA","children":[]},{"level":3,"title":"4.8 Redis \u5BF9 ACID\u7684\u652F\u6301\u6027\u7406\u89E3\uFF1F","slug":"_4-8-redis-\u5BF9-acid\u7684\u652F\u6301\u6027\u7406\u89E3","link":"#_4-8-redis-\u5BF9-acid\u7684\u652F\u6301\u6027\u7406\u89E3","children":[]},{"level":3,"title":"4.9 Redis\u4E8B\u52A1\u5176\u4ED6\u5B9E\u73B0\uFF1F","slug":"_4-9-redis\u4E8B\u52A1\u5176\u4ED6\u5B9E\u73B0","link":"#_4-9-redis\u4E8B\u52A1\u5176\u4ED6\u5B9E\u73B0","children":[]}]},{"level":2,"title":"5. \u96C6\u7FA4-\u4E3B\u4ECE\u590D\u5236","slug":"_5-\u96C6\u7FA4-\u4E3B\u4ECE\u590D\u5236","link":"#_5-\u96C6\u7FA4-\u4E3B\u4ECE\u590D\u5236","children":[{"level":3,"title":"5.1 Redis\u96C6\u7FA4\u7684\u4E3B\u4ECE\u590D\u5236\u6A21\u578B\u662F\u600E\u6837\u7684\uFF1F","slug":"_5-1-redis\u96C6\u7FA4\u7684\u4E3B\u4ECE\u590D\u5236\u6A21\u578B\u662F\u600E\u6837\u7684","link":"#_5-1-redis\u96C6\u7FA4\u7684\u4E3B\u4ECE\u590D\u5236\u6A21\u578B\u662F\u600E\u6837\u7684","children":[]},{"level":3,"title":"5.2 Redis \u5168\u91CF\u590D\u5236\u7684\u4E09\u4E2A\u9636\u6BB5\uFF1F","slug":"_5-2-redis-\u5168\u91CF\u590D\u5236\u7684\u4E09\u4E2A\u9636\u6BB5","link":"#_5-2-redis-\u5168\u91CF\u590D\u5236\u7684\u4E09\u4E2A\u9636\u6BB5","children":[]},{"level":3,"title":"5.3 Redis \u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1\u589E\u91CF\u590D\u5236\uFF1F","slug":"_5-3-redis-\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1\u589E\u91CF\u590D\u5236","link":"#_5-3-redis-\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1\u589E\u91CF\u590D\u5236","children":[]},{"level":3,"title":"5.4 Redis \u589E\u91CF\u590D\u5236\u7684\u6D41\u7A0B\uFF1F","slug":"_5-4-redis-\u589E\u91CF\u590D\u5236\u7684\u6D41\u7A0B","link":"#_5-4-redis-\u589E\u91CF\u590D\u5236\u7684\u6D41\u7A0B","children":[]},{"level":3,"title":"5.5 \u589E\u91CF\u590D\u5236\u5982\u679C\u5728\u7F51\u7EDC\u65AD\u5F00\u671F\u95F4\uFF0Crepl_backlog_size\u73AF\u5F62\u7F13\u51B2\u533A\u5199\u6EE1\u4E4B\u540E\uFF0C\u4ECE\u5E93\u662F\u4F1A\u4E22\u5931\u6389\u90A3\u90E8\u5206\u88AB\u8986\u76D6\u6389\u7684\u6570\u636E\uFF0C\u8FD8\u662F\u76F4\u63A5\u8FDB\u884C\u5168\u91CF\u590D\u5236\u5462\uFF1F","slug":"_5-5-\u589E\u91CF\u590D\u5236\u5982\u679C\u5728\u7F51\u7EDC\u65AD\u5F00\u671F\u95F4-repl-backlog-size\u73AF\u5F62\u7F13\u51B2\u533A\u5199\u6EE1\u4E4B\u540E-\u4ECE\u5E93\u662F\u4F1A\u4E22\u5931\u6389\u90A3\u90E8\u5206\u88AB\u8986\u76D6\u6389\u7684\u6570\u636E-\u8FD8\u662F\u76F4\u63A5\u8FDB\u884C\u5168\u91CF\u590D\u5236\u5462","link":"#_5-5-\u589E\u91CF\u590D\u5236\u5982\u679C\u5728\u7F51\u7EDC\u65AD\u5F00\u671F\u95F4-repl-backlog-size\u73AF\u5F62\u7F13\u51B2\u533A\u5199\u6EE1\u4E4B\u540E-\u4ECE\u5E93\u662F\u4F1A\u4E22\u5931\u6389\u90A3\u90E8\u5206\u88AB\u8986\u76D6\u6389\u7684\u6570\u636E-\u8FD8\u662F\u76F4\u63A5\u8FDB\u884C\u5168\u91CF\u590D\u5236\u5462","children":[]},{"level":3,"title":"5.6 Redis \u4E3A\u4EC0\u4E48\u4E0D\u6301\u4E45\u5316\u7684\u4E3B\u670D\u52A1\u5668\u81EA\u52A8\u91CD\u542F\u975E\u5E38\u5371\u9669\u5462?","slug":"_5-6-redis-\u4E3A\u4EC0\u4E48\u4E0D\u6301\u4E45\u5316\u7684\u4E3B\u670D\u52A1\u5668\u81EA\u52A8\u91CD\u542F\u975E\u5E38\u5371\u9669\u5462","link":"#_5-6-redis-\u4E3A\u4EC0\u4E48\u4E0D\u6301\u4E45\u5316\u7684\u4E3B\u670D\u52A1\u5668\u81EA\u52A8\u91CD\u542F\u975E\u5E38\u5371\u9669\u5462","children":[]},{"level":3,"title":"5.7 Redis \u4E3A\u4EC0\u4E48\u4E3B\u4ECE\u5168\u91CF\u590D\u5236\u4F7F\u7528RDB\u800C\u4E0D\u4F7F\u7528AOF\uFF1F","slug":"_5-7-redis-\u4E3A\u4EC0\u4E48\u4E3B\u4ECE\u5168\u91CF\u590D\u5236\u4F7F\u7528rdb\u800C\u4E0D\u4F7F\u7528aof","link":"#_5-7-redis-\u4E3A\u4EC0\u4E48\u4E3B\u4ECE\u5168\u91CF\u590D\u5236\u4F7F\u7528rdb\u800C\u4E0D\u4F7F\u7528aof","children":[]},{"level":3,"title":"5.8 Redis \u4E3A\u4EC0\u4E48\u8FD8\u6709\u65E0\u78C1\u76D8\u590D\u5236\u6A21\u5F0F\uFF1F","slug":"_5-8-redis-\u4E3A\u4EC0\u4E48\u8FD8\u6709\u65E0\u78C1\u76D8\u590D\u5236\u6A21\u5F0F","link":"#_5-8-redis-\u4E3A\u4EC0\u4E48\u8FD8\u6709\u65E0\u78C1\u76D8\u590D\u5236\u6A21\u5F0F","children":[]},{"level":3,"title":"5.9 Redis \u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u6709\u4ECE\u5E93\u7684\u4ECE\u5E93\u7684\u8BBE\u8BA1\uFF1F","slug":"_5-9-redis-\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u6709\u4ECE\u5E93\u7684\u4ECE\u5E93\u7684\u8BBE\u8BA1","link":"#_5-9-redis-\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u6709\u4ECE\u5E93\u7684\u4ECE\u5E93\u7684\u8BBE\u8BA1","children":[]}]},{"level":2,"title":"6. \u96C6\u7FA4-\u54E8\u5175\u673A\u5236","slug":"_6-\u96C6\u7FA4-\u54E8\u5175\u673A\u5236","link":"#_6-\u96C6\u7FA4-\u54E8\u5175\u673A\u5236","children":[{"level":3,"title":"6.1 Redis\u54E8\u5175\u673A\u5236\uFF1F\u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462?","slug":"_6-1-redis\u54E8\u5175\u673A\u5236-\u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462","link":"#_6-1-redis\u54E8\u5175\u673A\u5236-\u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462","children":[]},{"level":3,"title":"6.2 Redis \u54E8\u5175\u96C6\u7FA4\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u7EC4\u5EFA\u7684\uFF1F","slug":"_6-2-redis-\u54E8\u5175\u96C6\u7FA4\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u7EC4\u5EFA\u7684","link":"#_6-2-redis-\u54E8\u5175\u96C6\u7FA4\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u7EC4\u5EFA\u7684","children":[]},{"level":3,"title":"6.3 Redis \u54E8\u5175\u662F\u5982\u4F55\u76D1\u63A7Redis\u96C6\u7FA4\u7684\uFF1F","slug":"_6-3-redis-\u54E8\u5175\u662F\u5982\u4F55\u76D1\u63A7redis\u96C6\u7FA4\u7684","link":"#_6-3-redis-\u54E8\u5175\u662F\u5982\u4F55\u76D1\u63A7redis\u96C6\u7FA4\u7684","children":[]},{"level":3,"title":"6.4 Redis \u54E8\u5175\u5982\u4F55\u5224\u65AD\u4E3B\u5E93\u5DF2\u7ECF\u4E0B\u7EBF\u4E86\u5462\uFF1F","slug":"_6-4-redis-\u54E8\u5175\u5982\u4F55\u5224\u65AD\u4E3B\u5E93\u5DF2\u7ECF\u4E0B\u7EBF\u4E86\u5462","link":"#_6-4-redis-\u54E8\u5175\u5982\u4F55\u5224\u65AD\u4E3B\u5E93\u5DF2\u7ECF\u4E0B\u7EBF\u4E86\u5462","children":[]},{"level":3,"title":"6.4 Redis \u54E8\u5175\u7684\u9009\u4E3E\u673A\u5236\u662F\u4EC0\u4E48\u6837\u7684\uFF1F","slug":"_6-4-redis-\u54E8\u5175\u7684\u9009\u4E3E\u673A\u5236\u662F\u4EC0\u4E48\u6837\u7684","link":"#_6-4-redis-\u54E8\u5175\u7684\u9009\u4E3E\u673A\u5236\u662F\u4EC0\u4E48\u6837\u7684","children":[]},{"level":3,"title":"6.5 Redis 1\u4E3B4\u4ECE\uFF0C5\u4E2A\u54E8\u5175\uFF0C\u54E8\u5175\u914D\u7F6Equorum\u4E3A2\uFF0C\u5982\u679C3\u4E2A\u54E8\u5175\u6545\u969C\uFF0C\u5F53\u4E3B\u5E93\u5B95\u673A\u65F6\uFF0C\u54E8\u5175\u80FD\u5426\u5224\u65AD\u4E3B\u5E93\u201C\u5BA2\u89C2\u4E0B\u7EBF\u201D\uFF1F\u80FD\u5426\u81EA\u52A8\u5207\u6362\uFF1F","slug":"_6-5-redis-1\u4E3B4\u4ECE-5\u4E2A\u54E8\u5175-\u54E8\u5175\u914D\u7F6Equorum\u4E3A2-\u5982\u679C3\u4E2A\u54E8\u5175\u6545\u969C-\u5F53\u4E3B\u5E93\u5B95\u673A\u65F6-\u54E8\u5175\u80FD\u5426\u5224\u65AD\u4E3B\u5E93-\u5BA2\u89C2\u4E0B\u7EBF-\u80FD\u5426\u81EA\u52A8\u5207\u6362","link":"#_6-5-redis-1\u4E3B4\u4ECE-5\u4E2A\u54E8\u5175-\u54E8\u5175\u914D\u7F6Equorum\u4E3A2-\u5982\u679C3\u4E2A\u54E8\u5175\u6545\u969C-\u5F53\u4E3B\u5E93\u5B95\u673A\u65F6-\u54E8\u5175\u80FD\u5426\u5224\u65AD\u4E3B\u5E93-\u5BA2\u89C2\u4E0B\u7EBF-\u80FD\u5426\u81EA\u52A8\u5207\u6362","children":[]},{"level":3,"title":"6.6 \u4E3B\u5E93\u5224\u5B9A\u5BA2\u89C2\u4E0B\u7EBF\u4E86\uFF0C\u90A3\u4E48\u5982\u4F55\u4ECE\u5269\u4F59\u7684\u4ECE\u5E93\u4E2D\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u5E93\u5462\uFF1F","slug":"_6-6-\u4E3B\u5E93\u5224\u5B9A\u5BA2\u89C2\u4E0B\u7EBF\u4E86-\u90A3\u4E48\u5982\u4F55\u4ECE\u5269\u4F59\u7684\u4ECE\u5E93\u4E2D\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u5E93\u5462","link":"#_6-6-\u4E3B\u5E93\u5224\u5B9A\u5BA2\u89C2\u4E0B\u7EBF\u4E86-\u90A3\u4E48\u5982\u4F55\u4ECE\u5269\u4F59\u7684\u4ECE\u5E93\u4E2D\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u5E93\u5462","children":[]},{"level":3,"title":"6.7 \u65B0\u7684\u4E3B\u5E93\u9009\u62E9\u51FA\u6765\u540E\uFF0C\u5982\u4F55\u8FDB\u884C\u6545\u969C\u7684\u8F6C\u79FB\uFF1F","slug":"_6-7-\u65B0\u7684\u4E3B\u5E93\u9009\u62E9\u51FA\u6765\u540E-\u5982\u4F55\u8FDB\u884C\u6545\u969C\u7684\u8F6C\u79FB","link":"#_6-7-\u65B0\u7684\u4E3B\u5E93\u9009\u62E9\u51FA\u6765\u540E-\u5982\u4F55\u8FDB\u884C\u6545\u969C\u7684\u8F6C\u79FB","children":[]}]},{"level":2,"title":"7. \u96C6\u7FA4-\u5206\u7247\u6280\u672F","slug":"_7-\u96C6\u7FA4-\u5206\u7247\u6280\u672F","link":"#_7-\u96C6\u7FA4-\u5206\u7247\u6280\u672F","children":[{"level":3,"title":"7.1 \u4EC0\u4E48\u662FRedis Cluster\uFF1F","slug":"_7-1-\u4EC0\u4E48\u662Fredis-cluster","link":"#_7-1-\u4EC0\u4E48\u662Fredis-cluster","children":[]},{"level":3,"title":"7.2 \u8BF4\u8BF4Redis\u54C8\u5E0C\u69FD\u7684\u6982\u5FF5\uFF1F\u4E3A\u4EC0\u4E48\u662F16384\u4E2A\uFF1F","slug":"_7-2-\u8BF4\u8BF4redis\u54C8\u5E0C\u69FD\u7684\u6982\u5FF5-\u4E3A\u4EC0\u4E48\u662F16384\u4E2A","link":"#_7-2-\u8BF4\u8BF4redis\u54C8\u5E0C\u69FD\u7684\u6982\u5FF5-\u4E3A\u4EC0\u4E48\u662F16384\u4E2A","children":[]},{"level":3,"title":"7.3 Redis\u96C6\u7FA4\u4F1A\u6709\u5199\u64CD\u4F5C\u4E22\u5931\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F","slug":"_7-3-redis\u96C6\u7FA4\u4F1A\u6709\u5199\u64CD\u4F5C\u4E22\u5931\u5417-\u4E3A\u4EC0\u4E48","link":"#_7-3-redis\u96C6\u7FA4\u4F1A\u6709\u5199\u64CD\u4F5C\u4E22\u5931\u5417-\u4E3A\u4EC0\u4E48","children":[]}]},{"level":2,"title":"8. \u5E94\u7528\u573A\u666F","slug":"_8-\u5E94\u7528\u573A\u666F","link":"#_8-\u5E94\u7528\u573A\u666F","children":[{"level":3,"title":"8.1 Redis \u5BA2\u6237\u7AEF\u6709\u54EA\u4E9B\uFF1F","slug":"_8-1-redis-\u5BA2\u6237\u7AEF\u6709\u54EA\u4E9B","link":"#_8-1-redis-\u5BA2\u6237\u7AEF\u6709\u54EA\u4E9B","children":[]},{"level":3,"title":"8.2 Redis\u5982\u4F55\u505A\u5927\u91CF\u6570\u636E\u63D2\u5165\uFF1F","slug":"_8-2-redis\u5982\u4F55\u505A\u5927\u91CF\u6570\u636E\u63D2\u5165","link":"#_8-2-redis\u5982\u4F55\u505A\u5927\u91CF\u6570\u636E\u63D2\u5165","children":[]},{"level":3,"title":"8.3 Redis\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u5B9E\u73B0? \u4EC0\u4E48\u662F RedLock?","slug":"_8-3-redis\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u5B9E\u73B0-\u4EC0\u4E48\u662F-redlock","link":"#_8-3-redis\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u5B9E\u73B0-\u4EC0\u4E48\u662F-redlock","children":[]},{"level":3,"title":"8.4 Redis\u7F13\u5B58\u6709\u54EA\u4E9B\u95EE\u9898\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F","slug":"_8-4-redis\u7F13\u5B58\u6709\u54EA\u4E9B\u95EE\u9898-\u5982\u4F55\u89E3\u51B3","link":"#_8-4-redis\u7F13\u5B58\u6709\u54EA\u4E9B\u95EE\u9898-\u5982\u4F55\u89E3\u51B3","children":[]},{"level":3,"title":"8.5 Redis\u6027\u80FD\u95EE\u9898\u6709\u54EA\u4E9B\uFF0C\u5982\u4F55\u5206\u6790\u5B9A\u4F4D\u89E3\u51B3?","slug":"_8-5-redis\u6027\u80FD\u95EE\u9898\u6709\u54EA\u4E9B-\u5982\u4F55\u5206\u6790\u5B9A\u4F4D\u89E3\u51B3","link":"#_8-5-redis\u6027\u80FD\u95EE\u9898\u6709\u54EA\u4E9B-\u5982\u4F55\u5206\u6790\u5B9A\u4F4D\u89E3\u51B3","children":[]}]},{"level":2,"title":"9. \u65B0\u7248\u672C","slug":"_9-\u65B0\u7248\u672C","link":"#_9-\u65B0\u7248\u672C","children":[{"level":3,"title":"9.1 Redis\u5355\u7EBF\u7A0B\u6A21\u578B\uFF1F \u57286.0\u4E4B\u524D\u5982\u4F55\u63D0\u9AD8\u591A\u6838CPU\u7684\u5229\u7528\u7387\uFF1F","slug":"_9-1-redis\u5355\u7EBF\u7A0B\u6A21\u578B-\u57286-0\u4E4B\u524D\u5982\u4F55\u63D0\u9AD8\u591A\u6838cpu\u7684\u5229\u7528\u7387","link":"#_9-1-redis\u5355\u7EBF\u7A0B\u6A21\u578B-\u57286-0\u4E4B\u524D\u5982\u4F55\u63D0\u9AD8\u591A\u6838cpu\u7684\u5229\u7528\u7387","children":[]},{"level":3,"title":"9.2 Redis6.0\u4E4B\u524D\u7684\u7248\u672C\u771F\u7684\u662F\u5355\u7EBF\u7A0B\u7684\u5417?","slug":"_9-2-redis6-0\u4E4B\u524D\u7684\u7248\u672C\u771F\u7684\u662F\u5355\u7EBF\u7A0B\u7684\u5417","link":"#_9-2-redis6-0\u4E4B\u524D\u7684\u7248\u672C\u771F\u7684\u662F\u5355\u7EBF\u7A0B\u7684\u5417","children":[]},{"level":3,"title":"9.3 Redis6.0\u4E4B\u524D\u4E3A\u4EC0\u4E48\u4E00\u81F4\u4E0D\u7528\u591A\u7EBF\u7A0B?","slug":"_9-3-redis6-0\u4E4B\u524D\u4E3A\u4EC0\u4E48\u4E00\u81F4\u4E0D\u7528\u591A\u7EBF\u7A0B","link":"#_9-3-redis6-0\u4E4B\u524D\u4E3A\u4EC0\u4E48\u4E00\u81F4\u4E0D\u7528\u591A\u7EBF\u7A0B","children":[]},{"level":3,"title":"9.4  Redis6.0\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165\u591A\u7EBF\u7A0B\u5462\uFF1F","slug":"_9-4-redis6-0\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165\u591A\u7EBF\u7A0B\u5462","link":"#_9-4-redis6-0\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165\u591A\u7EBF\u7A0B\u5462","children":[]},{"level":3,"title":"9.5 Redis6.0\u9ED8\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u591A\u7EBF\u7A0B\uFF1F","slug":"_9-5-redis6-0\u9ED8\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u591A\u7EBF\u7A0B","link":"#_9-5-redis6-0\u9ED8\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u591A\u7EBF\u7A0B","children":[]},{"level":3,"title":"9.6 Redis6.0\u591A\u7EBF\u7A0B\u5F00\u542F\u65F6\uFF0C\u7EBF\u7A0B\u6570\u5982\u4F55\u8BBE\u7F6E\uFF1F","slug":"_9-6-redis6-0\u591A\u7EBF\u7A0B\u5F00\u542F\u65F6-\u7EBF\u7A0B\u6570\u5982\u4F55\u8BBE\u7F6E","link":"#_9-6-redis6-0\u591A\u7EBF\u7A0B\u5F00\u542F\u65F6-\u7EBF\u7A0B\u6570\u5982\u4F55\u8BBE\u7F6E","children":[]},{"level":3,"title":"9.7 Redis6.0\u591A\u7EBF\u7A0B\u7684\u5B9E\u73B0\u673A\u5236\uFF1F","slug":"_9-7-redis6-0\u591A\u7EBF\u7A0B\u7684\u5B9E\u73B0\u673A\u5236","link":"#_9-7-redis6-0\u591A\u7EBF\u7A0B\u7684\u5B9E\u73B0\u673A\u5236","children":[]},{"level":3,"title":"9.8 \u5F00\u542F\u591A\u7EBF\u7A0B\u540E\uFF0C\u662F\u5426\u4F1A\u5B58\u5728\u7EBF\u7A0B\u5E76\u53D1\u5B89\u5168\u95EE\u9898\uFF1F","slug":"_9-8-\u5F00\u542F\u591A\u7EBF\u7A0B\u540E-\u662F\u5426\u4F1A\u5B58\u5728\u7EBF\u7A0B\u5E76\u53D1\u5B89\u5168\u95EE\u9898","link":"#_9-8-\u5F00\u542F\u591A\u7EBF\u7A0B\u540E-\u662F\u5426\u4F1A\u5B58\u5728\u7EBF\u7A0B\u5E76\u53D1\u5B89\u5168\u95EE\u9898","children":[]}]},{"level":2,"title":"10. \u5176\u4ED6\u7279\u6027","slug":"_10-\u5176\u4ED6\u7279\u6027","link":"#_10-\u5176\u4ED6\u7279\u6027","children":[{"level":3,"title":"10.1 Redis\u4E8B\u4EF6\u673A\u5236?","slug":"_10-1-redis\u4E8B\u4EF6\u673A\u5236","link":"#_10-1-redis\u4E8B\u4EF6\u673A\u5236","children":[]},{"level":3,"title":"10.2 Redis\u6587\u4EF6\u4E8B\u4EF6\u7684\u6A21\u578B\uFF1F","slug":"_10-2-redis\u6587\u4EF6\u4E8B\u4EF6\u7684\u6A21\u578B","link":"#_10-2-redis\u6587\u4EF6\u4E8B\u4EF6\u7684\u6A21\u578B","children":[]},{"level":3,"title":"10.3 \u4EC0\u4E48\u662FRedis\u53D1\u5E03\u8BA2\u9605\uFF1F","slug":"_10-3-\u4EC0\u4E48\u662Fredis\u53D1\u5E03\u8BA2\u9605","link":"#_10-3-\u4EC0\u4E48\u662Fredis\u53D1\u5E03\u8BA2\u9605","children":[]},{"level":3,"title":"10.4 Redis\u53D1\u5E03\u8BA2\u9605\u6709\u54EA\u4E24\u79CD\u65B9\u5F0F\uFF1F","slug":"_10-4-redis\u53D1\u5E03\u8BA2\u9605\u6709\u54EA\u4E24\u79CD\u65B9\u5F0F","link":"#_10-4-redis\u53D1\u5E03\u8BA2\u9605\u6709\u54EA\u4E24\u79CD\u65B9\u5F0F","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1663940878000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":5}]},"readingTime":{"minutes":70.61,"words":21184},"filePathRelative":"db/redis/redis-z-interview-overview-detail.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
