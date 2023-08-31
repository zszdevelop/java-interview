const e=JSON.parse('{"key":"v-07e3b648","path":"/db/mongodb/mongo-y-ds.html","title":"Mongo进阶 - WT引擎：数据结构","lang":"zh-CN","frontmatter":{"order":130,"category":["mongodb"],"description":"MongoDB的WiredTiger存储引擎背后采用了什么样的数据结构呢？本文将从常见引擎数据结构，`典型B-Tree数据结构，磁盘数据结构, 内存数据结构, Page数据结构等方面详解介绍。 1. 存储引擎及常见数据结构 存储引擎要做的事情无外乎是将磁盘上的数据读到内存并返回给应用，或者将应用修改的数据由内存写到磁盘上。如何设计一种高效的数据结构和算...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/db/mongodb/mongo-y-ds.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Mongo进阶 - WT引擎：数据结构"}],["meta",{"property":"og:description","content":"MongoDB的WiredTiger存储引擎背后采用了什么样的数据结构呢？本文将从常见引擎数据结构，`典型B-Tree数据结构，磁盘数据结构, 内存数据结构, Page数据结构等方面详解介绍。 1. 存储引擎及常见数据结构 存储引擎要做的事情无外乎是将磁盘上的数据读到内存并返回给应用，或者将应用修改的数据由内存写到磁盘上。如何设计一种高效的数据结构和算..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 存储引擎及常见数据结构","slug":"_1-存储引擎及常见数据结构","link":"#_1-存储引擎及常见数据结构","children":[]},{"level":2,"title":"2. 典型B-Tree数据结构","slug":"_2-典型b-tree数据结构","link":"#_2-典型b-tree数据结构","children":[]},{"level":2,"title":"3. WiredTiger数据文件在磁盘上的数据结构","slug":"_3-wiredtiger数据文件在磁盘上的数据结构","link":"#_3-wiredtiger数据文件在磁盘上的数据结构","children":[]},{"level":2,"title":"4. WiredTiger内存上的基础数据结构","slug":"_4-wiredtiger内存上的基础数据结构","link":"#_4-wiredtiger内存上的基础数据结构","children":[]},{"level":2,"title":"5. page的其它数据结构","slug":"_5-page的其它数据结构","link":"#_5-page的其它数据结构","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":7.05,"words":2114},"filePathRelative":"db/mongodb/mongo-y-ds.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
