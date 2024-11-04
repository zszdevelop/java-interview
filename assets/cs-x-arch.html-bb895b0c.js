import{_ as l,W as r,X as i,Y as e,Z as n,$ as t,a0 as h,D as c}from"./framework-0cf5f349.js";const d={},o=h('<h1 id="cpu架构-arm和x86架构" tabindex="-1"><a class="header-anchor" href="#cpu架构-arm和x86架构" aria-hidden="true">#</a> CPU架构(ARM和X86架构)</h1><h2 id="_1-什么是cpu" tabindex="-1"><a class="header-anchor" href="#_1-什么是cpu" aria-hidden="true">#</a> 1. 什么是CPU</h2><p>中央处理单元（CPU）主要由运算器、控制器、寄存器三部分组成</p><ul><li>运算器:运算的作用</li><li>控制器: 负责发出CPU每条指令所需要的信息</li><li>寄存器:保存运算或者指令的一些临时文件，这样可以保证更高的速度。</li></ul><p>CPU有着<strong>处理指令、执行操作、控制时间、处理数据四大作用</strong>。</p><p>CPU就像我们的大脑，帮我们完成各种各样的生理活动。因此如果没有CPU，那么电脑就是一堆废物，无法工作</p><h2 id="_2-区别" tabindex="-1"><a class="header-anchor" href="#_2-区别" aria-hidden="true">#</a> 2. 区别</h2><h3 id="_2-1-指令集" tabindex="-1"><a class="header-anchor" href="#_2-1-指令集" aria-hidden="true">#</a> 2.1 指令集</h3><p>按逻辑角度 ：指令集分为：<strong>复杂指令集（CISC)和精简指令集（RISC）</strong></p><ul><li><p>Intel处理器 ：复杂指令集（CISC)</p></li><li><p>ARM处理器：精简指令集（RISC）</p></li></ul><h3 id="_2-2-制作工艺-功耗" tabindex="-1"><a class="header-anchor" href="#_2-2-制作工艺-功耗" aria-hidden="true">#</a> 2.2 制作工艺/功耗</h3><ul><li><p>Intel处理器 ：高功率</p><ul><li>设计超高性能的台式机和服务器处理器。</li></ul></li><li><p>ARM处理器：低功耗处理器</p><ul><li>所以手机大部分都采用ARM架构</li></ul></li></ul><h3 id="_2-3-64位计算" tabindex="-1"><a class="header-anchor" href="#_2-3-64位计算" aria-hidden="true">#</a> 2.3 64位计算</h3><p>对于64位计算，ARM和Intel也有一些显著区别。</p><blockquote><p>Intel并没有开发64位版本的x86指令集。64位的指令集名为x86-64（有时简称为x64），实际上是AMD设计开发的。</p></blockquote><ul><li><p>Intel处理器 ：</p></li><li><p>ARM处理器：</p><ul><li>ARM针对移动端64位计算需求，发布ARMv8 64位架构 <ul><li>ARMv8使用了两种执行模式，AArch32和AArch64</li></ul></li></ul></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',17),s={href:"https://zhuanlan.zhihu.com/p/21266987",target:"_blank",rel:"noopener noreferrer"};function p(u,_){const a=c("ExternalLinkIcon");return r(),i("div",null,[o,e("p",null,[e("a",s,[n("分不清ARM和X86架构，别跟我说你懂CPU！"),t(a)])])])}const f=l(d,[["render",p],["__file","cs-x-arch.html.vue"]]);export{f as default};