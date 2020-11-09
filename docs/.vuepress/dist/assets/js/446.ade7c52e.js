(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1002:function(t,a,_){"use strict";_.r(a);var s=_(42),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"存储过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储过程"}},[t._v("#")]),t._v(" 存储过程")]),t._v(" "),_("h2",{attrs:{id:"_1-背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),_("p",[t._v("我们大多数SQL语句都是针对一个或多个表的单条语句，但是并非所有表都这么简单。")]),t._v(" "),_("p",[t._v("经常"),_("strong",[t._v("会有一些复杂的操作需要多条语句才能完成")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("执行这个处理需要针对许多表的多条sql语句")])]),t._v(" "),_("li",[_("p",[t._v("需要执行的具体sql语句及其次序也不是固定的(例如;可能会根据物品的库存而变化)")])])]),t._v(" "),_("h3",{attrs:{id:"_1-1-解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-解决方案"}},[t._v("#")]),t._v(" 1.1 解决方案")]),t._v(" "),_("p",[t._v("单独编写每条SQL语句，并根据结果又条件得执行其他语句")]),t._v(" "),_("h2",{attrs:{id:"_2-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-是什么"}},[t._v("#")]),t._v(" 2. 是什么")]),t._v(" "),_("p",[t._v("存储过程就是为以后使用而保存的一条或多条SQL,可以将他视为批文件，虽然作用不仅仅是批文件")]),t._v(" "),_("blockquote",[_("p",[t._v("MySQL 5 之后才支持存储过程")]),t._v(" "),_("p",[t._v("SQLite不支持存储过程")])]),t._v(" "),_("h2",{attrs:{id:"_3-为什么使用存储过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么使用存储过程"}},[t._v("#")]),t._v(" 3. 为什么使用存储过程")]),t._v(" "),_("ul",[_("li",[t._v("通过把处理封装在一个易用的单元中，可以简化复杂操作")]),t._v(" "),_("li",[t._v("由于不要求反复建立一系列的处理不走，因而保证了数据的一致性。如果所有开发人员和应用程序都使用同一存储过后才能，则所使用的"),_("strong",[t._v("代码都是相同")]),t._v("的，这一点的延伸就是"),_("strong",[t._v("防止错误")]),t._v("。需要执行的步骤越多，出错的可能性就越大")]),t._v(" "),_("li",[t._v("简化对变动的管理")]),t._v(" "),_("li",[t._v("因为存储过程通常以编译过的形式存储，所以工作量少，提高了"),_("strong",[t._v("性能")])])]),t._v(" "),_("p",[t._v("简化来说：简单，安全、高性能")]),t._v(" "),_("h3",{attrs:{id:"_3-1-缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-缺点"}},[t._v("#")]),t._v(" 3.1 缺点")]),t._v(" "),_("ul",[_("li",[t._v("不同DBMS 中存储过程语法不同")]),t._v(" "),_("li",[t._v("编写存储过程比编写基本SQL语句复杂，需要更高的技能，更丰富的经验")])]),t._v(" "),_("h2",{attrs:{id:"_4-创建存储过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建存储过程"}},[t._v("#")]),t._v(" 4. 创建存储过程")]),t._v(" "),_("p",[t._v("对邮件发送清单中具有邮件地址的顾客进行计算")]),t._v(" "),_("h3",{attrs:{id:"_4-1-oracle"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-oracle"}},[t._v("#")]),t._v(" 4.1 ORACLE")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("CREATE PROCEDURE MailinglistCount(\n\tListCount OUT INTEGER)\nIS\nv_rows INTEGER\nBEGIN \n\tSELECT COUNT(*) INTO v_rows\n\tFROM CUSTOMERS\n\twHERE NOT cust_email IS NOLL\n\tListCount := v_rows;\nEND;\n")])])]),_("ul",[_("li",[_("p",[t._v("这个存储过程有一个ListCount 的参数。")]),t._v(" "),_("p",[t._v("此参数从存储过程返回一个值，而不是传递一个值给存储过程")])]),t._v(" "),_("li",[_("p",[t._v("关键字OUT用来表示行为")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("IN 传递值给存储过程")])]),t._v(" "),_("li",[_("p",[t._v("OUT 从存储过程返回值")])]),t._v(" "),_("li",[_("p",[t._v("INOUT 既传值给存储过程，也从存储过程返回值")])])])]),t._v(" "),_("li",[_("p",[t._v("存储过程的代码在BEGIN 和END 语句中")])])]),t._v(" "),_("h4",{attrs:{id:"_4-1-1-调用方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-调用方式"}},[t._v("#")]),t._v(" 4.1.1 调用方式")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("var ReturnValue NUMBER \nEXEC MaillingListCount(:ReturnValue);\nSELECT returnValue;\n")])])]),_("p",[t._v("这段代码声明一个变量来保存存储过程返回的任何值，然后执行存储过程，在使用SELECT 语句显示返回的值")]),t._v(" "),_("h2",{attrs:{id:"_5-执行存储过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-执行存储过程"}},[t._v("#")]),t._v(" 5.执行存储过程")]),t._v(" "),_("p",[t._v("执行存储过程，既EXECUTE")]),t._v(" "),_("p",[t._v("EXECUTE 接受存储过程名和需要传递给他的任何参数")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("EXECUTE AddNewProduct('jts01',\n\t\t\t\t\t  'stuffed eiffel',\n\t\t\t\t\t  6.49);\n")])])]),_("p",[t._v("这里执行一个名为AddNewProduct的存储过程，将一个新产品添加到Product表中")])])}),[],!1,null,null,null);a.default=v.exports}}]);