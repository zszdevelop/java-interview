import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,a as e,b as t,e as s,d as l,r as d}from"./app.942cb21b.js";const o={},c=s(`<h1 id="jpa\u4F7F\u7528\u539F\u751Fsql\u67E5\u8BE2\u6570\u636E\u5E93like\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#jpa\u4F7F\u7528\u539F\u751Fsql\u67E5\u8BE2\u6570\u636E\u5E93like\u7684\u7528\u6CD5" aria-hidden="true">#</a> JPA\u4F7F\u7528\u539F\u751FSQL\u67E5\u8BE2\u6570\u636E\u5E93like\u7684\u7528\u6CD5</h1><p>jpa\u4F7F\u7528like\u67E5\u8BE2\uFF0C\u9700\u8981\u62FC\u63A5\u5B57\u7B26\u4E32\uFF0C\u5982\u4E0B</p><h2 id="oracle\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#oracle\u7528\u6CD5" aria-hidden="true">#</a> oracle\u7528\u6CD5\uFF1A</h2><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>//dao\u5C42\u4EE3\u7801
@Query(value = &quot;SELECT * FROM TABLENAME WHERE USER_NAME LIKE &#39;%&#39;||?1||&#39;%&#39;&quot;, nativeQuery = true)
List&lt;Map&lt;String, Object&gt;&gt; queryUserInfoByName(String userName);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#mysql\u7528\u6CD5" aria-hidden="true">#</a> mysql\u7528\u6CD5\uFF1A</h2><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>//dao\u5C42\u4EE3\u7801
@Query(value = &quot;SELECT * FROM TABLENAME WHERE USER_NAME LIKE CONCAT(&#39;%&#39;,:userName,&#39;%&#39;)&quot;, nativeQuery = true)
List&lt;Map&lt;String, Object&gt;&gt; queryUserInfoByName(@Param(&quot;userName&quot;) String userName);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,7),u={href:"https://yspxyz.blog.csdn.net/article/details/105383240",target:"_blank",rel:"noopener noreferrer"},h=l("jpa\u4F7F\u7528\u539F\u751FSQL\u67E5\u8BE2\u6570\u636E\u5E93like\u7684\u7528\u6CD5");function m(v,p){const a=d("ExternalLinkIcon");return n(),i("div",null,[c,e("p",null,[e("a",u,[h,t(a)])])])}const A=r(o,[["render",m],["__file","jpa-y-like.html.vue"]]);export{A as default};
