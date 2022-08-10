import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, d as createVNode, e as createStaticVNode, b as createTextVNode } from "./app.4f6d151a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="oracle\u57281\u5BF9\u591A\u65F6\u628A\u4E00\u5217\u7684\u503C\u5408\u5E76\u4E3A\u4E00\u4E2A\u503C\u5E76\u7528\u9017\u53F7\u5206\u9694" tabindex="-1"><a class="header-anchor" href="#oracle\u57281\u5BF9\u591A\u65F6\u628A\u4E00\u5217\u7684\u503C\u5408\u5E76\u4E3A\u4E00\u4E2A\u503C\u5E76\u7528\u9017\u53F7\u5206\u9694" aria-hidden="true">#</a> Oracle\u57281\u5BF9\u591A\u65F6\u628A\u4E00\u5217\u7684\u503C\u5408\u5E76\u4E3A\u4E00\u4E2A\u503C\u5E76\u7528\u9017\u53F7\u5206\u9694</h1><p>Oracle\u628A\u4E00\u5217\u7684\u503C\u5408\u5E76\u4E3A\u4E00\u4E2A\u503C\uFF0C\u5E76\u7528\u9017\u53F7\u5206\u9694\u3002</p><p>\u5B9E\u4F8B\u4E2D\u5C06\u628A\u90E8\u95E8\u8868\uFF08DEPT\u8868\uFF09\u4E0E\u5458\u5DE5\u8868\uFF08EMP\u8868\uFF09\u5173\u8054\uFF0C\u67E5\u8BE2\u6BCF\u4E2A\u90E8\u95E8\u4E0B\u7684\u6240\u6709\u5458\u5DE5\u59D3\u540D\uFF0C\u5458\u5DE5\u59D3\u540D\u4E4B\u95F4\u4EE5\u9017\u53F7\u5206\u9694\uFF08\u5982\u56FE\u4E00\uFF09\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201221152131891.png" alt="image-20201221152131891"></p><h2 id="_1-wmsys-wm-concat-\u5217\u540D-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-wmsys-wm-concat-\u5217\u540D-\u51FD\u6570" aria-hidden="true">#</a> 1. WMSYS.WM_CONCAT(\u5217\u540D)\u51FD\u6570</h2><p>\u4ECB\u7ECD\uFF1A\u5176\u51FD\u6570\u5728Oracle 10g\u63A8\u51FA\uFF0C\u572810g\u7248\u672C\u4E2D\uFF0C\u8FD4\u56DE\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u572811g\u7248\u672C\u4E2D\u8FD4\u56DEclob\u7C7B\u578B\u3002\u62EC\u53F7\u91CC\u9762\u7684\u53C2\u6570\u662F\u5217\uFF0C\u800C\u4E14\u53EF\u4EE5\u662F\u591A\u4E2A\u5217\u7684\u96C6\u5408\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728\u62EC\u53F7\u91CC\u9762\u53EF\u4EE5\u81EA\u7531\u5730\u7528\u2018||\u2019\u5408\u5E76\u5B57\u7B26\u4E32\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> D<span class="token punctuation">.</span>DEPTNO <span class="token keyword">AS</span> \u90E8\u95E8\u7F16\u53F7<span class="token punctuation">,</span>D<span class="token punctuation">.</span>DNAME <span class="token keyword">AS</span> \u90E8\u95E8\u540D\u79F0<span class="token punctuation">,</span>WMSYS<span class="token punctuation">.</span>WM_CONCAT<span class="token punctuation">(</span>E<span class="token punctuation">.</span>ENAME<span class="token punctuation">)</span> <span class="token keyword">AS</span> \u5458\u5DE5\u5217\u8868 \n<span class="token keyword">FROM</span> DEPT D\n<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> EMP E <span class="token keyword">ON</span> D<span class="token punctuation">.</span>DEPTNO <span class="token operator">=</span> E<span class="token punctuation">.</span>DEPTNO\n<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> D<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">,</span>D<span class="token punctuation">.</span>DNAME\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62FC\u63A5\u591A\u5217\uFF08\u62FC\u63A5\u5458\u5DE5\u59D3\u540D\u548C\u5458\u5DE5\u7F16\u53F7\uFF09</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> D<span class="token punctuation">.</span>DEPTNO <span class="token keyword">AS</span> \u90E8\u95E8\u7F16\u53F7<span class="token punctuation">,</span>D<span class="token punctuation">.</span>DNAME <span class="token keyword">AS</span> \u90E8\u95E8\u540D\u79F0<span class="token punctuation">,</span>WMSYS<span class="token punctuation">.</span>WM_CONCAT<span class="token punctuation">(</span>E<span class="token punctuation">.</span>ENAME<span class="token operator">||</span><span class="token string">&#39;(&#39;</span><span class="token operator">||</span>E<span class="token punctuation">.</span>EMPNO<span class="token operator">||</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> \u5458\u5DE5\u5217\u8868 \n<span class="token keyword">FROM</span> DEPT D\n<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> EMP E <span class="token keyword">ON</span> D<span class="token punctuation">.</span>DEPTNO <span class="token operator">=</span> E<span class="token punctuation">.</span>DEPTNO\n<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> D<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">,</span>D<span class="token punctuation">.</span>DNAME\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-listagg-\u5217\u540D-\u5206\u9694\u7B26-within-group-order-by-\u5217\u540D-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-listagg-\u5217\u540D-\u5206\u9694\u7B26-within-group-order-by-\u5217\u540D-\u51FD\u6570" aria-hidden="true">#</a> 2. LISTAGG(\u5217\u540D,&lt;\u5206\u9694\u7B26&gt;) WITHIN GROUP(ORDER BY \u5217\u540D)\u51FD\u6570</h2><p>\u4ECB\u7ECD\uFF1A\u5176\u51FD\u6570\u5728Oracle 11g \u7248\u672C\u4E2D\u63A8\u51FA\uFF0C\u5BF9\u5206\u7EC4\u540E\u7684\u6570\u636E\u6309\u7167\u4E00\u5B9A\u7684\u6392\u5E8F\u8FDB\u884C\u5B57\u7B26\u4E32\u8FDE\u63A5\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> D<span class="token punctuation">.</span>DEPTNO <span class="token keyword">AS</span> \u90E8\u95E8\u7F16\u53F7<span class="token punctuation">,</span>D<span class="token punctuation">.</span>DNAME <span class="token keyword">AS</span> \u90E8\u95E8\u540D\u79F0<span class="token punctuation">,</span>LISTAGG<span class="token punctuation">(</span>E<span class="token punctuation">.</span>ENAME<span class="token punctuation">,</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token keyword">WITHIN</span> <span class="token keyword">GROUP</span><span class="token punctuation">(</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> E<span class="token punctuation">.</span>ENAME<span class="token punctuation">)</span> <span class="token keyword">AS</span> \u5458\u5DE5\u5217\u8868 \n<span class="token keyword">FROM</span> DEPT D\n<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> EMP E <span class="token keyword">ON</span> D<span class="token punctuation">.</span>DEPTNO <span class="token operator">=</span> E<span class="token punctuation">.</span>DEPTNO\n<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> D<span class="token punctuation">.</span>DEPTNO<span class="token punctuation">,</span>D<span class="token punctuation">.</span>DNAME\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LISTAGG \u4E2D\u7684\u5B57\u6BB5\u53EF\u4EE5\u4E0D\u5199\u5728GROUP BY</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 14);
const _hoisted_15 = {
  href: "https://blog.csdn.net/pan_junbiao/article/details/79948222",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Oracle\u628A\u4E00\u5217\u7684\u503C\u5408\u5E76\u4E3A\u4E00\u4E2A\u503C\u5E76\u7528\u9017\u53F7\u5206\u9694");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_15, [
        _hoisted_16,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Oracle_1_____________________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Oracle\u57281\u5BF9\u591A\u65F6\u628A\u4E00\u5217\u7684\u503C\u5408\u5E76\u4E3A\u4E00\u4E2A\u503C\u5E76\u7528\u9017\u53F7\u5206\u9694.html.vue"]]);
export { Oracle_1_____________________html as default };
