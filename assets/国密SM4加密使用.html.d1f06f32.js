import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.e1ff6185.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u56FD\u5BC6sm4\u52A0\u5BC6\u4F7F\u7528-java-\u548C-vue" tabindex="-1"><a class="header-anchor" href="#\u56FD\u5BC6sm4\u52A0\u5BC6\u4F7F\u7528-java-\u548C-vue" aria-hidden="true">#</a> \u56FD\u5BC6SM4\u52A0\u5BC6\u4F7F\u7528\uFF08java \u548C vue\uFF09</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u516C\u53F8\u4E1A\u52A1\u9700\u6C42\u56FD\u4EA7\u52A0\u5BC6\uFF0C\u8981\u6C42\u4F7F\u7528\u56FD\u5BC6SM4</p><p>\u7279\u522B\u6CE8\u610F\uFF1A</p><ul><li><p>\u52A0\u5BC6\u4E32\u7684\u7F16\u7801GBK \u548C utf8 \u662F\u6709\u533A\u522B\u7684</p></li><li><p>\u524D\u540E\u7AEF\u7684\u53C2\u6570\u8981\u4E25\u683C\u4FDD\u6301\u7EDF\u4E00</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210928152557678.png" alt="image-20210928152557678"></p></li></ul><h2 id="_2-java\u540E\u7AEF\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_2-java\u540E\u7AEF\u96C6\u6210" aria-hidden="true">#</a> 2. java\u540E\u7AEF\u96C6\u6210</h2><h3 id="_2-1-\u6DFB\u52A0pom\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6DFB\u52A0pom\u4F9D\u8D56" aria-hidden="true">#</a> 2.1 \u6DFB\u52A0pom\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.3.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.bouncycastle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bcprov-jdk15to18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.66<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u7F16\u5199\u6D4B\u8BD5\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7F16\u5199\u6D4B\u8BD5\u7C7B" aria-hidden="true">#</a> 2.2 \u7F16\u5199\u6D4B\u8BD5\u7C7B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>codec<span class="token punctuation">.</span></span><span class="token class-name">Base64</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CharsetUtil</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>symmetric<span class="token punctuation">.</span></span><span class="token class-name">SM4</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>symmetric<span class="token punctuation">.</span></span><span class="token class-name">SymmetricCrypto</span></span><span class="token punctuation">;</span>\n \n<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">Mode</span><span class="token punctuation">.</span><span class="token static">CBC</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">Padding</span><span class="token punctuation">.</span><span class="token static">ZeroPadding</span></span><span class="token punctuation">;</span>\n \n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sm4EncryptUtil</span> <span class="token punctuation">{</span>\n \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token class-name">String</span> plainTxt<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">String</span> cipherTxt <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">SymmetricCrypto</span> sm4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SM4</span><span class="token punctuation">(</span>CBC<span class="token punctuation">,</span> <span class="token class-name">ZeroPadding</span><span class="token punctuation">,</span> <span class="token string">&quot;abc1111111111333&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span>CHARSET_UTF_8<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;iviviviviviviviv&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span>CHARSET_UTF_8<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> encrypHex <span class="token operator">=</span> sm4<span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>plainTxt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        cipherTxt <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>encrypHex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;{SM4}&quot;</span> <span class="token operator">+</span> cipherTxt<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token class-name">String</span> cipherTxt<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cipherTxt<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;{SM4}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> cipherTxt<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        cipherTxt <span class="token operator">=</span> cipherTxt<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> plainTxt <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">SymmetricCrypto</span> sm4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SM4</span><span class="token punctuation">(</span>CBC<span class="token punctuation">,</span> <span class="token class-name">ZeroPadding</span><span class="token punctuation">,</span> <span class="token string">&quot;abc1111111111333&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span>CHARSET_UTF_8<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;iviviviviviviviv&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span>CHARSET_UTF_8<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cipherHex <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>cipherTxt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        plainTxt <span class="token operator">=</span> sm4<span class="token punctuation">.</span><span class="token function">decryptStr</span><span class="token punctuation">(</span>cipherHex<span class="token punctuation">,</span> <span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span>CHARSET_UTF_8<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> plainTxt<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> argc<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">String</span> originTxt <span class="token operator">=</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u539F\u6587: &quot;</span> <span class="token operator">+</span> originTxt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> cipherTxt <span class="token operator">=</span> <span class="token function">encrypt</span><span class="token punctuation">(</span>originTxt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BC6\u6587: &quot;</span> <span class="token operator">+</span> cipherTxt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> plainTxt <span class="token operator">=</span> <span class="token function">decrypt</span><span class="token punctuation">(</span>cipherTxt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u89E3\u5BC6\u7ED3\u679C: &quot;</span> <span class="token operator">+</span> plainTxt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-vue\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-vue\u5B9E\u73B0" aria-hidden="true">#</a> 3. vue\u5B9E\u73B0</h2><h3 id="_3-1-\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> 3.1 \u6DFB\u52A0\u4F9D\u8D56</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install gm-crypt \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 3.2 \u4EE3\u7801\u5B9E\u73B0</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">Account</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u7528\u6237\u8D26\u53F7</span>\n      <span class="token literal-property property">Pwd</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u7528\u6237\u5BC6\u7801</span>\n      <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u767B\u5F55</span>\n    <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// \u5F15\u7528sm4\u5305\u8FDB\u884C\u52A0\u5BC6</span>\n      <span class="token keyword">const</span> <span class="token constant">SM4</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;gm-crypt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sm4<span class="token punctuation">;</span>\n      <span class="token keyword">let</span> sm4Config <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token comment">//\u914D\u7F6Esm4\u53C2\u6570</span>\n        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;HENG1AN2WEN3YIN4&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u8FD9\u91CC\u8FD9\u4E2Akey\u503C\u662F\u8DDF\u540E\u7AEF\u8981\u7684</span>\n        <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;ecb&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u52A0\u5BC6\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF0Cecb\u548Ccbc\u4E24\u79CD\uFF0C\u4E5F\u662F\u770B\u540E\u7AEF\u5982\u4F55\u5B9A\u4E49\u7684\uFF0C\u4E0D\u8FC7\u8981\u662Fcbc\u7684\u8BDD\u4E0B\u9762\u8FD8\u8981\u52A0\u4E00\u4E2Aiv\u7684\u53C2\u6570\uFF0Cecb\u4E0D\u7528</span>\n        <span class="token literal-property property">cipherType</span><span class="token operator">:</span> <span class="token string">&quot;base64&quot;</span> <span class="token comment">// </span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">let</span> sm4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SM4</span><span class="token punctuation">(</span>sm4Config<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8FD9\u91CCnew\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06\u4E0A\u9762\u7684sm4Config\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u8FDB\u53BB\u3002\u7136\u540E\u5C31\u53EF\u4EE5\u5F00\u5FC3\u7684\u52A0\u5BC6\u4E86</span>\n      <span class="token keyword">let</span> Account <span class="token operator">=</span> sm4<span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>Account<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8D26\u53F7\u52A0\u5BC6</span>\n      <span class="token keyword">let</span> Pwd <span class="token operator">=</span> sm4<span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>Pwd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5BC6\u7801\u52A0\u5BC6</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5728\u7EBF\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-\u5728\u7EBF\u6D4B\u8BD5" aria-hidden="true">#</a> 4. \u5728\u7EBF\u6D4B\u8BD5</h2>', 16);
const _hoisted_17 = {
  href: "https://the-x.cn/cryptography/Sm4.aspx",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u5728\u7EBF\u6D4B\u8BD5\u7F51\u7AD9");
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210928152433988.png",
    alt: "image-20210928152433988"
  })
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53C2\u8003\u6587\u7AE0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u6587\u7AE0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u6587\u7AE0")
], -1);
const _hoisted_21 = {
  href: "https://blog.csdn.net/ljzgood/article/details/117966293",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createTextVNode("SM4\u52A0\u89E3\u5BC6\u7B97\u6CD5\u5DE5\u5177\u7C7BJAVA\u5B9E\u73B0\uFF08\u57FA\u4E8Ehutool-all\u4EE5\u53CAbcprov-jdk15to18\u5B9E\u73B0\uFF09 \u652F\u6301MODE\u4EE5\u53CA\u81EA\u5B9A\u4E49Key\u4EE5\u53CAiv\u7684\u8BBE\u5B9A");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_17, [
        _hoisted_18,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_19,
    _hoisted_20,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_21, [
        _hoisted_22,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var __SM4_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u56FD\u5BC6SM4\u52A0\u5BC6\u4F7F\u7528.html.vue"]]);
export { __SM4_____html as default };
