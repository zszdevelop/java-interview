(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1148:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"spring-aop实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop实现原理"}},[t._v("#")]),t._v(" Spring AOP实现原理")]),t._v(" "),n("h2",{attrs:{id:"_1-代理模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-代理模式"}},[t._v("#")]),t._v(" 1. 代理模式")]),t._v(" "),n("p",[t._v("代理模式UML 类图如下")]),t._v(" "),n("p",[n("img",{attrs:{src:s(513),alt:"image-20191011005747639"}})]),t._v(" "),n("blockquote",[n("p",[t._v("类图中虚线箭头表示接口实现")]),t._v(" "),n("p",[t._v("菱形和箭头表示组合")]),t._v(" "),n("p",[t._v("具体参考"),n("RouterLink",{attrs:{to:"/dependencies/spring/aop/cs/uml/"}},[t._v("uml类图")])],1)]),t._v(" "),n("p",[t._v("代理类实现了被代理类的接口，同时与被代理类是组合关系。下面看一下代理模式的实现")]),t._v(" "),n("h2",{attrs:{id:"_2-静态代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-静态代理"}},[t._v("#")]),t._v(" 2. 静态代理")]),t._v(" "),n("p",[t._v("接口类：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("interface Person {\n    void speak();\n}\n")])])]),n("p",[t._v("真实实体类：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Actor implements Person {\n    private String content;\n    public Actor(String content) {\n        this.content = content;\n    }\n\n    @Override\n    public void speak() {\n        System.out.println(this.content);\n    }\n}\n")])])]),n("p",[t._v("代理类：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('class Agent implements Person {\n    private Actor actor;\n    private String before;\n    private String after;\n    public Agent(Actor actor, String before, String after) {\n        this.actor = actor;\n        this.before = before;\n        this.after = after;\n    }\n    @Override\n    public void speak() {\n        //before speak\n        System.out.println("Before actor speak, Agent say: " + before);\n        //real speak\n        this.actor.speak();\n        //after speak\n        System.out.println("After actor speak, Agent say: " + after);\n    }\n}\n')])])]),n("p",[t._v("测试方法:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public class StaticProxy {\n    public static void main(String[] args) {\n        Actor actor = new Actor("I am a famous actor!");\n        Agent agent = new Agent(actor, "Hello I am an agent.", "That\'s all!");\n        agent.speak();\n    }\n}\n')])])]),n("p",[t._v("结果：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(514),alt:"image-20191011010421666"}})]),t._v(" "),n("h2",{attrs:{id:"_3-动态代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-动态代理"}},[t._v("#")]),t._v(" 3.动态代理")]),t._v(" "),n("h3",{attrs:{id:"_3-1-jdk自带方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-jdk自带方法"}},[t._v("#")]),t._v(" 3.1 JDK自带方法")]),t._v(" "),n("h4",{attrs:{id:"_3-1-1-invocationhandler接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-invocationhandler接口"}},[t._v("#")]),t._v(" 3.1.1 InvocationHandler接口")]),t._v(" "),n("p",[t._v("InvocationHandler接口是最核心的接口")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public interface InvocationHandler {\n    public Object invoke(Object proxy, Method method, Object[] args)\n        throws Throwable;\n}\n")])])]),n("p",[t._v("我们对于被代理的类的操作都会由该接口中的invoke方法实现，其中的参数的含义分别是：")]),t._v(" "),n("ul",[n("li",[t._v("proxy：被代理的类的实例")]),t._v(" "),n("li",[t._v("method：调用被代理的类的方法")]),t._v(" "),n("li",[t._v("args：该方法需要的参数")])]),t._v(" "),n("p",[n("strong",[t._v("使用方法")])]),t._v(" "),n("p",[t._v("使用方法首先是需要实现该接口，并且我们可以在invoke方法中调用被代理类的方法并获得返回值，自然也可以在调用该方法的前后去做一些额外的事情，从而实现动态代理")]),t._v(" "),n("h4",{attrs:{id:"_3-1-2-proxy类的newproxyinstance方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-proxy类的newproxyinstance方法"}},[t._v("#")]),t._v(" 3.1.2 Proxy类的newProxyInstance方法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public static Object newProxyInstance(ClassLoader loader,\n                                      Class<?>[] interfaces,\n                                      InvocationHandler h)\n    throws IllegalArgumentException\n")])])]),n("p",[t._v("其中的参数含义如下：")]),t._v(" "),n("ul",[n("li",[t._v("loader：被代理的类的类加载器")]),t._v(" "),n("li",[t._v("interfaces：被代理类的接口数组")]),t._v(" "),n("li",[t._v("invocationHandler：就是刚刚介绍的调用处理器类的对象实例")])]),t._v(" "),n("p",[t._v("该方法会返回一个被修改过的类的实例，从而可以自由的调用该实例的方法。下面是一个实际例子。")]),t._v(" "),n("h4",{attrs:{id:"_3-1-3-jdk自动代理实际例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-jdk自动代理实际例子"}},[t._v("#")]),t._v(" 3.1.3 JDK自动代理实际例子")]),t._v(" "),n("p",[t._v("Fruit接口：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public interface Fruit {\n    public void show();\n}\n")])])]),n("p",[t._v("Apple实现Fruit接口：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public class Apple implements Fruit{\n    @Override\n    public void show() {\n        System.out.println("<<<<show method is invoked");\n    }\n}\n')])])]),n("p",[t._v("代理类Agent.java：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public class DynamicAgent {\n\n    //实现InvocationHandler接口，并且可以初始化被代理类的对象\n    static class MyHandler implements InvocationHandler {\n        private Object proxy;\n        public MyHandler(Object proxy) {\n            this.proxy = proxy;\n        }\n            \n        //自定义invoke方法\n        @Override\n        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n            System.out.println(">>>>before invoking");\n            //真正调用方法的地方\n            Object ret = method.invoke(this.proxy, args);\n            System.out.println(">>>>after invoking");\n            return ret;\n        }\n    }\n\n    //返回一个被修改过的对象\n    public static Object agent(Class interfaceClazz, Object proxy) {\n        return Proxy.newProxyInstance(interfaceClazz.getClassLoader(), new Class[]{interfaceClazz},\n                new MyHandler(proxy));\n    }    \n}\n')])])]),n("p",[t._v("测试类：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public class ReflectTest {\n    public static void main(String[] args) throws InvocationTargetException, IllegalAccessException {\n        //注意一定要返回接口，不能返回实现类否则会报错\n        Fruit fruit = (Fruit) DynamicAgent.agent(Fruit.class, new Apple());\n        fruit.show();\n    }\n}\n")])])]),n("p",[t._v("结果：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(515),alt:"image-20191011011313856"}})]),t._v(" "),n("p",[t._v("可以看到对于不同的实现类来说，可以用同一个动态代理类来进行代理，实现了“一次编写到处代理”的效果。但是这种方法有个缺点，就是被代理的类一定要是实现了某个接口的，这很大程度限制了本方法的使用场景。下面还有另外一个使用了CGlib增强库的方法。")]),t._v(" "),n("h3",{attrs:{id:"_3-2-cglib-库的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-cglib-库的方法"}},[t._v("#")]),t._v(" 3.2 CGLIB 库的方法")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/cglib/cglib",target:"_blank",rel:"noopener noreferrer"}},[t._v("CGlib"),n("OutboundLink")],1),t._v("是一个字节码增强库，为AOP等提供了底层支持。下面看看它是怎么实现动态代理的。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zszdevelop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aopdemo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("case2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Apple")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cglib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Enhancer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cglib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MethodInterceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cglib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MethodProxy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reflect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author zhangshengzhong\n * @date 2019/10/11\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CGlibAgent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MethodInterceptor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Enhancer")]),t._v(" enhancer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Enhancer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        enhancer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSuperclass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回调方法")]),t._v("\n        enhancer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建代理对象")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" enhancer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//回调方法")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("intercept")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MethodProxy")]),t._v(" methodProxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('">>>>before invoking"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//真正调用")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" methodProxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeSuper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('">>>>after invoking"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CGlibAgent")]),t._v(" cGlibAgent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CGlibAgent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Apple")]),t._v(" apple "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Apple")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" cGlibAgent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Apple")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        apple"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(516),alt:"image-20191011011509222"}})]),t._v(" "),n("p",[t._v("可以看到结果和JDK动态代理是一样的，但是可以直接对实现类进行操作而非接口，这样会有很大的便利。")]),t._v(" "),n("h3",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/puyangsky/p/6218925.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring AOP实现原理"),n("OutboundLink")],1),t._v("spring/aop/SpringAOP实现原理.md")])])}),[],!1,null,null,null);a.default=e.exports},513:function(t,a,s){t.exports=s.p+"assets/img/image-20191011005747639.0878a180.png"},514:function(t,a,s){t.exports=s.p+"assets/img/image-20191011010421666.32e0978b.png"},515:function(t,a,s){t.exports=s.p+"assets/img/image-20191011011313856.eb1c4701.png"},516:function(t,a,s){t.exports=s.p+"assets/img/image-20191011011509222.e8d3654f.png"}}]);