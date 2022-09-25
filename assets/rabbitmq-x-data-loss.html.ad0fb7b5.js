const e=JSON.parse('{"key":"v-45fb3960","path":"/deploy/mq-rabbitmq/rabbitmq-x-data-loss.html","title":"RabbitMQ\u95EE\u9898 - \u9632\u6B62\u6570\u636E\u4E22\u5931","lang":"zh-CN","frontmatter":{"order":300,"category":["RabbitMQ","MQ"],"summary":"RabbitMQ\u95EE\u9898 - \u9632\u6B62\u6570\u636E\u4E22\u5931 1. \u5206\u6790\u6570\u636E\u4E22\u5931\u7684\u539F\u56E0 \u5206\u6790RabbitMQ\u6D88\u606F\u4E22\u5931\u7684\u60C5\u51B5\uFF0C\u4E0D\u59A8\u5148\u770B\u770B\u4E00\u6761\u6D88\u606F\u4ECE\u751F\u4EA7\u8005\u53D1\u9001\u5230\u6D88\u8D39\u8005\u6D88\u8D39\u7684\u8FC7\u7A0B\uFF1A \u53EF\u4EE5\u770B\u51FA\uFF0C\u4E00\u6761\u6D88\u606F\u6574\u4E2A\u8FC7\u7A0B\u8981\u7ECF\u5386\u4E24\u6B21\u7684\u7F51\u7EDC\u4F20\u8F93\uFF1A\u4ECE\u751F\u4EA7\u8005\u53D1\u9001\u5230RabbitMQ\u670D\u52A1\u5668\uFF0C\u4ECERabbitMQ\u670D\u52A1\u5668\u53D1\u9001\u5230\u6D88\u8D39\u8005\u3002 \u5728\u6D88\u8D39\u8005\u672A\u6D88\u8D39\u524D\u5B58\u50A8\u5728\u961F\u5217(Queue)\u4E2D\u3002 \u6240\u4EE5\u53EF\u4EE5\u77E5\u9053\uFF0C\u6709\u4E09\u4E2A\u573A\u666F\u4E0B\u662F\u4F1A\u53D1\u751F","head":[["meta",{"property":"og:url","content":"https://java.isture.com/deploy/mq-rabbitmq/rabbitmq-x-data-loss.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"RabbitMQ\u95EE\u9898 - \u9632\u6B62\u6570\u636E\u4E22\u5931"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-25T14:43:25.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-25T14:43:25.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5206\u6790\u6570\u636E\u4E22\u5931\u7684\u539F\u56E0","slug":"_1-\u5206\u6790\u6570\u636E\u4E22\u5931\u7684\u539F\u56E0","link":"#_1-\u5206\u6790\u6570\u636E\u4E22\u5931\u7684\u539F\u56E0","children":[]},{"level":2,"title":"2. \u6D88\u606F\u6301\u4E45\u5316","slug":"_2-\u6D88\u606F\u6301\u4E45\u5316","link":"#_2-\u6D88\u606F\u6301\u4E45\u5316","children":[]},{"level":2,"title":"3. \u6D88\u606F\u786E\u8BA4\u673A\u5236","slug":"_3-\u6D88\u606F\u786E\u8BA4\u673A\u5236","link":"#_3-\u6D88\u606F\u786E\u8BA4\u673A\u5236","children":[{"level":3,"title":"3.1 confirm\u673A\u5236","slug":"_3-1-confirm\u673A\u5236","link":"#_3-1-confirm\u673A\u5236","children":[]},{"level":3,"title":"3.2 \u4E8B\u52A1\u673A\u5236(ACK)","slug":"_3-2-\u4E8B\u52A1\u673A\u5236-ack","link":"#_3-2-\u4E8B\u52A1\u673A\u5236-ack","children":[]}]},{"level":2,"title":"4. \u9047\u5230\u7684\u5751","slug":"_4-\u9047\u5230\u7684\u5751","link":"#_4-\u9047\u5230\u7684\u5751","children":[{"level":3,"title":"4.1 \u542F\u7528nack\u673A\u5236\u540E\uFF0C\u5BFC\u81F4\u7684\u6B7B\u5FAA\u73AF","slug":"_4-1-\u542F\u7528nack\u673A\u5236\u540E-\u5BFC\u81F4\u7684\u6B7B\u5FAA\u73AF","link":"#_4-1-\u542F\u7528nack\u673A\u5236\u540E-\u5BFC\u81F4\u7684\u6B7B\u5FAA\u73AF","children":[]}]},{"level":2,"title":"4.2 double ack","slug":"_4-2-double-ack","link":"#_4-2-double-ack","children":[]},{"level":2,"title":"4.3 \u6027\u80FD\u95EE\u9898","slug":"_4-3-\u6027\u80FD\u95EE\u9898","link":"#_4-3-\u6027\u80FD\u95EE\u9898","children":[]},{"level":2,"title":"4.4 \u542F\u7528\u624B\u52A8ack\u6A21\u5F0F\uFF0C\u5982\u679C\u6CA1\u6709\u53CA\u65F6\u56DE\u590D\uFF0C\u4F1A\u9020\u6210\u961F\u5217\u5F02\u5E38","slug":"_4-4-\u542F\u7528\u624B\u52A8ack\u6A21\u5F0F-\u5982\u679C\u6CA1\u6709\u53CA\u65F6\u56DE\u590D-\u4F1A\u9020\u6210\u961F\u5217\u5F02\u5E38","link":"#_4-4-\u542F\u7528\u624B\u52A8ack\u6A21\u5F0F-\u5982\u679C\u6CA1\u6709\u53CA\u65F6\u56DE\u590D-\u4F1A\u9020\u6210\u961F\u5217\u5F02\u5E38","children":[]},{"level":2,"title":"\u4E94. \u603B\u7ED3","slug":"\u4E94-\u603B\u7ED3","link":"#\u4E94-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663858100000,"updatedTime":1664117005000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":10.79,"words":3237},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-x-data-loss.md","localizedDate":"2022\u5E749\u670822\u65E5"}');export{e as data};
