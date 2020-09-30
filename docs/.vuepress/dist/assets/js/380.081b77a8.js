(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1173:function(t,e,r){"use strict";r.r(e);var a=r(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"运行时值的注入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行时值的注入"}},[t._v("#")]),t._v(" 运行时值的注入")]),t._v(" "),r("p",[t._v("Spring提供了两种在运行时求值的方法")]),t._v(" "),r("ul",[r("li",[t._v("属性占位符（Property placeholder）")]),t._v(" "),r("li",[t._v("Spring表达式语言(SpEL)")])]),t._v(" "),r("h2",{attrs:{id:"属性占位符-property-placeholder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#属性占位符-property-placeholder"}},[t._v("#")]),t._v(" 属性占位符（Property placeholder）")]),t._v(" "),r("h4",{attrs:{id:"_1-使用environment来检索属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用environment来检索属性"}},[t._v("#")]),t._v(" 1.使用Environment来检索属性")]),t._v(" "),r("p",[t._v("声明属性源并通过Spring的Enviroment来检索属性")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('@Configuration\n@PropertSource("classpath:/com/app.properties")\npublic class ExpressConfig{\n    @Autowired\n    Environment env;\n   \n    @Bean\n    public BlankDisc disc(){\n        return new BlankDisc(\n        env.getPropert("disc.title")\n        )\n    }\n}\n')])])]),r("h4",{attrs:{id:"_2-解析属性占位符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-解析属性占位符"}},[t._v("#")]),t._v(" 2.解析属性占位符")]),t._v(" "),r("p",[t._v("占位符使用${...}包装属性名称")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('@Value("${disc.title}" String title)\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);