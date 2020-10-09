(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{991:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"select检索数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select检索数据"}},[a._v("#")]),a._v(" SELECT检索数据")]),a._v(" "),s("h2",{attrs:{id:"_1-select-查询数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-select-查询数据"}},[a._v("#")]),a._v(" 1. SELECT 查询数据")]),a._v(" "),s("p",[a._v("使用SELECT 检索数据，必须至少给出两条信息")]),a._v(" "),s("ul",[s("li",[a._v("想选择什么")]),a._v(" "),s("li",[a._v("从什么地方选择")])]),a._v(" "),s("h3",{attrs:{id:"_1-1-检索单个列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-检索单个列"}},[a._v("#")]),a._v(" 1.1 检索单个列")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT prod_name \nFROM products;\n")])])]),s("h3",{attrs:{id:"_1-2-检索多个列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-检索多个列"}},[a._v("#")]),a._v(" 1.2 检索多个列")]),a._v(" "),s("p",[a._v("多个列名用逗号隔开")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT prod_id,prod_name \nFROM products;\n")])])]),s("h3",{attrs:{id:"_1-3-检索所有列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-检索所有列"}},[a._v("#")]),a._v(" 1.3 检索所有列")]),a._v(" "),s("p",[a._v("通配符（*），返回所有的列")]),a._v(" "),s("p",[s("em",[s("em",[a._v("通常不用")]),a._v("，因为会降低检索和应用程序性能")]),a._v("*")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT * \nFROM products;\n")])])]),s("h3",{attrs:{id:"_1-4-检索不同的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-检索不同的值"}},[a._v("#")]),a._v(" 1.4 检索不同的值")]),a._v(" "),s("p",[a._v("DISTINCT关键字，指示数据库只返回不同的值")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT DISTINCT vend_id \nFROM products;\n")])])]),s("h3",{attrs:{id:"_1-5-限制结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-限制结果"}},[a._v("#")]),a._v(" 1.5 限制结果")]),a._v(" "),s("p",[a._v("每个数据库都不一致，例如选取前5条")]),a._v(" "),s("h4",{attrs:{id:"_1-5-1-oracle下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-oracle下"}},[a._v("#")]),a._v(" 1.5.1 ORACLE下")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT prod_name \nFROM products \nWHERE ROWNUM <=5;\n")])])]),s("h4",{attrs:{id:"_1-5-2-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-mysql"}},[a._v("#")]),a._v(" 1.5.2 MYSQL")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT prod_name \nFROM products \nLIMIT 5;\n")])])]),s("p",[a._v("如果要得到"),s("strong",[a._v("后面5行数据")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT prod_name \nFROM products\nLIMIT 3  OFFSET 4;\n")])])]),s("p",[a._v("LIMIT 3  OFFSET 4; 表示从第4行起的3行数据，")]),a._v(" "),s("ul",[s("li",[a._v("第一个数字是检索的行数")]),a._v(" "),s("li",[a._v("第二个数字是指从哪儿开始")])]),a._v(" "),s("p",[s("strong",[a._v("简化")])]),a._v(" "),s("p",[a._v("LIMIT 4  OFFSET 3 简化成 LIMIT 3,4;")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT prod_name \nFROM products \nLIMIT 3,4;\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);