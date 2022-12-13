import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as e,d as t,e as s,r as c}from"./app.d4563a68.js";const l={},r=t(`<h1 id="vue\u5B9E\u6218-vue\u7EC4\u4EF6\u6253\u5305\u6210\u5E93" tabindex="-1"><a class="header-anchor" href="#vue\u5B9E\u6218-vue\u7EC4\u4EF6\u6253\u5305\u6210\u5E93" aria-hidden="true">#</a> Vue\u5B9E\u6218 - Vue\u7EC4\u4EF6\u6253\u5305\u6210\u5E93</h1><h2 id="_1-\u5F00\u53D1\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5F00\u53D1\u7EC4\u4EF6" aria-hidden="true">#</a> 1. \u5F00\u53D1\u7EC4\u4EF6</h2><p>\u5F00\u53D1\u7EC4\u4EF6\u7684\u8FC7\u7A0B\u5E76\u65E0\u7279\u6B8A\u4E4B\u5904\uFF0C\u8DDF\u5E73\u65F6\u5728Vue\u9879\u76EE\u91CC\u5B9A\u4E49component\u662F\u4E00\u6837\u7684\u3002\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5E73\u65F6\u5728Vue\u9879\u76EE\u91CC\uFF0C\u7EC4\u4EF6\u7684name\u53EF\u4EE5\u4E0D\u5199\uFF0C\u4F46\u5982\u679C\u8981\u6253\u5305\u6210\u5E93\uFF0C\u7EC4\u4EF6\u7684name\u5FC5\u987B\u5199\u3002\u4E3A\u4E86\u63CF\u8FF0\u65B9\u4FBF\uFF0C\u6211\u4EEC\u628A\u5C06\u8981\u6253\u5305\u7684\u7EC4\u4EF6\u5B9A\u4E49\u4E3AMyCom1\u3001MyCom2\u3002\u5176\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MyCom1&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5B9A\u4E49install\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9A\u4E49install\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u5B9A\u4E49install\u65B9\u6CD5</h2><blockquote><p>Vue\u5F15\u7528\u7EC4\u4EF6\u4F7F\u7528Vue.use\u65B9\u6CD5\uFF0C\u6B64\u65B9\u6CD5\u4F1A\u8C03\u7528\u7EC4\u4EF6\u7684install\u65B9\u6CD5\uFF0C\u6240\u4EE5\u9700\u8981\u5B9A\u4E49\u7EC4\u4EF6\u7684install\u65B9\u6CD5\u3002\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u4F8B\u5982\u547D\u540D\u4E3Alib\uFF0C\u7136\u540E\u5728\u6B64\u6587\u4EF6\u5939\u4E2D\u6DFB\u52A0\u5404\u4E2A\u7EC4\u4EF6\u7684install\u65B9\u6CD5\u5B9A\u4E49\u3002</p></blockquote><p>\u4F8B\u5982\uFF0C\u65B0\u5EFAlib/MyCom1Install.js\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> MyCom1 <span class="token keyword">from</span> <span class="token string">&quot;../src/MyCom1.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>MyCom1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> MyCom1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> install<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u5B9A\u4E49\u6253\u5305\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9A\u4E49\u6253\u5305\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> 3. \u5B9A\u4E49\u6253\u5305\u5165\u53E3\u6587\u4EF6</h2><p>\u5F53\u6709\u591A\u4E2A\u7EC4\u4EF6\u65F6\uFF0C\u9700\u8981\u6709\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u5F15\u7528\u8FD9\u4E9B\u7EC4\u4EF6\u3002\u4F8B\u5982\uFF0C\u540C\u6837\u5728lib\u6587\u4EF6\u5939\u4E0B\uFF0C\u6DFB\u52A0\u4E00\u4E2Alib.js\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> MyCom1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./MyCom1Install&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> MyCom2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./MyCom2Install&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-package\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_4-package\u914D\u7F6E" aria-hidden="true">#</a> 4. package\u914D\u7F6E</h2><blockquote><p>\u8FD9\u4E00\u6B65\u76F4\u63A5\u547D\u4EE4\u884C\u6267\u884C\u4E00\u76F4\u4E0D\u6210\u529F\uFF0C\u4F46\u662Fpackage \u4E2D\u7684\u6CA1\u6709\u95EE\u9898</p></blockquote><p>package\u914D\u7F6E\u9700\u8981\u505A\u4E24\u4EF6\u4E8B\u4EF6\uFF0C\u4F46\u9996\u5148\uFF0C\u6211\u4EEC\u8981\u786E\u5B9A\u8FD9\u4E2A\u5305\u7684\u540D\u79F0\uFF0C\u4F8B\u5982\u4E3Amycom\u3002\u751F\u6210lib\u7684\u811A\u672C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue-cli-service build <span class="token parameter variable">--target</span> lib <span class="token parameter variable">--name</span> mycom lib/lib.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B8C\u6210\u4E4B\u540E\uFF0C\u5728\u5DE5\u7A0B\u7684dist\u6587\u4EF6\u5939\u4E0B\uFF0C\u5C06\u751F\u6210\u4EE5\u4E0B\u6587\u4EF6\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014132327142.png" alt="image-20221014132327142" loading="lazy"></p><p>\u8FD9\u4E9B\u6587\u4EF6\u6709\u4E0D\u540C\u7684\u5E94\u7528\u573A\u5408\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230\u7684\uFF0C\u5176\u5B9E\u5C31\u53EA\u6709.umd.min.js\u548C.css\u4E24\u4E2A\u6587\u4EF6\u3002\u7531\u4E8E\u6709\u591A\u4E2A\u6587\u4EF6\uFF0C\u9700\u8981\u5728package\u4E2D\u6307\u660E\u6211\u4EEC\u8981\u7528\u7684\u662F\u54EA\u4E2A\uFF0C\u6240\u4EE5\u9700\u8981\u5728package\u4E2D\u52A0\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/mycom.umd.min.js&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>package\u5B8C\u6574\u4FEE\u6539\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mycom&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5982\u679C\u8981\u4E0A\u4F20npm\uFF0C\u5C31\u4E3Afalse</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/mycom.umd.min.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;build:lib&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --target lib --name mycom lib/lib.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>\u5176\u4ED6\u65E0\u5173\u5185\u5BB9
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#_5-\u6253\u5305" aria-hidden="true">#</a> 5. \u6253\u5305</h2><p>\u6253\u5305\u7684\u8BDD\u5C31\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\u4E86\uFF0C</p><p>yarn build:lib \u6216\u8005</p><p>npm run build:lib</p><p>\u7ED3\u675F\u4E4B\u540E\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u5230npm\uFF0C\u4E5F\u53EF\u4EE5\u590D\u5236\u76F8\u5173\u5185\u5BB9\u5230\u9700\u8981\u5F15\u7528\u7EC4\u4EF6\u9879\u76EE\u7684node_modules\u6587\u4EF6\u5939\u4E2D\u3002\u5982\u679C\u8981\u590D\u5236\uFF0C\u9700\u8981\u590D\u5236\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mycom
  <span class="token keyword">package</span><span class="token punctuation">.</span>json
  dist
    mycom<span class="token punctuation">.</span>umd<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js
    mycom<span class="token punctuation">.</span>css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u4F7F\u7528\u7EC4\u4EF6\u5E93" tabindex="-1"><a class="header-anchor" href="#_6-\u4F7F\u7528\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a> 6. \u4F7F\u7528\u7EC4\u4EF6\u5E93</h2><p>\u5728main.js\u4E2D\uFF0C\u52A0\u5165\u5BF9\u7EC4\u4EF6\u7684\u5F15\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MyCom1<span class="token punctuation">,</span>MyCom2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mycom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;mycom/dist/mycom.css&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyCom1<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyCom2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728Vue\u9875\u9762\u4E2D\uFF0C\u50CF\u5176\u4ED6\u7EC4\u4EF6\u4E00\u6837\u5F15\u7528\u5373\u53EF\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyCom1</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyCom2</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u53D1\u5E03npm-\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#_7-\u53D1\u5E03npm-\u8865\u5145" aria-hidden="true">#</a> 7.\u53D1\u5E03npm\uFF08\u8865\u5145\uFF09</h2><p>1\u3001\u5148\u5230NPM\u5B98\u7F51\u6CE8\u518C\u8D26\u53F7\uFF0C\u5982\u679C\u5DF2\u6709\u8D26\u53F7\u5219\u8DF3\u8FC7\u6B64\u6B65\u9AA4</p><p>2\u3001\u5728\u7EC4\u4EF6\u5E93\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u6267\u884C</p><div class="language-coffeescript ext-coffeescript line-numbers-mode"><pre class="language-coffeescript"><code>npm login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u767B\u9646\u8D26\u53F7\uFF0C\u8F93\u5165\u4F60\u7684\u8D26\u53F7\u548C\u5BC6\u7801\uFF0C\u5E76\u9A8C\u8BC1\u90AE\u7BB1\u5730\u5740\uFF0C\u767B\u9646\u6210\u529F\u540E\u5219\u53EF\u4EE5\u53D1\u5E03\u5230NPM\u7F51\u7AD9\u4E86</p><p>3\u3001\u66F4\u65B0\u7248\u672C\u53F7</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm version patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u662F\u628A\u7248\u672C\u8FED\u4EE3\u4E00\u7EA7\uFF0C\u6BCF\u6B21\u66F4\u65B0\u65F6\u90FD\u9700\u8981\u8F93\u5165\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u6216\u8005\u76F4\u63A5\u5728package.json\u4E2D\u4FEE\u6539\u7248\u672C\u53F7\uFF0C\u53EA\u8981\u4E0Enpm\u4E0A\u7684\u7248\u672C\u4E0D\u540C\u5C31\u884C</p><p>4\u3001\u53D1\u5E03\u5230npm\u5B98\u7F51</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm publish --access public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-\u5982\u4F55\u540C\u6B65\u6DD8\u5B9D\u955C\u50CF\u4E2D-npm-\u5305-\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#_8-\u5982\u4F55\u540C\u6B65\u6DD8\u5B9D\u955C\u50CF\u4E2D-npm-\u5305-\u8865\u5145" aria-hidden="true">#</a> 8. \u5982\u4F55\u540C\u6B65\u6DD8\u5B9D\u955C\u50CF\u4E2D npm \u5305\uFF08\u8865\u5145\uFF09</h2><h3 id="_8-1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_8-1-\u80CC\u666F" aria-hidden="true">#</a> 8.1 \u80CC\u666F</h3><p>\u6211\u4EEC\u4F7F\u7528npm\u5B89\u88C5\u6A21\u5757\u7684\u65F6\u5019\u4E00\u822C\u90FD\u4F7F\u7528\u6DD8\u5B9D\u955C\u50CF\u3002<strong>\u6DD8\u5B9D\u955C\u50CF\u540C\u6B65\u9891\u7387\u76EE\u524D\u4E3A 10\u5206\u949F \u4E00\u6B21</strong>\uFF0C\u4EE5\u4FDD\u8BC1\u5C3D\u91CF\u4E0E\u5B98\u65B9\u670D\u52A1\u540C\u6B65\u3002</p><p>\u6211\u4EEC\u53D1\u5E03\u6A21\u5757\u81F3npm\u540E\uFF0C\u6709\u65F6\u5019\u77ED\u65F6\u95F4\u5185\u65E0\u6CD5\u4ECE\u6DD8\u5B9D\u955C\u50CF\u5B89\u88C5\u6700\u65B0\u53D1\u5E03\u7684\u7248\u672C\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u4E3B\u52A8\u540C\u6B65\u6A21\u5757\u81F3\u6DD8\u5B9D\u955C\u50CF\u3002</p><h3 id="_8-2-\u4E3B\u52A8\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#_8-2-\u4E3B\u52A8\u540C\u6B65" aria-hidden="true">#</a> 8.2 \u4E3B\u52A8\u540C\u6B65</h3><blockquote><p>\u627E\u5230\u9700\u8981\u540C\u6B65\u5305\u7684\u540D\u5B57 \u8FD9\u8FB9\u5047\u8BBE \u5305\u540D\u5B57\u4E3A vite</p></blockquote><h4 id="_8-2-1-\u65B9\u5F0F\u4E00-sync-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_8-2-1-\u65B9\u5F0F\u4E00-sync-\u547D\u4EE4" aria-hidden="true">#</a> 8.2.1 \u65B9\u5F0F\u4E00\uFF1A<code>sync</code> \u547D\u4EE4</h4><p>\u76F4\u63A5\u901A\u8FC7 <code>sync</code> \u547D\u4EE4\u9A6C\u4E0A\u540C\u6B65\u4E00\u4E2A\u6A21\u5757, \u53EA\u6709 <code>cnpm</code> \u547D\u4EE4\u884C\u624D\u6709\u6B64\u529F\u80FD:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>cnpm <span class="token keyword">sync</span> vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-2-1-\u65B9\u5F0F\u4E8C-web-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_8-2-1-\u65B9\u5F0F\u4E8C-web-\u65B9\u5F0F" aria-hidden="true">#</a> 8.2.1 \u65B9\u5F0F\u4E8C\uFF1Aweb \u65B9\u5F0F</h4><p>\u8FD8\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 web \u65B9\u5F0F\u6765\u540C\u6B65:</p>`,53),u={href:"https://npmmirror.com/sync/%7B%E5%8C%85%E7%9A%84%E5%90%8D%E5%AD%97%7D",target:"_blank",rel:"noopener noreferrer"},d=s("https://npmmirror.com/sync/{\u5305\u7684\u540D\u5B57}"),k=s(" \u5982\u4E0A\u5047\u8BBE\u5305\u540D\u5B57\u4E3A vite"),m=t(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">open</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>sync<span class="token operator">/</span>vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),v=s("\u5219\u8BBF\u95EE "),g={href:"https://npmmirror.com/sync/vite",target:"_blank",rel:"noopener noreferrer"},b=s("https://npmmirror.com/sync/vite"),h=s(" \u5C31\u53EF\u4EE5\u540C\u6B65\u4E86"),y=n("p",null,[n("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221108172214025.png",alt:"image-20221108172214025",loading:"lazy"})],-1),_=n("h2",{id:"_9-\u5305\u4E0A\u4F20\u516C\u53F8\u4ED3\u5E93",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9-\u5305\u4E0A\u4F20\u516C\u53F8\u4ED3\u5E93","aria-hidden":"true"},"#"),s(" 9. \u5305\u4E0A\u4F20\u516C\u53F8\u4ED3\u5E93")],-1),f={href:"https://juejin.cn/post/6986917713482350600",target:"_blank",rel:"noopener noreferrer"},q=s("\u76F8\u5173\u6587\u7AE0"),x=t(`<ol><li><p>\u914D\u7F6E\u516C\u53F8\u4ED3\u5E93\u5730\u5740</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token builtin class-name">set</span> registry http://192.168.x.x:8082/repository/npm_all/   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u8BA4\u8BC1\u5730\u5740</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> login <span class="token parameter variable">-registry</span> http://192.168.x.x:8082/repository/npm_fd 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5728package \u4E0B\u914D\u7F6EpublishConfig</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token string-property property">&quot;publishConfig&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;registry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://192.168.x.x:8082/repository/npm_fd&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53D1\u5E03</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,2),j={href:"https://blog.csdn.net/lweiyue/article/details/120064122",target:"_blank",rel:"noopener noreferrer"},w=s("Vue\u7EC4\u4EF6\u6253\u5305\u6210\u5E93\u548C\u4F7F\u7528\u5E93\u7684\u65B9\u6CD5"),C={href:"https://juejin.cn/post/6986917713482350600",target:"_blank",rel:"noopener noreferrer"},M=s("npm\u79C1\u670D\u914D\u7F6E\u4ECB\u7ECD");function V(z,E){const a=c("ExternalLinkIcon");return o(),i("div",null,[r,n("blockquote",null,[n("p",null,[n("a",u,[d,e(a)]),k])]),m,n("p",null,[v,n("a",g,[b,e(a)]),h]),y,_,n("p",null,[n("a",f,[q,e(a)])]),x,n("p",null,[n("a",j,[w,e(a)])]),n("p",null,[n("a",C,[M,e(a)])])])}const B=p(l,[["render",V],["__file","vue-x-lib-package.html.vue"]]);export{B as default};
