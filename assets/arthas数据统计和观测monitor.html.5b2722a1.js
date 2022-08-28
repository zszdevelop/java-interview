import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as o,a as e,b as r,d as a,e as i,r as d}from"./app.70ab84e4.js";const c={},h=e("h1",{id:"arthas\u6570\u636E\u7EDF\u8BA1\u548C\u89C2\u6D4B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#arthas\u6570\u636E\u7EDF\u8BA1\u548C\u89C2\u6D4B","aria-hidden":"true"},"#"),a(" arthas\u6570\u636E\u7EDF\u8BA1\u548C\u89C2\u6D4B")],-1),l=a("\u5B98\u65B9\u6587\u6863\u5199\u5F97\u633A\u597D\uFF0C\u76F4\u63A5\u67E5\u770B"),p={href:"https://arthas.gitee.io/advanced-use.html#as-sh-arthas-boot",target:"_blank",rel:"noopener noreferrer"},_=a("\u5B98\u65B9\u6587\u6863"),u=e("h1",{id:"monitor-watch-trace",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#monitor-watch-trace","aria-hidden":"true"},"#"),a(" monitor/watch/trace")],-1),b=e("blockquote",null,[e("p",null,[a("\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E9B\u547D\u4EE4\uFF0C\u90FD\u901A\u8FC7\u5B57\u8282\u7801\u589E\u5F3A\u6280\u672F\u6765\u5B9E\u73B0\u7684\uFF0C\u4F1A\u5728\u6307\u5B9A\u7C7B\u7684\u65B9\u6CD5\u4E2D\u63D2\u5165\u4E00\u4E9B\u5207\u9762\u6765\u5B9E\u73B0\u6570\u636E\u7EDF\u8BA1\u548C\u89C2\u6D4B\uFF0C\u56E0\u6B64\u5728\u7EBF\u4E0A\u3001\u9884\u53D1\u4F7F\u7528\u65F6\uFF0C\u8BF7\u5C3D\u91CF\u660E\u786E\u9700\u8981\u89C2\u6D4B\u7684\u7C7B\u3001\u65B9\u6CD5\u4EE5\u53CA\u6761\u4EF6\uFF0C\u8BCA\u65AD\u7ED3\u675F\u8981\u6267\u884C "),e("code",null,"stop"),a(" \u6216\u5C06\u589E\u5F3A\u8FC7\u7684\u7C7B\u6267\u884C "),e("code",null,"reset"),a(" \u547D\u4EE4\u3002")])],-1),m=e("h2",{id:"_1-\u6982\u8FF0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u6982\u8FF0","aria-hidden":"true"},"#"),a(" 1. \u6982\u8FF0")],-1),g={href:"https://arthas.gitee.io/monitor.html",target:"_blank",rel:"noopener noreferrer"},v=a("monitor"),f=a("\u2014\u2014\u65B9\u6CD5\u6267\u884C\u76D1\u63A7"),k={href:"https://arthas.gitee.io/watch.html",target:"_blank",rel:"noopener noreferrer"},x=a("watch"),y=a("\u2014\u2014\u65B9\u6CD5\u6267\u884C\u6570\u636E\u89C2\u6D4B"),z={href:"https://arthas.gitee.io/trace.html",target:"_blank",rel:"noopener noreferrer"},w=a("trace"),q=a("\u2014\u2014\u65B9\u6CD5\u5185\u90E8\u8C03\u7528\u8DEF\u5F84\uFF0C\u5E76\u8F93\u51FA\u65B9\u6CD5\u8DEF\u5F84\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u4E0A\u8017\u65F6"),L={href:"https://arthas.gitee.io/stack.html",target:"_blank",rel:"noopener noreferrer"},S=a("stack"),C=a("\u2014\u2014\u8F93\u51FA\u5F53\u524D\u65B9\u6CD5\u88AB\u8C03\u7528\u7684\u8C03\u7528\u8DEF\u5F84"),j={href:"https://arthas.gitee.io/tt.html",target:"_blank",rel:"noopener noreferrer"},N=a("tt"),T=a("\u2014\u2014\u65B9\u6CD5\u6267\u884C\u6570\u636E\u7684\u65F6\u7A7A\u96A7\u9053\uFF0C\u8BB0\u5F55\u4E0B\u6307\u5B9A\u65B9\u6CD5\u6BCF\u6B21\u8C03\u7528\u7684\u5165\u53C2\u548C\u8FD4\u56DE\u4FE1\u606F\uFF0C\u5E76\u80FD\u5BF9\u8FD9\u4E9B\u4E0D\u540C\u7684\u65F6\u95F4\u4E0B\u8C03\u7528\u8FDB\u884C\u89C2\u6D4B"),V=i(`<h2 id="_2-monitor" tabindex="-1"><a class="header-anchor" href="#_2-monitor" aria-hidden="true">#</a> 2. monitor</h2><h3 id="_2-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7B80\u4ECB" aria-hidden="true">#</a> 2.1 \u7B80\u4ECB</h3><blockquote><p>\u65B9\u6CD5\u6267\u884C\u76D1\u63A7</p></blockquote><p>\u5BF9\u5339\u914D <code>class-pattern</code>\uFF0F<code>method-pattern</code>\uFF0F<code>condition-express</code>\u7684\u7C7B\u3001\u65B9\u6CD5\u7684\u8C03\u7528\u8FDB\u884C\u76D1\u63A7\u3002</p><p><code>monitor</code> \u547D\u4EE4\u662F\u4E00\u4E2A\u975E\u5B9E\u65F6\u8FD4\u56DE\u547D\u4EE4.</p><p>\u5B9E\u65F6\u8FD4\u56DE\u547D\u4EE4\u662F\u8F93\u5165\u4E4B\u540E\u7ACB\u5373\u8FD4\u56DE\uFF0C\u800C\u975E\u5B9E\u65F6\u8FD4\u56DE\u7684\u547D\u4EE4\uFF0C\u5219\u662F\u4E0D\u65AD\u7684\u7B49\u5F85\u76EE\u6807 Java \u8FDB\u7A0B\u8FD4\u56DE\u4FE1\u606F\uFF0C\u76F4\u5230\u7528\u6237\u8F93\u5165 <code>Ctrl+C</code> \u4E3A\u6B62\u3002</p><p>\u670D\u52A1\u7AEF\u662F\u4EE5\u4EFB\u52A1\u7684\u5F62\u5F0F\u5728\u540E\u53F0\u8DD1\u4EFB\u52A1\uFF0C\u690D\u5165\u7684\u4EE3\u7801\u968F\u7740\u4EFB\u52A1\u7684\u4E2D\u6B62\u800C\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u6240\u4EE5\u4EFB\u52A1\u5173\u95ED\u540E\uFF0C\u4E0D\u4F1A\u5BF9\u539F\u6709\u6027\u80FD\u4EA7\u751F\u592A\u5927\u5F71\u54CD\uFF0C\u800C\u4E14\u539F\u5219\u4E0A\uFF0C\u4EFB\u4F55Arthas\u547D\u4EE4\u4E0D\u4F1A\u5F15\u8D77\u539F\u6709\u4E1A\u52A1\u903B\u8F91\u7684\u6539\u53D8\u3002</p><h3 id="_2-2-\u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-2-\u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E" aria-hidden="true">#</a> 2.2 \u76D1\u63A7\u7684\u7EF4\u5EA6\u8BF4\u660E</h3><table><thead><tr><th>\u76D1\u63A7\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>timestamp</td><td>\u65F6\u95F4\u6233</td></tr><tr><td>class</td><td>Java\u7C7B</td></tr><tr><td>method</td><td>\u65B9\u6CD5\uFF08\u6784\u9020\u65B9\u6CD5\u3001\u666E\u901A\u65B9\u6CD5\uFF09</td></tr><tr><td>total</td><td>\u8C03\u7528\u6B21\u6570</td></tr><tr><td>success</td><td>\u6210\u529F\u6B21\u6570</td></tr><tr><td>fail</td><td>\u5931\u8D25\u6B21\u6570</td></tr><tr><td>rt</td><td>\u5E73\u5747RT</td></tr><tr><td>fail-rate</td><td>\u5931\u8D25\u7387</td></tr></tbody></table><h3 id="_2-3-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6D4B\u8BD5" aria-hidden="true">#</a> 2.3 \u6D4B\u8BD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u76D1\u63A7\u5177\u4F53\u7684\u65B9\u6CD5</span>
monitor -c <span class="token number">5</span> com.ruoyi.web.controller.system.SysLoginController login
<span class="token comment"># \u76D1\u63A7\u6240\u6709\u65B9\u6CD5</span>
monitor -c <span class="token number">5</span> com.ruoyi.web.controller.system.SysLoginController *

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220511102548695.png" alt="image-20220511102548695"></p><h2 id="_3-watch" tabindex="-1"><a class="header-anchor" href="#_3-watch" aria-hidden="true">#</a> 3. watch</h2><h3 id="_3-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7B80\u4ECB" aria-hidden="true">#</a> 3.1 \u7B80\u4ECB</h3><blockquote><p>\u51FD\u6570\u6267\u884C\u6570\u636E\u89C2\u6D4B</p></blockquote><p>\u8BA9\u4F60\u80FD\u65B9\u4FBF\u7684\u89C2\u5BDF\u5230\u6307\u5B9A\u51FD\u6570\u7684\u8C03\u7528\u60C5\u51B5\u3002\u80FD\u89C2\u5BDF\u5230\u7684\u8303\u56F4\u4E3A\uFF1A<code>\u8FD4\u56DE\u503C</code>\u3001<code>\u629B\u51FA\u5F02\u5E38</code>\u3001<code>\u5165\u53C2</code>\uFF0C\u901A\u8FC7\u7F16\u5199 \bOGNL \u8868\u8FBE\u5F0F\u8FDB\u884C\u5BF9\u5E94\u53D8\u91CF\u7684\u67E5\u770B\u3002</p><h3 id="_3-2-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6D4B\u8BD5" aria-hidden="true">#</a> 3.2 \u6D4B\u8BD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> com.ruoyi.web.controller.system.SysLoginController login <span class="token string">&quot;{params,target,returnObj}&quot;</span> -x <span class="token number">2</span> -b -s -n <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220511103825661.png" alt="image-20220511103825661"></p><h2 id="_4-trace" tabindex="-1"><a class="header-anchor" href="#_4-trace" aria-hidden="true">#</a> 4. trace</h2><h3 id="_4-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7B80\u4ECB" aria-hidden="true">#</a> 4.1 \u7B80\u4ECB</h3><blockquote><p>\u65B9\u6CD5\u5185\u90E8\u8C03\u7528\u8DEF\u5F84\uFF0C\u5E76\u8F93\u51FA\u65B9\u6CD5\u8DEF\u5F84\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u4E0A\u8017\u65F6</p></blockquote><p><code>trace</code> \u547D\u4EE4\u80FD\u4E3B\u52A8\u641C\u7D22 <code>class-pattern</code>\uFF0F<code>method-pattern</code> \u5BF9\u5E94\u7684\u65B9\u6CD5\u8C03\u7528\u8DEF\u5F84\uFF0C\u6E32\u67D3\u548C\u7EDF\u8BA1\u6574\u4E2A\u8C03\u7528\u94FE\u8DEF\u4E0A\u7684\u6240\u6709\u6027\u80FD\u5F00\u9500\u548C\u8FFD\u8E2A\u8C03\u7528\u94FE\u8DEF\u3002</p><h3 id="_4-2-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6D4B\u8BD5" aria-hidden="true">#</a> 4.2 \u6D4B\u8BD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace com.ruoyi.web.controller.system.SysLoginController login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220511104117102.png" alt="image-20220511104117102"></p><h2 id="_5-stack" tabindex="-1"><a class="header-anchor" href="#_5-stack" aria-hidden="true">#</a> 5. stack</h2><h3 id="_5-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_5-1-\u7B80\u4ECB" aria-hidden="true">#</a> 5.1 \u7B80\u4ECB</h3><blockquote><p>\u8F93\u51FA\u5F53\u524D\u65B9\u6CD5\u88AB\u8C03\u7528\u7684\u8C03\u7528\u8DEF\u5F84</p></blockquote><p>\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u90FD\u77E5\u9053\u4E00\u4E2A\u65B9\u6CD5\u88AB\u6267\u884C\uFF0C\u4F46\u8FD9\u4E2A\u65B9\u6CD5\u88AB\u6267\u884C\u7684\u8DEF\u5F84\u975E\u5E38\u591A\uFF0C\u6216\u8005\u4F60\u6839\u672C\u5C31\u4E0D\u77E5\u9053\u8FD9\u4E2A\u65B9\u6CD5\u662F\u4ECE\u90A3\u91CC\u88AB\u6267\u884C\u4E86\uFF0C\u6B64\u65F6\u4F60\u9700\u8981\u7684\u662F stack \u547D\u4EE4\u3002</p><h3 id="_5-2-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_5-2-\u6D4B\u8BD5" aria-hidden="true">#</a> 5.2 \u6D4B\u8BD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace com.ruoyi.framework.web.service.SysLoginService login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220511104425855.png" alt="image-20220511104425855"></p><blockquote><p>\u65B9\u6CD5\u6267\u884C\u6570\u636E\u7684\u65F6\u7A7A\u96A7\u9053\uFF0C\u8BB0\u5F55\u4E0B\u6307\u5B9A\u65B9\u6CD5\u6BCF\u6B21\u8C03\u7528\u7684\u5165\u53C2\u548C\u8FD4\u56DE\u4FE1\u606F\uFF0C\u5E76\u80FD\u5BF9\u8FD9\u4E9B\u4E0D\u540C\u7684\u65F6\u95F4\u4E0B\u8C03\u7528\u8FDB\u884C\u89C2\u6D4B</p></blockquote><p><code>watch</code> \u867D\u7136\u5F88\u65B9\u4FBF\u548C\u7075\u6D3B\uFF0C\u4F46\u9700\u8981\u63D0\u524D\u60F3\u6E05\u695A\u89C2\u5BDF\u8868\u8FBE\u5F0F\u7684\u62FC\u5199\uFF0C\u8FD9\u5BF9\u6392\u67E5\u95EE\u9898\u800C\u8A00\u8981\u6C42\u592A\u9AD8\uFF0C\u56E0\u4E3A\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u5E76\u4E0D\u6E05\u695A\u95EE\u9898\u51FA\u81EA\u4E8E\u4F55\u65B9\uFF0C\u53EA\u80FD\u9760\u86DB\u4E1D\u9A6C\u8FF9\u8FDB\u884C\u731C\u6D4B\u3002</p><h2 id="_6-tt-\u6267\u884C\u6570\u636E\u7684\u65F6\u7A7A\u96A7\u9053" tabindex="-1"><a class="header-anchor" href="#_6-tt-\u6267\u884C\u6570\u636E\u7684\u65F6\u7A7A\u96A7\u9053" aria-hidden="true">#</a> 6. tt \u6267\u884C\u6570\u636E\u7684\u65F6\u7A7A\u96A7\u9053</h2><h3 id="_6-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_6-1-\u7B80\u4ECB" aria-hidden="true">#</a> 6.1 \u7B80\u4ECB</h3><blockquote><p>\u65B9\u6CD5\u6267\u884C\u6570\u636E\u7684\u65F6\u7A7A\u96A7\u9053\uFF0C\u8BB0\u5F55\u4E0B\u6307\u5B9A\u65B9\u6CD5\u6BCF\u6B21\u8C03\u7528\u7684\u5165\u53C2\u548C\u8FD4\u56DE\u4FE1\u606F\uFF0C\u5E76\u80FD\u5BF9\u8FD9\u4E9B\u4E0D\u540C\u7684\u65F6\u95F4\u4E0B\u8C03\u7528\u8FDB\u884C\u89C2\u6D4B</p></blockquote><p><code>watch</code> \u867D\u7136\u5F88\u65B9\u4FBF\u548C\u7075\u6D3B\uFF0C\u4F46\u9700\u8981\u63D0\u524D\u60F3\u6E05\u695A\u89C2\u5BDF\u8868\u8FBE\u5F0F\u7684\u62FC\u5199\uFF0C\u8FD9\u5BF9\u6392\u67E5\u95EE\u9898\u800C\u8A00\u8981\u6C42\u592A\u9AD8\uFF0C\u56E0\u4E3A\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u5E76\u4E0D\u6E05\u695A\u95EE\u9898\u51FA\u81EA\u4E8E\u4F55\u65B9\uFF0C\u53EA\u80FD\u9760\u86DB\u4E1D\u9A6C\u8FF9\u8FDB\u884C\u731C\u6D4B\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u80FD\u8BB0\u5F55\u4E0B\u5F53\u65F6\u65B9\u6CD5\u8C03\u7528\u7684\u6240\u6709\u5165\u53C2\u548C\u8FD4\u56DE\u503C\u3001\u629B\u51FA\u7684\u5F02\u5E38\u4F1A\u5BF9\u6574\u4E2A\u95EE\u9898\u7684\u601D\u8003\u4E0E\u5224\u65AD\u975E\u5E38\u6709\u5E2E\u52A9\u3002</p><p>\u4E8E\u662F\u4E4E\uFF0CTimeTunnel \u547D\u4EE4\u5C31\u8BDE\u751F\u4E86\u3002</p><h3 id="_6-2-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_6-2-\u6D4B\u8BD5" aria-hidden="true">#</a> 6.2 \u6D4B\u8BD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tt -t com.ruoyi.framework.web.service.SysLoginService login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220511110112554.png" alt="image-20220511110112554"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,45),B={href:"https://arthas.gitee.io/advanced-use.html#as-sh-arthas-boot",target:"_blank",rel:"noopener noreferrer"},E=a("\u5B98\u65B9\u6587\u6863");function I(J,O){const t=d("ExternalLinkIcon");return n(),o("div",null,[h,e("blockquote",null,[e("p",null,[l,e("a",p,[_,r(t)])])]),u,b,m,e("ul",null,[e("li",null,[e("a",g,[v,r(t)]),f]),e("li",null,[e("a",k,[x,r(t)]),y]),e("li",null,[e("a",z,[w,r(t)]),q]),e("li",null,[e("a",L,[S,r(t)]),C]),e("li",null,[e("a",j,[N,r(t)]),T])]),V,e("p",null,[e("a",B,[E,r(t)])])])}var R=s(c,[["render",I],["__file","arthas\u6570\u636E\u7EDF\u8BA1\u548C\u89C2\u6D4Bmonitor.html.vue"]]);export{R as default};
