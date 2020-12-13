(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{1135:function(t,_,v){"use strict";v.r(_);var e=v(42),d=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"set集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#set集合"}},[t._v("#")]),t._v(" Set集合")]),t._v(" "),v("p",[t._v("redis 的集合和列表")]),t._v(" "),v("ul",[v("li",[t._v("共同点\n"),v("ol",[v("li",[t._v("都可以存储多个字符串")])])]),t._v(" "),v("li",[t._v("不同点\n"),v("ol",[v("li",[t._v("列表可以存储多个相同的字符串，而集合则通过使用散列表来保证自己存储的每个字符串各不相同")])])])]),t._v(" "),v("p",[t._v("redis集合使用无序（unordered）方式存储元素，所以用户")]),t._v(" "),v("h2",{attrs:{id:"_1-操作命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作命令"}},[t._v("#")]),t._v(" 1.操作命令")]),t._v(" "),v("h3",{attrs:{id:"_1-1-基本命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基本命令"}},[t._v("#")]),t._v(" 1.1 基本命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("行为")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("SADD")]),t._v(" "),v("td",[t._v("SADD key-name item [item...]")]),t._v(" "),v("td",[t._v("将一个或多个元素添加到集合里面，并返回被添加元素当中原本并不存储于集合里面的元素数量")])]),t._v(" "),v("tr",[v("td",[t._v("SREM")]),t._v(" "),v("td",[t._v("SREM key-name item [item ...]")]),t._v(" "),v("td",[t._v("从集合里面移除一个或多个元素，并返回被移除元素的数量")])]),t._v(" "),v("tr",[v("td",[t._v("SISMEMBER")]),t._v(" "),v("td",[t._v("SISMEMBER key-name item")]),t._v(" "),v("td",[t._v("检查元素item 是否存在与集合key-name里")])]),t._v(" "),v("tr",[v("td",[t._v("SISMEMBER")]),t._v(" "),v("td",[t._v("SCARD key-name")]),t._v(" "),v("td",[t._v("返回集合包含元素的数量")])]),t._v(" "),v("tr",[v("td",[t._v("SMEMBERS")]),t._v(" "),v("td",[t._v("SMEMBERS key-name")]),t._v(" "),v("td",[t._v("返回集合包含的所有元素")])]),t._v(" "),v("tr",[v("td",[t._v("SRANDMEMBER")]),t._v(" "),v("td",[t._v("SRANDMEMBER  key-name [count]")]),t._v(" "),v("td",[t._v("从集合里面随机地返回一个或多个元素。当count为正数时，命令返回的随机元素不会重复，当count为负数时，命令返回的随机元素可能出现重复")])]),t._v(" "),v("tr",[v("td",[t._v("SPOP")]),t._v(" "),v("td",[t._v("SPOP key-name")]),t._v(" "),v("td",[t._v("随机地移除集合中的一个元素，并返回被移除的元素")])]),t._v(" "),v("tr",[v("td",[t._v("SMOVE")]),t._v(" "),v("td",[t._v("SMOVE source-key dest-key item")]),t._v(" "),v("td",[t._v("如果集合source-key包含元素item，那么从集合source-key里面移除元素item，并将元素item添加到集合dest-keyzhong 。如果成功移除返回1，否则返回0")])]),t._v(" "),v("tr",[v("td",[t._v("SINTER")]),t._v(" "),v("td",[t._v("交集计算")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("SINTER")]),t._v(" "),v("td",[t._v("交集计算")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"_1-2-处理多个集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-处理多个集合"}},[t._v("#")]),t._v(" 1.2 处理多个集合")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("用例")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("SDIFF")]),t._v(" "),v("td",[t._v("SDIFF key-name [key-name ...]")]),t._v(" "),v("td",[t._v("返回那些存在于第一个集合，但不存在于其他集合中的元素（差集运算）")])]),t._v(" "),v("tr",[v("td",[t._v("SDIFFSTORE")]),t._v(" "),v("td",[t._v("SDIFFSTORE dest-key key-name [key-name ...]")]),t._v(" "),v("td",[t._v("将那些存在与第一个集合但并不存在与其他集合中的元素（差集）存储到dest-key 键里面")])]),t._v(" "),v("tr",[v("td",[t._v("SINTER")]),t._v(" "),v("td",[t._v("SINTER key-name [key-name ...]")]),t._v(" "),v("td",[t._v("返回那些同时存在于所有集合中的元（交集运算）")])]),t._v(" "),v("tr",[v("td",[t._v("SINTERSTORE")]),t._v(" "),v("td",[t._v("SINTERSTORE dest-key key-name [key-name ...]")]),t._v(" "),v("td",[t._v("将那些同时存在于所欲集合的元素存储到dest-key键里面")])]),t._v(" "),v("tr",[v("td",[t._v("SUNION")]),t._v(" "),v("td",[t._v("SUNION key-name [key-name ...]")]),t._v(" "),v("td",[t._v("返回那些至少存在于一个集合中的元素（并集运算）")])]),t._v(" "),v("tr",[v("td",[t._v("SUNIONSTORE")]),t._v(" "),v("td",[t._v("SUNIONSTORE dest-key key-name [key-name ...]")]),t._v(" "),v("td",[t._v("将那么至少存在与一个集合中的元素（并集）存储到dest-key键里面")])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);