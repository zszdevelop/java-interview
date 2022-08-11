import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, d as createTextVNode, e as createStaticVNode } from "./app.e1ff6185.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "mall\u4E2D\u5546\u54C1\u8BBE\u8BA1",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#mall\u4E2D\u5546\u54C1\u8BBE\u8BA1",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" mall\u4E2D\u5546\u54C1\u8BBE\u8BA1")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u8BE5\u7BC7\u6587\u7AE0\u4E3B\u8981\u53C2\u8003");
const _hoisted_3 = {
  href: "http://www.macrozheng.com/#/README",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("mall\u5B98\u65B9\u6587\u6863");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\uFF0C\u5E76\u7ED3\u5408\u81EA\u5DF1\u7684\u4F7F\u7528\u611F\u53D7\u505A\u7684\u4E00\u4E9B\u7B14\u8BB0");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><h2 id="_2-\u63A5\u53E3\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_2-\u63A5\u53E3\u8BBE\u8BA1" aria-hidden="true">#</a> 2. \u63A5\u53E3\u8BBE\u8BA1</h2><h3 id="_2-1-\u83B7\u53D6\u5546\u54C1\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u83B7\u53D6\u5546\u54C1\u8BE6\u60C5" aria-hidden="true">#</a> 2.1 \u83B7\u53D6\u5546\u54C1\u8BE6\u60C5</h3><ol><li>\u83B7\u53D6\u5546\u54C1\u7684\u57FA\u7840\u4FE1\u606F</li><li>\u83B7\u53D6\u54C1\u724C\u4FE1\u606F</li><li>\u83B7\u53D6\u5546\u54C1\u5C5E\u6027\u4FE1\u606F</li><li>\u83B7\u53D6\u5546\u54C1SKU\u5E93\u5B58\u4FE1\u606F</li><li>\u5546\u54C1\u9636\u68AF\u4EF7\u683C\u8BBE\u7F6E</li><li>\u5546\u54C1\u6EE1\u51CF\u4EF7\u683C\u8BBE\u7F6E</li><li>\u5546\u54C1\u53EF\u7528\u4F18\u60E0\u5238</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>\n<span class="token keyword">public</span> <span class="token class-name">PmsPortalProductDetail</span> <span class="token function">detail</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">PmsPortalProductDetail</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsPortalProductDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//\u83B7\u53D6\u5546\u54C1\u4FE1\u606F</span>\n    <span class="token class-name">PmsProduct</span> product <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    result<span class="token punctuation">.</span><span class="token function">setProduct</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//\u83B7\u53D6\u54C1\u724C\u4FE1\u606F</span>\n    <span class="token class-name">PmsBrand</span> brand <span class="token operator">=</span> brandMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getBrandId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    result<span class="token punctuation">.</span><span class="token function">setBrand</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//\u83B7\u53D6\u5546\u54C1\u5C5E\u6027\u4FE1\u606F</span>\n    <span class="token class-name">Long</span> productAttributeCategoryId <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getProductAttributeCategoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>productAttributeCategoryId <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">PmsProductAttributeExample</span> attributeExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductAttributeExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        attributeExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductAttributeCategoryIdEqualTo</span><span class="token punctuation">(</span>productAttributeCategoryId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductAttribute</span><span class="token punctuation">&gt;</span></span> productAttributeList <span class="token operator">=</span> productAttributeMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>attributeExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        result<span class="token punctuation">.</span><span class="token function">setProductAttributeList</span><span class="token punctuation">(</span>productAttributeList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//\u83B7\u53D6\u5546\u54C1\u5C5E\u6027\u503C\u4FE1\u606F</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">CollUtil</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>productAttributeList<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> attributeIds <span class="token operator">=</span> productAttributeList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">PmsProductAttribute</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">PmsProductAttributeValueExample</span> attributeValueExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductAttributeValueExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            attributeValueExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">andProductAttributeIdIn</span><span class="token punctuation">(</span>attributeIds<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductAttributeValue</span><span class="token punctuation">&gt;</span></span> productAttributeValueList <span class="token operator">=</span> productAttributeValueMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>attributeValueExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            result<span class="token punctuation">.</span><span class="token function">setProductAttributeValueList</span><span class="token punctuation">(</span>productAttributeValueList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  \n\n        <span class="token comment">//\u83B7\u53D6\u5546\u54C1SKU\u5E93\u5B58\u4FE1\u606F</span>\n        <span class="token class-name">PmsSkuStockExample</span> skuExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsSkuStockExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        skuExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsSkuStock</span><span class="token punctuation">&gt;</span></span> skuStockList <span class="token operator">=</span> skuStockMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>skuExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        result<span class="token punctuation">.</span><span class="token function">setSkuStockList</span><span class="token punctuation">(</span>skuStockList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//\u5546\u54C1\u9636\u68AF\u4EF7\u683C\u8BBE\u7F6E</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getPromotionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">PmsProductLadderExample</span> ladderExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductLadderExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            ladderExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductLadder</span><span class="token punctuation">&gt;</span></span> productLadderList <span class="token operator">=</span> productLadderMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>ladderExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            result<span class="token punctuation">.</span><span class="token function">setProductLadderList</span><span class="token punctuation">(</span>productLadderList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//\u5546\u54C1\u6EE1\u51CF\u4EF7\u683C\u8BBE\u7F6E</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getPromotionType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">PmsProductFullReductionExample</span> fullReductionExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PmsProductFullReductionExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            fullReductionExample<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">andProductIdEqualTo</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PmsProductFullReduction</span><span class="token punctuation">&gt;</span></span> productFullReductionList <span class="token operator">=</span> productFullReductionMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>fullReductionExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            result<span class="token punctuation">.</span><span class="token function">setProductFullReductionList</span><span class="token punctuation">(</span>productFullReductionList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//\u5546\u54C1\u53EF\u7528\u4F18\u60E0\u5238</span>\n        result<span class="token punctuation">.</span><span class="token function">setCouponList</span><span class="token punctuation">(</span>portalProductDao<span class="token punctuation">.</span><span class="token function">getAvailableCouponList</span><span class="token punctuation">(</span>product<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getProductCategoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-\u83B7\u53D6\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u83B7\u53D6\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868" aria-hidden="true">#</a> 2.1.1 \u83B7\u53D6\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868</h4><p>\u83B7\u53D6\u5177\u4F53\u5546\u54C1\u7684\u53EF\u7528\u4F18\u60E0\u5238\uFF0C</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token keyword">select</span> id<span class="token operator">=</span><span class="token string">&quot;getAvailableCouponList&quot;</span> resultMap<span class="token operator">=</span><span class="token string">&quot;com.macro.mall.mapper.SmsCouponMapper.BaseResultMap&quot;</span><span class="token operator">&gt;</span>\n    <span class="token keyword">SELECT</span> <span class="token operator">*</span>\n    <span class="token keyword">FROM</span> sms_coupon\n    <span class="token keyword">WHERE</span> use_type <span class="token operator">=</span> <span class="token number">0</span>\n      <span class="token operator">AND</span> start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token operator">AND</span> end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">UNION</span>\n    <span class="token punctuation">(</span>\n        <span class="token keyword">SELECT</span> c<span class="token punctuation">.</span><span class="token operator">*</span>\n        <span class="token keyword">FROM</span> sms_coupon_product_category_relation cpc\n                 <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> sms_coupon c <span class="token keyword">ON</span> cpc<span class="token punctuation">.</span>coupon_id <span class="token operator">=</span> c<span class="token punctuation">.</span>id\n        <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>use_type <span class="token operator">=</span> <span class="token number">1</span>\n          <span class="token operator">AND</span> c<span class="token punctuation">.</span>start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token operator">AND</span> c<span class="token punctuation">.</span>end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token operator">AND</span> cpc<span class="token punctuation">.</span>product_category_id <span class="token operator">=</span> <span class="token comment">#{productCategoryId}</span>\n    <span class="token punctuation">)</span>\n    <span class="token keyword">UNION</span>\n    <span class="token punctuation">(</span>\n        <span class="token keyword">SELECT</span> c<span class="token punctuation">.</span><span class="token operator">*</span>\n        <span class="token keyword">FROM</span> sms_coupon_product_relation cp\n                 <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> sms_coupon c <span class="token keyword">ON</span> cp<span class="token punctuation">.</span>coupon_id <span class="token operator">=</span> c<span class="token punctuation">.</span>id\n        <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>use_type <span class="token operator">=</span> <span class="token number">2</span>\n          <span class="token operator">AND</span> c<span class="token punctuation">.</span>start_time <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token operator">AND</span> c<span class="token punctuation">.</span>end_time <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token operator">AND</span> cp<span class="token punctuation">.</span>product_id <span class="token operator">=</span> <span class="token comment">#{productId}</span>\n    <span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">select</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        _hoisted_2,
        createBaseVNode("a", _hoisted_3, [
          _hoisted_4,
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_5
      ])
    ]),
    _hoisted_6
  ]);
}
var C3Mall______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C3-mall\u4E2D\u5546\u54C1\u8BBE\u8BA1.html.vue"]]);
export { C3Mall______html as default };
