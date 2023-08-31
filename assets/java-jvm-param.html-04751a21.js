const e=JSON.parse('{"key":"v-7980977e","path":"/java/jvm/java-jvm-param.html","title":"调试排错 - JVM 调优参数","lang":"zh-CN","frontmatter":{"order":210,"category":["Java","JVM"],"description":"本文对JVM涉及的常见的调优参数和垃圾回收参数进行阐述。 1. Jvm常用参数 -Xms; 堆最小值 -Xmx; 堆最大堆值。-Xms与-Xmx 的单位默认字节都是以k、m做单位的。 通常这两个配置参数相等，避免每次空间不足，动态扩容带来的影响。 -Xmn; 新生代大小 -Xss; 每个线程池的堆栈大小。在jdk5以上的版本，每个线程堆栈大小为1m，j...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/jvm/java-jvm-param.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"调试排错 - JVM 调优参数"}],["meta",{"property":"og:description","content":"本文对JVM涉及的常见的调优参数和垃圾回收参数进行阐述。 1. Jvm常用参数 -Xms; 堆最小值 -Xmx; 堆最大堆值。-Xms与-Xmx 的单位默认字节都是以k、m做单位的。 通常这两个配置参数相等，避免每次空间不足，动态扩容带来的影响。 -Xmn; 新生代大小 -Xss; 每个线程池的堆栈大小。在jdk5以上的版本，每个线程堆栈大小为1m，j..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. Jvm常用参数","slug":"_1-jvm常用参数","link":"#_1-jvm常用参数","children":[{"level":3,"title":"1.1 经验","slug":"_1-1-经验","link":"#_1-1-经验","children":[]}]},{"level":2,"title":"2. 垃圾回收","slug":"_2-垃圾回收","link":"#_2-垃圾回收","children":[{"level":3,"title":"2.1 垃圾回收算法 :","slug":"_2-1-垃圾回收算法","link":"#_2-1-垃圾回收算法","children":[]},{"level":3,"title":"2.2 GC考虑的指标","slug":"_2-2-gc考虑的指标","link":"#_2-2-gc考虑的指标","children":[]},{"level":3,"title":"2.3 回收器的JVM参数","slug":"_2-3-回收器的jvm参数","link":"#_2-3-回收器的jvm参数","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":6.28,"words":1885},"filePathRelative":"java/jvm/java-jvm-param.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
