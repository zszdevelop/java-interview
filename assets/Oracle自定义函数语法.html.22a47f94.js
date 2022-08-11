import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.e1ff6185.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="oracle-\u81EA\u5B9A\u4E49\u51FD\u6570\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#oracle-\u81EA\u5B9A\u4E49\u51FD\u6570\u8BED\u6CD5" aria-hidden="true">#</a> Oracle \u81EA\u5B9A\u4E49\u51FD\u6570\u8BED\u6CD5</h1><h2 id="_1-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u8BED\u6CD5" aria-hidden="true">#</a> 1. \u8BED\u6CD5</h2><p><strong>Oracle\u81EA\u5B9A\u4E49\u51FD\u6570\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">function</span> \u51FD\u6570\u540D<span class="token punctuation">(</span>\u53C2\u6570<span class="token number">1</span> \u6A21\u5F0F \u53C2\u6570\u7C7B\u578B<span class="token punctuation">)</span>\n<span class="token keyword">return</span> \u8FD4\u56DE\u503C\u7C7B\u578B\n<span class="token keyword">as</span>\n\u53D8\u91CF<span class="token number">1</span> \u53D8\u91CF\u7C7B\u578B<span class="token punctuation">;</span>\n\u53D8\u91CF<span class="token number">2</span> \u53D8\u91CF\u7C7B\u578B<span class="token punctuation">;</span>\n<span class="token keyword">begin</span>\n    \u51FD\u6570\u4F53<span class="token punctuation">;</span>\n<span class="token keyword">end</span> \u51FD\u6570\u540D<span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570\u7684\u6A21\u5F0F\u67093\u79CD:(\u5982\u679C\u6CA1\u6709\u6CE8\u660E, \u53C2\u6570\u9ED8\u8BA4\u7684\u7C7B\u578B\u4E3A in.)</p><ul><li><p>in: \u4E3A\u53EA\u8BFB\u6A21\u5F0F, \u5728\u51FD\u6570\u4E2D, \u53C2\u6570\u7684\u503C\u53EA\u80FD\u88AB\u5F15\u7528, \u4E0D\u80FD\u88AB\u6539\u53D8;</p></li><li><p>out: \u4E3A\u53EA\u5199\u6A21\u5F0F, \u53EA\u80FD\u88AB\u8D4B\u503C, \u4E0D\u80FD\u88AB\u5F15\u7528;</p></li><li><p>in out: \u53EF\u8BFB\u53EF\u5199.</p></li></ul><p>\u63D0\u9192:</p><ol><li>\u5728Oracle\u81EA\u5B9A\u4E49\u51FD\u6570\u4E2D, else if \u7684\u6B63\u786E\u5199\u6CD5\u662F elsif \u800C\u4E0D\u662F else if</li><li>\u4F7F\u7528 if \u9700\u8981\u52A0 then &quot;if \u6761\u4EF6 then \u64CD\u4F5C&quot;</li></ol><h2 id="_2-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u793A\u4F8B" aria-hidden="true">#</a> 2. \u793A\u4F8B</h2><h3 id="_2-1-\u4EE3\u66FFmysql\u7684find-in-set" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4EE3\u66FFmysql\u7684find-in-set" aria-hidden="true">#</a> 2.1 \u4EE3\u66FFMYSQL\u7684FIND_IN_SET</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- ----------------------------</span>\n<span class="token comment">-- \u51FD\u6570 \uFF0C\u4EE3\u66FFMYSQL\u7684FIND_IN_SET</span>\n<span class="token comment">-- \u4F8B\u5982\uFF1A SELECT * FROM SYS_DEPT WHERE FIND_IN_SET (101,ANCESTORS) &lt;&gt; 0</span>\n<span class="token comment">-- MYSQL\u53EF\u63A5\u53D70\u6216\u5176\u5B83NUMBER\u505A\u4E3AWHERE \u6761\u4EF6\uFF0CORACLE\u53EA\u63A5\u53D7\u8868\u8FBE\u5F0F\u505A\u4E3AWHERE \u6761\u4EF6</span>\n<span class="token comment">-- ----------------------------</span>\n<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">FUNCTION</span> FIND_IN_SET<span class="token punctuation">(</span>ARG1 <span class="token operator">IN</span> VARCHAR2<span class="token punctuation">,</span>ARG2 <span class="token operator">IN</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">)</span>\n<span class="token keyword">RETURN</span> NUMBER <span class="token operator">IS</span> RESULT NUMBER<span class="token punctuation">;</span>\n<span class="token keyword">BEGIN</span>\n<span class="token keyword">SELECT</span> INSTR<span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token operator">||</span>ARG2<span class="token operator">||</span><span class="token string">&#39;,&#39;</span> <span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token operator">||</span>ARG1<span class="token operator">||</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token keyword">INTO</span> RESULT <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>\n<span class="token keyword">RETURN</span><span class="token punctuation">(</span>RESULT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">END</span> FIND_IN_SET<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u8BFB\u5165\u4E24\u4E2A\u503C-\u8FD4\u56DE\u6BD4\u8F83\u5927\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8BFB\u5165\u4E24\u4E2A\u503C-\u8FD4\u56DE\u6BD4\u8F83\u5927\u7684\u503C" aria-hidden="true">#</a> 2.2 \u8BFB\u5165\u4E24\u4E2A\u503C, \u8FD4\u56DE\u6BD4\u8F83\u5927\u7684\u503C</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">function</span> function1<span class="token punctuation">(</span>para1 <span class="token operator">in</span> number<span class="token punctuation">,</span> para2 <span class="token operator">in</span> number<span class="token punctuation">)</span> \n<span class="token keyword">return</span> number \n<span class="token keyword">as</span> \n<span class="token keyword">begin</span>\n  <span class="token keyword">if</span> para1 <span class="token operator">&gt;</span> para2 <span class="token keyword">then</span>\n      <span class="token keyword">return</span> para1<span class="token punctuation">;</span>\n  <span class="token keyword">else</span>\n      <span class="token keyword">return</span> para2<span class="token punctuation">;</span> \n  <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>\n<span class="token keyword">end</span> function1<span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> function1<span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 16);
const _hoisted_17 = {
  href: "https://blog.csdn.net/libertine1993/article/details/47264211",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Oracle \u81EA\u5B9A\u4E49\u51FD\u6570\u8BED\u6CD5\u4E0E\u5B9E\u4F8B");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_17, [
        _hoisted_18,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Oracle________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Oracle\u81EA\u5B9A\u4E49\u51FD\u6570\u8BED\u6CD5.html.vue"]]);
export { Oracle________html as default };
