(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{970:function(a,t,s){"use strict";s.r(t);var r=s(42),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gitlab内存占用过大"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab内存占用过大"}},[a._v("#")]),a._v(" gitlab内存占用过大")]),a._v(" "),s("p",[a._v("我的服务器配置是2核4G内存，启动gitlab 就占用了很大内存空间(停止gitlab 会释放1.5G内存)")]),a._v(" "),s("h2",{attrs:{id:"_1-解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-解决方案"}},[a._v("#")]),a._v(" 1. 解决方案")]),a._v(" "),s("h3",{attrs:{id:"_1-1-减少-unicorn-worker进程数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-减少-unicorn-worker进程数"}},[a._v("#")]),a._v(" 1.1 减少 unicorn worker进程数")]),a._v(" "),s("p",[a._v("我们可以使用 top -ac 先看一下开启了多少unicorn worker进程，gitlab默认开启进程数与CPU内核数相同")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vim /etc/gitlab/gitlab.rb\nunicorn['worker_processes'] = 8\n")])])]),s("p",[a._v("默认是被注释掉的，官方建议该值是CPU核心数加一，可以提高服务器的响应速度，如果内存只有4G，或者服务器上有其它业务，就不要改了，以免内存不足。另外，这个参数最小值是2，设为1，服务器可能会卡死。")]),a._v(" "),s("h3",{attrs:{id:"_1-2-减少数据库缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-减少数据库缓存"}},[a._v("#")]),a._v(" 1.2 减少数据库缓存")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" postgresql['shared_buffers'] = \"128MB\"\n")])])]),s("p",[a._v("默认为256MB，可适当改小")]),a._v(" "),s("h3",{attrs:{id:"_1-3-减少数据库并发数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-减少数据库并发数"}},[a._v("#")]),a._v(" 1.3 减少数据库并发数")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("postgresql['max_worker_processes'] = 4\n")])])]),s("p",[a._v("默认为8，可适当减少")]),a._v(" "),s("h3",{attrs:{id:"_1-4-减少sidekiq并发数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-减少sidekiq并发数"}},[a._v("#")]),a._v(" 1.4 减少sidekiq并发数")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sidekiq['concurrency'] = 10\n")])])]),s("p",[a._v("默认是25，可适当改小")])])}),[],!1,null,null,null);t.default=e.exports}}]);