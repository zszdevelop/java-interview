const e=JSON.parse('{"key":"v-a8d97b6e","path":"/java/thread/java-thread-y-thread-communication.html","title":"Java 并发 - Java线程通信方式","lang":"zh-CN","frontmatter":{"order":60,"category":["Java","并发"],"description":"1. 简介 线程间通信方式有两种：共享内存和消息传递。 不同进程间线程通信等同于进程间通信，同一进程间可用共享内存实现。 1.1 基于共享内存 在共享内存的并发模型里，线程之间共享程序的公共状态，线程之间通过写-读内存中的公共状态来隐式进行通信，典型的共享内存通信方式就是通过共享对象进行通信。 ①同步; ②while轮询的方式; 1.2 基于消息传递 ...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/thread/java-thread-y-thread-communication.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java 并发 - Java线程通信方式"}],["meta",{"property":"og:description","content":"1. 简介 线程间通信方式有两种：共享内存和消息传递。 不同进程间线程通信等同于进程间通信，同一进程间可用共享内存实现。 1.1 基于共享内存 在共享内存的并发模型里，线程之间共享程序的公共状态，线程之间通过写-读内存中的公共状态来隐式进行通信，典型的共享内存通信方式就是通过共享对象进行通信。 ①同步; ②while轮询的方式; 1.2 基于消息传递 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 基于共享内存","slug":"_1-1-基于共享内存","link":"#_1-1-基于共享内存","children":[]},{"level":3,"title":"1.2 基于消息传递","slug":"_1-2-基于消息传递","link":"#_1-2-基于消息传递","children":[]}]},{"level":2,"title":"2. 具体通信方式","slug":"_2-具体通信方式","link":"#_2-具体通信方式","children":[{"level":3,"title":"2.1 同步（synchronized关键字）","slug":"_2-1-同步-synchronized关键字","link":"#_2-1-同步-synchronized关键字","children":[]},{"level":3,"title":"2.2 while轮询的方式","slug":"_2-2-while轮询的方式","link":"#_2-2-while轮询的方式","children":[]},{"level":3,"title":"2.3 wait/notify机制","slug":"_2-3-wait-notify机制","link":"#_2-3-wait-notify机制","children":[]},{"level":3,"title":"2.4 管道通信","slug":"_2-4-管道通信","link":"#_2-4-管道通信","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.26,"words":1579},"filePathRelative":"java/thread/java-thread-y-thread-communication.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
