import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.e1ff6185.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u7CFB\u7EDF\u53C2\u6570\u914D\u7F6E\u529F\u80FD-\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u53C2\u6570\u914D\u7F6E\u529F\u80FD-\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> \u7CFB\u7EDF\u53C2\u6570\u914D\u7F6E\u529F\u80FD&amp;\u5B9E\u73B0\u601D\u8DEF</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6211\u4EEC\u5728\u9879\u76EE\u90E8\u7F72\u540E\u5F88\u591A\u914D\u7F6E\u9700\u8981\u6839\u636E\u73B0\u573A\u60C5\u51B5\u914D\u7F6E\u3002\u5982\u7B2C\u4E09\u65B9\u5BF9\u63A5\u7684api\u63A5\u53E3\u5730\u5740\u7B49\u7B49\u3002\u5982\u679C\u6211\u4EEC\u6BCF\u6B21\u6539\u52A8\u90FD\u8981\u6539\u52A8\u4EE3\u7801\u6216\u91CD\u542F\u9879\u76EE\uFF0C\u90A3\u4E48\u6548\u7387\u4E5F\u592A\u4F4E\u4E86\u3002\u6240\u4EE5\u6211\u4EEC\u4E00\u822C\u4F1A\u8BBE\u8BA1\u4E00\u4E2A\u53C2\u6570\u7BA1\u7406\u529F\u80FD\uFF0C\u6765\u5B9E\u73B0\u540E\u53F0\u914D\u7F6E</p><h2 id="_2-\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a> 2. \u6570\u636E\u5E93\u8BBE\u8BA1</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> sys_config\n<span class="token punctuation">(</span>\n    config_id    <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">auto_increment</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u53C2\u6570\u4E3B\u952E&#39;</span>\n        <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n    config_name  <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>  <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u53C2\u6570\u540D\u79F0&#39;</span><span class="token punctuation">,</span>\n    config_key   <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>  <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u53C2\u6570\u952E\u540D&#39;</span><span class="token punctuation">,</span>\n    config_value <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>  <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u53C2\u6570\u952E\u503C&#39;</span><span class="token punctuation">,</span>\n    config_type  <span class="token keyword">char</span>         <span class="token keyword">default</span> <span class="token string">&#39;N&#39;</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u7CFB\u7EDF\u5185\u7F6E\uFF08Y\u662F N\u5426\uFF09&#39;</span><span class="token punctuation">,</span>\n    create_by    <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>  <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>  <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u521B\u5EFA\u8005&#39;</span><span class="token punctuation">,</span>\n    create_time  <span class="token keyword">datetime</span>                 <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u521B\u5EFA\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>\n    update_by    <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>  <span class="token keyword">default</span> <span class="token string">&#39;&#39;</span>  <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u66F4\u65B0\u8005&#39;</span><span class="token punctuation">,</span>\n    update_time  <span class="token keyword">datetime</span>                 <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u66F4\u65B0\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>\n    remark       <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>             <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;\u5907\u6CE8&#39;</span>\n<span class="token punctuation">)</span>\n    <span class="token keyword">comment</span> <span class="token string">&#39;\u53C2\u6570\u914D\u7F6E\u8868&#39;</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A\u7CFB\u7EDF\u5185\u7F6E\u53C2\u6570\u662F\u4E0D\u80FD\u5220\u9664\u7684</p><h2 id="_3-\u4EE3\u7801\u5B9E\u73B0\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u5B9E\u73B0\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 3. \u4EE3\u7801\u5B9E\u73B0\u6CE8\u610F\u4E8B\u9879</h2><h3 id="_3-1-\u9879\u76EE\u542F\u52A8\u65F6\u5C31\u9700\u8981\u52A0\u8F7D\u8FDB\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-1-\u9879\u76EE\u542F\u52A8\u65F6\u5C31\u9700\u8981\u52A0\u8F7D\u8FDB\u7F13\u5B58" aria-hidden="true">#</a> 3.1 \u9879\u76EE\u542F\u52A8\u65F6\u5C31\u9700\u8981\u52A0\u8F7D\u8FDB\u7F13\u5B58</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SysConfigServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">SysConfigService</span>\n<span class="token punctuation">{</span>  <span class="token doc-comment comment">/**\n     * \u9879\u76EE\u542F\u52A8\u65F6\uFF0C\u521D\u59CB\u5316\u53C2\u6570\u5230\u7F13\u5B58\n     */</span>\n    <span class="token annotation punctuation">@PostConstruct</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token function">loadingConfigCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  \n  	<span class="token doc-comment comment">/**\n     * \u52A0\u8F7D\u53C2\u6570\u7F13\u5B58\u6570\u636E\n     */</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">loadingConfigCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysConfig</span><span class="token punctuation">&gt;</span></span> configsList <span class="token operator">=</span> configMapper<span class="token punctuation">.</span><span class="token function">selectConfigList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SysConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SysConfig</span> config <span class="token operator">:</span> configsList<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            redisCache<span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">getConfigKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span><span class="token function">getConfigValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u67E5\u627E\u53C2\u6570\u65F6-\u5148\u67E5\u7F13\u5B58-\u518D\u67E5\u6570\u636E\u5E93-\u6570\u636E\u5E93\u67E5\u5230\u8981\u63D2\u5165\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-2-\u67E5\u627E\u53C2\u6570\u65F6-\u5148\u67E5\u7F13\u5B58-\u518D\u67E5\u6570\u636E\u5E93-\u6570\u636E\u5E93\u67E5\u5230\u8981\u63D2\u5165\u7F13\u5B58" aria-hidden="true">#</a> 3.2 \u67E5\u627E\u53C2\u6570\u65F6\uFF0C\u5148\u67E5\u7F13\u5B58\uFF0C\u518D\u67E5\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u67E5\u5230\u8981\u63D2\u5165\u7F13\u5B58</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\n     * \u6839\u636E\u952E\u540D\u67E5\u8BE2\u53C2\u6570\u914D\u7F6E\u4FE1\u606F\n     * \n     * <span class="token keyword">@param</span> <span class="token parameter">configKey</span> \u53C2\u6570key\n     * <span class="token keyword">@return</span> \u53C2\u6570\u952E\u503C\n     */</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">selectConfigByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> configKey<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> configValue <span class="token operator">=</span> <span class="token class-name">Convert</span><span class="token punctuation">.</span><span class="token function">toStr</span><span class="token punctuation">(</span>redisCache<span class="token punctuation">.</span><span class="token function">getCacheObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>configKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>configValue<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> configValue<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">SysConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SysConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        config<span class="token punctuation">.</span><span class="token function">setConfigKey</span><span class="token punctuation">(</span>configKey<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">SysConfig</span> retConfig <span class="token operator">=</span> configMapper<span class="token punctuation">.</span><span class="token function">selectConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotNull</span><span class="token punctuation">(</span>retConfig<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            redisCache<span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>configKey<span class="token punctuation">)</span><span class="token punctuation">,</span> retConfig<span class="token punctuation">.</span><span class="token function">getConfigValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> retConfig<span class="token punctuation">.</span><span class="token function">getConfigValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span>EMPTY<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u63D2\u5165\u548C\u66F4\u65B0\u6210\u529F\u65F6\u9700\u8981\u66F4\u65B0\u5355\u9879\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-3-\u63D2\u5165\u548C\u66F4\u65B0\u6210\u529F\u65F6\u9700\u8981\u66F4\u65B0\u5355\u9879\u7F13\u5B58" aria-hidden="true">#</a> 3.3 \u63D2\u5165\u548C\u66F4\u65B0\u6210\u529F\u65F6\u9700\u8981\u66F4\u65B0\u5355\u9879\u7F13\u5B58</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\n    <span class="token doc-comment comment">/**\n     * \u65B0\u589E\u53C2\u6570\u914D\u7F6E\n     * \n     * <span class="token keyword">@param</span> <span class="token parameter">config</span> \u53C2\u6570\u914D\u7F6E\u4FE1\u606F\n     * <span class="token keyword">@return</span> \u7ED3\u679C\n     */</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">insertConfig</span><span class="token punctuation">(</span><span class="token class-name">SysConfig</span> config<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> row <span class="token operator">=</span> configMapper<span class="token punctuation">.</span><span class="token function">insertConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            redisCache<span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">getConfigKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span><span class="token function">getConfigValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> row<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * \u4FEE\u6539\u53C2\u6570\u914D\u7F6E\n     * \n     * <span class="token keyword">@param</span> <span class="token parameter">config</span> \u53C2\u6570\u914D\u7F6E\u4FE1\u606F\n     * <span class="token keyword">@return</span> \u7ED3\u679C\n     */</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">updateConfig</span><span class="token punctuation">(</span><span class="token class-name">SysConfig</span> config<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> row <span class="token operator">=</span> configMapper<span class="token punctuation">.</span><span class="token function">updateConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            redisCache<span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">getConfigKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span><span class="token function">getConfigValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> row<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u5220\u9664\u65F6\u8BB0\u5F97\u6E05\u9664\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5220\u9664\u65F6\u8BB0\u5F97\u6E05\u9664\u7F13\u5B58" aria-hidden="true">#</a> 3.4 \u5220\u9664\u65F6\u8BB0\u5F97\u6E05\u9664\u7F13\u5B58</h3><p>\u5982\u679C\u662F\u5185\u7F6E\u53C2\u6570\uFF0C\u5219\u4E0D\u80FD\u6E05\u9664</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**\n     * \u6279\u91CF\u5220\u9664\u53C2\u6570\u4FE1\u606F\n     * \n     * <span class="token keyword">@param</span> <span class="token parameter">configIds</span> \u9700\u8981\u5220\u9664\u7684\u53C2\u6570ID\n     * <span class="token keyword">@return</span> \u7ED3\u679C\n     */</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteConfigByIds</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> configIds<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Long</span> configId <span class="token operator">:</span> configIds<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token class-name">SysConfig</span> config <span class="token operator">=</span> <span class="token function">selectConfigById</span><span class="token punctuation">(</span>configId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">UserConstants</span><span class="token punctuation">.</span>YES<span class="token punctuation">,</span> config<span class="token punctuation">.</span><span class="token function">getConfigType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;\u5185\u7F6E\u53C2\u6570\u3010%1$s\u3011\u4E0D\u80FD\u5220\u9664 &quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span><span class="token function">getConfigKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            configMapper<span class="token punctuation">.</span><span class="token function">deleteConfigById</span><span class="token punctuation">(</span>configId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            redisCache<span class="token punctuation">.</span><span class="token function">deleteObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">getConfigKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-\u9700\u8981\u6709\u5237\u65B0\u91CD\u7F6E\u7F13\u5B58\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_3-5-\u9700\u8981\u6709\u5237\u65B0\u91CD\u7F6E\u7F13\u5B58\u529F\u80FD" aria-hidden="true">#</a> 3.5 \u9700\u8981\u6709\u5237\u65B0\u91CD\u7F6E\u7F13\u5B58\u529F\u80FD</h3><p>\u65B9\u4FBF\u7528\u6237\u5728\u524D\u7AEF\u64CD\u4F5C\uFF0C\u5FEB\u901F\u751F\u6548</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token doc-comment comment">/**\n     * \u91CD\u7F6E\u53C2\u6570\u7F13\u5B58\u6570\u636E\n     */</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resetConfigCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token function">clearConfigCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">loadingConfigCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    \n    <span class="token doc-comment comment">/**\n     * \u6E05\u7A7A\u53C2\u6570\u7F13\u5B58\u6570\u636E\n     */</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">clearConfigCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> keys <span class="token operator">=</span> redisCache<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span>SYS_CONFIG_KEY <span class="token operator">+</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        redisCache<span class="token punctuation">.</span><span class="token function">deleteObject</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token doc-comment comment">/**\n     * \u52A0\u8F7D\u53C2\u6570\u7F13\u5B58\u6570\u636E\n     */</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">loadingConfigCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysConfig</span><span class="token punctuation">&gt;</span></span> configsList <span class="token operator">=</span> configMapper<span class="token punctuation">.</span><span class="token function">selectConfigList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SysConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SysConfig</span> config <span class="token operator">:</span> configsList<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            redisCache<span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">getConfigKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span><span class="token function">getConfigValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6700\u7EC8\u5B9E\u73B0\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_4-\u6700\u7EC8\u5B9E\u73B0\u6548\u679C" aria-hidden="true">#</a> 4. \u6700\u7EC8\u5B9E\u73B0\u6548\u679C</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211009222956436.png" alt="image-20211009222956436"></p>', 21);
const _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
var C2__________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C2-\u7CFB\u7EDF\u53C2\u6570\u914D\u7F6E\u529F\u80FD.html.vue"]]);
export { C2__________html as default };
