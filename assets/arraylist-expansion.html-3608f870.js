const t=JSON.parse('{"key":"v-7621b86d","path":"/java/collection/arraylist-expansion.html","title":"ArrayList 的扩容机制","lang":"zh-CN","frontmatter":{"order":930,"category":["Java"],"description":"1.如何实现扩容 底层主要是这三个私有方法配合实现grow(),`grow(int minCapacity),newCapacity(int minCapacity)扩容。最终是调用了Arrays.copyOf`方法来进行扩充数组容量的。默认情况下，新的容量是原容量的1.5倍。 ``` // 扩容一个 private Object[] grow() {...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/collection/arraylist-expansion.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"ArrayList 的扩容机制"}],["meta",{"property":"og:description","content":"1.如何实现扩容 底层主要是这三个私有方法配合实现grow(),`grow(int minCapacity),newCapacity(int minCapacity)扩容。最终是调用了Arrays.copyOf`方法来进行扩充数组容量的。默认情况下，新的容量是原容量的1.5倍。 ``` // 扩容一个 private Object[] grow() {..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1.如何实现扩容","slug":"_1-如何实现扩容","link":"#_1-如何实现扩容","children":[]},{"level":2,"title":"2. 手动扩容","slug":"_2-手动扩容","link":"#_2-手动扩容","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.36,"words":408},"filePathRelative":"java/collection/arraylist-expansion.md","localizedDate":"2023年2月20日","autoDesc":true}');export{t as data};
