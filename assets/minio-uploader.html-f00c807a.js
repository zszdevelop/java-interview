const e=JSON.parse('{"key":"v-4aa17f82","path":"/arch/minio/minio-uploader.html","title":"Minio进阶 - Minio+vue-uploader 分片上传方案及案例详解","lang":"zh-CN","frontmatter":{"order":230,"category":["Minio"],"description":"1. 前言 我们之前分析过Minio 的上传接口源码，其是进行了分块，再上传分块到Minio 服务器，最后再对块进行合并。 针对大文件的上传，如果采用上传到文件服务，再上传到Minio，其效率是非常低的，首先上传到文件服务（会存放在Tomcat 临时目录）就已经比较慢了。 针对大文件的上传，我们需要一个优化方案。 1.1 优化方案 image-2022...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/arch/minio/minio-uploader.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Minio进阶 - Minio+vue-uploader 分片上传方案及案例详解"}],["meta",{"property":"og:description","content":"1. 前言 我们之前分析过Minio 的上传接口源码，其是进行了分块，再上传分块到Minio 服务器，最后再对块进行合并。 针对大文件的上传，如果采用上传到文件服务，再上传到Minio，其效率是非常低的，首先上传到文件服务（会存放在Tomcat 临时目录）就已经比较慢了。 针对大文件的上传，我们需要一个优化方案。 1.1 优化方案 image-2022..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[{"level":3,"title":"1.1 优化方案","slug":"_1-1-优化方案","link":"#_1-1-优化方案","children":[]}]},{"level":2,"title":"2. 案例","slug":"_2-案例","link":"#_2-案例","children":[{"level":3,"title":"2.1 后端获取分片上传URL","slug":"_2-1-后端获取分片上传url","link":"#_2-1-后端获取分片上传url","children":[]},{"level":3,"title":"2.2. 前端执行分片上传","slug":"_2-2-前端执行分片上传","link":"#_2-2-前端执行分片上传","children":[]},{"level":3,"title":"2.3. 合并文件","slug":"_2-3-合并文件","link":"#_2-3-合并文件","children":[]},{"level":3,"title":"2.4. 测试","slug":"_2-4-测试","link":"#_2-4-测试","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":9.76,"words":2927},"filePathRelative":"arch/minio/minio-uploader.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
