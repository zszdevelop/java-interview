const e=JSON.parse('{"key":"v-c5e5a552","path":"/think/summary/Interface-design-too-many-dependencies.html","title":"接口设计之依赖项过多时方案选择","lang":"zh-CN","frontmatter":{"description":"1. 背景 在开发中有时候会面对一些复杂场景，例如 1. 表单项采集项特别多，有二三十个。 2. 针对表单我们还有额外操作，这些操作需要表单中的10个参数 2. 两种方案 2.1 方案1：把需要的参数传过来 传10个基础参数进来（我嫌太多，每个操作接口都要传） 2.2 方案2：每次操作前保存信息，只传表单id 方案2：每次操作前保存基础信息，多传一个表...","head":[["meta",{"property":"og:url","content":"https://zszdevelop.github.io/java-study-gitbook/java-study-gitbook/think/summary/Interface-design-too-many-dependencies.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"接口设计之依赖项过多时方案选择"}],["meta",{"property":"og:description","content":"1. 背景 在开发中有时候会面对一些复杂场景，例如 1. 表单项采集项特别多，有二三十个。 2. 针对表单我们还有额外操作，这些操作需要表单中的10个参数 2. 两种方案 2.1 方案1：把需要的参数传过来 传10个基础参数进来（我嫌太多，每个操作接口都要传） 2.2 方案2：每次操作前保存信息，只传表单id 方案2：每次操作前保存基础信息，多传一个表..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-20T13:42:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-20T13:42:31.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 两种方案","slug":"_2-两种方案","link":"#_2-两种方案","children":[{"level":3,"title":"2.1 方案1：把需要的参数传过来","slug":"_2-1-方案1-把需要的参数传过来","link":"#_2-1-方案1-把需要的参数传过来","children":[]},{"level":3,"title":"2.2 方案2：每次操作前保存信息，只传表单id","slug":"_2-2-方案2-每次操作前保存信息-只传表单id","link":"#_2-2-方案2-每次操作前保存信息-只传表单id","children":[]}]},{"level":2,"title":"3. 最终方案","slug":"_3-最终方案","link":"#_3-最终方案","children":[]},{"level":2,"title":"4. 为什么会有这种问题产生？","slug":"_4-为什么会有这种问题产生","link":"#_4-为什么会有这种问题产生","children":[]}],"git":{"createdTime":1676900551000,"updatedTime":1676900551000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.49,"words":447},"filePathRelative":"think/summary/Interface-design-too-many-dependencies.md","localizedDate":"2023年2月20日","autoDesc":true}');export{e as data};
