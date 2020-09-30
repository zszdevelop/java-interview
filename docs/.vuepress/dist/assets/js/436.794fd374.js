(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{967:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"问题集锦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题集锦"}},[t._v("#")]),t._v(" 问题集锦")]),t._v(" "),a("h2",{attrs:{id:"_1-push-提交异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-push-提交异常"}},[t._v("#")]),t._v(" 1. push 提交异常")]),t._v(" "),a("p",[t._v("push 提交时出现fatal: The remote end hung up unexpectedly异常")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("localhost:android zhangshengzhong$ git push --set-upstream http://gitlab.isture.com/zsz/android-gitbook.git master\nCounting objects: 245, done.\nDelta compression using up to 8 threads.\nCompressing objects: 100% (214/214), done.\nerror: RPC failed; result=22, HTTP code = 41383 MiB/s\nfatal: The remote end hung up unexpectedly\nWriting objects: 100% (245/245), 15.83 MiB | 6.85 MiB/s, done.\nTotal 245 (delta 7), reused 0 (delta 0)\nfatal: The remote end hung up unexpectedly\nEverything up-to-date\n")])])]),a("h3",{attrs:{id:"_1-1-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-解决方案"}},[t._v("#")]),t._v(" 1.1 解决方案")]),t._v(" "),a("p",[t._v("原因：因为上传文件超过了nginx 的文件限制最大值")]),t._v(" "),a("p",[t._v("注意：自己是走哪个nginx，是gitlab自带的还是服务器的nginx")]),t._v(" "),a("p",[t._v("给nginx 添加上")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http {\n  ...\n  client_max_body_size 100M;\n  \n")])])]),a("h2",{attrs:{id:"_2-clone路径不对"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-clone路径不对"}},[t._v("#")]),t._v(" 2. clone路径不对")]),t._v(" "),a("h3",{attrs:{id:"_2-1-方式一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-方式一"}},[t._v("#")]),t._v(" 2.1 方式一")]),t._v(" "),a("p",[t._v("直接更改/etc/gitlab/gitlab.rb不能生效，更改/opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml文件")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vi /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml\n")])])]),a("p",[t._v("更改"),a("strong",[t._v("host和port")]),t._v("即可")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  ## GitLab settings \n  gitlab:\n    ## Web server settings (note: host is the FQDN, do not include http://)\n    host: xxx.xxx.xxx.xxx\n    port: 8181\n    https: fals\n")])])]),a("h3",{attrs:{id:"_2-2-方式二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-方式二"}},[t._v("#")]),t._v(" 2.2 方式二")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("external_url 'http://gitlab.isture.com'\n")])])]),a("p",[t._v("external_url 'http://gitlab.isture.com'")])])}),[],!1,null,null,null);e.default=n.exports}}]);