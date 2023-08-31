const e=JSON.parse('{"key":"v-465d2e38","path":"/db/es/elasticsearch-y-peformance.html","title":"ES详解 - 优化：ElasticSearch性能优化详解","lang":"zh-CN","frontmatter":{"order":210,"category":["ElasticSearch"],"description":"Elasticsearch 作为一个开箱即用的产品，在生产环境上线之后，我们其实不一定能确保其的性能和稳定性。如何根据实际情况提高服务的性能，其实有很多技巧。这章我们分享从实战经验中总结出来的 elasticsearch 性能优化，主要从硬件配置优化、索引优化设置、查询方面优化、数据结构优化、集群架构优化等方面讲解。 1. 硬件配置优化 升级硬件设备配...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/es/elasticsearch-y-peformance.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"ES详解 - 优化：ElasticSearch性能优化详解"}],["meta",{"property":"og:description","content":"Elasticsearch 作为一个开箱即用的产品，在生产环境上线之后，我们其实不一定能确保其的性能和稳定性。如何根据实际情况提高服务的性能，其实有很多技巧。这章我们分享从实战经验中总结出来的 elasticsearch 性能优化，主要从硬件配置优化、索引优化设置、查询方面优化、数据结构优化、集群架构优化等方面讲解。 1. 硬件配置优化 升级硬件设备配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 硬件配置优化","slug":"_1-硬件配置优化","link":"#_1-硬件配置优化","children":[{"level":3,"title":"1.1 CPU 配置","slug":"_1-1-cpu-配置","link":"#_1-1-cpu-配置","children":[]},{"level":3,"title":"1.2 内存配置","slug":"_1-2-内存配置","link":"#_1-2-内存配置","children":[]},{"level":3,"title":"1.3 磁盘","slug":"_1-3-磁盘","link":"#_1-3-磁盘","children":[]}]},{"level":2,"title":"2. 索引优化设置","slug":"_2-索引优化设置","link":"#_2-索引优化设置","children":[{"level":3,"title":"2.1 批量提交","slug":"_2-1-批量提交","link":"#_2-1-批量提交","children":[]},{"level":3,"title":"2.2 增加 Refresh 时间间隔","slug":"_2-2-增加-refresh-时间间隔","link":"#_2-2-增加-refresh-时间间隔","children":[]},{"level":3,"title":"2.3 修改 index_buffer_size 的设置","slug":"_2-3-修改-index-buffer-size-的设置","link":"#_2-3-修改-index-buffer-size-的设置","children":[]},{"level":3,"title":"2.4 修改 translog 相关的设置","slug":"_2-4-修改-translog-相关的设置","link":"#_2-4-修改-translog-相关的设置","children":[]},{"level":3,"title":"2.5 注意 _id 字段的使用","slug":"_2-5-注意-id-字段的使用","link":"#_2-5-注意-id-字段的使用","children":[]},{"level":3,"title":"2.6 注意 _all 字段及 _source 字段的使用","slug":"_2-6-注意-all-字段及-source-字段的使用","link":"#_2-6-注意-all-字段及-source-字段的使用","children":[]},{"level":3,"title":"2.7 合理的配置使用 index 属性","slug":"_2-7-合理的配置使用-index-属性","link":"#_2-7-合理的配置使用-index-属性","children":[]},{"level":3,"title":"2.8 减少副本数量","slug":"_2-8-减少副本数量","link":"#_2-8-减少副本数量","children":[]}]},{"level":2,"title":"3. 查询方面优化","slug":"_3-查询方面优化","link":"#_3-查询方面优化","children":[{"level":3,"title":"3.1 路由优化","slug":"_3-1-路由优化","link":"#_3-1-路由优化","children":[]},{"level":3,"title":"3.2 Filter VS Query","slug":"_3-2-filter-vs-query","link":"#_3-2-filter-vs-query","children":[]},{"level":3,"title":"3.3 深度翻页","slug":"_3-3-深度翻页","link":"#_3-3-深度翻页","children":[]},{"level":3,"title":"3.4 脚本（script）合理使用","slug":"_3-4-脚本-script-合理使用","link":"#_3-4-脚本-script-合理使用","children":[]},{"level":3,"title":"3.5 Cache的设置及使用","slug":"_3-5-cache的设置及使用","link":"#_3-5-cache的设置及使用","children":[]},{"level":3,"title":"3.6 更多查询优化经验","slug":"_3-6-更多查询优化经验","link":"#_3-6-更多查询优化经验","children":[]},{"level":3,"title":"3.7 通过开启慢查询配置定位慢查询","slug":"_3-7-通过开启慢查询配置定位慢查询","link":"#_3-7-通过开启慢查询配置定位慢查询","children":[]}]},{"level":2,"title":"4. 数据结构优化","slug":"_4-数据结构优化","link":"#_4-数据结构优化","children":[{"level":3,"title":"4.1 尽量减少不需要的字段","slug":"_4-1-尽量减少不需要的字段","link":"#_4-1-尽量减少不需要的字段","children":[]},{"level":3,"title":"4.2 Nested Object vs Parent/Child","slug":"_4-2-nested-object-vs-parent-child","link":"#_4-2-nested-object-vs-parent-child","children":[]},{"level":3,"title":"4.3 选择静态映射，非必需时，禁止动态映射","slug":"_4-3-选择静态映射-非必需时-禁止动态映射","link":"#_4-3-选择静态映射-非必需时-禁止动态映射","children":[]},{"level":3,"title":"4.4 document 模型设计","slug":"_4-4-document-模型设计","link":"#_4-4-document-模型设计","children":[]}]},{"level":2,"title":"5. 集群架构设计","slug":"_5-集群架构设计","link":"#_5-集群架构设计","children":[{"level":3,"title":"5.1 主节点、数据节点和协调节点分离","slug":"_5-1-主节点、数据节点和协调节点分离","link":"#_5-1-主节点、数据节点和协调节点分离","children":[]},{"level":3,"title":"5.2 关闭 data 节点服务器中的 http 功能","slug":"_5-2-关闭-data-节点服务器中的-http-功能","link":"#_5-2-关闭-data-节点服务器中的-http-功能","children":[]},{"level":3,"title":"5.3 一台服务器上最好只部署一个 node","slug":"_5-3-一台服务器上最好只部署一个-node","link":"#_5-3-一台服务器上最好只部署一个-node","children":[]},{"level":3,"title":"5.4 集群分片设置","slug":"_5-4-集群分片设置","link":"#_5-4-集群分片设置","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":25.41,"words":7624},"filePathRelative":"db/es/elasticsearch-y-peformance.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
