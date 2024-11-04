const e=JSON.parse('{"key":"v-07e10888","path":"/db/solr/solr-b-index.html","title":"Solr倒排索引原理","lang":"zh-CN","frontmatter":{"description":"1. 简介 solr是基于Lucence开发的企业级搜索引擎技术，而lucence的原理是倒排索引。那么什么是倒排索引呢？ 1.1 正排索引 我们传统的方式（正排索引）是从关键点出发，然后再通过关键点找到关键点代表的信息中能够满足搜索条件的特定信息，既通过KEY寻找VALUE。 例如我们sql 语句，他是通过key ,来找值 正排索引从文档编号找词： ...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/db/solr/solr-b-index.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Solr倒排索引原理"}],["meta",{"property":"og:description","content":"1. 简介 solr是基于Lucence开发的企业级搜索引擎技术，而lucence的原理是倒排索引。那么什么是倒排索引呢？ 1.1 正排索引 我们传统的方式（正排索引）是从关键点出发，然后再通过关键点找到关键点代表的信息中能够满足搜索条件的特定信息，既通过KEY寻找VALUE。 例如我们sql 语句，他是通过key ,来找值 正排索引从文档编号找词： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 正排索引","slug":"_1-1-正排索引","link":"#_1-1-正排索引","children":[]},{"level":3,"title":"1.2 倒排索引","slug":"_1-2-倒排索引","link":"#_1-2-倒排索引","children":[]}]},{"level":2,"title":"2. 索引的创建过程","slug":"_2-索引的创建过程","link":"#_2-索引的创建过程","children":[{"level":3,"title":"2.1 分词组件（Tokenizer）","slug":"_2-1-分词组件-tokenizer","link":"#_2-1-分词组件-tokenizer","children":[]},{"level":3,"title":"2.2 语言处理组件（LinguisticProcessor）：","slug":"_2-2-语言处理组件-linguisticprocessor","link":"#_2-2-语言处理组件-linguisticprocessor","children":[]},{"level":3,"title":"2.4 索引组件（Indexer）","slug":"_2-4-索引组件-indexer","link":"#_2-4-索引组件-indexer","children":[]}]},{"level":2,"title":"3. 索引的检索","slug":"_3-索引的检索","link":"#_3-索引的检索","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.71,"words":1112},"filePathRelative":"db/solr/solr-b-index.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};