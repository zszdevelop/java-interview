import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,e as r}from"./app.f5b3b0e8.js";const d={},n=r(`<h1 id="gitlab\u5185\u5B58\u5360\u7528\u8FC7\u5927" tabindex="-1"><a class="header-anchor" href="#gitlab\u5185\u5B58\u5360\u7528\u8FC7\u5927" aria-hidden="true">#</a> gitlab\u5185\u5B58\u5360\u7528\u8FC7\u5927</h1><p>\u6211\u7684\u670D\u52A1\u5668\u914D\u7F6E\u662F2\u68384G\u5185\u5B58\uFF0C\u542F\u52A8gitlab \u5C31\u5360\u7528\u4E86\u5F88\u5927\u5185\u5B58\u7A7A\u95F4(\u505C\u6B62gitlab \u4F1A\u91CA\u653E1.5G\u5185\u5B58)</p><h2 id="_1-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_1-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 1. \u89E3\u51B3\u65B9\u6848</h2><h3 id="_1-1-\u51CF\u5C11-unicorn-worker\u8FDB\u7A0B\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-\u51CF\u5C11-unicorn-worker\u8FDB\u7A0B\u6570" aria-hidden="true">#</a> 1.1 \u51CF\u5C11 unicorn worker\u8FDB\u7A0B\u6570</h3><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 top -ac \u5148\u770B\u4E00\u4E0B\u5F00\u542F\u4E86\u591A\u5C11unicorn worker\u8FDB\u7A0B\uFF0Cgitlab\u9ED8\u8BA4\u5F00\u542F\u8FDB\u7A0B\u6570\u4E0ECPU\u5185\u6838\u6570\u76F8\u540C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/gitlab/gitlab.rb
unicorn[&#39;worker_processes&#39;] = 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u662F\u88AB\u6CE8\u91CA\u6389\u7684\uFF0C\u5B98\u65B9\u5EFA\u8BAE\u8BE5\u503C\u662FCPU\u6838\u5FC3\u6570\u52A0\u4E00\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u670D\u52A1\u5668\u7684\u54CD\u5E94\u901F\u5EA6\uFF0C\u5982\u679C\u5185\u5B58\u53EA\u67094G\uFF0C\u6216\u8005\u670D\u52A1\u5668\u4E0A\u6709\u5176\u5B83\u4E1A\u52A1\uFF0C\u5C31\u4E0D\u8981\u6539\u4E86\uFF0C\u4EE5\u514D\u5185\u5B58\u4E0D\u8DB3\u3002\u53E6\u5916\uFF0C\u8FD9\u4E2A\u53C2\u6570\u6700\u5C0F\u503C\u662F2\uFF0C\u8BBE\u4E3A1\uFF0C\u670D\u52A1\u5668\u53EF\u80FD\u4F1A\u5361\u6B7B\u3002</p><h3 id="_1-2-\u51CF\u5C11\u6570\u636E\u5E93\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_1-2-\u51CF\u5C11\u6570\u636E\u5E93\u7F13\u5B58" aria-hidden="true">#</a> 1.2 \u51CF\u5C11\u6570\u636E\u5E93\u7F13\u5B58</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> postgresql[&#39;shared_buffers&#39;] = &quot;128MB&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u4E3A256MB\uFF0C\u53EF\u9002\u5F53\u6539\u5C0F</p><h3 id="_1-3-\u51CF\u5C11\u6570\u636E\u5E93\u5E76\u53D1\u6570" tabindex="-1"><a class="header-anchor" href="#_1-3-\u51CF\u5C11\u6570\u636E\u5E93\u5E76\u53D1\u6570" aria-hidden="true">#</a> 1.3 \u51CF\u5C11\u6570\u636E\u5E93\u5E76\u53D1\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>postgresql[&#39;max_worker_processes&#39;] = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u4E3A8\uFF0C\u53EF\u9002\u5F53\u51CF\u5C11</p><h3 id="_1-4-\u51CF\u5C11sidekiq\u5E76\u53D1\u6570" tabindex="-1"><a class="header-anchor" href="#_1-4-\u51CF\u5C11sidekiq\u5E76\u53D1\u6570" aria-hidden="true">#</a> 1.4 \u51CF\u5C11sidekiq\u5E76\u53D1\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sidekiq[&#39;concurrency&#39;] = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u662F25\uFF0C\u53EF\u9002\u5F53\u6539\u5C0F</p>`,16),s=[n];function t(c,l){return a(),i("div",null,s)}const u=e(d,[["render",t],["__file","gitlab-x-memory-size.html.vue"]]);export{u as default};
