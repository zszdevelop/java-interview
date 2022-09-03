const e=JSON.parse('{"key":"v-4d1780c2","path":"/java/io/java-io-bio.html","title":"Java IO - BIO \u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":80,"category":["Java","IO"],"summary":"Java IO - BIO \u8BE6\u89E3 \\"BIO\u5C31\u662F: blocking IO\u3002\u6700\u5BB9\u6613\u7406\u89E3\u3001\u6700\u5BB9\u6613\u5B9E\u73B0\u7684IO\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5411\u64CD\u4F5C\u7CFB\u7EDF\u8BF7\u6C42\u7F51\u7EDCIO\u64CD\u4F5C\uFF0C\u8FD9\u65F6\u5E94\u7528\u7A0B\u5E8F\u4F1A\u4E00\u76F4\u7B49\u5F85\uFF1B\u53E6\u4E00\u65B9\u9762\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u4E5F\u4F1A\u7B49\u5F85\uFF0C\u76F4\u5230\u7F51\u7EDC\u4E0A\u6709\u6570\u636E\u4F20\u5230\u76D1\u542C\u7AEF\u53E3\uFF1B\u64CD\u4F5C\u7CFB\u7EDF\u5728\u6536\u96C6\u6570\u636E\u540E\uFF0C\u4F1A\u628A\u6570\u636E\u53D1\u9001\u7ED9\u5E94\u7528\u7A0B\u5E8F\uFF1B\u6700\u540E\u5E94\u7528\u7A0B\u5E8F\u53D7\u5230\u6570\u636E\uFF0C\u5E76\u89E3\u9664\u7B49\u5F85\u72B6\u6001\u3002\\" 1. \u51E0\u4E2A\u91CD\u8981\u6982\u5FF5 \u963B\u585EIO ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/io/java-io-bio.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Java IO - BIO \u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-03T15:00:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-03T15:00:39.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u51E0\u4E2A\u91CD\u8981\u6982\u5FF5","slug":"_1-\u51E0\u4E2A\u91CD\u8981\u6982\u5FF5","children":[]},{"level":2,"title":"2. \u4F20\u7EDF\u7684BIO\u901A\u4FE1\u65B9\u5F0F\u7B80\u4ECB","slug":"_2-\u4F20\u7EDF\u7684bio\u901A\u4FE1\u65B9\u5F0F\u7B80\u4ECB","children":[{"level":3,"title":"2.1 \u4F20\u7EDF\u7684BIO\u7684\u95EE\u9898","slug":"_2-1-\u4F20\u7EDF\u7684bio\u7684\u95EE\u9898","children":[]},{"level":3,"title":"2.2 \u591A\u7EBF\u7A0B\u65B9\u5F0F - \u4F2A\u5F02\u6B65\u65B9\u5F0F","slug":"_2-2-\u591A\u7EBF\u7A0B\u65B9\u5F0F-\u4F2A\u5F02\u6B65\u65B9\u5F0F","children":[]}]},{"level":2,"title":"3. BIO\u901A\u4FE1\u65B9\u5F0F\u6DF1\u5165\u5206\u6790","slug":"_3-bio\u901A\u4FE1\u65B9\u5F0F\u6DF1\u5165\u5206\u6790","children":[{"level":3,"title":"3.1 \u6A21\u62DF20\u4E2A\u5BA2\u6237\u7AEF\u5E76\u53D1\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u7AEF\u4F7F\u7528\u5355\u7EBF\u7A0B:","slug":"_3-1-\u6A21\u62DF20\u4E2A\u5BA2\u6237\u7AEF\u5E76\u53D1\u8BF7\u6C42-\u670D\u52A1\u5668\u7AEF\u4F7F\u7528\u5355\u7EBF\u7A0B","children":[]},{"level":3,"title":"3.2 \u591A\u7EBF\u7A0B\u6765\u4F18\u5316\u670D\u52A1\u5668\u7AEF","slug":"_3-2-\u591A\u7EBF\u7A0B\u6765\u4F18\u5316\u670D\u52A1\u5668\u7AEF","children":[]},{"level":3,"title":"3.3 \u770B\u770B\u670D\u52A1\u5668\u7AEF\u7684\u6267\u884C\u6548\u679C","slug":"_3-3-\u770B\u770B\u670D\u52A1\u5668\u7AEF\u7684\u6267\u884C\u6548\u679C","children":[]},{"level":3,"title":"3.4 \u95EE\u9898\u6839\u6E90","slug":"_3-4-\u95EE\u9898\u6839\u6E90","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1662217239000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":9.78,"words":2934},"filePathRelative":"java/io/java-io-bio.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};
