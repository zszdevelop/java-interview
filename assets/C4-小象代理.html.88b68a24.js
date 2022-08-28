import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.70ab84e4.js";const e={},t=p(`<h1 id="\u5C0F\u8C61\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u8C61\u4EE3\u7406" aria-hidden="true">#</a> \u5C0F\u8C61\u4EE3\u7406</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u53CD\u722C\u866B\u6280\u672F\u4E2D\u6700\u5E38\u89C1\u7684\u6280\u672F\u5C31\u662F\u5C01ip\uFF0C\u90A3\u4E48\u6211\u4EEC\u5982\u4F55\u5BF9\u6297\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u9AD8\u533Fip\u3002\u8FD9\u4E2A\u9AD8\u533Fip\u53EA\u5B58\u6D3B1-2\u5206\u949F\u3002\u6211\u4EEC\u6BCF\u683C10\u79D2\u6362\u4E00\u4E2Aip</p><h2 id="_2-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528" aria-hidden="true">#</a> 2. \u4F7F\u7528</h2><p>https://www.xiaoxiangdaili.com/ip-short/guide</p><ol><li><p>\u7533\u8BF7\u8BD5\u7528</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210302095623043.png" alt="image-20210302095623043"></p></li><li><p>\u83B7\u53D6\u4EE3\u7406\u7684ip</p><p>https://api.xiaoxiangdaili.com/ip/get?appKey=683854977391022080&amp;appSecret=IXhGvwsx&amp;cnt=20&amp;wt=json</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210302100007951.png" alt="image-20210302100007951"></p></li></ol><h2 id="_3-\u9879\u76EE\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_3-\u9879\u76EE\u96C6\u6210" aria-hidden="true">#</a> 3. \u9879\u76EE\u96C6\u6210</h2><p>\u601D\u8DEF\uFF1A</p><ol><li>\u6BCF\u96944s\u53D6\u4E00\u6B21\u9AD8\u533Fip</li><li>\u5C06\u9AD8\u533Fip\u4FDD\u5B58\u5230redis list</li><li>\u5F53redis\u4E2D\u7684ip&gt;=20 \u7684\u65F6\u5019\uFF0C\u4E0D\u518D\u5F80\u91CC\u6DFB\u52A0</li><li>\u6BCF\u6B21\u8BF7\u6C42\u6D88\u8017\u4E00\u4E2Aip</li></ol><p>\u4EE3\u7801</p><ol><li><p>redis \u4EE3\u7801: db_handle_redis.py</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> redis
<span class="token keyword">import</span> json

<span class="token keyword">class</span> <span class="token class-name">DbHandleRedis</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> db_host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>db_port<span class="token operator">=</span><span class="token number">6379</span><span class="token punctuation">,</span>db_index<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>db_host <span class="token operator">=</span> db_host
        self<span class="token punctuation">.</span>db_port <span class="token operator">=</span> db_port
        self<span class="token punctuation">.</span>db_index <span class="token operator">=</span> db_index
        self<span class="token punctuation">.</span>redis_conn <span class="token operator">=</span> redis<span class="token punctuation">.</span>StrictRedis<span class="token punctuation">(</span>self<span class="token punctuation">.</span>db_host<span class="token punctuation">,</span>self<span class="token punctuation">.</span>db_port<span class="token punctuation">,</span>self<span class="token punctuation">.</span>db_index<span class="token punctuation">,</span>decode_responses<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__del__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>redis_conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">rpush_ip_proxy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>ip_proxy<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>redis_conn<span class="token punctuation">.</span>rpush<span class="token punctuation">(</span><span class="token string">&#39;ip_proxy_list&#39;</span><span class="token punctuation">,</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>ip_proxy<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">lpop_ip_proxy</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ip_proxy_json <span class="token operator">=</span> self<span class="token punctuation">.</span>redis_conn<span class="token punctuation">.</span>lpop<span class="token punctuation">(</span><span class="token string">&#39;ip_proxy_list&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> ip_proxy_json <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        ip_proxy_json <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>ip_proxy_json<span class="token punctuation">)</span>
        <span class="token keyword">return</span> ip_proxy_json

    <span class="token keyword">def</span> <span class="token function">llen_ip_proxy</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>redis_conn<span class="token punctuation">.</span>llen<span class="token punctuation">(</span><span class="token string">&#39;ip_proxy_list&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u83B7\u53D6\u9AD8\u533Fip\u4EE3\u7801\uFF1A ip_proxy_handle.py</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> requests
<span class="token keyword">from</span> db_handle_redis <span class="token keyword">import</span> DbHandleRedis


<span class="token keyword">def</span> <span class="token function">get_proxy_ip</span><span class="token punctuation">(</span>db_redis<span class="token punctuation">)</span><span class="token punctuation">:</span>
    base_url <span class="token operator">=</span> <span class="token string">&#39;https://api.xiaoxiangdaili.com/ip/get?appKey=683854977391022080&amp;appSecret=IXhGvwsx&amp;cnt=20&amp;wt=json&#39;</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># \u95F4\u96944s\u8F6E\u8BE2</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
        <span class="token comment"># redis \u4E2D\u7684ip\u5982\u679C\u5927\u4E8E20\u4E2A\uFF0C\u5219\u4E0D\u518D\u5F80\u91CC\u6DFB\u52A0</span>
        ip_proxy_len <span class="token operator">=</span> db_redis<span class="token punctuation">.</span>llen_ip_proxy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> ip_proxy_len <span class="token operator">&gt;=</span> <span class="token number">20</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;redis\u4E2D\u7684\u9AD8\u533Fip\u8D85\u8FC720\u4E2A&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>base_url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                resp_data <span class="token operator">=</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> resp_data<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                    <span class="token comment"># \u63D0\u53D6\u51FAip\u548C\u7AEF\u53E3\uFF0C\u8BB0\u5F55\u5F53\u524D\u65F6\u95F4\u3002\u4FDD\u5B58\u5728\u6570\u636E\u5E93\u4E2D</span>
                    ip_data <span class="token operator">=</span> resp_data<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;ip&#39;</span><span class="token punctuation">]</span>
                    port_data <span class="token operator">=</span> resp_data<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;port&#39;</span><span class="token punctuation">]</span>
                    ip_proxy <span class="token operator">=</span> <span class="token string">&#39;{}:{}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip_data<span class="token punctuation">,</span> port_data<span class="token punctuation">)</span>
                    current_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    ip_info <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                    ip_info<span class="token punctuation">[</span><span class="token string">&#39;ip_proxy&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> ip_proxy
                    ip_info<span class="token punctuation">[</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> current_time
                    db_redis<span class="token punctuation">.</span>rpush_ip_proxy<span class="token punctuation">(</span>ip_info<span class="token punctuation">)</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ip\u4EE3\u7406\u4FE1\u606F\uFF1A&#39;</span> <span class="token operator">+</span> ip_proxy<span class="token punctuation">)</span>
                <span class="token keyword">elif</span> resp_data<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1003</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ip proxy is over.&#39;</span><span class="token punctuation">)</span>
                    <span class="token keyword">break</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;e:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    db_redis <span class="token operator">=</span> DbHandleRedis<span class="token punctuation">(</span><span class="token punctuation">)</span>
    get_proxy_ip<span class="token punctuation">(</span>db_redis<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5177\u4F53\u7684\u6293\u5305\u8BBE\u7F6E\u4EE3\u7406\uFF1Acrawler.py</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> requests

<span class="token keyword">class</span> <span class="token class-name">CrawlerApp</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> db_redis<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>db_redis <span class="token operator">=</span> db_redis

    <span class="token keyword">def</span> <span class="token function">get_ip_proxy</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ip_proxy_info <span class="token operator">=</span> self<span class="token punctuation">.</span>db_redis<span class="token punctuation">.</span>lpop_ip_proxy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> ip_proxy_info <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------\u672A\u83B7\u53D6\u5230ip_proxy-------&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            current_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> current_time <span class="token operator">-</span> ip_proxy_info<span class="token punctuation">[</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span><span class="token number">120</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------ip_proxy \u8D85\u8FC72\u5206\u949F-------&#39;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            self<span class="token punctuation">.</span>ip_proxy <span class="token operator">=</span> ip_proxy_info<span class="token punctuation">[</span><span class="token string">&#39;ip_proxy&#39;</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>

    <span class="token comment"># \u5177\u4F53\u4E1A\u52A1\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u5148\u83B7\u53D6ip\u3002\u5224\u65AD\u662F\u5426\u8D85\u65F6\uFF0C\u4E0D\u8D85\u65F6\u6DFB\u52A0\u5230\u4EE3\u7406</span>
    <span class="token keyword">def</span> <span class="token function">get_yewu</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        bool_result <span class="token operator">=</span> self<span class="token punctuation">.</span>get_ip_proxy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> bool_result <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>

        ip_proxies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        ip_proxies<span class="token punctuation">[</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>ip_proxy

        requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://example.org&quot;</span><span class="token punctuation">,</span> proxies<span class="token operator">=</span>ip_proxies<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11),o=[t];function i(c,l){return s(),a("div",null,o)}var d=n(e,[["render",i],["__file","C4-\u5C0F\u8C61\u4EE3\u7406.html.vue"]]);export{d as default};
