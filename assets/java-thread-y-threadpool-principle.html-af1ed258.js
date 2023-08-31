const e=JSON.parse('{"key":"v-72483972","path":"/java/thread/java-thread-y-threadpool-principle.html","title":"线程池的具体实现原理","lang":"zh-CN","frontmatter":{"description":"在上一节我们从宏观上介绍了ThreadPoolExecutor，下面我们来深入解析一下线程池的具体实现原理，将从下面几个方面讲解： 1.线程池状态 2.任务的执行 3.线程池中的线程初始化 4.任务缓存队列及排队策略 5.任务拒绝策略 6.线程池的关闭 7.线程池容量的动态调整 1. 线程池状态 在ThreadPoolExecutor中定义了一个vol...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/java/thread/java-thread-y-threadpool-principle.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"线程池的具体实现原理"}],["meta",{"property":"og:description","content":"在上一节我们从宏观上介绍了ThreadPoolExecutor，下面我们来深入解析一下线程池的具体实现原理，将从下面几个方面讲解： 1.线程池状态 2.任务的执行 3.线程池中的线程初始化 4.任务缓存队列及排队策略 5.任务拒绝策略 6.线程池的关闭 7.线程池容量的动态调整 1. 线程池状态 在ThreadPoolExecutor中定义了一个vol..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 线程池状态","slug":"_1-线程池状态","link":"#_1-线程池状态","children":[]},{"level":2,"title":"2. 任务的执行","slug":"_2-任务的执行","link":"#_2-任务的执行","children":[{"level":3,"title":"2.1 线程池例子","slug":"_2-1-线程池例子","link":"#_2-1-线程池例子","children":[]},{"level":3,"title":"2.2 提交到最终执行完毕经历了哪些过程","slug":"_2-2-提交到最终执行完毕经历了哪些过程","link":"#_2-2-提交到最终执行完毕经历了哪些过程","children":[]},{"level":3,"title":"2.3 总结","slug":"_2-3-总结","link":"#_2-3-总结","children":[]}]},{"level":2,"title":"3. 线程池中的线程初始化","slug":"_3-线程池中的线程初始化","link":"#_3-线程池中的线程初始化","children":[]},{"level":2,"title":"4. 任务缓存队列及排队策略","slug":"_4-任务缓存队列及排队策略","link":"#_4-任务缓存队列及排队策略","children":[]},{"level":2,"title":"5. 任务拒绝策略","slug":"_5-任务拒绝策略","link":"#_5-任务拒绝策略","children":[]},{"level":2,"title":"6. 线程池的关闭","slug":"_6-线程池的关闭","link":"#_6-线程池的关闭","children":[]},{"level":2,"title":"7. 线程池容量的动态调整","slug":"_7-线程池容量的动态调整","link":"#_7-线程池容量的动态调整","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":9.01,"words":2702},"filePathRelative":"java/thread/java-thread-y-threadpool-principle.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
