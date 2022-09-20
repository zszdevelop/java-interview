import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,a as e,b as r,e as p,d as t,r as d}from"./app.6ee8c9d2.js";const l={},o=p(`<h1 id="scrapy\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#scrapy\u5165\u95E8" aria-hidden="true">#</a> Scrapy\u5165\u95E8</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Scrapy \u662F\u4E00\u4E2A\u4E3A\u4E86\u722C\u53D6\u7F51\u7AD9\u6570\u636E\uFF0C\u63D0\u53D6\u7ED3\u6784\u6027\u6570\u636E\u800C\u7F16\u5199\u7684\u5E94\u7528\u6846\u67B6\u3002</p><h3 id="_1-1-\u4E0Erequests-beautifulsoup-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E0Erequests-beautifulsoup-\u7684\u533A\u522B" aria-hidden="true">#</a> 1.1 \u4E0ERequests+BeautifulSoup \u7684\u533A\u522B</h3><ul><li><p>Requests+BeautifulSoup</p><p>\u9002\u5408\u5FEB\u901F\u5B9E\u73B0\u7684\u5C0F\u9879\u76EE</p></li><li><p>scrapy</p><p>\u5927\u7684\u5DE5\u7A0B\u5316\u9879\u76EE</p></li></ul><h2 id="_2-\u67B6\u6784\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#_2-\u67B6\u6784\u6982\u89C8" aria-hidden="true">#</a> 2. \u67B6\u6784\u6982\u89C8</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210310164531835.png" alt="image-20210310164531835" loading="lazy"></p><h3 id="_2-1-scrapy-engine" tabindex="-1"><a class="header-anchor" href="#_2-1-scrapy-engine" aria-hidden="true">#</a> 2.1 Scrapy Engine</h3><blockquote><p>\u5F15\u64CE\u8D1F\u8D23\u63A7\u5236\u6570\u636E\u6D41\u5728\u7CFB\u7EDF\u4E2D\u6240\u6709\u7EC4\u4EF6\u4E2D\u6D41\u52A8\uFF0C\u5E76\u5728\u76F8\u5E94\u52A8\u4F5C\u53D1\u751F\u65F6\u89E6\u53D1\u4E8B\u4EF6\u3002 \u8BE6\u7EC6\u5185\u5BB9\u67E5\u770B\u4E0B\u9762\u7684\u6570\u636E\u6D41(Data Flow)\u90E8\u5206\u3002</p></blockquote><p>\u6B64\u7EC4\u4EF6\u76F8\u5F53\u4E8E\u722C\u866B\u7684\u201C\u5927\u8111\u201D\uFF0C\u662F\u6574\u4E2A\u722C\u866B\u7684\u8C03\u5EA6\u4E2D\u5FC3\u3002</p><h3 id="_2-2-\u8C03\u5EA6\u5668-scheduler" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8C03\u5EA6\u5668-scheduler" aria-hidden="true">#</a> 2.2 \u8C03\u5EA6\u5668\uFF08Scheduler\uFF09</h3><blockquote><p>\u8C03\u5EA6\u5668\u4ECE\u5F15\u64CE\u63A5\u53D7request\u5E76\u5C06\u4ED6\u4EEC\u5165\u961F\uFF0C\u4EE5\u4FBF\u4E4B\u540E\u5F15\u64CE\u8BF7\u6C42\u4ED6\u4EEC\u65F6\u63D0\u4F9B\u7ED9\u5F15\u64CE\u3002</p></blockquote><p>\u521D\u59CB\u7684\u722C\u53D6URL\u548C\u540E\u7EED\u5728\u9875\u9762\u4E2D\u83B7\u53D6\u7684\u5F85\u722C\u53D6\u7684URL\u5C06\u653E\u5165\u8C03\u5EA6\u5668\u4E2D\uFF0C\u7B49\u5F85\u722C\u53D6\u3002\u540C\u65F6\u8C03\u5EA6\u5668\u4F1A\u81EA\u52A8\u53BB\u9664\u91CD\u590D\u7684URL\uFF08\u5982\u679C\u7279\u5B9A\u7684URL\u4E0D\u9700\u8981\u53BB\u91CD\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u5B9E\u73B0\uFF0C\u5982post\u8BF7\u6C42\u7684URL\uFF09</p><h3 id="_2-3-\u4E0B\u8F7D\u5668-downloader" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4E0B\u8F7D\u5668-downloader" aria-hidden="true">#</a> 2.3 \u4E0B\u8F7D\u5668\uFF08Downloader\uFF09</h3><p>\u4E0B\u8F7D\u5668\u8D1F\u8D23\u83B7\u53D6\u9875\u9762\u6570\u636E\u5E76\u63D0\u4F9B\u7ED9\u5F15\u64CE\uFF0C\u800C\u540E\u63D0\u4F9B\u7ED9spider\u3002</p><h3 id="_2-4-spiders" tabindex="-1"><a class="header-anchor" href="#_2-4-spiders" aria-hidden="true">#</a> 2.4 Spiders</h3><p>Spider\u662FScrapy\u7528\u6237\u7F16\u5199\u7528\u4E8E\u5206\u6790response\u5E76\u63D0\u53D6item(\u5373\u83B7\u53D6\u5230\u7684item)\u6216\u989D\u5916\u8DDF\u8FDB\u7684URL\u7684\u7C7B\u3002 \u6BCF\u4E2Aspider\u8D1F\u8D23\u5904\u7406\u4E00\u4E2A\u7279\u5B9A(\u6216\u4E00\u4E9B)\u7F51\u7AD9\u3002</p><h3 id="_2-5-item-pipeline" tabindex="-1"><a class="header-anchor" href="#_2-5-item-pipeline" aria-hidden="true">#</a> 2.5 Item Pipeline</h3><blockquote><p>Item Pipeline\u8D1F\u8D23\u5904\u7406\u88ABspider\u63D0\u53D6\u51FA\u6765\u7684item\u3002\u5178\u578B\u7684\u5904\u7406\u6709\u6E05\u7406\u3001 \u9A8C\u8BC1\u53CA\u6301\u4E45\u5316(\u4F8B\u5982\u5B58\u53D6\u5230\u6570\u636E\u5E93\u4E2D)\u3002</p></blockquote><p>\u5F53\u9875\u9762\u88AB\u722C\u866B\u89E3\u6790\u6240\u9700\u7684\u6570\u636E\u5B58\u5165Item\u540E\uFF0C\u5C06\u88AB\u53D1\u9001\u5230\u9879\u76EE\u7BA1\u9053(Pipeline)\uFF0C\u5E76\u7ECF\u8FC7\u51E0\u4E2A\u7279\u5B9A\u7684\u6B21\u5E8F\u5904\u7406\u6570\u636E\uFF0C\u6700\u540E\u5B58\u5165\u672C\u5730\u6587\u4EF6\u6216\u5B58\u5165\u6570\u636E\u5E93\u3002</p><h3 id="_2-6-\u4E0B\u8F7D\u5668\u4E2D\u95F4\u4EF6-downloader-middlewares" tabindex="-1"><a class="header-anchor" href="#_2-6-\u4E0B\u8F7D\u5668\u4E2D\u95F4\u4EF6-downloader-middlewares" aria-hidden="true">#</a> 2.6 \u4E0B\u8F7D\u5668\u4E2D\u95F4\u4EF6(Downloader middlewares)</h3><blockquote><p>\u4E0B\u8F7D\u5668\u4E2D\u95F4\u4EF6\u662F\u5728\u5F15\u64CE\u53CA\u4E0B\u8F7D\u5668\u4E4B\u95F4\u7684\u7279\u5B9A\u94A9\u5B50(specific hook)\uFF0C\u5904\u7406Downloader\u4F20\u9012\u7ED9\u5F15\u64CE\u7684response\u3002 \u5176\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u4FBF\u7684\u673A\u5236\uFF0C\u901A\u8FC7\u63D2\u5165\u81EA\u5B9A\u4E49\u4EE3\u7801\u6765\u6269\u5C55Scrapy\u529F\u80FD\u3002</p></blockquote><p>\u901A\u8FC7\u8BBE\u7F6E\u4E0B\u8F7D\u5668\u4E2D\u95F4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u722C\u866B\u81EA\u52A8\u66F4\u6362user-agent\u3001IP\u7B49\u529F\u80FD\u3002</p><h3 id="_2-7-spider\u4E2D\u95F4\u4EF6-spider-middlewares" tabindex="-1"><a class="header-anchor" href="#_2-7-spider\u4E2D\u95F4\u4EF6-spider-middlewares" aria-hidden="true">#</a> 2.7 Spider\u4E2D\u95F4\u4EF6(Spider middlewares)</h3><blockquote><p>Spider\u4E2D\u95F4\u4EF6\u662F\u5728\u5F15\u64CE\u53CASpider\u4E4B\u95F4\u7684\u7279\u5B9A\u94A9\u5B50(specific hook)\uFF0C\u5904\u7406spider\u7684\u8F93\u5165(response)\u548C\u8F93\u51FA(items\u53CArequests)\u3002 \u5176\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u4FBF\u7684\u673A\u5236\uFF0C\u901A\u8FC7\u63D2\u5165\u81EA\u5B9A\u4E49\u4EE3\u7801\u6765\u6269\u5C55Scrapy\u529F\u80FD\u3002</p></blockquote><h3 id="_2-8-\u6570\u636E\u6D41-data-flow" tabindex="-1"><a class="header-anchor" href="#_2-8-\u6570\u636E\u6D41-data-flow" aria-hidden="true">#</a> 2.8 \u6570\u636E\u6D41(Data flow)</h3><ol><li>\u5F15\u64CE\u6253\u5F00\u4E00\u4E2A\u7F51\u7AD9(open a domain)\uFF0C\u627E\u5230\u5904\u7406\u8BE5\u7F51\u7AD9\u7684Spider\u5E76\u5411\u8BE5spider\u8BF7\u6C42\u7B2C\u4E00\u4E2A\u8981\u722C\u53D6\u7684URL(s)\u3002</li><li>\u5F15\u64CE\u4ECESpider\u4E2D\u83B7\u53D6\u5230\u7B2C\u4E00\u4E2A\u8981\u722C\u53D6\u7684URL\u5E76\u5728\u8C03\u5EA6\u5668(Scheduler)\u4EE5Request\u8C03\u5EA6\u3002</li><li>\u5F15\u64CE\u5411\u8C03\u5EA6\u5668\u8BF7\u6C42\u4E0B\u4E00\u4E2A\u8981\u722C\u53D6\u7684URL\u3002</li><li>\u8C03\u5EA6\u5668\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u8981\u722C\u53D6\u7684URL\u7ED9\u5F15\u64CE\uFF0C\u5F15\u64CE\u5C06URL\u901A\u8FC7\u4E0B\u8F7D\u4E2D\u95F4\u4EF6(\u8BF7\u6C42(request)\u65B9\u5411)\u8F6C\u53D1\u7ED9\u4E0B\u8F7D\u5668(Downloader)\u3002</li><li>\u4E00\u65E6\u9875\u9762\u4E0B\u8F7D\u5B8C\u6BD5\uFF0C\u4E0B\u8F7D\u5668\u751F\u6210\u4E00\u4E2A\u8BE5\u9875\u9762\u7684Response\uFF0C\u5E76\u5C06\u5176\u901A\u8FC7\u4E0B\u8F7D\u4E2D\u95F4\u4EF6(\u8FD4\u56DE(response)\u65B9\u5411)\u53D1\u9001\u7ED9\u5F15\u64CE\u3002</li><li>\u5F15\u64CE\u4ECE\u4E0B\u8F7D\u5668\u4E2D\u63A5\u6536\u5230Response\u5E76\u901A\u8FC7Spider\u4E2D\u95F4\u4EF6(\u8F93\u5165\u65B9\u5411)\u53D1\u9001\u7ED9Spider\u5904\u7406\u3002</li><li>Spider\u5904\u7406Response\u5E76\u8FD4\u56DE\u722C\u53D6\u5230\u7684Item\u53CA(\u8DDF\u8FDB\u7684)\u65B0\u7684Request\u7ED9\u5F15\u64CE\u3002</li><li>\u5F15\u64CE\u5C06(Spider\u8FD4\u56DE\u7684)\u722C\u53D6\u5230\u7684Item\u7ED9Item Pipeline\uFF0C\u5C06(Spider\u8FD4\u56DE\u7684)Request\u7ED9\u8C03\u5EA6\u5668\u3002</li><li>(\u4ECE\u7B2C\u4E8C\u6B65)\u91CD\u590D\u76F4\u5230\u8C03\u5EA6\u5668\u4E2D\u6CA1\u6709\u66F4\u591A\u5730request\uFF0C\u5F15\u64CE\u5173\u95ED\u8BE5\u7F51\u7AD9\u3002</li></ol><h2 id="_3-\u5EFA\u7ACBscrapy\u722C\u866B\u9879\u76EE\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-\u5EFA\u7ACBscrapy\u722C\u866B\u9879\u76EE\u6D41\u7A0B" aria-hidden="true">#</a> 3. \u5EFA\u7ACBScrapy\u722C\u866B\u9879\u76EE\u6D41\u7A0B</h2><h3 id="_3-1-\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_3-1-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> 3.1 \u521B\u5EFA\u9879\u76EE</h3><p>\u5728\u5F00\u59CB\u722C\u53D6\u4E4B\u524D\uFF0C\u9996\u5148\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684Scrapy\u9879\u76EE\u3002\u8FD9\u91CC\u4EE5\u722C\u53D6\u535A\u5BA2\u4E3A\u4F8B\uFF0C\u8FDB\u5165\u4F60\u6253\u7B97\u5B58\u50A8\u4EE3\u7801\u7684\u76EE\u5F55\u4E2D\uFF0C\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scrapy startproject scrapyspider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u547D\u4EE4\u5C06\u4F1A\u521B\u5EFA\u5305\u542B\u4E0B\u5217\u5185\u5BB9\u7684scrapyspider\u76EE\u5F55:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scrapyspider/
    scrapy.cfg
    scrapyspider/
        __init__.py
        items.py
        pipelines.py
        settings.py
        spiders/
            __init__.py
            ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u6587\u4EF6\u5206\u522B\u662F:</p><ul><li>scrapy.cfg: \u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\u3002</li><li>scrapyspider/: \u8BE5\u9879\u76EE\u7684python\u6A21\u5757\u3002\u4E4B\u540E\u60A8\u5C06\u5728\u6B64\u52A0\u5165\u4EE3\u7801\u3002</li><li>scrapyspider/items.py: \u9879\u76EE\u4E2D\u7684item\u6587\u4EF6\u3002</li><li>scrapyspider/pipelines.py: \u9879\u76EE\u4E2D\u7684pipelines\u6587\u4EF6\u3002</li><li>scrapyspider/settings.py: \u9879\u76EE\u7684\u8BBE\u7F6E\u6587\u4EF6\u3002</li><li>scrapyspider/spiders/: \u653E\u7F6Espider\u4EE3\u7801\u7684\u76EE\u5F55\u3002</li></ul><h3 id="_3-2-\u7F16\u5199\u7B2C\u4E00\u4E2A\u722C\u866B-spider" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7F16\u5199\u7B2C\u4E00\u4E2A\u722C\u866B-spider" aria-hidden="true">#</a> 3.2 \u7F16\u5199\u7B2C\u4E00\u4E2A\u722C\u866B(Spider)</h3><blockquote><p>Spider\u662F\u7528\u6237\u7F16\u5199\u7528\u4E8E\u4ECE\u5355\u4E2A\u7F51\u7AD9(\u6216\u8005\u4E00\u4E9B\u7F51\u7AD9)\u722C\u53D6\u6570\u636E\u7684\u7C7B\u3002</p><p>\u5176\u5305\u542B\u4E86\u4E00\u4E2A\u7528\u4E8E\u4E0B\u8F7D\u7684\u521D\u59CBURL\uFF0C\u5982\u4F55\u8DDF\u8FDB\u7F51\u9875\u4E2D\u7684\u94FE\u63A5\u4EE5\u53CA\u5982\u4F55\u5206\u6790\u9875\u9762\u4E2D\u7684\u5185\u5BB9\uFF0C \u63D0\u53D6\u751F\u6210 item \u7684\u65B9\u6CD5\u3002</p><p>\u4E3A\u4E86\u521B\u5EFA\u4E00\u4E2ASpider\uFF0C\u60A8\u5FC5\u987B\u7EE7\u627F scrapy.Spider \u7C7B\uFF0C \u4E14\u5B9A\u4E49\u4EE5\u4E0B\u4E09\u4E2A\u5C5E\u6027:</p><ul><li>name: \u7528\u4E8E\u533A\u522BSpider\u3002 \u8BE5\u540D\u5B57\u5FC5\u987B\u662F\u552F\u4E00\u7684\uFF0C\u60A8\u4E0D\u53EF\u4EE5\u4E3A\u4E0D\u540C\u7684Spider\u8BBE\u5B9A\u76F8\u540C\u7684\u540D\u5B57\u3002</li><li>start_urls: \u5305\u542B\u4E86Spider\u5728\u542F\u52A8\u65F6\u8FDB\u884C\u722C\u53D6\u7684url\u5217\u8868\u3002 \u56E0\u6B64\uFF0C\u7B2C\u4E00\u4E2A\u88AB\u83B7\u53D6\u5230\u7684\u9875\u9762\u5C06\u662F\u5176\u4E2D\u4E4B\u4E00\u3002 \u540E\u7EED\u7684URL\u5219\u4ECE\u521D\u59CB\u7684URL\u83B7\u53D6\u5230\u7684\u6570\u636E\u4E2D\u63D0\u53D6\u3002</li><li>parse() \u662Fspider\u7684\u4E00\u4E2A\u65B9\u6CD5\u3002 \u88AB\u8C03\u7528\u65F6\uFF0C\u6BCF\u4E2A\u521D\u59CBURL\u5B8C\u6210\u4E0B\u8F7D\u540E\u751F\u6210\u7684 Response \u5BF9\u8C61\u5C06\u4F1A\u4F5C\u4E3A\u552F\u4E00\u7684\u53C2\u6570\u4F20\u9012\u7ED9\u8BE5\u51FD\u6570\u3002 \u8BE5\u65B9\u6CD5\u8D1F\u8D23\u89E3\u6790\u8FD4\u56DE\u7684\u6570\u636E(response data)\uFF0C\u63D0\u53D6\u6570\u636E(\u751F\u6210item)\u4EE5\u53CA\u751F\u6210\u9700\u8981\u8FDB\u4E00\u6B65\u5904\u7406\u7684URL\u7684 Request \u5BF9\u8C61\u3002</li></ul></blockquote><p>\u4EE5\u4E0B\u4E3A\u6211\u4EEC\u7684\u7B2C\u4E00\u4E2ASpider\u4EE3\u7801\uFF0C\u4FDD\u5B58\u5728scrapyspider/spiders\u76EE\u5F55\u4E0B\u7684blog_spider.py\u6587\u4EF6\u4E2D:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> scrapy<span class="token punctuation">.</span>spiders <span class="token keyword">import</span> Spider


<span class="token keyword">class</span> <span class="token class-name">BlogSpider</span><span class="token punctuation">(</span>Spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token string">&#39;woodenrobot&#39;</span>
    start_urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;http://woodenrobot.me&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">:</span>
        titles <span class="token operator">=</span> response<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//a[@class=&quot;post-title-link&quot;]/text()&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> title <span class="token keyword">in</span> titles<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u542F\u52A8\u722C\u866B" tabindex="-1"><a class="header-anchor" href="#_3-3-\u542F\u52A8\u722C\u866B" aria-hidden="true">#</a> 3.3 \u542F\u52A8\u722C\u866B</h3><p>\u6253\u5F00\u7EC8\u7AEF\u8FDB\u5165\u9879\u76EE\u6240\u5728\u8DEF\u5F84(\u5373:scrapyspider\u8DEF\u5F84\u4E0B)\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scrapy crawl woodenrobot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u722C\u866B\u540E\u5C31\u53EF\u4EE5\u770B\u5230\u6253\u5370\u51FA\u6765\u5F53\u524D\u9875\u6240\u6709\u6587\u7AE0\u6807\u9898\u4E86\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,44),c={href:"https://zhuanlan.zhihu.com/p/24669128",target:"_blank",rel:"noopener noreferrer"},u=t("Scrapy\u722C\u866B\u6846\u67B6\u6559\u7A0B\uFF08\u4E00\uFF09-- Scrapy\u5165\u95E8");function h(m,b){const a=d("ExternalLinkIcon");return n(),i("div",null,[o,e("p",null,[e("a",c,[u,r(a)])])])}const _=s(l,[["render",h],["__file","python-scrapy-started.html.vue"]]);export{_ as default};
