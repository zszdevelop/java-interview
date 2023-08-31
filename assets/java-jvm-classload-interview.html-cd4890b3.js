const e=JSON.parse('{"key":"v-70e08e5c","path":"/java/jvm/java-jvm-classload-interview.html","title":"类加载器（常见面试）","lang":"zh-CN","frontmatter":{"category":["Java","JVM"],"description":"面试官：请说说你理解的类加载器。 我：通过一个类的全限定名来获取描述此类的二进制字节流这个动作放到Java虚拟机外部去实现，以便让应用程序自己决定如何去获取所需要的类。实现这个动作的代码模块称为“类加载器”。 面试官：说说有哪几种类加载器，他们的职责分别是什么，他们之前存在什么样的约定。 我：emmmm，我在纸上边画边讲吧。 类加载的结构如下： ima...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/jvm/java-jvm-classload-interview.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"类加载器（常见面试）"}],["meta",{"property":"og:description","content":"面试官：请说说你理解的类加载器。 我：通过一个类的全限定名来获取描述此类的二进制字节流这个动作放到Java虚拟机外部去实现，以便让应用程序自己决定如何去获取所需要的类。实现这个动作的代码模块称为“类加载器”。 面试官：说说有哪几种类加载器，他们的职责分别是什么，他们之前存在什么样的约定。 我：emmmm，我在纸上边画边讲吧。 类加载的结构如下： ima..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"面试官：请说说你理解的类加载器。","slug":"面试官-请说说你理解的类加载器。","link":"#面试官-请说说你理解的类加载器。","children":[]},{"level":2,"title":"面试官：说说有哪几种类加载器，他们的职责分别是什么，他们之前存在什么样的约定。","slug":"面试官-说说有哪几种类加载器-他们的职责分别是什么-他们之前存在什么样的约定。","link":"#面试官-说说有哪几种类加载器-他们的职责分别是什么-他们之前存在什么样的约定。","children":[]},{"level":2,"title":"**面试官插嘴：**ExtClassLoader为什么没有设置parent？","slug":"面试官插嘴-extclassloader为什么没有设置parent","link":"#面试官插嘴-extclassloader为什么没有设置parent","children":[{"level":3,"title":"双亲委派模型的好处","slug":"双亲委派模型的好处","link":"#双亲委派模型的好处","children":[]}]},{"level":2,"title":"面试官：那自己怎么去实现一个ClassLoader呢？请举个实际的例子。","slug":"面试官-那自己怎么去实现一个classloader呢-请举个实际的例子。","link":"#面试官-那自己怎么去实现一个classloader呢-请举个实际的例子。","children":[]},{"level":2,"title":"**面试官插嘴：**为什么不继承AppClassLoader呢？","slug":"面试官插嘴-为什么不继承appclassloader呢","link":"#面试官插嘴-为什么不继承appclassloader呢","children":[{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1115},"filePathRelative":"java/jvm/java-jvm-classload-interview.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
