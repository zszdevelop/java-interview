import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as o,e as l,r as c}from"./app.75100209.js";const i={},u=o(`<h1 id="\u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668</h1><p>\u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668\u90FD\u662FAOP\u7F16\u7A0B\u601D\u60F3\u7684\u4F53\u73B0</p><h2 id="_1-\u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-\u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668\u533A\u522B" aria-hidden="true">#</a> 1. \u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668\u533A\u522B</h2><ol><li><code>Filter</code> \u662F\u57FA\u4E8E <strong>\u51FD\u6570\u56DE\u8C03</strong>\u7684\uFF0C\u800C <code>Interceptor</code> \u5219\u662F\u57FA\u4E8E <code>Java</code><strong>\u53CD\u5C04</strong> \u548C <strong>\u52A8\u6001\u4EE3\u7406</strong>\u3002</li><li><code>Filter</code> \u4F9D\u8D56\u4E8E <code>Servlet</code> \u5BB9\u5668\uFF0C\u800C <code>Interceptor</code> \u4E0D\u4F9D\u8D56\u4E8E <code>Servlet</code> \u5BB9\u5668\u3002</li><li><code>Filter</code> \u5BF9\u51E0\u4E4E <strong>\u6240\u6709\u7684\u8BF7\u6C42</strong> \u8D77\u4F5C\u7528\uFF0C\u800C <code>Interceptor</code> \u53EA\u5BF9 <code>Controller</code> \u5BF9\u8BF7\u6C42\u8D77\u4F5C\u7528\u3002</li></ol><h2 id="_2-\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> 2. \u6267\u884C\u987A\u5E8F</h2><p>\u5BF9\u4E8E\u81EA\u5B9A\u4E49 <code>Servlet</code> \u5BF9\u8BF7\u6C42\u5206\u53D1\u6D41\u7A0B\uFF1A</p><ol><li><code>Filter</code> \u8FC7\u6EE4\u8BF7\u6C42\u5904\u7406\uFF1B</li><li><code>Servlet</code> \u5904\u7406\u8BF7\u6C42\uFF1B</li><li><code>Filter</code> \u8FC7\u6EE4\u54CD\u5E94\u5904\u7406\u3002</li></ol><p>\u5BF9\u4E8E\u81EA\u5B9A\u4E49 <code>Controller</code> \u7684\u8BF7\u6C42\u5206\u53D1\u6D41\u7A0B\uFF1A</p><ol><li><code>Filter</code> \u8FC7\u6EE4\u8BF7\u6C42\u5904\u7406\uFF1B</li><li><code>Interceptor</code> \u62E6\u622A\u8BF7\u6C42\u5904\u7406\uFF1B</li><li>\u5BF9\u5E94\u7684 <code>HandlerAdapter</code> \u5904\u7406\u8BF7\u6C42\uFF1B</li><li><code>Interceptor</code> \u62E6\u622A\u54CD\u5E94\u5904\u7406\uFF1B</li><li><code>Interceptor</code> \u7684\u6700\u7EC8\u5904\u7406\uFF1B</li><li><code>Filter</code> \u8FC7\u6EE4\u54CD\u5E94\u5904\u7406\u3002</li></ol><h2 id="_3-spring-boot-\u4F7F\u7528\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_3-spring-boot-\u4F7F\u7528\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 3. Spring boot \u4F7F\u7528\u8FC7\u6EE4\u5668</h2><p>\u4E24\u79CD\u65B9\u5F0F\uFF1A 1\u3001\u4F7F\u7528spring boot\u63D0\u4F9B\u7684FilterRegistrationBean\u6CE8\u518CFilter 2\u3001\u4F7F\u7528\u539F\u751Fservlet\u6CE8\u89E3\u5B9A\u4E49Filter \u4E24\u79CD\u65B9\u5F0F\u7684\u672C\u8D28\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u90FD\u662F\u53BBFilterRegistrationBean\u6CE8\u518C\u81EA\u5B9A\u4E49Filter</p><h3 id="_3-1-\u65B9\u5F0F\u4E00-filterregistrationbean\u6CE8\u518Cfilter" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B9\u5F0F\u4E00-filterregistrationbean\u6CE8\u518Cfilter" aria-hidden="true">#</a> 3.1 \u65B9\u5F0F\u4E00 (FilterRegistrationBean\u6CE8\u518CFilter)</h3><ol><li><p>\u7B2C\u4E00\u6B65\uFF1A\u5148\u5B9A\u4E49Filter</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> filterConfig<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> servletRequest<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> servletResponse<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something \u5904\u7406request \u6216response</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;filter1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8C03\u7528filter\u94FE\u4E2D\u7684\u4E0B\u4E00\u4E2Afilter</span>
        filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">,</span>servletResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7B2C\u4E8C\u6B65\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FilterConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span> <span class="token function">registrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FilterRegistrationBean</span> filterRegistrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filterRegistrationBean<span class="token punctuation">.</span><span class="token function">addUrlPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> filterRegistrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_3-2-\u65B9\u5F0F\u4E8C-webfilter" tabindex="-1"><a class="header-anchor" href="#_3-2-\u65B9\u5F0F\u4E8C-webfilter" aria-hidden="true">#</a> 3.2 \u65B9\u5F0F\u4E8C @WebFilter</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CE8\u5165spring\u5BB9\u5668</span>
<span class="token annotation punctuation">@Component</span>
<span class="token comment">// \u5B9A\u4E49filterName \u548C\u8FC7\u6EE4\u7684url</span>
<span class="token annotation punctuation">@WebFilter</span><span class="token punctuation">(</span>filterName <span class="token operator">=</span> <span class="token string">&quot;my2Filter&quot;</span> <span class="token punctuation">,</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/*&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">My2Filter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> filterConfig<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> servletRequest<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> servletResponse<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;filter2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-spring-boot-\u62E6\u622A\u5668\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-spring-boot-\u62E6\u622A\u5668\u7684\u4F7F\u7528" aria-hidden="true">#</a> 4. Spring boot \u62E6\u622A\u5668\u7684\u4F7F\u7528</h2><ol><li><p>\u5B9A\u4E49\u62E6\u622A\u5668</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;preHandle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;postHandle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;afterCompletion&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u62E6\u622A\u5668\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterceptorConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Controller\u6F14\u793A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/home&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">home</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;myhome&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>preHandle
home
postHandle
afterCompletion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,18),r={href:"https://blog.csdn.net/heweimingming/article/details/79993591",target:"_blank",rel:"noopener noreferrer"},d=l("spring boot \u8FC7\u6EE4\u5668\u3001\u62E6\u622A\u5668\u7684\u533A\u522B\u4E0E\u4F7F\u7528");function k(v,m){const s=c("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[d,p(s)])])])}const h=a(i,[["render",k],["__file","spring-y-filter-interceptor.html.vue"]]);export{h as default};
