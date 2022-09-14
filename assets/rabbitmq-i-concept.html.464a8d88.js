import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as i,a as e,b as o,e as h,d as s,r as n}from"./app.bb110ce9.js";const l={},b=h('<h1 id="rabbitmq\u6982\u5FF5\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u6982\u5FF5\u8865\u5145" aria-hidden="true">#</a> RabbitMQ\u6982\u5FF5\u8865\u5145</h1><h2 id="_1-\u6D88\u606F\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#_1-\u6D88\u606F\u6301\u4E45\u5316" aria-hidden="true">#</a> 1. \u6D88\u606F\u6301\u4E45\u5316</h2><p><strong>Rabbit\u961F\u5217\u548C\u4EA4\u6362\u5668\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u91CD\u542F\u670D\u52A1\u5668\u4F1A\u5BFC\u81F4\u6D88\u606F\u4E22\u5931</strong>\uFF0C\u90A3\u4E48\u600E\u4E48\u4FDD\u8BC1Rabbit\u5728\u91CD\u542F\u7684\u65F6\u5019\u4E0D\u4E22\u5931\u5462\uFF1F\u7B54\u6848\u5C31\u662F\u6D88\u606F\u6301\u4E45\u5316\u3002</p><h3 id="_1-1-\u6301\u4E45\u5316\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6301\u4E45\u5316\u6761\u4EF6" aria-hidden="true">#</a> 1.1 \u6301\u4E45\u5316\u6761\u4EF6</h3><p>\u5F53\u4F60\u628A\u6D88\u606F\u53D1\u9001\u5230Rabbit\u670D\u52A1\u5668\u7684\u65F6\u5019\uFF0C\u4F60\u9700\u8981\u9009\u62E9\u4F60\u662F\u5426\u8981\u8FDB\u884C\u6301\u4E45\u5316\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u80FD\u4FDD\u8BC1Rabbit\u80FD\u4ECE\u5D29\u6E83\u4E2D\u6062\u590D\uFF0C\u60F3\u8981Rabbit\u6D88\u606F\u80FD\u6062\u590D\u5FC5\u987B\u6EE1\u8DB33\u4E2A\u6761\u4EF6\uFF1A</p><ol><li>\u6295\u9012\u6D88\u606F\u7684\u65F6\u5019durable\u8BBE\u7F6E\u4E3Atrue\uFF0C\u6D88\u606F\u6301\u4E45\u5316\uFF0C\u4EE3\u7801\uFF1Achannel.queueDeclare(x, true, false, false, null)\uFF0C\u53C2\u65702\u8BBE\u7F6E\u4E3Atrue\u6301\u4E45\u5316\uFF1B</li><li>\u8BBE\u7F6E\u6295\u9012\u6A21\u5F0FdeliveryMode\u8BBE\u7F6E\u4E3A2\uFF08\u6301\u4E45\uFF09\uFF0C\u4EE3\u7801\uFF1Achannel.basicPublish(x, x, MessageProperties.PERSISTENT_TEXT_PLAIN,x)\uFF0C\u53C2\u65703\u8BBE\u7F6E\u4E3A\u5B58\u50A8\u7EAF\u6587\u672C\u5230\u78C1\u76D8\uFF1B</li><li>\u6D88\u606F\u5DF2\u7ECF\u5230\u8FBE\u6301\u4E45\u5316\u4EA4\u6362\u5668\u4E0A\uFF1B</li><li>\u6D88\u606F\u5DF2\u7ECF\u5230\u8FBE\u6301\u4E45\u5316\u7684\u961F\u5217\uFF1B</li></ol><h3 id="_1-2-\u6301\u4E45\u5316\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6301\u4E45\u5316\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> 1.2 \u6301\u4E45\u5316\u5DE5\u4F5C\u539F\u7406</h3><p>Rabbit\u4F1A\u5C06\u4F60\u7684\u6301\u4E45\u5316\u6D88\u606F\u5199\u5165\u78C1\u76D8\u4E0A\u7684\u6301\u4E45\u5316\u65E5\u5FD7\u6587\u4EF6\uFF0C\u7B49\u6D88\u606F\u88AB\u6D88\u8D39\u4E4B\u540E\uFF0CRabbit\u4F1A\u628A\u8FD9\u6761\u6D88\u606F\u6807\u8BC6\u4E3A\u7B49\u5F85\u5783\u573E\u56DE\u6536\u3002</p><h3 id="_1-3-\u6301\u4E45\u5316\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6301\u4E45\u5316\u7684\u7F3A\u70B9" aria-hidden="true">#</a> 1.3 \u6301\u4E45\u5316\u7684\u7F3A\u70B9</h3><p>\u6D88\u606F\u6301\u4E45\u5316\u7684\u4F18\u70B9\u663E\u800C\u6613\u89C1\uFF0C\u4F46\u7F3A\u70B9\u4E5F\u5F88\u660E\u663E\uFF0C\u90A3\u5C31\u662F\u6027\u80FD\uFF0C\u56E0\u4E3A\u8981\u5199\u5165\u786C\u76D8\u8981\u6BD4\u5199\u5165\u5185\u5B58\u6027\u80FD\u8F83\u4F4E\u5F88\u591A\uFF0C\u4ECE\u800C\u964D\u4F4E\u4E86\u670D\u52A1\u5668\u7684\u541E\u5410\u91CF\uFF0C\u5C3D\u7BA1\u4F7F\u7528SSD\u786C\u76D8\u53EF\u4EE5\u4F7F\u4E8B\u60C5\u5F97\u5230\u7F13\u89E3\uFF0C\u4F46\u4ED6\u4ECD\u7136\u5438\u5E72\u4E86Rabbit\u7684\u6027\u80FD\uFF0C\u5F53\u6D88\u606F\u6210\u5343\u4E0A\u4E07\u6761\u8981\u5199\u5165\u78C1\u76D8\u7684\u65F6\u5019\uFF0C\u6027\u80FD\u662F\u5F88\u4F4E\u7684\u3002</p><p>\u6240\u4EE5\u4F7F\u7528\u8005\u8981\u6839\u636E\u81EA\u5DF1\u7684\u60C5\u51B5\uFF0C\u9009\u62E9\u9002\u5408\u81EA\u5DF1\u7684\u65B9\u5F0F\u3002</p><h2 id="_2-\u865A\u62DF\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#_2-\u865A\u62DF\u4E3B\u673A" aria-hidden="true">#</a> 2. \u865A\u62DF\u4E3B\u673A</h2><p>\u6BCF\u4E2ARabbit\u90FD\u80FD\u521B\u5EFA\u5F88\u591Avhost\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u865A\u62DF\u4E3B\u673A\uFF0C<strong>\u6BCF\u4E2A\u865A\u62DF\u4E3B\u673A\u5176\u5B9E\u90FD\u662Fmini\u7248\u7684RabbitMQ\uFF0C\u62E5\u6709\u81EA\u5DF1\u7684\u961F\u5217\uFF0C\u4EA4\u6362\u5668\u548C\u7ED1\u5B9A\uFF0C\u62E5\u6709\u81EA\u5DF1\u7684\u6743\u9650\u673A\u5236</strong>\u3002</p><h3 id="_2-1-vhost\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_2-1-vhost\u7279\u6027" aria-hidden="true">#</a> 2.1 vhost\u7279\u6027</h3><ol><li>RabbitMQ\u9ED8\u8BA4\u7684vhost\u662F\u201C/\u201D\u5F00\u7BB1\u5373\u7528\uFF1B</li><li>\u591A\u4E2Avhost\u662F\u9694\u79BB\u7684\uFF0C\u591A\u4E2Avhost\u65E0\u6CD5\u901A\u8BAF\uFF0C\u5E76\u4E14\u4E0D\u7528\u62C5\u5FC3\u547D\u540D\u51B2\u7A81\uFF08\u961F\u5217\u548C\u4EA4\u6362\u5668\u548C\u7ED1\u5B9A\uFF09\uFF0C\u5B9E\u73B0\u4E86\u591A\u5C42\u5206\u79BB\uFF1B</li><li>\u521B\u5EFA\u7528\u6237\u7684\u65F6\u5019\u5FC5\u987B\u6307\u5B9Avhost\uFF1B</li></ol><h3 id="_2-2-vhost\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-2-vhost\u64CD\u4F5C" aria-hidden="true">#</a> 2.2 vhost\u64CD\u4F5C</h3><p>\u53EF\u4EE5\u901A\u8FC7rabbitmqctl\u5DE5\u5177\u547D\u4EE4\u521B\u5EFA\uFF1A</p><blockquote><p>rabbitmqctl add_vhost[vhost_name]</p></blockquote><p>\u5220\u9664vhost\uFF1A</p><blockquote><p>rabbitmqctl delete_vhost[vhost_name]</p></blockquote><p>\u67E5\u770B\u6240\u6709\u7684vhost\uFF1A</p><blockquote><p>rabbitmqctl list_vhosts</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',23),d={href:"https://www.cnblogs.com/vipstone/p/9275256.html",target:"_blank",rel:"noopener noreferrer"},c=s("RabbitMQ\u7CFB\u5217\uFF08\u4E8C\uFF09\u6DF1\u5165\u4E86\u89E3RabbitMQ\u5DE5\u4F5C\u539F\u7406\u53CA\u7B80\u5355\u4F7F\u7528");function _(p,u){const a=n("ExternalLinkIcon");return r(),i("div",null,[b,e("p",null,[e("a",d,[c,o(a)])])])}var f=t(l,[["render",_],["__file","rabbitmq-i-concept.html.vue"]]);export{f as default};
