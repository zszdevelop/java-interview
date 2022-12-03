import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as i,d as p,e as c,r as l}from"./app.0227f3fb.js";const o={},r=p(`<h1 id="rabbitmq\u7BA1\u7406-web-\u7AEF\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u7BA1\u7406-web-\u7AEF\u7BA1\u7406" aria-hidden="true">#</a> RabbitMQ\u7BA1\u7406 - Web \u7AEF\u7BA1\u7406</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u4F7F\u7528 rabbitmqctl \u5DE5\u5177\u7BA1\u7406 RabbitMQ\uFF0C\u5F53\u524D\u7684\u7528\u6237\u9700\u8981\u62E5\u6709\u8BBF\u95EE Erlang cookie \u7684\u6743\u9650\uFF0C\u7531\u4E8E\u670D\u52A1\u5668\u53EF\u80FD\u662F\u4EE5 guest \u6216\u5219 root \u7528\u6237\u8EAB\u4EFD\u6765\u8FD0\u884C\u7684\uFF0C\u56E0\u6B64\u9700\u8981\u83B7\u5F97\u8FD9\u4E9B\u6587\u4EF6\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u6709\u53EF\u80FD\u5C31\u5F15\u7533\u51FA\u6765\u4E00\u4E9B\u6743\u9650\u7684\u7BA1\u7406\u95EE\u9898\u3002</p><p>\u8FD8\u53EF\u4EE5\u901A\u8FC7 RabbitMQ managemnent \u63D2\u4EF6\u6765\u7BA1\u7406\uFF0C\u5B83\u540C\u6837\u662F\u7531 Erlang \u8BED\u8A00\u7F16\u5199\u7684\uFF0C\u548C RabbitMQ \u670D\u52A1\u8FD0\u884C\u5728\u540C\u4E00\u4E2A erlang \u865A\u62DF\u673A\u4E2D\u3002</p><p>\u8BE5\u63D2\u4EF6\u5C31\u662F\u6DB5\u76D6\u4E86\u6240\u6709 RabbitMQ \u7BA1\u7406\u7684\u529F\u80FD\u3002</p><p>\u4F7F\u7528 Web \u7BA1\u7406\u754C\u9762\u9700\u8981\u542F\u7528 RabbitMQ management \u63D2\u4EF6\uFF0C\u63D2\u4EF6\u90FD\u9ED8\u8BA4\u653E\u5728 <code>$RABBITMQ_HOME/plugins</code> \u76EE\u5F55\u4E0B\uFF08\u4E5F\u5C31\u662F RabbitMQ \u5B89\u88C5\u76EE\u5F55\u4E0B\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ls /opt/rabbitmq/plugins/</span>
amqp_client-3.6.15.ez                        rabbitmq_federation-3.6.15.ez               rabbitmq_sharding-3.6.15.ez           rabbitmq_web_mqtt_examples-3.6.15.ez
cowboy-1.0.4.ez                              rabbitmq_federation_management-3.6.15.ez    rabbitmq_shovel-3.6.15.ez             rabbitmq_web_stomp-3.6.15.ez
cowlib-1.0.2.ez                              rabbitmq_jms_topic_exchange-3.6.15.ez       rabbitmq_shovel_management-3.6.15.ez  rabbitmq_web_stomp_examples-3.6.15.ez
rabbit_common-3.6.15.ez                      rabbitmq_management-3.6.15.ez               rabbitmq_stomp-3.6.15.ez              ranch-1.3.2.ez
rabbitmq_amqp1_0-3.6.15.ez                   rabbitmq_management_agent-3.6.15.ez         rabbitmq_top-3.6.15.ez                README
rabbitmq_auth_backend_ldap-3.6.15.ez         rabbitmq_management_visualiser-3.6.15.ez    rabbitmq_tracing-3.6.15.ez            recon-2.3.2.ez
rabbitmq_auth_mechanism_ssl-3.6.15.ez        rabbitmq_mqtt-3.6.15.ez                     rabbitmq_trust_store-3.6.15.ez        sockjs-0.3.4.ez
rabbitmq_consistent_hash_exchange-3.6.15.ez  rabbitmq_random_exchange-3.6.15.ez          rabbitmq_web_dispatch-3.6.15.ez
rabbitmq_event_exchange-3.6.15.ez            rabbitmq_recent_history_exchange-3.6.15.ez  rabbitmq_web_mqtt-3.6.15.ez
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.ez</code> \u7ED3\u5C3E\u7684\u5C31\u662F\u63D2\u4EF6\u4E86\uFF0C\u5176\u4E2D <code>rabbitmq_management-3.6.15.ez</code> \u5219\u662F web \u7BA1\u7406\u63D2\u4EF6\u3002</p><h2 id="_2-rabbitmq-plugins" tabindex="-1"><a class="header-anchor" href="#_2-rabbitmq-plugins" aria-hidden="true">#</a> 2. rabbitmq-plugins</h2><p>\u7BA1\u7406\u63D2\u4EF6\u7684\u5DE5\u5177\u5C31\u662F rabbitmq-plugins\uFF0C\u8BED\u6CD5\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmq-plugins <span class="token punctuation">[</span>-n node<span class="token punctuation">]</span> <span class="token punctuation">{</span>command<span class="token punctuation">}</span> <span class="token punctuation">[</span>command options<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token builtin class-name">command</span> \u53C2\u6570\uFF1A
	enable\uFF1A\u542F\u7528\u63D2\u4EF6
	disable\uFF1A\u5173\u95ED\u63D2\u4EF6
	list\uFF1A\u67E5\u770B\u5F53\u524D\u63D2\u4EF6\u4F7F\u7528\u60C5\u51B5
<span class="token builtin class-name">command</span> options \u53C2\u6570\uFF1A
	plugin-name\uFF1A\u63D2\u4EF6\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u542F\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u542F\u7528\u63D2\u4EF6" aria-hidden="true">#</a> 3. \u542F\u7528\u63D2\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmq-plugins <span class="token builtin class-name">enable</span> <span class="token punctuation">{</span>plugin-name<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u7528 rabbitmq_management \u63D2\u4EF6</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmq-plugins enable rabbitmq_management</span>
The following plugins have been enabled:
  amqp_client
  cowlib
  cowboy
  rabbitmq_web_dispatch
  rabbitmq_management_agent
  rabbitmq_management

Applying plugin configuration to rabbit@study<span class="token punctuation">..</span>. started <span class="token number">6</span> plugins.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u7528 rabbitmq_management \u63D2\u4EF6\u540E\uFF0C\u9700\u8981\u91CD\u542F rabbitmq \u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E66\u4E0A\u6CA1\u6709\u8BB2\u89E3\u600E\u4E48\u91CD\u542F\uFF0C\u7B14\u8005\u53EA\u80FD\u8FD9\u6837\u91CD\u542F\u4E86</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop</span>
Stopping and halting <span class="token function">node</span> rabbit@study
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmq-server -detached</span>
Warning: PID <span class="token function">file</span> not written<span class="token punctuation">;</span> <span class="token parameter variable">-detached</span> was passed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u653E\u9632\u706B\u5899\uFF0C\u63D2\u4EF6\u4F1A\u4F7F\u7528 15672 \u63D0\u4F9B\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">15672</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u8BBF\u95EE\uFF0C\u4F60\u7684\u673A\u5668\u4E0A\u7684 15672 \u7AEF\u53E3\uFF0C\u6BD4\u5982\u7B14\u8005\u7684 <code>http://192.168.4.250:15672</code>, \u5C31\u80FD\u770B\u5230\u7BA1\u7406\u754C\u9762\u4E86</p><h2 id="_4-\u67E5\u770B\u63D2\u4EF6\u4F7F\u7528\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u770B\u63D2\u4EF6\u4F7F\u7528\u60C5\u51B5" aria-hidden="true">#</a> 4. \u67E5\u770B\u63D2\u4EF6\u4F7F\u7528\u60C5\u51B5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmq-plugins list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rabbitmq-plugins list</span>
 Configured: E <span class="token operator">=</span> explicitly enabled<span class="token punctuation">;</span> e <span class="token operator">=</span> implicitly enabled
 <span class="token operator">|</span> Status:   * <span class="token operator">=</span> running on rabbit@study
 <span class="token operator">|</span>/
<span class="token punctuation">[</span>e*<span class="token punctuation">]</span> amqp_client                       <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>e*<span class="token punctuation">]</span> cowboy                            <span class="token number">1.0</span>.4
<span class="token punctuation">[</span>e*<span class="token punctuation">]</span> cowlib                            <span class="token number">1.0</span>.2
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_amqp1_0                  <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_auth_backend_ldap        <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_auth_mechanism_ssl       <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_consistent_hash_exchange <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_event_exchange           <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_federation               <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_federation_management    <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_jms_topic_exchange       <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>E*<span class="token punctuation">]</span> rabbitmq_management               <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>e*<span class="token punctuation">]</span> rabbitmq_management_agent         <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_management_visualiser    <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_mqtt                     <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_random_exchange          <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_recent_history_exchange  <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_sharding                 <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_shovel                   <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_shovel_management        <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_stomp                    <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_top                      <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_tracing                  <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_trust_store              <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>e*<span class="token punctuation">]</span> rabbitmq_web_dispatch             <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_web_mqtt                 <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_web_mqtt_examples        <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_web_stomp                <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> rabbitmq_web_stomp_examples       <span class="token number">3.6</span>.15
<span class="token punctuation">[</span>  <span class="token punctuation">]</span> sockjs                            <span class="token number">0.3</span>.4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E5F\u8BF4\u660E\u4E86\uFF1A</p><ul><li>e\uFF1A\u662F\u9690\u5F0F\u542F\u7528</li><li>E\uFF1A\u663E\u5F0F\u542F\u7528</li><li><code>*</code> \u5728\u8FD0\u884C\u4E2D\u7684\u63D2\u4EF6</li></ul><p>\u53EF\u4EE5\u770B\u5230\u4E0A\u9762 rabbitmq_management \u662F <code>E*</code> \uFF0C\u5C31\u662F\u6211\u4EEC\u521A\u624D\u663E\u5F0F\u542F\u7528\u7684\u3002</p><h2 id="_5-\u5173\u95ED\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u5173\u95ED\u63D2\u4EF6" aria-hidden="true">#</a> 5. \u5173\u95ED\u63D2\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmq-plugins disable <span class="token punctuation">{</span>plugin-name<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-web-\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#_6-web-\u754C\u9762" aria-hidden="true">#</a> 6. web \u754C\u9762</h2><p><code>http://192.168.4.250:15672</code> \u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6211\u4EEC\u521B\u5EFA\u7684\u8D26\u6237\u6765\u767B\u5F55</p><p>\u5BF9\u4E8E web \u754C\u9762\u7684\u529F\u80FD\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u8BB0\u5F55\u4E86\uFF0C\u5176\u5B9E\u4ED6\u5BF9\u5E94\u4E86\u524D\u9762\u8BB2\u89E3\u7684\u4E00\u4E9B\u7BA1\u7406\u529F\u80FD\u3002\u53EA\u662F\u56FE\u5F62\u5316\u4E86\uFF0C\u53EF\u4EE5\u53C2\u8003\u524D\u9762\u7684\u529F\u80FD\u53BB\u754C\u9762\u4E0A\u627E\u5BF9\u5E94\u7684\u9875\u9762</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,33),b={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/05/03.html",target:"_blank",rel:"noopener noreferrer"},u=c("Web \u7AEF\u7BA1\u7406");function d(m,v){const a=l("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",b,[u,i(a)])])])}const h=s(o,[["render",d],["__file","rabbitmq-y-manange-web.html.vue"]]);export{h as default};
