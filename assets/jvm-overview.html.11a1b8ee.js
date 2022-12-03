import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as r,a as e,b as o,d as s,e as t,r as i}from"./app.0227f3fb.js";const h={},_=s('<h1 id="jvm\u76F8\u5173\u77E5\u8BC6\u4F53\u7CFB\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#jvm\u76F8\u5173\u77E5\u8BC6\u4F53\u7CFB\u8BE6\u89E3" aria-hidden="true">#</a> JVM\u76F8\u5173\u77E5\u8BC6\u4F53\u7CFB\u8BE6\u89E3</h1><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/jvm-overview.png" alt="jvm-overview" loading="lazy"></p><h2 id="_1-\u5B66\u4E60\u8981\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-\u5B66\u4E60\u8981\u70B9" aria-hidden="true">#</a> 1. \u5B66\u4E60\u8981\u70B9</h2><blockquote><p>\u4E0D\u540C\u7684\u865A\u62DF\u673A\u5B9E\u73B0\u65B9\u5F0F\u4E0A\u4E5F\u6709\u5DEE\u522B\uFF0C\u5982\u679C\u6CA1\u6709\u7279\u522B\u6307\u51FA\uFF0C\u8FD9\u91CC\u7684JVM\u6307\u7684\u662Fsun\u7684HotSpot\uFF1B\u4E0D\u540C\u7684JDK\u7248\u672C\u7565\u6709\u5DEE\u522B\uFF0C\u8FD9\u91CC\u4E3B\u8981\u4EE51.8\u4E3A\u4E3B\uFF0C\u5177\u4F53\u5DEE\u5F02\u8BF7\u770B\u5404\u4E2A\u7AE0\u8282\u4E2D\u8BE6\u89E3\u3002\u4E0B\u56FE\u4E3B\u8981\u8868\u793A\u7684\u903B\u8F91\u5173\u7CFB\uFF0C\u7528\u6765\u5C06\u6240\u6709\u77E5\u8BC6\u70B9\u653E\u5230\u4E00\u5F20\u56FE\u91CC\uFF0C\u5E2E\u52A9\u4F60\u7406\u89E3\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/java-jvm-overview.png" alt="java-jvm-overview" loading="lazy"></p><blockquote><p><strong>A. Java\u8FDB\u9636 - JVM\u76F8\u5173 \u77E5\u8BC6\u4F53\u7CFB</strong>\uFF1A \u9996\u5148\u6309\u7167\u4E0A\u8FF0<code>\u5B66\u4E60\u601D\u8DEF</code>\uFF0C\u7406\u89E3\u603B\u4F53\u77E5\u8BC6\u70B9\u5728\u5168\u5C40\u4E0A\u4E0E\u77E5\u8BC6\u4F53\u7CFB\u4E4B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB\u3002</p></blockquote>',6),c={href:"https://pdai.tech/md/java/jvm/java-jvm-x-overview.html",target:"_blank",rel:"noopener noreferrer"},d=t("JVM \u76F8\u5173\u77E5\u8BC6\u4F53\u7CFB"),u=e("blockquote",null,[e("p",null,[e("strong",null,"B. Java\u8FDB\u9636 - JVM\u76F8\u5173 \u7C7B\u52A0\u8F7D"),t("\uFF1A \u7136\u540E\u7406\u89E3\u7C7B\u5B57\u8282\u7801\u548C\u7C7B\u7684\u52A0\u8F7D\u673A\u5236\u3002")])],-1),v={href:"https://pdai.tech/md/java/jvm/java-jvm-class.html",target:"_blank",rel:"noopener noreferrer"},m=t("JVM\u57FA\u7840 - \u7C7B\u5B57\u8282\u7801\u8BE6\u89E3"),p=e("ul",null,[e("li",null,"\u6E90\u4EE3\u7801\u901A\u8FC7\u7F16\u8BD1\u5668\u7F16\u8BD1\u4E3A\u5B57\u8282\u7801\uFF0C\u518D\u901A\u8FC7\u7C7B\u52A0\u8F7D\u5B50\u7CFB\u7EDF\u8FDB\u884C\u52A0\u8F7D\u5230JVM\u4E2D\u8FD0\u884C")],-1),j={href:"https://pdai.tech/md/java/jvm/java-jvm-class-enhancer.html",target:"_blank",rel:"noopener noreferrer"},g=t("JVM\u57FA\u7840 - \u5B57\u8282\u7801\u7684\u589E\u5F3A\u6280\u672F"),J=e("ul",null,[e("li",null,"\u5728\u4E0A\u6587\u4E2D\uFF0C\u7740\u91CD\u4ECB\u7ECD\u4E86\u5B57\u8282\u7801\u7684\u7ED3\u6784\uFF0C\u8FD9\u4E3A\u6211\u4EEC\u4E86\u89E3\u5B57\u8282\u7801\u589E\u5F3A\u6280\u672F\u7684\u5B9E\u73B0\u6253\u4E0B\u4E86\u57FA\u7840\u3002\u5B57\u8282\u7801\u589E\u5F3A\u6280\u672F\u5C31\u662F\u4E00\u7C7B\u5BF9\u73B0\u6709\u5B57\u8282\u7801\u8FDB\u884C\u4FEE\u6539\u6216\u8005\u52A8\u6001\u751F\u6210\u5168\u65B0\u5B57\u8282\u7801\u6587\u4EF6\u7684\u6280\u672F\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u4ECE\u6700\u76F4\u63A5\u64CD\u7EB5\u5B57\u8282\u7801\u7684\u5B9E\u73B0\u65B9\u5F0F\u5F00\u59CB\u6DF1\u5165\u8FDB\u884C\u5256\u6790\u3002")],-1),f={href:"https://pdai.tech/md/java/jvm/java-jvm-classload.html",target:"_blank",rel:"noopener noreferrer"},b=t("JVM\u57FA\u7840 - Java \u7C7B\u52A0\u8F7D\u673A\u5236"),M=e("ul",null,[e("li",null,"\u8FD9\u7BC7\u6587\u7AE0\u5C06\u5E26\u4F60\u6DF1\u5165\u7406\u89E3Java \u7C7B\u52A0\u8F7D\u673A\u5236")],-1),k=e("blockquote",null,[e("p",null,[e("strong",null,"C. Java\u8FDB\u9636 - JVM\u76F8\u5173 \u5185\u5B58\u7ED3\u6784"),t("\uFF1A \u56E0\u4E3A\u7C7B\u5B57\u8282\u7801\u662F\u52A0\u8F7D\u5230JVM\u5185\u5B58\u7ED3\u6784\u4E2D\u7684\uFF0C\u6240\u4EE5\u7D27\u63A5\u7740\u7406\u89E3JVM\u5185\u5B58\u7ED3\u6784\u3002")])],-1),V={href:"https://pdai.tech/md/java/jvm/java-jvm-struct.html",target:"_blank",rel:"noopener noreferrer"},C=t("JVM\u57FA\u7840 - JVM\u5185\u5B58\u7ED3\u6784"),G=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u5BF9JVM \u5185\u5B58\u7ED3\u6784\u8FDB\u884C\u8BB2\u89E3\uFF0C\u6CE8\u610F\u4E0D\u8981\u548CJava\u5185\u5B58\u6A21\u578B\u6DF7\u6DC6\u4E86")],-1),z=e("blockquote",null,[e("p",null,[e("strong",null,"D. Java\u8FDB\u9636 - JVM\u76F8\u5173 JMM"),t("\uFF1A \u7136\u540E\u901A\u8FC7\u7406\u89E3JVM\u4E0E\u786C\u4EF6\u4E4B\u95F4\u7684\u8054\u7CFB\uFF0C\u7406\u89E3Java \u901A\u8FC7\u5176\u5185\u5B58\u6A21\u578B\u4FDD\u8BC1\u6570\u636E\u7EBF\u7A0B\u5B89\u5168\u7B49\uFF0C\u8FD9\u662FJVM\u5728\u5E76\u53D1\u4E0A\u5E95\u5C42\u7684\u652F\u6301\u3002")])],-1),x={href:"https://pdai.tech/md/java/jvm/java-jvm-x-introduce.html",target:"_blank",rel:"noopener noreferrer"},w=t("JVM\u57FA\u7840 - Java \u5185\u5B58\u6A21\u578B\u5F15\u5165"),D=e("ul",null,[e("li",null,[t("\u5F88\u591A\u4EBA\u90FDJava\u5185\u5B58\u6A21\u578B\u548CJVM\u5185\u5B58\u7ED3\u6784\uFF0C\u4EE5\u53CAJava\u5185\u5B58\u6A21\u578B\u4E0E\u7269\u7406\u5185\u5B58\u4E4B\u95F4\u7684\u5173\u7CFB\u3002\u672C\u6587\u4ECE\u5806\u6808\u89D2\u5EA6\u5F15\u5165JMM\uFF0C\u7136\u540E\u4ECB\u7ECDJMM\u548C\u7269\u7406\u5185\u5B58\u4E4B\u95F4\u7684\u5173\u7CFB, \u4E3A\u540E\u9762"),e("code",null,"JMM\u8BE6\u89E3"),t(", "),e("code",null,"JVM \u5185\u5B58\u7ED3\u6784\u8BE6\u89E3"),t(", "),e("code",null,"Java \u5BF9\u8C61\u6A21\u578B\u8BE6\u89E3"),t("\u7B49\u94FA\u57AB\u3002")])],-1),S={href:"https://pdai.tech/md/java/jvm/java-jvm-jmm.html",target:"_blank",rel:"noopener noreferrer"},q=t("JVM\u57FA\u7840 - Java \u5185\u5B58\u6A21\u578B\u8BE6\u89E3"),y=t("\u672C\u6587\u4E3B\u8981\u8F6C\u8F7D\u81EA Info \u4E0A"),E={href:"https://www.infoq.cn/article/java_memory_model/",target:"_blank",rel:"noopener noreferrer"},A=t("\u6DF1\u5165\u7406\u89E3Java\u5185\u5B58\u6A21\u578B"),I=t(", \u4F5C\u8005\u7A0B\u6653\u660E\u3002\u8FD9\u7BC7\u6587\u7AE0\u5BF9JMM\u8BB2\u7684\u5F88\u6E05\u695A\u4E86\uFF0C\u5927\u81F4\u5206\u4E09\u90E8\u5206\uFF1A\u91CD\u6392\u5E8F\u4E0E\u987A\u5E8F\u4E00\u81F4\u6027\uFF1B\u4E09\u4E2A\u540C\u6B65\u539F\u8BED\uFF08lock\uFF0Cvolatile\uFF0Cfinal\uFF09\u7684\u5185\u5B58\u8BED\u4E49\uFF0C\u91CD\u6392\u5E8F\u89C4\u5219\u53CA\u5728\u5904\u7406\u5668\u4E2D\u7684\u5B9E\u73B0\uFF1Bjava \u5185\u5B58\u6A21\u578B\u7684\u8BBE\u8BA1\uFF0C\u53CA\u5176\u4E0E\u5904\u7406\u5668\u5185\u5B58\u6A21\u578B\u548C\u987A\u5E8F\u4E00\u81F4\u6027\u5185\u5B58\u6A21\u578B\u7684\u5173\u7CFB"),Z=e("blockquote",null,[e("p",null,[e("strong",null,"E. Java\u8FDB\u9636 - JVM\u76F8\u5173 GC"),t("\uFF1A \u518D\u8005\u7406\u89E3\u4E0BJava GC\u673A\u5236\uFF0C\u5982\u4F55\u56DE\u6536\u5185\u5B58\u7B49\u3002")])],-1),B={href:"https://pdai.tech/md/java/jvm/java-jvm-gc.html",target:"_blank",rel:"noopener noreferrer"},N=t("GC - Java \u5783\u573E\u56DE\u6536\u57FA\u7840\u77E5\u8BC6"),T=e("ul",null,[e("li",null,"\u5783\u573E\u6536\u96C6\u4E3B\u8981\u662F\u9488\u5BF9\u5806\u548C\u65B9\u6CD5\u533A\u8FDB\u884C\uFF1B\u7A0B\u5E8F\u8BA1\u6570\u5668\u3001\u865A\u62DF\u673A\u6808\u548C\u672C\u5730\u65B9\u6CD5\u6808\u8FD9\u4E09\u4E2A\u533A\u57DF\u5C5E\u4E8E\u7EBF\u7A0B\u79C1\u6709\u7684\uFF0C\u53EA\u5B58\u5728\u4E8E\u7EBF\u7A0B\u7684\u751F\u547D\u5468\u671F\u5185\uFF0C\u7EBF\u7A0B\u7ED3\u675F\u4E4B\u540E\u4E5F\u4F1A\u6D88\u5931\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u5BF9\u8FD9\u4E09\u4E2A\u533A\u57DF\u8FDB\u884C\u5783\u573E\u56DE\u6536\u3002")],-1),K={href:"https://pdai.tech/md/java/jvm/java-jvm-gc-g1.html",target:"_blank",rel:"noopener noreferrer"},L=t("GC - Java \u5783\u573E\u56DE\u6536\u5668\u4E4BG1\u8BE6\u89E3"),R=e("ul",null,[e("li",null,"G1\u5783\u573E\u56DE\u6536\u5668\u662F\u5728Java7 update 4\u4E4B\u540E\u5F15\u5165\u7684\u4E00\u4E2A\u65B0\u7684\u5783\u573E\u56DE\u6536\u5668\u3002\u540C\u4F18\u79C0\u7684CMS\u5783\u573E\u56DE\u6536\u5668\u4E00\u6837\uFF0CG1\u4E5F\u662F\u5173\u6CE8\u6700\u5C0F\u65F6\u5EF6\u7684\u5783\u573E\u56DE\u6536\u5668\uFF0C\u4E5F\u540C\u6837\u9002\u5408\u5927\u5C3A\u5BF8\u5806\u5185\u5B58\u7684\u5783\u573E\u6536\u96C6\uFF0C\u5B98\u65B9\u5728ZGC\u8FD8\u6CA1\u6709\u51FA\u73B0\u65F6\u4E5F\u63A8\u8350\u4F7F\u7528G1\u6765\u4EE3\u66FF\u9009\u62E9CMS\u3002G1\u6700\u5927\u7684\u7279\u70B9\u662F\u5F15\u5165\u5206\u533A\u7684\u601D\u8DEF\uFF0C\u5F31\u5316\u4E86\u5206\u4EE3\u7684\u6982\u5FF5\uFF0C\u5408\u7406\u5229\u7528\u5783\u573E\u6536\u96C6\u5404\u4E2A\u5468\u671F\u7684\u8D44\u6E90\uFF0C\u89E3\u51B3\u4E86\u5176\u4ED6\u6536\u96C6\u5668\u751A\u81F3CMS\u7684\u4F17\u591A\u7F3A\u9677\u3002")],-1),F=e("a",{href:""},"GC - Java \u5783\u573E\u56DE\u6536\u5668\u4E4BZGC\u8BE6\u89E3",-1),H=t("ZGC\uFF08The Z Garbage Collector\uFF09\u662FJDK 11\u4E2D\u63A8\u51FA\u7684\u4E00\u6B3E\u4F4E\u5EF6\u8FDF\u5783\u573E\u56DE\u6536\u5668, \u662FJDK 11+ \u6700\u4E3A\u91CD\u8981\u7684\u66F4\u65B0\u4E4B\u4E00\uFF0C\u9002\u7528\u4E8E"),O=e("strong",null,"\u5927\u5185\u5B58\u4F4E\u5EF6\u8FDF",-1),P=t("\u670D\u52A1\u7684\u5185\u5B58\u7BA1\u7406\u548C\u56DE\u6536\u3002\u5728\u68B3\u7406\u76F8\u5173\u77E5\u8BC6\u70B9\u65F6\uFF0C\u53D1\u73B0\u7F8E\u56E2\u6280\u672F\u56E2\u961F\u5206\u4EAB\u7684\u6587\u7AE0"),Q={href:"https://tech.meituan.com/2020/08/06/new-zgc-practice-in-meituan.html",target:"_blank",rel:"noopener noreferrer"},U=t("\u65B0\u4E00\u4EE3\u5783\u573E\u56DE\u6536\u5668ZGC\u7684\u63A2\u7D22\u4E0E\u5B9E\u8DF5 (opens new window)"),W=t("\u6BD4\u8F83\u5B8C\u5584\uFF08\u5305\u542BG1\u6536\u96C6\u5668\u505C\u987F\u65F6\u95F4\u74F6\u9888\uFF0C\u539F\u7406\uFF0C\u4F18\u5316\u7B49\uFF09, \u8FD9\u91CC\u5206\u4EAB\u7ED9\u4F60\uFF0C\u5E2E\u4F60\u6784\u5EFAZGC\u76F8\u5173\u7684\u77E5\u8BC6\u4F53\u7CFB"),X={href:"https://pdai.tech/md/java/jvm/java-jvm-gc-zgc.html",target:"_blank",rel:"noopener noreferrer"},Y=t("GC - Java \u5783\u573E\u56DE\u6536\u5668\u4E4BCMS GC\u95EE\u9898\u5206\u6790\u4E0E\u89E3\u51B3"),$=t("\u672C\u6587\u6574\u7406\u81EA"),ee={href:"https://tech.meituan.com/2020/11/12/java-9-cms-gc.html",target:"_blank",rel:"noopener noreferrer"},te=t("\u7F8E\u56E2\u6280\u672F\u56E2\u961F"),le=t(", \u8FD9\u7BC7\u6587\u7AE0\u5C06\u53EF\u4EE5\u5E2E\u52A9\u4F60\u6784\u5EFACMS GC\u76F8\u5173\u95EE\u9898\u89E3\u51B3\u7684\u77E5\u8BC6\u4F53\u7CFB\uFF0C\u5206\u4EAB\u7ED9\u4F60\u3002"),oe=e("blockquote",null,[e("p",null,[e("strong",null,"F. Java\u8FDB\u9636 - JVM\u76F8\u5173 \u6392\u9519\u8C03\u4F18"),t("\uFF1A \u6700\u540E\u56F4\u7ED5\u7740\u8C03\u8BD5\u548C\u6392\u9519\uFF0C\u5206\u6790\u7406\u89E3JVM\u8C03\u4F18\u53C2\u6570\uFF0C\u52A8\u6001\u5B57\u8282\u7801\u6280\u672F\u53CA\u52A8\u6001\u5728\u7EBF\u8C03\u8BD5\u7684\u539F\u7406\uFF1B\u5B66\u4F1A\u4F7F\u7528\u5E38\u7528\u7684\u8C03\u5DE5\u5177\u548C\u5728\u7EBF\u52A8\u6001\u8C03\u8BD5\u5DE5\u5177\u7B49\u3002")])],-1),ae=e("p",null,[e("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220819213534570.png",alt:"image-20220819213534570",loading:"lazy"})],-1),ne={href:"https://pdai.tech/md/java/jvm/java-jvm-param.html",target:"_blank",rel:"noopener noreferrer"},re=t("\u8C03\u8BD5\u6392\u9519 - JVM \u8C03\u4F18\u53C2\u6570"),se=e("ul",null,[e("li",null,"\u672C\u6587\u5BF9JVM\u6D89\u53CA\u7684\u5E38\u89C1\u7684\u8C03\u4F18\u53C2\u6570\u548C\u5783\u573E\u56DE\u6536\u53C2\u6570\u8FDB\u884C\u9610\u8FF0")],-1),ie={href:"https://pdai.tech/md/java/jvm/java-jvm-oom.html",target:"_blank",rel:"noopener noreferrer"},he=t("\u8C03\u8BD5\u6392\u9519 - Java \u5185\u5B58\u5206\u6790\u4E4B\u5806\u5185\u5B58\u548CMetaSpace\u5185\u5B58"),_e=e("ul",null,[e("li",null,[t("\u672C\u6587\u4EE5\u4E24\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50("),e("code",null,"\u5806\u5185\u5B58\u6EA2\u51FA"),t("\u548C"),e("code",null,"MetaSpace (\u5143\u6570\u636E) \u5185\u5B58\u6EA2\u51FA"),t("\uFF09\u89E3\u91CAJava \u5185\u5B58\u6EA2\u51FA\u7684\u5206\u6790\u8FC7\u7A0B")])],-1),ce={href:"https://pdai.tech/md/java/jvm/java-jvm-oom-offheap.html",target:"_blank",rel:"noopener noreferrer"},de=t("\u8C03\u8BD5\u6392\u9519 - Java \u5185\u5B58\u5206\u6790\u4E4B\u5806\u5916\u5185\u5B58"),ue=t("Java \u5806\u5916\u5185\u5B58\u5206\u6790\u76F8\u5BF9\u6765\u8BF4\u662F\u590D\u6742\u7684\uFF0C\u7F8E\u56E2\u6280\u672F\u56E2\u961F\u7684"),ve={href:"https://tech.meituan.com/2019/01/03/spring-boot-native-memory-leak.html",target:"_blank",rel:"noopener noreferrer"},me=t("Spring Boot\u5F15\u8D77\u7684\u201C\u5806\u5916\u5185\u5B58\u6CC4\u6F0F\u201D\u6392\u67E5\u53CA\u7ECF\u9A8C\u603B\u7ED3"),pe=t("\u53EF\u4EE5\u4E3A\u5F88\u591ANative Code\u5185\u5B58\u6CC4\u6F0F/\u5360\u7528\u63D0\u4F9B\u65B9\u5411\u6027\u6307\u5F15\u3002"),je={href:"https://pdai.tech/md/java/jvm/java-jvm-thread-dump.html",target:"_blank",rel:"noopener noreferrer"},ge=t("\u8C03\u8BD5\u6392\u9519 - Java \u7EBF\u7A0B\u5206\u6790\u4E4B\u7EBF\u7A0BDump\u5206\u6790"),Je=e("ul",null,[e("li",null,"Thread Dump\u662F\u975E\u5E38\u6709\u7528\u7684\u8BCA\u65ADJava\u5E94\u7528\u95EE\u9898\u7684\u5DE5\u5177\u3002")],-1),fe={href:"https://pdai.tech/md/java/jvm/java-jvm-debug-tools-linux.html",target:"_blank",rel:"noopener noreferrer"},be=t("\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4BLinux\u547D\u4EE4"),Me=e("ul",null,[e("li",null,"Java \u5728\u7EBF\u95EE\u9898\u6392\u67E5\u4E4B\u901A\u8FC7linux\u5E38\u7528\u547D\u4EE4\u6392\u67E5\u3002")],-1),ke={href:"https://pdai.tech/md/java/jvm/java-jvm-debug-tools-list.html",target:"_blank",rel:"noopener noreferrer"},Ve=t("\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4B\u5DE5\u5177\u5355"),Ce=e("ul",null,[e("li",null,"Java \u5728\u7EBF\u95EE\u9898\u6392\u67E5\u4E4B\u901A\u8FC7java\u8C03\u8BD5/\u6392\u67E5\u5DE5\u5177\u8FDB\u884C\u95EE\u9898\u5B9A\u4F4D\u3002")],-1),Ge={href:"https://pdai.tech/md/java/jvm/java-jvm-oom-tool.html",target:"_blank",rel:"noopener noreferrer"},ze=t("\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4BJVM\u53EF\u89C6\u5316\u5DE5\u5177"),xe=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u68B3\u7406\u5E38\u89C1\u7684JVM\u53EF\u89C6\u5316\u7684\u5206\u6790\u5DE5\u5177\uFF0C\u4E3B\u8981\u5305\u62ECJConsole, Visual VM, Vusial GC, JProfile \u548C MAT\u7B49\u3002")],-1),we={href:"https://pdai.tech/md/java/jvm/java-jvm-agent-arthas.html",target:"_blank",rel:"noopener noreferrer"},De=t("\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4B\u5E94\u7528\u5728\u7EBF\u8C03\u8BD5Arthas"),Se=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDAlibaba\u5F00\u6E90\u7684Java\u8BCA\u65AD\u5DE5\u5177\uFF0C\u5F00\u6E90\u5230\u73B0\u5728\u5DF2\u7ECF1.7\u4E07\u4E2A\u70B9\u8D5E\u4E86\uFF0C\u6DF1\u53D7\u5F00\u53D1\u8005\u559C\u7231\u3002\u5177\u4F53\u89E3\u51B3\u5728\u7EBF\u95EE\u9898\uFF0C\u6BD4\u5982\uFF1A"),e("li",null,"\u8FD9\u4E2A\u7C7B\u4ECE\u54EA\u4E2A jar \u5305\u52A0\u8F7D\u7684? \u4E3A\u4EC0\u4E48\u4F1A\u62A5\u5404\u79CD\u7C7B\u76F8\u5173\u7684 Exception?"),e("li",null,"\u6211\u6539\u7684\u4EE3\u7801\u4E3A\u4EC0\u4E48\u6CA1\u6709\u6267\u884C\u5230? \u96BE\u9053\u662F\u6211\u6CA1 commit? \u5206\u652F\u641E\u9519\u4E86?"),e("li",null,"\u9047\u5230\u95EE\u9898\u65E0\u6CD5\u5728\u7EBF\u4E0A debug\uFF0C\u96BE\u9053\u53EA\u80FD\u901A\u8FC7\u52A0\u65E5\u5FD7\u518D\u91CD\u65B0\u53D1\u5E03\u5417?"),e("li",null,"\u7EBF\u4E0A\u9047\u5230\u67D0\u4E2A\u7528\u6237\u7684\u6570\u636E\u5904\u7406\u6709\u95EE\u9898\uFF0C\u4F46\u7EBF\u4E0A\u540C\u6837\u65E0\u6CD5 debug\uFF0C\u7EBF\u4E0B\u65E0\u6CD5\u91CD\u73B0\uFF01"),e("li",null,"\u662F\u5426\u6709\u4E00\u4E2A\u5168\u5C40\u89C6\u89D2\u6765\u67E5\u770B\u7CFB\u7EDF\u7684\u8FD0\u884C\u72B6\u51B5?"),e("li",null,"\u6709\u4EC0\u4E48\u529E\u6CD5\u53EF\u4EE5\u76D1\u63A7\u5230JVM\u7684\u5B9E\u65F6\u8FD0\u884C\u72B6\u6001?")],-1),qe={href:"https://pdai.tech/md/java/jvm/java-jvm-debug-idea.html",target:"_blank",rel:"noopener noreferrer"},ye=t("\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4B\u4F7F\u7528IDEA\u672C\u5730\u8C03\u8BD5\u548C\u8FDC\u7A0B\u8C03\u8BD5"),Ee=e("ul",null,[e("li",null,"Debug\u7528\u6765\u8FFD\u8E2A\u4EE3\u7801\u7684\u8FD0\u884C\u6D41\u7A0B\uFF0C\u901A\u5E38\u5728\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u5F02\u5E38\uFF0C\u542F\u7528Debug\u6A21\u5F0F\u53EF\u4EE5\u5206\u6790\u5B9A\u4F4D\u5F02\u5E38\u53D1\u751F\u7684\u4F4D\u7F6E\uFF0C\u4EE5\u53CA\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53C2\u6570\u7684\u53D8\u5316\uFF1B\u5E76\u4E14\u5728\u5B9E\u9645\u7684\u6392\u9519\u8FC7\u7A0B\u4E2D\uFF0C\u8FD8\u4F1A\u7528\u5230Remote Debug\u3002IDEA \u76F8\u6BD4 Eclipse/STS\u6548\u7387\u66F4\u9AD8\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u57FA\u4E8EIDEA\u7684Debug\u548CRemote Debug\u7684\u6280\u5DE7\u3002")],-1),Ae={href:"https://pdai.tech/md/java/jvm/java-jvm-agent-usage.html",target:"_blank",rel:"noopener noreferrer"},Ie=t("\u8C03\u8BD5\u6392\u9519 - Java\u52A8\u6001\u8C03\u8BD5\u6280\u672F\u539F\u7406"),Ze=t("\u672C\u6587\u8F6C\u8F7D\u81EA \u7F8E\u56E2\u6280\u672F\u56E2\u961F\u80E1\u5065\u7684"),Be={href:"https://tech.meituan.com/2019/11/07/java-dynamic-debugging-technology.html",target:"_blank",rel:"noopener noreferrer"},Ne=t("Java \u52A8\u6001\u8C03\u8BD5\u6280\u672F\u539F\u7406\u53CA\u5B9E\u8DF5"),Te=t(", \u901A\u8FC7\u5B66\u4E60java agent\u65B9\u5F0F\u8FDB\u884C\u52A8\u6001\u8C03\u8BD5\u4E86\u89E3\u76EE\u524D\u5F88\u591A\u5927\u5382\u5F00\u6E90\u7684\u4E00\u4E9B\u57FA\u4E8E\u6B64\u7684\u8C03\u8BD5\u5DE5\u5177\u3002"),Ke=e("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),t(" \u53C2\u8003\u6587\u7AE0")],-1),Le={href:"https://pdai.tech/md/java/jvm/java-jvm-x-overview.html",target:"_blank",rel:"noopener noreferrer"},Re=e("strong",null,"\u2665JVM\u76F8\u5173\u77E5\u8BC6\u4F53\u7CFB\u8BE6\u89E3\u2665",-1);function Fe(He,Oe){const l=i("ExternalLinkIcon");return n(),r("div",null,[_,e("ul",null,[e("li",null,[e("a",c,[d,o(l)])])]),u,e("ul",null,[e("li",null,[e("a",v,[m,o(l)]),p]),e("li",null,[e("a",j,[g,o(l)]),J]),e("li",null,[e("a",f,[b,o(l)]),M])]),k,e("ul",null,[e("li",null,[e("a",V,[C,o(l)]),G])]),z,e("ul",null,[e("li",null,[e("a",x,[w,o(l)]),D]),e("li",null,[e("a",S,[q,o(l)]),e("ul",null,[e("li",null,[y,e("a",E,[A,o(l)]),I])])])]),Z,e("ul",null,[e("li",null,[e("a",B,[N,o(l)]),T]),e("li",null,[e("a",K,[L,o(l)]),R]),e("li",null,[F,e("ul",null,[e("li",null,[H,O,P,e("a",Q,[U,o(l)]),W])])]),e("li",null,[e("a",X,[Y,o(l)]),e("ul",null,[e("li",null,[$,e("a",ee,[te,o(l)]),le])])])]),oe,ae,e("ul",null,[e("li",null,[e("a",ne,[re,o(l)]),se]),e("li",null,[e("a",ie,[he,o(l)]),_e]),e("li",null,[e("a",ce,[de,o(l)]),e("ul",null,[e("li",null,[ue,e("a",ve,[me,o(l)]),pe])])]),e("li",null,[e("a",je,[ge,o(l)]),Je]),e("li",null,[e("a",fe,[be,o(l)]),Me]),e("li",null,[e("a",ke,[Ve,o(l)]),Ce]),e("li",null,[e("a",Ge,[ze,o(l)]),xe]),e("li",null,[e("a",we,[De,o(l)]),Se]),e("li",null,[e("a",qe,[ye,o(l)]),Ee]),e("li",null,[e("a",Ae,[Ie,o(l)]),e("ul",null,[e("li",null,[Ze,e("a",Be,[Ne,o(l)]),Te])])])]),Ke,e("p",null,[e("a",Le,[Re,o(l)])])])}const Ue=a(h,[["render",Fe],["__file","jvm-overview.html.vue"]]);export{Ue as default};
