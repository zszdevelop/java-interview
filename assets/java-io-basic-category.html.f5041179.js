import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,a,b as d,e as h,r as n}from"./app.942cb21b.js";const o={},l=h('<h1 id="java-io-\u5206\u7C7B-\u4F20\u8F93-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#java-io-\u5206\u7C7B-\u4F20\u8F93-\u64CD\u4F5C" aria-hidden="true">#</a> Java IO - \u5206\u7C7B(\u4F20\u8F93\uFF0C\u64CD\u4F5C)</h1><blockquote><p>\u672C\u6587\u4E3B\u8981\u4ECE<code>\u4F20\u8F93\u65B9\u5F0F</code>\u548C<code>\u6570\u636E\u64CD\u4F5C</code>\u4E24\u4E2A\u65B9\u9762\u5206\u6790Java IO\u7684\u5206\u7C7B\u3002</p></blockquote><h2 id="_1-io\u7406\u89E3\u5206\u7C7B-\u4ECE\u4F20\u8F93\u65B9\u5F0F\u4E0A" tabindex="-1"><a class="header-anchor" href="#_1-io\u7406\u89E3\u5206\u7C7B-\u4ECE\u4F20\u8F93\u65B9\u5F0F\u4E0A" aria-hidden="true">#</a> 1. IO\u7406\u89E3\u5206\u7C7B - \u4ECE\u4F20\u8F93\u65B9\u5F0F\u4E0A</h2><p>\u4ECE\u6570\u636E\u4F20\u8F93\u65B9\u5F0F\u6216\u8005\u8BF4\u662F\u8FD0\u8F93\u65B9\u5F0F\u89D2\u5EA6\u770B\uFF0C\u53EF\u4EE5\u5C06 IO \u7C7B\u5206\u4E3A:</p><ul><li>\u5B57\u8282\u6D41</li><li>\u5B57\u7B26\u6D41</li></ul><p><code>\u5B57\u8282</code>\u662F\u4E2A\u8BA1\u7B97\u673A\u770B\u7684\uFF0C<code>\u5B57\u7B26</code>\u624D\u662F\u7ED9\u4EBA\u770B\u7684</p><h3 id="_1-1-\u5B57\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B57\u8282\u6D41" aria-hidden="true">#</a> 1.1 \u5B57\u8282\u6D41</h3><p>(\u6574\u4F53\u7ED3\u6784\u5982\u4E0B\uFF0C\u90E8\u5206\u6D3E\u751F\u7C7B\u6709\u7F3A\u5931)</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830201920368.png" alt="image-20220830201920368" loading="lazy"></p><h3 id="_1-2-\u5B57\u7B26\u6D41" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5B57\u7B26\u6D41" aria-hidden="true">#</a> 1.2 \u5B57\u7B26\u6D41</h3><p>(\u6574\u4F53\u7ED3\u6784\u5982\u4E0B\uFF0C\u90E8\u5206\u6D3E\u751F\u7C7B\u6709\u7F3A\u5931)</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830201949483.png" alt="image-20220830201949483" loading="lazy"></p><h3 id="_1-3-\u5B57\u8282\u6D41\u548C\u5B57\u7B26\u6D41\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B57\u8282\u6D41\u548C\u5B57\u7B26\u6D41\u7684\u533A\u522B" aria-hidden="true">#</a> 1.3 \u5B57\u8282\u6D41\u548C\u5B57\u7B26\u6D41\u7684\u533A\u522B</h3><ul><li>\u5B57\u8282\u6D41\u8BFB\u53D6\u5355\u4E2A\u5B57\u8282\uFF0C\u5B57\u7B26\u6D41\u8BFB\u53D6\u5355\u4E2A\u5B57\u7B26(\u4E00\u4E2A\u5B57\u7B26\u6839\u636E\u7F16\u7801\u7684\u4E0D\u540C\uFF0C\u5BF9\u5E94\u7684\u5B57\u8282\u4E5F\u4E0D\u540C\uFF0C\u5982 UTF-8 \u7F16\u7801\u4E2D\u6587\u6C49\u5B57\u662F 3 \u4E2A\u5B57\u8282\uFF0CGBK\u7F16\u7801\u4E2D\u6587\u6C49\u5B57\u662F 2 \u4E2A\u5B57\u8282\u3002)</li><li>\u5B57\u8282\u6D41\u7528\u6765\u5904\u7406\u4E8C\u8FDB\u5236\u6587\u4EF6(\u56FE\u7247\u3001MP3\u3001\u89C6\u9891\u6587\u4EF6)\uFF0C\u5B57\u7B26\u6D41\u7528\u6765\u5904\u7406\u6587\u672C\u6587\u4EF6(\u53EF\u4EE5\u770B\u505A\u662F\u7279\u6B8A\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u4F7F\u7528\u4E86\u67D0\u79CD\u7F16\u7801\uFF0C\u4EBA\u53EF\u4EE5\u9605\u8BFB)\u3002</li></ul><blockquote><p>\u7B80\u800C\u8A00\u4E4B\uFF0C\u5B57\u8282\u662F\u4E2A\u8BA1\u7B97\u673A\u770B\u7684\uFF0C\u5B57\u7B26\u624D\u662F\u7ED9\u4EBA\u770B\u7684\u3002</p></blockquote><h3 id="_1-4-\u5B57\u8282\u8F6C\u5B57\u7B26input-outputstreamreader-writer" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5B57\u8282\u8F6C\u5B57\u7B26input-outputstreamreader-writer" aria-hidden="true">#</a> 1.4 \u5B57\u8282\u8F6C\u5B57\u7B26Input/OutputStreamReader/Writer</h3><p>\u7F16\u7801\u5C31\u662F\u628A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5B57\u8282\uFF0C\u800C\u89E3\u7801\u662F\u628A\u5B57\u8282\u91CD\u65B0\u7EC4\u5408\u6210\u5B57\u7B26\u3002</p><p>\u5982\u679C\u7F16\u7801\u548C\u89E3\u7801\u8FC7\u7A0B\u4F7F\u7528\u4E0D\u540C\u7684\u7F16\u7801\u65B9\u5F0F\u90A3\u4E48\u5C31\u51FA\u73B0\u4E86\u4E71\u7801\u3002</p><ul><li>GBK \u7F16\u7801\u4E2D\uFF0C\u4E2D\u6587\u5B57\u7B26\u5360 2 \u4E2A\u5B57\u8282\uFF0C\u82F1\u6587\u5B57\u7B26\u5360 1 \u4E2A\u5B57\u8282\uFF1B</li><li>UTF-8 \u7F16\u7801\u4E2D\uFF0C\u4E2D\u6587\u5B57\u7B26\u5360 3 \u4E2A\u5B57\u8282\uFF0C\u82F1\u6587\u5B57\u7B26\u5360 1 \u4E2A\u5B57\u8282\uFF1B</li><li>UTF-16be \u7F16\u7801\u4E2D\uFF0C\u4E2D\u6587\u5B57\u7B26\u548C\u82F1\u6587\u5B57\u7B26\u90FD\u5360 2 \u4E2A\u5B57\u8282\u3002</li></ul><p>UTF-16be \u4E2D\u7684 be \u6307\u7684\u662F Big Endian\uFF0C\u4E5F\u5C31\u662F\u5927\u7AEF\u3002\u76F8\u5E94\u5730\u4E5F\u6709 UTF-16le\uFF0Cle \u6307\u7684\u662F Little Endian\uFF0C\u4E5F\u5C31\u662F\u5C0F\u7AEF\u3002</p><p>Java \u4F7F\u7528\u53CC\u5B57\u8282\u7F16\u7801 UTF-16be\uFF0C\u8FD9\u4E0D\u662F\u6307 Java \u53EA\u652F\u6301\u8FD9\u4E00\u79CD\u7F16\u7801\u65B9\u5F0F\uFF0C\u800C\u662F\u8BF4 char \u8FD9\u79CD\u7C7B\u578B\u4F7F\u7528 UTF-16be \u8FDB\u884C\u7F16\u7801\u3002char \u7C7B\u578B\u5360 16 \u4F4D\uFF0C\u4E5F\u5C31\u662F\u4E24\u4E2A\u5B57\u8282\uFF0CJava \u4F7F\u7528\u8FD9\u79CD\u53CC\u5B57\u8282\u7F16\u7801\u662F\u4E3A\u4E86\u8BA9\u4E00\u4E2A\u4E2D\u6587\u6216\u8005\u4E00\u4E2A\u82F1\u6587\u90FD\u80FD\u4F7F\u7528\u4E00\u4E2A char \u6765\u5B58\u50A8\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830202338333.png" alt="image-20220830202338333" loading="lazy"></p><h2 id="_2-io\u7406\u89E3\u5206\u7C7B-\u4ECE\u6570\u636E\u64CD\u4F5C\u4E0A" tabindex="-1"><a class="header-anchor" href="#_2-io\u7406\u89E3\u5206\u7C7B-\u4ECE\u6570\u636E\u64CD\u4F5C\u4E0A" aria-hidden="true">#</a> 2. IO\u7406\u89E3\u5206\u7C7B - \u4ECE\u6570\u636E\u64CD\u4F5C\u4E0A</h2><p>\u4ECE\u6570\u636E\u6765\u6E90\u6216\u8005\u8BF4\u662F\u64CD\u4F5C\u5BF9\u8C61\u89D2\u5EA6\u770B\uFF0CIO \u7C7B\u53EF\u4EE5\u5206\u4E3A:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830202429403.png" alt="image-20220830202429403" loading="lazy"></p><h3 id="_2-1-\u6587\u4EF6-file" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6587\u4EF6-file" aria-hidden="true">#</a> 2.1 \u6587\u4EF6(file)</h3><p>FileInputStream\u3001FileOutputStream\u3001FileReader\u3001FileWriter</p><h3 id="_2-2-\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6570\u7EC4" aria-hidden="true">#</a> 2.2 \u6570\u7EC4([])</h3><ul><li>\u5B57\u8282\u6570\u7EC4(byte[]): ByteArrayInputStream\u3001ByteArrayOutputStream</li><li>\u5B57\u7B26\u6570\u7EC4(char[]): CharArrayReader\u3001CharArrayWriter</li></ul><h3 id="_2-3-\u7BA1\u9053\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7BA1\u9053\u64CD\u4F5C" aria-hidden="true">#</a> 2.3 \u7BA1\u9053\u64CD\u4F5C</h3><p>PipedInputStream\u3001PipedOutputStream\u3001PipedReader\u3001PipedWriter</p><h3 id="_2-4-\u57FA\u672C\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u57FA\u672C\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2.4 \u57FA\u672C\u6570\u636E\u7C7B\u578B</h3><p>DataInputStream\u3001DataOutputStream</p><h3 id="_2-5-\u7F13\u51B2\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-5-\u7F13\u51B2\u64CD\u4F5C" aria-hidden="true">#</a> 2.5 \u7F13\u51B2\u64CD\u4F5C</h3><p>BufferedInputStream\u3001BufferedOutputStream\u3001BufferedReader\u3001BufferedWriter</p><h3 id="_2-6-\u6253\u5370" tabindex="-1"><a class="header-anchor" href="#_2-6-\u6253\u5370" aria-hidden="true">#</a> 2.6 \u6253\u5370</h3><p>PrintStream\u3001PrintWriter</p><h3 id="_2-6-\u5BF9\u8C61\u5E8F\u5217\u5316\u53CD\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#_2-6-\u5BF9\u8C61\u5E8F\u5217\u5316\u53CD\u5E8F\u5217\u5316" aria-hidden="true">#</a> 2.6 \u5BF9\u8C61\u5E8F\u5217\u5316\u53CD\u5E8F\u5217\u5316</h3><p>ObjectInputStream\u3001ObjectOutputStream</p><h3 id="_2-7-\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-7-\u8F6C\u6362" aria-hidden="true">#</a> 2.7 \u8F6C\u6362</h3><p>InputStreamReader\u3001OutputStreamWriter</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',42),c={href:"https://pdai.tech/md/java/io/java-io-basic-category.html",target:"_blank",rel:"noopener noreferrer"},s=a("strong",null,"Java IO - \u5206\u7C7B(\u4F20\u8F93\uFF0C\u64CD\u4F5C)",-1);function p(u,_){const e=n("ExternalLinkIcon");return i(),t("div",null,[l,a("p",null,[a("a",c,[s,d(e)])])])}const g=r(o,[["render",p],["__file","java-io-basic-category.html.vue"]]);export{g as default};
