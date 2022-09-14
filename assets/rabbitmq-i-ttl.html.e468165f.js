import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as s,a as e,b as t,w as l,e as h,d as a,r}from"./app.3a04ef30.js";const c={},_=h('<h1 id="rabbitmq\u901A\u8FC7ttl\u548C\u6B7B\u4FE1\u961F\u5217\u5B9E\u73B0\u5EF6\u65F6\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u901A\u8FC7ttl\u548C\u6B7B\u4FE1\u961F\u5217\u5B9E\u73B0\u5EF6\u65F6\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> RabbitMQ\u901A\u8FC7TTL\u548C\u6B7B\u4FE1\u961F\u5217\u5B9E\u73B0\u5EF6\u65F6\u6D88\u606F\u961F\u5217</h1><h2 id="_1-\u5EF6\u65F6\u6D88\u606F\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u5EF6\u65F6\u6D88\u606F\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 1. \u5EF6\u65F6\u6D88\u606F\u4F7F\u7528\u573A\u666F</h2><ol><li>\u672A\u4ED8\u6B3E\u7684\u8BA2\u5355\uFF0C15\u5206\u949F\u540E\u5173\u95ED</li><li>\u5BB6\u91CC\u6709\u4E00\u53F0\u667A\u80FD\u70ED\u6C34\u5668\uFF0C\u9700\u8981\u572830\u5206\u949F\u540E\u542F\u52A8</li><li>\u65B0\u7528\u6237\u6CE8\u518C\u4E4B\u540E\u4E00\u4E2A\u6708\u6CA1\u6709\u4E0B\u5355\uFF0C\u53D1\u4E2A\u77ED\u4FE1\u52FE\u5F15\u4E00\u6CE2</li><li>\u6D89\u53CA\u5230T+d\uFF08\u5DE5\u4F5C\u65E5\u5EF6\u8FDF\uFF09\u6216\u8005D+d\uFF08\u81EA\u7136\u65E5\u5EF6\u8FDF\uFF09\u7B49\u5EF6\u8FDF\u4EA4\u4ED8\u7684\u573A\u666F</li></ol><h3 id="_1-1-\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528\u5B9A\u65F6\u4EFB\u52A1\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528\u5B9A\u65F6\u4EFB\u52A1\u8F6E\u8BE2" aria-hidden="true">#</a> 1.1 \u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528\u5B9A\u65F6\u4EFB\u52A1\u8F6E\u8BE2</h3><p>\u867D\u7136\u80FD\u540C\u6837\u80FD\u5B8C\u6210\u4EFB\u52A1\uFF0C\u4F46\u662F\u4E1A\u52A1\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\uFF0C\u5BF9<strong>\u670D\u52A1\u5668\u7684\u538B\u529B\u5927</strong>\uFF0C\u5E76\u4E14<strong>\u8BEF\u5DEE\u5927</strong></p><h2 id="_2-\u5B9E\u73B0\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u80CC\u666F" aria-hidden="true">#</a> 2. \u5B9E\u73B0\u80CC\u666F</h2><p><strong>rabbitmq\u672C\u8EAB\u662F\u4E0D\u76F4\u63A5\u652F\u6301\u5EF6\u65F6\u961F\u5217\u7684</strong>\uFF0CRabbitMQ\u7684\u5EF6\u8FDF\u961F\u5217\u57FA\u4E8E\u6D88\u606F\u7684\u5B58\u6D3B\u65F6\u95F4TTL\uFF08Time To Live\uFF09\u548C\u6B7B\u4FE1\u4EA4\u6362\u673ADLE\uFF08Dead Letter Exchanges\uFF09\u5B9E\u73B0\uFF1A</p><ol><li>TTL\uFF1ARabbitMQ\u53EF\u4EE5\u5BF9\u961F\u5217\u548C\u6D88\u606F\u5404\u81EA\u8BBE\u7F6E\u5B58\u6D3B\u65F6\u95F4\uFF0C\u89C4\u5219\u662F\u4E24\u8005\u4E2D\u8F83\u5C0F\u7684\u503C\uFF0C\u5373\u961F\u5217\u65E0\u6D88\u8D39\u8005\u8FDE\u63A5\u7684\u6D88\u606F\u8FC7\u671F\u65F6\u95F4\uFF0C\u6216\u8005\u6D88\u606F\u5728\u961F\u5217\u4E2D\u4E00\u76F4\u672A\u88AB\u6D88\u8D39\u7684\u8FC7\u671F\u65F6\u95F4</li><li>DLE\uFF1A\u8FC7\u671F\u7684\u6D88\u606F\u901A\u8FC7\u7ED1\u5B9A\u7684\u6B7B\u4FE1\u4EA4\u6362\u673A\uFF0C\u8DEF\u7531\u5230\u6307\u5B9A\u7684\u6B7B\u4FE1\u961F\u5217\uFF0C\u6D88\u8D39\u8005\u5B9E\u9645\u4E0A\u6D88\u8D39\u7684\u662F\u6B7B\u4FE1\u961F\u5217\u4E0A\u7684\u6D88\u606F</li></ol><h2 id="_3-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 3. \u4EE3\u7801\u5B9E\u73B0</h2>',9),b=a("rabbitmq-y-scene-mall-order"),m=e("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u6587\u7AE0")],-1),p={href:"https://juejin.im/post/6844904163168485383",target:"_blank",rel:"noopener noreferrer"},f=a("RabbitMQ\u5EF6\u8FDF\u961F\u5217");function u(x,L){const i=r("RouterLink"),n=r("ExternalLinkIcon");return d(),s("div",null,[_,e("p",null,[t(i,{to:"/dependencies/rabbitmq/rabbitmq-y-scene-mall-order.html"},{default:l(()=>[b]),_:1})]),m,e("p",null,[e("a",p,[f,t(n)])])])}var q=o(c,[["render",u],["__file","rabbitmq-i-ttl.html.vue"]]);export{q as default};
