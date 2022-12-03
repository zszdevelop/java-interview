import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a,b as s,d as t,e,r as c}from"./app.0227f3fb.js";const i={},u=t('<h1 id="solr\u914D\u7F6E\u4E2D\u6587\u5206\u8BCD\u5668ik-analyzer" tabindex="-1"><a class="header-anchor" href="#solr\u914D\u7F6E\u4E2D\u6587\u5206\u8BCD\u5668ik-analyzer" aria-hidden="true">#</a> Solr\u914D\u7F6E\u4E2D\u6587\u5206\u8BCD\u5668ik-analyzer</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><h2 id="_2-\u96C6\u6210\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u96C6\u6210\u6B65\u9AA4" aria-hidden="true">#</a> 2. \u96C6\u6210\u6B65\u9AA4</h2><p>\u4E0B\u8F7Dik\u5206\u8BCD\u5668</p>',4),r={href:"https://github.com/magese/ik-analyzer-solr",target:"_blank",rel:"noopener noreferrer"},d=e("\u5B98\u65B9\u6587\u6863"),k={href:"https://search.maven.org/search?q=g:com.github.magese%20AND%20a:ik-analyzer&core=gav",target:"_blank",rel:"noopener noreferrer"},g=e("\u4E0B\u8F7D\u5730\u5740"),m=t(`<ol><li><p>\u5C06jar\u5305\u653E\u5165Solr\u670D\u52A1\u7684<code>Jetty</code>\u6216<code>Tomcat</code>\u7684<code>webapp/WEB-INF/lib/</code>\u76EE\u5F55\u4E0B\uFF1B</p><blockquote><p>\u9ED8\u8BA4\u4F4D\u7F6E\uFF1AE:\\solr-7.7\\solr-7.7.3\\server\\solr-webapp\\webapp\\WEB-INF\\lib</p></blockquote></li><li><p>\u5C06<code>resources</code>\u76EE\u5F55\u4E0B\u76845\u4E2A\u914D\u7F6E\u6587\u4EF6\u653E\u5165solr\u670D\u52A1\u7684<code>Jetty</code>\u6216<code>Tomcat</code>\u7684<code>webapp/WEB-INF/classes/</code>\u76EE\u5F55\u4E0B\uFF1B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2460 IKAnalyzer.cfg.xml
\u2461 ext.dic
\u2462 stopword.dic
\u2463 ik.conf
\u2464 dynamicdic.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6ESolr\u7684<code>managed-schema</code>\uFF0C\u6DFB\u52A0<code>ik\u5206\u8BCD\u5668</code>\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1B</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- ik\u5206\u8BCD\u5668 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_ik<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.TextField<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.wltea.analyzer.lucene.IKTokenizerFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">useSmart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">conf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ik.conf<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.LowerCaseFilterFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>query<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.wltea.analyzer.lucene.IKTokenizerFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">useSmart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">conf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ik.conf<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.LowerCaseFilterFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldType</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u5B8C\u6210\uFF0C\u91CD\u542F\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>solr stop <span class="token parameter variable">-all</span>
solr start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8Solr\u670D\u52A1\u6D4B\u8BD5\u5206\u8BCD</p><p>\u9009\u62E9core-&gt; Analysis -&gt; \u9009\u62E9\u5206\u8BCD\u5668 text_ik \u8F93\u5165 &quot;\u9ED1\u591C\u7ED9\u4E86\u6211\u9ED1\u8272\u7684\u773C\u775B&quot;-&gt;\u70B9\u51FB&quot;Analyse Values&quot;\u6309\u94AE</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210304172543651.png" alt="image-20210304172543651" loading="lazy"></p></li></ol><h2 id="_3-ik\u5206\u8BCD\u5668\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-ik\u5206\u8BCD\u5668\u914D\u7F6E" aria-hidden="true">#</a> 3. ik\u5206\u8BCD\u5668\u914D\u7F6E</h2><ol><li><p><code>ik.conf</code>\u6587\u4EF6\u8BF4\u660E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>files=dynamicdic.txt
lastupdate=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>files</code>\u4E3A\u52A8\u6001\u8BCD\u5178\u5217\u8868\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A\u8BCD\u5178\u8868\uFF0C\u7528\u9017\u53F7\u8FDB\u884C\u5206\u9694\uFF0C\u9ED8\u8BA4\u52A8\u6001\u8BCD\u5178\u8868\u4E3A<code>dynamicdic.txt</code>\uFF1B</li><li><code>lastupdate</code>\u9ED8\u8BA4\u503C\u4E3A<code>0</code>\uFF0C\u6BCF\u6B21\u5BF9\u52A8\u6001\u8BCD\u5178\u8868\u4FEE\u6539\u540E\u8BF7+1\uFF0C\u4E0D\u7136\u4E0D\u4F1A\u5C06\u8BCD\u5178\u8868\u4E2D\u65B0\u7684\u8BCD\u8BED\u6DFB\u52A0\u5230\u5185\u5B58\u4E2D\u3002</li></ol></li><li><p><code>dynamicdic.txt</code> \u4E3A\u52A8\u6001\u8BCD\u5178</p><p>\u5728\u6B64\u6587\u4EF6\u914D\u7F6E\u7684\u8BCD\u8BED\u4E0D\u9700\u91CD\u542F\u670D\u52A1\u5373\u53EF\u52A0\u8F7D\u8FDB\u5185\u5B58\u4E2D\u3002 \u4EE5<code>#</code>\u5F00\u5934\u7684\u8BCD\u8BED\u89C6\u4E3A\u6CE8\u91CA\uFF0C\u5C06\u4E0D\u4F1A\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\u3002</p></li></ol><h2 id="_4-\u8BBE\u7F6E\u540C\u4E49\u8BCD\u6216\u505C\u6B62\u8BCD" tabindex="-1"><a class="header-anchor" href="#_4-\u8BBE\u7F6E\u540C\u4E49\u8BCD\u6216\u505C\u6B62\u8BCD" aria-hidden="true">#</a> 4. \u8BBE\u7F6E\u540C\u4E49\u8BCD\u6216\u505C\u6B62\u8BCD</h2><h3 id="_4-1-\u540C\u4E49\u8BCD\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-1-\u540C\u4E49\u8BCD\u793A\u4F8B" aria-hidden="true">#</a> 4.1 \u540C\u4E49\u8BCD\u793A\u4F8B</h3><p>\u4F8B\u5982\u5728\u5229\u7528word\u5206\u8BCD\u540E\uFF0C\u67E5\u8BE2\u201C\u4E0B\u8DCC\u201D\uFF0C\u5F97\u5230\u7ED3\u679C\u5982\u4E0B\uFF1A</p><h4 id="_4-1-1-\u6CA1\u6709\u540C\u4E49\u8BCD\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u6CA1\u6709\u540C\u4E49\u8BCD\u7684\u60C5\u51B5" aria-hidden="true">#</a> 4.1.1 \u6CA1\u6709\u540C\u4E49\u8BCD\u7684\u60C5\u51B5</h4><p>\u67E5\u8BE2\u201C\u4E0B\u8DCC\u201D\uFF0C\u627E\u5230\u4E00\u7247\u6587\u6863</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408163051893.png" alt="image-20220408163051893" loading="lazy"></p><p>\u67E5\u8BE2\u201C\u4E0B\u964D\u201D\u662F\u6CA1\u6709\u7ED3\u679C\u7684\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408163108228.png" alt="image-20220408163108228" loading="lazy"></p><h4 id="_4-1-2-\u540C\u4E49\u8BCD\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u540C\u4E49\u8BCD\u914D\u7F6E" aria-hidden="true">#</a> 4.1.2 \u540C\u4E49\u8BCD\u914D\u7F6E</h4><p>\u5728synonyms.txt\u914D\u7F6E\uFF1A <code>\u4E0B\u964D=&gt;\u4E0B\u8DCC</code> \u6216\u8005\u8BBE\u7F6E\u4E3A\uFF1A <code>\u4E0B\u964D,\u4E0B\u8DCC</code> \u524D\u8005\u8868\u793A\u4E3A\u5C06\u4E0B\u964D\u8F6C\u6362\u4E3A\u4E0B\u8DCC\uFF0C\u540E\u8005\u8868\u793A\u8FD9\u4E9B\u8BCD\u53EF\u4EE5\u76F8\u4E92\u66FF\u6362\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Some synonym groups specific to this example
GB,gib,gigabyte,gigabytes
MB,mib,megabyte,megabytes
Television, Televisions, TV, TVs
# \u7528\u9017\u53F7\u548C=&gt;\u90FD\u53EF\u4EE5
# \u4E0B\u964D,\u4E0B\u8DCC
\u4E0B\u964D=&gt;\u90FD\u53EF\u4EE5\u4E0B\u8DCC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\uFF0C\u8FD8\u8981\u8BB0\u5F97\u5728\u76F8\u5E94\u7684fieldType\u52A0\u4E0A\u5BF9\u540C\u4E49\u8BCD\u7684\u652F\u6301\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_general<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.TextField<span class="token punctuation">&quot;</span></span> <span class="token attr-name">positionIncrementGap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiValued</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apdplat.word.solr.ChineseWordTokenizerFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>query<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apdplat.word.solr.ChineseWordTokenizerFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.SynonymFilterFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">expand</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ignoreCase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">synonyms</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>synonyms.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-3-\u91CD\u542F\u540E\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u91CD\u542F\u540E\u751F\u6548" aria-hidden="true">#</a> 4.1.3 \u91CD\u542F\u540E\u751F\u6548</h4><p>\u91CD\u542Fsolr\u4E4B\u540E\u518D\u67E5\u8BE2\u201C\u4E0B\u964D\u201D\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408163420536.png" alt="image-20220408163420536" loading="lazy"></p><p>\u914D\u7F6E\u540C\u4E49\u8BCD\u8F6C\u6362\u540E\uFF0C\u67E5\u8BE2\u201C\u4E0B\u964D\u201D\u5219\u4F1A\u8FD4\u56DE\u8DDF\u201C\u4E0B\u8DCC\u201D\u4E00\u6837\u7684\u7ED3\u679C</p><h2 id="_5-\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> 5. \u9047\u5230\u7684\u95EE\u9898</h2><h3 id="_5-1-ik\u641C\u7D22\u4E0D\u8981\u52A0" tabindex="-1"><a class="header-anchor" href="#_5-1-ik\u641C\u7D22\u4E0D\u8981\u52A0" aria-hidden="true">#</a> 5.1 ik\u641C\u7D22\u4E0D\u8981\u52A0*</h3><p>\u5982\u679C\u624B\u52A8\u8BBE\u7F6E\u52A0 * \u5185\u5BB9 *\uFF0C\u90A3\u4E48\u661F\u53F7\u91CC\u9762\u7684\u5185\u5BB9\u5C06\u4E0D\u4F1A\u88AB\u5206\u8BCD</p><h2 id="_5-2-\u641C\u7D22\u7ED3\u679C\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-2-\u641C\u7D22\u7ED3\u679C\u95EE\u9898" aria-hidden="true">#</a> 5.2 \u641C\u7D22\u7ED3\u679C\u95EE\u9898</h2><p>ik \u5206\u8BCD\uFF0C\u5BF9\u4E8E\u65E2\u6709\u6587\u5B57\u53C8\u6709\u6570\u5B57\u7684\u641C\u7D22\u3002\u4ED6\u7684\u62C6\u8BCD\u662F\u4E0D\u5408\u9002\u7684</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408205357892.png" alt="image-20220408205357892" loading="lazy"></p>`,26);function v(h,b){const n=c("ExternalLinkIcon");return o(),l("div",null,[u,a("p",null,[a("a",r,[d,s(n)])]),a("p",null,[a("a",k,[g,s(n)])]),m])}const x=p(i,[["render",v],["__file","solr-j-ik-analyzer.html.vue"]]);export{x as default};
