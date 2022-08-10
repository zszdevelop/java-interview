import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, d as createVNode, e as createStaticVNode, b as createTextVNode } from "./app.4f6d151a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="jpa-\u6279\u91CF\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#jpa-\u6279\u91CF\u5220\u9664" aria-hidden="true">#</a> Jpa \u6279\u91CF\u5220\u9664</h1><h2 id="_1-\u5177\u4F53\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u5177\u4F53\u65B9\u6CD5" aria-hidden="true">#</a> 1. \u5177\u4F53\u65B9\u6CD5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StudentsRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Students</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Students</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n\n    <span class="token doc-comment comment">/**\n     * <span class="token keyword">@function</span> \u81EA\u5B9A\u4E49JPQL\n     * <span class="token keyword">@param</span> <span class="token parameter">ids</span>\n     */</span>\n    <span class="token comment">// \u6CE8\u610F\u66F4\u65B0\u548C\u5220\u9664\u662F\u9700\u8981\u52A0\u4E8B\u52A1\u7684\uFF0C \u5E76\u4E14\u8981\u52A0\u4E0A @Modify\u7684\u6CE8\u89E3</span>\n    <span class="token annotation punctuation">@Modifying</span>\n    <span class="token annotation punctuation">@Transactional</span>\n    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;delete from Students s where s.stuId in (?1)&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">void</span> <span class="token function">deleteBatch</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// \u8FD9\u4E2A\u662F\u901A\u8FC7spring data\u62FC\u63A5\u5173\u952E\u5B57\u8FDB\u884C\u7684\u64CD\u4F5C</span>\n    <span class="token keyword">void</span> <span class="token function">deleteStudentsByStuIdIn</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A</p><p><strong>@Modifying\u6CE8\u89E3</strong></p><p>1\u3001\u5728@Query\u6CE8\u89E3\u4E2D\u7F16\u5199JPQL\u5B9E\u73B0DELETE\u548CUPDATE\u64CD\u4F5C\u65F6\u5019\u5FC5\u987B\u52A0\u4E0A@Modifying\u6CE8\u89E3\uFF0C\u901A\u77E5Spring Data\u8FD9\u662F\u4E00\u4E2Adelete\u6216\u8005updata\u64CD\u4F5C</p><p>2\u3001 updata\u548Cdelete\u64CD\u4F5C\u9700\u8981\u4F7F\u7528\u4E8B\u52A1\uFF0C\u6B64\u65F6\u9700\u8981\u5B9A\u4E49service\u5C42\uFF0C\u5728service\u65B9\u6CD5\u4E0A\u6DFB\u52A0\u4E8B\u52A1\u64CD\u4F5C</p><p>3\u3001 \u6CE8\u610FJPQL\u4E0D\u652F\u6301insert\u64CD\u4F5C</p><p>@Query \u5982\u679C\u5728\u6CE8\u89E3\u4E2D\u6DFB\u52A0 nativeQuery=true \u662F\u652F\u6301\u539F\u751FSQL\u67E5\u8BE2</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 10);
const _hoisted_11 = {
  href: "https://blog.csdn.net/yhflyl/article/details/81557670",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("SpringBoot2 Jpa \u6279\u91CF\u5220\u9664");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_11, [
        _hoisted_12,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Jpa_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Jpa\u6279\u91CF\u5220\u9664.html.vue"]]);
export { Jpa_____html as default };
