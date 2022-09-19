const e=JSON.parse('{"key":"v-155880a6","path":"/db/mysql/mysql-x-optimize-slow.html","title":"MySQL - \u6162\u67E5\u8BE2\u4F18\u5316\u601D\u8DEF\u4E0E\u6848\u4F8B","lang":"zh-CN","frontmatter":{"order":230,"category":["Mysql","\u6570\u636E\u5E93"],"summary":"MySQL - \u6162\u67E5\u8BE2\u4F18\u5316\u601D\u8DEF\u4E0E\u6848\u4F8B 1. \u5EFA\u7D22\u5F15\u7684\u51E0\u5927\u539F\u5219 1. \u6700\u5DE6\u524D\u7F00\u5339\u914D\u539F\u5219\uFF0C\u975E\u5E38\u91CD\u8981\u7684\u539F\u5219\uFF0Cmysql\u4F1A\u4E00\u76F4\u5411\u53F3\u5339\u914D\u76F4\u5230\u9047\u5230\u8303\u56F4\u67E5\u8BE2(>\u3001 3 and d = 4 \u5982\u679C\u5EFA\u7ACB(a,b,c,d)\u987A\u5E8F\u7684\u7D22\u5F15\uFF0Cd\u662F\u7528\u4E0D\u5230\u7D22\u5F15\u7684\uFF0C\u5982\u679C\u5EFA\u7ACB(a,b,d,c)\u7684\u7D22\u5F15\u5219\u90FD\u53EF\u4EE5\u7528\u5230\uFF0Ca,b,d\u7684\u987A\u5E8F\u53EF\u4EE5\u4EFB\u610F\u8C03\u6574\u3002 2. =\u548Cin\u53EF\u4EE5\u4E71\u5E8F\uFF0C\u6BD4\u5982a = 1 and b ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mysql/mysql-x-optimize-slow.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"MySQL - \u6162\u67E5\u8BE2\u4F18\u5316\u601D\u8DEF\u4E0E\u6848\u4F8B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-19T12:07:59.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-19T12:07:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5EFA\u7D22\u5F15\u7684\u51E0\u5927\u539F\u5219","slug":"_1-\u5EFA\u7D22\u5F15\u7684\u51E0\u5927\u539F\u5219","link":"#_1-\u5EFA\u7D22\u5F15\u7684\u51E0\u5927\u539F\u5219","children":[]},{"level":2,"title":"2. \u4F18\u5316\u6B65\u9AA4- explain\u547D\u4EE4","slug":"_2-\u4F18\u5316\u6B65\u9AA4-explain\u547D\u4EE4","link":"#_2-\u4F18\u5316\u6B65\u9AA4-explain\u547D\u4EE4","children":[]},{"level":2,"title":"3. \u6162\u67E5\u8BE2\u4F18\u5316\u6848\u4F8B","slug":"_3-\u6162\u67E5\u8BE2\u4F18\u5316\u6848\u4F8B","link":"#_3-\u6162\u67E5\u8BE2\u4F18\u5316\u6848\u4F8B","children":[{"level":3,"title":"3.1 \u590D\u6742\u8BED\u53E5\u5199\u6CD5\uFF08\u4F18\u5316sql\uFF09","slug":"_3-1-\u590D\u6742\u8BED\u53E5\u5199\u6CD5-\u4F18\u5316sql","link":"#_3-1-\u590D\u6742\u8BED\u53E5\u5199\u6CD5-\u4F18\u5316sql","children":[]},{"level":3,"title":"3.2 \u660E\u786E\u5E94\u7528\u573A\u666F\uFF08\u533A\u5206\u5EA6\u4F4E\u52A0\u7D22\u5F15\uFF09","slug":"_3-2-\u660E\u786E\u5E94\u7528\u573A\u666F-\u533A\u5206\u5EA6\u4F4E\u52A0\u7D22\u5F15","link":"#_3-2-\u660E\u786E\u5E94\u7528\u573A\u666F-\u533A\u5206\u5EA6\u4F4E\u52A0\u7D22\u5F15","children":[]},{"level":3,"title":"3.3 \u65E0\u6CD5\u4F18\u5316\u7684\u8BED\u53E5(\u5BF9\u5927\u6570\u636E\u91CF\u6392\u5E8F\u5BFC\u81F4\u7684\u95EE\u9898)","slug":"_3-3-\u65E0\u6CD5\u4F18\u5316\u7684\u8BED\u53E5-\u5BF9\u5927\u6570\u636E\u91CF\u6392\u5E8F\u5BFC\u81F4\u7684\u95EE\u9898","link":"#_3-3-\u65E0\u6CD5\u4F18\u5316\u7684\u8BED\u53E5-\u5BF9\u5927\u6570\u636E\u91CF\u6392\u5E8F\u5BFC\u81F4\u7684\u95EE\u9898","children":[]},{"level":3,"title":"3.4 \u8054\u5408\u7D22\u5F15","slug":"_3-4-\u8054\u5408\u7D22\u5F15","link":"#_3-4-\u8054\u5408\u7D22\u5F15","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1663589279000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":11.48,"words":3445},"filePathRelative":"db/mysql/mysql-x-optimize-slow.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
