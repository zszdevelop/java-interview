import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.70ab84e4.js";const t={},p=e(`<h1 id="\u9632\u6B62sql\u6CE8\u5165\u653B\u51FB\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#\u9632\u6B62sql\u6CE8\u5165\u653B\u51FB\u5B9E\u6218" aria-hidden="true">#</a> \u9632\u6B62SQL\u6CE8\u5165\u653B\u51FB\u5B9E\u6218</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6240\u8C13 SQL \u6CE8\u5165\uFF0C\u5C31\u662F\u901A\u8FC7\u5C06 SQL \u547D\u4EE4\u63D2\u5165\u5E94\u7528\u7A0B\u5E8F\u7684 http \u8BF7\u6C42\u4E2D\uFF0C\u5E76\u5728\u670D\u52A1\u5668\u7AEF\u88AB\u63A5\u6536\u540E\u7528\u4E8E\u53C2\u4E0E\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u6700\u7EC8\u8FBE\u5230\u6B3A\u9A97\u670D\u52A1\u5668\u6267\u884C\u6076\u610F\u7684 SQL \u547D\u4EE4\u7684\u6548\u679C\u3002</p><h3 id="_1-1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u793A\u4F8B" aria-hidden="true">#</a> 1.1 \u793A\u4F8B</h3><p>\u6700\u7ECF\u5178\u7684sql \u6CE8\u5165</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code> <span class="token comment">// \u91CD\u70B9\u770B\u8FD9\u6761SQL\uFF0C\u5BC6\u7801\u8F93\u5165: &#39; OR &#39;1&#39;=&#39;1\u65F6\uFF0C\u7B49\u540C\u4E8E\u4E0D\u9700\u8981\u5BC6\u7801</span>
        String <span class="token keyword">sql</span> <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM t_user WHERE username=&#39;&quot;</span><span class="token operator">+</span>userName<span class="token operator">+</span><span class="token string">&quot;&#39; AND pwd=&#39;&quot;</span><span class="token operator">+</span>password<span class="token operator">+</span><span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">;</span>       
        ResultSet rs <span class="token operator">=</span> state<span class="token punctuation">.</span>executeQuery<span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u89E3\u51B3\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u601D\u8DEF" aria-hidden="true">#</a> 2. \u89E3\u51B3\u601D\u8DEF</h2><ol><li>\u4F7F\u7528\u9884\u7F16\u8BD1\u5904\u7406\u8F93\u5165\u53C2\u6570</li><li>\u8F93\u5165\u9A8C\u8BC1\uFF0C\u786E\u4FDD\u8F93\u5165\u7684\u6B63\u786E\u6027</li></ol><h2 id="_3-\u4F7F\u7528\u9884\u7F16\u8BD1\u5904\u7406\u8F93\u5165\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u9884\u7F16\u8BD1\u5904\u7406\u8F93\u5165\u53C2\u6570" aria-hidden="true">#</a> 3. \u4F7F\u7528\u9884\u7F16\u8BD1\u5904\u7406\u8F93\u5165\u53C2\u6570</h2><p>\u6211\u4EEC\u73B0\u5728\u57FA\u672C\u90FD\u4F7F\u7528ORM \u6846\u67B6\u5DF2\u7ECF\u5E2E\u6211\u4EEC\u505A\u4E86\u9884\u7F16\u8BD1\u5904\u7406\u3002</p><p>\u4F46\u8FD8\u6709\u5C0F\u90E8\u5206sql\uFF0C\u5982order by \u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u5BF9\u8F93\u5165\u9A8C\u8BC1</p><h2 id="_4-\u8F93\u5165\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_4-\u8F93\u5165\u9A8C\u8BC1" aria-hidden="true">#</a> 4. \u8F93\u5165\u9A8C\u8BC1</h2><h3 id="_4-1-\u8BF7\u6C42\u53C2\u6570\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_4-1-\u8BF7\u6C42\u53C2\u6570\u5904\u7406" aria-hidden="true">#</a> 4.1 \u8BF7\u6C42\u53C2\u6570\u5904\u7406</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>pageDomain<span class="token punctuation">.</span><span class="token function">getOrderBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">String</span> orderBy <span class="token operator">=</span> <span class="token class-name">SqlUtil</span><span class="token punctuation">.</span><span class="token function">escapeOrderBySql</span><span class="token punctuation">(</span>pageDomain<span class="token punctuation">.</span><span class="token function">getOrderBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">orderBy</span><span class="token punctuation">(</span>orderBy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-\u5BF9\u8F93\u5165\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5BF9\u8F93\u5165\u9A8C\u8BC1" aria-hidden="true">#</a> 4.2 \u5BF9\u8F93\u5165\u9A8C\u8BC1</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * sql\u64CD\u4F5C\u5DE5\u5177\u7C7B
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SqlUtil</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u5B9A\u4E49\u5E38\u7528\u7684 sql\u5173\u952E\u5B57
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> SQL_REGEX <span class="token operator">=</span> <span class="token string">&quot;select |insert |delete |update |drop |count |exec |chr |mid |master |truncate |char |and |declare &quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4EC5\u652F\u6301\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3001\u7A7A\u683C\u3001\u9017\u53F7\u3001\u5C0F\u6570\u70B9\uFF08\u652F\u6301\u591A\u4E2A\u5B57\u6BB5\u6392\u5E8F\uFF09
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> SQL_PATTERN <span class="token operator">=</span> <span class="token string">&quot;[a-zA-Z0-9_\\\\ \\\\,\\\\.]+&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u68C0\u67E5\u5B57\u7B26\uFF0C\u9632\u6B62\u6CE8\u5165\u7ED5\u8FC7
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">escapeOrderBySql</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isValidOrderBySql</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UtilException</span><span class="token punctuation">(</span><span class="token string">&quot;\u53C2\u6570\u4E0D\u7B26\u5408\u89C4\u8303\uFF0C\u4E0D\u80FD\u8FDB\u884C\u67E5\u8BE2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u9A8C\u8BC1 order by \u8BED\u6CD5\u662F\u5426\u7B26\u5408\u89C4\u8303
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isValidOrderBySql</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>SQL_PATTERN<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * SQL\u5173\u952E\u5B57\u68C0\u67E5
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">filterKeyword</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sqlKeywords <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>SQL_REGEX<span class="token punctuation">,</span> <span class="token string">&quot;\\\\|&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> sqlKeyword <span class="token operator">:</span> sqlKeywords<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">indexOfIgnoreCase</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> sqlKeyword<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UtilException</span><span class="token punctuation">(</span><span class="token string">&quot;\u53C2\u6570\u5B58\u5728SQL\u6CE8\u5165\u98CE\u9669&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[p];function o(i,l){return s(),a("div",null,c)}var d=n(t,[["render",o],["__file","\u9632\u6B62SQL\u6CE8\u5165\u653B\u51FB\u5B9E\u6218.html.vue"]]);export{d as default};
