const e=JSON.parse('{"key":"v-a8d97b6e","path":"/java/thread/java-thread-y-thread-communication.html","title":"Java \u5E76\u53D1 - Java\u7EBF\u7A0B\u901A\u4FE1\u65B9\u5F0F","lang":"zh-CN","frontmatter":{"order":48,"category":["Java","\u5E76\u53D1"],"summary":"Java \u5E76\u53D1 - Java\u7EBF\u7A0B\u901A\u4FE1\u65B9\u5F0F 1. \u7B80\u4ECB \u7EBF\u7A0B\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A\u5171\u4EAB\u5185\u5B58\u548C\u6D88\u606F\u4F20\u9012\u3002 \u4E0D\u540C\u8FDB\u7A0B\u95F4\u7EBF\u7A0B\u901A\u4FE1\u7B49\u540C\u4E8E\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF0C\u540C\u4E00\u8FDB\u7A0B\u95F4\u53EF\u7528\u5171\u4EAB\u5185\u5B58\u5B9E\u73B0\u3002 1.1 \u57FA\u4E8E\u5171\u4EAB\u5185\u5B58 \u5728\u5171\u4EAB\u5185\u5B58\u7684\u5E76\u53D1\u6A21\u578B\u91CC\uFF0C\u7EBF\u7A0B\u4E4B\u95F4\u5171\u4EAB\u7A0B\u5E8F\u7684\u516C\u5171\u72B6\u6001\uFF0C\u7EBF\u7A0B\u4E4B\u95F4\u901A\u8FC7\u5199-\u8BFB\u5185\u5B58\u4E2D\u7684\u516C\u5171\u72B6\u6001\u6765\u9690\u5F0F\u8FDB\u884C\u901A\u4FE1\uFF0C\u5178\u578B\u7684\u5171\u4EAB\u5185\u5B58\u901A\u4FE1\u65B9\u5F0F\u5C31\u662F\u901A\u8FC7\u5171\u4EAB\u5BF9\u8C61\u8FDB\u884C\u901A\u4FE1\u3002 \u2460\u540C\u6B65; \u2461while","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/thread/java-thread-y-thread-communication.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Java \u5E76\u53D1 - Java\u7EBF\u7A0B\u901A\u4FE1\u65B9\u5F0F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-03T15:27:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-03T15:27:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[{"level":3,"title":"1.1 \u57FA\u4E8E\u5171\u4EAB\u5185\u5B58","slug":"_1-1-\u57FA\u4E8E\u5171\u4EAB\u5185\u5B58","link":"#_1-1-\u57FA\u4E8E\u5171\u4EAB\u5185\u5B58","children":[]},{"level":3,"title":"1.2 \u57FA\u4E8E\u6D88\u606F\u4F20\u9012","slug":"_1-2-\u57FA\u4E8E\u6D88\u606F\u4F20\u9012","link":"#_1-2-\u57FA\u4E8E\u6D88\u606F\u4F20\u9012","children":[]}]},{"level":2,"title":"2. \u5177\u4F53\u901A\u4FE1\u65B9\u5F0F","slug":"_2-\u5177\u4F53\u901A\u4FE1\u65B9\u5F0F","link":"#_2-\u5177\u4F53\u901A\u4FE1\u65B9\u5F0F","children":[{"level":3,"title":"2.1 \u540C\u6B65\uFF08synchronized\u5173\u952E\u5B57\uFF09","slug":"_2-1-\u540C\u6B65-synchronized\u5173\u952E\u5B57","link":"#_2-1-\u540C\u6B65-synchronized\u5173\u952E\u5B57","children":[]},{"level":3,"title":"2.2 while\u8F6E\u8BE2\u7684\u65B9\u5F0F","slug":"_2-2-while\u8F6E\u8BE2\u7684\u65B9\u5F0F","link":"#_2-2-while\u8F6E\u8BE2\u7684\u65B9\u5F0F","children":[]},{"level":3,"title":"2.3 wait/notify\u673A\u5236","slug":"_2-3-wait-notify\u673A\u5236","link":"#_2-3-wait-notify\u673A\u5236","children":[]},{"level":3,"title":"2.4 \u7BA1\u9053\u901A\u4FE1","slug":"_2-4-\u7BA1\u9053\u901A\u4FE1","link":"#_2-4-\u7BA1\u9053\u901A\u4FE1","children":[]}]},{"level":2,"title":"3. \u603B\u7ED3","slug":"_3-\u603B\u7ED3","link":"#_3-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1670081221000,"updatedTime":1670081221000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.26,"words":1579},"filePathRelative":"java/thread/java-thread-y-thread-communication.md","localizedDate":"2022\u5E7412\u67083\u65E5"}');export{e as data};
