(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1136:function(e,t,o){"use strict";o.r(t);var r=o(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"js导出-exports、module-exports-和-export、export-default"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js导出-exports、module-exports-和-export、export-default"}},[e._v("#")]),e._v(" js导出：exports、module.exports 和 export、export default")]),e._v(" "),r("h2",{attrs:{id:"_1-前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[e._v("#")]),e._v(" 1. 前言")]),e._v(" "),r("p",[e._v("js导入导出有多种方式，新手常常被绕得晕头转向")]),e._v(" "),r("p",[e._v("它们的使用范围")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("require")]),e._v(": node 支持的引入")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("module.exports / exports")]),e._v(": 只有 node 支持的导出")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("export / import")]),e._v(" : 只有es6 支持的导出引入`")])])]),e._v(" "),r("blockquote",[r("p",[e._v("我们大部分在vue中使用的是es6 "),r("code",[e._v("export / import")]),e._v(" 的导入导出，")]),e._v(" "),r("p",[e._v("如导出api:")]),e._v(" "),r("p",[e._v("​\tlet api{")]),e._v(" "),r("p",[e._v("​\t\t// 网络请求")]),e._v(" "),r("p",[e._v("​\t}")]),e._v(" "),r("p",[e._v("export default api;")]),e._v(" "),r("p",[e._v("导入：")]),e._v(" "),r("p",[e._v("import api from '../api/myapi';")])]),e._v(" "),r("h2",{attrs:{id:"_2-node模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-node模块"}},[e._v("#")]),e._v(" 2.node模块")]),e._v(" "),r("p",[r("code",[e._v("Node")]),e._v("里面的模块系统遵循的是"),r("code",[e._v("CommonJS")]),e._v("规范。 那问题又来了，什么是"),r("code",[e._v("CommonJS")]),e._v("规范呢？ 由于"),r("code",[e._v("js")]),e._v("以前比较混乱，各写各的代码，没有一个模块的概念，而这个规范出来其实就是对模块的一个定义。")]),e._v(" "),r("blockquote",[r("p",[r("code",[e._v("CommonJS")]),e._v("定义的模块分为: 模块标识("),r("code",[e._v("module")]),e._v(")、模块定义("),r("code",[e._v("exports")]),e._v(") 、模块引用("),r("code",[e._v("require")]),e._v(")")])]),e._v(" "),r("p",[e._v("先解释 "),r("code",[e._v("exports")]),e._v(" 和 "),r("code",[e._v("module.exports")]),e._v(" 在一个node执行一个文件时，会给这个文件内生成一个 "),r("code",[e._v("exports")]),e._v("和"),r("code",[e._v("module")]),e._v("对象， 而"),r("code",[e._v("module")]),e._v("又有一个"),r("code",[e._v("exports")]),e._v("属性。他们之间的关系如下图，都指向一块{}内存区域。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("exports = module.exports = {};\n")])])]),r("p",[r("img",{attrs:{src:o(538),alt:"内存结构示意图"}})]),e._v(" "),r("p",[e._v("那下面我们来看看代码的吧。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//utils.js\nlet a = 100;\nconsole.log(module.exports); //能打印出结果为：{}\nconsole.log(exports); //能打印出结果为：{}\n\nexports.a = 200; //这里辛苦劳作帮 module.exports 的内容给改成 {a : 200}\n\nexports = '指向其他内存区'; //这里把exports的指向指走\n\n//test.js\n\nvar a = require('/utils');\nconsole.log(a) // 打印为 {a : 200} \n\n")])])]),r("blockquote",[r("p",[e._v("从上面可以看出，其实"),r("code",[e._v("require")]),e._v("导出的内容是"),r("code",[e._v("module.exports")]),e._v("的指向的内存块内容，并不是"),r("code",[e._v("exports")]),e._v("的。 简而言之，"),r("strong",[e._v("区分他们之间的区别就是 "),r("code",[e._v("exports")]),e._v(" 只是 "),r("code",[e._v("module.exports")]),e._v("的引用，辅助后者添加内容用的")]),e._v("。")])]),e._v(" "),r("p",[e._v("用白话讲就是，"),r("code",[e._v("exports")]),e._v("只辅助"),r("code",[e._v("module.exports")]),e._v("操作内存中的数据，辛辛苦苦各种操作数据完，累得要死，结果到最后真正被"),r("code",[e._v("require")]),e._v("出去的内容还是"),r("code",[e._v("module.exports")]),e._v("的，真是好苦逼啊。")]),e._v(" "),r("p",[e._v("其实大家用内存块的概念去理解，就会很清楚了。")]),e._v(" "),r("p",[e._v("然后呢，为了避免糊涂，"),r("strong",[e._v("尽量都用 "),r("code",[e._v("module.exports")]),e._v(" 导出，然后用"),r("code",[e._v("require")]),e._v("导入。")])]),e._v(" "),r("h2",{attrs:{id:"_3-es中的模块导出导入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-es中的模块导出导入"}},[e._v("#")]),e._v(" 3. ES中的模块导出导入")]),e._v(" "),r("p",[e._v("在es中的模块，就非常清晰了。不过也有一些细节的东西需要搞清楚。 比如 "),r("code",[e._v("export")]),e._v(" 和 "),r("code",[e._v("export default")]),e._v("，还有 导入的时候，"),r("code",[e._v("import a from ..")]),e._v(","),r("code",[e._v("import {a} from ..")]),e._v("，总之也有点乱，那么下面我们就开始把它们捋清楚吧。")]),e._v(" "),r("h3",{attrs:{id:"_3-1-export-和-export-default"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-export-和-export-default"}},[e._v("#")]),e._v(" 3.1 export 和 export default")]),e._v(" "),r("p",[e._v("首先我们讲这两个导出，下面我们讲讲它们的区别")]),e._v(" "),r("ol",[r("li",[e._v("export与export default均可用于导出常量、函数、文件、模块等")]),e._v(" "),r("li",[e._v("在一个文件或模块中，export、import可以有多个，export default仅有一个")]),e._v(" "),r("li",[e._v("通过export方式导出，在导入时要加{ }，export default则不需要")]),e._v(" "),r("li",[e._v("export能直接导出变量表达式，export default不行。")])]),e._v(" "),r("p",[e._v("下面咱们看看代码去验证一下")]),e._v(" "),r("h3",{attrs:{id:"_3-2-es6导出验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-es6导出验证"}},[e._v("#")]),e._v(" 3.2 ES6导出验证")]),e._v(" "),r("h4",{attrs:{id:"testes6export-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testes6export-js"}},[e._v("#")]),e._v(" testEs6Export.js")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("'use strict'\n//导出变量\nexport const a = '100';  \n\n //导出方法\nexport const dogSay = function(){ \n    console.log('wang wang');\n}\n\n //导出方法第二种\nfunction catSay(){\n   console.log('miao miao'); \n}\nexport { catSay };\n\n//export default导出\nconst m = 100;\nexport default m; \n//export defult const m = 100;// 这里不能写这种格式。\n")])])]),r("h3",{attrs:{id:"_3-3-es6导入验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-es6导入验证"}},[e._v("#")]),e._v(" 3.3 ES6导入验证")]),e._v(" "),r("h4",{attrs:{id:"index-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#index-js"}},[e._v("#")]),e._v(" index.js")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//index.js\n'use strict'\nvar express = require('express');\nvar router = express.Router();\n\nimport { dogSay, catSay } from './testEs6Export'; //导出了 export 方法 \nimport m from './testEs6Export';  //导出了 export default \n\nimport * as testModule from './testEs6Export';//as 集合成对象导出\n\n\n\n/* GET home page. */\nrouter.get('/', function(req, res, next) {\n  dogSay();\n  catSay();\n  console.log(m);\n  testModule.dogSay();\n  console.log(testModule.m); // undefined , 因为  as 导出是 把 零散的 export 聚集在一起作为一个对象，而export default 是导出为 default属性。\n  console.log(testModule.default); // 100\n  res.send('恭喜你，成功验证');\n});\n\nmodule.exports = router;\n\n")])])]),r("p",[e._v("从上面可以看出，确实感觉 "),r("code",[e._v("ES6")]),e._v("的模块系统非常灵活的。")]),e._v(" "),r("h2",{attrs:{id:"参考文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/6844903489257095181",target:"_blank",rel:"noopener noreferrer"}},[e._v("exports、module.exports 和 export、export default 到底是咋回事"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports},538:function(e,t){e.exports="data:image/jpeg;base64,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"}}]);