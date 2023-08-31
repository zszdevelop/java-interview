const e=JSON.parse('{"key":"v-38ca0dbe","path":"/language/frontend-base/fe-vue-route-lazy-loading.html","title":"首屏优化之-vue路由懒加载和使用懒加载prefetch问题","lang":"zh-CN","frontmatter":{"description":"1. 背景 使用路由懒加载以后 webpack 打包可以根据页面划分来生成文件，根据路由的不同来加载文件，解决了首页一次性加载文件过大导致打开过慢的问题。 2. 优化操作 2.1 常规引入页面 2.2 具体优化：实现懒加载 看一下打包之后的效果，会看到打包出了多个chunk异步块。 image-20200326162422455 2.3 将chunk打...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/language/frontend-base/fe-vue-route-lazy-loading.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"首屏优化之-vue路由懒加载和使用懒加载prefetch问题"}],["meta",{"property":"og:description","content":"1. 背景 使用路由懒加载以后 webpack 打包可以根据页面划分来生成文件，根据路由的不同来加载文件，解决了首页一次性加载文件过大导致打开过慢的问题。 2. 优化操作 2.1 常规引入页面 2.2 具体优化：实现懒加载 看一下打包之后的效果，会看到打包出了多个chunk异步块。 image-20200326162422455 2.3 将chunk打..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 优化操作","slug":"_2-优化操作","link":"#_2-优化操作","children":[{"level":3,"title":"2.1 常规引入页面","slug":"_2-1-常规引入页面","link":"#_2-1-常规引入页面","children":[]},{"level":3,"title":"2.2 具体优化：实现懒加载","slug":"_2-2-具体优化-实现懒加载","link":"#_2-2-具体优化-实现懒加载","children":[]},{"level":3,"title":"2.3 将chunk打包组","slug":"_2-3-将chunk打包组","link":"#_2-3-将chunk打包组","children":[]}]},{"level":2,"title":"3. 解决prefetch提前加载导致问题","slug":"_3-解决prefetch提前加载导致问题","link":"#_3-解决prefetch提前加载导致问题","children":[{"level":3,"title":"3.1 通过在vue.config.js里添加以下配置Prefetch","slug":"_3-1-通过在vue-config-js里添加以下配置prefetch","link":"#_3-1-通过在vue-config-js里添加以下配置prefetch","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.73,"words":519},"filePathRelative":"language/frontend-base/fe-vue-route-lazy-loading.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
