import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode } from "./app.e1ff6185.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5-\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5-\u6C47\u603B" aria-hidden="true">#</a> \u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5-\u6C47\u603B</h1><h2 id="_1-\u5E38\u89C1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u5E38\u89C1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5" aria-hidden="true">#</a> 1. \u5E38\u89C1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5</h2><p>\u5E38\u89C1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u5305\u542B:</p><ul><li>\u8F6E\u8BE2\u6CD5(Round Robin)</li><li>\u52A0\u6743\u8F6E\u8BE2\u6CD5(Weight Round Robin)</li><li>\u5E73\u6ED1\u52A0\u6743\u8F6E\u8BE2\u6CD5(Smooth Weight Round Robin)</li><li>\u968F\u673A\u6CD5(Random)</li><li>\u52A0\u6743\u968F\u673A\u6CD5(Weight Random)</li><li>\u6E90\u5730\u5740\u54C8\u5E0C\u6CD5(Hash)</li><li>\u6700\u5C0F\u8FDE\u63A5\u6570\u6CD5(Least Connections)</li></ul><h3 id="_1-1-\u8F6E\u8BE2\u6CD5-round-robin" tabindex="-1"><a class="header-anchor" href="#_1-1-\u8F6E\u8BE2\u6CD5-round-robin" aria-hidden="true">#</a> 1.1 \u8F6E\u8BE2\u6CD5(Round Robin)</h3><p>\u5C06\u8BF7\u6C42\u6309\u987A\u5E8F\u8F6E\u6D41\u5730\u5206\u914D\u5230\u540E\u7AEF\u670D\u52A1\u5668\u4E0A\uFF0C\u5B83\u5747\u8861\u5730\u5BF9\u5F85\u540E\u7AEF\u7684\u6BCF\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u800C\u4E0D\u5173\u5FC3\u670D\u52A1\u5668\u5B9E\u9645\u7684\u8FDE\u63A5\u6570\u548C\u5F53\u524D\u7684\u7CFB\u7EDF\u8D1F\u8F7D\u3002</p><h3 id="_1-2-\u52A0\u6743\u8F6E\u8BE2\u6CD5-weight-round-robin" tabindex="-1"><a class="header-anchor" href="#_1-2-\u52A0\u6743\u8F6E\u8BE2\u6CD5-weight-round-robin" aria-hidden="true">#</a> 1.2 \u52A0\u6743\u8F6E\u8BE2\u6CD5(Weight Round Robin)</h3><p>\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\u53EF\u80FD\u673A\u5668\u7684\u914D\u7F6E\u548C\u5F53\u524D\u7CFB\u7EDF\u7684\u8D1F\u8F7D\u5E76\u4E0D\u76F8\u540C\uFF0C\u56E0\u6B64\u5B83\u4EEC\u7684\u6297\u538B\u80FD\u529B\u4E5F\u4E0D\u76F8\u540C\u3002\u7ED9\u914D\u7F6E\u9AD8\u3001\u8D1F\u8F7D\u4F4E\u7684\u673A\u5668\u914D\u7F6E\u66F4\u9AD8\u7684\u6743\u91CD\uFF0C\u8BA9\u5176\u5904\u7406\u66F4\u591A\u7684\u8BF7\uFF1B\u800C\u914D\u7F6E\u4F4E\u3001\u8D1F\u8F7D\u9AD8\u7684\u673A\u5668\uFF0C\u7ED9\u5176\u5206\u914D\u8F83\u4F4E\u7684\u6743\u91CD\uFF0C\u964D\u4F4E\u5176\u7CFB\u7EDF\u8D1F\u8F7D\uFF0C\u52A0\u6743\u8F6E\u8BE2\u80FD\u5F88\u597D\u5730\u5904\u7406\u8FD9\u4E00\u95EE\u9898\uFF0C\u5E76\u5C06\u8BF7\u6C42\u987A\u5E8F\u4E14\u6309\u7167\u6743\u91CD\u5206\u914D\u5230\u540E\u7AEF\u3002</p><h3 id="_1-3-\u968F\u673A\u6CD5-random" tabindex="-1"><a class="header-anchor" href="#_1-3-\u968F\u673A\u6CD5-random" aria-hidden="true">#</a> 1.3 \u968F\u673A\u6CD5(Random)</h3><p>\u901A\u8FC7\u7CFB\u7EDF\u7684\u968F\u673A\u7B97\u6CD5\uFF0C\u6839\u636E\u540E\u7AEF\u670D\u52A1\u5668\u7684\u5217\u8868\u5927\u5C0F\u503C\u6765\u968F\u673A\u9009\u53D6\u5176\u4E2D\u7684\u4E00\u53F0\u670D\u52A1\u5668\u8FDB\u884C\u8BBF\u95EE\u3002\u7531\u6982\u7387\u7EDF\u8BA1\u7406\u8BBA\u53EF\u4EE5\u5F97\u77E5\uFF0C\u968F\u7740\u5BA2\u6237\u7AEF\u8C03\u7528\u670D\u52A1\u7AEF\u7684\u6B21\u6570\u589E\u591A\uFF0C\u5176\u5B9E\u9645\u6548\u679C\u8D8A\u6765\u8D8A\u63A5\u8FD1\u4E8E\u5E73\u5747\u5206\u914D\u8C03\u7528\u91CF\u5230\u540E\u7AEF\u7684\u6BCF\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u4E5F\u5C31\u662F\u8F6E\u8BE2\u7684\u7ED3\u679C\u3002</p><h3 id="_1-4-\u52A0\u6743\u968F\u673A\u6CD5-weight-random" tabindex="-1"><a class="header-anchor" href="#_1-4-\u52A0\u6743\u968F\u673A\u6CD5-weight-random" aria-hidden="true">#</a> 1.4 \u52A0\u6743\u968F\u673A\u6CD5(Weight Random)</h3><p>\u4E0E\u52A0\u6743\u8F6E\u8BE2\u6CD5\u4E00\u6837\uFF0C\u52A0\u6743\u968F\u673A\u6CD5\u4E5F\u6839\u636E\u540E\u7AEF\u673A\u5668\u7684\u914D\u7F6E\uFF0C\u7CFB\u7EDF\u7684\u8D1F\u8F7D\u5206\u914D\u4E0D\u540C\u7684\u6743\u91CD\u3002\u4E0D\u540C\u7684\u662F\uFF0C\u5B83\u662F\u6309\u7167\u6743\u91CD\u968F\u673A\u8BF7\u6C42\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u800C\u975E\u987A\u5E8F\u3002</p><h3 id="_1-5-\u6E90\u5730\u5740\u54C8\u5E0C\u6CD5-hash" tabindex="-1"><a class="header-anchor" href="#_1-5-\u6E90\u5730\u5740\u54C8\u5E0C\u6CD5-hash" aria-hidden="true">#</a> 1.5 \u6E90\u5730\u5740\u54C8\u5E0C\u6CD5(Hash)</h3><p>\u6E90\u5730\u5740\u54C8\u5E0C\u7684\u601D\u60F3\u662F\u6839\u636E\u83B7\u53D6\u5BA2\u6237\u7AEF\u7684IP\u5730\u5740\uFF0C\u901A\u8FC7\u54C8\u5E0C\u51FD\u6570\u8BA1\u7B97\u5F97\u5230\u7684\u4E00\u4E2A\u6570\u503C\uFF0C\u7528\u8BE5\u6570\u503C\u5BF9\u670D\u52A1\u5668\u5217\u8868\u7684\u5927\u5C0F\u8FDB\u884C\u53D6\u6A21\u8FD0\u7B97\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u4FBF\u662F\u5BA2\u670D\u7AEF\u8981\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u5E8F\u53F7\u3002\u91C7\u7528\u6E90\u5730\u5740\u54C8\u5E0C\u6CD5\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\uFF0C\u540C\u4E00IP\u5730\u5740\u7684\u5BA2\u6237\u7AEF\uFF0C\u5F53\u540E\u7AEF\u670D\u52A1\u5668\u5217\u8868\u4E0D\u53D8\u65F6\uFF0C\u5B83\u6BCF\u6B21\u90FD\u4F1A\u6620\u5C04\u5230\u540C\u4E00\u53F0\u540E\u7AEF\u670D\u52A1\u5668\u8FDB\u884C\u8BBF\u95EE\u3002</p><h3 id="_1-6-\u6700\u5C0F\u8FDE\u63A5\u6570\u6CD5-least-connections" tabindex="-1"><a class="header-anchor" href="#_1-6-\u6700\u5C0F\u8FDE\u63A5\u6570\u6CD5-least-connections" aria-hidden="true">#</a> 1.6 \u6700\u5C0F\u8FDE\u63A5\u6570\u6CD5(Least Connections)</h3><p>\u6700\u5C0F\u8FDE\u63A5\u6570\u7B97\u6CD5\u6BD4\u8F83\u7075\u6D3B\u548C\u667A\u80FD\uFF0C\u7531\u4E8E\u540E\u7AEF\u670D\u52A1\u5668\u7684\u914D\u7F6E\u4E0D\u5C3D\u76F8\u540C\uFF0C\u5BF9\u4E8E\u8BF7\u6C42\u7684\u5904\u7406\u6709\u5FEB\u6709\u6162\uFF0C\u5B83\u662F\u6839\u636E\u540E\u7AEF\u670D\u52A1\u5668\u5F53\u524D\u7684\u8FDE\u63A5\u60C5\u51B5\uFF0C\u52A8\u6001\u5730\u9009\u53D6\u5176\u4E2D\u5F53\u524D\u79EF\u538B\u8FDE\u63A5\u6570\u6700\u5C11\u7684\u4E00\u53F0\u670D\u52A1\u5668\u6765\u5904\u7406\u5F53\u524D\u7684\u8BF7\u6C42\uFF0C\u5C3D\u53EF\u80FD\u5730\u63D0\u9AD8\u540E\u7AEF\u670D\u52A1\u7684\u5229\u7528\u6548\u7387\uFF0C\u5C06\u8D1F\u8D23\u5408\u7406\u5730\u5206\u6D41\u5230\u6BCF\u4E00\u53F0\u670D\u52A1\u5668\u3002</p><h2 id="_2-nginx\u76845\u79CD\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-nginx\u76845\u79CD\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5" aria-hidden="true">#</a> 2. Nginx\u76845\u79CD\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5</h2><h3 id="_2-1-\u8F6E\u8BE2\u6CD5-round-robin-\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8F6E\u8BE2\u6CD5-round-robin-\u9ED8\u8BA4" aria-hidden="true">#</a> 2.1 \u8F6E\u8BE2\u6CD5(Round Robin)(\u9ED8\u8BA4)</h3><p>\u6BCF\u4E2A\u8BF7\u6C42\u6309\u65F6\u95F4\u987A\u5E8F\u9010\u4E00\u5206\u914D\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u5982\u679C\u540E\u7AEF\u670D\u52A1\u5668down\u6389\uFF0C\u80FD\u81EA\u52A8\u5254\u9664\u3002</p><h3 id="_2-2-\u52A0\u6743\u8F6E\u8BE2\u6CD5-weight-round-robin-weight" tabindex="-1"><a class="header-anchor" href="#_2-2-\u52A0\u6743\u8F6E\u8BE2\u6CD5-weight-round-robin-weight" aria-hidden="true">#</a> 2.2 \u52A0\u6743\u8F6E\u8BE2\u6CD5(Weight Round Robin)- weight</h3><p>\u6307\u5B9A\u8F6E\u8BE2\u51E0\u7387\uFF0Cweight\u548C\u8BBF\u95EE\u6BD4\u7387\u6210\u6B63\u6BD4\uFF0C\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u5668\u6027\u80FD\u4E0D\u5747\u7684\u60C5\u51B5\u3002</p><p>\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream bakend <span class="token punctuation">{</span>  \n  server <span class="token number">192.168</span>.0.14 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>  \n  server <span class="token number">192.168</span>.0.15 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>  \n\n  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u6E90\u5730\u5740\u54C8\u5E0C\u6CD5-hash-ip-hash" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6E90\u5730\u5740\u54C8\u5E0C\u6CD5-hash-ip-hash" aria-hidden="true">#</a> 2.3 \u6E90\u5730\u5740\u54C8\u5E0C\u6CD5(Hash)- ip_hash</h3><p>\u6BCF\u4E2A\u8BF7\u6C42\u6309\u8BBF\u95EEip\u7684hash\u7ED3\u679C\u5206\u914D\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u8BBF\u5BA2\u56FA\u5B9A\u8BBF\u95EE\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u89E3\u51B3session\u7684\u95EE\u9898\u3002</p><p>\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream bakend <span class="token punctuation">{</span>  \n  ip_hash<span class="token punctuation">;</span>  \n  server <span class="token number">192.168</span>.0.14:88<span class="token punctuation">;</span>  \n  server <span class="token number">192.168</span>.0.15:80<span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-fair-\u7B2C\u4E09\u65B9" tabindex="-1"><a class="header-anchor" href="#_2-4-fair-\u7B2C\u4E09\u65B9" aria-hidden="true">#</a> 2.4 fair(\u7B2C\u4E09\u65B9)</h3><p>\u6309\u540E\u7AEF\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream backend <span class="token punctuation">{</span>  \n  server server1<span class="token punctuation">;</span>  \n  server server2<span class="token punctuation">;</span>  \n  fair<span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-url-hash-\u7B2C\u4E09\u65B9" tabindex="-1"><a class="header-anchor" href="#_2-5-url-hash-\u7B2C\u4E09\u65B9" aria-hidden="true">#</a> 2.5 url_hash(\u7B2C\u4E09\u65B9)</h3><p>\u6309\u8BBF\u95EEurl\u7684hash\u7ED3\u679C\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u4F7F\u6BCF\u4E2Aurl\u5B9A\u5411\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u4E3A\u7F13\u5B58\u65F6\u6BD4\u8F83\u6709\u6548\u3002</p><p>\u4F8B: \u5728upstream\u4E2D\u52A0\u5165hash\u8BED\u53E5\uFF0Cserver\u8BED\u53E5\u4E2D\u4E0D\u80FD\u5199\u5165weight\u7B49\u5176\u4ED6\u7684\u53C2\u6570\uFF0Chash_method\u662F\u4F7F\u7528\u7684hash\u7B97\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream backend <span class="token punctuation">{</span>  \n  server squid1:3128<span class="token punctuation">;</span>  \n  server squid2:3128<span class="token punctuation">;</span>  \n  <span class="token builtin class-name">hash</span> <span class="token variable">$request_uri</span><span class="token punctuation">;</span>  \n  hash_method crc32<span class="token punctuation">;</span>  \n<span class="token punctuation">}</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tips:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream bakend<span class="token punctuation">{</span>#\u5B9A\u4E49\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\u7684Ip\u53CA\u8BBE\u5907\u72B6\u6001  \n  ip_hash<span class="token punctuation">;</span>  \n  server <span class="token number">127.0</span>.0.1:9090 down<span class="token punctuation">;</span>  \n  server <span class="token number">127.0</span>.0.1:8080 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>  \n  server <span class="token number">127.0</span>.0.1:6060<span class="token punctuation">;</span>  \n  server <span class="token number">127.0</span>.0.1:7070 backup<span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u9700\u8981\u4F7F\u7528\u8D1F\u8F7D\u5747\u8861\u7684server\u4E2D\u589E\u52A0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>proxy_pass http://bakend/<span class="token punctuation">;</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6BCF\u4E2A\u8BBE\u5907\u7684\u72B6\u6001\u8BBE\u7F6E\u4E3A:</p><ul><li>down \u8868\u793A\u5355\u524D\u7684server\u6682\u65F6\u4E0D\u53C2\u4E0E\u8D1F\u8F7D</li><li>weight \u9ED8\u8BA4\u4E3A1.weight\u8D8A\u5927\uFF0C\u8D1F\u8F7D\u7684\u6743\u91CD\u5C31\u8D8A\u5927\u3002</li><li>max_fails : \u5141\u8BB8\u8BF7\u6C42\u5931\u8D25\u7684\u6B21\u6570\u9ED8\u8BA4\u4E3A1.\u5F53\u8D85\u8FC7\u6700\u5927\u6B21\u6570\u65F6\uFF0C\u8FD4\u56DEproxy_next_upstream \u6A21\u5757\u5B9A\u4E49\u7684\u9519\u8BEF</li><li>fail_timeout:max_fails\u6B21\u5931\u8D25\u540E\uFF0C\u6682\u505C\u7684\u65F6\u95F4\u3002</li><li>backup: \u5176\u5B83\u6240\u6709\u7684\u975Ebackup\u673A\u5668down\u6216\u8005\u5FD9\u7684\u65F6\u5019\uFF0C\u8BF7\u6C42backup\u673A\u5668\u3002\u6240\u4EE5\u8FD9\u53F0\u673A\u5668\u538B\u529B\u4F1A\u6700\u8F7B\u3002</li></ul><p>nginx\u652F\u6301\u540C\u65F6\u8BBE\u7F6E\u591A\u7EC4\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u7528\u6765\u7ED9\u4E0D\u7528\u7684server\u6765\u4F7F\u7528\u3002</p><ul><li>client_body_in_file_only: \u8BBE\u7F6E\u4E3AOn\uFF0C\u53EF\u4EE5\u8BB2client post\u8FC7\u6765\u7684\u6570\u636E\u8BB0\u5F55\u5230\u6587\u4EF6\u4E2D\u7528\u6765\u505Adebug\u3002</li><li>client_body_temp_path: \u8BBE\u7F6E\u8BB0\u5F55\u6587\u4EF6\u7684\u76EE\u5F55\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6700\u591A3\u5C42\u76EE\u5F55\u3002</li><li>location: \u5BF9URL\u8FDB\u884C\u5339\u914D\uFF0C\u53EF\u4EE5\u8FDB\u884C\u91CD\u5B9A\u5411\u6216\u8005\u8FDB\u884C\u65B0\u7684\u4EE3\u7406\uFF0C\u8D1F\u8F7D\u5747\u8861\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 43);
const _hoisted_44 = {
  href: "https://pdai.tech/md/algorithm/alg-domain-load-balance.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("strong", null, "\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5 - \u6C47\u603B", -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_44, [
        _hoisted_45,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var __________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5-\u6C47\u603B.html.vue"]]);
export { __________html as default };
