import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.d4563a68.js";const e={},p=t(`<h1 id="solr\u547D\u4E2D\u5173\u952E\u5B57\u9AD8\u4EAE\u4E0D\u51C6\u786E" tabindex="-1"><a class="header-anchor" href="#solr\u547D\u4E2D\u5173\u952E\u5B57\u9AD8\u4EAE\u4E0D\u51C6\u786E" aria-hidden="true">#</a> Solr\u547D\u4E2D\u5173\u952E\u5B57\u9AD8\u4EAE\u4E0D\u51C6\u786E</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>solr \u5728\u641C\u7D22\u65F6\uFF0C\u660E\u660E\u641C\u7D22\u7684\u662F A\u8BCD\u7EC4\uFF0C\u4F46\u662FB \u8BCD\u7EC4\u4E5F\u4EAE\u4E86\uFF0C\u800C\u4E14\u5728 \u5206\u8BCD\u89E3\u6790\u5668\u4E2D\uFF0C\u600E\u4E48\u8BBE\u7F6E\u90FD\u4E0D\u53EF\u80FD\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5</p><p>\u56E0\u6D89\u53CA\u4E00\u4E9B\u5185\u90E8\u6570\u636E\uFF0C\u5C31\u4E0D\u653E\u622A\u56FE\u4E86</p><h2 id="_2-\u539F\u56E0\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_2-\u539F\u56E0\u5206\u6790" aria-hidden="true">#</a> 2. \u539F\u56E0\u5206\u6790</h2><p>\u7ECF\u8FC7\u4E0D\u65AD\u7684\u6392\u67E5\uFF0C\u786E\u5B9A\u95EE\u9898\u7684\u539F\u56E0\u662F\u51FA\u73B0\u591A\u8BCD\u8BED\u641C\u7D22\u7684\u60C5\u51B5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a_ik:\u5F20 OR  b_s:*\u5F20*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u9700\u8981\u8FC7\u6EE4\u591A\u4E2A\u8BCD\uFF0C\u5728ik \u7684\u65F6\u5019\u662F\u76F4\u63A5\u641C\u7D22\u8BCD\uFF0C\u5728string\u4E0B\u662F\u641C\u7D22like \u5339\u914D\u3002</p><p>solr \u9ED8\u8BA4\u60C5\u51B5\uFF0C\u6211\u4EEC\u867D\u7136\u641C\u7D22\u7684\u662F\u4E0D\u540C\u5B57\u6BB5\uFF0C\u4F46<strong>\u9AD8\u4EAE</strong>\u65F6\u4ED6\u8FD8\u662F\u4F1A\u7528b\u7684\u6761\u4EF6\u5E26\u5165a\u7528\u505A\u9AD8\u4EAE</p><p>\u6211\u4EEC\u9700\u8981\u6307\u5B9A</p><ul><li><strong>hl.requireFieldMatch\uFF0C \u5FC5\u987B\u5B57\u6BB5\u5339\u914D</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220418155546278.png" alt="image-20220418155546278" loading="lazy"></p><h2 id="_3-\u4EE3\u7801\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u8BBE\u7F6E" aria-hidden="true">#</a> 3. \u4EE3\u7801\u8BBE\u7F6E</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addHighlight</span><span class="token punctuation">(</span><span class="token class-name">AjSearchRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">SolrQuery</span> sq<span class="token punctuation">,</span> <span class="token class-name">String</span> highlightField<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5982\u679C\u5B58\u5728\u9AD8\u4EAE\u5B57\u6BB5\u5219\u9AD8\u4EAE\u663E\u793A</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getSearchContentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sq<span class="token punctuation">.</span><span class="token function">setHighlight</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sq<span class="token punctuation">.</span><span class="token function">setHighlightSimplePre</span><span class="token punctuation">(</span><span class="token constant">HIGHHIGHT_PRE_PRIX</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sq<span class="token punctuation">.</span><span class="token function">setHighlightSimplePost</span><span class="token punctuation">(</span><span class="token constant">HIGHLIGHT_POST_PRIX</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;hl.fl&quot;</span><span class="token punctuation">,</span> highlightField<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sq<span class="token punctuation">.</span><span class="token function">setHighlightRequireFieldMatch</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sq<span class="token punctuation">.</span><span class="token function">setHighlightFragsize</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","solr-i-highlight.html.vue"]]);export{d as default};
