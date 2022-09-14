import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as s,e as n}from"./app.3a04ef30.js";const t={},a=n(`<h1 id="mockito\u57FA\u672C\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#mockito\u57FA\u672C\u529F\u80FD" aria-hidden="true">#</a> Mockito\u57FA\u672C\u529F\u80FD</h1><h2 id="_1-\u5BF9\u8C61-\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#_1-\u5BF9\u8C61-\u590D\u5236" aria-hidden="true">#</a> 1.\u5BF9\u8C61\u201C\u590D\u5236\u201D</h2><p>mockito\u53EF\u4EE5\u8F7B\u6613\u590D\u5236\u51FA\u5404\u79CD\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E0E\u4E4B\u8FDB\u884C\u4EA4\u4E92</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5217\u8868
List mockList = mock(List.class);
mockList.add(1);
mockList.clear();

// Socket\u5BF9\u8C61
Socket mockSocket = mock(Socket);
mockSocket.connect(new InetSocketAddress(8080));
mockSocket.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6280\u80FD\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#_2-\u6280\u80FD\u590D\u5236" aria-hidden="true">#</a> 2.\u6280\u80FD\u590D\u5236</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>List mockList = mock(List.class);
mockList.add(1); // \u7B80\u5355\u4EA4\u4E92
mockList.get(1); // \u8FD4\u56DE\u503C\u4E3Anull
mockList.size(); // \u8FD4\u56DE\u503C\u4E3A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u590D\u5236\u51FA\u6765\u7684\u5BF9\u8C61\u4E0A\u6240\u6709\u7684\u65B9\u6CD5\u90FD\u80FD\u88AB\u8C03\u7528\uFF0C<strong>\u53EA\u4F1A\u8FD4\u56DE\u9ED8\u8BA4\u7684\u8FD4\u56DE\u503C</strong></p><ul><li>\u9700\u8981\u8FD4\u56DE\u5BF9\u8C61\uFF1A\u9ED8\u8BA4\u8FD4\u56DEnull</li><li>\u9700\u8981\u8FD4\u56DEint\uFF1A\u9ED8\u8BA4\u8FD4\u56DE0</li></ul><h3 id="_2-1\u6307\u5B9A\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_2-1\u6307\u5B9A\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 2.1\u6307\u5B9A\u8FD4\u56DE\u503C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>List mockList = mock(List.class);
when(mockList.get(anyInt()).thenReturn(1);
when(mockList.size()).thenReturn(1, 2, 3);

assertEquals(&quot;\u9884\u671F\u8FD4\u56DE1&quot;, 1, mockList.get(1)); // pass
assertEquals(&quot;\u9884\u671F\u8FD4\u56DE1&quot;, 1, mockList.get(2)); // pass
assertEquals(&quot;\u9884\u671F\u8FD4\u56DE1&quot;, 1, mockList.get(3)); // pass

assertEquals(&quot;\u9884\u671F\u8FD4\u56DE1&quot;, 1, mockList.size()); // pass
assertEquals(&quot;\u9884\u671F\u8FD4\u56DE2&quot;, 2, mockList.size()); // pass
assertEquals(&quot;\u9884\u671F\u8FD4\u56DE3&quot;, 3, mockList.size()); // pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>when\uFF08mock\u6267\u884C\u4EC0\u4E48\u65B9\u6CD5\uFF09.thenReturn(&quot;\u6307\u5B9Amock\u9700\u8981\u8FD4\u56DE\u7684\u503C&quot;)\uFF0C\u8FD4\u56DE\u503C\u90FD\u662Fmock\u6307\u5B9A</p><h2 id="_3-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_3-\u9A8C\u8BC1" aria-hidden="true">#</a> 3.\u9A8C\u8BC1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>verify(mockList, never()).clear(); // \u4ECE\u672A\u8C03\u7528\u8FC7clear\u65B9\u6CD5
verify(mockList, times(2)).get(1); // get(1)\u65B9\u6CD5\u8C03\u7528\u4E862\u6B21
verify(mockList, times(3)).get(anyInt()); // get(\u4EFB\u610F\u6570\u5B57)\u8C03\u7528\u4E863\u6B21
verfiy(mockList, times(4)).size(); // \u8FD9\u91CC\u4F1A\u5931\u8D25\uFF0C\u56E0\u4E3A\u4E0A\u9762\u6211\u4EEC\u53EA\u8C03\u7528\u4E86size\u65B9\u6CD53\u6B21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mock\u5BF9\u4ED6\u505A\u8FC7\u4EC0\u4E48\u4E00\u6E05\u4E8C\u695A</p>`,14),d=[a];function c(l,r){return i(),s("div",null,d)}var u=e(t,[["render",c],["__file","Mockito\u57FA\u672C\u529F\u80FD.html.vue"]]);export{u as default};
