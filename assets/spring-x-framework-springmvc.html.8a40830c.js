const e=JSON.parse('{"key":"v-8d91b28a","path":"/dependencies/spring/spring-x-framework-springmvc.html","title":"Spring\u57FA\u7840-SpringMVC\u8BF7\u6C42\u6D41\u7A0B\u548C\u6848\u4F8B","lang":"zh-CN","frontmatter":{"order":60,"category":["Spring"],"summary":"Spring\u57FA\u7840-SpringMVC\u8BF7\u6C42\u6D41\u7A0B\u548C\u6848\u4F8B \\" \u524D\u6587\u6211\u4EEC\u4ECB\u7ECD\u4E86Spring\u6846\u67B6\u548CSpring\u6846\u67B6\u4E2D\u6700\u4E3A\u91CD\u8981\u7684\u4E24\u4E2A\u6280\u672F\u70B9\uFF08IOC\u548CAOP\uFF09\uFF0C\u90A3\u6211\u4EEC\u5982\u4F55\u66F4\u597D\u7684\u6784\u5EFA\u4E0A\u5C42\u7684\u5E94\u7528\u5462\uFF08\u6BD4\u5982web \u5E94\u7528\uFF09\uFF0C\u8FD9\u4FBF\u662FSpringMVC\uFF1BSpring MVC\u662FSpring\u5728Spring Container Core\u548CAOP\u7B49\u6280\u672F\u57FA\u7840\u4E0A\uFF0C\u9075\u5FAA\u4E0A\u8FF0Web MVC\u7684\u89C4\u8303\u63A8\u51FA\u7684","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/spring/spring-x-framework-springmvc.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Spring\u57FA\u7840-SpringMVC\u8BF7\u6C42\u6D41\u7A0B\u548C\u6848\u4F8B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-23T13:47:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-23T13:47:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5F15\u5165","slug":"_1-\u5F15\u5165","link":"#_1-\u5F15\u5165","children":[]},{"level":2,"title":"2. \u4EC0\u4E48\u662FMVC","slug":"_2-\u4EC0\u4E48\u662Fmvc","link":"#_2-\u4EC0\u4E48\u662Fmvc","children":[]},{"level":2,"title":"3. \u4EC0\u4E48\u662FSpring MVC","slug":"_3-\u4EC0\u4E48\u662Fspring-mvc","link":"#_3-\u4EC0\u4E48\u662Fspring-mvc","children":[]},{"level":2,"title":"4. Spring MVC\u7684\u8BF7\u6C42\u6D41\u7A0B","slug":"_4-spring-mvc\u7684\u8BF7\u6C42\u6D41\u7A0B","link":"#_4-spring-mvc\u7684\u8BF7\u6C42\u6D41\u7A0B","children":[{"level":3,"title":"4.1 \u6838\u5FC3\u67B6\u6784\u7684\u5177\u4F53\u6D41\u7A0B\u6B65\u9AA4","slug":"_4-1-\u6838\u5FC3\u67B6\u6784\u7684\u5177\u4F53\u6D41\u7A0B\u6B65\u9AA4","link":"#_4-1-\u6838\u5FC3\u67B6\u6784\u7684\u5177\u4F53\u6D41\u7A0B\u6B65\u9AA4","children":[]},{"level":3,"title":"4.2 \u5BF9\u4E0A\u8FF0\u6D41\u7A0B\u7684\u8865\u5145","slug":"_4-2-\u5BF9\u4E0A\u8FF0\u6D41\u7A0B\u7684\u8865\u5145","link":"#_4-2-\u5BF9\u4E0A\u8FF0\u6D41\u7A0B\u7684\u8865\u5145","children":[]}]},{"level":2,"title":"5. Spring MVC\u6848\u4F8B","slug":"_5-spring-mvc\u6848\u4F8B","link":"#_5-spring-mvc\u6848\u4F8B","children":[{"level":3,"title":"5.1 Maven\u5305\u5F15\u5165","slug":"_5-1-maven\u5305\u5F15\u5165","link":"#_5-1-maven\u5305\u5F15\u5165","children":[]},{"level":3,"title":"5.2 \u4E1A\u52A1\u4EE3\u7801\u7684\u7F16\u5199","slug":"_5-2-\u4E1A\u52A1\u4EE3\u7801\u7684\u7F16\u5199","link":"#_5-2-\u4E1A\u52A1\u4EE3\u7801\u7684\u7F16\u5199","children":[]},{"level":3,"title":"5.3 webapp\u4E0B\u7684web.xml","slug":"_5-3-webapp\u4E0B\u7684web-xml","link":"#_5-3-webapp\u4E0B\u7684web-xml","children":[]},{"level":3,"title":"5.4 springmvc.xml","slug":"_5-4-springmvc-xml","link":"#_5-4-springmvc-xml","children":[]},{"level":3,"title":"5.5 JSP\u89C6\u56FE","slug":"_5-5-jsp\u89C6\u56FE","link":"#_5-5-jsp\u89C6\u56FE","children":[]},{"level":3,"title":"5.6 \u90E8\u7F72\u6D4B\u8BD5","slug":"_5-6-\u90E8\u7F72\u6D4B\u8BD5","link":"#_5-6-\u90E8\u7F72\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1663940878000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":9.95,"words":2984},"filePathRelative":"dependencies/spring/spring-x-framework-springmvc.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};
