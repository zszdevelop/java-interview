import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.e1ff6185.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mysql\u9762\u8BD5\u63D0\u95EE" tabindex="-1"><a class="header-anchor" href="#mysql\u9762\u8BD5\u63D0\u95EE" aria-hidden="true">#</a> MySql\u9762\u8BD5\u63D0\u95EE</h1><h2 id="_1-\u5B58\u50A8\u5F15\u64CE\u7BC7" tabindex="-1"><a class="header-anchor" href="#_1-\u5B58\u50A8\u5F15\u64CE\u7BC7" aria-hidden="true">#</a> 1. \u5B58\u50A8\u5F15\u64CE\u7BC7</h2><ol><li>\u4F60\u4E86\u89E3MySQL\u5B58\u50A8\u5F15\u64CE\u5417\uFF1F\u8BF4\u8BF4MyISAM \u548C InnoDB \u7684\u533A\u522B\uFF1F</li></ol><h2 id="_2-\u7D22\u5F15\u7BC7" tabindex="-1"><a class="header-anchor" href="#_2-\u7D22\u5F15\u7BC7" aria-hidden="true">#</a> 2. \u7D22\u5F15\u7BC7</h2><ol><li>\u4EC0\u4E48\u662F\u7D22\u5F15\uFF1F</li><li>\u8BF4\u8BF4Mysql\u7D22\u5F15\u7684\u6570\u636E\u7ED3\u6784\uFF1F</li><li>B+Tree \u548CB-Tree\u7684\u4E0D\u540C\u70B9</li><li>\u8BF4\u8BF4MySQL\u5BF9B+Tree\u505A\u7684\u6700\u5927\u4F18\u5316\u662F\u4EC0\u4E48\uFF1F</li><li>\u4F7F\u7528B+Tree\u7D22\u5F15\u7684\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F\u600E\u4E48\u505A\u5230\u7684\uFF1F</li><li>MyISAM \u548C InnoDB \u90FD\u662FB+Tree\u7D22\u5F15\uFF0C\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F</li><li>\u4E3A\u4EC0\u4E48InnoDB \u4E00\u5B9A\u8981\u6709\u4E3B\u952E\uFF1F\uFF08mysql\u53EF\u4EE5\u6CA1\u6709\u4E3B\u952E\u5417\uFF1F\uFF09</li><li>\u8F85\u52A9\u7D22\u5F15\u641C\u7D22\u7684\u6D41\u7A0B\uFF1F</li><li>\u8BF4\u8BF4\u4EC0\u4E48\u662F\u8054\u5408\u7D22\u5F15\uFF1F</li></ol><h2 id="_3-\u4E8B\u52A1\u7BC7" tabindex="-1"><a class="header-anchor" href="#_3-\u4E8B\u52A1\u7BC7" aria-hidden="true">#</a> 3.\u4E8B\u52A1\u7BC7</h2><ol><li>\u4EC0\u4E48\u662F\u4E8B\u52A1\uFF1F</li><li>\u4E8B\u52A1\u7684\u56DB\u5927\u7279\u6027\uFF1F</li><li>\u6570\u636E\u5E93\u662F\u5982\u4F55\u4FDD\u8BC1ACID\u7684\uFF1F</li><li>\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898\uFF1F</li><li>\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u5E7B\u8BFB\u7684\u533A\u522B\uFF1F</li><li>\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B\u6709\u54EA\u4E9B\uFF1F</li><li>InnoDB \u7684 REPEATABLE-READ\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u907F\u514D\u5E7B\u8BFB</li></ol><h2 id="_4-\u9501\u7BC7" tabindex="-1"><a class="header-anchor" href="#_4-\u9501\u7BC7" aria-hidden="true">#</a> 4. \u9501\u7BC7</h2><ol><li>MyISAM \u548C InnoDB \u5B58\u50A8\u5F15\u64CE\u652F\u6301\u7684\u9501\uFF1F\u5BF9\u6BD4\u4E00\u4E0B\u4F18\u7F3A\u70B9\uFF1F</li><li>InnoDB\u5B58\u50A8\u5F15\u64CE\u7684\u9501\u7B97\u6CD5</li><li>\u8BFB\u64CD\u4F5C\u4E0A\u9501\u5417\uFF1F</li></ol><h2 id="_5-\u5927\u8868\u4F18\u5316\u7BC7" tabindex="-1"><a class="header-anchor" href="#_5-\u5927\u8868\u4F18\u5316\u7BC7" aria-hidden="true">#</a> 5. \u5927\u8868\u4F18\u5316\u7BC7</h2><ol><li>\u4F60\u5E73\u5E38\u5DE5\u4F5C\u4E2D\u6709\u5BF9\u5927\u8868\u8FDB\u884C\u4F18\u5316\u5417\uFF1F\u90FD\u662F\u600E\u4E48\u505A\u7684\uFF1F</li><li>\u4EC0\u4E48\u662F\u5782\u76F4\u5206\u533A\uFF1F\u4F18\u7F3A\u70B9</li><li>\u4EC0\u4E48\u662F\u6C34\u5E73\u5206\u533A\uFF1F\u4F18\u7F3A\u70B9</li><li>\u8BF4\u8BF4\u6570\u636E\u5E93\u5206\u7247\u7684\u4E24\u79CD\u65B9\u6848\uFF1F</li></ol><h2 id="_6-\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_6-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> 6. \u6027\u80FD\u4F18\u5316</h2><ol><li><p>\u5982\u4F55\u5224\u65AD\u4E00\u6761SQL\u8BED\u53E5\u6267\u884C\u7684\u662F\u5426\u9AD8\u6548\uFF1F\uFF08\u6211\u4EEC\u5EFA\u7ACB\u597D\u7684\u7D22\u5F15\u5728\u8FD9\u6761SQL\u4E2D\u662F\u5426\u88AB\u7528\u5230\u4E86\uFF09</p></li><li><p>\u4E00\u6761\u8BED\u53E5\u518DMySql\u4E2D\u7684\u6267\u884C\u8FC7\u7A0B</p></li><li><p>\u4E3A\u4EC0\u4E48 redo log \u8981\u5F15\u5165 prepare \u9884\u63D0\u4EA4\u72B6\u6001\uFF1F</p></li></ol>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
var MySql_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MySql\u9762\u8BD5\u63D0\u95EE.html.vue"]]);
export { MySql_____html as default };
