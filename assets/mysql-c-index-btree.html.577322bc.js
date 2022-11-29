import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,d as i}from"./app.75100209.js";const t={},s=i('<h1 id="b-tree\u7D22\u5F15\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#b-tree\u7D22\u5F15\u7684\u4F18\u52BF" aria-hidden="true">#</a> B+TREE\u7D22\u5F15\u7684\u4F18\u52BF</h1><h2 id="_1-\u5F71\u54CD\u7D22\u5F15\u67E5\u8BE2\u6548\u7387\u7684\u4E3B\u8981\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_1-\u5F71\u54CD\u7D22\u5F15\u67E5\u8BE2\u6548\u7387\u7684\u4E3B\u8981\u539F\u56E0" aria-hidden="true">#</a> 1. \u5F71\u54CD\u7D22\u5F15\u67E5\u8BE2\u6548\u7387\u7684\u4E3B\u8981\u539F\u56E0</h2><ol><li><p>\u7D22\u5F15\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A</p><p>\u7D22\u5F15\u672C\u8EAB\u4E5F\u5F88\u5927\uFF0C\u4E0D\u53EF\u80FD\u5168\u90E8\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\uFF0C\u56E0\u6B64\u7D22\u5F15\u5F80\u5F80\u4EE5\u7D22\u5F15\u6587\u4EF6\u7684\u5F62\u5F0F\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A</p></li><li><p>\u78C1\u76D8I/O\u5B58\u53D6\u6162</p><p>\u7D22\u5F15\u5728\u67E5\u627E\u8FC7\u7A0B\u6C47\u603B\u8981\u4EA7\u751F\u78C1\u76D8I/O\u6D88\u8017\uFF0C\u76F8\u5BF9\u4E8E\u5185\u5B58\u5B58\u50A8\uFF0C<strong>I/O\u5B58\u50A8\u7684\u6D88\u8017\u8981\u9AD8\u51E0\u4E2A\u6570\u91CF\u7EA7</strong></p></li></ol><p>\u6240\u4EE5\u7D22\u5F15\u7684\u7ED3\u6784\u7EC4\u7EC7\u8981\u5C3D\u91CF\u51CF\u5C11\u67E5\u627E\u8FC7\u7A0B<strong>\u4E2D\u78C1\u76D8I/O\u7684\u5B58\u53D6\u6B21\u6570\uFF0C\u63D0\u5347\u7D22\u5F15\u6548\u7387</strong></p><h2 id="_2-\u4E3A\u4EC0\u4E48\u78C1\u76D8\u5B58\u50A8\u6162" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u78C1\u76D8\u5B58\u50A8\u6162" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u78C1\u76D8\u5B58\u50A8\u6162</h2><h3 id="_2-1-\u78C1\u76D8\u5B58\u53D6\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-1-\u78C1\u76D8\u5B58\u53D6\u539F\u7406" aria-hidden="true">#</a> 2.1 \u78C1\u76D8\u5B58\u53D6\u539F\u7406</h3><p>\u7D22\u5F15\u4E00\u822C\u4EE5\u6587\u4EF6\u5F62\u5F0F\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A\uFF0C\u7D22\u5F15\u68C0\u7D22\u9700\u8981\u78C1\u76D8I/O \u64CD\u4F5C\uFF0C\u4E0E\u4E3B\u5B58\u4E0D\u540C\uFF0C\u78C1\u76D8I/O<strong>\u5B58\u5728\u673A\u68B0\u8FD0\u52A8\u8017\u8D39</strong>\u3002\u56E0\u6B64\u78C1\u76D8I/O\u7684\u65F6\u95F4\u6D88\u8017\u65F6\u5DE8\u5927\u7684</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210207165425148.png" alt="image-20210207165425148" loading="lazy"></p><h4 id="_2-1-1-\u78C1\u76D8\u7684\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u78C1\u76D8\u7684\u7EC4\u6210" aria-hidden="true">#</a> 2.1.1 \u78C1\u76D8\u7684\u7EC4\u6210</h4><ul><li><p>\u4E00\u4E2A\u78C1\u76D8\u7531\u5927\u5C0F\u76F8\u540C\u4E14\u540C\u8F74\u7684\u5706\u5F62<strong>\u76D8\u7247</strong>\u7EC4\u6210</p><p>\u78C1\u76D8\u53EF\u4EE5\u8F6C\u52A8\uFF08\u5404\u4E2A\u78C1\u76D8\u5FC5\u987B\u540C\u6B65\u8F6C\u52A8\uFF09\u3002</p></li><li><p>\u5728\u78C1\u76D8\u7684\u4E00\u5219\u6709<strong>\u78C1\u5934\u652F\u67B6</strong></p></li><li><p>\u78C1\u5934\u652F\u67B6\u56FA\u5B9A\u4E86\u4E00\u7EC4<strong>\u78C1\u5934</strong></p><ul><li><p>\u6BCF\u4E2A\u78C1\u5934\u8D1F\u8D23\u5B58\u50A8\u5B58\u53D6\u4E00\u4E2A\u78C1\u76D8\u7684\u5185\u5BB9</p></li><li><p>\u78C1\u5934\u4E0D\u80FD\u8F6C\u52A8\uFF0C\u4F46\u662F\u53EF\u4EE5\u6CBF\u78C1\u76D8\u534A\u5F84\u65B9\u5411\u8FD0\u52A8\uFF08\u5B9E\u9645\u662F\u659C\u5207\u5411\u8FD0\u52A8\uFF09</p></li><li><p>\u6BCF\u4E2A\u78C1\u5934\u540C\u4E00\u65F6\u523B\u5FC5\u987B\u662F\u540C\u8F74\u7684</p></li></ul></li></ul><h4 id="_2-1-2-\u78C1\u76D8\u7EC4\u6210\u548C\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u78C1\u76D8\u7EC4\u6210\u548C\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> 2.1.2 \u78C1\u76D8\u7EC4\u6210\u548C\u5DE5\u4F5C\u539F\u7406</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210207165434956.png" alt="image-20210207165434956" loading="lazy"></p><ul><li><p>\u78C1\u9053</p><p>\u6BCF\u4E2A\u540C\u5FC3\u73AF\u53EB\u505A\u4E00\u4E2A</p></li><li><p>\u6247\u533A</p><p>\u78C1\u76D8\u7684\u6700\u5C0F\u5B58\u53D6\u5355\u5143</p></li></ul><h5 id="_2-1-2-1-\u786E\u5B9A\u6570\u636E\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-1-2-1-\u786E\u5B9A\u6570\u636E\u4F4D\u7F6E" aria-hidden="true">#</a> 2.1.2.1 \u786E\u5B9A\u6570\u636E\u4F4D\u7F6E</h5><p>\u5F53\u9700\u8981\u4ECE\u78C1\u76D8\u8BFB\u53D6\u6570\u636E\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u5C06\u6570\u636E<strong>\u903B\u8F91\u5730\u5740\u4F20\u7ED9\u78C1\u76D8</strong>\uFF0C\u78C1\u76D8\u7684\u63A7\u5236\u7535\u8DEF\u6309\u7167\u5BFB\u5740\u903B\u8F91\u5C06\u903B\u8F91\u5730\u5740<strong>\u7FFB\u8BD1\u6210\u7269\u7406\u5730\u5740</strong>\u3002\u65E2\u786E\u5B9A\u8981\u8BFB\u7684\u6570\u636E\u5728\u54EA\u4E2A\u78C1\u9053\uFF0C\u54EA\u4E2A\u6247\u533A</p><h5 id="_2-1-2-2-\u78C1\u5934\u5BFB\u9053" tabindex="-1"><a class="header-anchor" href="#_2-1-2-2-\u78C1\u5934\u5BFB\u9053" aria-hidden="true">#</a> 2.1.2.2 \u78C1\u5934\u5BFB\u9053</h5><p>\u4E3A\u4E86\u8BFB\u53D6\u8FD9\u4E2A\u6247\u533A\u7684\u6570\u636E\uFF0C\u9700\u8981\u5C06\u78C1\u5934\u653E\u5728\u8FD9\u4E2A\u6247\u533A\u4E0A\u65B9\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0C\u78C1\u5934\u9700\u8981\u79FB\u52A8\u5BF9\u51C6\u54CD\u5E94\u7684\u78C1\u9053\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u505A\u5BFB\u9053\uFF0C\u6240\u8017\u8D39\u7684\u65F6\u95F4\u53EB\u5BFB\u9053\u65F6\u95F4\uFF0C</p><h5 id="_2-1-2-3-\u78C1\u76D8\u65CB\u8F6C\u5230\u5BF9\u5E94\u6247\u533A" tabindex="-1"><a class="header-anchor" href="#_2-1-2-3-\u78C1\u76D8\u65CB\u8F6C\u5230\u5BF9\u5E94\u6247\u533A" aria-hidden="true">#</a> 2.1.2.3 \u78C1\u76D8\u65CB\u8F6C\u5230\u5BF9\u5E94\u6247\u533A</h5><p>\u7136\u540E\u78C1\u76D8\u65CB\u8F6C\u5C06\u76EE\u6807\u6247\u533A\u65CB\u8F6C\u5230\u78C1\u5934\u4E0B,\u8FD9\u4E2A\u8FC7\u7A0B\u8017\u8D39\u7684\u65F6\u95F4\u53EB\u505A\u65CB\u8F6C\u65F6\u95F4</p><h2 id="_3-\u78C1\u76D8\u5C40\u90E8\u6027\u539F\u7406\u4E0E\u78C1\u76D8\u9884\u8BFB" tabindex="-1"><a class="header-anchor" href="#_3-\u78C1\u76D8\u5C40\u90E8\u6027\u539F\u7406\u4E0E\u78C1\u76D8\u9884\u8BFB" aria-hidden="true">#</a> 3. \u78C1\u76D8\u5C40\u90E8\u6027\u539F\u7406\u4E0E\u78C1\u76D8\u9884\u8BFB</h2><p>\u7531\u4E8E\u5B58\u50A8\u4ECB\u8D28\u7684\u7279\u6027\uFF0C\u78C1\u76D8\u672C\u8EAB\u5B58\u50A8\u5C31\u6BD4\u4E3B\u5B58\u6162\u5F88\u591A\uFF0C\u5728\u52A0\u4E0A\u673A\u68B0\u8FD0\u52A8\u8017\u8D39\uFF0C\u78C1\u76D8\u7684\u5B58\u53D6\u901F\u5EA6\u5F80\u5F80\u662F\u4E3B\u5B58\u7684\u51E0\u767E\u5206\u4E4B\u4E00\uFF0C\u56E0\u6B64\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C<strong>\u8981\u5C3D\u91CF\u51CF\u5C11\u78C1\u76D8I/O</strong>\uFF0C\u4E3A\u4E86\u8FBE\u5230\u8FD9\u4E2A\u76EE\u7684\uFF0C\u78C1\u76D8\u5F80\u5F80\u4E0D\u662F\u4E25\u683C\u6309\u9700\u8BFB\u53D6\uFF0C\u800C\u662F\u6BCF\u6B21\u90FD\u4F1A<strong>\u9884\u8BFB</strong>\uFF0C\u5373\u4F7F\u53EA\u9700\u8981\u4E00\u4E2A\u5B57\u8282\uFF0C\u78C1\u76D8\u4E5F\u4F1A\u4ECE\u8FD9\u4E2A\u4F4D\u7F6E\u5F00\u59CB\uFF0C<strong>\u987A\u5E8F\u5411\u540E\u8BFB\u53D6\u4E00\u5B9A\u957F\u5EA6\u7684\u6570\u636E\u653E\u5165\u5185\u5B58\uFF0C\u9884\u8BFB\u53EF\u4EE5\u63D0\u9AD8I/O\u6548\u7387</strong>\u3002<strong>\u9884\u8BFB\u7684\u957F\u5EA6\u4E00\u822C\u4E3A\u9875</strong>\uFF08page:\u8BA1\u7B97\u673A\u7BA1\u7406\u5B58\u50A8\u5668\u7684\u903B\u8F91\u5757-\u901A\u5E38\u4E3A4k\uFF09\u7684\u6574\u6570\u500D\u3002\u4E3B\u5B58\u548C\u78C1\u76D8\u4EE5\u9875\u4E3A\u5355\u4F4D\u4EA4\u6362\u6570\u636E\u3002\u5F53\u7A0B\u5E8F\u8981\u53BB<strong>\u8BFB\u7684\u6570\u636E\u4E0D\u518D\u4E3B\u5B58\u4E2D\u65F6</strong>\uFF0C\u4F1A\u89E6\u53D1\u4E00\u4E2A<strong>\u7F3A\u9875\u5F02\u5E38</strong>\uFF0C\u6B64\u65F6\u7CFB\u7EDF\u4F1A\u5411\u78C1\u76D8\u53D1\u51FA\u8BFB\u76D8\u4FE1\u53F7\uFF0C<strong>\u78C1\u76D8\u4F1A\u627E\u5230\u6570\u636E\u7684\u8D77\u59CB\u4F4D\u7F6E\u5E76\u5411\u540E\u8FDE\u7EED\u8BFB\u53D6\u4E00\u9875\u6216\u51E0\u9875\u8F7D\u5165\u5185\u5B58\u4E2D</strong></p><h2 id="_4-b-b-tree\u7D22\u5F15\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_4-b-b-tree\u7D22\u5F15\u7684\u4F18\u52BF" aria-hidden="true">#</a> 4.B-/B+Tree\u7D22\u5F15\u7684\u4F18\u52BF</h2><p><strong>\u4E00\u822C\u4F7F\u7528\u78C1\u76D8\u7684I/O \u6B21\u6570\u8BC4\u4EF7\u7D22\u5F15\u4F18\u52BF</strong></p><p>\u90A3\u4E48BTree\u5982\u4F55\u51CF\u5C11\u78C1\u76D8\u6B21\u6570\u7684\u5462</p><ol><li><p>\u7ED3\u5408\u64CD\u4F5C\u7CFB\u7EDF\u5B58\u50A8\u7ED3\u6784\u4F18\u5316\u5904\u7406\uFF1AMySQL\u5DE7\u5999\u8FD0\u7528\u64CD\u4F5C\u7CFB\u7EDF\u5B58\u50A8\u7ED3\u6784**\uFF08\u4E00\u4E2A\u8282\u70B9\u5206\u914D\u5230\u4E00\u4E2A\u5B58\u50A8\u9875\u4E2D-&gt;\u5C3D\u91CF\u51CF\u5C11I/O\u64CD\u4F5C\uFF09&amp;\u78C1\u76D8\u9884\u8BFB\uFF08\u7F13\u5B58\u9884\u8BFB-&gt;\u52A0\u901F\u9884\u8BFB\u9A6C\u4E0A\u8981\u7528\u5230\u7684\u6570\u636E\uFF09**</p><ul><li><p>\u8BE6\u89E3:</p><p><strong>Mysql\u8BBE\u8BA1\u5229\u7528\u4E86\u78C1\u76D8\u9884\u8BFB\u539F\u7406\uFF0C\u5C06\u4E00\u4E2Ab+tree\u8282\u70B9\u5927\u5C0F\u8BBE\u4E3A\u4E00\u4E2A\u9875\u5927\u5C0F\uFF0C\u5728\u65B0\u5EFA\u8282\u70B9\u65F6\u76F4\u63A5\u7533\u8BF7\u4E00\u4E2A\u9875\u7684\u63A7\u4EF6\uFF0C\u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u8282\u70B9\u7269\u7406\u4E0A\u5B58\u50A8\u5728\u4E00\u4E2A\u9875\u91CC\uFF0C\u52A0\u4E4B\u8BA1\u7B97\u673A\u5B58\u50A8\u5206\u914D\u90FD\u662F\u6309\u9875\u5BF9\u5176\uFF0C\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u6BCF\u4E2ANode\u8282\u70B9\u53EA\u9700\u8981\u4E00\u6B21IO\u64CD\u4F5C</strong></p></li></ul></li><li><p><strong>B+Tree\u5355\u4E2A\u8282\u70B9\u80FD\u653E\u591A\u4E2A\u5B50\u8282\u70B9</strong>\uFF0C\u76F8\u540CIO\u6B21\u6570\uFF0C\u68C0\u7D22\u51FA\u66F4\u591A\u4E1C\u897F \u8FD9\u4E5F\u662FB+Tree\u76F8\u6BD4B-Tree\u80FD\u67E5\u8BE2\u51FA\u66F4\u591A\u6570\u636E\u7684\u539F\u56E0</p><ul><li><p>\u8BE6\u89E3</p><p><strong>\u5355\u4E2A\u8282\u70B9\u80FD\u653E\u591A\u4E2A\u5B50\u8282\u70B9</strong>\uFF0C\u67E5\u8BE2IO\u6B21\u6570\u76F8\u540C(mysql\u67E5\u8BE2IO\u6B21\u6570\u6700\u591A3-5\u6B21-\u6240\u4EE5\u9700\u8981\u6BCF\u4E2A\u8282\u70B9\u9700\u8981\u5B58\u50A8\u5F88\u591A\u6570\u636E)</p></li></ul></li><li><p>B+Tree<strong>\u53EA\u5728\u53F6\u5B50\u8282\u70B9\u5B58\u50A8\u6570\u636E&amp;\u6240\u6709\u53F6\u5B50\u8282\u70B9\u5305\u542B\u4E00\u4E2A\u94FE\u6307\u9488&amp;\u5176\u4ED6\u5185\u5C42\u975E\u53F6\u5B50\u8282\u70B9\u53EA\u5B58\u50A8\u7D22\u5F15\u6570\u636E</strong>\uFF0C\u53EA\u5229\u7528\u7D22\u5F15<strong>\u5FEB\u901F\u5B9A\u4F4D\u6570\u636E\u7D22\u5F15\u8303\u56F4</strong>\uFF0C\u5148\u5B9A\u4F4D\u7D22\u5F15<strong>\u518D\u901A\u8FC7\u7D22\u5F15\u9AD8\u6548\u5FEB\u901F\u5B9A\u4F4D\u6570\u636E</strong></p></li></ol><ul><li><p>B+Tree\u66F4\u9002\u5408\u5916\u5B58\u7D22\u5F15\uFF0C\u539F\u56E0\u548C\u5185\u8282\u70B9\u51FA\u5EA6d\u6709\u5173\u3002\u4ECE\u4E0A\u9762\u5206\u6790\u53EF\u4EE5\u770B\u5230\uFF0Cd\u8D8A\u5927\u7D22\u5F15\u7684\u6027\u80FD\u8D8A\u597D\uFF0C\u800C\u51FA\u5EA6\u7684\u4E0A\u9650\u53D6\u51B3\u4E8E\u8282\u70B9\u5185key\u548Cdata\u7684\u5927\u5C0F\uFF1A</p></li><li><p>B+Tree\u5185\u8282\u70B9\u53BB\u6389\u4E86data\u57DF\uFF0C\u56E0\u6B64\u53EF\u4EE5\u62E5\u6709\u66F4\u5927\u7684\u51FA\u5EA6\uFF0C\u62E5\u6709\u66F4\u597D\u7684\u6027\u80FD\u3002\u53EA\u5229\u7528\u7D22\u5F15\u5FEB\u901F\u5B9A\u4F4D\u6570\u636E\u7D22\u5F15\u8303\u56F4\uFF0C\u5148\u5B9A\u4F4D\u7D22\u5F15\u518D\u901A\u8FC7\u7D22\u5F15\u9AD8\u6548\u5FEB\u901F\u5B9A\u4F4D\u6570\u636E\u3002</p><p>dmax=floor(pagesize/(keysize+datasize+pointsize))</p></li></ul>',26),n=[s];function o(l,p){return r(),a("div",null,n)}const g=e(t,[["render",o],["__file","mysql-c-index-btree.html.vue"]]);export{g as default};
