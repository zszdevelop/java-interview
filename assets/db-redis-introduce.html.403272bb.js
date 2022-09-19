const e=JSON.parse('{"key":"v-6e2c4fa2","path":"/db/redis/db-redis-introduce.html","title":"Redis\u5165\u95E8 - Redis\u6982\u5FF5\u548C\u57FA\u7840","lang":"zh-CN","frontmatter":{"category":["\u6570\u636E\u5E93","\u7F13\u5B58"],"summary":"Redis\u5165\u95E8 - Redis\u6982\u5FF5\u548C\u57FA\u7840 1. \u4EC0\u4E48\u662Fredis Redis\u662F\u4E00\u6B3E\u5185\u5B58\u9AD8\u901F\u7F13\u5B58\u6570\u636E\u5E93\u3002Redis\u5168\u79F0\u4E3A\uFF1ARemote Dictionary Server\uFF08\u8FDC\u7A0B\u6570\u636E(\u5B57\u5178)\u670D\u52A1\uFF09\uFF0C\u4F7F\u7528C\u8BED\u8A00\u7F16\u5199\uFF0CRedis\u662F\u4E00\u4E2Akey-value\u5B58\u50A8\u7CFB\u7EDF\uFF08\u952E\u503C\u5B58\u50A8\u7CFB\u7EDF\uFF09\uFF0C\u652F\u6301\u4E30\u5BCC\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5982\uFF1AString\u3001list\u3001set\u3001zset\u3001hash\u3002 Redis\u662F","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/db-redis-introduce.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Redis\u5165\u95E8 - Redis\u6982\u5FF5\u548C\u57FA\u7840"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-19T12:07:59.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-19T12:07:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4EC0\u4E48\u662Fredis","slug":"_1-\u4EC0\u4E48\u662Fredis","link":"#_1-\u4EC0\u4E48\u662Fredis","children":[]},{"level":2,"title":"2. \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528Redis","slug":"_2-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528redis","link":"#_2-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528redis","children":[]},{"level":2,"title":"3. Redis\u7684\u4F7F\u7528\u573A\u666F","slug":"_3-redis\u7684\u4F7F\u7528\u573A\u666F","link":"#_3-redis\u7684\u4F7F\u7528\u573A\u666F","children":[{"level":3,"title":"3.1 \u70ED\u70B9\u6570\u636E\u7684\u7F13\u5B58","slug":"_3-1-\u70ED\u70B9\u6570\u636E\u7684\u7F13\u5B58","link":"#_3-1-\u70ED\u70B9\u6570\u636E\u7684\u7F13\u5B58","children":[]},{"level":3,"title":"3.2 \u9650\u65F6\u4E1A\u52A1\u7684\u8FD0\u7528","slug":"_3-2-\u9650\u65F6\u4E1A\u52A1\u7684\u8FD0\u7528","link":"#_3-2-\u9650\u65F6\u4E1A\u52A1\u7684\u8FD0\u7528","children":[]},{"level":3,"title":"3.3 \u8BA1\u6570\u5668\u76F8\u5173\u95EE\u9898","slug":"_3-3-\u8BA1\u6570\u5668\u76F8\u5173\u95EE\u9898","link":"#_3-3-\u8BA1\u6570\u5668\u76F8\u5173\u95EE\u9898","children":[]},{"level":3,"title":"3.4 \u5206\u5E03\u5F0F\u9501","slug":"_3-4-\u5206\u5E03\u5F0F\u9501","link":"#_3-4-\u5206\u5E03\u5F0F\u9501","children":[]},{"level":3,"title":"3.5 \u5EF6\u65F6\u64CD\u4F5C","slug":"_3-5-\u5EF6\u65F6\u64CD\u4F5C","link":"#_3-5-\u5EF6\u65F6\u64CD\u4F5C","children":[]},{"level":3,"title":"3.6 \u6392\u884C\u699C\u76F8\u5173\u95EE\u9898","slug":"_3-6-\u6392\u884C\u699C\u76F8\u5173\u95EE\u9898","link":"#_3-6-\u6392\u884C\u699C\u76F8\u5173\u95EE\u9898","children":[]},{"level":3,"title":"3.7 \u70B9\u8D5E\u3001\u597D\u53CB\u7B49\u76F8\u4E92\u5173\u7CFB\u7684\u5B58\u50A8","slug":"_3-7-\u70B9\u8D5E\u3001\u597D\u53CB\u7B49\u76F8\u4E92\u5173\u7CFB\u7684\u5B58\u50A8","link":"#_3-7-\u70B9\u8D5E\u3001\u597D\u53CB\u7B49\u76F8\u4E92\u5173\u7CFB\u7684\u5B58\u50A8","children":[]},{"level":3,"title":"3.8 \u7B80\u5355\u961F\u5217","slug":"_3-8-\u7B80\u5355\u961F\u5217","link":"#_3-8-\u7B80\u5355\u961F\u5217","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1663589279000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":6,"words":1801},"filePathRelative":"db/redis/db-redis-introduce.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};
