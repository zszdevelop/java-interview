(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1025:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"对象已经死亡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象已经死亡"}},[t._v("#")]),t._v(" 对象已经死亡？")]),t._v(" "),e("p",[t._v("堆中几乎放着所有的对象实例，对堆垃圾回收前的第一步就是判断哪些对象已经死亡（即不能再被任何途径使用的对象）。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(414),alt:"image-20190925214601299"}})]),t._v(" "),e("h2",{attrs:{id:"_1-如何判断对象已经死亡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何判断对象已经死亡"}},[t._v("#")]),t._v(" 1. 如何判断对象已经死亡")]),t._v(" "),e("h3",{attrs:{id:"_1-1-引用计数法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-引用计数法"}},[t._v("#")]),t._v(" 1.1 引用计数法")]),t._v(" "),e("p",[e("strong",[t._v("给对象中添加一个引用计数器，每当有一个地方引用他。计数器就+1，当引用失效，计数器就减1.任何时候计数器为0 的对象就是不可能再被使用的")])]),t._v(" "),e("p",[e("strong",[t._v("这个方法实现简单，效率高，但是目前主流的虚拟机中并没有选择这个算法来管理内存，其最主要的原因是它很难解决对象之间相互循环引用的问题")])]),t._v(" "),e("p",[t._v("所谓对象之间的相互引用问题，如下面代码所示：除了对象 objA 和 objB 相互引用着对方之外，这两个对象之间再无任何引用。但是他们因为互相引用对方，导致它们的引用计数器都不为 0，于是引用计数算法无法通知 GC 回收器回收他们。")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReferenceCountingGc")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" instance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReferenceCountingGc")]),t._v(" objA "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReferenceCountingGc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReferenceCountingGc")]),t._v(" objB "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReferenceCountingGc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tobjA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" objB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tobjB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" objA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tobjA "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tobjB "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"_1-2-可达性分析算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-可达性分析算法"}},[t._v("#")]),t._v(" 1.2 可达性分析算法")]),t._v(" "),e("p",[t._v("这个算法的基本思想就是通过一系列的称为 "),e("strong",[t._v("“GC Roots”")]),t._v(" 的对象作为起点，从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 GC Roots 没有任何引用链相连的话，则证明此对象是不可用的。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(415),alt:"image-20190925215155911"}})]),t._v(" "),e("h2",{attrs:{id:"_2-再谈引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-再谈引用"}},[t._v("#")]),t._v(" 2 再谈引用")]),t._v(" "),e("p",[t._v("无论是通过引用计数法判断对象引用数量，还是通过可达性分析法判断对象的引用链是否可达，判定对象的存活都与“引用”有关。")]),t._v(" "),e("p",[t._v("JDK1.2 之前，Java 中引用的定义很传统：如果 reference 类型的数据存储的数值代表的是另一块内存的起始地址，就称这块内存代表一个引用。")]),t._v(" "),e("p",[t._v("JDK1.2 以后，Java 对引用的概念进行了扩充，将引用分为强引用、软引用、弱引用、虚引用四种（引用强度逐渐减弱）")]),t._v(" "),e("h3",{attrs:{id:"_2-1-强引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-强引用"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2.1．强引用")])]),t._v(" "),e("p",[t._v("以前我们使用的大部分引用实际上都是强引用，这是使用最普遍的引用。如果一个对象具有强引用，那就类似于必不可少的生活用品，垃圾回收器绝不会回收它。"),e("strong",[t._v("当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError")]),t._v(" 错误，使程序异常终止，也不会靠随意回收具有强引用的对象来解决内存不足问题。")]),t._v(" "),e("h3",{attrs:{id:"_2-2-软引用-softreference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-软引用-softreference"}},[t._v("#")]),t._v(" 2.2 软引用（SoftReference）")]),t._v(" "),e("p",[t._v("如果一个对象只具有软引用，那就类似于"),e("strong",[t._v("可有可无的生活用品")]),t._v("。如果内存空间足够，垃圾回收器就不会回收它，如果"),e("strong",[t._v("内存空间不足了，就会回收这些对象的内存")]),t._v("。只要垃圾回收器没有回收它，该对象就可以被程序使用。软引用可用来实现内存敏感的高速缓存。")]),t._v(" "),e("p",[t._v("软引用可以和一个引用队列（ReferenceQueue）联合使用，如果软引用所引用的对象被垃圾回收，JAVA 虚拟机就会把这个软引用加入到与之关联的引用队列中。")]),t._v(" "),e("h3",{attrs:{id:"_2-3-弱引用-weakreference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-弱引用-weakreference"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2.3 弱引用（WeakReference）")])]),t._v(" "),e("p",[t._v("如果一个对象只具有弱引用，那就类似于"),e("strong",[t._v("可有可无的生活用品")]),t._v("。弱引用与软引用的区别在于：只具有弱引用的对象拥有更短暂的生命周期。"),e("strong",[t._v("在垃圾回收器线程扫描它所管辖的内存区域的过程中，一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存")]),t._v("。不过，由于垃圾回收器是一个优先级很低的线程， 因此不一定会很快发现那些只具有弱引用的对象。")]),t._v(" "),e("p",[t._v("弱引用可以和一个引用队列（ReferenceQueue）联合使用，如果弱引用所引用的对象被垃圾回收，Java 虚拟机就会把这个弱引用加入到与之关联的引用队列中。")]),t._v(" "),e("h3",{attrs:{id:"_2-4-虚引用-phantomreference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-虚引用-phantomreference"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2.4 虚引用（PhantomReference）")])]),t._v(" "),e("p",[t._v('"虚引用"顾名思义，就是形同虚设，与其他几种引用都不同，虚引用并不会决定对象的生命周期。如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收。')]),t._v(" "),e("p",[e("strong",[t._v("虚引用主要用来跟踪对象被垃圾回收的活动")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("虚引用与软引用和弱引用的一个区别在于：")]),t._v(" 虚引用必须和引用队列（ReferenceQueue）联合使用。当垃圾回收器准备回收一个对象时，如果发现它还有虚引用，就会在回收对象的内存之前，把这个虚引用加入到与之关联的引用队列中。程序可以通过判断引用队列中是否已经加入了虚引用，来了解被引用的对象是否将要被垃圾回收。程序如果发现某个虚引用已经被加入到引用队列，那么就可以在所引用的对象的内存被回收之前采取必要的行动。")]),t._v(" "),e("p",[t._v("特别注意，在程序设计中一般很少使用弱引用与虚引用，使用软引用的情况较多，这是因为"),e("strong",[t._v("软引用可以加速 JVM 对垃圾内存的回收速度，可以维护系统的运行安全，防止内存溢出（OutOfMemory）等问题的产生")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"_3-不可达的对象并非-非死不可"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-不可达的对象并非-非死不可"}},[t._v("#")]),t._v(" 3. 不可达的对象并非“非死不可”")]),t._v(" "),e("p",[t._v("即使在可达性分析法中不可达的对象，也并非是“非死不可”的，这时候它们暂时处于“缓刑阶段”，要真正宣告一个对象死亡，至少要经历两次标记过程；可达性分析法中不可达的对象被第一次标记并且进行一次筛选，筛选的条件是此对象是否有必要执行 finalize 方法。当对象没有覆盖 finalize 方法，或 finalize 方法已经被虚拟机调用过时，虚拟机将这两种情况视为没有必要执行。")]),t._v(" "),e("p",[t._v("被判定为需要执行的对象将会被放在一个队列中进行第二次标记，除非这个对象与引用链上的任何一个对象建立关联，否则就会被真的回收。")]),t._v(" "),e("h2",{attrs:{id:"_4-如何判断一个常量是废弃常量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何判断一个常量是废弃常量"}},[t._v("#")]),t._v(" 4. 如何判断一个常量是废弃常量")]),t._v(" "),e("p",[t._v("运行时常量池主要回收的是废弃的常量。那么，我们如何判断一个常量是废弃常量呢？")]),t._v(" "),e("p",[t._v('假如在常量池中存在字符串 "abc"，如果当前没有任何 String 对象引用该字符串常量的话，就说明常量 "abc" 就是废弃常量，如果这时发生内存回收的话而且有必要的话，"abc" 就会被系统清理出常量池。')]),t._v(" "),e("h2",{attrs:{id:"_5-如何判断一个类是无用类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何判断一个类是无用类"}},[t._v("#")]),t._v(" 5. 如何判断一个类是无用类")]),t._v(" "),e("p",[t._v("方法区主要回收的是无用的类，那么如何判断一个类是无用的类的呢？")]),t._v(" "),e("p",[t._v("判定一个常量是否是“废弃常量”比较简单，而要判定一个类是否是“无用的类”的条件则相对苛刻许多。类需要同时满足下面 3 个条件才能算是 "),e("strong",[t._v("“无用的类”")]),t._v(" ：")]),t._v(" "),e("ul",[e("li",[t._v("该类所有的实例都已经被回收，也就是 Java 堆中不存在该类的任何实例。")]),t._v(" "),e("li",[t._v("加载该类的 ClassLoader 已经被回收。")]),t._v(" "),e("li",[t._v("该类对应的 java.lang.Class 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。")])]),t._v(" "),e("p",[t._v("虚拟机可以对满足上述 3 个条件的无用类进行回收，这里说的仅仅是“可以”，而并不是和对象一样不使用了就会必然被回收。")])])}),[],!1,null,null,null);a.default=n.exports},414:function(t,a,s){t.exports=s.p+"assets/img/image-20190925214601299.2c7ff2e8.png"},415:function(t,a,s){t.exports=s.p+"assets/img/image-20190925215155911.0be97119.png"}}]);