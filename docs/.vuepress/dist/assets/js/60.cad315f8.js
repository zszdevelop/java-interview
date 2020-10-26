(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1109:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mac-linux压测siege"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-linux压测siege"}},[t._v("#")]),t._v(" Mac/Linux压测Siege")]),t._v(" "),s("h2",{attrs:{id:"_1-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[t._v("#")]),t._v(" 1. 安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("brew install siege\n")])])]),s("p",[t._v("默认安装在"),s("code",[t._v("/usr/local/bin/")]),t._v("，并自动添加到系统环境变量中,在终端输入"),s("code",[t._v("siege")]),t._v(" 如果可以显示出相应的命令介绍，如下图所示，则表示我们已经安装成功。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(775),alt:"image-20191230151706948"}})]),t._v(" "),s("h2",{attrs:{id:"_2-压测前准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-压测前准备工作"}},[t._v("#")]),t._v(" 2. 压测前准备工作")]),t._v(" "),s("h3",{attrs:{id:"_2-1-修改系统的文件描述符限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-修改系统的文件描述符限制"}},[t._v("#")]),t._v(" 2.1 修改系统的文件描述符限制")]),t._v(" "),s("p",[t._v("当我们需要模拟大并发情况下的压测，则需要开启数量可观的线程，以及要占用大量的文件描述符，而系统默认对能够使用的文件描述符数量做了限制。首先使用 "),s("code",[t._v("ulimit -a")]),t._v(" 命令查看目前系统开启的文件描述符数量")]),t._v(" "),s("p",[s("img",{attrs:{src:a(776),alt:"image-20191230165203813"}})]),t._v(" "),s("p",[t._v("可以看到目前系统允许使用的文件描述符的数量为 256，这是远远不够的。如果不修改该参数，要是进行大量并发的模拟场景时则会报"),s("code",[t._v("TOO MANY FILES OPEN")]),t._v(" 错误。为此我们可以先使用 "),s("code",[t._v("ulimit -n 10000")]),t._v("命令来调大系统可打开的文件描述符数量。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(777),alt:"image-20191230165254044"}})]),t._v(" "),s("h2",{attrs:{id:"_3-常用压测命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用压测命令"}},[t._v("#")]),t._v(" 3. 常用压测命令")]),t._v(" "),s("p",[t._v("下面列举出了一些siege的常用命令:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-C, --config 在屏幕上打印显示出当前的配置,配置是包括在他的配置文件$HOME/.siegerc中,可以编辑里面的参数,这样每次siege 都会按照它运行.\n-v, --verbose 运行时能看到详细的运行信息.\n-c, --concurrent=NUM 模拟有n个用户在同时访问,n不要设得太大,因为越大,siege消耗本地机器的资源越多.\n-r, --reps=NUM 重复运行测试n次,不能与-t同时存在\n-t, --time=NUMm 持续运行siege ‘n’秒(如10S),分钟(10M),小时(10H)\n-d, --delay=NUM 每个url之间的延迟,在0-n之间.\n-b, --benchmark 请求无需等待 delay=0.\n-i, --internet 随机访问urls.txt中的url列表项.\n-f, --file=FILE 指定用特定的urls文件运行 ,默认为urls.txt,位于siege安装目录下的etc/urls.txt\n-R, --rc=FILE 指定用特定的siege 配置文件来运行,默认的为$HOME/.siegerc\n-l, --log[=FILE] 运行结束,将统计数据保存到日志文件中siege .log,一般位于/usr/local/var/siege .log中,也可在.siegerc中自定义\n")])])]),s("h2",{attrs:{id:"_4-小试牛刀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-小试牛刀"}},[t._v("#")]),t._v(" 4. 小试牛刀")]),t._v(" "),s("p",[t._v("做好了前面的准备工作，我们便可以使用siege进行压测的实践，就拿我们经常访问的百度来做一个测试，在命令行中执行下面的命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("siege -c 5 -r 5 http://www.baidu.com\n")])])]),s("p",[t._v("测试的结果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(778),alt:"image-20191230170159374"}})]),t._v(" "),s("p",[t._v("这些测试结果中的项目含义分别为：")]),t._v(" "),s("blockquote",[s("p",[t._v("Transactions <———> 总共测试次数\nAvailability <———> 成功次数百分比\nElapsed time <———> 总共耗时多少秒\nData transferred <———> 总共数据传输\nResponse time <———> 等到响应耗时\nTransaction rate <———> 平均每秒处理请求数\nThroughput <———> 吞吐率\nConcurrency <———> 最高并发\nSuccessful transactions <———> 成功的请求数\nFailed transactions <———> 失败的请求数\nLongest transaction <———> 每次传输所花最长时间\nShortest transaction <———> 每次传输所花最短时间")])]),t._v(" "),s("h2",{attrs:{id:"_5-常用命令总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用命令总结"}},[t._v("#")]),t._v(" 5. 常用命令总结")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# 200个并发对百度发送请求100次\nsiege -c 200 -r 100 http://www.baidu.com\n\n# 对urls.txt中列出所有的网址进行压测\nsiege -c 200 -r 100 -f urls.txt\n\n# 随机选取urls.txt中列出的网址,按照100*100的并发度进行测试\nsiege -c 100 -r 100 -f urls.txt -i\n\n# 指定http请求头 文档类型\nsiege -H "Content-Type:application/json" -c 200 -r 100 -f urls.txt -i -b\n\n# 发送post请求，在网址后添加POST说明，并且紧跟参数在其后\nsiege -c 100 -r 100 http://www.baidu.com/ POST k1=v1&k2=v2\n')])])]),s("p",[t._v("需要注意的是，如果地址和参数中含有中文或非ASCII字符时，首先需要对这些字符进行url编码，这样才可正确的进行测试。")]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/lisongjia123/article/details/79718843",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mac/Linux压力测试神器Siege详解(附安装过程"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports},775:function(t,e,a){t.exports=a.p+"assets/img/image-20191230151706948.9e8e5280.png"},776:function(t,e,a){t.exports=a.p+"assets/img/image-20191230165203813.371aa9da.png"},777:function(t,e,a){t.exports=a.p+"assets/img/image-20191230165254044.b7b0aefb.png"},778:function(t,e,a){t.exports=a.p+"assets/img/image-20191230170159374.8c31b4cf.png"}}]);