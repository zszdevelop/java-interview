(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{1086:function(t,s,a){"use strict";a.r(s);var e=a(42),_=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"insert插入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert插入数据"}},[t._v("#")]),t._v(" INSERT插入数据")]),t._v(" "),a("p",[t._v("INSERT 用来将行插入（或添加）到数据库表")]),t._v(" "),a("h2",{attrs:{id:"_2-插入的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-插入的几种方式"}},[t._v("#")]),t._v(" 2. 插入的几种方式")]),t._v(" "),a("h3",{attrs:{id:"_2-1-插入完整的行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-插入完整的行"}},[t._v("#")]),t._v(" 2.1 插入完整的行")]),t._v(" "),a("p",[t._v("要求指定表名和插入到新行中的值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO Customers\nVALUES ('1000006',\n\t\t'tom',\n\t\t'1234',\n\t\t'NYU',\n\t\tNULL\n)\n")])])]),a("ul",[a("li",[a("p",[t._v("存储到表中每一列的数据在VALUES子句中给出，必须给每一列提供一个值，")])]),t._v(" "),a("li",[a("p",[t._v("如果列没有值，应该使用NULL值（假定表允许控制）")])]),t._v(" "),a("li",[a("p",[t._v("各列必须以表定义中"),a("strong",[t._v("出现的次序填充")])])])]),t._v(" "),a("p",[t._v("这种方式面临的问题")]),t._v(" "),a("p",[t._v("虽然语法简单，但并不安全，应该尽量避免使用·")]),t._v(" "),a("h4",{attrs:{id:"_2-1-1-更安全的写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-更安全的写法"}},[t._v("#")]),t._v(" 2.1.1 更安全的写法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO Customers(cust_id,\n\t\t\t\t\t  cust_name,\n\t\t\t\t\t  cust_address,\n\t\t\t\t\t  cust_city)\nVALUES('1000006',\n\t\t'TOM',\n\t\t'123 ADY',\n\t\t'SHANG HAI'\n)\n")])])]),a("p",[t._v("因为提供了列名，VALUES 必须以其指定的次序匹配指定的列名，不一定按各列出现在表中实际次序")]),t._v(" "),a("p",[t._v("优点：即使表结构改变，这条INSERT 语句仍然能正常工作")]),t._v(" "),a("h3",{attrs:{id:"_2-2-插入某些查询的结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-插入某些查询的结果"}},[t._v("#")]),t._v(" 2.2 插入某些查询的结果")]),t._v(" "),a("p",[t._v("INSERT SELECT: 利用SELECT 的结果插入表中，他是由INSERT 和一条SELECT语句组成")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 把顾客列合并到Customers中\nINSERT INTO Customers(cust_id,\n\t\t\t\t\t  cust_contact,\n\t\t\t\t\t  cust_email,\n\t\t\t\t\t  cust_name)\nSELECT cust_id,\n\t   cust_contact,\n\t   cust_email,\n\t   cust_name\nFROM CustNew;\n\n")])])]),a("h4",{attrs:{id:"_2-2-1-插入多行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-插入多行"}},[t._v("#")]),t._v(" 2.2.1 插入多行")]),t._v(" "),a("p",[t._v("INSERT 通常只插入一行，要插入多行，必须执行多个INSERT 语句，")]),t._v(" "),a("p",[t._v("但是INSERT SELECT 是个例外，他可由用一条INSERT 插入多行，不管select 返回多少行，都将被insert 插入")]),t._v(" "),a("h2",{attrs:{id:"_3-从一个表复制到另一个表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-从一个表复制到另一个表"}},[t._v("#")]),t._v(" 3.从一个表复制到另一个表")]),t._v(" "),a("p",[t._v("有一种数据插入不使用 INSERT 语句。要将一个表的内容复制到一个新的表（运行中创建的表），可以使用"),a("strong",[t._v("SELECT INTO 语句")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT *\nINTO CustCopy\nFROM Customers;\n")])])]),a("p",[t._v("在MYSQL,ORACLE,SQLITE 中的语法稍有不同")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CREATE TABLE CustCopy AS\nSELECT * FROM Customersl\n")])])]),a("h3",{attrs:{id:"_3-1-select-into-与-insert-select区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-select-into-与-insert-select区别"}},[t._v("#")]),t._v(" 3.1 SELECT INTO 与 INSERT SELECT区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("INSET SELECT")]),t._v(" "),a("p",[t._v("将数据添加到一个已经存在的表（插入数据）")])]),t._v(" "),a("li",[a("p",[t._v("SELECT INTO")]),t._v(" "),a("p",[t._v("将数据复制到一个新表（导出数据）")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);