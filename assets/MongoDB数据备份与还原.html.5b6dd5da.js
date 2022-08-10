import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, d as createVNode, e as createStaticVNode, b as createTextVNode } from "./app.4f6d151a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mongodb\u6570\u636E\u5907\u4EFD\u4E0E\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#mongodb\u6570\u636E\u5907\u4EFD\u4E0E\u8FD8\u539F" aria-hidden="true">#</a> MongoDB\u6570\u636E\u5907\u4EFD\u4E0E\u8FD8\u539F</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>MongoDB\u5B98\u65B9\u63D0\u4F9B\u4E86\u4E24\u5957\u6570\u636E\u5BFC\u5165\u5BFC\u51FA\u5DE5\u5177\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C</p><ul><li>mongodump\u548Cmongorestore <ul><li>\u8FDB\u884C\u6574\u5E93\u5BFC\u51FA\u5BFC\u5165\u65F6\u4F7F\u7528</li><li>\u64CD\u4F5C\u7684\u6570\u636E\u662FBSON\u683C\u5F0F\uFF0C\u8FDB\u884C\u5927\u91CFdump\u548Crestore\u65F6\u6548\u7387\u8F83\u9AD8\u3002</li></ul></li><li>mongoexport\u548Cmongoimport <ul><li>\u8FDB\u884C\u5355\u4E2A\u96C6\u5408\u5BFC\u51FA\u5BFC\u5165\u65F6\u4F7F\u7528</li><li>\u64CD\u4F5C\u7684\u6570\u636E\u662FJSON\u683C\u5F0F\uFF0C\u53EF\u8BFB\u6027\u8F83\u9AD8</li></ul></li></ul><h2 id="_2-mongodump-\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#_2-mongodump-\u5907\u4EFD" aria-hidden="true">#</a> 2. mongodump\uFF08\u5907\u4EFD\uFF09</h2><h3 id="_2-1-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8BF4\u660E" aria-hidden="true">#</a> 2.1 \u8BF4\u660E</h3><p>mongodump\u662F\u4E00\u4E2A\u7528\u4E8E\u5BFC\u51FA\u4E8C\u8FDB\u5236\u6570\u636E\u5E93\u5185\u5BB9\u7684\u5B9E\u7528\u5DE5\u5177\uFF0C\u5B83\u5BFC\u51FA\u7684bson\u6587\u6863\u4E2D\u53EA\u4F1A\u5305\u542B\u7740\u96C6\u5408\u6587\u6863\u7B49\u4FE1\u606F\uFF0C\u4E0D\u5305\u62EC\u7D22\u5F15\u4FE1\u606F\uFF08\u7D22\u5F15\u4FE1\u606F\u4F1A\u5355\u72EC\u5BFC\u51FA\uFF09\uFF0C\u6240\u4EE5\u8FD8\u539F\u540E\uFF0C\u7D22\u5F15\u5FC5\u987B\u91CD\u5EFA\uFF08\u8FD9\u4E2A\u4E0D\u7528\u62C5\u5FC3\uFF0C\u4F7F\u7528mongorestore\u4F1A\u81EA\u52A8\u91CD\u5EFAmongodump\u751F\u6210\u7684\u7D22\u5F15\u4FE1\u606F\uFF09\u30023.4\u7248\u672C\u4E2D\u6DFB\u52A0\u4E86\u5BF9\u53EA\u8BFB\u89C6\u56FE\u7684\u652F\u6301\u3002</p><h3 id="_2-2-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-2-\u53C2\u6570" aria-hidden="true">#</a> 2.2 \u53C2\u6570</h3><table><thead><tr><th>\u547D\u4EE4</th><th>\u5168\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u53C2\u8003\u91CA\u4E49</th></tr></thead><tbody><tr><td></td><td>--help</td><td></td><td>\u67E5\u770Bmongodump\u547D\u4EE4\u7684\u4F7F\u7528\u5E2E\u52A9</td></tr><tr><td></td><td>--version</td><td></td><td>\u8FD4\u56DEmongodump\u7684\u7248\u672C\u53F7</td></tr><tr><td>-h</td><td><code>--host &lt;hostname&gt;&lt;:port&gt;</code></td><td><code>localhost:27017</code></td><td>\u6307\u5B9Amongod\u8981\u8FDE\u63A5\u7684\u4E3B\u673A\u540D\u53CA\u7AEF\u53E3\u53F7</td></tr><tr><td></td><td><code>--port &lt;port&gt;</code></td><td><code>27017</code></td><td>\u6307\u5B9AMongoDB\u5B9E\u4F8B\u76D1\u542C\u5BA2\u6237\u8FDE\u63A5\u7684TCP\u7AEF\u53E3\u53F7</td></tr><tr><td>-u</td><td><code>--username &lt;username&gt;</code></td><td></td><td>\u6307\u5B9A\u7528\u4E8E\u5411\u4F7F\u7528\u8BA4\u8BC1\u7684MongoDB\u6570\u636E\u5E93\u8BA4\u8BC1\u7684\u7528\u6237\u540D\uFF0C\u4E0E--password\u548C --authenticationDatabase\u7ED3\u5408\u4F7F\u7528</td></tr><tr><td>-p</td><td><code>--password &lt;password&gt;</code></td><td></td><td>\u6307\u5B9A\u7528\u4E8E\u5411\u4F7F\u7528\u8BA4\u8BC1\u7684MongoDB\u6570\u636E\u5E93\u8BA4\u8BC1\u7684\u5BC6\u7801\u3002\u4E0E--username\u548C -- authenticationDatabase\u9009\u9879\u7ED3\u5408\u4F7F\u7528\u3002</td></tr><tr><td>-d</td><td><code>--db &lt;database&gt;</code></td><td></td><td>\u6307\u5B9A\u8981\u5907\u4EFD\u7684\u6570\u636E\u5E93\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0Cmongodump\u4F1A\u5C06\u6B64\u5B9E\u4F8B\u4E2D\u7684\u6240\u6709\u6570\u636E\u5E93\u5907\u4EFD\u3002</td></tr><tr><td>-c</td><td><code>--collection &lt;collection&gt;</code></td><td></td><td>\u6307\u5B9A\u8981\u5907\u4EFD\u7684\u96C6\u5408\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u4F1A\u5C06\u6307\u5B9A\u6570\u636E\u5E93\u6216\u5B9E\u4F8B\u4E2D\u7684\u6240\u6709\u96C6\u5408\u5907\u4EFD\u3002</td></tr><tr><td></td><td><code>--gzip</code></td><td></td><td>3.2\u7248\u672C+\uFF0C\u538B\u7F29\u8F93\u51FA\uFF0C\u5982\u679Cmongodump\u6307\u5B9A\u5BFC\u51FA\u5230\u76EE\u5F55\uFF0C\u5219\u8BE5\u9009\u9879\u4F1A\u5C06\u6BCF\u4E2A\u6587\u4EF6\u90FD\u538B\u7F29\uFF0C \u5E76\u6DFB\u52A0.gz\u540E\u7F00\uFF1B \u5982\u679Cmongodump\u6307\u5B9A\u5BFC\u51FA\u5230\u6587\u6863\u6216\u6807\u51C6\u8F93\u51FA\u6D41\uFF0C\u5219\u8BE5\u9009\u9879\u4F1A\u538B\u7F29\u5230\u6587\u6863\u6216\u8F93\u51FA\u6D41\u4E2D</td></tr><tr><td>-o</td><td><code>--out &lt;path&gt;</code></td><td></td><td>\u6307\u5B9A\u5BFC\u51FA\u6570\u636E\u7684\u76EE\u5F55\u8DEF\u5F84\uFF0C\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219mongodump\u9ED8\u8BA4\u5C06\u6587\u4EF6\u8F93\u51FA\u5230dump\u6240\u5728\u7684\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u3002 \u8BE5\u9009\u9879\u4E0D\u80FD\u548C--archive\u4E00\u8D77\u4F7F\u7528</td></tr></tbody></table><h3 id="_2-3-\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4E3E\u4F8B" aria-hidden="true">#</a> 2.3 \u4E3E\u4F8B</h3><p>\u5C06mytest\u6570\u636E\u5E93\u4E2D\u7684user\u96C6\u5408\u5BFC\u51FA\u5230F:\\bk\u76EE\u5F55\u4E0B(win\u5728\u8981bin\u76EE\u5F55\u4E0B\u6267\u884C)</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>mongodump <span class="token operator">-</span>d mytest <span class="token operator">-</span>c user <span class="token operator">-</span>o F<span class="token punctuation">:</span>\\bk\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210104143705063.png" alt="image-20210104143705063"></p><p>\u5176\u4E2D\u7684metadata.json\u5373\u4E3A\u7D22\u5F15\u4FE1\u606F</p><h2 id="_3-mongorestore" tabindex="-1"><a class="header-anchor" href="#_3-mongorestore" aria-hidden="true">#</a> 3. mongorestore</h2><h3 id="_3-1-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8BF4\u660E" aria-hidden="true">#</a> 3.1 \u8BF4\u660E</h3><p>mongorestore\u7528\u6765\u5BFC\u5165\u6570\u636E\u5230MongoDB\u5B9E\u4F8B\u4E2D\uFF0C3.0.0\u7248\u672C\u4EE5\u4E0A\u652F\u6301\u901A\u8FC7\u6807\u51C6\u8F93\u5165\u6D41\u6765\u5BFC\u5165\u6570\u636E\u3002</p><h3 id="_3-2-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-2-\u53C2\u6570" aria-hidden="true">#</a> 3.2 \u53C2\u6570</h3><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u5168\u79F0</th><th style="text-align:left;">\u53C2\u8003\u91CA\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;">-d</td><td style="text-align:left;"><code>--db &lt;database&gt;</code></td><td style="text-align:left;">\u6307\u5B9A\u8981\u8FD8\u539F\u7684\u6570\u636E\u5E93\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0Crestore\u5C06\u4F1A\u8FD8\u539Fdump\u8BB0\u5F55\u7684\u6240\u6709\u6570\u636E\u5E93\uFF0C\u5E76\u4F1A\u8986\u76D6\u73B0\u6709\u6570\u636E\u5E93\u6570\u636E</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;"><code>--collection &lt;collection&gt;</code></td><td style="text-align:left;"><code>\u6307\u5B9A\u8981\u8FD8\u539F\u7684\u96C6\u5408\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0Cmongorestore\u4F1A\u4ECE\u6587\u4EF6\u540D\u4E2D\u8BFB\u53D6\u8BC6\u522B\u96C6\u5408\u540D\u79F0\uFF08\u5982\u679C\u6709\u6269\u5C55\u540D\u5219\u4F1A\u7701\u7565\u6269\u5C55\u540D\uFF09</code></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--drop</td><td style="text-align:left;">\u8FD8\u539F\u96C6\u5408\u4E4B\u524D\u4F1A\u5148\u4ECE\u76EE\u6807\u6570\u636E\u5E93\u4E2D\u5220\u9664\u96C6\u5408\uFF0C\u4E0D\u4F1A\u5220\u9664\u4E0D\u5728\u5907\u4EFD\u4E2D\u7684\u96C6\u5408\u3002</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--gzip</td><td style="text-align:left;">3.2\u7248\u672C+\uFF0C\u4ECE\u538B\u7F29\u6587\u4EF6\u4E2D\u8FD8\u539F</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"><code>&lt;path&gt;</code></td><td style="text-align:left;">\u8981\u8FD8\u539F\u7684\u6570\u636E\u6587\u4EF6\u8DEF\u5F84\uFF0C\u8BE5\u53C2\u6570\u5FC5\u987B\u662Fmongorestore\u547D\u4EE4\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--dir</td><td style="text-align:left;">\u6307\u5B9A\u5907\u4EFD\u6587\u4EF6\u76EE\u5F55</td></tr></tbody></table><p>\u5176\u4ED6\u53C2\u6570\u4E0Emongodump\u57FA\u672C\u4E00\u81F4\u3002</p><h3 id="_3-3-\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-3-\u4E3E\u4F8B" aria-hidden="true">#</a> 3.3 \u4E3E\u4F8B\uFF1A</h3><p>\u901A\u8FC7user.bson\u6587\u4EF6\u8FD8\u539Fmytest\u6570\u636E\u5E93\u4E2D\u7684user\u96C6\u5408\uFF0C\u5E76\u5728\u8FD8\u539F\u4E4B\u524D\u8FDB\u884C\u5220\u9664</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongorestore --drop -d mytest -c user --dir F:<span class="token punctuation">\\</span>bk<span class="token punctuation">\\</span>mytest\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>mongorestore <span class="token comment">--drop -d mytest -c user F:\\bk\\mytest\\user.bson</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>linux\u4E0B\u53EF\u4EE5\u4F7F\u7528\uFF1Amongorestore -d <span class="token operator">&lt;</span>db_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>bson_folder<span class="token operator">&gt;</span>\nwindows\u4E0B\u53EF\u4EE5\u4F7F\u7528\uFF1Amongorestore.exe -d <span class="token operator">&lt;</span>db_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>bson_folder<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210104143924453.png" alt="image-20210104143924453"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./mongorestore -h<span class="token string">&quot;127.0.0.1:27017&quot;</span>  -d caseDB --dir /home/data/caseDB_200619 --bypassDocumentValidation\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-mongoexport-mongoimport\u4E0Emongodump-mongorestore\u7684\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_4-mongoexport-mongoimport\u4E0Emongodump-mongorestore\u7684\u5BF9\u6BD4" aria-hidden="true">#</a> 4. mongoexport/mongoimport\u4E0Emongodump/mongorestore\u7684\u5BF9\u6BD4</h2><blockquote><ol><li>mongoexport/mongoimport\u5BFC\u5165/\u5BFC\u51FA\u7684\u662FJSON\u683C\u5F0F\uFF0C\u800Cmongodump/mongorestore\u5BFC\u5165/\u5BFC\u51FA\u7684\u662FBSON\u683C\u5F0F\u3002</li><li>JSON\u53EF\u8BFB\u6027\u5F3A\u4F46\u4F53\u79EF\u8F83\u5927\uFF0CBSON\u5219\u662F\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u4F53\u79EF\u5C0F\u4F46\u5BF9\u4EBA\u7C7B\u51E0\u4E4E\u6CA1\u6709\u53EF\u8BFB\u6027\u3002</li><li>\u5728\u4E00\u4E9Bmongodb\u7248\u672C\u4E4B\u95F4\uFF0CBSON\u683C\u5F0F\u53EF\u80FD\u4F1A\u968F\u7248\u672C\u4E0D\u540C\u800C\u6709\u6240\u4E0D\u540C\uFF0C\u6240\u4EE5\u4E0D\u540C\u7248\u672C\u4E4B\u95F4\u7528mongodump/mongorestore\u53EF\u80FD\u4E0D\u4F1A\u6210\u529F\uFF0C\u5177\u4F53\u8981\u770B\u7248\u672C\u4E4B\u95F4\u7684\u517C\u5BB9\u6027\u3002\u5F53\u65E0\u6CD5\u4F7F\u7528BSON\u8FDB\u884C\u8DE8\u7248\u672C\u7684\u6570\u636E\u8FC1\u79FB\u7684\u65F6\u5019\uFF0C\u4F7F\u7528JSON\u683C\u5F0F\u5373mongoexport/mongoimport\u662F\u4E00\u4E2A\u53EF\u9009\u9879\u3002\u8DE8\u7248\u672C\u7684mongodump/mongorestore\u5E76\u4E0D\u63A8\u8350\uFF0C\u5B9E\u5728\u8981\u505A\u8BF7\u5148\u68C0\u67E5\u6587\u6863\u770B\u4E24\u4E2A\u7248\u672C\u662F\u5426\u517C\u5BB9\uFF08\u5927\u90E8\u5206\u65F6\u5019\u662F\u7684\uFF09\u3002</li><li>JSON\u867D\u7136\u5177\u6709\u8F83\u597D\u7684\u8DE8\u7248\u672C\u901A\u7528\u6027\uFF0C\u4F46\u5176\u53EA\u4FDD\u7559\u4E86\u6570\u636E\u90E8\u5206\uFF0C\u4E0D\u4FDD\u7559\u7D22\u5F15\uFF0C\u8D26\u6237\u7B49\u5176\u4ED6\u57FA\u7840\u4FE1\u606F\u3002\u4F7F\u7528\u65F6\u5E94\u8BE5\u6CE8\u610F\u3002</li></ol></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 30);
const _hoisted_31 = {
  href: "https://www.cnblogs.com/dbabd/p/13259147.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createTextVNode("MongoDB \u903B\u8F91\u8FD8\u539F\u5DE5\u5177mongorestore ");
const _hoisted_33 = {
  href: "https://blog.csdn.net/qq_16313365/article/details/56494522",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createTextVNode("MongoDB\u5B66\u4E60\uFF08\u516D\uFF09\u6570\u636E\u5E93\u7684\u5907\u4EFD\u3001\u8FD8\u539F\u3001\u5BFC\u5165\u53CA\u5BFC\u51FA");
const _hoisted_35 = {
  href: "https://segmentfault.com/a/1190000012330284",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createTextVNode("Docker MongoDB \u6570\u636E\u5E93\u5907\u4EFD \u5E76\u590D\u5236\u5230\u5BBF\u4E3B \u6062\u590D");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_31, [
        _hoisted_32,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_33, [
        _hoisted_34,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_35, [
        _hoisted_36,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var MongoDB________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MongoDB\u6570\u636E\u5907\u4EFD\u4E0E\u8FD8\u539F.html.vue"]]);
export { MongoDB________html as default };
