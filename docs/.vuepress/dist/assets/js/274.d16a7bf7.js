(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{1181:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"根据端口号-进程号查项目位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据端口号-进程号查项目位置"}},[a._v("#")]),a._v(" 根据端口号/进程号查项目位置")]),a._v(" "),s("h2",{attrs:{id:"_1-根据端口号查pid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-根据端口号查pid"}},[a._v("#")]),a._v(" 1. 根据端口号查pid")]),a._v(" "),s("p",[a._v("仅有端口号时，需要根据端口号先查出进程号")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("方式一：losf")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("losf -i:{port}\n")])])]),s("p",[a._v("![image-20191023093133400](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20191023093133400.png)")])]),a._v(" "),s("li",[s("p",[a._v("方式二：netstat")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("netstat -tunlp|grep {port}\n")])])]),s("p",[a._v("![image-20191023093229618](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20191023093229618.png)")])])]),a._v(" "),s("h2",{attrs:{id:"_2-根据pid查路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-根据pid查路径"}},[a._v("#")]),a._v(" 2. 根据pid查路径")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ll /proc/9293\n")])])]),s("p",[a._v("可以查到所有pid相关的信息，其中cwd就是进程所在位置")]),a._v(" "),s("p",[a._v("![image-20191023093453433](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20191023093453433.png)")]),a._v(" "),s("p",[a._v("当然也可以直接加上cwd查询位置")]),a._v(" "),s("p",[a._v("![image-20191023093531560](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20191023093531560.png)")])])}),[],!1,null,null,null);t.default=r.exports}}]);