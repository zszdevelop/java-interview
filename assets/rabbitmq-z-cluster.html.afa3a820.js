const e=JSON.parse('{"key":"v-3c1211ca","path":"/deploy/mq-rabbitmq/rabbitmq-z-cluster.html","title":"RabbitMQ\u96C6\u7FA4 - \u96C6\u7FA4\u642D\u5EFA","lang":"zh-CN","frontmatter":{"order":500,"category":["RabbitMQ","MQ"],"summary":"RabbitMQ\u96C6\u7FA4 - \u96C6\u7FA4\u642D\u5EFA 1. \u7B80\u4ECB \u5355\u673A\u95EE\u9898\u5C31\u662F\u4E0D\u80FD\u9AD8\u53EF\u7528\uFF0C\u541E\u5410\u91CF\u6709\u74F6\u9888\u3001\u5B58\u50A8\u6709\u74F6\u9888\u3002\u642D\u5EFA\u96C6\u7FA4\u624D\u80FD\u89E3\u51B3\u8FD9\u4E9B \u4F46\u662F RabbitMQ \u96C6\u7FA4\u4E0D\u80FD\u4FDD\u8BC1\u6D88\u606F\u7684\u4E07\u65E0\u4E00\u5931\uFF0C\u5F53\u96C6\u7FA4\u4E2D\u4E00\u4E2A RabbitMQ \u8282\u70B9\u5D29\u6E83\u65F6\uFF0C\u8BE5\u8282\u70B9\u4E0A\u7684\u6240\u6709\u961F\u5217\u4E2D\u7684\u6D88\u606F\u4E5F\u4F1A\u4E22\u5931\u3002RabbitMQ \u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u8282\u70B9\u90FD\u4F1A\u5907\u4EFD\u6240\u6709\u7684\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5305\u62EC\u4EE5\u4E0B\u5185\u5BB9\uFF1A \u961F\u5217\u5143\u6570\u636E\uFF1A\u961F\u5217\u540D\u79F0\u548C\u5C5E\u6027; \u4EA4","head":[["meta",{"property":"og:url","content":"https://java.isture.com/deploy/mq-rabbitmq/rabbitmq-z-cluster.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"RabbitMQ\u96C6\u7FA4 - \u96C6\u7FA4\u642D\u5EFA"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-25T14:43:25.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-25T14:43:25.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u591A\u673A\u591A\u8282\u70B9\u914D\u7F6E","slug":"_2-\u591A\u673A\u591A\u8282\u70B9\u914D\u7F6E","link":"#_2-\u591A\u673A\u591A\u8282\u70B9\u914D\u7F6E","children":[{"level":3,"title":"2.1 \u90E8\u7F72\u8282\u89C4\u5212\uFF1A","slug":"_2-1-\u90E8\u7F72\u8282\u89C4\u5212","link":"#_2-1-\u90E8\u7F72\u8282\u89C4\u5212","children":[]},{"level":3,"title":"2.2 \u914D\u7F6E\u96C6\u7FA4","slug":"_2-2-\u914D\u7F6E\u96C6\u7FA4","link":"#_2-2-\u914D\u7F6E\u96C6\u7FA4","children":[]},{"level":3,"title":"2.3 \u95ED\u96C6\u7FA4","slug":"_2-3-\u95ED\u96C6\u7FA4","link":"#_2-3-\u95ED\u96C6\u7FA4","children":[]}]},{"level":2,"title":"3. \u96C6\u7FA4\u8282\u70B9\u7C7B\u578B","slug":"_3-\u96C6\u7FA4\u8282\u70B9\u7C7B\u578B","link":"#_3-\u96C6\u7FA4\u8282\u70B9\u7C7B\u578B","children":[{"level":3,"title":"3.1 \u5982\u4F55\u9009\u62E9\u78C1\u76D8\u8282\u70B9\u7C7B\u578B\uFF1F","slug":"_3-1-\u5982\u4F55\u9009\u62E9\u78C1\u76D8\u8282\u70B9\u7C7B\u578B","link":"#_3-1-\u5982\u4F55\u9009\u62E9\u78C1\u76D8\u8282\u70B9\u7C7B\u578B","children":[]}]},{"level":2,"title":"4. \u5254\u9664\u5355\u4E2A\u8282\u70B9","slug":"_4-\u5254\u9664\u5355\u4E2A\u8282\u70B9","link":"#_4-\u5254\u9664\u5355\u4E2A\u8282\u70B9","children":[{"level":3,"title":"4.1 \u9002\u5408\u4E0D\u518D\u8FD0\u884C RabbitMQ \u5E94\u7528","slug":"_4-1-\u9002\u5408\u4E0D\u518D\u8FD0\u884C-rabbitmq-\u5E94\u7528","link":"#_4-1-\u9002\u5408\u4E0D\u518D\u8FD0\u884C-rabbitmq-\u5E94\u7528","children":[]},{"level":3,"title":"4.2 \u7B2C\u4E8C\u79CD\u65B9\u5F0F","slug":"_4-2-\u7B2C\u4E8C\u79CD\u65B9\u5F0F","link":"#_4-2-\u7B2C\u4E8C\u79CD\u65B9\u5F0F","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1664117005000,"updatedTime":1664117005000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":7.76,"words":2329},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-z-cluster.md","localizedDate":"2022\u5E749\u670825\u65E5"}');export{e as data};
