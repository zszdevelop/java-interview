import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as r,a as e,b as i,e as t,d as o,r as c}from"./app.942cb21b.js";const p={},l=t(`<h1 id="git-merge\u7684\u4E09\u79CD\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#git-merge\u7684\u4E09\u79CD\u64CD\u4F5C" aria-hidden="true">#</a> git merge\u7684\u4E09\u79CD\u64CD\u4F5C</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>git merge\u7684\u4E09\u79CD\u64CD\u4F5Cmerge, squash merge, \u548Crebase merge</p><p>\u4E3E\u4F8B\u6765\u8BF4\uFF1A \u5047\u8BBE\u5728master\u5206\u652F\u7684B\u70B9\u62C9\u51FA\u4E00\u4E2A\u65B0\u7684\u5206\u652Fdev\uFF0C\u7ECF\u8FC7\u4E00\u6BB5\u65F6\u95F4\u5F00\u53D1\u540E\uFF1A</p><ul><li>master\u5206\u652F\u4E0A\u6709\u4E24\u4E2A\u65B0\u7684\u63D0\u4EA4M1\u548CM2</li><li>dev\u5206\u652F\u4E0A\u6709\u4E09\u4E2A\u63D0\u4EA4D1\uFF0CD2\uFF0C\u548CD3</li></ul><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210215256075.png" alt="image-20211210215256075" loading="lazy"></p><p>\u73B0\u5728\u6211\u4EEC\u5B8C\u6210\u4E86dev\u5206\u652F\u7684\u5F00\u53D1\u6D4B\u8BD5\u5DE5\u4F5C\uFF0C\u9700\u8981\u628Adev\u5206\u652F\u5408\u5E76\u56DEmaster\u5206\u652F\u3002</p><h2 id="_2-merge-\u7684\u4E09\u79CD\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-merge-\u7684\u4E09\u79CD\u64CD\u4F5C" aria-hidden="true">#</a> 2. merge \u7684\u4E09\u79CD\u64CD\u4F5C</h2><h3 id="_2-1-merge" tabindex="-1"><a class="header-anchor" href="#_2-1-merge" aria-hidden="true">#</a> 2.1 merge</h3><p>\u8FD9\u662F\u6700\u57FA\u672C\u7684merge\uFF0C\u5C31\u662F\u628A\u63D0\u4EA4\u5386\u53F2\u539F\u5C01\u4E0D\u52A8\u7684\u62F7\u8D1D\u8FC7\u6765\uFF0C\u5305\u542B\u5B8C\u6574\u7684\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210215426765.png" alt="image-20211210215426765" loading="lazy"></p><p><strong>\u6B64\u65F6\u8FD8\u4F1A\u751F\u4EA7\u4E00\u4E2Amerge commit (D4&#39;)</strong>\uFF0C\u8FD9\u4E2Amerge commit\u4E0D\u5305\u542B\u4EFB\u4F55\u4EE3\u7801\u6539\u52A8\uFF0C\u800C\u5305\u542B\u5728dev\u5206\u652F\u4E0A\u7684\u51E0\u4E2Acommit\u5217\u8868(D1, D2\u548CD3)\u3002\u67E5\u770Bgit\u7684\u63D0\u4EA4\u5386\u53F2(git log)\u53EF\u4EE5\u770B\u5230\u6240\u6709\u7684\u8FD9\u4E9B\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55\u3002</p><h3 id="_2-2-squash-merge" tabindex="-1"><a class="header-anchor" href="#_2-2-squash-merge" aria-hidden="true">#</a> 2.2 squash merge</h3><p>\u6839\u636E\u5B57\u9762\u610F\u601D\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u5B8C\u6210\u7684\u662F\u538B\u7F29\u7684\u63D0\u4EA4\uFF1B\u89E3\u51B3\u7684\u662F\u4EC0\u4E48\u95EE\u9898\u5462\uFF0C\u7531\u4E8E\u5728dev\u5206\u652F\u4E0A\u6267\u884C\u7684\u662F\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u6709\u4E00\u4E9B\u5F88\u5C0F\u7684\u63D0\u4EA4\uFF0C\u6216\u8005\u662F\u7EA0\u6B63\u524D\u9762\u7684\u9519\u8BEF\u7684\u63D0\u4EA4\uFF0C\u5BF9\u4E8E\u8FD9\u7C7B\u63D0\u4EA4\u5BF9\u6574\u4E2A\u5DE5\u7A0B\u6765\u8BF4\u4E0D\u9700\u8981\u5355\u72EC\u663E\u793A\u51FA\u6765\u4E00\u6B21\u63D0\u4EA4\uFF0C\u4E0D\u7136\u5BFC\u81F4\u9879\u76EE\u7684\u63D0\u4EA4\u5386\u53F2\u8FC7\u4E8E\u590D\u6742\uFF1B\u6240\u4EE5\u57FA\u4E8E\u8FD9\u79CD\u539F\u56E0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628Adev\u4E0A\u7684\u6240\u6709\u63D0\u4EA4\u90FD\u5408\u5E76\u6210\u4E00\u4E2A\u63D0\u4EA4\uFF1B\u7136\u540E\u63D0\u4EA4\u5230\u4E3B\u5E72\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">git</span> checkout master
 <span class="token function">git</span> merge <span class="token parameter variable">--squash</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210215937039.png" alt="image-20211210215937039" loading="lazy"></p><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u628AD1\uFF0CD2\u548CD3\u7684\u6539\u52A8\u5408\u5E76\u6210\u4E86\u4E00\u4E2AD\u3002</p><p>\u6CE8\u610F\uFF0Csquash merge\u5E76\u4E0D\u4F1A\u66FF\u4F60\u4EA7\u751F\u63D0\u4EA4\uFF0C\u5B83\u53EA\u662F\u628A\u6240\u6709\u7684\u6539\u52A8\u5408\u5E76\uFF0C\u7136\u540E\u653E\u5728\u672C\u5730\u6587\u4EF6\uFF0C\u9700\u8981\u4F60\u518D\u6B21\u624B\u52A8\u6267\u884Cgit commit\u64CD\u4F5C\uFF1B\u6B64\u65F6\u53C8\u8981\u6CE8\u610F\u4E86\uFF0C\u56E0\u4E3A\u4F60\u8981\u4F60\u624B\u52A8commit\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8FD9\u4E2Acommit\u662F\u4F60\u4EA7\u751F\u7684\uFF0C\u4E0D\u662F\u6709\u539F\u6765dev\u5206\u652F\u4E0A\u7684\u5F00\u53D1\u4EBA\u5458\u4EA7\u751F\u7684\uFF0C\u63D0\u4EA4\u8005\u672C\u8EAB\u53D1\u751F\u4E86\u53D8\u5316\u3002\u4E5F\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3\uFF0C\u5C31\u662F\u4F60\u628Adev\u5206\u652F\u4E0A\u7684\u6240\u6709\u4EE3\u7801\u6539\u52A8\u4E00\u6B21\u6027porting\u5230master\u5206\u652F\u4E0A\u800C\u5DF2\u3002</p><h3 id="_2-3-rebase-merge" tabindex="-1"><a class="header-anchor" href="#_2-3-rebase-merge" aria-hidden="true">#</a> 2.3 rebase merge</h3><p>\u7531\u4E8Esquash merge\u4F1A\u53D8\u66F4\u63D0\u4EA4\u8005\u4F5C\u8005\u4FE1\u606F\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F88\u5927\u7684\u95EE\u9898\uFF0C\u540E\u671F\u95EE\u9898\u8FFD\u6EAF\u4E0D\u597D\u5904\u7406(\u5F53\u7136\u4E5F\u53EF\u4EE5\u7531\u5206\u652Fdev\u7684\u6240\u6709\u8005\u6765\u6267\u884Csquash merge\u64CD\u4F5C\uFF0C\u4EE5\u89E3\u51B3\u90E8\u5206\u95EE\u9898)\uFF0Crebase merge\u53EF\u4EE5\u4FDD\u7559\u63D0\u4EA4\u7684\u4F5C\u8005\u4FE1\u606F\uFF0C\u540C\u65F6\u53EF\u4EE5\u5408\u5E76commit\u5386\u53F2\uFF0C\u5B8C\u7F8E\u7684\u89E3\u51B3\u4E86\u4E0A\u9762\u7684\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">git</span> checkout dev
 <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> master
 <span class="token function">git</span> checkout master
 <span class="token function">git</span> merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rebase merge\u5206\u4E24\u6B65\u5B8C\u6210\uFF1A \u7B2C\u4E00\u6B65\uFF1A\u6267\u884Crebase\u64CD\u4F5C\uFF0C\u7ED3\u679C\u662F\u770B\u8D77\u6765dev\u5206\u652F\u662F\u4ECEM2\u62C9\u51FA\u6765\u7684\uFF0C\u800C\u4E0D\u662F\u4ECEB\u62C9\u51FA\u6765\u7684\uFF0C\u7136\u540E\u4F7F\u7528-i\u53C2\u6570\u624B\u52A8\u8C03\u6574commit\u5386\u53F2\uFF0C\u662F\u5426\u5408\u5E76\u5982\u4F55\u5408\u5E76\u3002\u4F8B\u5982\u4E0Brebase -i\u547D\u4EE4\u4F1A\u5F39\u51FA\u6587\u672C\u7F16\u8F91\u6846\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#1</span>
pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#2</span>
pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u8BBED2\u662F\u5BF9D1\u7684\u4E00\u4E2A\u62FC\u5199\u9519\u8BEF\u4FEE\u6B63\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4E0D\u9700\u8981\u663E\u5F0F\u7684\u6307\u51FA\u6765\uFF0C\u6211\u4EEC\u628AD2\u4FEE\u6539\u4E3Afixup\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#1</span>
fixup <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#2</span>
pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rebase\u4E4B\u540E\u7684\u72B6\u6001\u53D8\u4E3A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210220238914.png" alt="image-20211210220238914" loading="lazy"></p><p>D1&#39;\u662FD1\u548CD2\u7684\u5408\u5E76\u3002</p><p>\u7B2C\u4E8C\u6B65\uFF1A\u518D\u6267\u884Cmerge\u64CD\u4F5C\uFF0C\u628Adev\u5206\u652F\u5408\u5E76\u5230master\u5206\u652F\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210220256208.png" alt="image-20211210220256208" loading="lazy"></p><p>\u6CE8\u610F\uFF1A\u5728\u6267\u884Crebase\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u51FA\u73B0\u51B2\u7A81\u7684\u95EE\u9898\uFF0C\u6B64\u65F6\u9700\u8981\u624B\u5DE5\u89E3\u51B3\u51B2\u7A81\u7684\u95EE\u9898\uFF0C\u7136\u540E\u6267\u884C(git add)\u547D\u4EE4\uFF1B\u6240\u6709\u51B2\u7A81\u89E3\u51B3\u5B8C\u4E4B\u540E\uFF0C\u8FD9\u65F6\u4E0D\u9700\u8981\u6267\u884C(git commit)\u547D\u4EE4\uFF0C\u800C\u662F\u8FD0\u884C(git rebase --continue)\u547D\u4EE4\uFF0C\u4E00\u76F4\u5230rebase\u5B8C\u6210\uFF1B\u5982\u679C\u4E2D\u9014\u60F3\u653E\u5F03rebase\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8FD0\u884C(git rebase --abort)\u547D\u4EE4\u56DE\u5230rebase\u4E4B\u524D\u7684\u72B6\u6001\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,34),m={href:"https://www.jianshu.com/p/ff1877c5864e",target:"_blank",rel:"noopener noreferrer"},d=o("git merge\u7684\u4E09\u79CD\u64CD\u4F5Cmerge, squash merge, \u548Crebase merge");function g(h,u){const s=c("ExternalLinkIcon");return n(),r("div",null,[l,e("p",null,[e("a",m,[d,i(s)])])])}const k=a(p,[["render",g],["__file","git-x-merge.html.vue"]]);export{k as default};
