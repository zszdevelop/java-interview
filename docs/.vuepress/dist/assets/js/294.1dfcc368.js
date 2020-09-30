(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1226:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用dockerfile定制镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用dockerfile定制镜像"}},[s._v("#")]),s._v(" 使用Dockerfile定制镜像")]),s._v(" "),a("p",[a("strong",[s._v("镜像的定制实际上就是定制每一层所添加的配置、文件")]),s._v("。如果我们可以把每一层修改、安装、构建、操作的命令写入一个脚本，用这个脚本来构建，定制镜像，那么之前提及的无法重复的问题、镜像构建透明性的问题、体积的问题就都会解决。这个脚本就是Dockerfile")]),s._v(" "),a("p",[s._v("Dokcerfile 是一个文本文件，其内包含了一条条的 "),a("strong",[s._v("指令(Instruction)")]),s._v(",每一条指定构建一层，因此每一条指令的内容，就是描述该层应当如何构建。")]),s._v(" "),a("p",[s._v("还以之前定制"),a("code",[s._v("nginx")]),s._v(" 镜像为例，这次我们使用Dockerfile来定制")]),s._v(" "),a("p",[s._v("在一个空白目录中，建立一个文本文件，并命名为Dockerfile：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" mynginx\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mynginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" Dockerfile\n")])])]),a("p",[s._v("其内容为：")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<h1>Hello, Docker!</h1>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" /usr/share/nginx/html/index.html\n")])])]),a("p",[s._v("这个 Dockerfile 很简单，一共就两行。涉及到了两条指令，"),a("code",[s._v("FROM")]),s._v(" 和 "),a("code",[s._v("RUN")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_1-1-from-指定基础镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-from-指定基础镜像"}},[s._v("#")]),s._v(" 1.1 FROM 指定基础镜像")]),s._v(" "),a("p",[s._v("所谓定制镜像，那一定是以一个镜像为基础，在其上进行定制。就像我们之前运行了一个nginx镜像的容器，再进行修改一样，基础镜像是必须指定的。而"),a("code",[s._v("FROM")]),s._v(" 就是指定"),a("strong",[s._v("基础镜像")]),s._v("，因此一个 "),a("code",[s._v("Dockerfile")]),s._v(" 中 "),a("code",[s._v("FROM")]),s._v(" 是必备的指令，并且必须是第一条指令。")]),s._v(" "),a("p",[s._v("除了选择现有镜像为基础镜像外，Docker 还存在一个特殊的镜像，名为 "),a("code",[s._v("scratch")]),s._v("。这个镜像是虚拟的概念，并不实际存在，它表示一个空白的镜像。")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" scratch\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n")])])]),a("p",[s._v("如果你以 "),a("code",[s._v("scratch")]),s._v(" 为基础镜像的话，意味着你不以任何镜像为基础，接下来所写的指令将作为镜像第一层开始存在。")]),s._v(" "),a("h3",{attrs:{id:"_1-2-run-执行命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-run-执行命令"}},[s._v("#")]),s._v(" 1.2 RUN 执行命令")]),s._v(" "),a("p",[a("code",[s._v("RUN")]),s._v(" 指令是用来执行命令行命令的。由于命令行的强大功能。RUN 指令在定制镜像时是最常用的功能之一。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("shell格式："),a("code",[s._v("RUN<命令>")]),s._v(", 就像直接在命令行中输入命令一样。刚才写的Dockerfile 中的RUN 指令就是这种格式")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("RUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<h1>Hello, Docker!</h1>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/share/nginx/html/index.html\n")])])])]),s._v(" "),a("li",[a("p",[s._v("exec格式："),a("code",[s._v('RUN ["可执行文件", "参数1", "参数2"]')]),s._v("，这更像是函数调用中的格式。")])])]),s._v(" "),a("h4",{attrs:{id:"_1-2-1-run-错误使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-run-错误使用方法"}},[s._v("#")]),s._v(" 1.2.1 RUN 错误使用方法")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" debian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("stretch\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y gcc libc6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev make wget\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" wget "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("O redis.tar.gz "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://download.redis.io/releases/redis-5.0.3.tar.gz"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p /usr/src/redis\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" tar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("xzf redis.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("C /usr/src/redis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("components=1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" make "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("C /usr/src/redis\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" make "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("C /usr/src/redis install\n")])])]),a("p",[s._v("Dockerfile中每一个指令都会建立一层，RUN 也不例外。每一个 RUN 的行为，就和刚才我们手工建立镜像的过程一样。新建立一层，在其上执行这些命令，执行结束后，"),a("code",[s._v("commit")]),s._v(" 这一层的修改，构成新的镜像。")]),s._v(" "),a("p",[s._v("而上面的这种写法，创建了7层镜像。这完全没有意义的，而且很多运行时不需要的东西，都被装进了镜像里，比如编译环境、更新的软件包等等。结果就是产生非常臃肿、非常多层的镜像，不仅仅增加了构建部署的时间，也很容易出错。 这是很多初学 Docker 的人常犯的一个错误。")]),s._v(" "),a("h4",{attrs:{id:"_1-2-2-正确写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-正确写法"}},[s._v("#")]),s._v(" 1.2.2 正确写法")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" debian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("stretch\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" buildDeps="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gcc libc6-dev make wget'")]),s._v(" \\\n    && apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update \\\n    && apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y $buildDeps \\\n    && wget "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("O redis.tar.gz "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://download.redis.io/releases/redis-5.0.3.tar.gz"')]),s._v(" \\\n    && mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p /usr/src/redis \\\n    && tar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("xzf redis.tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("C /usr/src/redis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("components=1 \\\n    && make "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("C /usr/src/redis \\\n    && make "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("C /usr/src/redis install \\\n    && rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rf /var/lib/apt/lists/* \\\n    && rm redis.tar.gz \\\n    && rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r /usr/src/redis \\\n    && apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get purge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("remove $buildDeps\n")])])]),a("p",[a("em",[s._v("Union FS 是有最大层数限制的，比如 AUFS，曾经是最大不得超过 42 层，现在是不得超过 127 层。")])]),s._v(" "),a("p",[s._v("首先，"),a("strong",[s._v("之前所有的命令只有一个目的，就是编译、安装 redis 可执行文件。因此没有必要建立很多层，这只是一层的事情")]),s._v("。因此，这里没有使用很多个 "),a("code",[s._v("RUN")]),s._v(" 对一一对应不同的命令，而是仅仅使用一个 "),a("code",[s._v("RUN")]),s._v(" 指令，并使用 "),a("code",[s._v("&&")]),s._v(" 将各个所需命令串联起来。将之前的 7 层，简化为了 1 层。在撰写 Dockerfile 的时候，要经常提醒自己，这"),a("strong",[s._v("并不是在写 Shell 脚本，而是在定义每一层该如何构建")]),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"_1-2-3-良好的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-良好的格式"}},[s._v("#")]),s._v(" 1.2.3 良好的格式")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("\\")]),s._v("  : 支持 Shell 类的行尾添加 "),a("code",[s._v("\\")]),s._v(" 的命令换行方式")]),s._v(" "),a("li",[a("code",[s._v("#")]),s._v(" : 行首 "),a("code",[s._v("#")]),s._v(" 进行注释的格式")]),s._v(" "),a("li",[a("code",[s._v("apt")]),s._v(" : 清理工作命令")])]),s._v(" "),a("p",[s._v("良好的格式，比如换行、缩进、注释等，会让维护、排障更为容易，这是一个比较好的习惯。")]),s._v(" "),a("p",[s._v("很多人初学 Docker 制作出了很臃肿的镜像的原因之一，就是忘记了每一层构建的最后一定要清理掉无关文件。")]),s._v(" "),a("h3",{attrs:{id:"_1-3-构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-构建镜像"}},[s._v("#")]),s._v(" 1.3 构建镜像")]),s._v(" "),a("p",[s._v("我们再回到之前定制的 nginx 镜像的 Dockerfile 来。现在我们明白了这个 Dockerfile 的内容，那么让我们来构建这个镜像吧。")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("Dockerfile")]),s._v(" 文件所在目录执行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker build -t nginx:v3 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nSending build context to Docker daemon "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.048")]),s._v(" kB\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" FROM nginx\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" e43d811ce2f4\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" RUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<h1>Hello, Docker!</h1>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/share/nginx/html/index.html\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 9cdc27646c7b\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 44aa4490ce2c\nRemoving intermediate container 9cdc27646c7b\nSuccessfully built 44aa4490ce2c\n")])])]),a("p",[s._v("从命令的输出结果中，我们可以清晰的看到镜像的构建过程。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("Step 2")]),s._v(" 中，如同我们之前所说的那样，"),a("code",[s._v("RUN")]),s._v(" 指令启动了一个容器 "),a("code",[s._v("9cdc27646c7b")]),s._v("，执行了所要求的命令，并最后提交了这一层 "),a("code",[s._v("44aa4490ce2c")]),s._v("，随后删除了所用到的这个容器 "),a("code",[s._v("9cdc27646c7b")]),s._v("。")]),s._v(" "),a("p",[s._v("这里我们使用了 "),a("code",[s._v("docker build")]),s._v(" 命令进行镜像构建。其格式为：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("上下文路径/URL/-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("在这里我们指定了最终镜像的名称 "),a("code",[s._v("-t nginx:v3")]),s._v("，构建成功后，我们可以像之前运行 "),a("code",[s._v("nginx:v2")]),s._v(" 那样来运行这个镜像，其结果会和 "),a("code",[s._v("nginx:v2")]),s._v(" 一样。")])])}),[],!1,null,null,null);t.default=n.exports}}]);