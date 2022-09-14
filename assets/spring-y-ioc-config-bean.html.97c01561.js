import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.3a04ef30.js";const e={},p=t(`<h1 id="spring-\u88C5\u914Dbean\u76843\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#spring-\u88C5\u914Dbean\u76843\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> Spring \u88C5\u914DBean\u76843\u79CD\u65B9\u5F0F</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5728Spring \u4E2D\uFF0C\u4F9D\u8D56\u6CE8\u5165\u662FSpring \u6700\u91CD\u8981\u7684\u7279\u6027\u4E4B\u4E00\uFF0C\u6211\u4EEC\u6240\u4F7F\u7528\u7684Bean \u90FD\u662F\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165\u5B8C\u6210\u7684\uFF0C\u5982\u4ECA\u7684Spring\u4E2D\uFF0C\u63D0\u4F9B\u4E863\u79CD\u88C5\u914DBean\u7684\u65B9\u5F0F</p><ol><li>\u5728XML\u4E2D\u663E\u793A\u88C5\u914D</li><li>\u5728Java\u4E2D\u663E\u793A\u914D\u7F6E</li><li>\u9690\u5F0F\u7684neam\u53D1\u73B0\u673A\u5236\u548C\u81EA\u52A8\u88C5\u914D</li></ol><h2 id="_2-\u88C5\u914D\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u88C5\u914D\u65B9\u5F0F" aria-hidden="true">#</a> 2. \u88C5\u914D\u65B9\u5F0F</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Login</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserLogin</span> <span class="token keyword">implements</span> <span class="token class-name">Login</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;login success!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-\u5728xml\u4E2D\u663E\u793A\u88C5\u914D" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5728xml\u4E2D\u663E\u793A\u88C5\u914D" aria-hidden="true">#</a> 2.1 \u5728XML\u4E2D\u663E\u793A\u88C5\u914D</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>//XML\u65B9\u5F0F\u914D\u7F6E
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
http://www.springframework.org/schema/beans 
http://www.springframework.org/schema/beans/spring-beans.xsd 
http://www.springframework.org/schema/context 
http://www.springframework.org/schema/context/spring-context.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u81EA\u52A8\u626B\u63CF\u5305(\u81EA\u52A8\u6CE8\u5165) --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.ls.springModel<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>

//XML\u65B9\u5F0F\u88C5\u914Dbean
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
http://www.springframework.org/schema/beans 
http://www.springframework.org/schema/beans/spring-beans.xsd 
http://www.springframework.org/schema/context 
http://www.springframework.org/schema/context/spring-context.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
class=&quot;com.ls.springModel.UserLogin&quot;/&gt;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginController<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.ls.springModel.Logintroller<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>constructor-arg</span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!--\u6784\u9020\u6CE8\u5165 \u5BF9\u5E94\u6784\u9020\u51FD\u6570 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--\u5C5E\u6027\u6CE8\u5165 \u5BF9\u5E94setter\u65B9\u6CD5  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u5728java\u4E2D\u663E\u793A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5728java\u4E2D\u663E\u793A\u914D\u7F6E" aria-hidden="true">#</a> 2.2 \u5728Java\u4E2D\u663E\u793A\u914D\u7F6E</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//Java\u663E\u793A\u914D\u7F6E</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span>
<span class="token punctuation">(</span>basePackages<span class="token punctuation">{</span><span class="token string">&quot;com.ls.loginModel&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//\u626B\u63CFbean\u6240\u5728\u7684\u5305\uFF0C\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A\u5305\u53C2\u6570</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginConfig</span> <span class="token punctuation">{</span><span class="token comment">//Java\u65B9\u5F0F\u914D\u7F6E\u7C7B</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Login</span> <span class="token function">userLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">LoginController</span> <span class="token function">loginController</span><span class="token punctuation">(</span><span class="token class-name">Login</span> login<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LoginController</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        controller<span class="token punctuation">.</span><span class="token function">setLogin</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> controller<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u9690\u5F0F\u7684neam\u53D1\u73B0\u673A\u5236\u548C\u81EA\u52A8\u88C5\u914D" tabindex="-1"><a class="header-anchor" href="#_2-3-\u9690\u5F0F\u7684neam\u53D1\u73B0\u673A\u5236\u548C\u81EA\u52A8\u88C5\u914D" aria-hidden="true">#</a> 2.3 \u9690\u5F0F\u7684neam\u53D1\u73B0\u673A\u5236\u548C\u81EA\u52A8\u88C5\u914D</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u9690\u5F0F\u7684Bean\u53D1\u73B0\u673A\u5236\u548C\u81EA\u52A8\u6CE8\u89E3</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginController</span> <span class="token punctuation">{</span>
  
    <span class="token annotation punctuation">@Autowired</span> <span class="token comment">//\u5728\u5C5E\u6027\u4E0A\u6DFB\u52A0\u6CE8\u89E3</span>
    <span class="token annotation punctuation">@Resource</span> <span class="token comment">//\u5728\u5C5E\u6027\u4E0A\u6DFB\u52A0\u6CE8\u89E3</span>
    <span class="token keyword">private</span> <span class="token class-name">Login</span> login<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Login</span> <span class="token function">getLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> login<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * \u5E38\u7528\u7684\u6CE8\u89E3\u6709\u4E24\u79CD:@Autowired,@Resource
     * <span class="token keyword">@autowired</span> \u662F\u901A\u8FC7\u7C7B\u7684\u7C7B\u578B\u88C5\u914DBean
     * @Resource \u662F\u901A\u8FC7\u7C7B\u7684\u540D\u79F0\u88C5\u914Dbean,\u540D\u79F0\u9ED8\u8BA4\u4E3A\u5B57\u6BB5\u540D\u79F0\u6216setter\u65B9\u6CD5
     */</span>
    <span class="token annotation punctuation">@Autowired</span>  <span class="token comment">//\u6309\u7167\u7C7B\u578B\u88C5\u914D,\u53EF\u4EE5\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u6DFB\u52A0\u6539\u6CE8\u89E3</span>
    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span><span class="token string">&quot;userLogin&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u6CE8\u5165\u540D\u79F0\u4E3A&quot;userLogin&quot;\u7684Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">LoginController</span><span class="token punctuation">(</span><span class="token class-name">Login</span> login<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>login <span class="token operator">=</span> login<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Autowired</span>  <span class="token comment">//\u5728setter\u65B9\u6CD5\u4E0A\u6DFB\u52A0\u6539\u6CE8\u89E3</span>
    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span><span class="token string">&quot;userLogin&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u6CE8\u5165\u540D\u79F0\u4E3A&quot;userLogin&quot;\u7684Bean</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLogin</span><span class="token punctuation">(</span><span class="token class-name">Login</span> login<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>login <span class="token operator">=</span> login<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        login<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@autowired \u662F\u901A\u8FC7\u7C7B\u7684\u7C7B\u578B\u88C5\u914DBean</li><li>@Resource \u662F\u901A\u8FC7\u7C7B\u7684\u540D\u79F0\u88C5\u914Dbean,\u540D\u79F0\u9ED8\u8BA4\u4E3A\u5B57\u6BB5\u540D\u79F0\u6216setter\u65B9\u6CD5</li></ul>`,13),o=[p];function c(l,i){return s(),a("div",null,o)}var k=n(e,[["render",c],["__file","spring-y-ioc-config-bean.html.vue"]]);export{k as default};
