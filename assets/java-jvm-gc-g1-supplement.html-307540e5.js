const e=JSON.parse('{"key":"v-2765c639","path":"/java/jvm/java-jvm-gc-g1-supplement.html","title":"GC - Java 垃圾回收器之G1（补充）","lang":"zh-CN","frontmatter":{"order":121,"category":["Java","JVM"],"description":"1. 前言 G1:满足高吞吐量的同时满足GC停顿的时间尽可能短 G1收集器是一款在server端运行的垃圾收集器，专门针对于拥有多核处理器和大内存的机器，在JDK 7u4版本发行时被正式推出，在JDK9中更被指定为官方GC收集器。它满足高吞吐量的同时满足GC停顿的时间尽可能短。 1.1. G1 优势 G1收集器专门针对以下应用场景设计 可以像CMS收集...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/jvm/java-jvm-gc-g1-supplement.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"GC - Java 垃圾回收器之G1（补充）"}],["meta",{"property":"og:description","content":"1. 前言 G1:满足高吞吐量的同时满足GC停顿的时间尽可能短 G1收集器是一款在server端运行的垃圾收集器，专门针对于拥有多核处理器和大内存的机器，在JDK 7u4版本发行时被正式推出，在JDK9中更被指定为官方GC收集器。它满足高吞吐量的同时满足GC停顿的时间尽可能短。 1.1. G1 优势 G1收集器专门针对以下应用场景设计 可以像CMS收集..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[{"level":3,"title":"1.1. G1 优势","slug":"_1-1-g1-优势","link":"#_1-1-g1-优势","children":[]},{"level":3,"title":"1.2 与CMS不同点","slug":"_1-2-与cms不同点","link":"#_1-2-与cms不同点","children":[]}]},{"level":2,"title":"2. 概览","slug":"_2-概览","link":"#_2-概览","children":[{"level":3,"title":"2.1 分区region 各区比例","slug":"_2-1-分区region-各区比例","link":"#_2-1-分区region-各区比例","children":[]},{"level":3,"title":"2.2 为什么叫G1（全局并发标记->优先回收）","slug":"_2-2-为什么叫g1-全局并发标记-优先回收","link":"#_2-2-为什么叫g1-全局并发标记-优先回收","children":[]},{"level":3,"title":"2.3 暂停预测模型","slug":"_2-3-暂停预测模型","link":"#_2-3-暂停预测模型","children":[]}]},{"level":2,"title":"3. G1中的Region","slug":"_3-g1中的region","link":"#_3-g1中的region","children":[]},{"level":2,"title":"4. G1中的GC收集","slug":"_4-g1中的gc收集","link":"#_4-g1中的gc收集","children":[]},{"level":2,"title":"5.YGC","slug":"_5-ygc","link":"#_5-ygc","children":[{"level":3,"title":"5.1 YGC开始","slug":"_5-1-ygc开始","link":"#_5-1-ygc开始","children":[]},{"level":3,"title":"5.2 YGC结束","slug":"_5-2-ygc结束","link":"#_5-2-ygc结束","children":[]},{"level":3,"title":"5.3 YGC是否需要扫描整个老年代？Rset","slug":"_5-3-ygc是否需要扫描整个老年代-rset","link":"#_5-3-ygc是否需要扫描整个老年代-rset","children":[]}]},{"level":2,"title":"6. MIXGC","slug":"_6-mixgc","link":"#_6-mixgc","children":[{"level":3,"title":"6.1 全局并发标记","slug":"_6-1-全局并发标记","link":"#_6-1-全局并发标记","children":[]},{"level":3,"title":"6.2 全局并发标记总结","slug":"_6-2-全局并发标记总结","link":"#_6-2-全局并发标记总结","children":[]},{"level":3,"title":"6.3 STAB（维持并发GC的正确性）","slug":"_6-3-stab-维持并发gc的正确性","link":"#_6-3-stab-维持并发gc的正确性","children":[]},{"level":3,"title":"6.4 STAB具体细节","slug":"_6-4-stab具体细节","link":"#_6-4-stab具体细节","children":[]}]},{"level":2,"title":"7. G1命令行选项与最佳实践","slug":"_7-g1命令行选项与最佳实践","link":"#_7-g1命令行选项与最佳实践","children":[{"level":3,"title":"7.1 命令行选项","slug":"_7-1-命令行选项","link":"#_7-1-命令行选项","children":[]},{"level":3,"title":"7.2 最佳实践","slug":"_7-2-最佳实践","link":"#_7-2-最佳实践","children":[]},{"level":3,"title":"7.3 完整的G1 GC开关列表","slug":"_7-3-完整的g1-gc开关列表","link":"#_7-3-完整的g1-gc开关列表","children":[]}]},{"level":2,"title":"8. 总结","slug":"_8-总结","link":"#_8-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":20.97,"words":6291},"filePathRelative":"java/jvm/java-jvm-gc-g1-supplement.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
