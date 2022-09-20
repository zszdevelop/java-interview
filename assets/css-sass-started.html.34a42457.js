import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as s,a as e,b as i,e as t,d as r,r as p}from"./app.6ee8c9d2.js";const c={},l=t('<h1 id="sass\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#sass\u5165\u95E8" aria-hidden="true">#</a> SASS\u5165\u95E8</h1><h2 id="_1-\u5386\u53F2\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u5386\u53F2\u80CC\u666F" aria-hidden="true">#</a> 1. \u5386\u53F2\u80CC\u666F</h2><p>CSS\u4E0D\u662F\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\u3002</p><p><strong>\u4F60\u53EF\u4EE5\u7528\u5B83\u5F00\u53D1\u7F51\u9875\u6837\u5F0F\uFF0C\u4F46\u662F\u6CA1\u6CD5\u7528\u5B83\u7F16\u7A0B</strong>\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0CCSS\u57FA\u672C\u4E0A\u662F\u8BBE\u8BA1\u5E08\u7684\u5DE5\u5177\uFF0C\u4E0D\u662F\u7A0B\u5E8F\u5458\u7684\u5DE5\u5177\u3002\u5728\u7A0B\u5E8F\u5458\u773C\u91CC\uFF0CCSS\u662F\u4E00\u4EF6\u5F88\u9EBB\u70E6\u7684\u4E1C\u897F\u3002<strong>\u5B83\u6CA1\u6709\u53D8\u91CF\uFF0C\u4E5F\u6CA1\u6709\u6761\u4EF6\u8BED\u53E5\uFF0C\u53EA\u662F\u4E00\u884C\u884C\u5355\u7EAF\u7684\u63CF\u8FF0</strong>\uFF0C\u5199\u8D77\u6765\u76F8\u5F53\u8D39\u4E8B\u3002</p><p>\u5F88\u81EA\u7136\u5730\uFF0C\u6709\u4EBA\u5C31\u5F00\u59CB<strong>\u4E3ACSS\u52A0\u5165\u7F16\u7A0B\u5143\u7D20\uFF0C\u8FD9\u88AB\u53EB\u505A&quot;CSS\u9884\u5904\u7406\u5668&quot;\uFF08css preprocessor\uFF09</strong>\u3002</p><blockquote><p>\u5B83\u7684\u57FA\u672C\u601D\u60F3\u662F\uFF0C\u7528\u4E00\u79CD\u4E13\u95E8\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u8FDB\u884C\u7F51\u9875\u6837\u5F0F\u8BBE\u8BA1\uFF0C\u7136\u540E\u518D\u7F16\u8BD1\u6210\u6B63\u5E38\u7684CSS\u6587\u4EF6\u3002</p></blockquote><h2 id="_2-\u4EC0\u4E48\u662Fsass" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u662Fsass" aria-hidden="true">#</a> 2. <strong>\u4EC0\u4E48\u662FSASS</strong></h2><p>SASS\u662F\u4E00\u79CDCSS\u7684\u5F00\u53D1\u5DE5\u5177\uFF0C\u63D0\u4F9B\u4E86\u8BB8\u591A\u4FBF\u5229\u7684\u5199\u6CD5\uFF0C\u5927\u5927\u8282\u7701\u4E86\u8BBE\u8BA1\u8005\u7684\u65F6\u95F4\uFF0C\u4F7F\u5F97CSS\u7684\u5F00\u53D1\uFF0C\u53D8\u5F97\u7B80\u5355\u548C\u53EF\u7EF4\u62A4\u3002</p><h2 id="_3-\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> 3. <strong>\u57FA\u672C\u7528\u6CD5</strong></h2><h3 id="_3-1-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-1-\u53D8\u91CF" aria-hidden="true">#</a> <strong>3.1 \u53D8\u91CF</strong></h3><p>SASS\u5141\u8BB8\u4F7F\u7528\u53D8\u91CF\uFF0C\u6240\u6709\u53D8\u91CF\u4EE5$\u5F00\u5934\u3002</p><blockquote><p>$blue : #1875e7;</p><p>div { \u3000\u3000\u3000color : $blue; \u3000\u3000}</p></blockquote><p>\u5982\u679C\u53D8\u91CF\u9700\u8981\u9576\u5D4C\u5728\u5B57\u7B26\u4E32\u4E4B\u4E2D\uFF0C\u5C31\u5FC5\u987B\u9700\u8981\u5199\u5728#{}\u4E4B\u4E2D\u3002</p><blockquote><p>$side : left;</p><p>.rounded { \u3000\u3000\u3000\u3000border-#{$side}-radius: 5px; \u3000\u3000}</p></blockquote><h3 id="_3-2-\u8BA1\u7B97\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8BA1\u7B97\u529F\u80FD" aria-hidden="true">#</a> <strong>3.2 \u8BA1\u7B97\u529F\u80FD</strong></h3><p>SASS\u5141\u8BB8\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\u7B97\u5F0F\uFF1A</p><blockquote><p>body { \u3000\u3000\u3000\u3000margin: (14px/2); \u3000\u3000\u3000\u3000top: 50px + 100px; \u3000\u3000\u3000\u3000right: $var * 10%; \u3000\u3000}</p></blockquote><h3 id="_3-3-\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5D4C\u5957" aria-hidden="true">#</a> <strong>3.3 \u5D4C\u5957</strong></h3><p>SASS\u5141\u8BB8\u9009\u62E9\u5668\u5D4C\u5957\u3002\u6BD4\u5982\uFF0C\u4E0B\u9762\u7684CSS\u4EE3\u7801\uFF1A</p><blockquote><p>div h1 { \u3000\u3000\u3000\u3000color : red; \u3000\u3000}</p></blockquote><p>\u53EF\u4EE5\u5199\u6210\uFF1A</p><blockquote><p>div { \u3000\u3000\u3000\u3000hi { \u3000\u3000\u3000\u3000\u3000\u3000color:red; \u3000\u3000\u3000\u3000} \u3000\u3000}</p></blockquote><p>\u5C5E\u6027\u4E5F\u53EF\u4EE5\u5D4C\u5957\uFF0C\u6BD4\u5982border-color\u5C5E\u6027\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A</p><blockquote><p>p { \u3000\u3000\u3000\u3000border: { \u3000\u3000\u3000\u3000\u3000\u3000color: red; \u3000\u3000\u3000\u3000} \u3000\u3000}</p></blockquote><p>\u6CE8\u610F\uFF0Cborder\u540E\u9762\u5FC5\u987B\u52A0\u4E0A\u5192\u53F7\u3002</p><p>\u5728\u5D4C\u5957\u7684\u4EE3\u7801\u5757\u5185\uFF0C\u53EF\u4EE5\u4F7F\u7528&amp;\u5F15\u7528\u7236\u5143\u7D20\u3002\u6BD4\u5982a:hover\u4F2A\u7C7B\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A</p><blockquote><p>a { \u3000\u3000\u3000\u3000&amp;:hover { color: #ffb3ff; } \u3000\u3000}</p></blockquote><h3 id="_3-4-\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_3-4-\u6CE8\u91CA" aria-hidden="true">#</a> <strong>3.4 \u6CE8\u91CA</strong></h3><p>SASS\u5171\u6709\u4E24\u79CD\u6CE8\u91CA\u98CE\u683C\u3002</p><p>\u6807\u51C6\u7684CSS\u6CE8\u91CA /* comment */ \uFF0C\u4F1A\u4FDD\u7559\u5230\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u3002</p><p>\u5355\u884C\u6CE8\u91CA // comment\uFF0C\u53EA\u4FDD\u7559\u5728SASS\u6E90\u6587\u4EF6\u4E2D\uFF0C\u7F16\u8BD1\u540E\u88AB\u7701\u7565\u3002</p><p>\u5728/*\u540E\u9762\u52A0\u4E00\u4E2A\u611F\u53F9\u53F7\uFF0C\u8868\u793A\u8FD9\u662F&quot;\u91CD\u8981\u6CE8\u91CA&quot;\u3002\u5373\u4F7F\u662F\u538B\u7F29\u6A21\u5F0F\u7F16\u8BD1\uFF0C\u4E5F\u4F1A\u4FDD\u7559\u8FD9\u884C\u6CE8\u91CA\uFF0C\u901A\u5E38\u53EF\u4EE5\u7528\u4E8E\u58F0\u660E\u7248\u6743\u4FE1\u606F\u3002</p><blockquote><p>/*! \u3000\u3000\u3000\u3000\u91CD\u8981\u6CE8\u91CA\uFF01 \u3000\u3000*/</p></blockquote><h2 id="_4-\u4EE3\u7801\u7684\u91CD\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u4EE3\u7801\u7684\u91CD\u7528" aria-hidden="true">#</a> <strong>4. \u4EE3\u7801\u7684\u91CD\u7528</strong></h2><h3 id="_4-1-\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7EE7\u627F" aria-hidden="true">#</a> <strong>4.1 \u7EE7\u627F</strong></h3><p>SASS\u5141\u8BB8\u4E00\u4E2A\u9009\u62E9\u5668\uFF0C\u7EE7\u627F\u53E6\u4E00\u4E2A\u9009\u62E9\u5668\u3002\u6BD4\u5982\uFF0C\u73B0\u6709class1\uFF1A</p><blockquote><p>.class1 { \u3000\u3000\u3000\u3000border: 1px solid #ddd; \u3000\u3000}</p></blockquote><p>class2\u8981\u7EE7\u627Fclass1\uFF0C\u5C31\u8981\u4F7F\u7528@extend\u547D\u4EE4\uFF1A</p><blockquote><p>.class2 { \u3000\u3000\u3000\u3000@extend .class1; \u3000\u3000\u3000\u3000font-size:120%; \u3000\u3000}</p></blockquote><h3 id="_4-2-mixin" tabindex="-1"><a class="header-anchor" href="#_4-2-mixin" aria-hidden="true">#</a> <strong>4.2 Mixin</strong></h3><p>Mixin\u6709\u70B9\u50CFC\u8BED\u8A00\u7684\u5B8F\uFF08macro\uFF09\uFF0C\u662F\u53EF\u4EE5\u91CD\u7528\u7684\u4EE3\u7801\u5757\u3002</p><p>\u4F7F\u7528@mixin\u547D\u4EE4\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u4EE3\u7801\u5757\u3002</p><blockquote><p>@mixin left { \u3000\u3000\u3000\u3000float: left; \u3000\u3000\u3000\u3000margin-left: 10px; \u3000\u3000}</p></blockquote><p>\u4F7F\u7528@include\u547D\u4EE4\uFF0C\u8C03\u7528\u8FD9\u4E2Amixin\u3002</p><blockquote><p>div { \u3000\u3000\u3000\u3000@include left; \u3000\u3000}</p></blockquote><p>mixin\u7684\u5F3A\u5927\u4E4B\u5904\uFF0C\u5728\u4E8E\u53EF\u4EE5\u6307\u5B9A\u53C2\u6570\u548C\u7F3A\u7701\u503C\u3002</p><blockquote><p>@mixin left($value: 10px) { \u3000\u3000\u3000\u3000float: left; \u3000\u3000\u3000\u3000margin-right: $value; \u3000\u3000}</p></blockquote><p>\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u6839\u636E\u9700\u8981\u52A0\u5165\u53C2\u6570\uFF1A</p><blockquote><p>div { \u3000\u3000\u3000\u3000@include left(20px); \u3000\u3000}</p></blockquote><p>\u4E0B\u9762\u662F\u4E00\u4E2Amixin\u7684\u5B9E\u4F8B\uFF0C\u7528\u6765\u751F\u6210\u6D4F\u89C8\u5668\u524D\u7F00\u3002</p><blockquote><p>@mixin rounded($vert, $horz, $radius: 10px) { \u3000\u3000\u3000\u3000border-#{$vert}-#{$horz}-radius: $radius; \u3000\u3000\u3000\u3000-moz-border-radius-#{$vert}#{$horz}: $radius; \u3000\u3000\u3000\u3000-webkit-border-#{$vert}-#{$horz}-radius: $radius; \u3000\u3000}</p></blockquote><p>\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u50CF\u4E0B\u9762\u8FD9\u6837\u8C03\u7528\uFF1A</p>',52),h=e("p",null,"#footer",-1),u=e("h3",{id:"_4-3-\u989C\u8272\u51FD\u6570",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-3-\u989C\u8272\u51FD\u6570","aria-hidden":"true"},"#"),r(),e("strong",null,"4.3 \u989C\u8272\u51FD\u6570")],-1),b=e("p",null,"SASS\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5185\u7F6E\u7684\u989C\u8272\u51FD\u6570\uFF0C\u4EE5\u4FBF\u751F\u6210\u7CFB\u5217\u989C\u8272\u3002",-1),S=e("blockquote",null,[e("p",null,"lighten(#cc3, 10%) // #d6d65c \u3000\u3000darken(#cc3, 10%) // #a3a329 \u3000\u3000grayscale(#cc3) // #808080 \u3000\u3000complement(#cc3) // #33c")],-1),f=e("h3",{id:"_4-4-\u63D2\u5165\u6587\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-4-\u63D2\u5165\u6587\u4EF6","aria-hidden":"true"},"#"),r(),e("strong",null,"4.4 \u63D2\u5165\u6587\u4EF6")],-1),_=t('<blockquote><p>@import &quot;path/filename.scss&quot;;</p></blockquote><p>\u5982\u679C\u63D2\u5165\u7684\u662F.css\u6587\u4EF6\uFF0C\u5219\u7B49\u540C\u4E8Ecss\u7684import\u547D\u4EE4\u3002</p><blockquote><p>@import &quot;foo.css&quot;;</p></blockquote><h2 id="_5-\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> <strong>5. \u9AD8\u7EA7\u7528\u6CD5</strong></h2><h3 id="_5-1-\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_5-1-\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> <strong>5.1 \u6761\u4EF6\u8BED\u53E5</strong></h3><p>@if\u53EF\u4EE5\u7528\u6765\u5224\u65AD\uFF1A</p><blockquote><p>p { \u3000\u3000\u3000\u3000@if 1 + 1 == 2 { border: 1px solid; } \u3000\u3000\u3000\u3000@if 5 &lt; 3 { border: 2px dotted; } \u3000\u3000}</p></blockquote><p>\u914D\u5957\u7684\u8FD8\u6709@else\u547D\u4EE4\uFF1A</p><blockquote><p>@if lightness($color) &gt; 30% { \u3000\u3000\u3000\u3000background-color: #000; \u3000\u3000} @else { \u3000\u3000\u3000\u3000background-color: #fff; \u3000\u3000}</p></blockquote><h3 id="_5-2-\u5FAA\u73AF\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_5-2-\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a> <strong>5.2 \u5FAA\u73AF\u8BED\u53E5</strong></h3><p>SASS\u652F\u6301for\u5FAA\u73AF\uFF1A</p><blockquote><p>@for $i from 1 to 10 { \u3000\u3000\u3000\u3000.border-#{$i} { \u3000\u3000\u3000\u3000\u3000\u3000border: #{$i}px solid blue; \u3000\u3000\u3000\u3000} \u3000\u3000}</p></blockquote><p>\u4E5F\u652F\u6301while\u5FAA\u73AF\uFF1A</p><blockquote><p>$i: 6;</p><p>@while $i &gt; 0 { \u3000\u3000\u3000\u3000.item-#{$i} { width: 2em * $i; } \u3000\u3000\u3000\u3000$i: $i - 2; \u3000\u3000}</p></blockquote><p>each\u547D\u4EE4\uFF0C\u4F5C\u7528\u4E0Efor\u7C7B\u4F3C\uFF1A</p><blockquote><p>@each $member in a, b, c, d { \u3000\u3000\u3000\u3000.#{$member} { \u3000\u3000\u3000\u3000\u3000\u3000background-image: url(&quot;/image/#{$member}.jpg&quot;); \u3000\u3000\u3000\u3000} \u3000\u3000}</p></blockquote><h3 id="_5-3-\u81EA\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_5-3-\u81EA\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> <strong>5.3 \u81EA\u5B9A\u4E49\u51FD\u6570</strong></h3><p>SASS\u5141\u8BB8\u7528\u6237\u7F16\u5199\u81EA\u5DF1\u7684\u51FD\u6570\u3002</p><blockquote><p>@function double($n) { \u3000\u3000\u3000\u3000@return $n * 2; \u3000\u3000}</p><p>#sidebar { \u3000\u3000\u3000\u3000width: double(5px); \u3000\u3000}</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',20),k={href:"https://www.ruanyifeng.com/blog/2012/06/sass.html",target:"_blank",rel:"noopener noreferrer"},q=r("SASS\u7528\u6CD5\u6307\u5357");function g(x,o){const a=p("ExternalLinkIcon");return d(),s("div",null,[l,e("blockquote",{onInclude:o[1]||(o[1]=()=>{}),"rounded(top,":"","left,":"","5px);":""},[e("p",{onInclude:o[0]||(o[0]=()=>{}),"rounded(top,":"","left);":""},"#navbar li",32),h],32),u,b,S,f,e("template",null,[_,e("p",null,[e("a",k,[q,i(a)])])])])}const v=n(c,[["render",g],["__file","css-sass-started.html.vue"]]);export{v as default};
