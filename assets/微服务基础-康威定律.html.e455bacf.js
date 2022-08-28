import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as a,e as p}from"./app.70ab84e4.js";const o={},l=p('<h1 id="\u5FAE\u670D\u52A1\u57FA\u7840-\u5EB7\u5A01\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u670D\u52A1\u57FA\u7840-\u5EB7\u5A01\u5B9A\u5F8B" aria-hidden="true">#</a> \u5FAE\u670D\u52A1\u57FA\u7840-\u5EB7\u5A01\u5B9A\u5F8B</h1><blockquote><p>\u5FAE\u670D\u52A1\u8FD9\u4E2A\u6982\u5FF5\u5F88\u65E9\u5C31\u63D0\u51FA\u4E86\uFF0C \u771F\u6B63\u706B\u8D77\u6765\u662F\u57282016\u5E74\u5DE6\u53F3\uFF0C\u800C\u5EB7\u5A01\u5B9A\u5F8B(Conway&#39;s Law)\u5C31\u662F\u5FAE\u670D\u52A1\u7406\u8BBA\u57FA\u7840\u3002</p></blockquote><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5FAE\u670D\u52A1\u662F\u6700\u8FD1\u975E\u5E38\u706B\u70ED\u7684\u65B0\u6982\u5FF5\uFF0C\u5927\u5BB6\u90FD\u5728\u8FFD\uFF0C\u4E5F\u90FD\u89C9\u5F97\u5F88\u5BF9\uFF0C\u4F46\u662F\u4F3C\u4E4E\u6CA1\u6709\u5F88\u5145\u8DB3\u7684\u7406\u8BBA\u57FA\u7840\u8BF4\u660E\u8FD9\u662F\u6B63\u786E\u7684\uFF0C\u7ED9\u4EBA\u7684\u611F\u89C9\u662F \u4E0D\u660E\u89C9\u5389 \u3002\u524D\u6BB5\u65F6\u95F4\u770B\u4E86Mike Amundsen\u300A\u8FDC\u8DDD\u79BB\u6761\u4EF6\u4E0B\u7684\u5EB7\u5A01\u5B9A\u5F8B\u2014\u2014\u5206\u5E03\u5F0F\u4E16\u754C\u4E2D\u5B9E\u73B0\u56E2\u961F\u6784\u5EFA\u300B\uFF08\u662FDesign RESTful API\u7684\u4F5C\u8005\uFF09\u5728InfoQ\u4E0A\u7684\u4E00\u4E2A\u5206\u4EAB\uFF0C\u89C9\u5F97\u5F88\u6709\u5E2E\u52A9\uFF0C\u7ED3\u5408\u81EA\u5DF1\u7684\u4E00\u4E9B\u601D\u8003\uFF0C\u6574\u7406\u4E86\u8BE5\u6F14\u8BB2\u7684\u5185\u5BB9\u3002</p><p>\u53EF\u80FD\u51FA\u4E4E\u5F88\u591A\u4EBA\u610F\u6599\u4E4B\u5916\u7684\u4E00\u4E2A\u4E8B\u5B9E\u662F\uFF0C\u5FAE\u670D\u52A1\u5F88\u591A\u6838\u5FC3\u7406\u5FF5\u5176\u5B9E\u5728\u534A\u4E2A\u4E16\u7EAA\u524D\u7684\u4E00\u7BC7\u6587\u7AE0\u4E2D\u5C31\u88AB\u9610\u8FF0\u8FC7\u4E86\uFF0C\u800C\u4E14\u8FD9\u7BC7\u6587\u7AE0\u4E2D\u7684\u5F88\u591A\u8BBA\u70B9\u5728\u8F6F\u4EF6\u5F00\u53D1\u98DE\u901F\u53D1\u5C55\u7684\u8FD9\u534A\u4E2A\u4E16\u7EAA\u4E2D\u7ADF\u7136\u4E00\u518D\u88AB\u9A8C\u8BC1\uFF0C\u8FD9\u5C31\u662F\u5EB7\u5A01\u5B9A\u5F8B(Conway&#39;s Law).</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617221459652.png" alt="image-20220617221459652"></p><p>\u5728\u5EB7\u5A01\u7684\u8FD9\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6700\u6709\u540D\u7684\u4E00\u53E5\u8BDD\u5C31\u662F\uFF1A</p><blockquote><p>Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations. - Melvin Conway(1967)</p></blockquote><p>\u4E2D\u6587\u76F4\u8BD1\u5927\u6982\u7684\u610F\u601D\u5C31\u662F\uFF1A\u8BBE\u8BA1\u7CFB\u7EDF\u7684\u7EC4\u7EC7\uFF0C\u5176\u4EA7\u751F\u7684\u8BBE\u8BA1\u7B49\u540C\u4E8E\u7EC4\u7EC7\u4E4B\u5185\u3001\u7EC4\u7EC7\u4E4B\u95F4\u7684\u6C9F\u901A\u7ED3\u6784\u3002</p><p>\u770B\u770B\u4E0B\u9762\u7684\u56FE\u7247\uFF0C\u518D\u60F3\u60F3Apple\u7684\u4EA7\u54C1\u3001\u5FAE\u8F6F\u7684\u4EA7\u54C1\u8BBE\u8BA1\uFF0C\u5C31\u80FD\u5F62\u8C61\u751F\u52A8\u7684\u7406\u89E3\u8FD9\u53E5\u8BDD\u4E86\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617221604888.png" alt="image-20220617221604888"></p><p>\u7528\u901A\u4FD7\u7684\u8BF4\u6CD5\u5C31\u662F\uFF1A<strong>\u7EC4\u7EC7\u5F62\u5F0F\u7B49\u540C\u4E8E\u7CFB\u7EDF\u8BBE\u8BA1</strong>\u3002</p><p>\u8FD9\u91CC\u7684\u7CFB\u7EDF\u6309\u539F\u4F5C\u8005\u7684\u610F\u601D\u5E76\u4E0D\u5C40\u9650\u4E8E\u8F6F\u4EF6\u7CFB\u7EDF\u3002 \u636E\u8BF4\u8FD9\u7BC7\u6587\u7AE0\u6700\u521D\u6295\u7684\u54C8\u4F5B\u5546\u4E1A\u8BC4\u8BBA\uFF0C\u7ED3\u679C\u7A0B\u5E8F\u5458\u5C4C\u4E1D\u7684\u6587\u7AE0\u4E0D\u5165\u5546\u4E1A\u4EBA\u58EB\u7684\u6CD5\u773C\uFF0C\u65E0\u60C5\u88AB\u62D2\uFF0C\u5EB7\u5A01\u5C31\u6295\u5230\u4E86\u4E00\u4E2A\u7F16\u7A0B\u76F8\u5173\u7684\u6742\u5FD7\uFF0C\u6240\u4EE5\u88AB\u8BEF\u89E3\u4E3A\u662F\u9488\u5BF9\u8F6F\u4EF6\u5F00\u53D1\u7684\u3002\u6700\u521D\u8FD9\u7BC7\u6587\u7AE0\u663E\u7136\u4E0D\u6562\u81EA\u79F0\u5B9A\u5F8B\uFF08law\uFF09\uFF0C\u53EA\u662F\u63CF\u8FF0\u4E86\u4F5C\u8005\u81EA\u5DF1\u7684\u53D1\u73B0\u548C\u603B\u7ED3\u3002\u540E\u6765\uFF0C\u5728Brooks Law\u8457\u540D\u7684\u4EBA\u6708\u795E\u8BDD\u4E2D\uFF0C\u5F15\u7528\u8FD9\u4E2A\u8BBA\u70B9\uFF0C\u5E76\u5C06\u5176\u201C\u5439\u6367\u201D\u6210\u4E86\u73B0\u5728\u6211\u4EEC\u719F\u77E5\u201C\u5EB7\u5A01\u5B9A\u5F8B\u201D\u3002</p><h2 id="_2-\u5EB7\u5A01\u5B9A\u5F8B\u8BE6\u7EC6\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_2-\u5EB7\u5A01\u5B9A\u5F8B\u8BE6\u7EC6\u4ECB\u7ECD" aria-hidden="true">#</a> 2. \u5EB7\u5A01\u5B9A\u5F8B\u8BE6\u7EC6\u4ECB\u7ECD</h2><p>Mike\u4ECE\u4ED6\u7684\u89D2\u5EA6\u5F52\u7EB3\u8FD9\u7BC7\u8BBA\u6587\u4E2D\u7684\u5176\u4ED6\u4E00\u4E9B\u6838\u5FC3\u89C2\u70B9\uFF0C\u5982\u4E0B\uFF1A</p><ul><li><p>\u7B2C\u4E00\u5B9A\u5F8B</p><p>Communication dictates design</p><p>\u7EC4\u7EC7\u6C9F\u901A\u65B9\u5F0F\u4F1A\u901A\u8FC7\u7CFB\u7EDF\u8BBE\u8BA1\u8868\u8FBE\u51FA\u6765</p></li><li><p>\u7B2C\u4E8C\u5B9A\u5F8B</p><p>There is never enough time to do something right, but there is always enough time to do it over</p><p>\u65F6\u95F4\u518D\u591A\u4E00\u4EF6\u4E8B\u60C5\u4E5F\u4E0D\u53EF\u80FD\u505A\u5F97\u5B8C\u7F8E\uFF0C\u4F46\u603B\u6709\u65F6\u95F4\u505A\u5B8C\u4E00\u4EF6\u4E8B\u60C5</p></li><li><p>\u7B2C\u4E09\u5B9A\u5F8B</p><p>There is a homomorphism from the linear graph of a system to the linear graph of its design organization</p><p>\u7EBF\u578B\u7CFB\u7EDF\u548C\u7EBF\u578B\u7EC4\u7EC7\u67B6\u6784\u95F4\u6F5C\u5728\u7684\u5F02\u8D28\u540C\u6001\u7279\u6027</p></li><li><p>\u7B2C\u56DB\u5B9A\u5F8B</p><p>The structures of large systems tend to disintegrate during development, qualitatively more so than with small systems</p><p>\u5927\u7684\u7CFB\u7EDF\u7EC4\u7EC7\u603B\u662F\u6BD4\u5C0F\u7CFB\u7EDF\u66F4\u503E\u5411\u4E8E\u5206\u89E3</p></li></ul><h2 id="_3-\u5B9A\u5F8B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9A\u5F8B\u8BF4\u660E" aria-hidden="true">#</a> 3.\u5B9A\u5F8B\u8BF4\u660E</h2><h3 id="_3-1-\u7B2C\u4E00\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7B2C\u4E00\u5B9A\u5F8B" aria-hidden="true">#</a> 3.1 \u7B2C\u4E00\u5B9A\u5F8B\uFF1A</h3><p><strong>\u7EC4\u7EC7\u6C9F\u901A\u65B9\u5F0F\u4F1A\u901A\u8FC7\u7CFB\u7EDF\u8BBE\u8BA1\u8868\u8FBE\u51FA\u6765</strong></p><blockquote><p>\u4EBA\u662F\u590D\u6742\u5F97\u793E\u4F1A\u52A8\u7269</p></blockquote><p>\u7EC4\u7EC7\u7684\u6C9F\u901A\u548C\u7CFB\u7EDF\u8BBE\u8BA1\u4E4B\u95F4\u7684\u7D27\u5BC6\u8054\u7CFB\uFF0C\u5728\u5F88\u591A\u522B\u7684\u9886\u57DF\u6709\u7C7B\u4F3C\u7684\u9610\u8FF0\u3002\u5BF9\u4E8E\u590D\u6742\u7684\u7CFB\u7EDF\uFF0C\u804A\u8BBE\u8BA1\u5C31\u79BB\u4E0D\u5F00\u804A\u4EBA\u4E0E\u4EBA\u7684\u6C9F\u901A\uFF0C\u89E3\u51B3\u597D\u4EBA\u4E0E\u4EBA\u7684\u6C9F\u901A\u95EE\u9898\uFF0C\u624D\u80FD\u6709\u4E00\u4E2A\u597D\u7684\u7CFB\u7EDF\u8BBE\u8BA1\u3002\u76F8\u4FE1\u51E0\u4E4E\u6BCF\u4E2A\u7A0B\u5E8F\u5458\u90FD\u8BFB\u8FC7\u7684\u300A\u4EBA\u6708\u795E\u8BDD\u300B\uFF081975\u5E74\uFF0C\u611F\u89C9\u90FD\u662F\u8001\u53E4\u8463\u4E86\uFF0C\u7ECF\u5178\u7684\u5C31\u662F\u7ECF\u5F97\u8D77\u65F6\u95F4\u8003\u9A8C\uFF09\u91CC\u9762\u8BB8\u591A\u89C2\u70B9\u90FD\u548C\u8FD9\u53E5\u8BDD\u6709\u5F02\u66F2\u540C\u5DE5\u4E4B\u5999\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617222147729.png" alt="image-20220617222147729"></p><p>\u6BD4\u5982\u300A\u4EBA\u6708\u795E\u8BDD\u300B\u4E2D\u6700\u8457\u540D\u7684\u4E00\u53E5\u8BDD\u5C31\u662F</p><blockquote><p>Adding manpower to a late software project makes it later --Fred Brooks, (1975)</p></blockquote><p>Boss\u4EEC\u90FD\u542C\u5230\u4E86\u5417\uFF1F\u4E3A\u4E86\u8D76\u8FDB\u5EA6\u52A0\u7A0B\u5E8F\u5458\u5C31\u50CF\u7528\u6C34\u53BB\u706D\u6CB9\u9505\u91CC\u7684\u706B\u4E00\u6837\uFF08\u65E0\u5948\u5927\u5BB6\u8FD8\u662F\u524D\u8D74\u540E\u7EE7\uFF09\u3002</p><p>\u4E3A\u4EC0\u4E48\uFF1F\u4EBA\u6708\u795E\u8BDD\u4E5F\u7ED9\u51FA\u4E86\u5F88\u7B80\u6D01\u7684\u7B54\u6848\uFF1A\u6C9F\u901A\u6210\u672C = n(n-1)/2\uFF0C<strong>\u6C9F\u901A\u6210\u672C\u968F\u7740\u9879\u76EE\u6216\u8005\u7EC4\u7EC7\u7684\u4EBA\u5458\u589E\u52A0\u5448\u6307\u6570\u7EA7\u589E\u957F</strong>\u3002\u662F\u7684\uFF0C\u9879\u76EE\u7BA1\u7406\u8FD9\u4E2A\u7B97\u6CD5\u7684\u590D\u6742\u5EA6\u662FO(n^2)\u3002\u4E3E\u4E2A\u4F8B\u5B50</p><ul><li>5\u4E2A\u4EBA\u7684\u9879\u76EE\u7EC4\uFF0C\u9700\u8981\u6C9F\u901A\u7684\u6E20\u9053\u662F 5*(5\u20131)/2 = 10</li><li>15\u4E2A\u4EBA\u7684\u9879\u76EE\u7EC4\uFF0C\u9700\u8981\u6C9F\u901A\u7684\u6E20\u9053\u662F15*(15\u20131)/2 = 105</li><li>50\u4E2A\u4EBA\u7684\u9879\u76EE\u7EC4\uFF0C\u9700\u8981\u6C9F\u901A\u7684\u6E20\u9053\u662F50*(50\u20131)/2 = 1,225</li><li>150\u4E2A\u4EBA\u7684\u9879\u76EE\u7EC4\uFF0C\u9700\u8981\u6C9F\u901A\u7684\u6E20\u9053\u662F150*(150\u20131)/2 = 11,175</li></ul><p>\u6240\u4EE5\u77E5\u9053\u4E3A\u4EC0\u4E48\u4E92\u8054\u7F51\u521B\u4E1A\u516C\u53F8\u90FD\u8FD9\u4E48\u5C0F\u4E86\u5427\uFF0C\u5FC5\u987B\u5C0F\u554A\uFF0C\u4E0D\u7136\u7B49CEO\u548C\u6240\u6709\u4EBA\u8BB2\u4E00\u904D\u521B\u4E1A\u7684\u60F3\u6CD5\u540E\uFF0C\u98CE\u6295\u7684\u94B1\u90FD\u70E7\u5B8C\u4E86\u3002</p><p>Mike\u8FD8\u4E3E\u4E86\u4E00\u4E2A\u975E\u5E38\u6709\u610F\u601D\u7684\u7406\u8BBA\uFF0C\u53EB\u201CDunbar Number\u201D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u53EBDunbar\uFF08\u5E9F\u8BDD\uFF09\u751F\u7269\u5B66\u5BB6\u57281992\u5E74\u6700\u65E9\u63D0\u51FA\u6765\u7684\u3002\u6700\u521D\uFF0C\u4ED6\u53D1\u73B0\u7075\u957F\u7C7B\u7684\u5927\u8111\u5BB9\u91CF\u548C\u5176\u5BF9\u5E94\u7684\u65CF\u7FA4\u5927\u5C0F\u6709\u4E00\u5B9A\u5173\u8054\uFF0C\u8FDB\u800C\u63A8\u65AD\u51FA\u4EBA\u7C7B\u7684\u5927\u8111\u80FD\u7EF4\u7CFB\u7684\u5173\u7CFB\u7684\u4E00\u4E9B\u6709\u8DA3\u4F30\u8BA1\u3002\u4E3E\u4F8B\u6765\u8BF4</p><ul><li>\u4EB2\u5BC6\uFF08intimate\uFF09\u670B\u53CB: 5</li><li>\u4FE1\u4EFB\uFF08trusted\uFF09\u670B\u53CB: 15</li><li>\u9152\u8089\uFF08close\uFF09\u670B\u53CB: 35</li><li>\u7167\u9762\uFF08casual\uFF09\u670B\u53CB: 150</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617222405482.png" alt="image-20220617222405482"></p><p>\u662F\u4E0D\u662F\u548C\u4E0A\u9762\u7684\u6C9F\u901A\u6210\u672C\u7684\u6570\u5B57\u5F88\u8C8C\u4F3C\u6709\u5173\u8054\uFF1F\u662F\u7684\uFF0C\u6211\u4EEC\u7684\u5927\u8111\u667A\u529B\u53EA\u80FD\u652F\u6301\u6211\u4EEC\u7EF4\u7CFB\u8FD9\u4E48\u591A\u7684\u5173\u7CFB\u3002\uFF08\u5927\u5BB6\u90FD\u77E5\u9053\u8FD9\u4E0D\u662F\u7A0B\u5E8F\u733F\u64C5\u957F\u7684\u9886\u57DF\uFF0C\u5728\u5F00\u53D1\u56E2\u961F\u91CC\uFF0C\u8FD9\u4E2A\u503C\u5E94\u8BE5\u66F4\u5C0F\uFF0C\u4F30\u8BA1\u548C\u733F\u5DEE\u4E0D\u591A -_-\u51F8 \uFF09</p><p>\u6C9F\u901A\u7684\u95EE\u9898\uFF0C\u4F1A\u5E26\u6765\u7CFB\u7EDF\u8BBE\u8BA1\u7684\u95EE\u9898\uFF0C\u8FDB\u800C\u5F71\u54CD\u6574\u4E2A\u7CFB\u7EDF\u7684\u5F00\u53D1\u6548\u7387\u548C\u6700\u7EC8\u4EA7\u54C1\u7ED3\u679C\u3002</p><h3 id="_3-2-\u7B2C\u4E8C\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7B2C\u4E8C\u5B9A\u5F8B" aria-hidden="true">#</a> 3.2 \u7B2C\u4E8C\u5B9A\u5F8B</h3><p>\u65F6\u95F4\u518D\u591A\u4E00\u4EF6\u4E8B\u60C5\u4E5F\u4E0D\u53EF\u80FD\u505A\u5F97\u5B8C\u7F8E\uFF0C\u4F46\u603B\u6709\u65F6\u95F4\u505A\u5B8C\u4E00\u4EF6\u4E8B\u60C5</p><blockquote><p>\u4E00\u53E3\u6C14\u5403\u4E0D\u6210\u80D6\u5B50\uFF0C\u5148\u641E\u5B9A\u80FD\u641E\u5B9A\u7684</p></blockquote><p>Eric Hollnagel\u662F\u654F\u6377\u5F00\u53D1\u793E\u533A\u7684\u6CF0\u6597\u4E4B\u4E00\uFF0C\u5728\u4ED6\u300AEfficiency-Effectiveness Trade Offs\u300B \u4E00\u4E66\u4E2D\u89E3\u91CA\u4E86\u7C7B\u4F3C\u7684\u8BBA\u70B9\u3002</p><blockquote><p>Problem too complicated? Ignore details. Not enough resources?Give up features. --Eric Hollnagel (2009)</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617222535941.png" alt="image-20220617222535941"></p><p>\u7CFB\u7EDF\u8D8A\u505A\u8D8A\u590D\u6742\uFF0C\u529F\u80FD\u8D8A\u6765\u8D8A\u591A\uFF0C\u5916\u90E8\u5E02\u573A\u7684\u7ADE\u4E89\u8D8A\u6765\u8D8A\u5267\u70C8\uFF0C\u6295\u8D44\u4EBA\u7684\u671F\u5F85\u8D8A\u6765\u8D8A\u9AD8\u3002\u4F46\u4EBA\u7684\u667A\u529B\u662F\u6709\u4E0A\u9650\u7684\uFF0C\u5373\u4F7F\u518D\u725B\u903C\u7684\u4EBA\uFF0C\u878D\u5230\u94B1\u518D\u591A\u4E5F\u4E0D\u4E00\u5B9A\u62DB\u5230\u8DB3\u591F\u591A\u5408\u9002\u7684\u4EBA\u3002\u5BF9\u4E8E\u4E00\u4E2A\u5DE8\u590D\u6742\u7684\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u6C38\u8FDC\u65E0\u6CD5\u8003\u8651\u5468\u5168\u3002Eric\u8BA4\u4E3A\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6700\u597D\u7684\u89E3\u51B3\u529E\u6CD5\u7ADF\u7136\u662F\u2014\u2014\u201C\u7834\u7F50\u5B50\u7834\u6454\u201D\u3002</p><p>\u5176\u5B9E\u6211\u4EEC\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u4E5F\u7ECF\u5E38\u78B0\u5230\u3002\u4EA7\u54C1\u7ECF\u7406\u7684\u9700\u6C42\u592A\u590D\u6742\u4E86\uFF1F\u9002\u5F53\u5FFD\u7565\u4E00\u4E9B\u7EC6\u8282\uFF0C\u5148\u6293\u4E3B\u7EBF\u3002\u4EA7\u54C1\u7ECF\u7406\u7684\u9700\u6C42\u592A\u591A\u4E86\uFF1F\u653E\u5F03\u4E00\u4E9B\u529F\u80FD\u3002</p><p>\u636E\u8BF4Eric\u88AB\u4E00\u5BB6\u822A\u7A7A\u516C\u53F8\u8BF7\u53BB\u505A\u5B89\u5168\u54A8\u8BE2\u987E\u95EE\uFF0C\u590D\u6742\u4FDD\u8BC1\u98DE\u673A\u98DE\u884C\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u548C\u5B89\u5168\u6027\u3002Eric\u8BA4\u4E3A\u505A\u5230\u5B89\u5168\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u5E38\u89C4\u7684\u5B89\u5168\u6307\u7684\u662F\u5C3D\u53EF\u80FD\u591A\u7684\u53D1\u73B0\u5E76\u6D88\u9664\u9519\u8BEF\u7684\u90E8\u5206\uFF0C\u8FBE\u5230\u7EDD\u5BF9\u5B89\u5168\uFF0C\u8FD9\u662F\u7406\u60F3\u3002</li><li><strong>\u53E6\u4E00\u79CD\u5219\u662F\u5F39\u6027\u5B89\u5168\uFF0C\u5373\u4F7F\u53D1\u751F\u9519\u8BEF\uFF0C\u53EA\u8981\u53CA\u65F6\u6062\u590D\uFF0C\u4E5F\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u8FD9\u662F\u73B0\u5B9E\u3002</strong></li></ul><p>\u5BF9\u4E8E\u98DE\u673A\u8FD9\u6837\u7684\u590D\u6742\u7CFB\u7EDF\uFF0C\u518D\u725B\u903C\u7684\u4EBA\u4E5F\u65E0\u6CD5\u8003\u8651\u5230\u6F0F\u6D1E\u7684\u65B9\u65B9\u9762\u9762\uFF0C\u6240\u4EE5Eric\u5EFA\u8BAE\u653E\u5F03\u6253\u9020\u5B8C\u7F8E\u7CFB\u7EDF\u7684\u60F3\u6CD5\uFF0C\u800C\u662F\u901A\u8FC7\u4E0D\u65AD\u7684\u8BD5\u98DE\uFF0C\u53D1\u73B0\u95EE\u9898\uFF0C\u786E\u4FDD\u95EE\u9898\u53D1\u751F\u65F6\uFF0C\u7CFB\u7EDF\u80FD\u81EA\u52A8\u590D\u539F\u5373\u53EF\uFF0C\u800C\u4E0D\u8FFD\u6C42\u98DE\u884C\u7CFB\u7EDF\u7684\u7EDD\u5BF9\u6B63\u786E\u548C\u5B89\u5168\u3002</p><p>\u4E0B\u9762\u7684\u56FE\u5F88\u597D\u7684\u89E3\u91CA\u4E86\u8FD9\u4E2A\u8FC7\u7A0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617222717319.png" alt="image-20220617222717319"></p><p>\u542C\u7740\u5F88\u8033\u719F\u4E0D\u662F\u5417\uFF1F\u8FD9\u4E0D\u5C31\u662F \u6301\u7EED\u96C6\u6210 \u548C\u654F\u6377\u5F00\u53D1\u5417\uFF1F\u7684\u786E\u5C31\u662F\u3002</p><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u8FD9\u548C\u4E92\u8054\u7F51\u516C\u53F8\u7EF4\u62A4\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u5F39\u6027\u8BBE\u8BA1\u4E5F\u662F\u4E00\u4E2A\u9053\u7406\u3002\u5BF9\u4E8E\u4E00\u4E2A\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u51E0\u4E4E\u6C38\u8FDC\u4E0D\u53EF\u80FD\u627E\u5230\u5E76\u4FEE\u590D\u6240\u6709\u7684bug\uFF0C\u5355\u5143\u6D4B\u8BD5\u8986\u76D61000%\u4E5F\u6CA1\u6709\u7528\uFF0C\u9519\u8BEF\u6D41\u6DCC\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u8840\u6DB2\u91CC\u3002\u89E3\u51B3\u65B9\u6CD5\u4E0D\u662F\u6D88\u706D\u8FD9\u4E9B\u95EE\u9898\uFF0C\u800C\u662F\u5BB9\u5FCD\u8FD9\u4E9B\u95EE\u9898\uFF0C\u5728\u95EE\u9898\u53D1\u751F\u65F6\uFF0C\u80FD\u81EA\u52A8\u4FEE\u590D\uFF0C\u5FAE\u670D\u52A1\u7EC4\u6210\u7684\u7CFB\u7EDF\uFF0C\u6BCF\u4E00\u4E2A\u5FAE\u670D\u52A1\u90FD\u53EF\u80FD\u6302\u6389\uFF0C\u8FD9\u662F\u5E38\u6001\uFF0C\u6211\u4EEC\u53EA\u8981\u6709\u8DB3\u591F\u7684\u5197\u4F59\u548C\u5907\u4EFD\u5373\u53EF\u3002\u5373\u6240\u8C13\u7684\u5F39\u6027\u8BBE\u8BA1\u6216\u8005\u53EB\u9AD8\u53EF\u7528\u8BBE\u8BA1\u3002</p><h3 id="_3-3-\u7B2C\u4E09\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#_3-3-\u7B2C\u4E09\u5B9A\u5F8B" aria-hidden="true">#</a> 3.3 \u7B2C\u4E09\u5B9A\u5F8B</h3><p>\u7EBF\u578B\u7CFB\u7EDF\u548C\u7EBF\u578B\u7EC4\u7EC7\u67B6\u6784\u95F4\u6F5C\u5728\u7684\u5F02\u8D28\u540C\u6001\u7279\u6027</p><blockquote><p>\u79CD\u74DC\u5F97\u74DC\uFF0C\u505A\u72EC\u7ACB\u81EA\u6CBB\u7684\u5B50\u7CFB\u7EDF\u51CF\u5C11\u6C9F\u901A\u6210\u672C</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617222913061.png" alt="image-20220617222913061"></p><p>\u8FD9\u662F\u7B2C\u4E00\u5B9A\u5F8B\u7EC4\u7EC7\u548C\u8BBE\u8BA1\u95F4\u5185\u5728\u5173\u7CFB\u7684\u4E00\u4E2A\u5177\u4F53\u5E94\u7528\u3002\u66F4\u76F4\u767D\u7684\u8BF4\uFF0C\u4F60\u60F3\u8981\u4EC0\u4E48\u6837\u7684\u7CFB\u7EDF\uFF0C\u5C31\u642D\u5EFA\u4EC0\u4E48\u6837\u7684\u56E2\u961F\u3002\u5982\u679C\u4F60\u7684\u56E2\u961F\u5206\u6210\u524D\u7AEF\u56E2\u961F\uFF0Cjava\u540E\u53F0\u5F00\u53D1\u56E2\u961F\uFF0CDBA\u56E2\u961F\uFF0C\u8FD0\u7EF4\u56E2\u961F\uFF0C\u4F60\u7684\u7CFB\u7EDF\u5C31\u4F1A\u957F\u6210\u4E0B\u9762\u7684\u6837\u5B50\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617222953443.png" alt="image-20220617222953443"></p><p>\u76F8\u53CD\uFF0C\u5982\u679C\u4F60\u7684\u7CFB\u7EDF\u6309\u7167\u4E1A\u52A1\u8FB9\u754C\u5212\u5206\u7684\uFF0C\u5927\u5BB6\u6309\u7167\u4E00\u4E2A\u4E1A\u52A1\u76EE\u6807\u53BB\u628A\u81EA\u5DF1\u7684\u6A21\u5757\u505A\u6210\u5C0F\u7CFB\u7EDF\uFF0C\u5C0F\u4EA7\u54C1\u7684\u8BDD\uFF0C\u4F60\u7684\u5927\u7CFB\u7EDF\u5C31\u4F1A\u6210\u957F\u6210\u4E0B\u9762\u7684\u6837\u5B50\uFF0C\u5373\u5FAE\u670D\u52A1\u7684\u67B6\u6784</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617223417916.png" alt="image-20220617223417916"></p><p>\u5FAE\u670D\u52A1\u7684\u56E2\u961F\u95F4\u5E94\u8BE5\u662F inter-operate, not integrate \u3002 inter-operate \u662F\u5B9A\u4E49\u597D\u7CFB\u7EDF\u7684\u8FB9\u754C\u548C\u63A5\u53E3\uFF0C\u5728\u4E00\u4E2A\u56E2\u961F\u5185\u5168\u6808\uFF0C\u8BA9\u56E2\u961F\u81EA\u6CBB\uFF0C\u539F\u56E0\u5C31\u662F\u56E0\u4E3A\u5982\u679C\u56E2\u961F\u6309\u7167\u8FD9\u6837\u7684\u65B9\u5F0F\u7EC4\u5EFA\uFF0C\u5C06\u6C9F\u901A\u7684\u6210\u672C\u7EF4\u6301\u5728\u7CFB\u7EDF\u5185\u90E8\uFF0C\u6BCF\u4E2A\u5B50\u7CFB\u7EDF\u5C31\u4F1A\u66F4\u52A0\u5185\u805A\uFF0C\u5F7C\u6B64\u7684\u4F9D\u8D56\u8026\u5408\u53D8\u5F31\uFF0C\u8DE8\u7CFB\u7EDF\u7684\u6C9F\u901A\u6210\u672C\u4E5F\u5C31\u80FD\u51CF\u4F4E\u3002</p><h3 id="_3-4-\u7B2C\u56DB\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#_3-4-\u7B2C\u56DB\u5B9A\u5F8B" aria-hidden="true">#</a> 3.4 \u7B2C\u56DB\u5B9A\u5F8B</h3><p>\u5927\u7684\u7CFB\u7EDF\u7EC4\u7EC7\u603B\u662F\u6BD4\u5C0F\u7CFB\u7EDF\u66F4\u503E\u5411\u4E8E\u5206\u89E3</p><blockquote><p>\u5408\u4E45\u5FC5\u5206\uFF0C\u5206\u4E45\u5FC5\u5408</p></blockquote><p>\u524D\u9762\u8BF4\u4E86\uFF0C\u4EBA\u662F\u590D\u6742\u7684\u793E\u4F1A\u52A8\u7269\uFF0C\u4EBA\u4E0E\u4EBA\u7684\u901A\u8FC7\u975E\u5E38\u590D\u6742\u3002\u4F46\u662F\u5F53\u6211\u4EEC\u9762\u5BF9\u590D\u6742\u7CFB\u7EDF\u65F6\uFF0C\u53C8\u5F80\u5F80\u53EA\u80FD\u901A\u8FC7\u589E\u52A0\u4EBA\u529B\u6765\u89E3\u51B3\u3002\u8FD9\u65F6\uFF0C\u6211\u4EEC\u7684\u7EC4\u7EC7\u4E00\u822C\u662F\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u6C9F\u901A\u95EE\u9898\u7684\u5462\uFF1FDivide and conquer,\u5206\u800C\u6CBB\u4E4B\u3002\u5927\u5BB6\u770B\u770B\u81EA\u5DF1\u7684\u516C\u53F8\u7684\u7EC4\u7EC7\uFF0C\u662F\u4E0D\u662F\u4E00\u4E2A\u4E00\u7EBF\u7ECF\u7406\u4E00\u822C\u90FD\u662F\u7BA1\u740615\u4E2A\u4EBA\u4EE5\u4E0B\u7684\uFF1F\u4E8C\u7EBF\u7ECF\u7406\u518D\u7BA1\u7406\u66F4\u5C11\u7684\u4E00\u7EBF\uFF1F\u4E09\u7EBF\u518D\u7BA1\u7406\u66F4\u5C11\u7684\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002\uFF08\u8FD9\u91CC\u5B8C\u5168\u6CA1\u6709\u6697\u793A\u5F00\u53D1\u7ECF\u7406\u6BD4\u7A0B\u5E8F\u733F\u66F4\u96BE\u7BA1\u7406\uFF09</p><p>\u6240\u4EE5\uFF0C\u4E00\u4E2A\u5927\u7684\u7EC4\u7EC7\u56E0\u4E3A\u6C9F\u901A\u6210\u672C/\u7BA1\u7406\u95EE\u9898\uFF0C\u603B\u4E3A\u88AB\u62C6\u5206\u6210\u4E00\u4E2A\u4E2A\u5C0F\u56E2\u961F\u3002</p><p>\u521B\u4E1A\u7684\u60F3\u6CD5\u592A\u597D\u4E86\uFF0C\u53CD\u6B63\u98CE\u6295\u94B1\u591A\uFF0C\u591A\u62DB\u70B9\u7A0B\u5E8F\u733F</p><p>\u4EBA\u591A\u7BA1\u4E0D\u8FC7\u6765\u554A\uFF0C\u627E\u51E0\u4E2A\u7ECF\u7406\u5E2E\u6211\u7BA1\uFF0C\u6211\u7BA1\u7ECF\u7406</p><p>\u6700\u540E\uFF0C \u5EB7\u5A01\u5B9A\u5F8B \u544A\u8BC9\u6211\u4EEC\u7EC4\u7EC7\u6C9F\u901A\u7684\u65B9\u5F0F\u4F1A\u5728\u7CFB\u7EDF\u8BBE\u8BA1\u4E0A\u6709\u6240\u8868\u8FBE\uFF0C\u6BCF\u4E2A\u7ECF\u7406\u90FD\u88AB\u8D4B\u4E88\u4E00\u5B9A\u7684\u804C\u8D23\u53BB\u505A\u5927\u7CFB\u7EDF\u7684\u67D0\u4E00\u5C0F\u90E8\u5206\uFF0C\u4ED6\u4EEC\u548C\u5927\u7CFB\u7EDF\u4FBF\u6709\u4E86\u6C9F\u901A\u7684\u8FB9\u754C\uFF0C\u6240\u4EE5\u5927\u7684\u7CFB\u7EDF\u4E5F\u4F1A\u56E0\u6B64\u88AB\u62C6\u5206\u6210\u4E00\u4E2A\u4E2A\u5C0F\u56E2\u961F\u8D1F\u8D23\u7684\u5C0F\u7CFB\u7EDF\uFF08\u5FAE\u670D\u52A1\u662F\u4E00\u79CD\u597D\u7684\u6A21\u5F0F\uFF09</p><h2 id="_4-\u5EB7\u5A01\u5B9A\u5F8B\u5982\u4F55\u89E3\u91CA\u5FAE\u670D\u52A1\u7684\u5408\u7406\u6027" tabindex="-1"><a class="header-anchor" href="#_4-\u5EB7\u5A01\u5B9A\u5F8B\u5982\u4F55\u89E3\u91CA\u5FAE\u670D\u52A1\u7684\u5408\u7406\u6027" aria-hidden="true">#</a> 4. \u5EB7\u5A01\u5B9A\u5F8B\u5982\u4F55\u89E3\u91CA\u5FAE\u670D\u52A1\u7684\u5408\u7406\u6027</h2><h3 id="_4-1-\u5982\u4F55\u5960\u5B9A\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u7406\u8BBA\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5982\u4F55\u5960\u5B9A\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u7406\u8BBA\u57FA\u7840" aria-hidden="true">#</a> 4.1 \u5982\u4F55\u5960\u5B9A\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u7406\u8BBA\u57FA\u7840</h3><blockquote><p><strong>\u4E86\u89E3\u4E86\u5EB7\u5A01\u5B9A\u5F8B\u662F\u4EC0\u4E48\uFF0C\u518D\u6765\u770B\u770B\u4ED6\u5982\u4F55\u5728\u534A\u4E2A\u4E16\u7EAA\u524D\u5C31\u5960\u5B9A\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u7406\u8BBA\u57FA\u7840</strong>\u3002</p></blockquote><ol><li><p>\u4EBA\u4E0E\u4EBA\u7684\u6C9F\u901A\u662F\u975E\u5E38\u590D\u6742\u7684\uFF0C\u4E00\u4E2A\u4EBA\u7684\u6C9F\u901A\u7CBE\u529B\u662F\u6709\u9650\u7684\uFF0C\u6240\u4EE5\u5F53\u95EE\u9898\u592A\u590D\u6742\u9700\u8981\u5F88\u591A\u4EBA\u89E3\u51B3\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u62C6\u5206\u7EC4\u7EC7\u6765\u6253\u6210\u5BF9\u6C9F\u901A\u6548\u7387\u7684\u7BA1\u7406</p></li><li><p>\u7EC4\u7EC7\u5185\u4EBA\u4E0E\u4EBA\u7684\u6C9F\u901A\u65B9\u5F0F\u51B3\u5B9A\u4E86\u4ED6\u4EEC\u53C2\u4E0E\u7684\u7CFB\u7EDF\u8BBE\u8BA1\uFF0C\u7BA1\u7406\u8005\u53EF\u4EE5\u901A\u8FC7\u4E0D\u540C\u7684\u62C6\u5206\u65B9\u5F0F\u5E26\u6765\u4E0D\u540C\u7684\u56E2\u961F\u95F4\u6C9F\u901A\u65B9\u5F0F\uFF0C\u4ECE\u800C\u5F71\u54CD\u7CFB\u7EDF\u8BBE\u8BA1</p></li><li><p>\u5982\u679C\u5B50\u7CFB\u7EDF\u662F\u5185\u805A\u7684\uFF0C\u548C\u5916\u90E8\u7684\u6C9F\u901A\u8FB9\u754C\u662F\u660E\u786E\u7684\uFF0C\u80FD\u964D\u4F4E\u6C9F\u901A\u6210\u672C\uFF0C\u5BF9\u5E94\u7684\u8BBE\u8BA1\u4E5F\u4F1A\u66F4\u52A0\u9AD8\u6548\u3002</p></li><li><p>\u590D\u6742\u5F97\u7CFB\u7EDF\u9700\u8981\u901A\u8FC7\u5BB9\u9519\u5F39\u6027\u7684\u65B9\u5F0F\u6301\u7EED\u4F18\u5316\uFF0C\u4E0D\u8981\u6307\u671B\u4E00\u4E2A\u5927\u800C\u5168\u7684\u8BBE\u8BA1\u6216\u67B6\u6784\uFF0C\u597D\u7684\u67B6\u6784\u548C\u8BBE\u8BA1\u90FD\u662F\u6162\u6162\u8FED\u4EE3\u51FA\u6765\u7684</p></li></ol><h3 id="_4-2-\u5EB7\u5A01\u7684\u5B9E\u8DF5\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5EB7\u5A01\u7684\u5B9E\u8DF5\u610F\u4E49" aria-hidden="true">#</a> 4.2 \u5EB7\u5A01\u7684\u5B9E\u8DF5\u610F\u4E49</h3><p><strong>\u5E26\u6765\u7684\u5177\u4F53\u7684\u5B9E\u8DF5\u5EFA\u8BAE</strong></p><ol><li><p>\u6211\u4EEC\u8981\u7528\u4E00\u5207\u624B\u6BB5\u63D0\u5347\u6C9F\u901A\u6548\u7387\uFF0C\u6BD4\u5982slack\uFF0Cgithub\uFF0Cwiki\u3002\u80FD2\u4E2A\u4EBA\u8BB2\u6E05\u695A\u7684\u4E8B\u60C5\uFF0C\u5C31\u4E0D\u8981\u62C9\u66F4\u591A\u4EBA\uFF0C\u6BCF\u4E2A\u4EBA\u6BCF\u4E2A\u7CFB\u7EDF\u90FD\u6709\u660E\u786E\u7684\u5206\u5DE5\uFF0C\u51FA\u4E86\u95EE\u9898\u77E5\u9053\u9A6C\u4E0A\u627E\u8C01\uFF0C\u907F\u514D\u8E22\u76AE\u7403\u7684\u95EE\u9898\u3002</p></li><li><p>\u901A\u8FC7MVP\u7684\u65B9\u5F0F\u6765\u8BBE\u8BA1\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u4E0D\u65AD\u7684\u8FED\u4EE3\u6765\u9A8C\u8BC1\u4F18\u5316\uFF0C\u7CFB\u7EDF\u5E94\u8BE5\u662F\u5F39\u6027\u8BBE\u8BA1\u7684\u3002</p></li><li><p>\u4F60\u60F3\u8981\u4EC0\u4E48\u6837\u7684\u7CFB\u7EDF\u8BBE\u8BA1\uFF0C\u5C31\u67B6\u6784\u4EC0\u4E48\u6837\u7684\u56E2\u961F\uFF0C\u80FD\u6241\u5E73\u5316\u5C31\u6241\u5E73\u5316\u3002\u6700\u597D\u6309\u4E1A\u52A1\u6765\u5212\u5206\u56E2\u961F\uFF0C\u8FD9\u6837\u80FD\u8BA9\u56E2\u961F\u81EA\u7136\u7684\u81EA\u6CBB\u5185\u805A\uFF0C\u660E\u786E\u7684\u4E1A\u52A1\u8FB9\u754C\u4F1A\u51CF\u5C11\u548C\u5916\u90E8\u7684\u6C9F\u901A\u6210\u672C\uFF0C\u6BCF\u4E2A\u5C0F\u56E2\u961F\u90FD\u5BF9\u81EA\u5DF1\u7684\u6A21\u5757\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u8D1F\u8D23\uFF0C\u6CA1\u6709\u8FB9\u754C\u4E0D\u6E05\uFF0C\u6CA1\u6709\u65E0\u6548\u7684\u626F\u76AE\uFF0Cinter-operate, not integrate\u3002</p></li><li><p>\u505A\u5C0F\u800C\u7F8E\u7684\u56E2\u961F\uFF0C\u4EBA\u591A\u4F1A\u5E26\u6765\u6C9F\u901A\u7684\u6210\u672C\uFF0C\u8BA9\u6548\u7387\u4E0B\u964D\u3002\u4E9A\u9A6C\u900A\u7684Bezos\u6709\u4E2A\u9017\u8DA3\u7684\u6BD4\u55BB\uFF0C\u5982\u679C2\u4E2A\u62AB\u8428\u4E0D\u591F\u4E00\u4E2A\u56E2\u961F\u5403\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u56E2\u961F\u5C31\u592A\u5927\u4E86\u3002\u4E8B\u5B9E\u4E0A\u4E00\u822C\u4E00\u4E2A\u4E92\u8054\u7F51\u516C\u53F8\u5C0F\u4EA7\u54C1\u7684\u56E2\u961F\u5DEE\u4E0D\u591A\u5C31\u662F7\uFF0C8\u4EBA\u5DE6\u53F3\uFF08\u5305\u542B\u524D\u540E\u7AEF\u6D4B\u8BD5\u4EA4\u4E92\u7528\u7814\u7B49\uFF0C\u53EF\u80FD\u8EAB\u517C\u6570\u804C\uFF09\u3002</p></li></ol><h3 id="_4-3-\u5EB7\u5A01\u7406\u8BBA\u4E0B\u7684\u5FAE\u670D\u52A1\u8BE5\u662F\u600E\u4E48\u6837\u7684" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5EB7\u5A01\u7406\u8BBA\u4E0B\u7684\u5FAE\u670D\u52A1\u8BE5\u662F\u600E\u4E48\u6837\u7684" aria-hidden="true">#</a> 4.3 \u5EB7\u5A01\u7406\u8BBA\u4E0B\u7684\u5FAE\u670D\u52A1\u8BE5\u662F\u600E\u4E48\u6837\u7684</h3><blockquote><p>\u5BF9\u5E94\u4E0B\u8861\u91CF\u5FAE\u670D\u52A1\u7684\u6807\u51C6\uFF0C\u6211\u4EEC\u5F88\u5BB9\u6613\u4F1A\u53D1\u73B0\u4ED6\u4EEC\u4E4B\u95F4\u7684\u5BC6\u5207\u5173\u7CFB</p></blockquote><ul><li>\u5206\u5E03\u5F0F\u670D\u52A1\u7EC4\u6210\u7684\u7CFB\u7EDF</li><li>\u6309\u7167\u4E1A\u52A1\u800C\u4E0D\u662F\u6280\u672F\u6765\u5212\u5206\u7EC4\u7EC7</li><li>\u505A\u6709\u58F0\u660E\u7684\u4EA7\u54C1\u800C\u4E0D\u662F\u9879\u76EE</li><li>Smart endpoints and dumb pipes\uFF08\u6211\u7684\u7406\u89E3\u662F\u5F3A\u670D\u52A1\u4E2A\u4F53\u548C\u5F31\u901A\u4FE1\uFF09</li><li>\u81EA\u52A8\u5316\u8FD0\u7EF4</li><li>\u5BB9\u9519</li><li>\u5FEB\u901F\u6F14\u5316</li></ul><h2 id="_5-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u603B\u7ED3" aria-hidden="true">#</a> 5. \u603B\u7ED3</h2><ul><li>\u5B9A\u5F8B\u4E00: \u7EC4\u7EC7\u6C9F\u901A\u65B9\u5F0F\u4F1A\u901A\u8FC7\u7CFB\u7EDF\u8BBE\u8BA1\u8868\u8FBE\u51FA\u6765\uFF0C\u5C31\u662F\u8BF4\u67B6\u6784\u7684\u5E03\u5C40\u548C\u7EC4\u7EC7\u7ED3\u6784\u4F1A\u6709\u76F8\u4F3C\u3002</li><li>\u5B9A\u5F8B\u4E8C: \u65F6\u95F4\u518D\u591A\u4E00\u4EF6\u4E8B\u60C5\u4E5F\u4E0D\u53EF\u80FD\u505A\u7684\u5B8C\u7F8E\uFF0C\u4F46\u603B\u6709\u65F6\u95F4\u505A\u5B8C\u4E00\u4EF6\u4E8B\u60C5\u3002\u4E00\u53E3\u6C14\u5403\u4E0D\u6210\u80D6\u5B50\uFF0C\u5148\u641E\u5B9A\u80FD\u641E\u5B9A\u7684\u3002</li><li>\u5B9A\u5F8B\u4E09: \u7EBF\u578B\u7CFB\u7EDF\u548C\u7EBF\u578B\u7EC4\u7EC7\u67B6\u6784\u95F4\u6709\u6F5C\u5728\u7684\u5F02\u8D28\u540C\u6001\u7279\u6027\u3002\u79CD\u74DC\u5F97\u74DC\uFF0C\u505A\u72EC\u7ACB\u81EA\u6CBB\u7684\u5B50\u7CFB\u7EDF\u51CF\u5C11\u6C9F\u901A\u6210\u672C\u3002</li><li>\u5B9A\u5F8B\u56DB: \u5927\u7684\u7CFB\u7EDF\u7EC4\u7EC7\u603B\u662F\u6BD4\u5C0F\u7CFB\u7EDF\u66F4\u503E\u5411\u4E8E\u5206\u89E3\u3002\u5408\u4E45\u5FC5\u5206\uFF0C\u5206\u800C\u6CBB\u4E4B\u3002</li></ul>',77),t=[l];function s(r,n){return e(),a("div",null,t)}var g=i(o,[["render",s],["__file","\u5FAE\u670D\u52A1\u57FA\u7840-\u5EB7\u5A01\u5B9A\u5F8B.html.vue"]]);export{g as default};
