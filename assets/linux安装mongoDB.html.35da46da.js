import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,a as n,b as o,d as s,e as t,r as d}from"./app.70ab84e4.js";const r={},c=n("h1",{id:"linux\u5B89\u88C5mongodb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux\u5B89\u88C5mongodb","aria-hidden":"true"},"#"),s(" linux\u5B89\u88C5mongoDB")],-1),u=n("h2",{id:"_1-\u4E0B\u8F7Dlinux\u7248\u672Cmongodb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u4E0B\u8F7Dlinux\u7248\u672Cmongodb","aria-hidden":"true"},"#"),s(" 1.\u4E0B\u8F7Dlinux\u7248\u672CmongoDB")],-1),p=s("\u8BBF\u95EEmongoDB\u5B98\u7F51\uFF0C\u9009\u62E9\u5BF9\u5E94\u7248\u672C"),m={href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"},v=s("mongodb\u5B98\u7F51"),b=t(`<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210406231806650.png" alt="image-20210406231806650"></p><p>\u9009\u62E9\u5BF9\u5E94\u7684\u7248\u672C</p><h2 id="_2-\u5B89\u88C5mongodb" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5mongodb" aria-hidden="true">#</a> 2. \u5B89\u88C5mongodb</h2><p>\u53EF\u4EE5\u9009\u62E9download \u540E\u4E0A\u4F20\u670D\u52A1\u5668\uFF0C\u6216cope link</p><ol><li><p>\u4F7F\u7528wget\u4E0B\u8F7Dtgz\u5305\uFF0C\u6211\u5F53\u524D\u76EE\u5F55/usr/local/</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.4.4.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf mongodb-linux-x86_64-rhel70-4.4.4.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u79FB\u52A8\u5230mongodb\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> mongodb-linux-x86_64-rhel70-4.4.4/ mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_3-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E" aria-hidden="true">#</a> 3. \u914D\u7F6E</h2><ol><li><p>\u5728mongoDB\u6839\u76EE\u5F55\u4E0B\u521B\u5EFAdata\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55db\uFF0C\u4EE5\u53CA\u65E5\u5FD7\u76EE\u5F55logs\u4EE5\u53CA\u5176\u65E5\u5FD7\u6587\u4EF6mongoLogs.log\uFF0C\u548C\u914D\u7F6E\u6587\u4EF6mongodb.conf\uFF0C\u547D\u4EE4\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/mongodb/db
<span class="token function">mkdir</span> /home/mongodb/logs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6mongodb.conf\uFF0C\u547D\u4EE4\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> 
<span class="token comment"># \u6570\u636E\u5E93\u6587\u4EF6\u4F4D\u7F6E</span>
<span class="token assign-left variable">dbpath</span><span class="token operator">=</span>/home/mongodb/db
 
<span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u4F4D\u7F6E</span>
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>/home/mongodb/logs/mongo.log
 
<span class="token comment"># \u662F\u5426\u8FFD\u52A0\u65B9\u5F0F\u5199\u5165\u65E5\u5FD7\uFF0C\u9ED8\u8BA4True</span>
<span class="token assign-left variable">logappend</span><span class="token operator">=</span>true
 
<span class="token comment"># \u8BBE\u7F6E\u7ED1\u5B9Aip</span>
bind_ip <span class="token operator">=</span> <span class="token number">0.0</span>.0.0

<span class="token comment"># \u8BBE\u7F6E\u7AEF\u53E3</span>
port <span class="token operator">=</span> <span class="token number">27017</span>
  
<span class="token comment">#\u8FD9\u4E2A\u9009\u9879\u53EF\u4EE5\u8FC7\u6EE4\u6389\u4E00\u4E9B\u65E0\u7528\u7684\u65E5\u5FD7\u4FE1\u606F\uFF0C\u82E5\u9700\u8981\u8C03\u8BD5\u4F7F\u7528\u8BF7\u8BBE\u7F6E\u4E3Afalse</span>
<span class="token assign-left variable">quiet</span><span class="token operator">=</span>false
 
<span class="token comment"># \u542F\u7528\u65E5\u5FD7\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u542F\u7528</span>
<span class="token assign-left variable">journal</span><span class="token operator">=</span>true


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u542F\u52A8\u811A\u672C\uFF1Astartup.sh</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/mongod --config <span class="token string">&quot;./mongodb.conf&quot;</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u505C\u6B62\u811A\u672C\uFF1Ashutdown.sh</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongod --shutdown  --dbpath /home/db/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_4-\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8" aria-hidden="true">#</a> 4. \u542F\u52A8</h2><ol><li><p>\u542F\u52A8\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sh startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u505C\u6B62\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sh shutdown.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>mongo\u8FDE\u63A5\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210406233633436.png" alt="image-20210406233633436"></p></li></ol><h2 id="_5-\u914D\u7F6E\u8D26\u6237-\u6388\u6743\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#_5-\u914D\u7F6E\u8D26\u6237-\u6388\u6743\u767B\u5F55" aria-hidden="true">#</a> 5. \u914D\u7F6E\u8D26\u6237\uFF0C\u6388\u6743\u767B\u5F55</h2><p>mongodb\u6211\u4EEC\u5DF2\u7ECF\u5B89\u88C5\u5B8C\u6210\uFF0C\u4E5F\u6210\u529F\u542F\u52A8\u8FDE\u63A5\u4E0A\u4E86\u6D4B\u8BD5\u5E93\uFF0C\u4F46\u6B64\u65F6\u6211\u4EEC./mongo\u542F\u52A8\u7684\u65F6\u5019\u662F\u9ED8\u8BA4\u4E0D\u9700\u8981\u6388\u6743\u767B\u5F55\u7684\uFF0C\u8FD9\u6837\u5E76\u4E0D\u5B89\u5168\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u7BA1\u7406\u5458\uFF0C\u4E4B\u540E\u542F\u52A8\u53CA\u64CD\u4F5C\u90FD\u9700\u8981\u6388\u6743\u767B\u5F55\u624D\u53EF\u4EE5\u8FDB\u884C\u3002</p><ol><li><p>\u521B\u5EFAadmin\u6570\u636E\u5E93\uFF0C\u521B\u5EFA\u7528\u6237\uFF0C\u8BBE\u7F6E\u8D26\u53F7\uFF0C\u5BC6\u7801\uFF0C\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> use admin
switched to db admin
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user:<span class="token string">&quot;root&quot;</span>,pwd:<span class="token string">&quot;123456&quot;</span>,roles:<span class="token punctuation">[</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
Successfully added user: <span class="token punctuation">{</span> <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>, <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;root&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u540E\uFF0C\u7ED3\u675Fmongodb\u7A0B\u5E8F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> use admin
switched to db admin
<span class="token operator">&gt;</span> db.auth<span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span>,<span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">1</span>
<span class="token operator">&gt;</span> db.shutdownServer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Error: shutdownServer failed: <span class="token punctuation">{</span>
        <span class="token string">&quot;ok&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;errmsg&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;shutdown must run from localhost when running db without auth&quot;</span>,
        <span class="token string">&quot;code&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">13</span>,
        <span class="token string">&quot;codeName&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;Unauthorized&quot;</span>
<span class="token punctuation">}</span> <span class="token builtin class-name">:</span>
_getErrorWithCode@src/mongo/shell/utils.js:25:13
DB.prototype.shutdownServer@src/mongo/shell/db.js:426:19
@<span class="token punctuation">(</span>shell<span class="token punctuation">)</span>:1:1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u91CD\u542F\u4F7F\u914D\u7F6E\u751F\u6548</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u672B\u5C3E\u6DFB\u52A0\u4E0A
#\u5F00\u542F\u8EAB\u4EFD\u9A8C\u8BC1
auth = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u91CD\u542F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./mongod --config /usr/local/mongoDB/mongodb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4EE5\u7BA1\u7406\u5458\u8D26\u53F7\u767B\u5F55\uFF0C\u521B\u5EFA\u666E\u901A\u7528\u6237\uFF0C\u4E4B\u540E\u672C\u5730\u505A\u5F00\u53D1\u8FDE\u63A5\u6570\u636E\u5E93\u65F6\u9700\u8981\u914D\u7F6E\u8D26\u53F7\u5BC6\u7801\u624D\u53EF\u4EE5\u6210\u529F\u8FDE\u63A5</p><div class="language-ssh ext-ssh line-numbers-mode"><pre class="language-ssh"><code>1\uFF0C\u4EE5\u7BA1\u7406\u5458\u8D26\u53F7\u8FDE\u63A5\u6570\u636E\u5E93
[root@izbp1b498epn4trb75oykez bin]# ./mongo 127.0.0.1:27017/admin --username &quot;root&quot; --password &quot;123456&quot;
2\uFF0C\u521B\u5EFA\u6570\u636E\u5E93,\u521B\u5EFA\u8D26\u53F7\uFF0C\u7ED9\u8BFB\u5199\u6743\u9650
&gt; use blog
&gt; db.createUser({user:&quot;blogAdmin&quot;,pwd:&quot;123456&quot;,roles:[{role:&quot;readWrite&quot;,db:&quot;blog&quot;}]})
Successfully added user: {
	&quot;user&quot; : &quot;blogAdmin&quot;,
	&quot;roles&quot; : [
    	{
	    	&quot;role&quot; : &quot;readWrite&quot;,
	    	&quot;db&quot; : &quot;blog&quot;
    	}
	]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,12);function g(h,k){const e=d("ExternalLinkIcon");return i(),l("div",null,[c,u,n("p",null,[p,n("a",m,[v,o(e)])]),b])}var _=a(r,[["render",g],["__file","linux\u5B89\u88C5mongoDB.html.vue"]]);export{_ as default};
