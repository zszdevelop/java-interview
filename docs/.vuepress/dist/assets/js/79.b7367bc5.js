(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{927:function(r,t,e){r.exports=e.p+"assets/img/image-20200109135721629.7087fa50.png"},928:function(r,t,e){r.exports=e.p+"assets/img/image-20200109140942669.b9a98e1c.png"},929:function(r,t,e){r.exports=e.p+"assets/img/image-20200109141223152.1b55c80e.png"},965:function(r,t,e){"use strict";e.r(t);var a=e(42),n=Object(a.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"gitlab-runner的安装与使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-runner的安装与使用"}},[r._v("#")]),r._v(" Gitlab-Runner的安装与使用")]),r._v(" "),a("h2",{attrs:{id:"_1-安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装步骤"}},[r._v("#")]),r._v(" 1. 安装步骤")]),r._v(" "),a("h3",{attrs:{id:"_1-1-安装gitlab-ci-multi-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装gitlab-ci-multi-runner"}},[r._v("#")]),r._v(" 1.1 安装gitlab-ci-multi-runner")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("添加yum源")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.rpm.sh | sudo bash\n")])])])]),r._v(" "),a("li",[a("p",[r._v("安装")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("yum install gitlab-ci-multi-runner\n")])])]),a("p",[r._v("这里是官网的安装教程，其它操作系统的请参考\n"),a("a",{attrs:{href:"https://gitlab.com/gitlab-org/gitlab-ci-multi-runner",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://gitlab.com/gitlab-org/gitlab-ci-multi-runner"),a("OutboundLink")],1)])])]),r._v(" "),a("h3",{attrs:{id:"_1-2-使用gitlab-ci-multi-runner注册runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-使用gitlab-ci-multi-runner注册runner"}},[r._v("#")]),r._v(" 1.2 使用gitlab-ci-multi-runner注册Runner")]),r._v(" "),a("p",[r._v("安装好gitlab-ci-multi-runner这个软件之后，我们可以用它想gitlab-ci注册runner")]),r._v(" "),a("p",[r._v("向gitlab-CI注册runner需要两样东西:"),a("strong",[r._v("GitLab-CI的url")]),r._v("和"),a("strong",[r._v("注册token")]),r._v("。")]),r._v(" "),a("p",[r._v("其中，token是为了确定你这个Runner是"),a("strong",[r._v("所有工程都能够使用的Shared Runner")]),r._v("还是具体"),a("strong",[r._v("某一个工程才能使用的Specific Runner")]),r._v("。")]),r._v(" "),a("h4",{attrs:{id:"_1-2-1-所有工程都能够使用的shared-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-所有工程都能够使用的shared-runner"}},[r._v("#")]),r._v(" 1.2.1 所有工程都能够使用的Shared Runner")]),r._v(" "),a("p",[r._v("如果要注册Shared Runner，你需要到管理界面的Runners页面里面去找注册token。如下图所示：")]),r._v(" "),a("h4",{attrs:{id:"_1-2-2-某一个工程才能使用的specific-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-某一个工程才能使用的specific-runner"}},[r._v("#")]),r._v(" 1.2.2 某一个工程才能使用的Specific Runner")]),r._v(" "),a("p",[r._v("如果要注册Specific Runner，你需要到项目的设置的Runner页面里面去找注册token。如下图所示：")]),r._v(" "),a("p",[a("img",{attrs:{src:e(927),alt:"image-20200109135721629"}})]),r._v(" "),a("h4",{attrs:{id:"_1-2-3-注册runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-注册runner"}},[r._v("#")]),r._v(" 1.2.3 注册runner")]),r._v(" "),a("p",[r._v("找到token之后，运行下面这条命令注册Runner（当然，除了url和token之外，还需要其他的信息，比如执行器"),a("code",[r._v("executor")]),r._v("、构建目录"),a("code",[r._v("builds_dir")]),r._v("等）。\n"),a("code",[r._v("gitlab-ci-multi-runner register")])]),r._v(" "),a("p",[a("img",{attrs:{src:e(928),alt:"image-20200109140942669"}})]),r._v(" "),a("p",[r._v("依据提示输入")]),r._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[r._v("#")]),r._v(" 注意事项")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("Whether to run untagged builds [true/false]:")]),r._v(" "),a("p",[r._v("是否运行在没有 tag 的 build 上面。在配置 gitlab-ci 时，会有很多 job，每个 job 可以通过 tags 属性来选择 Runner。"),a("strong",[r._v("这里为 true 表示如果 job 没有配置 tags，也执行。")])])]),r._v(" "),a("li",[a("p",[r._v("Whether to lock the Runner to current project [true/false]:")]),r._v(" "),a("p",[r._v("是否锁定 Runner 到当前项目")])]),r._v(" "),a("li",[a("p",[r._v("选择 executor，这里列出了很多 executor")]),r._v(" "),a("p",[r._v("shell")])])]),r._v(" "),a("p",[r._v("注册完成之后，GitLab-CI就会多出一条Runner记录，如下图所示：")]),r._v(" "),a("p",[a("img",{attrs:{src:e(929),alt:"image-20200109141223152"}})]),r._v(" "),a("h3",{attrs:{id:"_1-3-让注册好的runner运行起来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-让注册好的runner运行起来"}},[r._v("#")]),r._v(" 1.3 让注册好的Runner运行起来")]),r._v(" "),a("p",[r._v("Runner注册完成之后还不行，还必须让它运行起来，否则它无法接收到GitLab-CI的通知并且执行软件集成脚本。怎么让Runner运行起来呢？"),a("code",[r._v("gitlab-ci-multi-runner")]),r._v("提供了这样一条命令"),a("code",[r._v("gitlab-ci-multi-runner run-single")]),r._v("，详情如下：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("gitlab-ci-multi-runner start gitbook-runner\n")])])]),a("p",[r._v("查看runner运行状态")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("ps -aux | grep gitlab-runner\n")])])]),a("p",[r._v("gitlab运行成功了")]),r._v(" "),a("h3",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[r._v("#")]),r._v(" 参考文章")]),r._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/2b43151fb92e",target:"_blank",rel:"noopener noreferrer"}},[r._v("GitLab-CI与GitLab-Runner"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);