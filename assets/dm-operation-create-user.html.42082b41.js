import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,d as n}from"./app.5ad9c6e6.js";const t={},o=n(`<h1 id="\u8FBE\u68A6\u6570\u636E\u5E93-sql\u521B\u5EFA\u7528\u6237\u4E0E\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#\u8FBE\u68A6\u6570\u636E\u5E93-sql\u521B\u5EFA\u7528\u6237\u4E0E\u6388\u6743" aria-hidden="true">#</a> \u8FBE\u68A6\u6570\u636E\u5E93-SQL\u521B\u5EFA\u7528\u6237\u4E0E\u6388\u6743</h1><h2 id="_1-\u521B\u5EFA\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u7528\u6237" aria-hidden="true">#</a> 1. \u521B\u5EFA\u7528\u6237</h2><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code>create tablespace &quot;TEST&quot; datafile &#39;/mypath/TEST.DBF&#39; size 180 autoextend on maxsize 16777215 CACHE = NORMAL;
create user &quot;TEST&quot; identified by &quot;mypassword&quot; limit failed_login_attemps 3, password_lock_time 1, password_grace_time 10 default tablespace &quot;TEST&quot; default index tablespace &quot;TEST&quot;;
grant &quot;DBA&quot;,&quot;RESOURCE&quot;,&quot;PUBLIC&quot;,&quot;SOI&quot; to &quot;TEST&quot;;
grant CREATE SCHEMA,CREATE TABLE,CREATE VIEW,CREATE PROCEDURE,CREATE SEQUENCE,CREATE TRIGGER,CREATE INDEX,CREATE CONTEXT INDEX,CREATE LINK to &quot;TEST&quot;;
CREATE SCHEMA &quot;TEST&quot; AUTHORIZATION &quot;TEST&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u7ED9\u5176\u4ED6\u7528\u6237\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#_2-\u7ED9\u5176\u4ED6\u7528\u6237\u6388\u6743" aria-hidden="true">#</a> 2. \u7ED9\u5176\u4ED6\u7528\u6237\u6388\u6743</h2><p>\u5C06A\u7528\u6237\u7684\u89C6\u56FE\u6388\u6743\u7ED9B\u7528\u6237</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&quot;B&quot;</span> identified <span class="token keyword">by</span> <span class="token string">&quot;mypassword&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span> <span class="token keyword">on</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">.</span>V_SYS_USER <span class="token keyword">to</span> B <span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span> <span class="token keyword">on</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">.</span>V_SYS_DEPT <span class="token keyword">to</span> B <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[o];function d(r,l){return a(),e("div",null,i)}const p=s(t,[["render",d],["__file","dm-operation-create-user.html.vue"]]);export{p as default};
