const e=JSON.parse('{"key":"v-a67ec6d6","path":"/java/java8/java8-optional.html","title":"Java 8 - Optional类深度解析","lang":"zh-CN","frontmatter":{"order":30,"category":["Java"],"description":"个人用得比较少，首先性能不见得比 == null 好，而且使用比较麻烦。现在大部分使用hutool 的ObjectUtil来代替。 但如果在异步编程中，还是挺好用的。 现在框架中只有JPA 在大量使用Optional 身为一名Java程序员，大家可能都有这样的经历: 调用一个方法得到了返回值却不能直接将返回值作为参数去调用别的方法。我们首先要判断这个返...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/java8/java8-optional.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java 8 - Optional类深度解析"}],["meta",{"property":"og:description","content":"个人用得比较少，首先性能不见得比 == null 好，而且使用比较麻烦。现在大部分使用hutool 的ObjectUtil来代替。 但如果在异步编程中，还是挺好用的。 现在框架中只有JPA 在大量使用Optional 身为一名Java程序员，大家可能都有这样的经历: 调用一个方法得到了返回值却不能直接将返回值作为参数去调用别的方法。我们首先要判断这个返..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. Optional类包含的方法","slug":"_1-optional类包含的方法","link":"#_1-optional类包含的方法","children":[{"level":3,"title":"1.1 of","slug":"_1-1-of","link":"#_1-1-of","children":[]},{"level":3,"title":"1.2 ofNullable","slug":"_1-2-ofnullable","link":"#_1-2-ofnullable","children":[]},{"level":3,"title":"1.3 isPresent","slug":"_1-3-ispresent","link":"#_1-3-ispresent","children":[]},{"level":3,"title":"1.4 get","slug":"_1-4-get","link":"#_1-4-get","children":[]},{"level":3,"title":"1.5 ifPresent","slug":"_1-5-ifpresent","link":"#_1-5-ifpresent","children":[]},{"level":3,"title":"1.6 orElse","slug":"_1-6-orelse","link":"#_1-6-orelse","children":[]},{"level":3,"title":"1.7 orElseGet","slug":"_1-7-orelseget","link":"#_1-7-orelseget","children":[]},{"level":3,"title":"1.8 orElseThrow","slug":"_1-8-orelsethrow","link":"#_1-8-orelsethrow","children":[]},{"level":3,"title":"1.9 map","slug":"_1-9-map","link":"#_1-9-map","children":[]},{"level":3,"title":"1.10 flatMap","slug":"_1-10-flatmap","link":"#_1-10-flatmap","children":[]},{"level":3,"title":"1.11 filter","slug":"_1-11-filter","link":"#_1-11-filter","children":[]}]},{"level":2,"title":"2. 一些例子","slug":"_2-一些例子","link":"#_2-一些例子","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":8.9,"words":2671},"filePathRelative":"java/java8/java8-optional.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
