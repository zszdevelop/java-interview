(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1145:function(a,s,e){"use strict";e.r(s);var t=e(42),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"通过docker安装oracle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过docker安装oracle"}},[a._v("#")]),a._v(" 通过docker安装Oracle")]),a._v(" "),t("h2",{attrs:{id:"_1-安装oracle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装oracle"}},[a._v("#")]),a._v(" 1. 安装Oracle")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("拉取镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g\n")])])]),t("p",[a._v("镜像大概有6.8G")]),a._v(" "),t("p",[a._v("查看镜像信息：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker iamges\n")])])])]),a._v(" "),t("li",[t("p",[a._v("创建容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1521")]),a._v(":1521 --name oracle_11g registry.aliyuncs.com/helowin/oracle_11g\n")])])]),t("p",[a._v("启动容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker start oracle_11g\n")])])])]),a._v(" "),t("li",[t("p",[a._v("进入控制台设置用户信息：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it oracle_11g "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("切换成root进行操作：")]),a._v(" "),t("blockquote",[t("p",[a._v("su - root")])]),a._v(" "),t("p",[a._v("输入密码helowin")])]),a._v(" "),t("li",[t("p",[a._v("设置oracle环境变量如下：")]),a._v(" "),t("p",[a._v("vi /etc/profile文件末尾添加：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ORACLE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/oracle/app/oracle/product/11.2.0/dbhome_2\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ORACLE_SID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("helowin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("切换回oracle用户：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - oracle\n")])])])]),a._v(" "),t("li",[t("p",[a._v("修改sys、system用户密码")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sqlplus /nolog\nconn /as sysdba\nalter user system identified by oracle;\nalter user sys identified by oracle;\nALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;\n")])])]),t("p",[a._v("此处的oracle 就是你设置的密码")]),a._v(" "),t("p",[a._v("Ps:默认密码是：helowin")])])]),a._v(" "),t("h2",{attrs:{id:"_2-遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-遇到的问题"}},[a._v("#")]),a._v(" 2. 遇到的问题")]),a._v(" "),t("h3",{attrs:{id:"_2-1-远程连接提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-远程连接提示"}},[a._v("#")]),a._v(" 2.1 远程连接提示")]),a._v(" "),t("p",[a._v("ORA-12514: TNS:listener does not currently know of service requested in connect descriptor")]),a._v(" "),t("p",[t("img",{attrs:{src:e(513),alt:"image-20200507212411220"}})]),a._v(" "),t("p",[a._v("主要原因是service name 设置的并不是ORCL 导致")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("解决方案：")]),a._v(" "),t("p",[a._v("service name 改为 helowin")])]),a._v(" "),t("li",[t("p",[a._v("解决步骤")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("进入docker 容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it oracle_11g "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("进入 tnsnames.ora所在的目录")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/oracle/app/oracle/product/11.2.0/dbhome_2/network/admin\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看 tnsnames.ora")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vi  tnsnames.ora\n")])])]),t("p",[a._v("可以看到SERVICE_NAME = helowin")]),a._v(" "),t("p",[t("img",{attrs:{src:e(514),alt:"image-20200507213419605"}})]),a._v(" "),t("p",[a._v("serviceName 改为helowin 或者这里改为orcl")])])])])]),a._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000020633619",target:"_blank",rel:"noopener noreferrer"}},[a._v("centos7使用docker安装oracle"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_30657541/article/details/98204681",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux下如何查找sqlnet.ora 和listener.ora 和tnsnames.ora 配置文件的目录"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports},513:function(a,s,e){a.exports=e.p+"assets/img/image-20200507212411220.c4f22af2.png"},514:function(a,s,e){a.exports=e.p+"assets/img/image-20200507213419605.e78c44cd.png"}}]);