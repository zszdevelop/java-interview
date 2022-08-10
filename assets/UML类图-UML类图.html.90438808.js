import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.4f6d151a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="uml\u7C7B\u56FE-class-diagrams" tabindex="-1"><a class="header-anchor" href="#uml\u7C7B\u56FE-class-diagrams" aria-hidden="true">#</a> UML\u7C7B\u56FE(Class Diagrams)</h1><h2 id="_1-\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> 1.\u57FA\u672C\u6982\u5FF5</h2><p>\u7C7B\u56FE\u662F\u6839\u636E\u7528\u4F8B\u56FE\u62BD\u8C61\u6210\u7C7B\uFF0C\u63CF\u8FF0\u7C7B\u7684\u5185\u90E8\u7ED3\u6784\u548C\u7C7B\u548C\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u662F\u4E00\u79CD\u9759\u6001\u7ED3\u6784\u56FE</p><h2 id="_2-\u5E38\u89C1\u7684\u51E0\u79CD\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u89C1\u7684\u51E0\u79CD\u5173\u7CFB" aria-hidden="true">#</a> 2.\u5E38\u89C1\u7684\u51E0\u79CD\u5173\u7CFB\uFF1A</h2><ul><li>\u6CDB\u5316\uFF08Generalization\uFF09</li><li>\u5B9E\u73B0\uFF08Realization\uFF09</li><li>\u5173\u8054\uFF08Association)</li><li>\u805A\u5408\uFF08Aggregation\uFF09</li><li>\u7EC4\u5408(Composition)</li><li>\u4F9D\u8D56(Dependency)</li></ul><p><strong>\u5404\u79CD\u5173\u7CFB\u7684\u5F3A\u5F31\u987A\u5E8F\uFF1A \u6CDB\u5316 = \u5B9E\u73B0 &gt; \u7EC4\u5408 &gt; \u805A\u5408 &gt; \u5173\u8054 &gt; \u4F9D\u8D56</strong></p><h3 id="_2-1-\u6CDB\u5316" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6CDB\u5316" aria-hidden="true">#</a> 2.1 \u6CDB\u5316</h3><p><strong>\u3010\u6CDB\u5316\u5173\u7CFB\u3011\uFF1A\u662F\u4E00\u79CD\u7EE7\u627F\u5173\u7CFB\uFF0C\u8868\u793A\u4E00\u822C\u4E0E\u7279\u6B8A\u7684\u5173\u7CFB\uFF0C\u5B83\u6307\u5B9A\u4E86\u5B50\u7C7B\u5982\u4F55\u7EE7\u627F\u7236\u7C7B\u7684\u6240\u6709\u7279\u5F81\u548C\u884C\u4E3A\u3002\u4F8B\u5982\uFF1A\u8001\u864E\u662F\u52A8\u7269\u7684\u4E00\u79CD\uFF0C\u5373\u6709\u8001\u864E\u7684\u7279\u6027\u4E5F\u6709\u52A8\u7269\u7684\u5171\u6027****\u5373\u6709\u8001\u864E\u7684\u7279\u6027\u4E5F\u6709\u52A8\u7269\u7684\u5171\u6027\u3002</strong></p><p>\u63CF\u8FF0\u65B9\u5F0F\uFF1A\u7528\u4E09\u89D2\u5F62\u7BAD\u5934\u52A0\u5B9E\u7EBF\u8868\u793A\uFF0C\u7BAD\u5934\u6307\u5411\u7236\u7C7B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/uml01.jpg" alt=""></p><h3 id="_2-2-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5B9E\u73B0" aria-hidden="true">#</a> 2.2 \u5B9E\u73B0</h3><p><strong>\u3010\u5B9E\u73B0\u5173\u7CFB\u3011\uFF1A\u662F\u4E00\u79CD\u7C7B\u4E0E\u63A5\u53E3\u7684\u5173\u7CFB\uFF0C\u8868\u793A\u7C7B\u662F\u63A5\u53E3\u6240\u6709\u7279\u5F81\u548C\u884C\u4E3A\u7684\u5B9E\u73B0\u3002</strong></p><p>\u63CF\u8FF0\u65B9\u5F0F\uFF1A\u7528\u4E09\u89D2\u5F62\u7BAD\u5934\u52A0\u865A\u7EBF\u8868\u793A\uFF0C\u7BAD\u5934\u6307\u5411\u5B9E\u73B0\u7684\u63A5\u53E3</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/uml02.jpg" alt=""></p><p>###2.3.\u5173\u8054</p><p><strong>\u3010\u5173\u8054\u5173\u7CFB\u3011\uFF1A\u662F\u4E00\u79CD\u62E5\u6709\u7684\u5173\u7CFB\uFF0C\u5B83\u4F7F\u4E00\u4E2A\u7C7B\u77E5\u9053\u53E6\u4E00\u4E2A\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1B\u5982\uFF1A\u8001\u5E08\u4E0E\u5B66\u751F\uFF0C\u4E08\u592B\u4E0E\u59BB\u5B50\u5173\u8054\u53EF\u4EE5\u662F\u53CC\u5411\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5355\u5411\u7684\u3002\u53CC\u5411\u7684\u5173\u8054\u53EF\u4EE5\u6709\u4E24\u4E2A\u7BAD\u5934\u6216\u8005\u6CA1\u6709\u7BAD\u5934\uFF0C\u5355\u5411\u7684\u5173\u8054\u6709\u4E00\u4E2A\u7BAD\u5934\u3002</strong></p><p><strong>\u3010\u4EE3\u7801\u4F53\u73B0\u3011\uFF1A\u6210\u5458\u53D8\u91CF</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/uml03.jpg" alt=""></p><h3 id="_2-4-\u5171\u4EAB\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5171\u4EAB\u805A\u5408" aria-hidden="true">#</a> 2.4 \u5171\u4EAB\u805A\u5408</h3><p><strong>\u3010\u805A\u5408\u5173\u7CFB\u3011\uFF1A\u662F\u6574\u4F53\u4E0E\u90E8\u5206\u7684\u5173\u7CFB\uFF0C\u4E14\u90E8\u5206\u53EF\u4EE5\u79BB\u5F00\u6574\u4F53\u800C\u5355\u72EC\u5B58\u5728\u3002\u5982\u8F66\u548C\u8F6E\u80CE\u662F\u6574\u4F53\u548C\u90E8\u5206\u7684\u5173\u7CFB\uFF0C\u8F6E\u80CE\u79BB\u5F00\u8F66\u4ECD\u7136\u53EF\u4EE5\u5B58\u5728\u3002</strong></p><p>\u200B \u3000<strong>\u805A\u5408\u5173\u7CFB\u662F\u5173\u8054\u5173\u7CFB\u7684\u4E00\u79CD\uFF0C\u662F\u5F3A\u7684\u5173\u8054\u5173\u7CFB\uFF1B\u5173\u8054\u548C\u805A\u5408\u5728\u8BED\u6CD5\u4E0A\u65E0\u6CD5\u533A\u5206\uFF0C\u5FC5\u987B\u8003\u5BDF\u5177\u4F53\u7684\u903B\u8F91\u5173\u7CFB\u3002</strong></p><p>\u200B <strong>\u3010\u4EE3\u7801\u4F53\u73B0\u3011\uFF1A\u6210\u5458\u53D8\u91CF</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/uml04.jpg" alt=""></p><p>###2.5.\u7EC4\u5408\u96C6\u5408</p><p><strong>\u3010\u7EC4\u5408\u5173\u7CFB\u3011\uFF1A\u662F\u6574\u4F53\u4E0E\u90E8\u5206\u7684\u5173\u7CFB\uFF0C\u4F46\u90E8\u5206\u4E0D\u80FD\u79BB\u5F00\u6574\u4F53\u800C\u5355\u72EC\u5B58\u5728\u3002\u5982\u516C\u53F8\u548C\u90E8\u95E8\u662F\u6574\u4F53\u548C\u90E8\u5206\u7684\u5173\u7CFB\uFF0C\u6CA1\u6709\u516C\u53F8\u5C31\u4E0D\u5B58\u5728\u90E8\u95E8\u3002</strong></p><p>\u200B <strong>\u7EC4\u5408\u5173\u7CFB\u662F\u5173\u8054\u5173\u7CFB\u7684\u4E00\u79CD\uFF0C\u662F\u6BD4\u805A\u5408\u5173\u7CFB\u8FD8\u8981\u5F3A\u7684\u5173\u7CFB\uFF0C\u5B83\u8981\u6C42\u666E\u901A\u7684\u805A\u5408\u5173\u7CFB\u4E2D\u4EE3\u8868\u6574\u4F53\u7684\u5BF9\u8C61\u8D1F\u8D23\u4EE3\u8868\u90E8\u5206\u7684\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F\u3002</strong></p><p><strong>\u3010\u4EE3\u7801\u4F53\u73B0\u3011\uFF1A\u6210\u5458\u53D8\u91CF</strong></p><p><strong>\u3010\u7BAD\u5934\u53CA\u6307\u5411\u3011\uFF1A\u5E26\u5B9E\u5FC3\u83F1\u5F62\u7684\u5B9E\u7EBF\uFF0C\u83F1\u5F62\u6307\u5411\u6574\u4F53</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/uml05.jpg" alt=""></p><p>###2.6.\u4F9D\u8D56</p><p><strong>\u3010\u4F9D\u8D56\u5173\u7CFB\u3011\uFF1A\u662F\u4E00\u79CD\u4F7F\u7528\u7684\u5173\u7CFB\uFF0C\u5373\u4E00\u4E2A\u7C7B\u7684\u5B9E\u73B0\u9700\u8981\u53E6\u4E00\u4E2A\u7C7B\u7684\u534F\u52A9\uFF0C\u6240\u4EE5\u8981\u5C3D\u91CF\u4E0D\u4F7F\u7528\u53CC\u5411\u7684\u4E92\u76F8\u4F9D\u8D56.</strong></p><p><strong>\u3010\u4EE3\u7801\u8868\u73B0\u3011\uFF1A\u5C40\u90E8\u53D8\u91CF\u3001\u65B9\u6CD5\u7684\u53C2\u6570\u6216\u8005\u5BF9\u9759\u6001\u65B9\u6CD5\u7684\u8C03\u7528</strong></p><p><strong>\u3010\u7BAD\u5934\u53CA\u6307\u5411\u3011\uFF1A\u5E26\u7BAD\u5934\u7684\u865A\u7EBF\uFF0C\u6307\u5411\u88AB\u4F7F\u7528\u8005</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/uml07.jpg" alt=""></p><p>###2.7 \u5404\u79CD\u7C7B\u56FE\u5173\u7CFB</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/uml08.jpg" alt=""></p>', 36);
const _hoisted_37 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_37);
}
var UML__UML___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "UML\u7C7B\u56FE-UML\u7C7B\u56FE.html.vue"]]);
export { UML__UML___html as default };
