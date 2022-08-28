import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as a,e as i}from"./app.70ab84e4.js";const d={},l=i(`<h1 id="mysql\u57FA\u7840-\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#mysql\u57FA\u7840-\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> MySQL\u57FA\u7840-\u5B58\u50A8\u5F15\u64CE</h1><h2 id="_1-myisam-\u548Cinnodb-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-myisam-\u548Cinnodb-\u533A\u522B" aria-hidden="true">#</a> 1. MyISAM \u548CInnoDB \u533A\u522B</h2><ul><li>MyISAM \uFF08MySQL 5.5 \u4E4B\u524D\u7684\u9ED8\u8BA4\u6570\u636E\u5E93\u5F15\u64CE\uFF09 <ul><li>\u6027\u80FD\u6781\u4F73\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4E86\u5927\u91CF\u7279\u6027\uFF0C\u5305\u62EC\u5168\u6587\u7D22\u5F15\u3001\u538B\u7F29\u3001\u7A7A\u95F4\u51FD\u6570\u7B49</li><li><strong>\u4E0D\u652F\u6301\u4E8B\u52A1\u548C\u884C\u7EA7\u9501</strong></li><li>\u6700\u5927\u7F3A\u9677<strong>\u5D29\u6E83\u540E\u65E0\u6CD5\u5B89\u5168\u6062\u590D</strong></li></ul></li><li>InnoDB(MySQL 5.5 \u4E4B\u540E\u7684\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE)\uFF1A <ul><li>\u4E8B\u52A1\u6027\u6570\u636E\u5E93\u5F15\u64CE</li></ul></li></ul><h3 id="_1-1-\u9002\u5408\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-1-\u9002\u5408\u573A\u666F" aria-hidden="true">#</a> 1.1 \u9002\u5408\u573A\u666F</h3><ul><li><p>InnoDB\u5B58\u50A8\u5F15\u64CE</p><p>\u5927\u591A\u6570\u573A\u666F\uFF0C\u4F46\u662F\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F7F\u7528 \u4E5F\u662F\u9002\u5408\u7684\u5982</p></li><li><p>MyISAM \u5B58\u50A8\u5F15\u64CE</p><p>\u8BFB\u5BC6\u96C6\u7684\u60C5\u51B5\u4E0B\uFF08\u4E0D\u4ECB\u610FMyISAM \u5D29\u6E83\u6062\u590D\u95EE\u9898\uFF09</p></li></ul><h3 id="_1-2-\u4E24\u8005\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4E24\u8005\u5BF9\u6BD4" aria-hidden="true">#</a> 1.2 \u4E24\u8005\u5BF9\u6BD4</h3><table><thead><tr><th></th><th>MyISAM</th><th>InnoDB</th></tr></thead><tbody><tr><td>\u662F\u5426\u652F\u6301\u884C\u7EA7\u9501</td><td>\u53EA\u6709\u8868\u7EA7\u9501\uFF08table-level locking\uFF09</td><td>\u652F\u6301\u884C\u7EA7\u9501\uFF08row-level locking\uFF09\u548C\u8868\u7EA7\u9501\uFF0C\u9ED8\u8BA4\u884C\u7EA7\u9501</td></tr><tr><td>\u662F\u5426\u652F\u6301\u4E8B\u52A1</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr><tr><td>\u5D29\u6E83\u540E\u7684\u5B89\u5168\u6062\u590D</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr><tr><td>\u652F\u6301\u5916\u952E</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr><tr><td>\u652F\u6301MVCC</td><td>\u4E0D\u652F\u6301</td><td>\u652F\u6301</td></tr></tbody></table><h3 id="_1-3-mvcc" tabindex="-1"><a class="header-anchor" href="#_1-3-mvcc" aria-hidden="true">#</a> 1.3 MVCC</h3><ul><li><p>\u5728\u5E94\u5BF9\u9AD8\u5E76\u53D1\u4E8B\u52A1\uFF0CMVCC \u6BD4\u5355\u7EAF\u7684\u52A0\u9501\u66F4\u9AD8\u6548\uFF0C</p></li><li><p>MVCC \u53EA\u5728READ COMMITED \u548C REPEATABLE READ \u4E24\u4E2A\u9694\u79BB\u7EA7\u522B\u4E0B\u5DE5\u4F5C\u3002</p></li><li><p>MVCC \u53EF\u4EE5\u4F7F\u7528\u4E50\u89C2\uFF08optimistic\uFF09\u9501\u548C \u60B2\u89C2\uFF08pessimistic\uFF09\u9501\u6765\u5B9E\u73B0</p></li></ul><h2 id="_2-\u67E5\u770B\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> 2. \u67E5\u770B\u5B58\u50A8\u5F15\u64CE</h2><h3 id="_2-1-\u67E5\u770Bmysql\u63D0\u4F9B\u7684\u6240\u6709\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_2-1-\u67E5\u770Bmysql\u63D0\u4F9B\u7684\u6240\u6709\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> 2.1 \u67E5\u770BMySQL\u63D0\u4F9B\u7684\u6240\u6709\u5B58\u50A8\u5F15\u64CE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show engines;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190902000239425.png" alt="image-20190902000239425"></p><p>\u4ECE\u4E0A\u56FE\u6211\u4EEC\u53EF\u4EE5\u51FAMysql \u5F53\u524D\u7684\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE\u662FInnoDB,\u4E5F\u63D0\u793A\u4E86innoDB \u652F\u6301\u4E8B\u52A1\uFF0C\u884C\u7EA7\u9501\u7B49\u7279\u6027</p><h3 id="_2-2-\u67E5\u770Bmysql-\u5F53\u524D\u9ED8\u8BA4\u7684\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_2-2-\u67E5\u770Bmysql-\u5F53\u524D\u9ED8\u8BA4\u7684\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> 2.2 \u67E5\u770BMySQL \u5F53\u524D\u9ED8\u8BA4\u7684\u5B58\u50A8\u5F15\u64CE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show variables like &#39;%storage_engine%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190902000442313.png" alt="image-20190902000442313"></p><h3 id="_2-3-\u67E5\u770B\u8868\u7684\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_2-3-\u67E5\u770B\u8868\u7684\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> 2.3 \u67E5\u770B\u8868\u7684\u5B58\u50A8\u5F15\u64CE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show table status like &quot;t_user&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),r=[l];function s(n,h){return t(),a("div",null,r)}var m=e(d,[["render",s],["__file","\u5B58\u50A8\u5F15\u64CE.html.vue"]]);export{m as default};
