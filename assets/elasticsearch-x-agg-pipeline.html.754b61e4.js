import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as l,a as s,b as t,d as e,e as n,r as o}from"./app.0227f3fb.js";const c={},u=e('<h1 id="es\u8BE6\u89E3-\u805A\u5408-\u805A\u5408\u67E5\u8BE2\u4E4Bpipline\u805A\u5408\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#es\u8BE6\u89E3-\u805A\u5408-\u805A\u5408\u67E5\u8BE2\u4E4Bpipline\u805A\u5408\u8BE6\u89E3" aria-hidden="true">#</a> ES\u8BE6\u89E3 - \u805A\u5408\uFF1A\u805A\u5408\u67E5\u8BE2\u4E4BPipline\u805A\u5408\u8BE6\u89E3</h1><blockquote><p>\u524D\u6587\u4E3B\u8981\u8BB2\u4E86 ElasticSearch\u63D0\u4F9B\u7684\u4E09\u79CD\u805A\u5408\u65B9\u5F0F\u4E4B\u6307\u6807\u805A\u5408\uFF08Metric Aggregation)\uFF0C\u672C\u6587\u4E3B\u8981\u8BB2\u8BB2\u7BA1\u9053\u805A\u5408\uFF08Pipeline Aggregation)\u3002\u7B80\u5355\u800C\u8A00\u5C31\u662F\u8BA9\u4E0A\u4E00\u6B65\u7684\u805A\u5408\u7ED3\u679C\u6210\u4E3A\u4E0B\u4E00\u4E2A\u805A\u5408\u7684\u8F93\u5165\uFF0C\u8FD9\u5C31\u662F\u7BA1\u9053\u3002</p></blockquote><h2 id="_1-\u5982\u4F55\u7406\u89E3pipeline\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u7406\u89E3pipeline\u805A\u5408" aria-hidden="true">#</a> 1. \u5982\u4F55\u7406\u89E3pipeline\u805A\u5408</h2><blockquote><p>\u5982\u4F55\u7406\u89E3\u7BA1\u9053\u805A\u5408\u5462\uFF1F\u6700\u91CD\u8981\u7684\u662F\u8981\u7AD9\u5728\u8BBE\u8BA1\u8005\u89D2\u5EA6\u770B\u8FD9\u4E2A\u529F\u80FD\u7684\u8981\u5B9E\u73B0\u7684\u76EE\u7684\uFF1A\u8BA9\u4E0A\u4E00\u6B65\u7684\u805A\u5408\u7ED3\u679C\u6210\u4E3A\u4E0B\u4E00\u4E2A\u805A\u5408\u7684\u8F93\u5165\uFF0C\u8FD9\u5C31\u662F\u7BA1\u9053\u3002</p></blockquote><h3 id="_1-1-\u7BA1\u9053\u673A\u5236\u7684\u5E38\u89C1\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-1-\u7BA1\u9053\u673A\u5236\u7684\u5E38\u89C1\u573A\u666F" aria-hidden="true">#</a> 1.1 \u7BA1\u9053\u673A\u5236\u7684\u5E38\u89C1\u573A\u666F</h3>',5),r=n("\u9996\u5148\u56DE\u987E\u4E0B\uFF0C\u6211\u4EEC\u4E4B\u524D\u5728"),d={href:"https://pdai.tech/md/framework/tomcat/tomcat-x-container-pipline.html#%E7%9F%A5%E8%AF%86%E5%87%86%E5%A4%87",target:"_blank",rel:"noopener noreferrer"},k=n("Tomcat\u7BA1\u9053\u673A\u5236"),v=n("\u4E2D\u5411\u4F60\u4ECB\u7ECD\u7684\u5E38\u89C1\u7684\u7BA1\u9053\u673A\u5236\u8BBE\u8BA1\u4E2D\u7684\u5E94\u7528\u573A\u666F\u3002"),b=s("h4",{id:"_1-1-1-\u8D23\u4EFB\u94FE\u6A21\u5F0F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-1-1-\u8D23\u4EFB\u94FE\u6A21\u5F0F","aria-hidden":"true"},"#"),n(" 1.1.1 \u8D23\u4EFB\u94FE\u6A21\u5F0F")],-1),m=s("p",null,"\u7BA1\u9053\u673A\u5236\u5728\u8BBE\u8BA1\u6A21\u5F0F\u4E0A\u5C5E\u4E8E\u8D23\u4EFB\u94FE\u6A21\u5F0F\uFF0C\u5982\u679C\u4F60\u4E0D\u7406\u89E3\uFF0C\u8BF7\u53C2\u770B\u5982\u4E0B\u6587\u7AE0\uFF1A",-1),q={href:"https://pdai.tech/md/dev-spec/pattern/15_chain.html",target:"_blank",rel:"noopener noreferrer"},g=n("\u8D23\u4EFB\u94FE\u6A21\u5F0F(Chain of responsibility pattern)"),h=n(": \u901A\u8FC7\u8D23\u4EFB\u94FE\u6A21\u5F0F, \u4F60\u53EF\u4EE5\u4E3A\u67D0\u4E2A\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u94FE. \u6BCF\u4E2A\u5BF9\u8C61\u4F9D\u5E8F\u68C0\u67E5\u6B64\u8BF7\u6C42\u5E76\u5BF9\u5176\u8FDB\u884C\u5904\u7406\u6216\u8005\u5C06\u5B83\u4F20\u7ED9\u94FE\u4E2D\u7684\u4E0B\u4E00\u4E2A\u5BF9\u8C61\u3002"),_=e(`<h4 id="_1-1-2-filterchain" tabindex="-1"><a class="header-anchor" href="#_1-1-2-filterchain" aria-hidden="true">#</a> 1.1.2 FilterChain</h4><p>\u5728\u8F6F\u4EF6\u5F00\u53D1\u7684\u5E38\u63A5\u89E6\u7684\u8D23\u4EFB\u94FE\u6A21\u5F0F\u662FFilterChain\uFF0C\u5B83\u4F53\u73B0\u5728\u5F88\u591A\u8F6F\u4EF6\u8BBE\u8BA1\u4E2D\uFF1A</p><ul><li><strong>\u6BD4\u5982Spring Security\u6846\u67B6\u4E2D</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220806222013752.png" alt="image-20220806222013752" loading="lazy"></p><ul><li><strong>\u6BD4\u5982HttpServletRequest\u5904\u7406\u7684\u8FC7\u6EE4\u5668\u4E2D</strong></li></ul><p>\u5F53\u4E00\u4E2Arequest\u8FC7\u6765\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5BF9\u8FD9\u4E2Arequest\u505A\u4E00\u7CFB\u5217\u7684\u52A0\u5DE5\uFF0C\u4F7F\u7528\u8D23\u4EFB\u94FE\u6A21\u5F0F\u53EF\u4EE5\u4F7F\u6BCF\u4E2A\u52A0\u5DE5\u7EC4\u4EF6\u5316\uFF0C\u51CF\u5C11\u8026\u5408\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5728\u5F53\u4E00\u4E2Arequest\u8FC7\u6765\u7684\u65F6\u5019\uFF0C\u9700\u8981\u627E\u5230\u5408\u9002\u7684\u52A0\u5DE5\u65B9\u5F0F\u3002\u5F53\u4E00\u4E2A\u52A0\u5DE5\u65B9\u5F0F\u4E0D\u9002\u5408\u8FD9\u4E2Arequest\u7684\u65F6\u5019\uFF0C\u4F20\u9012\u5230\u4E0B\u4E00\u4E2A\u52A0\u5DE5\u65B9\u6CD5\uFF0C\u8BE5\u52A0\u5DE5\u65B9\u5F0F\u518D\u5C1D\u8BD5\u5BF9request\u52A0\u5DE5\u3002</p><p>\u7F51\u4E0A\u627E\u4E86\u56FE\uFF0C\u8FD9\u91CC\u6211\u4EEC\u540E\u6587\u5C06\u901A\u8FC7Tomcat\u8BF7\u6C42\u5904\u7406\u5411\u4F60\u9610\u8FF0\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220806222120276.png" alt="image-20220806222120276" loading="lazy"></p><h3 id="_1-2-elasticsearch\u8BBE\u8BA1\u7BA1\u9053\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_1-2-elasticsearch\u8BBE\u8BA1\u7BA1\u9053\u673A\u5236" aria-hidden="true">#</a> 1.2 ElasticSearch\u8BBE\u8BA1\u7BA1\u9053\u673A\u5236</h3><p>\u7B80\u5355\u800C\u8A00\uFF1A\u8BA9\u4E0A\u4E00\u6B65\u7684\u805A\u5408\u7ED3\u679C\u6210\u4E3A\u4E0B\u4E00\u4E2A\u805A\u5408\u7684\u8F93\u5165\uFF0C\u8FD9\u5C31\u662F\u7BA1\u9053\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u65E0\u975E\u5C31\u662F\u5BF9\u4E0D\u540C\u7C7B\u578B\u7684\u805A\u5408\u6709\u63A5\u53E3\u7684\u652F\u6491\uFF0C\u6BD4\u5982\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220806222204594.png" alt="image-20220806222204594" loading="lazy"></p><blockquote><p>\u7B2C\u4E00\u4E2A\u7EF4\u5EA6\uFF1A\u7BA1\u9053\u805A\u5408\u6709\u5F88\u591A\u4E0D\u540C<strong>\u7C7B\u578B</strong>\uFF0C\u6BCF\u79CD\u7C7B\u578B\u90FD\u4E0E\u5176\u4ED6\u805A\u5408\u8BA1\u7B97\u4E0D\u540C\u7684\u4FE1\u606F\uFF0C\u4F46\u662F\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u7C7B\u578B\u5206\u4E3A\u4E24\u7C7B\uFF1A</p></blockquote><ul><li><strong>\u7236\u7EA7</strong> \u7236\u7EA7\u805A\u5408\u7684\u8F93\u51FA\u63D0\u4F9B\u4E86\u4E00\u7EC4\u7BA1\u9053\u805A\u5408\uFF0C\u5B83\u53EF\u4EE5\u8BA1\u7B97\u65B0\u7684\u5B58\u50A8\u6876\u6216\u65B0\u7684\u805A\u5408\u4EE5\u6DFB\u52A0\u5230\u73B0\u6709\u5B58\u50A8\u6876\u4E2D\u3002</li><li><strong>\u5144\u5F1F</strong> \u540C\u7EA7\u805A\u5408\u7684\u8F93\u51FA\u63D0\u4F9B\u7684\u7BA1\u9053\u805A\u5408\uFF0C\u5E76\u4E14\u80FD\u591F\u8BA1\u7B97\u4E0E\u8BE5\u540C\u7EA7\u805A\u5408\u5904\u4E8E\u540C\u4E00\u7EA7\u522B\u7684\u65B0\u805A\u5408\u3002</li></ul><blockquote><p>\u7B2C\u4E8C\u4E2A\u7EF4\u5EA6\uFF1A\u6839\u636E<strong>\u529F\u80FD\u8BBE\u8BA1</strong>\u7684\u610F\u56FE</p></blockquote><p>\u6BD4\u5982\u524D\u7F6E\u805A\u5408\u53EF\u80FD\u662FBucket\u805A\u5408\uFF0C\u540E\u7F6E\u7684\u53EF\u80FD\u662F\u57FA\u4E8EMetric\u805A\u5408\uFF0C\u90A3\u4E48\u5B83\u5C31\u53EF\u4EE5\u6210\u4E3A\u4E00\u7C7B\u7BA1\u9053</p><p>\u8FDB\u800C\u5F15\u51FA\u4E86\uFF1A<code>xxx bucket</code>(\u662F\u4E0D\u662F\u5F88\u5BB9\u6613\u7406\u89E3\u4E86)</p><ul><li>Bucket\u805A\u5408 -&gt; Metric\u805A\u5408\uFF1A bucket\u805A\u5408\u7684\u7ED3\u679C\uFF0C\u6210\u4E3A\u4E0B\u4E00\u6B65metric\u805A\u5408\u7684\u8F93\u5165 <ul><li>Average bucket</li><li>Min bucket</li><li>Max bucket</li><li>Sum bucket</li><li>Stats bucket</li><li>Extended stats bucket</li></ul></li></ul><p>\u5BF9\u6784\u5EFA\u4F53\u7CFB\u800C\u8A00\uFF0C\u7406\u89E3\u4E0A\u9762\u7684\u5DF2\u7ECF\u591F\u4E86\uFF0C\u5176\u5B83\u7684\u7C7B\u578B\u4E0D\u8FC7\u662F\u9526\u4E0A\u6DFB\u82B1\u800C\u8A00\u3002</p><h2 id="_2-\u4E00\u4E9B\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_2-\u4E00\u4E9B\u4F8B\u5B50" aria-hidden="true">#</a> 2. \u4E00\u4E9B\u4F8B\u5B50</h2><blockquote><p>\u8FD9\u91CC\u6211\u4EEC\u901A\u8FC7\u51E0\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u770B\u770B\u5373\u53EF\uFF0C\u5177\u4F53\u5982\u679C\u9700\u8981\u4F7F\u7528\u770B\u770B\u6587\u6863\u5373\u53EFxw</p></blockquote><h3 id="_2-1-average-bucket-\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#_2-1-average-bucket-\u805A\u5408" aria-hidden="true">#</a> 2.1 Average bucket \u805A\u5408</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>POST _search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;sales_per_month&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;date_histogram&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;date&quot;</span>,
        <span class="token string">&quot;calendar_interval&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;month&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;sum&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;avg_monthly_sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
// tag::avg-bucket-agg-syntax<span class="token punctuation">[</span><span class="token punctuation">]</span>               
      <span class="token string">&quot;avg_bucket&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;buckets_path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sales_per_month&gt;sales&quot;</span>,
        <span class="token string">&quot;gap_policy&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;skip&quot;</span>,
        <span class="token string">&quot;format&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;#,##0.00;(#,##0.00)&quot;</span>
      <span class="token punctuation">}</span>
// end::avg-bucket-agg-syntax<span class="token punctuation">[</span><span class="token punctuation">]</span>               
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5D4C\u5957\u7684bucket\u805A\u5408\uFF1A\u805A\u5408\u51FA\u6309\u6708\u4EF7\u683C\u7684\u76F4\u65B9\u56FE</li><li>Metic\u805A\u5408\uFF1A\u5BF9\u4E0A\u9762\u7684\u805A\u5408\u518D\u6C42\u5E73\u5747\u503C\u3002</li></ul><p><strong>\u5B57\u6BB5\u7C7B\u578B</strong>\uFF1A</p><ul><li>buckets_path\uFF1A\u6307\u5B9A\u805A\u5408\u7684\u540D\u79F0\uFF0C\u652F\u6301\u591A\u7EA7\u5D4C\u5957\u805A\u5408\u3002</li><li>gap_policy \u5F53\u7BA1\u9053\u805A\u5408\u9047\u5230\u4E0D\u5B58\u5728\u7684\u503C\uFF0C\u6709\u70B9\u7C7B\u4F3C\u4E8Eterm\u7B49\u805A\u5408\u7684(missing)\u65F6\u6240\u91C7\u53D6\u7684\u7B56\u7565\uFF0C\u53EF\u9009\u62E9\u503C\u4E3A\uFF1Askip\u3001insert_zeros\u3002</li><li>skip\uFF1A\u6B64\u9009\u9879\u5C06\u4E22\u5931\u7684\u6570\u636E\u89C6\u4E3Abucket\u4E0D\u5B58\u5728\u3002\u5B83\u5C06\u8DF3\u8FC7\u6876\u5E76\u4F7F\u7528\u4E0B\u4E00\u4E2A\u53EF\u7528\u503C\u7EE7\u7EED\u8BA1\u7B97\u3002</li><li>format \u7528\u4E8E\u683C\u5F0F\u5316\u805A\u5408\u6876\u7684\u8F93\u51FA(key)\u3002</li></ul><p>\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> ...<span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> ...<span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sales_per_month&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key_as_string&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2015/01/01 00:00:00&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">1420070400000</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">550.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key_as_string&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2015/02/01 00:00:00&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">1422748800000</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">60.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key_as_string&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2015/03/01 00:00:00&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">1425168000000</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">375.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avg_monthly_sales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">328.33333333333333</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value_as_string&quot;</span><span class="token operator">:</span> <span class="token string">&quot;328.33&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-stats-bucket-\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#_2-2-stats-bucket-\u805A\u5408" aria-hidden="true">#</a> 2.2 Stats bucket \u805A\u5408</h3><p>\u8FDB\u4E00\u6B65\u7684stat bucket\u4E5F\u5F88\u5BB9\u6613\u7406\u89E3\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>POST /sales/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;sales_per_month&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;date_histogram&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;date&quot;</span>,
        <span class="token string">&quot;calendar_interval&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;month&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;sum&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;stats_monthly_sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;stats_bucket&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;buckets_path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sales_per_month&gt;sales&quot;</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
   <span class="token string">&quot;took&quot;</span><span class="token builtin class-name">:</span> <span class="token number">11</span>,
   <span class="token string">&quot;timed_out&quot;</span><span class="token builtin class-name">:</span> false,
   <span class="token string">&quot;_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">..</span>.,
   <span class="token string">&quot;hits&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">..</span>.,
   <span class="token string">&quot;aggregations&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;sales_per_month&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">&quot;buckets&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               <span class="token string">&quot;key_as_string&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2015/01/01 00:00:00&quot;</span>,
               <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1420070400000</span>,
               <span class="token string">&quot;doc_count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
               <span class="token string">&quot;sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                  <span class="token string">&quot;value&quot;</span><span class="token builtin class-name">:</span> <span class="token number">550.0</span>
               <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
               <span class="token string">&quot;key_as_string&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2015/02/01 00:00:00&quot;</span>,
               <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1422748800000</span>,
               <span class="token string">&quot;doc_count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
               <span class="token string">&quot;sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                  <span class="token string">&quot;value&quot;</span><span class="token builtin class-name">:</span> <span class="token number">60.0</span>
               <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
               <span class="token string">&quot;key_as_string&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2015/03/01 00:00:00&quot;</span>,
               <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1425168000000</span>,
               <span class="token string">&quot;doc_count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
               <span class="token string">&quot;sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                  <span class="token string">&quot;value&quot;</span><span class="token builtin class-name">:</span> <span class="token number">375.0</span>
               <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;stats_monthly_sales&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">&quot;count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
         <span class="token string">&quot;min&quot;</span><span class="token builtin class-name">:</span> <span class="token number">60.0</span>,
         <span class="token string">&quot;max&quot;</span><span class="token builtin class-name">:</span> <span class="token number">550.0</span>,
         <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token number">328.3333333333333</span>,
         <span class="token string">&quot;sum&quot;</span><span class="token builtin class-name">:</span> <span class="token number">985.0</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,34),y={href:"https://pdai.tech/md/db/nosql-es/elasticsearch-x-agg-pipeline.html",target:"_blank",rel:"noopener noreferrer"},f=s("strong",null,"ES\u8BE6\u89E3 - \u805A\u5408\uFF1A\u805A\u5408\u67E5\u8BE2\u4E4BPipline\u805A\u5408\u8BE6\u89E3",-1);function x(z,S){const a=o("ExternalLinkIcon");return p(),l("div",null,[u,s("blockquote",null,[s("p",null,[r,s("a",d,[k,t(a)]),v])]),b,m,s("p",null,[s("a",q,[g,t(a)]),h]),_,s("p",null,[s("a",y,[f,t(a)])])])}const j=i(c,[["render",x],["__file","elasticsearch-x-agg-pipeline.html.vue"]]);export{j as default};
