import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as i,e as t}from"./app.942cb21b.js";const d={},n=t('<h1 id="redis\u8FDE\u63A5\u5BA2\u6237\u7AEF\u9009\u62E9-jedis-redisson-lettuce" tabindex="-1"><a class="header-anchor" href="#redis\u8FDE\u63A5\u5BA2\u6237\u7AEF\u9009\u62E9-jedis-redisson-lettuce" aria-hidden="true">#</a> redis\u8FDE\u63A5\u5BA2\u6237\u7AEF\u9009\u62E9\uFF1AJedis,Redisson,Lettuce</h1><p>\u5728spring boot2\u4E4B\u540E\uFF0C\u5BF9redis\u8FDE\u63A5\u7684\u652F\u6301\uFF0C\u9ED8\u8BA4\u5C31\u91C7\u7528\u4E86lettuce\u3002\u8FD9\u5C31\u4E00\u5B9A\u7A0B\u5EA6\u8BF4\u660E\u4E86lettuce \u548CJedis\u7684\u4F18\u52A3\u3002</p><h2 id="_1-redis-\u5E38\u89C1\u8FDE\u63A5\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#_1-redis-\u5E38\u89C1\u8FDE\u63A5\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> 1. redis \u5E38\u89C1\u8FDE\u63A5\u5BA2\u6237\u7AEF</h2><ul><li><p>Jedis\uFF1A\u662F\u8001\u724C\u7684Redis\u7684Java\u5B9E\u73B0\u5BA2\u6237\u7AEF\uFF0C\u63D0\u4F9B\u4E86\u6BD4\u8F83\u5168\u9762\u7684Redis\u547D\u4EE4\u7684\u652F\u6301</p><p>\u4F18\u52BF\uFF1A\u6BD4\u8F83\u5168\u9762\u7684\u63D0\u4F9B\u4E86Redis\u7684\u64CD\u4F5C\u7279\u6027</p></li><li><p>Redisson\uFF1A\u5B9E\u73B0\u4E86\u5206\u5E03\u5F0F\u548C\u53EF\u6269\u5C55\u7684Java\u6570\u636E\u7ED3\u6784\u3002</p><p>\u4F18\u52BF\uFF1A\u4FC3\u4F7F\u4F7F\u7528\u8005\u5BF9Redis\u7684\u5173\u6CE8\u5206\u79BB\uFF0C\u63D0\u4F9B\u5F88\u591A\u5206\u5E03\u5F0F\u76F8\u5173\u64CD\u4F5C\u670D\u52A1\uFF0C\u4F8B\u5982\uFF0C<strong>\u5206\u5E03\u5F0F\u9501\uFF0C\u5206\u5E03\u5F0F\u96C6\u5408\uFF0C\u53EF\u901A\u8FC7Redis\u652F\u6301\u5EF6\u8FDF\u961F\u5217</strong></p></li><li><p>Lettuce\uFF1A\u9AD8\u7EA7Redis\u5BA2\u6237\u7AEF\uFF0C\u7528\u4E8E\u7EBF\u7A0B\u5B89\u5168\u540C\u6B65\uFF0C\u5F02\u6B65\u548C\u54CD\u5E94\u4F7F\u7528\uFF0C\u652F\u6301\u96C6\u7FA4\uFF0CSentinel\uFF0C\u7BA1\u9053\u548C\u7F16\u7801\u5668\u3002</p><p>\u4F18\u52BF\uFF1A<strong>\u57FA\u4E8ENetty\u6846\u67B6\u7684\u4E8B\u4EF6\u9A71\u52A8\u7684\u901A\u4FE1\u5C42</strong>\uFF0C\u5176\u65B9\u6CD5\u8C03\u7528\u662F\u5F02\u6B65\u7684\u3002Lettuce\u7684API\u662F<strong>\u7EBF\u7A0B\u5B89\u5168</strong>\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u64CD\u4F5C\u5355\u4E2ALettuce\u8FDE\u63A5\u6765\u5B8C\u6210\u5404\u79CD\u64CD\u4F5C</p></li></ul><h2 id="_2-lettuce\u548Cjedis\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_2-lettuce\u548Cjedis\u6BD4\u8F83" aria-hidden="true">#</a> 2. lettuce\u548Cjedis\u6BD4\u8F83</h2><p>jedis\u662F\u76F4\u63A5\u8FDE\u63A5redis server,\u5982\u679C\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u662F<strong>\u975E\u7EBF\u7A0B\u5B89\u5168</strong>\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EA\u6709<strong>\u4F7F\u7528\u8FDE\u63A5\u6C60\uFF0C\u4E3A\u6BCF\u4E2Ajedis\u5B9E\u4F8B\u589E\u52A0\u7269\u7406\u8FDE\u63A5 \uFF1B</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191005112810662.png" alt="image-20191005112810662" loading="lazy"></p><p>lettuce\u7684\u8FDE\u63A5\u662F\u57FA\u4E8ENetty\u7684\uFF0C\u8FDE\u63A5\u5B9E\u4F8B\uFF08StatefulRedisConnection\uFF09\u53EF\u4EE5\u5728\u591A\u4E2A\u7EBF\u7A0B\u95F4\u5E76\u53D1\u8BBF\u95EE\uFF0CStatefulRedisConnection\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u6240\u4EE5\u4E00\u4E2A\u8FDE\u63A5\u5B9E\u4F8B\u53EF\u4EE5\u6EE1\u8DB3\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u7684\u5E76\u53D1\u8BBF\u95EE\uFF0C\u5F53\u7136\u8FD9\u4E5F\u662F\u53EF\u4F38\u7F29\u7684\u8BBE\u8BA1\uFF0C\u4E00\u4E2A\u8FDE\u63A5\u5B9E\u4F8B\u4E0D\u591F\u7684\u60C5\u51B5\u4E5F\u53EF\u4EE5\u6309\u9700\u589E\u52A0\u8FDE\u63A5\u5B9E\u4F8B\u3002</p><p>Redisson\u5B9E\u73B0\u4E86\u5206\u5E03\u5F0F\u548C\u53EF\u6269\u5C55\u7684Java\u6570\u636E\u7ED3\u6784\uFF0C\u548CJedis\u76F8\u6BD4\uFF0C\u529F\u80FD\u8F83\u4E3A\u7B80\u5355\uFF0C\u4E0D\u652F\u6301\u5B57\u7B26\u4E32\u64CD\u4F5C\uFF0C\u4E0D\u652F\u6301\u6392\u5E8F\u3001\u4E8B\u52A1\u3001\u7BA1\u9053\u3001\u5206\u533A\u7B49Redis\u7279\u6027\u3002Redisson\u7684\u5B97\u65E8\u662F\u4FC3\u8FDB\u4F7F\u7528\u8005\u5BF9Redis\u7684\u5173\u6CE8\u5206\u79BB\uFF0C\u4ECE\u800C\u8BA9\u4F7F\u7528\u8005\u80FD\u591F\u5C06\u7CBE\u529B\u66F4\u96C6\u4E2D\u5730\u653E\u5728\u5904\u7406\u4E1A\u52A1\u903B\u8F91\u4E0A\u3002</p><p>\u603B\u7ED3\uFF1A \u4F18\u5148\u4F7F\u7528Lettuce\uFF0C\u5982\u679C\u9700\u8981\u5206\u5E03\u5F0F\u9501\uFF0C\u5206\u5E03\u5F0F\u96C6\u5408\u7B49\u5206\u5E03\u5F0F\u7684\u9AD8\u7EA7\u7279\u6027\uFF0C\u6DFB\u52A0Redisson\u7ED3\u5408\u4F7F\u7528\uFF0C\u56E0\u4E3ARedisson\u672C\u8EAB\u5BF9\u5B57\u7B26\u4E32\u7684\u64CD\u4F5C\u652F\u6301\u5F88\u5DEE\u3002</p>',10),r=[n];function o(a,c){return s(),i("div",null,r)}const u=e(d,[["render",o],["__file","redis-y-action-client.html.vue"]]);export{u as default};
