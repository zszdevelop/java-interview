const e=JSON.parse('{"key":"v-d3619cf2","path":"/develop/devlibrary/dev-package-x-log.html","title":"\u5E38\u7528\u5F00\u53D1\u5E93 - \u65E5\u5FD7\u7C7B\u5E93\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":30,"category":["Lib"],"summary":"\u5E38\u7528\u5F00\u53D1\u5E93 - \u65E5\u5FD7\u7C7B\u5E93\u8BE6\u89E3 \\" Java\u65E5\u5FD7\u5E93\u662F\u6700\u80FD\u4F53\u73B0Java\u5E93\u5728\u8FDB\u5316\u4E2D\u7684\u6E0A\u6E90\u5173\u7CFB\u7684\uFF0C\u5728\u7406\u89E3\u65F6\u91CD\u70B9\u7406\u89E3\u65E5\u5FD7\u6846\u67B6\u672C\u8EAB\u548C\u65E5\u5FD7\u95E8\u9762\uFF0C\u4EE5\u53CA\u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5\u7B49\u3002\u8981\u5173\u6CE8\u5176\u5386\u53F2\u6E0A\u6E90\u548C\u8BBE\u8BA1\uFF08\u6BD4\u5982\u6865\u63A5\uFF09\uFF0C\u800C\u5177\u4F53\u5728\u4F7F\u7528\u65F6\u67E5\u8BE2\u63A5\u53E3\u5373\u53EF\uFF0C \u5426\u5219\u4F1A\u9677\u5165JUL(Java Util Log), JCL(Commons Logging), Log4j, SLF4J, Logback\uFF0CLog","head":[["meta",{"property":"og:url","content":"https://java.isture.com/develop/devlibrary/dev-package-x-log.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u5E38\u7528\u5F00\u53D1\u5E93 - \u65E5\u5FD7\u7C7B\u5E93\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-03T15:00:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-03T15:00:39.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u65E5\u5FD7\u5E93\u7B80\u4ECB","slug":"_1-\u65E5\u5FD7\u5E93\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u65E5\u5FD7\u5E93\u4E4B\u65E5\u5FD7\u7CFB\u7EDF","slug":"_2-\u65E5\u5FD7\u5E93\u4E4B\u65E5\u5FD7\u7CFB\u7EDF","children":[{"level":3,"title":"2.1 java.util.logging (JUL)","slug":"_2-1-java-util-logging-jul","children":[]},{"level":3,"title":"2.2 Log4j","slug":"_2-2-log4j","children":[]},{"level":3,"title":"2.3 Logback","slug":"_2-3-logback","children":[]},{"level":3,"title":"2.4 Log4j2","slug":"_2-4-log4j2","children":[]},{"level":3,"title":"2.5 Log4j vs Logback vs Log4j2","slug":"_2-5-log4j-vs-logback-vs-log4j2","children":[]}]},{"level":2,"title":"3. \u65E5\u5FD7\u5E93\u4E4B\u65E5\u5FD7\u95E8\u9762","slug":"_3-\u65E5\u5FD7\u5E93\u4E4B\u65E5\u5FD7\u95E8\u9762","children":[{"level":3,"title":"3.1 common-logging","slug":"_3-1-common-logging","children":[]},{"level":3,"title":"3.2 slf4j","slug":"_3-2-slf4j","children":[]},{"level":3,"title":"3.3 common-logging vs slf4j","slug":"_3-3-common-logging-vs-slf4j","children":[]}]},{"level":2,"title":"4. \u65E5\u5FD7\u5E93\u4F7F\u7528\u65B9\u6848","slug":"_4-\u65E5\u5FD7\u5E93\u4F7F\u7528\u65B9\u6848","children":[{"level":3,"title":"4.1 \u65E5\u5FD7\u5E93jar\u5305","slug":"_4-1-\u65E5\u5FD7\u5E93jar\u5305","children":[]},{"level":3,"title":"4.2 \u65E5\u5FD7\u5E93\u914D\u7F6E - \u9488\u5BF9\u4E8E\u65E5\u5FD7\u6846\u67B6","slug":"_4-2-\u65E5\u5FD7\u5E93\u914D\u7F6E-\u9488\u5BF9\u4E8E\u65E5\u5FD7\u6846\u67B6","children":[]},{"level":3,"title":"4.3 \u65E5\u5FD7\u5E93API - \u9488\u5BF9\u4E8E\u65E5\u5FD7\u95E8\u9762","slug":"_4-3-\u65E5\u5FD7\u5E93api-\u9488\u5BF9\u4E8E\u65E5\u5FD7\u95E8\u9762","children":[]}]},{"level":2,"title":"5. \u65E5\u5FD7\u5E93\u9009\u578B\u4E0E\u6539\u9020","slug":"_5-\u65E5\u5FD7\u5E93\u9009\u578B\u4E0E\u6539\u9020","children":[{"level":3,"title":"5.1 \u5BF9Java\u65E5\u5FD7\u7EC4\u4EF6\u9009\u578B\u7684\u5EFA\u8BAE","slug":"_5-1-\u5BF9java\u65E5\u5FD7\u7EC4\u4EF6\u9009\u578B\u7684\u5EFA\u8BAE","children":[]},{"level":3,"title":"5.2 \u5BF9\u65E5\u5FD7\u67B6\u6784\u4F7F\u7528\u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5","slug":"_5-2-\u5BF9\u65E5\u5FD7\u67B6\u6784\u4F7F\u7528\u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5","children":[]},{"level":3,"title":"5.3 \u5BF9\u73B0\u6709\u7CFB\u7EDF\u65E5\u5FD7\u67B6\u6784\u7684\u6539\u9020\u5EFA\u8BAE","slug":"_5-3-\u5BF9\u73B0\u6709\u7CFB\u7EDF\u65E5\u5FD7\u67B6\u6784\u7684\u6539\u9020\u5EFA\u8BAE","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1662217239000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":19.03,"words":5710},"filePathRelative":"develop/devlibrary/dev-package-x-log.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};
