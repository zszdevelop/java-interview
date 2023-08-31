const e=JSON.parse('{"key":"v-2c851e53","path":"/java/jvm/java-jvm-gc-g1.html","title":"GC - Java 垃圾回收器之G1详解","lang":"zh-CN","frontmatter":{"order":120,"category":["Java","JVM"],"description":"1. 概述 G1垃圾回收器是在Java7 update 4之后引入的一个新的垃圾回收器。G1是一个分代的，增量的，并行与并发的标记-复制垃圾回收器。它的设计目标是为了适应现在不断扩大的内存和不断增加的处理器数量，进一步降低暂停时间（pause time），同时兼顾良好的吞吐量。G1回收器和CMS比起来，有以下不同： G1垃圾回收器是compacting...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/jvm/java-jvm-gc-g1.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"GC - Java 垃圾回收器之G1详解"}],["meta",{"property":"og:description","content":"1. 概述 G1垃圾回收器是在Java7 update 4之后引入的一个新的垃圾回收器。G1是一个分代的，增量的，并行与并发的标记-复制垃圾回收器。它的设计目标是为了适应现在不断扩大的内存和不断增加的处理器数量，进一步降低暂停时间（pause time），同时兼顾良好的吞吐量。G1回收器和CMS比起来，有以下不同： G1垃圾回收器是compacting..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. G1的内存模型","slug":"_2-g1的内存模型","link":"#_2-g1的内存模型","children":[{"level":3,"title":"2.1 分区概念","slug":"_2-1-分区概念","link":"#_2-1-分区概念","children":[]},{"level":3,"title":"2.2 分代模型","slug":"_2-2-分代模型","link":"#_2-2-分代模型","children":[]},{"level":3,"title":"2.3 分区模型","slug":"_2-3-分区模型","link":"#_2-3-分区模型","children":[]},{"level":3,"title":"2.4 收集集合 (CSet)","slug":"_2-4-收集集合-cset","link":"#_2-4-收集集合-cset","children":[]}]},{"level":2,"title":"3. G1的活动周期","slug":"_3-g1的活动周期","link":"#_3-g1的活动周期","children":[{"level":3,"title":"3.1 G1垃圾收集活动汇总","slug":"_3-1-g1垃圾收集活动汇总","link":"#_3-1-g1垃圾收集活动汇总","children":[]},{"level":3,"title":"3.2 RSet的维护","slug":"_3-2-rset的维护","link":"#_3-2-rset的维护","children":[]},{"level":3,"title":"3.3 并发标记周期 Concurrent Marking Cycle","slug":"_3-3-并发标记周期-concurrent-marking-cycle","link":"#_3-3-并发标记周期-concurrent-marking-cycle","children":[]},{"level":3,"title":"3.4 年轻代收集/混合收集周期","slug":"_3-4-年轻代收集-混合收集周期","link":"#_3-4-年轻代收集-混合收集周期","children":[]},{"level":3,"title":"3.5 并发标记周期后的年轻代收集 Young Collection Following Concurrent Marking Cycle","slug":"_3-5-并发标记周期后的年轻代收集-young-collection-following-concurrent-marking-cycle","link":"#_3-5-并发标记周期后的年轻代收集-young-collection-following-concurrent-marking-cycle","children":[]}]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":32.84,"words":9852},"filePathRelative":"java/jvm/java-jvm-gc-g1.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
