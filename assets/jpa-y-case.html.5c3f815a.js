import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,e as s}from"./app.942cb21b.js";const t={},i=s(`<h1 id="jpa\u8868\u5927\u5C0F\u5199\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#jpa\u8868\u5927\u5C0F\u5199\u8F6C\u6362" aria-hidden="true">#</a> JPA\u8868\u5927\u5C0F\u5199\u8F6C\u6362</h1><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><ol><li>\u4F7F\u7528PhysicalNamingStrategy Spring Boot1.5.4 JPA\u662F\u57FA\u4E8Ehibernate5.0\u7684\uFF0C\u6709\u4E24\u79CD\u73B0\u6210\u7684\u65B9\u5F0F\u5B9E\u73B0PhysicalNamingStrategy <ul><li>org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl \u65E0\u4FEE\u6539\u7684</li><li>org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy <strong>\u6709\u4FEE\u6539\uFF0CSpirng Boot 1.5.4\u9ED8\u8BA4\u4F7F\u7528SpringPhysicalNamingStrategy \uFF0C\u4F1A\u5904\u7406\u6DFB\u52A0\u201C-\u201D\uFF0C\u4F1A\u5C06\u8868\u3001\u5B57\u6BB5\u540D\u8F6C\u5316\u4E3A\u5C0F\u5199</strong> application.yml\u4E2D\u914D\u7F6E\u4F7F\u7528PhysicalNamingStrategy\uFF0C\u5C31\u6CA1\u6709\u5B57\u6BB5\u88AB\u5C0F\u5199\u7684\u95EE\u9898\u4E86</li></ul></li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">jpa</span><span class="token punctuation">:</span>
    <span class="token key atrule">hibernate</span><span class="token punctuation">:</span>
      <span class="token key atrule">naming</span><span class="token punctuation">:</span>
        <span class="token key atrule">physical-strategy</span><span class="token punctuation">:</span>  org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function r(o,c){return n(),e("div",null,l)}const m=a(t,[["render",r],["__file","jpa-y-case.html.vue"]]);export{m as default};
