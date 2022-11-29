import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.75100209.js";const e={},p=t(`<h1 id="springboot-starter-\u6743\u9650\u767D\u540D\u5355\u81EA\u52A8\u5316\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#springboot-starter-\u6743\u9650\u767D\u540D\u5355\u81EA\u52A8\u5316\u914D\u7F6E" aria-hidden="true">#</a> SpringBoot-Starter - \u6743\u9650\u767D\u540D\u5355\u81EA\u52A8\u5316\u914D\u7F6E</h1><h2 id="_1-\u81EA\u5B9A\u4E49\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u81EA\u5B9A\u4E49\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u81EA\u5B9A\u4E49\u6B65\u9AA4</h2><h3 id="_1-1-\u5F15\u5165springboot-\u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5F15\u5165springboot-\u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56" aria-hidden="true">#</a> 1.1 \u5F15\u5165SpringBoot \u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-configuration-processor&lt;/artifactId&gt;
    &lt;optional&gt;true&lt;/optional&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u521B\u5EFA\u5C5E\u6027\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-2-\u521B\u5EFA\u5C5E\u6027\u7C7B" aria-hidden="true">#</a> 1.2 \u521B\u5EFA\u5C5E\u6027\u7C7B</h3><p>\u521B\u5EFA\u5C5E\u6027\u7C7B\uFF0Cprefix = \u201Cywt.cloud.security\u201D\u4EE3\u8868\u8BE5\u9879\u76EE\u5728\u5C5E\u6027\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684\u524D\u7F00\uFF0C\u5373\u53EF\u4EE5\u5728\u5C5E\u6027\u6587\u4EF6\u4E2D\u901A\u8FC7 ywt.cloud.security.anonUris=/login\uFF0C\u5C31\u53EF\u4EE5\u6539\u53D8\u5C5E\u6027\u7C7B\u5B57\u6BB5 anonUris \u7684\u503C\u4E86\u3002</p><ul><li>\u914D\u7F6E anonUris: \u914D\u7F6E\u514D\u8BA4\u8BC1\u8D44\u6E90\u8DEF\u5F84</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;ywt.cloud.security&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YwtCloudSecurityProperties</span> <span class="token punctuation">{</span>


    <span class="token doc-comment comment">/**
     * \u662F\u5426\u5F00\u542F\u5B89\u5168\u914D\u7F6E
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> enable<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u914D\u7F6E\u9700\u8981\u8BA4\u8BC1\u7684uri\uFF0C\u9ED8\u8BA4\u4E3A\u6240\u6709/**
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> authUri <span class="token operator">=</span> <span class="token class-name">EndpointConstant</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u514D\u8BA4\u8BC1\u8D44\u6E90\u8DEF\u5F84\uFF0C\u652F\u6301\u901A\u914D\u7B26
     * \u591A\u4E2A\u503C\u65F6\u4F7F\u7528\u9017\u53F7\u5206\u9694
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> anonUris<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u662F\u5426\u53EA\u80FD\u901A\u8FC7\u7F51\u5173\u83B7\u53D6\u8D44\u6E90
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> onlyFetchByGateway <span class="token operator">=</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token constant">TRUE</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">getEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> enable<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEnable</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> enable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>enable <span class="token operator">=</span> enable<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAuthUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> authUri<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAuthUri</span><span class="token punctuation">(</span><span class="token class-name">String</span> authUri<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>authUri <span class="token operator">=</span> authUri<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAnonUris</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> anonUris<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAnonUris</span><span class="token punctuation">(</span><span class="token class-name">String</span> anonUris<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>anonUris <span class="token operator">=</span> anonUris<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">getOnlyFetchByGateway</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> onlyFetchByGateway<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOnlyFetchByGateway</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> onlyFetchByGateway<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>onlyFetchByGateway <span class="token operator">=</span> onlyFetchByGateway<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;FebsCloudSecurityProperties{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;enable=&quot;</span> <span class="token operator">+</span> enable <span class="token operator">+</span>
                <span class="token string">&quot;, authUri=&#39;&quot;</span> <span class="token operator">+</span> authUri <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, anonUris=&#39;&quot;</span> <span class="token operator">+</span> anonUris <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, onlyFetchByGateway=&quot;</span> <span class="token operator">+</span> onlyFetchByGateway <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-3-\u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B" aria-hidden="true">#</a> 1.3 \u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableGlobalMethodSecurity</span><span class="token punctuation">(</span>prePostEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">YwtCloudSecurityProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;ywt.cloud.security.enable&quot;</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span> matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YwtCloudSecurityAutoconfigure</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnMissingBean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;accessDeniedHandler&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">YwtAccessDeniedHandler</span> <span class="token function">accessDeniedHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">YwtAccessDeniedHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnMissingBean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;authenticationEntryPoint&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">YwtAuthExceptionEntryPoint</span> <span class="token function">authenticationEntryPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">YwtAuthExceptionEntryPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnMissingBean</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">PasswordEncoder</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">PasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">YwtCloudSecurityInteceptorConfigure</span> <span class="token function">febsCloudSecurityInteceptorConfigure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">YwtCloudSecurityInteceptorConfigure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RequestInterceptor</span> <span class="token function">oauth2FeignRequestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> requestTemplate <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> gatewayToken <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">Base64Utils</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token class-name">XfConstant</span><span class="token punctuation">.</span><span class="token constant">GATEWAY_TOKEN_VALUE</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            requestTemplate<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token class-name">XfConstant</span><span class="token punctuation">.</span><span class="token constant">GATEWAY_TOKEN_HEADER</span><span class="token punctuation">,</span> gatewayToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> authorizationToken <span class="token operator">=</span> <span class="token class-name">FebsUtil</span><span class="token punctuation">.</span><span class="token function">getCurrentTokenValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>authorizationToken<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                requestTemplate<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token class-name">HttpHeaders</span><span class="token punctuation">.</span><span class="token constant">AUTHORIZATION</span><span class="token punctuation">,</span> <span class="token class-name">XfConstant</span><span class="token punctuation">.</span><span class="token constant">OAUTH2_TOKEN_TYPE</span> <span class="token operator">+</span> authorizationToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-meta-inf-\u76EE\u5F55\u4E0B\u521B\u5EFA-spring-factories" tabindex="-1"><a class="header-anchor" href="#_1-4-meta-inf-\u76EE\u5F55\u4E0B\u521B\u5EFA-spring-factories" aria-hidden="true">#</a> 1.4 META-INF \u76EE\u5F55\u4E0B\u521B\u5EFA spring.factories</h3><p>\u5728 META-INF \u76EE\u5F55\u4E0B\u521B\u5EFA spring.factories\uFF0C\u56E0\u4E3A SpringBoot \u81EA\u52A8\u5316\u914D\u7F6E\u6700\u7EC8\u5C31\u662F\u8981\u626B\u63CF META-INF/spring.factories \u6765\u52A0\u8F7D\u9879\u76EE\u7684\u81EA\u52A8\u5316\u914D\u7F6E\u7C7B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Auto Configure
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\
com.ywt.common.security.starter.configure.YwtCloudSecurityAutoconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5F15\u7528starter" tabindex="-1"><a class="header-anchor" href="#_2-\u5F15\u7528starter" aria-hidden="true">#</a> 2. \u5F15\u7528Starter</h2><h3 id="_2-1-\u53E6\u4E00\u4E2A\u9879\u76EE\u5F15\u5165-starter" tabindex="-1"><a class="header-anchor" href="#_2-1-\u53E6\u4E00\u4E2A\u9879\u76EE\u5F15\u5165-starter" aria-hidden="true">#</a> 2.1 \u53E6\u4E00\u4E2A\u9879\u76EE\u5F15\u5165 starter</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.ywt&lt;/groupId&gt;
   &lt;artifactId&gt;ywt-common-security-starter&lt;/artifactId&gt;
   &lt;version&gt;\${ywt-cloud.version}&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 application.properties \u4E2D\u6DFB\u52A0\u5C5E\u6027\uFF1A</p><h3 id="_2-2-\u8FD9\u6837\u5C31\u914D\u7F6E\u4E86\u514D\u767B\u9646\u7684\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8FD9\u6837\u5C31\u914D\u7F6E\u4E86\u514D\u767B\u9646\u7684\u5730\u5740" aria-hidden="true">#</a> 2.2 \u8FD9\u6837\u5C31\u914D\u7F6E\u4E86\u514D\u767B\u9646\u7684\u5730\u5740</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ywt:
  cloud:
    security:
      enable: true
      anon-uris: /actuator/**,/v2/api-docs,/v2/api-docs-ext,/wx/**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u5728-springboot-\u4E3B\u7A0B\u5E8F\u4E2D-\u4F7F\u7528-enableywtcloudresourceserver" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5728-springboot-\u4E3B\u7A0B\u5E8F\u4E2D-\u4F7F\u7528-enableywtcloudresourceserver" aria-hidden="true">#</a> 2.3 \u5728 SpringBoot \u4E3B\u7A0B\u5E8F\u4E2D \u4F7F\u7528 @EnableYwtCloudResourceServer</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@SpringBootApplication
@EnableYwtCloudResourceServer
public class YwtServerWeixinApplication {

	public static void main(String[] args) {
		SpringApplication.run(YwtServerWeixinApplication.class, args);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6CE8\u89E3-enableywtcloudresourceserver-\u7684\u6765\u9F99\u53BB\u8109" tabindex="-1"><a class="header-anchor" href="#_3-\u6CE8\u89E3-enableywtcloudresourceserver-\u7684\u6765\u9F99\u53BB\u8109" aria-hidden="true">#</a> 3. \u6CE8\u89E3@EnableYwtCloudResourceServer \u7684\u6765\u9F99\u53BB\u8109</h2><h3 id="_3-1-\u521B\u5EFA\u6CE8\u89E3\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-1-\u521B\u5EFA\u6CE8\u89E3\u7C7B" aria-hidden="true">#</a> 3.1 \u521B\u5EFA\u6CE8\u89E3\u7C7B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">YwtCloudResourceServerConfigure</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableYwtCloudResourceServer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>@Import \u6CE8\u89E3\u7684\u6700\u4E3B\u8981\u529F\u80FD\u5C31\u662F\u5BFC\u5165\u989D\u5916\u7684\u914D\u7F6E\u4FE1\u606F</strong></p><h3 id="_3-2-\u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B-configuration-\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B-configuration-\u7C7B" aria-hidden="true">#</a> 3.2 \u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B\uFF08@Configuration \u7C7B\uFF09</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableResourceServer</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token class-name">UserDetailsServiceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YwtCloudResourceServerConfigure</span> <span class="token keyword">extends</span> <span class="token class-name">ResourceServerConfigurerAdapter</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">YwtCloudSecurityProperties</span> properties<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">YwtAccessDeniedHandler</span> accessDeniedHandler<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">YwtAuthExceptionEntryPoint</span> exceptionEntryPoint<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setProperties</span><span class="token punctuation">(</span><span class="token class-name">YwtCloudSecurityProperties</span> properties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>properties <span class="token operator">=</span> properties<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAccessDeniedHandler</span><span class="token punctuation">(</span><span class="token class-name">YwtAccessDeniedHandler</span> accessDeniedHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>accessDeniedHandler <span class="token operator">=</span> accessDeniedHandler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setExceptionEntryPoint</span><span class="token punctuation">(</span><span class="token class-name">YwtAuthExceptionEntryPoint</span> exceptionEntryPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>exceptionEntryPoint <span class="token operator">=</span> exceptionEntryPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anonUrls <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">splitByWholeSeparatorPreserveAllTokens</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getAnonUris</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ArrayUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>anonUrls<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            anonUrls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">requestMatchers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getAuthUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span>anonUrls<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getAuthUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">httpBasic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">ResourceServerSecurityConfigurer</span> resources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resources<span class="token punctuation">.</span><span class="token function">authenticationEntryPoint</span><span class="token punctuation">(</span>exceptionEntryPoint<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">accessDeniedHandler</span><span class="token punctuation">(</span>accessDeniedHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","springboot-y-permission-whitelist.html.vue"]]);export{d as default};
