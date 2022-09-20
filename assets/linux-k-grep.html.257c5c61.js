import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,e as s}from"./app.6ee8c9d2.js";const i={},l=s(`<h1 id="linux-grep\u6587\u672C\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#linux-grep\u6587\u672C\u641C\u7D22" aria-hidden="true">#</a> Linux-grep\u6587\u672C\u641C\u7D22</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1 \u7B80\u4ECB</h2><p>Linux\u7CFB\u7EDF\u4E2Dgrep\u547D\u4EE4\u662F\u4E00\u79CD\u5F3A\u5927\u7684<strong>\u6587\u672C\u641C\u7D22\u5DE5\u5177</strong>\uFF0C\u5B83\u80FD\u4F7F\u7528<strong>\u6B63\u5219\u8868\u8FBE\u5F0F\u641C\u7D22\u6587\u672C</strong>\uFF0C\u5E76\u628A\u5339 <strong>\u914D\u7684\u884C</strong>\u6253\u5370\u51FA\u6765\u3002grep\u5168\u79F0\u662FGlobal Regular Expression Print\uFF0C\u8868\u793A\u5168\u5C40\u6B63\u5219\u8868\u8FBE\u5F0F\u7248\u672C\uFF0C\u5B83\u7684\u4F7F\u7528\u6743\u9650\u662F\u6240\u6709\u7528\u6237\u3002</p><p>grep\u7684\u5DE5\u4F5C\u65B9\u5F0F\u662F\u8FD9\u6837\u7684\uFF0C\u5B83\u5728\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u4E2D\u641C\u7D22\u5B57\u7B26\u4E32\u6A21\u677F\u3002\u5982\u679C\u6A21\u677F\u5305\u62EC\u7A7A\u683C\uFF0C\u5219\u5FC5\u987B\u88AB\u5F15\u7528\uFF0C\u6A21\u677F\u540E\u7684\u6240\u6709\u5B57\u7B26\u4E32\u88AB\u770B\u4F5C\u6587\u4EF6\u540D\u3002\u641C\u7D22\u7684\u7ED3\u679C\u88AB\u9001\u5230\u6807\u51C6\u8F93\u51FA\uFF0C\u4E0D\u5F71\u54CD\u539F\u6587\u4EF6\u5185\u5BB9\u3002</p><p>grep\u53EF\u7528\u4E8Eshell\u811A\u672C\uFF0C\u56E0\u4E3Agrep\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u72B6\u6001\u503C\u6765\u8BF4\u660E\u641C\u7D22\u7684\u72B6\u6001\uFF0C\u5982\u679C<strong>\u6A21\u677F\u641C\u7D22\u6210\u529F\uFF0C\u5219\u8FD4\u56DE0\uFF0C\u5982\u679C\u641C\u7D22\u4E0D\u6210\u529F\uFF0C\u5219\u8FD4\u56DE1</strong>\uFF0C\u5982\u679C\u641C\u7D22\u7684\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE2\u3002\u6211\u4EEC\u5229\u7528\u8FD9\u4E9B\u8FD4\u56DE\u503C\u5C31\u53EF\u8FDB\u884C\u4E00\u4E9B\u81EA\u52A8\u5316\u7684\u6587\u672C\u5904\u7406\u5DE5\u4F5C\u3002</p><h2 id="_2-\u547D\u4EE4\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u547D\u4EE4\u8BED\u6CD5" aria-hidden="true">#</a> 2 \u547D\u4EE4\u8BED\u6CD5</h2><p>\u7528\u4E8E\u8FC7\u6EE4/\u641C\u7D22\u7684\u7279\u5B9A\u5B57\u7B26\u3002\u53EF\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u80FD\u591A\u79CD\u547D\u4EE4\u914D\u5408\u4F7F\u7528\uFF0C\u4F7F\u7528\u4E0A\u5341\u5206\u7075\u6D3B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> pattern <span class="token punctuation">[</span>\u6587\u4EF6\u540D<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u547D\u4EE4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u547D\u4EE4\u53C2\u6570" aria-hidden="true">#</a> 3 \u547D\u4EE4\u53C2\u6570</h2><p>-? \u540C\u65F6\u663E\u793A\u5339\u914D\u884C\u4E0A\u4E0B\u7684\uFF1F\u884C\uFF0C\u5982\uFF1Agrep -2 pattern filename \u540C\u65F6\u663E\u793A\u5339\u914D\u884C\u7684\u4E0A\u4E0B2\u884C\u3002 -b\uFF0C\u2014byte-offset \u6253\u5370\u5339\u914D\u884C\u524D\u9762\u6253\u5370\u8BE5\u884C\u6240\u5728\u7684\u5757\u53F7\u7801\u3002 -c,\u2014count \u53EA\u6253\u5370\u5339\u914D\u7684\u884C\u6570\uFF0C\u4E0D\u663E\u793A\u5339\u914D\u7684\u5185\u5BB9\u3002 -f File\uFF0C\u2014file=File \u4ECE\u6587\u4EF6\u4E2D\u63D0\u53D6\u6A21\u677F\u3002\u7A7A\u6587\u4EF6\u4E2D\u5305\u542B0\u4E2A\u6A21\u677F\uFF0C\u6240\u4EE5\u4EC0\u4E48\u90FD\u4E0D\u5339\u914D\u3002 -h\uFF0C\u2014no-filename \u5F53\u641C\u7D22\u591A\u4E2A\u6587\u4EF6\u65F6\uFF0C\u4E0D\u663E\u793A\u5339\u914D\u6587\u4EF6\u540D\u524D\u7F00\u3002 -i\uFF0C\u2014ignore-case \u5FFD\u7565\u5927\u5C0F\u5199\u5DEE\u522B\u3002 -q\uFF0C\u2014quiet \u53D6\u6D88\u663E\u793A\uFF0C\u53EA\u8FD4\u56DE\u9000\u51FA\u72B6\u6001\u30020\u5219\u8868\u793A\u627E\u5230\u4E86\u5339\u914D\u7684\u884C\u3002 -l\uFF0C\u2014files-with-matches \u6253\u5370\u5339\u914D\u6A21\u677F\u7684\u6587\u4EF6\u6E05\u5355\u3002 -L\uFF0C\u2014files-without-match \u6253\u5370\u4E0D\u5339\u914D\u6A21\u677F\u7684\u6587\u4EF6\u6E05\u5355\u3002 -n\uFF0C\u2014line-number \u5728\u5339\u914D\u7684\u884C\u524D\u9762\u6253\u5370\u884C\u53F7\u3002 -s\uFF0C\u2014silent \u4E0D\u663E\u793A\u5173\u4E8E\u4E0D\u5B58\u5728\u6216\u8005\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u7684\u9519\u8BEF\u4FE1\u606F\u3002 -v\uFF0C\u2014revert-match \u53CD\u68C0\u7D22\uFF0C\u53EA\u663E\u793A\u4E0D\u5339\u914D\u7684\u884C\u3002 -w\uFF0C\u2014word-regexp \u5982\u679C\u88AB&lt;\u548C&gt;\u5F15\u7528\uFF0C\u5C31\u628A\u8868\u8FBE\u5F0F\u505A\u4E3A\u4E00\u4E2A\u5355\u8BCD\u641C\u7D22\u3002 -V\uFF0C\u2014version \u663E\u793A\u8F6F\u4EF6\u7248\u672C\u4FE1\u606F\u3002</p><h2 id="_4-pattern-\u89C4\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-pattern-\u89C4\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 4 pattern \u89C4\u5219\u8868\u8FBE\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>. \u5339\u914D\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26
* \u5339\u914D0 \u4E2A\u6216\u591A\u4E2A*\u524D\u7684\u5B57\u7B26
^ \u5339\u914D\u884C\u5F00\u5934
$ \u5339\u914D\u884C\u7ED3\u5C3E
[] \u5339\u914D[ ]\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26\uFF0C[]\u4E2D\u53EF\u7528 - \u8868\u793A\u8303\u56F4\uFF0C
\u4F8B\u5982[a-z]\u8868\u793A\u5B57\u6BCDa \u81F3z \u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A
\\ \u8F6C\u610F\u5B57\u7B26
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_5-\u5B9E\u4F8B" aria-hidden="true">#</a> 5 \u5B9E\u4F8B</h2><p>\u6587\u4EF6fruits.txt</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>i like apple
i like pineapple
i like Apple
i like banana
i like watermelon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-\u5728\u6587\u4EF6\u4E2D\u641C\u7D22\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-1-\u5728\u6587\u4EF6\u4E2D\u641C\u7D22\u6A21\u5F0F" aria-hidden="true">#</a> 5.1 \u5728\u6587\u4EF6\u4E2D\u641C\u7D22\u6A21\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>
<span class="token function">grep</span> <span class="token string">&quot;search_pattern&quot;</span> path/to/file
<span class="token comment"># \u793A\u4F8B(\u67E5\u770B\u6587\u4EF6\u4E2D\u5E26\u6709apple\u7684\u884C)</span>
<span class="token function">grep</span> apple fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412135702730.png" alt="image-20220412135702730" loading="lazy"></p><h3 id="_5-2-or-\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-2-or-\u6761\u4EF6" aria-hidden="true">#</a> 5.2 or \u6761\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>
<span class="token comment"># \u65B9\u5F0F\u4E00\uFF1A -E (E\u9700\u8981\u5927\u5199)</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;string1|string2&#39;</span> filename
<span class="token comment"># \u65B9\u5F0F\u4E8C\uFF1A egrep</span>
<span class="token function">egrep</span> <span class="token string">&#39;string1|string2&#39;</span> filename

<span class="token comment"># \u793A\u4F8B</span>
<span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;apple|banana&#39;</span>  fruits.txt
<span class="token function">egrep</span> apple<span class="token operator">|</span>banana&#39;  fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412135839507.png" alt="image-20220412135839507" loading="lazy"></p><h3 id="_5-3-\u5FFD\u7565\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#_5-3-\u5FFD\u7565\u5927\u5C0F\u5199" aria-hidden="true">#</a> 5.3 \u5FFD\u7565\u5927\u5C0F\u5199</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cgrep\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u8FD9\u610F\u5473\u7740\u60A8\u5FC5\u987B\u7CBE\u786E\u641C\u7D22\u5927\u5199\u7684\u5B57\u7B26\u4E32\u3002\u901A\u8FC7\u4F7F\u7528-i\u5F00\u5173\u544A\u8BC9grep\u5FFD\u7565\u5927\u5C0F\u5199\uFF0C\u53EF\u4EE5\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>
<span class="token function">grep</span> <span class="token parameter variable">-i</span> string filename
<span class="token comment"># \u793A\u4F8B</span>
<span class="token function">grep</span> <span class="token parameter variable">-i</span> apple fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412140005854.png" alt="image-20220412140005854" loading="lazy"></p><h3 id="_5-4-\u641C\u7D22\u7CBE\u786E\u7684\u5B57\u7B26\u4E32-\u7981\u7528\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-4-\u641C\u7D22\u7CBE\u786E\u7684\u5B57\u7B26\u4E32-\u7981\u7528\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 5.4 \u641C\u7D22\u7CBE\u786E\u7684\u5B57\u7B26\u4E32 (\u7981\u7528\u6B63\u5219\u8868\u8FBE\u5F0F):</h3><p>\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6BCF\u5F53\u6211\u4EEC\u5728\u6587\u6863\u4E2D\u641C\u7D22\u5B57\u7B26\u4E32\u201C apple\u201D\u65F6\uFF0Cgrep\u4E5F\u4F1A\u5728\u8F93\u51FA\u4E2D\u8FD4\u56DE\u201C pineapple\u201D\u3002\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5E76\u4E25\u683C\u641C\u7D22\u201C apple\u201D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u793A\u4F8B</span>
<span class="token function">grep</span> <span class="token string">&quot;\\&lt;apple\\&gt;&quot;</span> fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412140216431.png" alt="image-20220412140216431" loading="lazy"></p><h3 id="_5-5-\u5E26\u884C\u53F7\u7684grep" tabindex="-1"><a class="header-anchor" href="#_5-5-\u5E26\u884C\u53F7\u7684grep" aria-hidden="true">#</a> 5.5 <em><strong>\u5E26\u884C\u53F7\u7684Grep</strong></em></h3><p>\u8981\u663E\u793A\u641C\u7D22\u5B57\u7B26\u4E32\u6240\u5728\u7684\u884C\u6570\uFF0C\u8BF7\u4F7F\u7528-n\u5F00\u5173\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> string filename
<span class="token comment"># \u793A\u4F8B</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span>  apple  fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412140342553.png" alt="image-20220412140342553" loading="lazy"></p><h3 id="_5-6-\u663E\u793A\u4E4B\u524D\u548C\u4E4B\u540E\u7684\u884C" tabindex="-1"><a class="header-anchor" href="#_5-6-\u663E\u793A\u4E4B\u524D\u548C\u4E4B\u540E\u7684\u884C" aria-hidden="true">#</a> 5.6 <em><strong>\u663E\u793A\u4E4B\u524D\u548C\u4E4B\u540E\u7684\u884C</strong></em></h3><p>\u5982\u679C\u9700\u8981\u66F4\u591Agrep\u8F93\u51FA\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4EE5\u4F7F\u7528-c\u5F00\u5173\u5728\u6307\u5B9A\u7684\u641C\u7D22\u5B57\u7B26\u4E32\u524D\u540E\u663E\u793A\u4E00\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5 \u5927\u5199\u7684C</span>
<span class="token function">grep</span> <span class="token parameter variable">-C</span> <span class="token number">1</span> string filename
<span class="token comment"># \u793A\u4F8B</span>
<span class="token function">grep</span> <span class="token parameter variable">-C</span> <span class="token number">1</span> banana fruits.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412140621158.png" alt="image-20220412140621158" loading="lazy"></p><h2 id="_6-\u4E0E\u5176\u4ED6\u547D\u4EE4\u914D\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_6-\u4E0E\u5176\u4ED6\u547D\u4EE4\u914D\u5408\u4F7F\u7528" aria-hidden="true">#</a> 6 \u4E0E\u5176\u4ED6\u547D\u4EE4\u914D\u5408\u4F7F\u7528</h2><p>Linux\u547D\u4EE4\u7684\u8F93\u51FA\u901A\u8FC7\u7BA1\u9053\u4F20\u8F93\u5230grep\uFF0Cgrep\u5C31\u53EF\u4EE5\u4EC5\u663E\u793A\u60A8\u9700\u8981\u67E5\u770B\u7684\u8F93\u51FA\u3002</p><h3 id="_6-1-\u67E5\u627E\u6587\u4EF6\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#_6-1-\u67E5\u627E\u6587\u4EF6\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> 6.1 \u67E5\u627E\u6587\u4EF6\u662F\u5426\u5B58\u5728</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u627E\u5F53\u524D\u76EE\u5F55 .sh\u7ED3\u5C3E\u7684\u6587\u4EF6</span>
<span class="token function">ls</span> <span class="token operator">|</span><span class="token function">grep</span> .sh
<span class="token comment">#\u67E5\u627E\u5F53\u524D\u76EE\u5F55 xx.sh\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u8FD4\u56DE\u7A7A\u5219\u8BC1\u660E\u6587\u4EF6\u4E0D\u5B58\u5728</span>
bin <span class="token function">ls</span> <span class="token operator">|</span><span class="token function">grep</span> xx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412151129285.png" alt="image-20220412151129285" loading="lazy"></p>`,42),r=[l];function t(p,c){return e(),a("div",null,r)}const u=n(i,[["render",t],["__file","linux-k-grep.html.vue"]]);export{u as default};
