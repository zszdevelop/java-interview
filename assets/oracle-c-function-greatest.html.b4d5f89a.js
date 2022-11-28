import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.5ad9c6e6.js";const t={},l=e(`<h1 id="oracle\u4E2Dgreatest-least\u51FD\u6570\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#oracle\u4E2Dgreatest-least\u51FD\u6570\u7684\u4F7F\u7528" aria-hidden="true">#</a> Oracle\u4E2Dgreatest()/least\u51FD\u6570\u7684\u4F7F\u7528</h1><h2 id="_1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-\u793A\u4F8B" aria-hidden="true">#</a> 1. \u793A\u4F8B</h2><p>\u5DF2\u77E5\u8868\u5982\u4E0B</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tb<span class="token punctuation">;</span>
 
        ID      CHINESE       MATH    ENGLISH
    <span class="token comment">---------- ----------          ----------     ----------</span>
      <span class="token number">1001</span>         <span class="token number">89</span>                 <span class="token number">98</span>            <span class="token number">87</span>
      <span class="token number">1002</span>         <span class="token number">81</span>                 <span class="token number">87</span>           <span class="token number">79</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u8981\u5F97\u5230\u5982\u4E0B\u7684\u7ED3\u679C</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>  ID      CHINESE  MATH ENGLISH  MAX       MIN
     <span class="token comment">---------- ----------   ----------   ----------  ----------  ----------</span>
      <span class="token number">1001</span>       <span class="token number">89</span>             <span class="token number">98</span>             <span class="token number">87</span>          <span class="token number">98</span>          <span class="token number">87</span>
      <span class="token number">1002</span>       <span class="token number">81</span>             <span class="token number">87</span>             <span class="token number">79</span>          <span class="token number">87</span>          <span class="token number">79</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u600E\u4E48\u89E3\u51B3\uFF1F</p><p>\u9996\u5148\u81EA\u7136\u60F3\u5230MAX \u548C MIN \u51FD\u6570\uFF0C\u4F46\u8FD9\u4E24\u4E2A\u662F\u805A\u96C6\u51FD\u6570\uFF0C\u662F\u8981\u4F5C\u7528\u5728\u540C\u4E00\u5217\u4E0A\u9762\u7684\uFF0C\u800C\u73B0\u5728\u8981\u5F97\u5230\u7684MAX\u548C MIN \u7684\u503C\u786E\u5B9E\u4F5C\u7528\u4E0E\u6BCF\u4E00\u5217\u4E0A\u9762\u7684\uFF0C\u5982\u679C\u8981\u501F\u52A9\u4E8EMAX()\u548CMIN()\uFF0C\u8FD8\u9700\u8981\u5BF9\u539F\u8868\u7684\u6570\u636E\u7ED3\u6784\u8FDB\u884C\u884C\u8F6C\u5217\u5904\u7406\uFF0C\u590D\u6742\u5EA6\u4E0A\u5347</p><h2 id="_2-\u4F7F\u7528greatest-least\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528greatest-least\u51FD\u6570" aria-hidden="true">#</a> 2. \u4F7F\u7528greatest()/least\u51FD\u6570</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> id<span class="token punctuation">,</span> chinese<span class="token punctuation">,</span> math<span class="token punctuation">,</span> english<span class="token punctuation">,</span>
            greatest<span class="token punctuation">(</span>chinese<span class="token punctuation">,</span> math<span class="token punctuation">,</span> english<span class="token punctuation">)</span> max<span class="token punctuation">,</span>
            least<span class="token punctuation">(</span>chinese<span class="token punctuation">,</span> math<span class="token punctuation">,</span> english<span class="token punctuation">)</span> min
     <span class="token keyword">FROM</span>   tb<span class="token punctuation">;</span>
 
        ID     CHINESE MATH  ENGLISH   MAX        MIN
    <span class="token comment">---------- ----------   ----------   ----------   ---------- ----------</span>
      <span class="token number">1001</span>         <span class="token number">89</span>         <span class="token number">98</span>             <span class="token number">87</span>           <span class="token number">98</span>          <span class="token number">87</span>
      <span class="token number">1002</span>         <span class="token number">81</span>         <span class="token number">87</span>             <span class="token number">79</span>           <span class="token number">87</span>          <span class="token number">79</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[l];function c(i,o){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","oracle-c-function-greatest.html.vue"]]);export{d as default};
