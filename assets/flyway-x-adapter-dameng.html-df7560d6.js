const e=JSON.parse('{"key":"v-4fe20d2d","path":"/dependencies/flyway/flyway-x-adapter-dameng.html","title":"Flyway兼容达梦数据库","lang":"zh-CN","frontmatter":{"description":"1. 背景 公司项目需要兼容国产数据库达梦，达梦和oracle 相似度还是非常高的。绝大部分的sql语句都能共用。但是flyway 本身是不支持达梦的，但是不着急，flyway 本身是开源的，那么我们是否能将达梦适配到 oracle的flyway呢 2. 源码下载导入 2.1 flyway 源码 flyway源码地址 (https://github.c...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/dependencies/flyway/flyway-x-adapter-dameng.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Flyway兼容达梦数据库"}],["meta",{"property":"og:description","content":"1. 背景 公司项目需要兼容国产数据库达梦，达梦和oracle 相似度还是非常高的。绝大部分的sql语句都能共用。但是flyway 本身是不支持达梦的，但是不着急，flyway 本身是开源的，那么我们是否能将达梦适配到 oracle的flyway呢 2. 源码下载导入 2.1 flyway 源码 flyway源码地址 (https://github.c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 源码下载导入","slug":"_2-源码下载导入","link":"#_2-源码下载导入","children":[]},{"level":2,"title":"2.1 flyway 源码","slug":"_2-1-flyway-源码","link":"#_2-1-flyway-源码","children":[]},{"level":2,"title":"2.2 flyway 打包测试","slug":"_2-2-flyway-打包测试","link":"#_2-2-flyway-打包测试","children":[{"level":3,"title":"2.2.1 解决办法","slug":"_2-2-1-解决办法","link":"#_2-2-1-解决办法","children":[]}]},{"level":2,"title":"4. 适配达梦","slug":"_4-适配达梦","link":"#_4-适配达梦","children":[{"level":3,"title":"4.1 修改DatabaseType","slug":"_4-1-修改databasetype","link":"#_4-1-修改databasetype","children":[]},{"level":3,"title":"4.2 DriverType中添加dmDriverType","slug":"_4-2-drivertype中添加dmdrivertype","link":"#_4-2-drivertype中添加dmdrivertype","children":[]},{"level":3,"title":"4.3  不校验版本","slug":"_4-3-不校验版本","link":"#_4-3-不校验版本","children":[]}]},{"level":2,"title":"5. 达梦测试","slug":"_5-达梦测试","link":"#_5-达梦测试","children":[{"level":3,"title":"5.1 添加dm依赖","slug":"_5-1-添加dm依赖","link":"#_5-1-添加dm依赖","children":[]},{"level":3,"title":"5.2 添加达梦测试类","slug":"_5-2-添加达梦测试类","link":"#_5-2-添加达梦测试类","children":[]},{"level":3,"title":"5.3 运行测试","slug":"_5-3-运行测试","link":"#_5-3-运行测试","children":[]}]},{"level":2,"title":"6. 集成到自己项目中","slug":"_6-集成到自己项目中","link":"#_6-集成到自己项目中","children":[{"level":3,"title":"6.1 下载flyway-dm-6.3.3","slug":"_6-1-下载flyway-dm-6-3-3","link":"#_6-1-下载flyway-dm-6-3-3","children":[]},{"level":3,"title":"6.2  将文件放入lib中","slug":"_6-2-将文件放入lib中","link":"#_6-2-将文件放入lib中","children":[]},{"level":3,"title":"6.2  pom依赖","slug":"_6-2-pom依赖","link":"#_6-2-pom依赖","children":[]}]},{"level":2,"title":"7. 在flyway-commandline使用","slug":"_7-在flyway-commandline使用","link":"#_7-在flyway-commandline使用","children":[{"level":3,"title":"7.1 下载对应版本的flyway-commandline","slug":"_7-1-下载对应版本的flyway-commandline","link":"#_7-1-下载对应版本的flyway-commandline","children":[]},{"level":3,"title":"7.2 添加达梦驱动","slug":"_7-2-添加达梦驱动","link":"#_7-2-添加达梦驱动","children":[]},{"level":3,"title":"7.3  更改配置","slug":"_7-3-更改配置","link":"#_7-3-更改配置","children":[]},{"level":3,"title":"7.5 命令行运行","slug":"_7-5-命令行运行","link":"#_7-5-命令行运行","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.42,"words":1025},"filePathRelative":"dependencies/flyway/flyway-x-adapter-dameng.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
