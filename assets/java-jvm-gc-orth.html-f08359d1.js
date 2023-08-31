const e=JSON.parse('{"key":"v-d5c342f4","path":"/java/jvm/java-jvm-gc-orth.html","title":"垃圾收集器垃圾收集算法","lang":"zh-CN","frontmatter":{"category":["Java","JVM"],"description":"image-20190925225149527 1. 标记-清除算法 该算法分为“标记”和“清除”阶段：首先标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题： 1. 效率问题 2. 空间问题（标记清除后会产生大量不连续的碎片） image-20...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/jvm/java-jvm-gc-orth.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"垃圾收集器垃圾收集算法"}],["meta",{"property":"og:description","content":"image-20190925225149527 1. 标记-清除算法 该算法分为“标记”和“清除”阶段：首先标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题： 1. 效率问题 2. 空间问题（标记清除后会产生大量不连续的碎片） image-20..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 标记-清除算法","slug":"_1-标记-清除算法","link":"#_1-标记-清除算法","children":[]},{"level":2,"title":"2. 复制算法","slug":"_2-复制算法","link":"#_2-复制算法","children":[]},{"level":2,"title":"3. 标记-整理算法","slug":"_3-标记-整理算法","link":"#_3-标记-整理算法","children":[]},{"level":2,"title":"4. 分代收集算法","slug":"_4-分代收集算法","link":"#_4-分代收集算法","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":2.05,"words":615},"filePathRelative":"java/jvm/java-jvm-gc-orth.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
