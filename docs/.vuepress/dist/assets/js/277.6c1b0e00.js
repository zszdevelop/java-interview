(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{1186:function(s,t,e){"use strict";e.r(t);var a=e(42),l=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ssh一段时间就断掉"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh一段时间就断掉"}},[s._v("#")]),s._v(" ssh一段时间就断掉")]),s._v(" "),e("h2",{attrs:{id:"_1-编辑sshd-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-编辑sshd-config"}},[s._v("#")]),s._v(" 1. 编辑sshd_config")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim /etc/ssh/sshd_config\n")])])]),e("p",[s._v("找到下面两行")]),s._v(" "),e("p",[s._v("#ClientAliveInterval 0\n#ClientAliveCountMax 3")]),s._v(" "),e("p",[s._v("去掉注释，改成")]),s._v(" "),e("p",[s._v("ClientAliveInterval 30\nClientAliveCountMax 86400")]),s._v(" "),e("hr"),s._v(" "),e("ul",[e("li",[e("p",[s._v("ClientAliveInterval")]),s._v(" "),e("p",[s._v("客户端每隔多少秒向服务发送一个心跳数据")])]),s._v(" "),e("li",[e("p",[s._v("ClientAliveCountMax")]),s._v(" "),e("p",[s._v("客户端多少秒没有相应，服务器自动断掉连接")])])]),s._v(" "),e("h2",{attrs:{id:"_2-重启sshd服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-重启sshd服务"}},[s._v("#")]),s._v(" 2.重启sshd服务")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service sshd restart\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);