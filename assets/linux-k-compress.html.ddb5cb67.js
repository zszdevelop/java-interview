import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,e}from"./app.942cb21b.js";const i={},r=e(`<h1 id="linux\u6587\u4EF6\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#linux\u6587\u4EF6\u89E3\u538B" aria-hidden="true">#</a> Linux\u6587\u4EF6\u89E3\u538B</h1><h2 id="_1-tar\u547D\u4EE4\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_1-tar\u547D\u4EE4\u8BE6\u89E3" aria-hidden="true">#</a> 1. tar\u547D\u4EE4\u8BE6\u89E3</h2><h3 id="_1-1-\u4E94\u4E2A\u72EC\u7ACB\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E94\u4E2A\u72EC\u7ACB\u547D\u4EE4" aria-hidden="true">#</a> 1.1 \u4E94\u4E2A\u72EC\u7ACB\u547D\u4EE4</h3><p>\u8FD9\u4E94\u4E2A\u662F\u72EC\u7ACB\u7684\u547D\u4EE4\uFF0C\u538B\u7F29\u89E3\u538B\u90FD\u8981<strong>\u7528\u5230\u5176\u4E2D\u4E00\u4E2A</strong>\uFF0C<strong>\u53EF\u4EE5\u548C\u522B\u7684\u547D\u4EE4\u8FDE\u7528\u4F46\u53EA\u80FD\u7528\u5176\u4E2D\u4E00\u4E2A</strong>\u3002</p><p>-c: \u5EFA\u7ACB\u538B\u7F29\u6863\u6848</p><p>-x\uFF1A\u89E3\u538B</p><p>-t\uFF1A\u67E5\u770B\u5185\u5BB9</p><p>-r\uFF1A\u5411\u538B\u7F29\u5F52\u6863\u6587\u4EF6\u672B\u5C3E\u8FFD\u52A0\u6587\u4EF6</p><p>-u\uFF1A\u66F4\u65B0\u539F\u538B\u7F29\u5305\u4E2D\u7684\u6587\u4EF6</p><h3 id="_1-2-\u53EF\u9009\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-2-\u53EF\u9009\u547D\u4EE4" aria-hidden="true">#</a> 1.2 \u53EF\u9009\u547D\u4EE4</h3><p>\u4E0B\u9762\u7684\u53C2\u6570\u662F\u6839\u636E\u9700\u8981\u5728\u538B\u7F29\u6216\u89E3\u538B\u6863\u6848\u65F6\u53EF\u9009\u7684\u3002</p><p>-z\uFF1A\u6709gzip\u5C5E\u6027\u7684</p><p>-j\uFF1A\u6709bz2\u5C5E\u6027\u7684</p><p>-Z\uFF1A\u6709compress\u5C5E\u6027\u7684</p><p>-v\uFF1A\u663E\u793A\u6240\u6709\u8FC7\u7A0B</p><p>-O\uFF1A\u5C06\u6587\u4EF6\u89E3\u5F00\u5230\u6807\u51C6\u8F93\u51FA</p><h3 id="_1-3-\u6700\u540E\u4E00\u4E2A\u5FC5\u987B\u53C2\u6570-f" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6700\u540E\u4E00\u4E2A\u5FC5\u987B\u53C2\u6570-f" aria-hidden="true">#</a> 1.3 \u6700\u540E\u4E00\u4E2A\u5FC5\u987B\u53C2\u6570-f</h3><p>-f: \u4F7F\u7528\u6863\u6848\u540D\u5B57\uFF0C\u5207\u8BB0\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\uFF0C\u540E\u9762\u53EA\u80FD\u63A5\u6863\u6848\u540D\u3002</p><h2 id="_2-\u5E38\u7528\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u7528\u89E3\u538B" aria-hidden="true">#</a> 2. \u5E38\u7528\u89E3\u538B</h2><p><strong>\u538B\u7F29</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> \u2013cvf jpg.tar *.jpg       // \u5C06\u76EE\u5F55\u91CC\u6240\u6709jpg\u6587\u4EF6\u6253\u5305\u6210 tar.jpg 
<span class="token function">tar</span> \u2013czf jpg.tar.gz *.jpg    // \u5C06\u76EE\u5F55\u91CC\u6240\u6709jpg\u6587\u4EF6\u6253\u5305\u6210 jpg.tar \u540E\uFF0C\u5E76\u4E14\u5C06\u5176\u7528 <span class="token function">gzip</span> \u538B\u7F29\uFF0C\u751F\u6210\u4E00\u4E2A <span class="token function">gzip</span> \u538B\u7F29\u8FC7\u7684\u5305\uFF0C\u547D\u540D\u4E3A jpg.tar.gz 
<span class="token function">tar</span> \u2013cjf jpg.tar.bz2 *.jpg   // \u5C06\u76EE\u5F55\u91CC\u6240\u6709jpg\u6587\u4EF6\u6253\u5305\u6210 jpg.tar \u540E\uFF0C\u5E76\u4E14\u5C06\u5176\u7528 <span class="token function">bzip2</span> \u538B\u7F29\uFF0C\u751F\u6210\u4E00\u4E2A <span class="token function">bzip2</span> \u538B\u7F29\u8FC7\u7684\u5305\uFF0C\u547D\u540D\u4E3Ajpg.tar.bz2 
<span class="token function">tar</span> \u2013cZf jpg.tar.Z *.jpg     // \u5C06\u76EE\u5F55\u91CC\u6240\u6709 jpg \u6587\u4EF6\u6253\u5305\u6210 jpg.tar \u540E\uFF0C\u5E76\u4E14\u5C06\u5176\u7528 compress \u538B\u7F29\uFF0C\u751F\u6210\u4E00\u4E2A umcompress \u538B\u7F29\u8FC7\u7684\u5305\uFF0C\u547D\u540D\u4E3Ajpg.tar.Z 
<span class="token function">rar</span> a jpg.rar *.jpg          // rar\u683C\u5F0F\u7684\u538B\u7F29\uFF0C\u9700\u8981\u5148\u4E0B\u8F7D <span class="token function">rar</span> <span class="token keyword">for</span> linux 
<span class="token function">zip</span> jpg.zip *.jpg            // zip\u683C\u5F0F\u7684\u538B\u7F29\uFF0C\u9700\u8981\u5148\u4E0B\u8F7D <span class="token function">zip</span> <span class="token keyword">for</span> linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u538B</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> \u2013xvf file.tar         // \u89E3\u538B <span class="token function">tar</span> \u5305 
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> file.tar.gz     // \u89E3\u538B tar.gz 
<span class="token function">tar</span> <span class="token parameter variable">-xjvf</span> file.tar.bz2    // \u89E3\u538B tar.bz2 
<span class="token function">tar</span> \u2013xZvf file.tar.Z      // \u89E3\u538B tar.Z 
<span class="token function">unrar</span> e file.rar          // \u89E3\u538B <span class="token function">rar</span> 
<span class="token function">unzip</span> file.zip            // \u89E3\u538B <span class="token function">zip</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-7z-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-7z-\u64CD\u4F5C" aria-hidden="true">#</a> 2. 7z \u64CD\u4F5C</h2><ol><li><p>\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install p7zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u538B\u7F29</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>7za a \u538B\u7F29\u5305.7z \u88AB\u538B\u7F29\u6587\u4EF6\u6216\u76EE\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p>\u89E3\u538B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u5C06\u538B\u7F29\u5305\u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55\uFF0C\u6CE8\u610F\uFF1A\u6307\u5B9A\u76EE\u5F55\u53C2\u6570-o\u540E\u9762\u4E0D\u8981\u6709\u7A7A\u683C
7za x \u538B\u7F29\u5305.7z -o\u89E3\u538B\u76EE\u5F55
#\u5C06\u538B\u7F29\u5305\u89E3\u538B\u5230\u5F53\u524D\u76EE\u5F55
7za x \u538B\u7F29\u5305.7z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,27),t=[r];function p(l,c){return n(),s("div",null,t)}const u=a(i,[["render",p],["__file","linux-k-compress.html.vue"]]);export{u as default};
