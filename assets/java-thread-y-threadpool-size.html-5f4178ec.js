const e=JSON.parse('{"key":"v-0b46d8ce","path":"/java/thread/java-thread-y-threadpool-size.html","title":"如何合理配置线程池的大小","lang":"zh-CN","frontmatter":{"description":"1. 理论背景 一般需要根据任务的类型来配置线程池大小： 如果是CPU密集型任务，就需要尽量压榨CPU，应配置尽可能小的线程，参考值可以设为 NCPU+1; 如果是IO密集型任务，因为IO操作不占用CPU，不要让CPU闲下来，应加大线程数量,参考值可以设置为2NCPU+1; 当然，这只是一个参考值，具体的设置还需要根据实际情况进行调整，比如可以先将线程...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/thread/java-thread-y-threadpool-size.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"如何合理配置线程池的大小"}],["meta",{"property":"og:description","content":"1. 理论背景 一般需要根据任务的类型来配置线程池大小： 如果是CPU密集型任务，就需要尽量压榨CPU，应配置尽可能小的线程，参考值可以设为 NCPU+1; 如果是IO密集型任务，因为IO操作不占用CPU，不要让CPU闲下来，应加大线程数量,参考值可以设置为2NCPU+1; 当然，这只是一个参考值，具体的设置还需要根据实际情况进行调整，比如可以先将线程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 理论背景","slug":"_1-理论背景","link":"#_1-理论背景","children":[]},{"level":2,"title":"2. 什么是io秘籍和CPU 秘籍","slug":"_2-什么是io秘籍和cpu-秘籍","link":"#_2-什么是io秘籍和cpu-秘籍","children":[]},{"level":2,"title":"3. 实例测试","slug":"_3-实例测试","link":"#_3-实例测试","children":[{"level":3,"title":"3.1 实验分析","slug":"_3-1-实验分析","link":"#_3-1-实验分析","children":[]}]},{"level":2,"title":"代码测算","slug":"代码测算","link":"#代码测算","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.41,"words":1023},"filePathRelative":"java/thread/java-thread-y-threadpool-size.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
