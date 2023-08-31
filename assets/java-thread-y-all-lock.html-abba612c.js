const e=JSON.parse('{"key":"v-57e51cc5","path":"/java/thread/java-thread-y-all-lock.html","title":"Java并发 - Java中所有的锁","lang":"zh-CN","frontmatter":{"order":40,"category":["Java","并发"],"description":"0. 简介 Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码（本文中的源码来自JDK 8和Netty 3.10.6）、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。 Java中往往是按照是否含有某一特性来定义锁，我们通过特性将锁进行分组归类，再使用对比的方式进行介绍，帮助...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/thread/java-thread-y-all-lock.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java并发 - Java中所有的锁"}],["meta",{"property":"og:description","content":"0. 简介 Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码（本文中的源码来自JDK 8和Netty 3.10.6）、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。 Java中往往是按照是否含有某一特性来定义锁，我们通过特性将锁进行分组归类，再使用对比的方式进行介绍，帮助..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"0. 简介","slug":"_0-简介","link":"#_0-简介","children":[]},{"level":2,"title":"1. 乐观锁 VS 悲观锁","slug":"_1-乐观锁-vs-悲观锁","link":"#_1-乐观锁-vs-悲观锁","children":[]},{"level":2,"title":"2. 自旋锁 VS 适应性自旋锁","slug":"_2-自旋锁-vs-适应性自旋锁","link":"#_2-自旋锁-vs-适应性自旋锁","children":[]},{"level":2,"title":"3. 无锁 VS 偏向锁 VS 轻量级锁 VS 重量级锁","slug":"_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁","link":"#_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁","children":[]},{"level":2,"title":"4. 公平锁 VS 非公平锁","slug":"_4-公平锁-vs-非公平锁","link":"#_4-公平锁-vs-非公平锁","children":[]},{"level":2,"title":"5. 可重入锁 VS 非可重入锁","slug":"_5-可重入锁-vs-非可重入锁","link":"#_5-可重入锁-vs-非可重入锁","children":[]},{"level":2,"title":"6. 独享锁(排他锁) VS 共享锁","slug":"_6-独享锁-排他锁-vs-共享锁","link":"#_6-独享锁-排他锁-vs-共享锁","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":11.85,"words":3555},"filePathRelative":"java/thread/java-thread-y-all-lock.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
