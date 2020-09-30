(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1028:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"类加载器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[s._v("#")]),s._v(" 类加载器")]),s._v(" "),n("h2",{attrs:{id:"_1-回顾类加载过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-回顾类加载过程"}},[s._v("#")]),s._v(" 1. 回顾类加载过程")]),s._v(" "),n("p",[s._v("类加载过程："),n("strong",[s._v("加载->连接->初始化")]),s._v("。连接过程由可以分成三步："),n("strong",[s._v("验证->准备->解析")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(416),alt:"image-20190929170059337"}})]),s._v(" "),n("p",[s._v("一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控最强的阶段，这一步我们可以去完成还可以自定义类加载器去控制字节流的获取方式（重写一个类加载器的 "),n("code",[s._v("loadClass()")]),s._v(" 方法）。数组类型不通过类加载器创建，他由Java虚拟机直接创建")]),s._v(" "),n("p",[s._v("所有的类都是由类加载器加载，加载的作用就是将.class文件加载到内存")]),s._v(" "),n("h2",{attrs:{id:"_2-类加载器总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-类加载器总结"}},[s._v("#")]),s._v(" 2. 类加载器总结")]),s._v(" "),n("p",[s._v("JVM中内置了三个重要的ClassLoader，除了BootstrapClassLoader 其他类加载器均有 Java 实现且全部继承自"),n("code",[s._v("java.lang.ClassLoader")]),s._v("：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("BootstrapClassLoader(启动类加载器)")]),s._v("：最顶层的加载类，由C++实现。负责加载"),n("code",[s._v("%JAVA_HOME%/lib")]),s._v("目录下的jar包和类或者或被 "),n("code",[s._v("-Xbootclasspath")]),s._v("参数指定的路径中的所有类。")]),s._v(" "),n("li",[n("strong",[s._v("ExtClassLoader（扩展类加载器）")]),s._v("：主要负责加载目录 "),n("code",[s._v("%JRE_HOME%/lib/ext")]),s._v(" 目录下的jar包和类，或被 "),n("code",[s._v("java.ext.dirs")]),s._v(" 系统变量所指定的路径下的jar包。")]),s._v(" "),n("li",[n("strong",[s._v("AppClassLoader(应用程序类加载器)")]),s._v(" ：面向我们用户的加载器，负责加载当前应用classpath下的所有jar包和类")])]),s._v(" "),n("h2",{attrs:{id:"_3-双亲委派模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-双亲委派模型"}},[s._v("#")]),s._v(" 3. 双亲委派模型")]),s._v(" "),n("h3",{attrs:{id:"_3-1-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-介绍"}},[s._v("#")]),s._v(" 3.1 介绍")]),s._v(" "),n("p",[s._v("每一个类都有一个对应他的类加载器。系统中的ClassLoader 在协同工作的时候会默认使用 "),n("strong",[s._v("双亲委派模型")]),s._v("。既在类加载的时候，系统会首先判断当前类是否被加载过。已经被加载的类会直接返回，否则才会尝试加载。加载的时候，首先会把该请求委派该父类加载器的 "),n("code",[s._v("loadClass()")]),s._v(" 处理，因此所有的请求最终都应该传送到顶层的启动类加载器 "),n("code",[s._v("BootstrapClassLoader")]),s._v(" 中。当父类加载器无法处理时，才由自己来处理。当父类加载器为null时，会使用启动类加载器 "),n("code",[s._v("BootstrapClassLoader")]),s._v(" 作为父类加载器。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(417),alt:"image-20190929215241442"}})]),s._v(" "),n("p",[s._v("每个类加载都有一个父类加载器，我们通过下面的程序来验证。")]),s._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoaderDemo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClassLodarDemo\'s ClassLoader is "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoaderDemo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClassLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The Parent of ClassLodarDemo\'s ClassLoader is "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoaderDemo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClassLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getParent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The GrandParent of ClassLodarDemo\'s ClassLoader is "')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoaderDemo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClassLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getParent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getParent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("输出")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ClassLodarDemo's ClassLoader is sun.misc.Launcher$AppClassLoader@18b4aac2\nThe Parent of ClassLodarDemo's ClassLoader is sun.misc.Launcher$ExtClassLoader@1b6d3586\nThe GrandParent of ClassLodarDemo's ClassLoader is null\n")])])]),n("p",[n("code",[s._v("AppClassLoader")]),s._v("的父类加载器为"),n("code",[s._v("ExtClassLoader")]),s._v(" "),n("code",[s._v("ExtClassLoader")]),s._v("的父类加载器为null，"),n("strong",[s._v("null并不代表ExtClassLoader没有父类加载器，而是 BootstrapClassLoader")]),s._v(" 。")]),s._v(" "),n("p",[s._v("其实这个双亲翻译的容易让别人误解，我们一般理解的双亲都是父母，这里的双亲更多地表达的是“父母这一辈”的人而已，并不是说真的有一个 Mother ClassLoader 和一个 Father ClassLoader 。另外，类加载器之间的“父子”关系也不是通过继承来体现的，是由“优先级”来决定。官方API文档对这部分的描述如下:")]),s._v(" "),n("blockquote",[n("p",[s._v("The Java platform uses a delegation model for loading classes. "),n("strong",[s._v('The basic idea is that every class loader has a "parent" class loader.')]),s._v(' When loading a class, a class loader first "delegates" the search for the class to its parent class loader before attempting to find the class itself.')])]),s._v(" "),n("h3",{attrs:{id:"_3-2-双亲委派模型源码分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-双亲委派模型源码分析"}},[s._v("#")]),s._v(" 3.2 双亲委派模型源码分析")]),s._v(" "),n("p",[s._v("双亲委派模型的实现代码非常简单，逻辑非常清晰，都集中在 "),n("code",[s._v("java.lang.ClassLoader")]),s._v(" 的 "),n("code",[s._v("loadClass()")]),s._v(" 中，相关代码如下所示。")]),s._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoader")]),s._v(" parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClassLoadingLock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 首先，检查请求的类是否已经被加载过")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findLoadedClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" t0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nanoTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//父加载器不为空，调用父加载器loadClass()方法处理")]),s._v("\n                        c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//父加载器为空，使用启动类加载器 BootstrapClassLoader 加载")]),s._v("\n                        c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findBootstrapClassOrNull")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),s._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//抛出异常说明父类加载器无法完成加载请求")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                \n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" t1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nanoTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//自己尝试加载")]),s._v("\n                    c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this is the defining class loader; record the stats")]),s._v("\n                    sun"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("misc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PerfCounter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getParentDelegationTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" t0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    sun"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("misc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PerfCounter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFindClassTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addElapsedTimeFrom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    sun"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("misc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PerfCounter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFindClasses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h3",{attrs:{id:"_3-3-双亲委派模型的好处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-双亲委派模型的好处"}},[s._v("#")]),s._v(" 3.3 双亲委派模型的好处")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("双亲委派模型保证了Java程序的稳定运行，可以避免类的重复加载")]),s._v(" "),n("p",[s._v("（JVM 区分不同类的方式不仅仅根据类名，相同的类文件被不同的类加载器加载产生的是两个不同的类）")])]),s._v(" "),n("li",[n("p",[s._v("保证了 Java 的核心 API 不被篡改")]),s._v(" "),n("p",[s._v("如果没有使用双亲委派模型，而是每个类加载器加载自己的话就会出现一些问题，比如我们编写一个称为 "),n("code",[s._v("java.lang.Object")]),s._v(" 类的话，那么程序运行的时候，系统就会出现多个不同的 "),n("code",[s._v("Object")]),s._v(" 类。")])])]),s._v(" "),n("h2",{attrs:{id:"_4-不使用双亲委派模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-不使用双亲委派模型"}},[s._v("#")]),s._v(" 4. 不使用双亲委派模型")]),s._v(" "),n("h3",{attrs:{id:"如果我们不想用双亲委派模型怎么办"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果我们不想用双亲委派模型怎么办"}},[s._v("#")]),s._v(" 如果我们不想用双亲委派模型怎么办？")]),s._v(" "),n("p",[s._v("为了避免双亲委托机制，我们可以自己定义一个类加载器，然后重载 "),n("code",[s._v("loadClass()")]),s._v(" 即可。")]),s._v(" "),n("h2",{attrs:{id:"_5-自定义类加载器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-自定义类加载器"}},[s._v("#")]),s._v(" 5. 自定义类加载器")]),s._v(" "),n("p",[s._v("除了 "),n("code",[s._v("BootstrapClassLoader")]),s._v(" 其他类加载器均由 Java 实现且全部继承自"),n("code",[s._v("java.lang.ClassLoader")]),s._v("。如果我们要自定义自己的类加载器，很明显需要继承 "),n("code",[s._v("ClassLoader")]),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports},416:function(s,t,a){s.exports=a.p+"assets/img/image-20190929170059337.d69d7fb7.png"},417:function(s,t,a){s.exports=a.p+"assets/img/image-20190929215241442.05bbe5ad.png"}}]);