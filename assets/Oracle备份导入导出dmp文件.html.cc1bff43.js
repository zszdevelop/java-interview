import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.e1ff6185.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="oracle\u5907\u4EFD-\u5BFC\u5165\u5BFC\u51FAdmp-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#oracle\u5907\u4EFD-\u5BFC\u5165\u5BFC\u51FAdmp-\u6587\u4EF6" aria-hidden="true">#</a> Oracle\u5907\u4EFD-\u5BFC\u5165\u5BFC\u51FAdmp \u6587\u4EF6</h1><h2 id="_1-\u5177\u4F53\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-\u5177\u4F53\u64CD\u4F5C" aria-hidden="true">#</a> 1. \u5177\u4F53\u64CD\u4F5C</h2><ol><li><p>\u5BFC\u51FA\u8BED\u53E5</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code>exp myuser/mypassword@192.168.0.1:1521/orcl file=D:<span class="token function selector">\\mydb</span>.dmp log=D:<span class="token function selector">\\export</span>.log full=y  as sysdba\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BFC\u51FA\u7684\u7528\u6237\u540D\u5BC6\u7801\uFF0C\u6700\u597D\u7528dba\u6743\u9650\u7684</p><p>\u5BFC\u51FA\u547D\u4EE4\u4E2D\u52A0\u5165\u5982\u4E0B\u53C2\u6570 \uFF0C\u53EF\u5206\u522B\u5B9E\u73B0\u4E0D\u540C\u7684\u529F\u80FD\uFF1A</p><blockquote><ul><li><p>full=y</p><p>\u5168\u5E93\u5BFC\u51FA</p></li><li><p>owner=\uFF08user1\uFF0Cuser2\uFF09</p><p>\u5BFC\u51FA\u6307\u5B9A\u7684\u7528\u6237\uFF0C\u5982user1\u3001user2</p></li><li><p>compress=y</p><p>\u8BBE\u7F6E\u5F85\u5BFC\u51FA\u7684\u8868\u5360\u7528\u7A7A\u95F4\u4E3A\u5B9E\u9645\u5C3A\u5BF8\uFF08\u5373\u9664\u53BB\u9AD8\u7AEF\u6C34\u5370\uFF09</p></li></ul></blockquote></li><li><p>\u5BFC\u5165\u8BED\u53E5</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Imp myuser/mypassword@192.168.0.1/orcl file=D:\\mydb.dmp  full=y  ignore=y\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BFC\u5165\u8FD8\u53EF\u4EE5\u6307\u5B9A\u7528\u6237</p><ul><li>fromuser\u5C31\u662F\u628A\u5F53\u524D\u7684dmp\u6587\u4EF6\u4E2D\u7684\u67D0\u4E00\u4E2A\u7528\u6237\u4E0B\u7684\u6570\u636E\u53D6\u51FA\u3002</li><li>touser\u5C31\u662F\u628A\u73B0\u5728dmp\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u76EE\u6807\u5E93\u7684\u6307\u5B9Auser\u4E0B\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Imp myuser/mypassword@192.168.0.1/orcl file=D:\\mydb.dmp    fromuser=BJ_RV touser=BJ_TEST   ignore=y\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_2-\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> 2. \u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898</h2><h3 id="_2-1-ora-28009-connection-as-sys-should-be-as-sysdba-or-sysoper\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-ora-28009-connection-as-sys-should-be-as-sysdba-or-sysoper\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> 2.1 ORA-28009\uFF1Aconnection as SYS should be as SYSDBA OR SYSOPER\u89E3\u51B3\u65B9\u6CD5</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210624145704882.png" alt="image-20210624145704882"></p><p>\u9519\u8BEF\u63D0\u793A\u91CC\u7684\u5927\u81F4\u610F\u601D\uFF1A\u4F5C\u4E3Asys\u7684\u8FDE\u63A5\u5E94\u8BE5\u662FSySDBA\u6216Sysopor \u6240\u4EE5,\u6211\u4EEC\u5728\u767B\u5F55\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8BD5\u4E00\u4E0B\uFF1Asys as sysdba</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 8);
const _hoisted_9 = {
  href: "https://www.cnblogs.com/mingforyou/p/7110163.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Oracle \u5BFC\u5165\u5BFC\u51FA dmp \u6587\u4EF6");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_9, [
        _hoisted_10,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Oracle______dmp___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Oracle\u5907\u4EFD\u5BFC\u5165\u5BFC\u51FAdmp\u6587\u4EF6.html.vue"]]);
export { Oracle______dmp___html as default };
