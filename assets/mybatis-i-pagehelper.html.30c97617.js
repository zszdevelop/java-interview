const e=JSON.parse('{"key":"v-58ff83b5","path":"/dependencies/mybatis/mybatis-i-pagehelper.html","title":"MyBatis PageHelper\u5206\u9875","lang":"zh-CN","frontmatter":{"summary":"MyBatis PageHelper\u5206\u9875 1. \u51C6\u5907\u77E5\u8BC6 \\" MyBatis\u7684\u76F8\u5173\u77E5\u8BC6\u4F53\u7CFB\u4EE5\u53CA\u5E38\u89C1\u7684\u6570\u636E\u5E93\u5206\u9875\u65B9\u5F0F\uFF0CMySQL\u7269\u7406\u5206\u9875\u7684\u65B9\u5F0F\u7B49\u3002\\" 1.1 \u903B\u8F91\u5206\u9875\u548C\u7269\u7406\u5206\u9875\u7684\u533A\u522B\uFF1F \\" \u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0PageHelper\u8FD9\u7C7B\u6846\u67B6\uFF1F\\" \u8FD9\u4FBF\u8981\u4ECE\u903B\u8F91\u5206\u9875\u548C\u7269\u7406\u5206\u9875\u5F00\u59CB\u8BF4\u8D77\uFF1A \u903B\u8F91\u5206\u9875\uFF1A\u4ECE\u6570\u636E\u5E93\u5C06\u6240\u6709\u8BB0\u5F55\u67E5\u8BE2\u51FA\u6765\uFF0C\u5B58\u50A8\u5230\u5185\u5B58\u4E2D\uFF0C\u5C55\u793A\u5F53\u524D\u9875\uFF0C\u7136\u540E\u6570\u636E\u518D\u76F4\u63A5\u4ECE\u5185\u5B58\u4E2D\u83B7","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/mybatis/mybatis-i-pagehelper.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"MyBatis PageHelper\u5206\u9875"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-14T03:01:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-14T03:01:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u51C6\u5907\u77E5\u8BC6","slug":"_1-\u51C6\u5907\u77E5\u8BC6","children":[{"level":3,"title":"1.1 \u903B\u8F91\u5206\u9875\u548C\u7269\u7406\u5206\u9875\u7684\u533A\u522B\uFF1F","slug":"_1-1-\u903B\u8F91\u5206\u9875\u548C\u7269\u7406\u5206\u9875\u7684\u533A\u522B","children":[]},{"level":3,"title":"1.2 \u4E0D\u540C\u6570\u636E\u5E93\u7684\u7269\u7406\u5206\u9875\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F","slug":"_1-2-\u4E0D\u540C\u6570\u636E\u5E93\u7684\u7269\u7406\u5206\u9875\u662F\u5982\u4F55\u5B9E\u73B0\u7684","children":[]},{"level":3,"title":"1.3 PageHelper\u662F\u5982\u4F55\u5B9E\u73B0\u7269\u7406\u5206\u9875\u7684\u524D\u63D0:MyBatis\u7684\u63D2\u4EF6\u673A\u5236\uFF1F","slug":"_1-3-pagehelper\u662F\u5982\u4F55\u5B9E\u73B0\u7269\u7406\u5206\u9875\u7684\u524D\u63D0-mybatis\u7684\u63D2\u4EF6\u673A\u5236","children":[]}]},{"level":2,"title":"2. \u7B80\u5355\u793A\u4F8B","slug":"_2-\u7B80\u5355\u793A\u4F8B","children":[{"level":3,"title":"2.1 \u7B2C\u4E00\u79CD\uFF1ARowBounds\u65B9\u5F0F\u7684\u8C03\u7528","slug":"_2-1-\u7B2C\u4E00\u79CD-rowbounds\u65B9\u5F0F\u7684\u8C03\u7528","children":[]},{"level":3,"title":"2.2 \u7B2C\u4E8C\u79CD\uFF1AMapper\u63A5\u53E3\u65B9\u5F0F\u7684\u8C03\u7528startPage","slug":"_2-2-\u7B2C\u4E8C\u79CD-mapper\u63A5\u53E3\u65B9\u5F0F\u7684\u8C03\u7528startpage","children":[]},{"level":3,"title":"2.3 \u7B2C\u4E09\u79CD\uFF1AMapper\u63A5\u53E3\u65B9\u5F0F\u7684\u8C03\u7528offsetPage","slug":"_2-3-\u7B2C\u4E09\u79CD-mapper\u63A5\u53E3\u65B9\u5F0F\u7684\u8C03\u7528offsetpage","children":[]},{"level":3,"title":"2.4 \u7B2C\u56DB\u79CD:\u53C2\u6570\u65B9\u6CD5\u8C03\u7528","slug":"_2-4-\u7B2C\u56DB\u79CD-\u53C2\u6570\u65B9\u6CD5\u8C03\u7528","children":[]},{"level":3,"title":"2.5 \u7B2C\u4E94\u79CD:\u53C2\u6570\u5BF9\u8C61","slug":"_2-5-\u7B2C\u4E94\u79CD-\u53C2\u6570\u5BF9\u8C61","children":[]},{"level":3,"title":"2.6 \u7B2C\u516D\u79CD\uFF1AISelect \u63A5\u53E3\u65B9\u5F0F","slug":"_2-6-\u7B2C\u516D\u79CD-iselect-\u63A5\u53E3\u65B9\u5F0F","children":[]}]},{"level":2,"title":"3. \u8FDB\u4E00\u6B65\u7406\u89E3","slug":"_3-\u8FDB\u4E00\u6B65\u7406\u89E3","children":[{"level":3,"title":"3.1 PageHelper\u662F\u5982\u4F55\u5B9E\u73B0\u5206\u9875\u7684\uFF1F","slug":"_3-1-pagehelper\u662F\u5982\u4F55\u5B9E\u73B0\u5206\u9875\u7684","children":[]},{"level":3,"title":"3.2 \u4F7F\u7528PageHelper\u6709\u4F55\u6CE8\u610F\u70B9","slug":"_3-2-\u4F7F\u7528pagehelper\u6709\u4F55\u6CE8\u610F\u70B9","children":[]}]}],"git":{"createdTime":1663124461000,"updatedTime":1663124461000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":6.35,"words":1905},"filePathRelative":"dependencies/mybatis/mybatis-i-pagehelper.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};
