(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1085:function(a,v,_){"use strict";_.r(v);var t=_(42),r=Object(t.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java内存区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java内存区域"}},[a._v("#")]),a._v(" Java内存区域")]),a._v(" "),t("h2",{attrs:{id:"_1-常见面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-常见面试题"}},[a._v("#")]),a._v(" 1. 常见面试题")]),a._v(" "),t("h3",{attrs:{id:"_1-1-基本问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基本问题"}},[a._v("#")]),a._v(" 1.1 基本问题")]),a._v(" "),t("ul",[t("li",[a._v("介绍下Java内存区域（运行时数据区）")]),a._v(" "),t("li",[a._v("Java对象的创建过程（五步，必须默写出来并且知道每一步虚拟机做了什么）")]),a._v(" "),t("li",[a._v("对象的访问定位的两种方式（句柄和直接指针两种方式）")])]),a._v(" "),t("h3",{attrs:{id:"_1-2-拓展问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-拓展问题"}},[a._v("#")]),a._v(" 1.2 拓展问题")]),a._v(" "),t("ul",[t("li",[a._v("Stringt 类和常量池")]),a._v(" "),t("li",[a._v("8种基本类型的包装类和常量池")])]),a._v(" "),t("h2",{attrs:{id:"_2-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-概述"}},[a._v("#")]),a._v(" 2 概述")]),a._v(" "),t("p",[a._v("对于java程序员来说，在虚拟机自动内存管理机制下，不再需要像C/C++程序开发程序员这样为每一个new 操作去屑对应的delete/free操作，不容易出现内存泄漏和内存溢出问题。正式因为Java程序员把内存控制权交给Java虚拟机，一旦出现内存泄漏和溢出方面的问题。如果不了解虚拟机是怎样使用内存的，那么排查错误将会是一个非常艰巨的任务")]),a._v(" "),t("h2",{attrs:{id:"_3-运行时数据区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行时数据区域"}},[a._v("#")]),a._v(" 3. 运行时数据区域")]),a._v(" "),t("p",[a._v("Java虚拟机在执行 java 程序的过程中会把它管理的内存划分成若干个不同的数据区域。JDK 1.8和之前的版本略有不同，下面会介绍")]),a._v(" "),t("p",[a._v("JDK 1.8 之前")]),a._v(" "),t("p",[t("img",{attrs:{src:_(406),alt:"image-20190923234434594"}})]),a._v(" "),t("p",[a._v("在JDK 1.8")]),a._v(" "),t("p",[t("img",{attrs:{src:_(407),alt:"image-20190923235103550"}})]),a._v(" "),t("p",[t("strong",[a._v("线程私有的：")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("程序计数器")])]),a._v(" "),t("li",[t("p",[a._v("虚拟机栈")])]),a._v(" "),t("li",[t("p",[a._v("本地方法栈")])])]),a._v(" "),t("p",[t("strong",[a._v("线程共享的")])]),a._v(" "),t("ul",[t("li",[a._v("堆")]),a._v(" "),t("li",[a._v("方法区")]),a._v(" "),t("li",[a._v("直接内存（非运行时数据区的一部分）")])]),a._v(" "),t("h3",{attrs:{id:"_3-1-程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-程序计数器"}},[a._v("#")]),a._v(" 3.1 程序计数器")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("依次读取指令")]),a._v("，从而"),t("strong",[a._v("实现代码的流程控制")])]),a._v(" "),t("li",[a._v("在"),t("strong",[a._v("多线程")]),a._v("的情况下，程序计数器用于"),t("strong",[a._v("记录当前线程执行的位置")])])]),a._v(" "),t("blockquote",[t("p",[a._v("程序计数器是一块较小的内存空间，可以看作是当前线程所执行的字节码的行号指示器。"),t("strong",[a._v("字节码解释器工作时通过改变这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等功能都需要依赖这个计数器来完成。")])]),a._v(" "),t("p",[a._v("另外，"),t("strong",[a._v("为了线程切换后能恢复到正确的执行位置，每条线程都需要有一个独立的程序计数器，各线程之间计数器互不影响，独立存储，我们称这类内存区域为“线程私有”的内存。")])]),a._v(" "),t("p",[t("strong",[a._v("从上面的介绍中我们知道程序计数器主要有两个作用：")])]),a._v(" "),t("ol",[t("li",[a._v("字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理。")]),a._v(" "),t("li",[a._v("在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。")])]),a._v(" "),t("p",[t("strong",[a._v("注意：程序计数器是唯一一个不会出现 OutOfMemoryError 的内存区域，它的生命周期随着线程的创建而创建，随着线程的结束而死亡。")])])]),a._v(" "),t("h3",{attrs:{id:"_3-2-java-虚拟机栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-java-虚拟机栈"}},[a._v("#")]),a._v(" 3.2 Java 虚拟机栈")]),a._v(" "),t("p",[t("strong",[a._v("与程序计数器一样，Java 虚拟机栈也是线程私有的，它的生命周期和线程相同，描述的是 Java 方法执行的内存模型，每次方法调用的数据都是通过栈传递的。")])]),a._v(" "),t("p",[t("strong",[a._v("Java 内存可以粗糙的区分为堆内存（Heap）和栈内存 (Stack),其中栈就是现在说的虚拟机栈，或者说是虚拟机栈中局部变量表部分。")]),a._v(" （实际上，Java 虚拟机栈是由一个个栈帧组成，而每个栈帧中都拥有：局部变量表、操作数栈、动态链接、方法出口信息。）")]),a._v(" "),t("p",[t("strong",[a._v("局部变量表主要存放了编译器可知的各种数据类型")]),a._v("（boolean、byte、char、short、int、float、long、double）、"),t("strong",[a._v("对象引用")]),a._v("（reference 类型，它不同于对象本身，可能是一个指")]),a._v(" "),t("p",[t("strong",[a._v("Java 虚拟机栈会出现两种异常：StackOverFlowError 和 OutOfMemoryError。")])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("StackOverFlowError：")]),a._v(" 若 Java 虚拟机栈的内存大小不允许动态扩展，那么当线程请求栈的深度超过当前 Java 虚拟机栈的最大深度的时候，就抛出 StackOverFlowError 异常。")]),a._v(" "),t("li",[t("strong",[a._v("OutOfMemoryError：")]),a._v(" 若 Java 虚拟机栈的内存大小允许动态扩展，且当线程请求栈时内存用完了，无法再动态扩展了，此时抛出 OutOfMemoryError 异常。")])]),a._v(" "),t("p",[a._v("Java 虚拟机栈也是线程私有的，每个线程都有各自的 Java 虚拟机栈，而且随着线程的创建而创建，随着线程的死亡而死亡。")]),a._v(" "),t("h4",{attrs:{id:"_3-2-1-那么方法-函数如何调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-那么方法-函数如何调用"}},[a._v("#")]),a._v(" 3.2.1 那么方法/函数如何调用")]),a._v(" "),t("p",[a._v("java 栈可以类比数据结构中的栈，java 栈中保存的内容主要是栈帧，每一次函数调用都会有一个对应的栈帧被压入 Java 栈。每一个函数调用结束后，都会有一个栈帧被弹出")]),a._v(" "),t("h4",{attrs:{id:"_3-2-2-java-方法的两种返回"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-java-方法的两种返回"}},[a._v("#")]),a._v(" 3.2.2  Java 方法的两种返回")]),a._v(" "),t("ol",[t("li",[a._v("return 语句")]),a._v(" "),t("li",[a._v("抛出异常")])]),a._v(" "),t("p",[a._v("不管哪种返回方式都会导致栈帧被弹出")]),a._v(" "),t("h3",{attrs:{id:"_3-3-本地方法栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-本地方法栈"}},[a._v("#")]),a._v(" 3.3  本地方法栈")]),a._v(" "),t("p",[a._v("和虚拟机栈所发挥的作用非常相似，区别是： "),t("strong",[a._v("虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。")]),a._v(" 在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。")]),a._v(" "),t("p",[a._v("本地方法被执行的时候，在本地方法栈也会创建一个栈帧，用于存放该本地方法的局部变量表、操作数栈、动态链接、出口信息。")]),a._v(" "),t("p",[a._v("方法执行完毕后相应的栈帧也会出栈并释放内存空间，也会出现 StackOverFlowError 和 OutOfMemoryError 两种异常。")]),a._v(" "),t("h3",{attrs:{id:"_3-4-堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-堆"}},[a._v("#")]),a._v(" 3.4 堆")]),a._v(" "),t("p",[a._v("Java 虚拟机中所管理的内存中最大的一块，java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。"),t("strong",[a._v("此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存")])]),a._v(" "),t("p",[a._v("java堆是垃圾收集器管理的主要区域，因此也被称作"),t("strong",[a._v("GC 堆（Garbage Collected Heap）")]),a._v(".从垃圾回收的角度，由于现在收集器基本都采用分代垃圾收集算法，所以 Java 堆还可以细分为：新生代和老年代：再细致一点有：Eden 空间、From Survivor、To Survivor 空间等。"),t("strong",[a._v("进一步划分的目的是更好的回收内存，更快的分配内存")])]),a._v(" "),t("p",[t("img",{attrs:{src:_(408),alt:"image-20190924001743226"}})]),a._v(" "),t("p",[a._v("上图所示的eden 区，s0 区，s1区都是属于新生代，tentired区属于老年代，大部分情况")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("对象都会首先在Eden 区域分配")])]),a._v(" "),t("li",[t("p",[a._v("在一次新生代垃圾回收后，如果对象还存活，则会进入s0或者s1,并且对象的年龄还会加1（Eden区->Survivor 区后对象的初始年龄变为1）")])]),a._v(" "),t("li",[t("p",[a._v("当它的年龄增加到一定程度（默认为15岁），就会被晋升到老年代")]),a._v(" "),t("p",[a._v("对象晋升到老年代的年龄阈值，可以通过参数 "),t("code",[a._v("-XX:MaxTenuringThreshold")]),a._v(" 来设置。")])])]),a._v(" "),t("blockquote",[t("p",[a._v("问：什么时候触发新生代垃圾回收？")]),a._v(" "),t("p",[a._v("答：当Eden没有足够空间的时候就会 触发jvm发起一次Minor GC")]),a._v(" "),t("p",[a._v("问：什么时候触发老年代垃圾回收")]),a._v(" "),t("p",[a._v("触发MinorGC的条件：\n1 在进行MajorGC之前，一般都先进行了一次MinorGC，使得有新生代的对象进入老年代，当老年代空间不足时就会触发MajorGC。\n2 当无法找到足够大的连续空间分配给新创建的较大对象时，也会触发MajorGC进行垃圾回收腾出空间。")])]),a._v(" "),t("h3",{attrs:{id:"_3-5-方法区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-方法区"}},[a._v("#")]),a._v(" 3.5 方法区")]),a._v(" "),t("p",[a._v("方法区与 Java 堆一样，是各个线程共享的内存区域，它用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。虽然 Java 虚拟机规范把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫做 "),t("strong",[a._v("Non-Heap（非堆）")]),a._v("，目的应该是与 Java 堆区分开来。")]),a._v(" "),t("p",[a._v("方法区也被称为永久代。很多人都会分不清方法区和永久代的关系，为此我也查阅了文献。")]),a._v(" "),t("h4",{attrs:{id:"_3-5-1-方法区和永久代的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1-方法区和永久代的关系"}},[a._v("#")]),a._v(" 3.5.1 方法区和永久代的关系")]),a._v(" "),t("blockquote",[t("p",[a._v("《Java 虚拟机规范》只是规定了有方法区这么个概念和它的作用，并没有规定如何去实现它。那么，在不同的 JVM 上方法区的实现肯定是不同的了。 "),t("strong",[a._v("方法区和永久代的关系很像 Java 中接口和类的关系，类实现了接口，而永久代就是 HotSpot 虚拟机对虚拟机规范中方法区的一种实现方式。")]),a._v(" 也就是说，永久代是 HotSpot 的概念，方法区是 Java 虚拟机规范中的定义，是一种规范，而永久代是一种实现，一个是标准一个是实现，其他的虚拟机实现并没有永久代这一说法。")])]),a._v(" "),t("h4",{attrs:{id:"_3-5-2-常用参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-2-常用参数"}},[a._v("#")]),a._v(" 3.5.2 常用参数")]),a._v(" "),t("p",[a._v("JDK 1.8 之前永久代还没被彻底移除的时候通常通过下面这些参数来调节方法区大小")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:PermSize=N //方法区 (永久代) 初始大小\n-XX:MaxPermSize=N //方法区 (永久代) 最大大小,超过这个值将会抛出 OutOfMemoryError 异常:java.lang.OutOfMemoryError: PermGen\n")])])]),t("p",[a._v("相对而言，垃圾收集行为在这个区域是比较少出现的，但并非数据进入方法区后就“永久存在”了。")]),a._v(" "),t("p",[a._v("JDK 1.8 的时候，方法区（HotSpot 的永久代）被彻底移除了（JDK1.7 就已经开始了），取而代之是元空间，元空间使用的是直接内存。")]),a._v(" "),t("p",[a._v("下面是一些常用参数：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-XX:MetaspaceSize=N //设置 Metaspace 的初始（和最小大小）\n-XX:MaxMetaspaceSize=N //设置 Metaspace 的最大大小\n")])])]),t("p",[a._v("与永久代很大的不同就是，如果不指定大小的话，随着更多类的创建，虚拟机会耗尽所有可用的系统内存。")]),a._v(" "),t("h4",{attrs:{id:"_3-5-3-为什么要将永久代-permgen-替换为元空间-metaspace-呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-为什么要将永久代-permgen-替换为元空间-metaspace-呢"}},[a._v("#")]),a._v(" 3.5.3 为什么要将永久代 (PermGen) 替换为元空间 (MetaSpace) 呢?")]),a._v(" "),t("p",[t("strong",[a._v("整个永久代有一个 JVM 本身设置固定大小上线，无法调整，而元空间使用直接内存，受本机可用内存的限制")]),a._v("，并且永远不会得到 java.lang.OutOfMemoryError。你可以使用 "),t("code",[a._v("-XX：MaxMetaspaceSize")]),a._v(" 标志设置最大元空间大小，默认值为 unlimited，这意味着它只受系统内存的限制。"),t("code",[a._v("-XX：MetaspaceSize")]),a._v(" 调整标志定义元空间的初始大小如果未指定此标志，则 Metaspace 将根据运行时的应用程序需求动态地重新调整大小。")]),a._v(" "),t("h3",{attrs:{id:"_3-6-运行时常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-运行时常量池"}},[a._v("#")]),a._v(" 3.6 运行时常量池")]),a._v(" "),t("p",[a._v("运行时常量池是方法区的一部分。Class 文件中除了有类的版本、字段、方法、接口等描述信息外，还有常量池信息（用于存放编译期生成的各种字面量和符号引用）")]),a._v(" "),t("p",[a._v("既然运行时常量池是方法区的一部分，自然受到方法区内存的限制，当常量池无法再申请到内存时会抛出 OutOfMemoryError 异常。")]),a._v(" "),t("p",[t("strong",[a._v("JDK1.7 及之后版本的 JVM 已经将运行时常量池从方法区中移了出来，在 Java 堆（Heap）中开辟了一块区域存放运行时常量池。")])]),a._v(" "),t("p",[t("img",{attrs:{src:_(409),alt:"image-20190924003048984"}})]),a._v(" "),t("h3",{attrs:{id:"_3-7-直接内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-直接内存"}},[a._v("#")]),a._v(" 3.7 直接内存")]),a._v(" "),t("p",[t("strong",[a._v("直接内存并不是虚拟机运行时数据区的一部分，也不是虚拟机规范中定义的内存区域，但是这部分内存也被频繁地使用。而且也可能导致 OutOfMemoryError 异常出现。")])]),a._v(" "),t("p",[a._v("JDK1.4 中新加入的 "),t("strong",[a._v("NIO(New Input/Output) 类")]),a._v("，引入了一种基于"),t("strong",[a._v("通道（Channel）")]),a._v(" 与"),t("strong",[a._v("缓存区（Buffer）")]),a._v(" 的 I/O 方式，它可以直接使用 Native 函数库直接分配堆外内存，然后通过一个存储在 Java 堆中的 DirectByteBuffer 对象作为这块内存的引用进行操作。这样就能在一些场景中显著提高性能，因为"),t("strong",[a._v("避免了在 Java 堆和 Native 堆之间来回复制数据")]),a._v("。")]),a._v(" "),t("p",[a._v("本机直接内存的分配不会受到 Java 堆的限制，但是，既然是内存就会受到本机总内存大小以及处理器寻址空间的限制。")])])}),[],!1,null,null,null);v.default=r.exports},406:function(a,v,_){a.exports=_.p+"assets/img/image-20190923234434594.7819e999.png"},407:function(a,v,_){a.exports=_.p+"assets/img/image-20190923235103550.bb8e2b01.png"},408:function(a,v,_){a.exports=_.p+"assets/img/image-20190924001743226.82acea10.png"},409:function(a,v,_){a.exports=_.p+"assets/img/image-20190924003048984.f857bd27.png"}}]);