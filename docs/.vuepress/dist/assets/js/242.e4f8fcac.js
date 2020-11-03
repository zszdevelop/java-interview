(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1144:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oracle函数日期格式转换-to-date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle函数日期格式转换-to-date"}},[t._v("#")]),t._v(" Oracle函数日期格式转换 to_date")]),t._v(" "),a("h2",{attrs:{id:"_1-比较日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-比较日期"}},[t._v("#")]),t._v(" 1. 比较日期")]),t._v(" "),a("p",[t._v("查找出大于指定日期的数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT EMP_NAME, DEPT\nFROM EMPLOYEE\nWHERE TIME_CREATED >= TO_DATE('2020/11/11','yyyy/MM/dd')\n")])])]),a("h2",{attrs:{id:"_1-字符串和时间转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符串和时间转换"}},[t._v("#")]),t._v(" 1. 字符串和时间转换")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2004-05-07 13:23:44'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyy-mm-dd hh24:mi:ss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" to_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'J'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jsp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示Two Hundred Twenty-Two")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-日期和字符转换函数用法-to-date-to-char"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-日期和字符转换函数用法-to-date-to-char"}},[t._v("#")]),t._v(" 2. 日期和字符转换函数用法（to_date,to_char)")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyy-mm-dd hh24:mi:ss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" nowTime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//日期转化为字符串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" nowYear "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取时间的年")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" nowMonth "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取时间的月")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" nowDay "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取时间的日")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hh24'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" nowHour "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取时间的时")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" nowMinute "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取时间的分")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" nowSecond "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取时间的秒")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-求某天是星期几"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-求某天是星期几"}},[t._v("#")]),t._v(" 3. 求某天是星期几")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2002-08-26'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyy-mm-dd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//星期一")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2002-08-26'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NLS_DATE_LANGUAGE = American'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// monday")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置日期语言")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SESSION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" NLS_DATE_LANGUAGE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AMERICAN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//也可以这样")]),t._v("\nTO_DATE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2002-08-26'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-mm-dd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NLS_DATE_LANGUAGE = American'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-两个日期间的天数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-两个日期间的天数"}},[t._v("#")]),t._v(" 4. 两个日期间的天数")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" floor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" to_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20020405'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyymmdd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jb51.cc/oracle/65401.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("oracle中to_date详细用法示例(oracle日期格式转换)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);