import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as o,a as e,b as n,d as i,e as s,r as p}from"./app.75100209.js";const l={},c=i('<h1 id="rabbitmq\u8FDB\u9636-\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u8FDB\u9636-\u6301\u4E45\u5316" aria-hidden="true">#</a> RabbitMQ\u8FDB\u9636 - \u6301\u4E45\u5316</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6301\u4E45\u5316\u5728\u524D\u9762\u591A\u6B21\u63D0\u5230\uFF0C\u6301\u4E45\u5316\u53EF\u4EE5\u63D0\u9AD8 RabbitMQ \u7684\u53EF\u9760\u6027\uFF0C\u9632\u6B62\u5728\u5F02\u5E38\u60C5\u51B5\uFF08\u91CD\u542F\u3001\u5173\u95ED\u3001\u5B95\u673A\u7B49\uFF09\u4E0B\u7684\u6570\u636E\u4E22\u5931\u3002</p><p>\u672C\u8282\u9488\u5BF9\u8FD9\u4E2A\u6982\u5FF5\u505A\u4E00\u4E2A\u603B\u7ED3\u3002RabbitMQ \u7684\u6301\u4E45\u5316\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\uFF1A</p><ul><li><p>\u4EA4\u6362\u5668\u7684\u6301\u4E45\u5316</p><p>\u5728\u58F0\u660E\u4EA4\u6362\u5668\u662F\u5C06 durable \u53C2\u6570\u8BBE\u7F6E\u4E3A true \u5B9E\u73B0\uFF0C\u5982\u679C\u4E0D\u6301\u4E45\u5316\uFF0CRabbitMQ \u670D\u52A1\u91CD\u542F\u4E4B\u540E\uFF0C\u76F8\u5173\u7684<strong>\u4EA4\u6362\u5668\u5143\u6570\u636E\u4F1A\u4E22\u5931</strong>\uFF08\u6CA1\u6709\u8FD9\u4E2A\u4EA4\u6362\u5668\u4E86\uFF09\uFF0C\u4F46\u662F <strong>\u961F\u5217\u548C\u6D88\u606F\u4E0D\u4F1A\u4E22\u5931</strong>\uFF08\u5206\u60C5\u51B5\u662F\u5426\u8BBE\u7F6E\u6301\u4E45\u5316\uFF09\uFF0C\u53EA\u662F <strong>\u4E0D\u80FD\u5C06\u6D88\u606F\u53D1\u9001\u5230\u8FD9\u4E2A\u4EA4\u6362\u5668</strong>\u4E86\u3002</p></li><li><p>\u961F\u5217\u7684\u6301\u4E45\u5316</p><p>\u5728\u58F0\u660E\u961F\u5217\u65F6\u5C06 durable \u53C2\u6570\u8BBE\u7F6E\u4E3A true \u5B9E\u73B0\uFF0C\u5982\u679C\u4E0D\u6301\u4E45\u5316\uFF0CRabbitMQ \u670D\u52A1\u91CD\u542F\u4E4B\u540E\uFF0C\u76F8\u5173\u7684 <strong>\u5143\u6570\u636E\u4F1A\u4E22\u5931</strong>\uFF0C<strong>\u6D88\u606F\u4E5F\u4F1A\u4E22\u5931</strong>\uFF1B</p></li><li><p>\u6D88\u606F\u7684\u6301\u4E45\u5316</p><p>\u4F46\u662F\u961F\u5217\u7684\u6301\u4E45\u5316\uFF0C\u5E76 <strong>\u4E0D\u80FD\u4FDD\u8BC1\u6D88\u606F\u6570\u636E\u4E0D\u4E22\u5931</strong>\uFF0C\u8981\u4FDD\u8BC1\u6D88\u606F\u4E0D\u4E22\u5931\uFF0C\u9700\u8981\u5C06\u6D88\u606F\u7684\u6295\u9012\u6A21\u5F0F\u8BBE\u7F6E\u4E3A 2 \uFF08BasicProperties \u4E2D\u7684 deliveryMode \u5C5E\u6027\uFF09</p></li></ul><blockquote><p>\u6CE8\u610F\u8981\u70B9</p><p>\u4E0D\u662F\u6240\u6709\u7684\u6D88\u606F\u90FD\u8BBE\u7F6E\u6301\u4E45\u5316\uFF0C\u5728\u4E00\u4E9B\u5BF9\u53EF\u9760\u6027\u8981\u6C42\u4E0D\u662F\u90A3\u4E48\u9AD8\u7684\u6D88\u606F\uFF0C\u53EF\u4EE5\u4E0D\u91C7\u7528\u6301\u4E45\u5316\u3002\u8FD9\u6837\u53EF\u4EE5\u63D0\u9AD8\u6574\u4F53\u7684\u541E\u5410\u91CF\u3002</p></blockquote><h2 id="_2-\u8BBE\u7F6E\u6301\u4E45\u5316\u540E\u6D88\u606F\u4E5F\u53EF\u80FD\u4E22\u5931" tabindex="-1"><a class="header-anchor" href="#_2-\u8BBE\u7F6E\u6301\u4E45\u5316\u540E\u6D88\u606F\u4E5F\u53EF\u80FD\u4E22\u5931" aria-hidden="true">#</a> 2. \u8BBE\u7F6E\u6301\u4E45\u5316\u540E\u6D88\u606F\u4E5F\u53EF\u80FD\u4E22\u5931</h2><p>\u4EA4\u6362\u5668\u3001\u961F\u5217\u3001\u6D88\u606F\u90FD\u8BBE\u7F6E\u4E3A\u6301\u4E45\u5316\uFF0C\u4E5F\u6709\u53EF\u80FD\u4E22\u5931\uFF0C\u6709\u4EE5\u4E0B\u4E00\u4E2A\u65B9\u9762\uFF1A</p><ul><li><p>autoAck \uFF1A\u81EA\u52A8\u786E\u8BA4</p><p>\u5728\u4E1A\u52A1\u7CFB\u7EDF\u4E2D\uFF0C\u81EA\u52A8\u786E\u8BA4\u662F\u6700\u5BB9\u6613\u4E22\u5931\u7684\uFF0C\u5982\u679C\u5904\u7406\u8FC7\u7A0B\u4E2D\u53D1\u751F\u5F02\u5E38\uFF0C\u6D88\u606F\u53EF\u80FD\u5C31\u4E22\u4E86\u3002</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u6539\u6210\u624B\u52A8 ack</p></li><li><p>\u6570\u636E\u5237\u76D8\uFF1ARabbitMQ \u4F9D\u8D56\u5185\u6838\u7684 fsync \u51FD\u6570\u5B58\u76D8</p><p>\u5173\u4E8E fsync \u51FD\u6570\uFF0C\u81EA\u5DF1\u767E\u5EA6\uFF1B\u5927\u6982\u5C31\u662F\u6570\u636E\u5148\u5199\u7F13\u5B58\uFF0C\u7B49\u5F85\u7F13\u5B58\u5199\u6EE1\uFF0C\u6216\u5219\u5185\u6838\u9700\u8981\u91CD\u7528\u7F13\u5B58\u65F6\uFF0C\u4F1A\u5C06\u8BE5\u7F13\u5B58\u6392\u5165\u8F93\u51FA\u961F\u5217\uFF0C\u8FDB\u800C\u540C\u6B65\u5230\u8BBE\u5907\u4E0A\u3002</p><p>\u670D\u52A1\u5668\u7A81\u7136\u65AD\u7535\uFF0C\u5C31\u6709\u53EF\u80FD\u5BFC\u81F4\u4E22\u5931\u4E00\u90E8\u5206\u6570\u636E\uFF1B</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u53EF\u4EE5\u4F7F\u7528 RabbitMQ \u7684\u955C\u50CF\u961F\u5217\u673A\u5236\uFF08\u540E\u9762\u7AE0\u8282\u4F1A\u8BB2\u89E3\uFF09\uFF0C\u76F8\u5F53\u4E8E\u914D\u7F6E\u4E86\u526F\u672C\uFF0Cmaster \u6302\u6389\uFF0C\u4F1A\u81EA\u52A8\u5207\u6362\u5230 slave \u8282\u70B9\uFF0C\u4FDD\u8BC1\u4E86\u9AD8\u53EF\u7528\u6027\u3002</p></li></ul><p>\u8FD8\u53EF\u4EE5\u5728\u53D1\u9001\u7AEF\u5F15 <strong>\u5165\u4E8B\u7269\u673A\u5236</strong> \u6216 <strong>\u53D1\u9001\u65B9\u786E\u8BA4\u673A\u5236</strong> \u6765\u4FDD\u8BC1\u6D88\u606F\u5DF2\u7ECF\u6B63\u786E\u53D1\u9001\u5E76\u5B58\u50A8\u81F3 RabbitMQ \u4E2D\u3002\u4E0B\u4E00\u7AE0\u8282\u8BB2\u89E3</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',11),b={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/07.html",target:"_blank",rel:"noopener noreferrer"},d=s("\u6301\u4E45\u5316");function h(u,_){const t=p("ExternalLinkIcon");return r(),o("div",null,[c,e("p",null,[e("a",b,[d,n(t)])])])}const f=a(l,[["render",h],["__file","rabbitmq-x-durable.html.vue"]]);export{f as default};
