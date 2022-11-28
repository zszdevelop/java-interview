import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as s,b as i,d as o,e as d,r as c}from"./app.5ad9c6e6.js";const l={},r=o(`<h1 id="rabbitmq\u7BA1\u7406-\u591A\u79DF\u6237\u4E0E\u6743\u9650-vhost" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u7BA1\u7406-\u591A\u79DF\u6237\u4E0E\u6743\u9650-vhost" aria-hidden="true">#</a> RabbitMQ\u7BA1\u7406 - \u591A\u79DF\u6237\u4E0E\u6743\u9650\uFF1Avhost</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6BCF\u4E00\u4E2A RabbitMQ \u670D\u52A1\u5668\u90FD\u80FD\u521B\u5EFA <strong>\u865A\u62DF\u7684\u6D88\u606F\u670D\u52A1\u5668</strong>\uFF0C\u79F0\u4E4B\u4E3A <strong>\u865A\u62DF\u4E3B\u673A\uFF08virtual host\uFF09</strong>\uFF0C\u7B80\u79F0 <strong>vhost</strong>\u3002</p><p>vhost \u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5C0F\u578B RabbitMQ \u670D\u52A1\u5668\uFF0C\u62E5\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u961F\u5217\u3001\u4EA4\u6362\u5668\u3001\u7ED1\u5B9A\u5173\u7CFB\u7B49\uFF0C\u5E76\u4E14 <strong>\u62E5\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u6743\u9650</strong>\u3002</p><p>vhost \u53EF\u907F\u514D\u961F\u5217\u548C\u4EA4\u6362\u5668\u7B49\u547D\u540D\u51B2\u7A81\uFF0C<strong>vhost \u4E4B\u95F4\u662F\u7EDD\u5BF9\u9694\u79BB\u7684</strong>\uFF0C\u65E0\u6CD5\u5C06 vhost1 \u4E2D\u7684\u4EA4\u6362\u5668\u4E0E vhost2 \u4E2D\u7684\u961F\u5217\u8FDB\u884C\u7ED1\u5B9A\uFF0C\u8FD9\u6837\u7684\u673A\u5236\u65E2\u4FDD\u8BC1\u4E86\u5B89\u5168\u6027\uFF0C\u53C8\u786E\u4FDD\u53EF\u79FB\u690D\u6027\u3002</p><p>\u5982\u679C\u4F7F\u7528\u7684 RabbitMQ \u8FBE\u5230\u4E00\u5B9A\u89C4\u6A21\u7684\u65F6\u5019\uFF0C<strong>\u5EFA\u8BAE\u7528\u6237\u5BF9\u4E1A\u52A1\u529F\u80FD\u3001\u573A\u666F\u8FDB\u884C\u5F52\u7C7B\u533A\u5206\uFF0C\u5E76\u5206\u914D\u72EC\u7ACB\u7684 vhost</strong></p><p>vhost \u662F AMQP \u6982\u5FF5\u7684\u57FA\u7840\uFF0C\u5BA2\u6237\u7AEF\u5728\u8054\u673A\u7684\u65F6\u5019 <strong>\u5FC5\u987B\u6307\u5B9A\u4E00\u4E2A vhost</strong>\u3002RabbitMQ \u9ED8\u8BA4\u521B\u5EFA\u7684 vhost \u4E3A <code>/</code>\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u7684\u7528\u6237\u540D guest \u548C\u5BC6\u7801 guest \u5C31\u53EF\u4EE5\u8BBF\u95EE\u5B83\u3002\u4F46\u662F\u4E3A\u4E86\u5B89\u88C5\u548C\u65B9\u4FBF\uFF0C\u5EFA\u8BAE\u91CD\u65B0\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684\u7528\u6237\u6765\u8BBF\u95EE\u5B83\u3002</p><h2 id="_2-\u521B\u5EFA-vhost-add-host" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA-vhost-add-host" aria-hidden="true">#</a> 2. \u521B\u5EFA vhost\uFF1Aadd_host</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl add_host <span class="token punctuation">{</span>vhost<span class="token punctuation">}</span>

vhost: \u5C31\u662F vhost \u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl add_vhost vhost1</span>
Creating vhost <span class="token string">&quot;vhost1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-vhost-\u67E5\u770B-list-vhosts" tabindex="-1"><a class="header-anchor" href="#_3-vhost-\u67E5\u770B-list-vhosts" aria-hidden="true">#</a> 3. vhost \u67E5\u770B\uFF1Alist_vhosts</h2><p>\u67E5\u770B vhost \u7684\u76F8\u5173\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl list_vhosts <span class="token punctuation">[</span>vhostinfoitem<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

vhostinfoitem \u53C2\u6570\uFF1A
	name\uFF1A vhost \u540D\u79F0
	tracing\uFF1A\u8868\u793A\u662F\u5426\u4F7F\u7528\u4E86 RabbitMQ \u7684 trace \u529F\u80FD\u3002trace \u529F\u80FD RabbitMQ \u6269\u5C55\u4E2D\u8BB2\u89E3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_vhosts name tracing</span>
Listing vhosts
vhost1	<span class="token boolean">false</span>
/	    <span class="token boolean">false</span>

<span class="token comment"># \u6253\u5F00 trace \u529F\u80FD</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl trace_on</span>
Starting tracing <span class="token keyword">for</span> vhost <span class="token string">&quot;/&quot;</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_vhosts name tracing</span>
Listing vhosts
vhost1	<span class="token boolean">false</span>
/	    <span class="token boolean">true</span>			<span class="token comment"># \u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u53D8\u6210\u4E86 true</span>
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5220\u9664-vhost-delete-host" tabindex="-1"><a class="header-anchor" href="#_4-\u5220\u9664-vhost-delete-host" aria-hidden="true">#</a> 4. \u5220\u9664 vhost\uFF1Adelete_host</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl delete_host <span class="token punctuation">{</span>vhost<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5220\u9664\u4E00\u4E2A vhost \uFF0C\u540C\u65F6\u4E5F\u4F1A\u5220\u9664\u4E0B\u9762\u7684\u961F\u5217\u3001\u4EA4\u6362\u5668\u3001\u7ED1\u5B9A\u5173\u7CFB\u3001\u7528\u6237\u6743\u9650\u3001\u53C2\u6570\u548C\u7B56\u7565\u7B49\u4FE1\u606F\u3002</p><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl delete_vhost vhost1</span>
Deleting vhost <span class="token string">&quot;vhost1&quot;</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_vhosts</span>
Listing vhosts
/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u6743\u9650\u6388\u4E88-set-permissions" tabindex="-1"><a class="header-anchor" href="#_5-\u6743\u9650\u6388\u4E88-set-permissions" aria-hidden="true">#</a> 5. \u6743\u9650\u6388\u4E88\uFF1Aset_permissions</h2><p>AMQP \u534F\u8BAE\u4E2D\u5E76\u6CA1\u6709\u6307\u5B9A\u6743\u9650\u5728 vhost \u7EA7\u522B\u8FD8\u662F\u5728\u670D\u52A1\u5668\u7EA7\u522B\u5B9E\u73B0\uFF0C\u7531\u5177\u4F53\u7684\u5E94\u7528\u81EA\u5B9A\u4E49\u3002</p><p>\u5728 RabbitMQ \u4E2D\uFF0C\u6743\u9650\u4EE5 vhost \u4E3A\u5355\u4F4D\u3002\u5728 <strong>\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u65F6</strong>\uFF0C\u7528\u6237\u901A\u5E38\u4F1A\u88AB <strong>\u6307\u6D3E\u7ED9\u81F3\u5C11\u4E00\u4E2A vhost</strong>\uFF0C\u610F\u5473\u7740\u8BE5\u7528\u6237\u53EA\u80FD\u8BBF\u95EE\u88AB\u6307\u6D3E\u7684 vhost \u5185\u7684\u8D44\u6E90\u3002</p><p>\u6388\u4E88\u6743\u9650\u547D\u4EE4\u4E3A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl set_permissions <span class="token punctuation">[</span>-p vhost<span class="token punctuation">]</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token punctuation">{</span>conf<span class="token punctuation">}</span> <span class="token punctuation">{</span>write<span class="token punctuation">}</span> <span class="token punctuation">{</span>read<span class="token punctuation">}</span>

\u53C2\u6570\u542B\u4E49\uFF1A
 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-p</span> vhost<span class="token variable">\`</span></span>\uFF1A\u7ED9\u54EA\u4E00\u4E2A vhost \u6388\u6743\u7528\u6237\u8BBF\u95EE\u6743\u9650
 user\uFF1A\u7ED9\u54EA\u4E00\u4E2A\u7528\u6237\u6307\u5B9A\u6743\u9650
 conf\uFF1A \u7528\u4E8E\u5339\u914D\u7528\u6237\u5728\u54EA\u4E9B\u8D44\u6E90\u4E0A\u62E5\u6709\u53EF\u914D\u7F6E\u6743\u9650\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1B\u6307\uFF1A\u961F\u5217\u548C\u4EA4\u6362\u5668\u7684\u521B\u5EFA\u53CA\u5220\u9664\u4E4B\u7C7B\u7684\u64CD\u4F5C
 write\uFF1A\u7528\u4E8E\u5339\u914D\u7528\u6237\u5728\u54EA\u4E9B\u8D44\u6E90\u4E0A\u62E5\u6709\u53EF\u5199\u6743\u9650\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1B\u6307\uFF1A\u53D1\u5E03\u6D88\u606F
 read\uFF1A \u7528\u4E8E\u5339\u914D\u7528\u6237\u5728\u54EA\u4E9B\u8D44\u6E90\u4E0A\u62E5\u6709\u53EF\u8BFB\u6743\u9650\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1B\u6307\uFF1A\u4E0E\u6D88\u606F\u6709\u5173\u7684\u64CD\u4F5C\uFF0C\u5305\u62EC\u8BFB\u53D6\u6D88\u606F\u53CA\u6E05\u7A7A\u6574\u4E2A\u961F\u5217\u7B49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u8868\u5C55\u793A\u4E86\u4E0D\u540C AMQP \u547D\u4EE4\u7684\u5217\u8868\u548C\u5BF9\u5E94\u7684\u6743\u9650</p><table><thead><tr><th>AMQP \u547D\u4EE4</th><th>\u53EF\u914D\u7F6E</th><th>\u53EF\u5199</th><th>\u53EF\u8BFB</th></tr></thead><tbody><tr><td><code>Exchange.Declare</code></td><td>exchange</td><td></td><td></td></tr><tr><td><code>Exchange.Declare(with AE)</code></td><td>exchange</td><td>exchange(AE)</td><td>exchange</td></tr><tr><td><code>Exchange.Delete</code></td><td>exchange</td><td></td><td></td></tr><tr><td><code>Queue.Declare</code></td><td>queue</td><td></td><td></td></tr><tr><td><code>Queue.Declare(with DLX)</code></td><td>queue</td><td>exchange(DLX)</td><td>queue</td></tr><tr><td><code>Queue.Delete</code></td><td>queue</td><td></td><td></td></tr><tr><td><code>Exchange.Bind</code></td><td></td><td>exchange(destination)</td><td>exchange(source)</td></tr><tr><td><code>Exchange.Unbind</code></td><td></td><td>exchange(destination)</td><td>exchange(source)</td></tr><tr><td><code>Queue.Bind</code></td><td></td><td>queue</td><td>exchange</td></tr><tr><td><code>Queue.Unbind</code></td><td></td><td>queue</td><td>exchange</td></tr><tr><td><code>Basic.Publish</code></td><td></td><td>exchange</td><td></td></tr><tr><td><code>Basic.Get</code></td><td></td><td></td><td>queue</td></tr><tr><td><code>Basic.Consume</code></td><td></td><td></td><td>queue</td></tr><tr><td><code>Queue.Purge</code></td><td></td><td></td><td>queue</td></tr></tbody></table><p>\u5B9E\u8DF5\u7EC3\u4E60\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u793A\u4F8B 1. \u6388\u4E88 admin \u7528\u6237\u53EF\u8BBF\u95EE\u865A\u62DF\u4E3B\u673A vhost1\uFF0C\u5E76\u4E14\u5728\u6240\u6709\u8D44\u6E90\u4E0A\u90FD\u5177\u5907\u53EF\u914D\u7F6E\u3001\u53EF\u5199\u3001\u53EF\u8BFB\u7684\u6743\u9650</span>
<span class="token comment"># 	 \u524D\u63D0\u662F vhost \u8981\u5B58\u5728</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl set_permissions -p vhost1 admin &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;</span>
Setting permissions <span class="token keyword">for</span> user <span class="token string">&quot;admin&quot;</span> <span class="token keyword">in</span> vhost <span class="token string">&quot;vhost1&quot;</span>

<span class="token comment"># \u793A\u4F8B 2. \u6388\u4E88 admin \u53EF\u8BBF\u95EE\u865A\u62DF\u4E3B\u673A vhost2\uFF0C\u5728 queue \u5F00\u5934\u7684\u8D44\u6E90\u4E0A\u5177\u5907\u53EF\u914D\u7F6E\u6743\u9650\uFF0C\u5E76\u5728\u6240\u6709\u8D44\u6E90\u4E0A\u62E5\u6709\u53EF\u5199\u3001\u53EF\u8BFB\u6743\u9650</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl set_permissions -p vhost2 admin &quot;^queue.*&quot; &quot;.*&quot; &quot;.*&quot;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-vhost-\u6743\u9650\u67E5\u770B-list-permissions" tabindex="-1"><a class="header-anchor" href="#_6-vhost-\u6743\u9650\u67E5\u770B-list-permissions" aria-hidden="true">#</a> 6. vhost \u6743\u9650\u67E5\u770B\uFF1Alist_permissions</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl list_permissions <span class="token punctuation">[</span>-p vhost<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u865A\u62DF\u4E3B\u673A\u4E0A\u7684\u6743\u9650</p><p>\u5B9E\u8DF5\u7EC3\u4E60\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_permissions -p vhost1</span>
Listing permissions <span class="token keyword">in</span> vhost <span class="token string">&quot;vhost1&quot;</span>
admin	.*	.*	.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u7528\u6237\u6743\u9650\u67E5\u770B-list-user-permissions" tabindex="-1"><a class="header-anchor" href="#_7-\u7528\u6237\u6743\u9650\u67E5\u770B-list-user-permissions" aria-hidden="true">#</a> 7. \u7528\u6237\u6743\u9650\u67E5\u770B\uFF1Alist_user_permissions</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl list_user_permissions <span class="token punctuation">{</span>username<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u663E\u793A\u7528\u6237\u6743\u9650</p><p>\u5B9E\u8DF5\u7EC3\u4E60\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_user_permissions admin</span>
Listing permissions <span class="token keyword">for</span> user <span class="token string">&quot;admin&quot;</span>
vhost1	.*	.*	.*
/		.*	.*	.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u6E05\u9664\u6743\u9650-clear-permissions" tabindex="-1"><a class="header-anchor" href="#_8-\u6E05\u9664\u6743\u9650-clear-permissions" aria-hidden="true">#</a> 8. \u6E05\u9664\u6743\u9650\uFF1Aclear_permissions</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl clear_permissions <span class="token punctuation">[</span>-p vhost<span class="token punctuation">]</span> <span class="token punctuation">{</span>username<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl clear_permissions -p vhost1 admin</span>
Clearing permissions <span class="token keyword">for</span> user <span class="token string">&quot;admin&quot;</span> <span class="token keyword">in</span> vhost <span class="token string">&quot;vhost1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-rabbitmqctl-\u6807\u51C6\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_9-rabbitmqctl-\u6807\u51C6\u8BED\u6CD5" aria-hidden="true">#</a> 9. rabbitmqctl \u6807\u51C6\u8BED\u6CD5</h2><p>\u4E0A\u8FF0\u8BB2\u5230\u7684\u7BA1\u7406\u529F\u80FD\u90FD\u662F\u901A\u8FC7 rabbitmqctl \u6765\u64CD\u4F5C\u7684\u3002\u5B83\u901A\u8FC7 <strong>\u8FDE\u63A5\u5404\u4E2A RabbitMQ \u8282\u70B9\u6765\u6267\u884C\u6240\u6709\u64CD\u4F5C</strong>\u3002</p><p>\u5982\u679C\u6709\u8282\u70B9\u6CA1\u6709\u8FD0\u884C\uFF0C\u5C06\u663E\u793A\u8BCA\u65AD\u4FE1\u606F\uFF1A\u4E0D\u80FD\u5230\u8FBE\u6216\u56E0\u4E0D\u5339\u914D\u7684 Erlang cookie\uFF08\u540E\u7EED\u7AE0\u8282\uFF1ARabbitMQ \u8FD0\u7EF4\u4E2D\u8BB2\u89E3\uFF09\u800C\u62D2\u7EDD\u8FDE\u63A5\u3002</p><p>\u6807\u51C6\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl <span class="token punctuation">[</span>-n node<span class="token punctuation">]</span> <span class="token punctuation">[</span>-t timeout<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token punctuation">{</span>command<span class="token punctuation">}</span> <span class="token punctuation">[</span>command options<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

\u53C2\u6570\u8BF4\u660E\uFF1A
	<span class="token parameter variable">-n</span> node\uFF1A\u9ED8\u8BA4\u8282\u70B9\u662F\u300Crabbit@hostname\u300D, <span class="token function">hostname</span> \u662F\u4E3B\u673A\u540D\u79F0\u3002
		     \u5728\u4E00\u4E2A\u540D\u4E3A\u300Cnode.hidden.com\u300D\u7684\u4E3B\u673A\u4E0A\uFF0CRabbitMQ \u8282\u70B9\u7684\u540D\u79F0\u901A\u5E38\u662F rabbit@node <span class="token punctuation">(</span>\u9664\u975E\u662F RABBITMQ_NODENAME \u53C2\u6570\u5728\u542F\u52A8\u65F6\u88AB\u8BBE\u7F6E\u4E86\u81EA\u5B9A\u4E49\u7684\u503C<span class="token punctuation">)</span>
		     \u5728 linux \u6307\u4EE4\u7684 <span class="token variable"><span class="token variable">\`</span><span class="token function">hostname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span> \u4E0B\uFF0C\u901A\u5E38\u8F93\u51FA\u7684\u5C31\u662F @ \u540E\u9762\u7684\u4FE1\u606F
	<span class="token parameter variable">-t</span> timeout\uFF1A\u64CD\u4F5C\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\u3002\u53EA\u9002\u7528\u4E8E list_xxx \u7C7B\u578B\u7684\u547D\u4EE4\uFF0C\u9ED8\u8BA4\u65E0\u8D85\u65F6
	-q\uFF1A\u542F\u7528 quiet \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5C4F\u853D\u4E00\u4E9B\u6D88\u606F\u7684\u8F93\u51FA\u3002\u9ED8\u8BA4\u4E0D\u5F00\u542F
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6F14\u793A -q \u548C -t timeout \u7684\u6548\u679C</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_vhosts</span>
Listing vhosts
vhost1
/
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_vhosts -q</span>
vhost1				<span class="token comment"># \u4F7F\u7528 -q \u770B\u5230\u8FD9\u91CC\u5C11\u4E86\u4E00\u5217 vhosts \u7684\u8F93\u51FA</span>
/
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_vhosts -q -t 1</span>
vhost1
/
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl list_vhosts -q -t 0</span>
Error: <span class="token punctuation">{</span>timeout,0.0<span class="token punctuation">}</span>
<span class="token comment"># \u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u8D85\u65F6\u4FE1\u606F\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,52),p={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/05/01.html",target:"_blank",rel:"noopener noreferrer"},u=d("\u591A\u79DF\u6237\u4E0E\u6743\u9650\uFF1Avhost");function v(m,h){const n=c("ExternalLinkIcon");return t(),e("div",null,[r,s("p",null,[s("a",p,[u,i(n)])])])}const g=a(l,[["render",v],["__file","rabbitmq-y-manange-vhost.html.vue"]]);export{g as default};
