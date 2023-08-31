const e=JSON.parse('{"key":"v-2a4571a2","path":"/develop/security/dev-security-x-csrf.html","title":"开发安全 - CSRF详解","lang":"zh-CN","frontmatter":{"order":20,"category":["开发","安全"],"description":"CSRF(Cross-site request forgery跨站请求伪造，也被称成为“one click attack”或者session riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。 前置知识： 如果客户端发送的http请求是同域的，浏览器会自动帮我们把同域下的cookie添加到请求的request header中Cook...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/develop/security/dev-security-x-csrf.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"开发安全 - CSRF详解"}],["meta",{"property":"og:description","content":"CSRF(Cross-site request forgery跨站请求伪造，也被称成为“one click attack”或者session riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。 前置知识： 如果客户端发送的http请求是同域的，浏览器会自动帮我们把同域下的cookie添加到请求的request header中Cook..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. CSRF 简介","slug":"_1-csrf-简介","link":"#_1-csrf-简介","children":[]},{"level":2,"title":"2. CSRF 如何攻击","slug":"_2-csrf-如何攻击","link":"#_2-csrf-如何攻击","children":[{"level":3,"title":"2.1 具体到银行转账为例：","slug":"_2-1-具体到银行转账为例","link":"#_2-1-具体到银行转账为例","children":[]}]},{"level":2,"title":"3. CSRF 理解的注意点","slug":"_3-csrf-理解的注意点","link":"#_3-csrf-理解的注意点","children":[{"level":3,"title":"3.1 黑客能拿到Cookie吗?","slug":"_3-1-黑客能拿到cookie吗","link":"#_3-1-黑客能拿到cookie吗","children":[]},{"level":3,"title":"3.2 什么样的请求是要CSRF保护的?","slug":"_3-2-什么样的请求是要csrf保护的","link":"#_3-2-什么样的请求是要csrf保护的","children":[]},{"level":3,"title":"3.3 为什么对请求做了CSRF拦截，但还是会报CRSF漏洞?","slug":"_3-3-为什么对请求做了csrf拦截-但还是会报crsf漏洞","link":"#_3-3-为什么对请求做了csrf拦截-但还是会报crsf漏洞","children":[]}]},{"level":2,"title":"4. CSRF 防御常规思路","slug":"_4-csrf-防御常规思路","link":"#_4-csrf-防御常规思路","children":[{"level":3,"title":"4.1 验证 HTTP Referer 字段","slug":"_4-1-验证-http-referer-字段","link":"#_4-1-验证-http-referer-字段","children":[]},{"level":3,"title":"4.2 在请求地址中添加 token 并验证","slug":"_4-2-在请求地址中添加-token-并验证","link":"#_4-2-在请求地址中添加-token-并验证","children":[]},{"level":3,"title":"4.3 在 HTTP 头中自定义属性并验证","slug":"_4-3-在-http-头中自定义属性并验证","link":"#_4-3-在-http-头中自定义属性并验证","children":[]}]},{"level":2,"title":"5. CSRF 防御实战","slug":"_5-csrf-防御实战","link":"#_5-csrf-防御实战","children":[{"level":3,"title":"5.1 非框架型 - 自定义XXXCsrfFilter","slug":"_5-1-非框架型-自定义xxxcsrffilter","link":"#_5-1-非框架型-自定义xxxcsrffilter","children":[]},{"level":3,"title":"5.2 Spring Security - 什么时候禁用CSRF","slug":"_5-2-spring-security-什么时候禁用csrf","link":"#_5-2-spring-security-什么时候禁用csrf","children":[]},{"level":3,"title":"5.3 Spring Security - CookieCsrfTokenRepository.withHttpOnlyFalse()","slug":"_5-3-spring-security-cookiecsrftokenrepository-withhttponlyfalse","link":"#_5-3-spring-security-cookiecsrftokenrepository-withhttponlyfalse","children":[]},{"level":3,"title":"5.4 Spring Security - new CookieCsrfTokenRepository()","slug":"_5-4-spring-security-new-cookiecsrftokenrepository","link":"#_5-4-spring-security-new-cookiecsrftokenrepository","children":[]},{"level":3,"title":"5.5 Spring Security - CookieCsrfTokenRepository如何工作的呢?","slug":"_5-5-spring-security-cookiecsrftokenrepository如何工作的呢","link":"#_5-5-spring-security-cookiecsrftokenrepository如何工作的呢","children":[]},{"level":3,"title":"5.6 Spring Security - CsrfFilter是如何完成拦截和校验的呢?","slug":"_5-6-spring-security-csrffilter是如何完成拦截和校验的呢","link":"#_5-6-spring-security-csrffilter是如何完成拦截和校验的呢","children":[]},{"level":3,"title":"5.7 Spring Security - 默认对哪些Method拦截呢?","slug":"_5-7-spring-security-默认对哪些method拦截呢","link":"#_5-7-spring-security-默认对哪些method拦截呢","children":[]},{"level":3,"title":"5.8 Spring Security - HttpSessionCsrfTokenRepository","slug":"_5-8-spring-security-httpsessioncsrftokenrepository","link":"#_5-8-spring-security-httpsessioncsrftokenrepository","children":[]},{"level":3,"title":"5.9 Spring Security - 设置Csrf不对会造成哪些错误呢?","slug":"_5-9-spring-security-设置csrf不对会造成哪些错误呢","link":"#_5-9-spring-security-设置csrf不对会造成哪些错误呢","children":[]}]},{"level":2,"title":"6. 总结与展望","slug":"_6-总结与展望","link":"#_6-总结与展望","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":16.16,"words":4848},"filePathRelative":"develop/security/dev-security-x-csrf.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
