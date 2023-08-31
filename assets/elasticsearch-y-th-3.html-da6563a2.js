const e=JSON.parse('{"key":"v-bdfe075c","path":"/db/es/elasticsearch-y-th-3.html","title":"ES详解 - 原理：ES原理之索引文档流程详解","lang":"zh-CN","frontmatter":{"order":230,"category":["ElasticSearch"],"description":"ElasticSearch中最重要原理是文档的索引和文档的读取，本文带你理解ES文档的索引过程。 1. 文档索引步骤顺序 1.1 单个文档 新建单个文档所需要的步骤顺序： image-20220808204133507 1. 客户端向 Node 1 发送新建、索引或者删除请求。 2. 节点使用文档的 _id 确定文档属于分片 0 。请求会被转发到 No...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/es/elasticsearch-y-th-3.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"ES详解 - 原理：ES原理之索引文档流程详解"}],["meta",{"property":"og:description","content":"ElasticSearch中最重要原理是文档的索引和文档的读取，本文带你理解ES文档的索引过程。 1. 文档索引步骤顺序 1.1 单个文档 新建单个文档所需要的步骤顺序： image-20220808204133507 1. 客户端向 Node 1 发送新建、索引或者删除请求。 2. 节点使用文档的 _id 确定文档属于分片 0 。请求会被转发到 No..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 文档索引步骤顺序","slug":"_1-文档索引步骤顺序","link":"#_1-文档索引步骤顺序","children":[{"level":3,"title":"1.1 单个文档","slug":"_1-1-单个文档","link":"#_1-1-单个文档","children":[]},{"level":3,"title":"1.2 多个文档","slug":"_1-2-多个文档","link":"#_1-2-多个文档","children":[]}]},{"level":2,"title":"2. 文档索引过程详解","slug":"_2-文档索引过程详解","link":"#_2-文档索引过程详解","children":[{"level":3,"title":"2.1整体的索引流程","slug":"_2-1整体的索引流程","link":"#_2-1整体的索引流程","children":[]},{"level":3,"title":"2.2 分步骤看数据持久化过程","slug":"_2-2-分步骤看数据持久化过程","link":"#_2-2-分步骤看数据持久化过程","children":[]}]},{"level":2,"title":"3. 深入ElasticSearch索引文档的实现机制","slug":"_3-深入elasticsearch索引文档的实现机制","link":"#_3-深入elasticsearch索引文档的实现机制","children":[{"level":3,"title":"3.1 写操作的关键点","slug":"_3-1-写操作的关键点","link":"#_3-1-写操作的关键点","children":[]},{"level":3,"title":"3.2 Lucene的写","slug":"_3-2-lucene的写","link":"#_3-2-lucene的写","children":[]},{"level":3,"title":"3.3 Elasticsearch的写","slug":"_3-3-elasticsearch的写","link":"#_3-3-elasticsearch的写","children":[]},{"level":3,"title":"3.4 Elasticsearch写入请求类型","slug":"_3-4-elasticsearch写入请求类型","link":"#_3-4-elasticsearch写入请求类型","children":[]},{"level":3,"title":"3.5 最后","slug":"_3-5-最后","link":"#_3-5-最后","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":20.36,"words":6108},"filePathRelative":"db/es/elasticsearch-y-th-3.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
