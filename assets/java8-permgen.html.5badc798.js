const e=JSON.parse('{"key":"v-1831e7dd","path":"/java/java8/java8-permgen.html","title":"Java 8 - \u79FB\u9664JVM\u6C38\u4E45\u4EE3Permgen","lang":"zh-CN","frontmatter":{"order":60,"category":["Java"],"summary":"Java 8 - \u79FB\u9664JVM\u6C38\u4E45\u4EE3Permgen \\" \u5F88\u591A\u5F00\u53D1\u8005\u90FD\u5728\u5176\u7CFB\u7EDF\u4E2D\u89C1\u8FC7\u201Cjava.lang.OutOfMemoryError: PermGen space\u201D\u8FD9\u4E00\u95EE\u9898\u3002\u8FD9\u5F80\u5F80\u662F\u7531\u7C7B\u52A0\u8F7D\u5668\u76F8\u5173\u7684\u5185\u5B58\u6CC4\u6F0F\u4EE5\u53CA\u65B0\u7C7B\u52A0\u8F7D\u5668\u7684\u521B\u5EFA\u5BFC\u81F4\u7684\uFF0C\u901A\u5E38\u51FA\u73B0\u4E8E\u4EE3\u7801\u70ED\u90E8\u7F72\u65F6\u3002\u76F8\u5BF9\u4E8E\u6B63\u5F0F\u4EA7\u54C1\uFF0C\u8BE5\u95EE\u9898\u5728\u5F00\u53D1\u673A\u4E0A\u51FA\u73B0\u7684\u9891\u7387\u66F4\u9AD8\uFF0C\u5728\u4EA7\u54C1\u4E2D\u6700\u5E38\u89C1\u7684\u201C\u95EE\u9898\u201D\u662F\u9ED8\u8BA4\u503C\u592A\u4F4E\u4E86\u3002\u5E38\u7528\u7684\u89E3\u51B3\u65B9","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/java8/java8-permgen.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Java 8 - \u79FB\u9664JVM\u6C38\u4E45\u4EE3Permgen"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-03T15:00:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-03T15:00:39.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. PermGen space\u7B80\u5355\u4ECB\u7ECD","slug":"_1-permgen-space\u7B80\u5355\u4ECB\u7ECD","children":[]},{"level":2,"title":"2. \u5143\u7A7A\u95F4(MetaSpace)\u4E00\u79CD\u65B0\u7684\u5185\u5B58\u7A7A\u95F4\u8BDE\u751F","slug":"_2-\u5143\u7A7A\u95F4-metaspace-\u4E00\u79CD\u65B0\u7684\u5185\u5B58\u7A7A\u95F4\u8BDE\u751F","children":[]},{"level":2,"title":"3. PermGen vs. Metaspace \u8FD0\u884C\u65F6\u6BD4\u8F83","slug":"_3-permgen-vs-metaspace-\u8FD0\u884C\u65F6\u6BD4\u8F83","children":[{"level":3,"title":"3.1 JDK 1.7 @64-bit \u2013 PermGen \u8017\u5C3D\u6D4B\u8BD5","slug":"_3-1-jdk-1-7-64-bit-\u2013-permgen-\u8017\u5C3D\u6D4B\u8BD5","children":[]},{"level":3,"title":"3.2 JDK 1.8 @64-bit \u2013 Metaspace\u5927\u5C0F\u52A8\u6001\u8C03\u6574\u6D4B\u8BD5","slug":"_3-2-jdk-1-8-64-bit-\u2013-metaspace\u5927\u5C0F\u52A8\u6001\u8C03\u6574\u6D4B\u8BD5","children":[]},{"level":3,"title":"3.3 JDK 1.8 @64-bit \u2013 Metaspace \u53D7\u9650\u6D4B\u8BD5","slug":"_3-3-jdk-1-8-64-bit-\u2013-metaspace-\u53D7\u9650\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"4. \u603B\u7ED3","slug":"_4-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1662217239000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":6.96,"words":2088},"filePathRelative":"java/java8/java8-permgen.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};
