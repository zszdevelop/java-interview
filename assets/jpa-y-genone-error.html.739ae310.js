import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as i,a as e,b as r,e as o,d as s,r as d}from"./app.f5b3b0e8.js";const l={},c=o(`<h1 id="spring-data-jpa\u4F7F\u7528getone\u65B9\u6CD5\u62A5\u9519-method-threw-org-hibernate-lazyinitializationexception" tabindex="-1"><a class="header-anchor" href="#spring-data-jpa\u4F7F\u7528getone\u65B9\u6CD5\u62A5\u9519-method-threw-org-hibernate-lazyinitializationexception" aria-hidden="true">#</a> Spring Data JPA\u4F7F\u7528getOne\u65B9\u6CD5\u62A5\u9519\uFF1AMethod threw &#39;org.hibernate.LazyInitializationException</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u4E4B\u524D\u9879\u76EE\u4E00\u76F4\u7528 jpa\u7684dao.getOne() \u90FD\u662F\u6B63\u5E38\u7684\uFF0C\u4F46\u662F\u52A0\u5165\u7EBF\u7A0B\u6C60\u540E\uFF0C\u7A0B\u5E8F\u76F4\u63A5\u5361\u4E3B\u4E0D\u52A8\u3002debug \u540E\u53D1\u73B0\uFF0C\u63D0\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Method threw &#39;org.hibernate.LazyInitializationException&#39; exception. Cannot evaluate com.xxx.xxx._$$_jvst6a8_a.toString()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F</p><h2 id="_2-\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_2-\u539F\u56E0" aria-hidden="true">#</a> 2. \u539F\u56E0</h2><p><strong>getOne \u662F\u61D2\u52A0\u8F7D</strong>\u3002\u6BCF\u6B21\u521D\u59CB\u5316\u4E00\u4E2A\u5B9E\u4F53\u7684\u5173\u8054\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A<strong>\u4E34\u65F6\u7684session\u6765\u52A0\u8F7D</strong>\uFF0C\u6BCF\u4E2A\u4E34\u65F6\u7684session\u90FD\u4F1A\u83B7\u53D6\u4E00\u4E2A<strong>\u4E34\u65F6\u7684\u6570\u636E\u5E93\u8FDE\u63A5</strong>\uFF0C<strong>\u5F00\u542F\u4E00\u4E2A\u65B0\u7684\u4E8B\u7269</strong>\u3002\u8FD9\u5C31\u5BFC\u81F4\u5BF9\u5E95\u5C42\u8FDE\u63A5\u6C60\u538B\u529B\u5F88\u5927\uFF0C\u800C\u4E14\u4E8B\u7269\u65E5\u5FD7\u4E5F\u4F1A\u88AB\u6BCF\u6B21flush.</p><p>\u8BBE\u60F3\u4E00\u4E0B\uFF1A\u5047\u5982\u6211\u4EEC\u67E5\u8BE2\u4E86\u4E00\u4E2A\u5206\u9875list\u6BCF\u6B21\u67E5\u51FA1000\u6761\uFF0C\u8FD9\u4E2A\u5B9E\u4F53\u6709\u4E09\u4E2Alazy\u5173\u8054\u5BF9\u8C61,\u90A3\u4E48\uFF0C\u606D\u559C\u4F60\uFF0C\u4F60\u81F3\u5C11\u9700\u8981\u521B\u5EFA3000\u4E2A\u4E34\u65F6session+connection+transaction.</p><h2 id="_3-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 3. \u89E3\u51B3\u65B9\u6848</h2><ul><li><p>\u589E\u52A0\u914D\u7F6E</p><p>getOne \u662F\u61D2\u52A0\u8F7D\uFF0C\u9700\u8981\u589E\u52A0\u8FD9\u4E2A\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.jpa.properties.hibernate.enable_lazy_load_no_trans=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u6CD5\u4E0D\u592A\u53CB\u597D\uFF0C<strong>\u4E0D\u5EFA\u8BAE\u4F7F\u7528</strong></p></li><li><p>\u6539\u7528findOne \u6216 findById</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// findOne
Example&lt;MyEntity&gt; example = Example.of(entity);
MyEntity myEntity = riskWarnDao.findOne(example).get();

// findById
MyEntity myEntity = riskWarnDao.findById(idno).get();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,11),h={href:"https://www.itdaan.com/blog/2018/12/19/286dcc4fd95fa33a5e22901e4ecc9832.html",target:"_blank",rel:"noopener noreferrer"},p=s("Spring Data JPA\u4F7F\u7528getOne\u65B9\u6CD5\u62A5\u9519\uFF1AMethod threw 'org.hibernate.LazyInitializationException' exception. Cannot evaluat");function g(u,x){const n=d("ExternalLinkIcon");return t(),i("div",null,[c,e("p",null,[e("a",h,[p,r(n)])])])}const _=a(l,[["render",g],["__file","jpa-y-genone-error.html.vue"]]);export{_ as default};
