const t=JSON.parse('{"key":"v-931707cc","path":"/deploy/mq-rabbitmq/rabbitmq-i-limit.html","title":"RabbitMQ消费端限流","lang":"zh-CN","frontmatter":{"description":"1. 为什么要进行消费者端限流 假设有个场景，RabbitMQ服务器上堆积上万条未处理的消息，我们随便打开一个消费者客户端会出现下面情况：巨量的消息同时推送过来，但是我们单个消费者客户端无法同时处理这么多数据，服务器可能卡死 2. 什么是消费端限流 RabbitMQ提供了一种qos(服务质量保证)功能，即在非自动确认消息的情况下，如果一定数量的消息(通...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/deploy/mq-rabbitmq/rabbitmq-i-limit.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"RabbitMQ消费端限流"}],["meta",{"property":"og:description","content":"1. 为什么要进行消费者端限流 假设有个场景，RabbitMQ服务器上堆积上万条未处理的消息，我们随便打开一个消费者客户端会出现下面情况：巨量的消息同时推送过来，但是我们单个消费者客户端无法同时处理这么多数据，服务器可能卡死 2. 什么是消费端限流 RabbitMQ提供了一种qos(服务质量保证)功能，即在非自动确认消息的情况下，如果一定数量的消息(通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 为什么要进行消费者端限流","slug":"_1-为什么要进行消费者端限流","link":"#_1-为什么要进行消费者端限流","children":[]},{"level":2,"title":"2. 什么是消费端限流","slug":"_2-什么是消费端限流","link":"#_2-什么是消费端限流","children":[]},{"level":2,"title":"3. 消费端限流的实现思路","slug":"_3-消费端限流的实现思路","link":"#_3-消费端限流的实现思路","children":[]},{"level":2,"title":"4. 具体实现","slug":"_4-具体实现","link":"#_4-具体实现","children":[]},{"level":2,"title":"5. 测试","slug":"_5-测试","link":"#_5-测试","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":2.83,"words":849},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-i-limit.md","localizedDate":"2023年2月20日","autoDesc":true}');export{t as data};