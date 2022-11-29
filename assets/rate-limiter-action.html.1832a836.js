import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as o,e as i,r as c}from"./app.75100209.js";const l={},u=o(`<h1 id="\u7CFB\u7EDF\u9AD8\u5E76\u53D1-\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u9AD8\u5E76\u53D1-\u9650\u6D41" aria-hidden="true">#</a> \u7CFB\u7EDF\u9AD8\u5E76\u53D1-\u9650\u6D41</h1><blockquote><p><strong>\u9AD8\u5E76\u53D1\u5B9E\u73B0\u7684\u4E09\u677F\u65A7\uFF1A\u7F13\u5B58\uFF0C\u9650\u6D41\u548C\u964D\u7EA7</strong>\u3002</p></blockquote><h2 id="_1-\u4EC0\u4E48\u662F\u9650\u6D41-\u4E3A\u4EC0\u4E48\u8981\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u9650\u6D41-\u4E3A\u4EC0\u4E48\u8981\u9650\u6D41" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u9650\u6D41\uFF1F\u4E3A\u4EC0\u4E48\u8981\u9650\u6D41\uFF1F</h2><p>\u7A0B\u5E8F\u5904\u7406\u8BF7\u6C42\u7684\u80FD\u529B\u4E5F\u662F\u6709\u9650\u7684\uFF0C\u4E00\u65E6\u8BF7\u6C42\u591A\u5230\u8D85\u51FA\u5B83\u7684\u5904\u7406\u6781\u9650\u5C31\u4F1A\u5D29\u6E83\u3002</p><p><strong>\u9650\u6D41(Ratelimiting)\u6307\u5BF9\u5E94\u7528\u670D\u52A1\u7684\u8BF7\u6C42\u8FDB\u884C\u9650\u5236</strong>\uFF0C\u4F8B\u5982\u67D0\u4E00\u63A5\u53E3\u7684\u8BF7\u6C42\u9650\u5236\u4E3A 100 \u4E2A\u6BCF\u79D2,\u5BF9\u8D85\u8FC7\u9650\u5236\u7684\u8BF7\u6C42\u5219\u8FDB\u884C\u5FEB\u901F\u5931\u8D25\u6216\u4E22\u5F03\u3002</p><blockquote><p>\u9650\u6D41\u662F\u4FDD\u8BC1\u7CFB\u7EDF\u9AD8\u53EF\u7528\u7684\u91CD\u8981\u624B\u6BB5\uFF01</p><p>\u7531\u4E8E\u4E92\u8054\u7F51\u516C\u53F8\u7684\u6D41\u91CF\u5DE8\u5927\uFF0C\u7CFB\u7EDF\u4E0A\u7EBF\u4F1A\u505A\u4E00\u4E2A\u6D41\u91CF\u5CF0\u503C\u7684\u8BC4\u4F30\uFF0C\u5C24\u5176\u662F\u50CF\u5404\u79CD\u79D2\u6740\u4FC3\u9500\u6D3B\u52A8\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u7CFB\u7EDF\u4E0D\u88AB\u5DE8\u5927\u7684\u6D41\u91CF\u538B\u57AE\uFF0C\u4F1A\u5728\u7CFB\u7EDF\u6D41\u91CF\u5230\u8FBE\u4E00\u5B9A\u9608\u503C\u65F6\uFF0C\u62D2\u7EDD\u6389\u4E00\u90E8\u5206\u6D41\u91CF\u3002</p><p>\u9650\u6D41\u4F1A\u5BFC\u81F4\u7528\u6237\u5728\u77ED\u65F6\u95F4\u5185\uFF08\u8FD9\u4E2A\u65F6\u95F4\u6BB5\u662F\u6BEB\u79D2\u7EA7\u7684\uFF09\u7CFB\u7EDF\u4E0D\u53EF\u7528\uFF0C\u4E00\u822C\u6211\u4EEC\u8861\u91CF\u7CFB\u7EDF\u5904\u7406\u80FD\u529B\u7684\u6307\u6807\u662F\u6BCF\u79D2\u7684QPS\u6216\u8005TPS\uFF0C\u5047\u8BBE\u7CFB\u7EDF\u6BCF\u79D2\u7684\u6D41\u91CF\u9608\u503C\u662F1000\uFF0C\u7406\u8BBA\u4E0A\u4E00\u79D2\u5185\u6709\u7B2C1001\u4E2A\u8BF7\u6C42\u8FDB\u6765\u65F6\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8BF7\u6C42\u5C31\u4F1A\u88AB\u9650\u6D41\u3002</p></blockquote><h2 id="_2-\u9650\u6D41\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u9650\u6D41\u7684\u4F5C\u7528" aria-hidden="true">#</a> 2. \u9650\u6D41\u7684\u4F5C\u7528</h2><p>\u9650\u6D41\u53EF\u4EE5\u5E94\u5BF9\uFF1A</p><ul><li>\u70ED\u70B9\u4E1A\u52A1\u5E26\u6765\u7684\u7A81\u53D1\u8BF7\u6C42\uFF1B</li><li>\u8C03\u7528\u65B9 bug \u5BFC\u81F4\u7684\u7A81\u53D1\u8BF7\u6C42\uFF1B</li><li>\u6076\u610F\u653B\u51FB\u8BF7\u6C42\u3002</li></ul><p>\u56E0\u6B64\uFF0C<strong>\u5BF9\u4E8E\u516C\u5F00\u7684\u63A5\u53E3\u6700\u597D\u91C7\u53D6\u9650\u6D41\u63AA\u65BD</strong>\u3002</p><h2 id="_3-\u9650\u6D41\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u9650\u6D41\u65B9\u6848" aria-hidden="true">#</a> 3. \u9650\u6D41\u65B9\u6848</h2><h3 id="_3-1-\u8BA1\u6570\u5668\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8BA1\u6570\u5668\u7B97\u6CD5" aria-hidden="true">#</a> 3.1 \u8BA1\u6570\u5668\u7B97\u6CD5</h3><p>Java\u5185\u90E8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u539F\u5B50\u7C7B\u8BA1\u6570\u5668AtomicInteger\u3001Semaphore\u4FE1\u53F7\u91CF\u6765\u505A\u7B80\u5355\u7684\u9650\u6D41\u3002</p><h4 id="_3-1-1-\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> 3.1.1 \u5B9E\u73B0\u601D\u8DEF\uFF1A</h4><ol><li>\u4E00\u822C\u6211\u4EEC\u4F1A\u9650\u5236\u4E00\u79D2\u949F\u7684\u80FD\u591F\u901A\u8FC7\u7684\u8BF7\u6C42\u6570\uFF0C\u6BD4\u5982\u9650\u6D41qps\u4E3A100\uFF0C</li><li>\u7B97\u6CD5\u7684\u5B9E\u73B0\u601D\u8DEF\u5C31\u662F\u4ECE\u7B2C\u4E00\u4E2A\u8BF7\u6C42\u8FDB\u6765\u5F00\u59CB\u8BA1\u65F6</li><li>\u5728\u63A5\u4E0B\u6765\u76841s\u5185\uFF0C\u6BCF\u6765\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5C31\u628A\u8BA1\u6570\u52A01</li><li>\u5982\u679C\u7D2F\u52A0\u7684\u6570\u5B57\u8FBE\u5230100\uFF0C\u90A3\u4E48\u540E\u7EED\u7684\u8BF7\u6C42\u5C31\u4F1A\u88AB\u5168\u90E8\u62D2\u7EDD</li><li>\u7B49\u52301s\u7ED3\u675F\u540E\uFF0C\u628A\u8BA1\u6570\u6062\u590D\u62100\uFF0C\u91CD\u65B0\u5F00\u59CB\u8BA1\u6570</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u9650\u6D41\u7684\u4E2A\u6570</span>
<span class="token keyword">private</span> <span class="token keyword">int</span> maxCount <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token comment">// \u6307\u5B9A\u7684\u65F6\u95F4\u5185</span>
<span class="token keyword">private</span> <span class="token keyword">long</span> interval <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>
<span class="token comment">// \u539F\u5B50\u7C7B\u8BA1\u6570\u5668</span>
<span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> atomicInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8D77\u59CB\u65F6\u95F4</span>
<span class="token keyword">private</span> <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxCount<span class="token punctuation">,</span> <span class="token keyword">int</span> interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    atomicInteger<span class="token punctuation">.</span><span class="token function">addAndGet</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        atomicInteger<span class="token punctuation">.</span><span class="token function">addAndGet</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8D85\u8FC7\u4E86\u95F4\u9694\u65F6\u95F4\uFF0C\u76F4\u63A5\u91CD\u65B0\u5F00\u59CB\u8BA1\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime <span class="token operator">&gt;</span> interval <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        atomicInteger<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8FD8\u5728\u95F4\u9694\u65F6\u95F4\u5185,check\u6709\u6CA1\u6709\u8D85\u8FC7\u9650\u6D41\u7684\u4E2A\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u6F0F\u6876\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6F0F\u6876\u7B97\u6CD5" aria-hidden="true">#</a> 3.2 \u6F0F\u6876\u7B97\u6CD5</h3><p>\u6F0F\u6876\u7B97\u6CD5\u601D\u8DEF\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u628A\u6C34\u6BD4\u4F5C\u662F\u8BF7\u6C42\uFF0C<strong>\u6F0F\u6876\u6BD4\u4F5C\u662F\u7CFB\u7EDF\u5904\u7406\u80FD\u529B\u6781\u9650</strong>\uFF0C\u6C34\u5148\u8FDB\u5165\u5230\u6F0F\u6876\u91CC\uFF0C\u6F0F\u6876\u91CC\u7684<strong>\u6C34\u6309\u4E00\u5B9A\u901F\u7387\u6D41\u51FA</strong>\uFF0C\u5F53\u6D41\u51FA\u7684\u901F\u7387\u5C0F\u4E8E\u6D41\u5165\u7684\u901F\u7387\u65F6\uFF0C\u7531\u4E8E<strong>\u6F0F\u6876\u5BB9\u91CF\u6709\u9650\uFF0C\u540E\u7EED\u8FDB\u5165\u7684\u6C34\u76F4\u63A5\u6EA2\u51FA\uFF08\u62D2\u7EDD\u8BF7\u6C42\uFF09</strong>\uFF0C\u4EE5\u6B64\u5B9E\u73B0\u9650\u6D41\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220610211108002.png" alt="image-20220610211108002" loading="lazy"></p><h4 id="_3-2-1-\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> 3.2.1 \u5B9E\u73B0\u601D\u8DEF\uFF1A</h4><ul><li>\u53EF\u4EE5\u51C6\u5907\u4E00\u4E2A\u961F\u5217\uFF0C\u7528\u6765\u4FDD\u5B58\u8BF7\u6C42\uFF0C</li><li>\u53E6\u5916\u901A\u8FC7\u4E00\u4E2A\u7EBF\u7A0B\u6C60\u5B9A\u671F\u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\u8BF7\u6C42\u5E76\u6267\u884C\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6027\u83B7\u53D6\u591A\u4E2A\u5E76\u53D1\u6267\u884C</li></ul><p><strong>\u5F0A\u7AEF</strong>\uFF1A\u65E0\u6CD5\u5BF9\u5E94\u77ED\u65F6\u95F4\u7684\u7A81\u53D1\u6D41\u91CF</p><h3 id="_3-3-\u4EE4\u724C\u6876\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-3-\u4EE4\u724C\u6876\u7B97\u6CD5" aria-hidden="true">#</a> 3.3 \u4EE4\u724C\u6876\u7B97\u6CD5</h3><blockquote><p>\u4ECE\u67D0\u79CD\u610F\u4E49\u4E0A\uFF0C\u4EE4\u724C\u6876\u662F\u5BF9\u6F0F\u6876\u7B97\u6CD5\u7684\u4E00\u79CD\u6539\u8FDB\uFF0C\u6876\u7B97\u6CD5\u80FD\u591F\u9650\u5236\u8BF7\u6C42\u8C03\u7528\u7684\u901F\u7387\uFF0C\u800C\u4EE4\u724C\u6876\u7B97\u6CD5\u80FD\u591F\u5728\u9650\u5236\u8C03\u7528\u7684\u5E73\u5747\u901F\u7387\u7684\u540C\u65F6\u8FD8\u5141\u8BB8\u4E00\u5B9A\u7A0B\u5EA6\u7684\u7A81\u53D1\u8C03\u7528</p></blockquote><p>\u4EE4\u724C\u6876\u7B97\u6CD5\u7684\u539F\u7406\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u6210\u533B\u9662\u7684\u6302\u53F7\u770B\u75C5\uFF0C\u53EA\u6709\u62FF\u5230\u53F7\u4EE5\u540E\u624D\u53EF\u4EE5\u8FDB\u884C\u8BCA\u75C5\u3002</p><p>\u7CFB\u7EDF\u4F1A\u7EF4\u62A4\u4E00\u4E2A\u4EE4\u724C\uFF08token\uFF09\u6876\uFF0C<strong>\u4EE5\u4E00\u4E2A\u6052\u5B9A\u7684\u901F\u5EA6\u5F80\u6876\u91CC\u653E\u5165\u4EE4\u724C\uFF08token\uFF09</strong>\uFF0C\u8FD9\u65F6\u5982\u679C\u6709\u8BF7\u6C42\u8FDB\u6765\u60F3\u8981\u88AB\u5904\u7406\uFF0C\u5219\u9700\u8981\u5148\u4ECE\u6876\u91CC\u83B7\u53D6\u4E00\u4E2A\u4EE4\u724C\uFF08token\uFF09\uFF0C\u5F53\u6876\u91CC\u6CA1\u6709\u4EE4\u724C\uFF08token\uFF09\u53EF\u53D6\u65F6\uFF0C\u5219\u8BE5\u8BF7\u6C42\u5C06\u88AB\u62D2\u7EDD\u670D\u52A1\u3002<strong>\u4EE4\u724C\u6876\u7B97\u6CD5\u901A\u8FC7\u63A7\u5236\u6876\u7684\u5BB9\u91CF\u3001\u53D1\u653E\u4EE4\u724C\u7684\u901F\u7387\uFF0C\u6765\u8FBE\u5230\u5BF9\u8BF7\u6C42\u7684\u9650\u5236</strong>\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220610211432413.png" alt="image-20220610211432413" loading="lazy"></p><h4 id="_3-3-1-\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> 3.3.1 \u5B9E\u73B0\u601D\u8DEF\uFF1A</h4><p>\u53EF\u4EE5\u51C6\u5907\u4E00\u4E2A\u961F\u5217\uFF0C\u7528\u6765\u4FDD\u5B58\u4EE4\u724C\uFF0C\u53E6\u5916\u901A\u8FC7\u4E00\u4E2A\u7EBF\u7A0B\u6C60\u5B9A\u671F\u751F\u6210\u4EE4\u724C\u653E\u5230\u961F\u5217\u4E2D\uFF0C\u6BCF\u6765\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5C31\u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\u4E00\u4E2A\u4EE4\u724C\uFF0C\u5E76\u7EE7\u7EED\u6267\u884C\u3002</p><h3 id="_3-4-redis-lua" tabindex="-1"><a class="header-anchor" href="#_3-4-redis-lua" aria-hidden="true">#</a> 3.4 Redis + Lua</h3><blockquote><p>\u4E4B\u524D\u4ECB\u7ECD\u76843\u4E2D\u90FD\u662F\u5355\u673A\u9650\u6D41\uFF0C\u5355\u673A\u9650\u6D41\u65E0\u6CD5\u6EE1\u8DB3\u4E94\u82B1\u516B\u95E8\u7684\u9700\u6C42\u3002\u5982</p><ul><li>\u9650\u5236\u67D0\u4E2A\u8D44\u6E90\u88AB\u6BCF\u4E2A\u7528\u6237\u6216\u8005\u5546\u6237\u7684\u8BBF\u95EE\u6B21\u6570\uFF0C5\u79D2\u53EA\u80FD\u8BBF\u95EE2\u6B21\uFF0C\u6216\u8005\u4E00\u5929\u53EA\u80FD\u8C03\u7528100\u6B21\uFF0C\u5355\u673A\u9650\u6D41\u65E0\u6CD5\u5B9E\u73B0\uFF0C\u9700\u8981\u96C6\u7FA4\u9650\u6D41</li></ul><p>\u5982\u4F55\u5B9E\u73B0\uFF1F</p><p>\u4E3A\u4E86\u63A7\u5236\u8BBF\u95EE\u6B21\u6570\uFF0C\u80AF\u5B9A\u9700\u8981\u4E00\u4E2A\u8BA1\u6570\u5668\uFF0C\u800C\u4E14\u8FD9\u4E2A\u8BA1\u6570\u5668\u53EA\u80FD\u4FDD\u5B58\u5728\u7B2C\u4E09\u65B9\u670D\u52A1\uFF0C\u6BD4\u5982redis</p></blockquote><p>\u5F88\u591A\u540C\u5B66\u4E0D\u77E5\u9053Lua\u662F\u5565\uFF1F\u4E2A\u4EBA\u7406\u89E3\uFF0CLua\u811A\u672C\u548C MySQL\u6570\u636E\u5E93\u7684\u5B58\u50A8\u8FC7\u7A0B\u6BD4\u8F83\u76F8\u4F3C\uFF0C\u4ED6\u4EEC\u6267\u884C\u4E00\u7EC4\u547D\u4EE4\uFF0C\u6240\u6709\u547D\u4EE4\u7684\u6267\u884C\u8981\u4E48\u5168\u90E8\u6210\u529F\u6216\u8005\u5931\u8D25\uFF0C\u4EE5\u6B64\u8FBE\u5230\u539F\u5B50\u6027\u3002\u4E5F\u53EF\u4EE5\u628ALua\u811A\u672C\u7406\u89E3\u4E3A\uFF0C\u4E00\u6BB5\u5177\u6709\u4E1A\u52A1\u903B\u8F91\u7684\u4EE3\u7801\u5757\u3002</p><p>\u800CLua\u672C\u8EAB\u5C31\u662F\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\uFF0C\u867D\u7136redis \u5B98\u65B9\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u9650\u6D41\u76F8\u5E94\u7684API\uFF0C\u4F46\u5374\u652F\u6301\u4E86 Lua \u811A\u672C\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5B83\u5B9E\u73B0\u590D\u6742\u7684\u4EE4\u724C\u6876\u6216\u6F0F\u6876\u7B97\u6CD5\uFF0C\u4E5F\u662F\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5B9E\u73B0\u9650\u6D41\u7684\u4E3B\u8981\u65B9\u5F0F\u4E4B\u4E00\u3002</p><p>\u76F8\u6BD4Redis\u4E8B\u52A1\uFF0CLua\u811A\u672C\u7684\u4F18\u70B9\uFF1A</p><ul><li>\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\uFF1A\u4F7F\u7528Lua\u811A\u672C\uFF0C\u65E0\u9700\u5411Redis\u53D1\u9001\u591A\u6B21\u8BF7\u6C42\uFF0C\u6267\u884C\u4E00\u6B21\u5373\u53EF\uFF0C\u51CF\u5C11\u7F51\u7EDC\u4F20\u8F93</li><li>\u539F\u5B50\u64CD\u4F5C\uFF1ARedis\u5C06\u6574\u4E2ALua\u811A\u672C\u4F5C\u4E3A\u4E00\u4E2A\u547D\u4EE4\u6267\u884C\uFF0C\u539F\u5B50\uFF0C\u65E0\u9700\u62C5\u5FC3\u5E76\u53D1</li><li>\u590D\u7528\uFF1ALua\u811A\u672C\u4E00\u65E6\u6267\u884C\uFF0C\u4F1A\u6C38\u4E45\u4FDD\u5B58 Redis \u4E2D\uFF0C\u5176\u4ED6\u5BA2\u6237\u7AEF\u53EF\u590D\u7528</li></ul><p>Lua\u811A\u672C\u5927\u81F4\u903B\u8F91\u5982\u4E0B\uFF1A</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- \u83B7\u53D6\u8C03\u7528\u811A\u672C\u65F6\u4F20\u5165\u7684\u7B2C\u4E00\u4E2Akey\u503C\uFF08\u7528\u4F5C\u9650\u6D41\u7684 key\uFF09</span>
<span class="token keyword">local</span> key <span class="token operator">=</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">-- \u83B7\u53D6\u8C03\u7528\u811A\u672C\u65F6\u4F20\u5165\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u503C\uFF08\u9650\u6D41\u5927\u5C0F\uFF09</span>
<span class="token keyword">local</span> limit <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">-- \u83B7\u53D6\u5F53\u524D\u6D41\u91CF\u5927\u5C0F</span>
<span class="token keyword">local</span> curentLimit <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>

<span class="token comment">-- \u662F\u5426\u8D85\u51FA\u9650\u6D41</span>
<span class="token keyword">if</span> curentLimit <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> limit <span class="token keyword">then</span>
<span class="token comment">-- \u8FD4\u56DE(\u62D2\u7EDD)</span>
<span class="token keyword">return</span> <span class="token number">0</span>
<span class="token keyword">else</span>
<span class="token comment">-- \u6CA1\u6709\u8D85\u51FA value + 1</span>
redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;INCRBY&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">-- \u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</span>
redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;EXPIRE&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">-- \u8FD4\u56DE(\u653E\u884C)</span>
<span class="token keyword">return</span> <span class="token number">1</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u901A\u8FC7KEYS[1] \u83B7\u53D6\u4F20\u5165\u7684key\u53C2\u6570</li><li>\u901A\u8FC7ARGV[1]\u83B7\u53D6\u4F20\u5165\u7684limit\u53C2\u6570</li><li>redis.call\u65B9\u6CD5\uFF0C\u4ECE\u7F13\u5B58\u4E2Dget\u548Ckey\u76F8\u5173\u7684\u503C\uFF0C\u5982\u679C\u4E3Anull\u90A3\u4E48\u5C31\u8FD4\u56DE0</li><li>\u63A5\u7740\u5224\u65AD\u7F13\u5B58\u4E2D\u8BB0\u5F55\u7684\u6570\u503C\u662F\u5426\u4F1A\u5927\u4E8E\u9650\u5236\u5927\u5C0F\uFF0C\u5982\u679C\u8D85\u51FA\u8868\u793A\u8BE5\u88AB\u9650\u6D41\uFF0C\u8FD4\u56DE0</li><li>\u5982\u679C\u672A\u8D85\u8FC7\uFF0C\u90A3\u4E48\u8BE5key\u7684\u7F13\u5B58\u503C+1\uFF0C\u5E76\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\u4E3A1\u79D2\u949F\u4EE5\u540E\uFF0C\u5E76\u8FD4\u56DE\u7F13\u5B58\u503C+1</li></ul><blockquote><p>\u603B\u7684\u8FD91\u79D2\u949F\u5C31\u53EA\u6709\u8FD9\u4E48\u591A\u4E2A\u8BF7\u6C42\u3002\u7406\u8BBA\u4E0A\u6765\u8BF4\u4ED6\u662F\u4EE4\u724C\u6876\u7B97\u6CD5</p></blockquote><h3 id="_3-5-\u7F51\u5173\u5C42\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#_3-5-\u7F51\u5173\u5C42\u9650\u6D41" aria-hidden="true">#</a> 3.5 \u7F51\u5173\u5C42\u9650\u6D41</h3><p>\u9650\u6D41\u5E38\u5728\u7F51\u5173\u8FD9\u4E00\u5C42\u505A\uFF0C\u6BD4\u5982Nginx\u3001Openresty\u3001Kong\u3001Zuul\u3001Spring Cloud Gateway\u7B49\uFF0C\u800C\u50CFspring cloud - gateway\u7F51\u5173\u9650\u6D41\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\uFF0C\u5C31\u662F\u57FA\u4E8ERedis + Lua\uFF0C\u901A\u8FC7\u5185\u7F6ELua\u9650\u6D41\u811A\u672C\u7684\u65B9\u5F0F\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220610212734116.png" alt="image-20220610212734116" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,43),r={href:"http://dockone.io/article/10137",target:"_blank",rel:"noopener noreferrer"},d=i("\u6211\u53F8\u7528\u4E866\u5E74\u7684Redis\u5206\u5E03\u5F0F\u9650\u6D41\u5668\uFF0C\u53EF\u4EE5\u8BF4\u662F\u975E\u5E38\u5389\u5BB3\u4E86\uFF01");function k(m,v){const s=c("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[d,p(s)])])])}const g=a(l,[["render",k],["__file","rate-limiter-action.html.vue"]]);export{g as default};
