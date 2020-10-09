(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1090:function(t,e,a){"use strict";a.r(e);var l=a(42),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb入门"}},[t._v("#")]),t._v(" MongoDB入门")]),t._v(" "),a("h2",{attrs:{id:"_1-数据库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库操作"}},[t._v("#")]),t._v(" 1. 数据库操作")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建数据库，使用"),a("code",[t._v("use")]),t._v("命令去创建数据库，当插入第一条数据时会创建数据库，例如创建一个"),a("code",[t._v("test")]),t._v("数据库；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> use test\nswitched to db test\n> db.article.insert({name:"测试 MongoDB"})\nWriteResult({ "nInserted" : 1 })\n> show dbs\nadmin   0.000GB\nconfig  0.000GB\nlocal   0.000GB\ntest    0.000GB\n')])])])]),t._v(" "),a("li",[a("p",[t._v("删除数据库，使用db对象中的"),a("code",[t._v("dropDatabase()")]),t._v("方法来删除；（只删除use 选择的，而非所有）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> db.dropDatabase()\n{ "dropped" : "test", "ok" : 1 }\n> show dbs\nadmin   0.000GB\nconfig  0.000GB\nlocal   0.000GB\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-集合操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-集合操作"}},[t._v("#")]),t._v(" 2. 集合操作")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建集合，使用db对象中的"),a("code",[t._v("createCollection()")]),t._v("方法来创建集合，例如创建一个"),a("code",[t._v("article")]),t._v("集合；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> use test\nswitched to db test\n> db.createCollection("myCollection")\n{ "ok" : 1 }\n> show collections\narticle\nmyCollection\n')])])])]),t._v(" "),a("li",[a("p",[t._v("删除集合，使用collection对象的"),a("code",[t._v("drop()")]),t._v("方法来删除集合，例如删除一个"),a("code",[t._v("article")]),t._v("集合；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> db.myCollection.drop()\ntrue\n> show collections\narticle\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_3-文档操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-文档操作"}},[t._v("#")]),t._v(" 3. 文档操作")]),t._v(" "),a("h3",{attrs:{id:"_3-1-插入文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-插入文档"}},[t._v("#")]),t._v(" 3.1 插入文档")]),t._v(" "),a("ul",[a("li",[t._v("MongoDB通过collection对象的"),a("code",[t._v("insert()")]),t._v("方法向集合中插入文档，"),a("strong",[t._v("语法如下")]),t._v("；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.insert(document)\n")])])]),a("ul",[a("li",[t._v("使用collection对象的"),a("code",[t._v("insert()")]),t._v("方法来插入文档，例如插入一个"),a("code",[t._v("article")]),t._v("文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.myCollection.insert({title: '我是标题', \n    content: '我是内容'\n})\n")])])]),a("ul",[a("li",[t._v("使用collection对象的"),a("code",[t._v("find()")]),t._v("方法可以获取文档，例如获取所有的"),a("code",[t._v("article")]),t._v("文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.myCollection.find({})\n")])])]),a("h3",{attrs:{id:"_3-2-更新文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-更新文档"}},[t._v("#")]),t._v(" 3.2 更新文档")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("MongoDB通过collection对象的"),a("code",[t._v("update()")]),t._v("来更新集合中的文档，语法如下；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.update(\n   <query>,\n   <update>,\n   {\n     multi: <boolean>\n   }\n)\n# query：修改的查询条件，类似于SQL中的WHERE部分\n# update：更新属性的操作符，类似与SQL中的SET部分\n# multi：设置为true时会更新所有符合条件的文档，默认为false只更新找到的第一条\n\n")])])])]),t._v(" "),a("li",[a("p",[t._v("将title为"),a("code",[t._v("MongoDB 教程")]),t._v("的所有文档的title修改为"),a("code",[t._v("MongoDB")]),t._v("；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.update({'title':'我是标题'},{$set:{'title':'标题修改'}},{multi:true})\n")])])])]),t._v(" "),a("li",[a("p",[t._v("除了"),a("code",[t._v("update()")]),t._v("方法以外，"),a("code",[t._v("save()")]),t._v("方法可以用来替换已有文档，语法如下；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.save(document)\n")])])])]),t._v(" "),a("li",[a("p",[t._v("这次我们将ObjectId为"),a("code",[t._v("5e9943661379a112845e4056")]),t._v("的文档的title改为"),a("code",[t._v("MongoDB 教程")]),t._v("；")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.save({\n    "_id" : ObjectId("5e9943661379a112845e4056"),\n    "title" : "MongoDB 教程",\n    "description" : "MongoDB 是一个 Nosql 数据库",\n    "by" : "Andy",\n    "url" : "https://www.mongodb.com/",\n    "tags" : [ \n        "mongodb", \n        "database", \n        "NoSQL"\n    ],\n    "likes" : 100.0\n})\n')])])]),a("h3",{attrs:{id:"_3-3-删除文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-删除文档"}},[t._v("#")]),t._v(" 3.3 删除文档")]),t._v(" "),a("ul",[a("li",[t._v("MongoDB通过collection对象的"),a("code",[t._v("remove()")]),t._v("方法来删除集合中的文档，语法如下；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.remove(\n   <query>,\n   {\n     justOne: <boolean>\n   }\n)\n# query：删除的查询条件，类似于SQL中的WHERE部分\n# justOne：设置为true只删除一条记录，默认为false删除所有记录\n")])])]),a("ul",[a("li",[t._v("删除title为"),a("code",[t._v("MongoDB 教程")]),t._v("的所有文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.remove({'title':'MongoDB 教程'})\n")])])]),a("h3",{attrs:{id:"_3-4-查询文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-查询文档"}},[t._v("#")]),t._v(" 3.4 查询文档")]),t._v(" "),a("ul",[a("li",[t._v("MongoDB通过collection对象的"),a("code",[t._v("find()")]),t._v("方法来查询文档，语法如下；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.find(query, projection)\n# query：查询条件，类似于SQL中的WHERE部分\n# projection：可选，使用投影操作符指定返回的键\n\n")])])]),a("ul",[a("li",[t._v("查询"),a("code",[t._v("article")]),t._v("集合中的所有文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.find()\n\n/* 1 */\n{\n    "_id" : ObjectId("5e994dcb1379a112845e4057"),\n    "title" : "MongoDB 教程",\n    "description" : "MongoDB 是一个 Nosql 数据库",\n    "by" : "Andy",\n    "url" : "https://www.mongodb.com/",\n    "tags" : [ \n        "mongodb", \n        "database", \n        "NoSQL"\n    ],\n    "likes" : 50.0\n}\n\n/* 2 */\n{\n    "_id" : ObjectId("5e994df51379a112845e4058"),\n    "title" : "Elasticsearch 教程",\n    "description" : "Elasticsearch 是一个搜索引擎",\n    "by" : "Ruby",\n    "url" : "https://www.elastic.co/cn/",\n    "tags" : [ \n        "elasticearch", \n        "database", \n        "NoSQL"\n    ],\n    "likes" : 100.0\n}\n/* 3 */\n{\n    "_id" : ObjectId("5e994e111379a112845e4059"),\n    "title" : "Redis 教程",\n    "description" : "Redis 是一个key-value数据库",\n    "by" : "Andy",\n    "url" : "https://redis.io/",\n    "tags" : [ \n        "redis", \n        "database", \n        "NoSQL"\n    ],\n    "likes" : 150.0\n}\n\n')])])]),a("ul",[a("li",[t._v("MongoDB中的条件操作符，通过与SQL语句的对比来了解下；")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("操作")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("格式")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SQL中的类似语句")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{:}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("where title = 'MongoDB 教程'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("小于")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{:{$lt:}}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("where likes < 50")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("小于或等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{:{$lte:}}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("where likes <= 50")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("大于")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{:{$gt:}}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("where likes > 50")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("大于或等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{:{$gte:}}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("where likes >= 50")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("不等于")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{:{$ne:}}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("where likes != 50")])])])])]),t._v(" "),a("ul",[a("li",[t._v("条件查询，查询title为"),a("code",[t._v("MongoDB 教程")]),t._v("的所有文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.find({'title':'MongoDB 教程'})\n")])])]),a("ul",[a("li",[t._v("条件查询，查询likes大于50的所有文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.find({'likes':{$gt:50}})\n")])])]),a("ul",[a("li",[t._v("AND条件可以通过在"),a("code",[t._v("find()")]),t._v("方法传入多个键，以逗号隔开来实现，例如查询title为"),a("code",[t._v("MongoDB 教程")]),t._v("并且by为"),a("code",[t._v("Andy")]),t._v("的所有文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.find({'title':'MongoDB 教程','by':'Andy'})\n")])])]),a("ul",[a("li",[t._v("OR条件可以通过使用"),a("code",[t._v("$or")]),t._v("操作符实现，例如查询title为"),a("code",[t._v("Redis 教程")]),t._v("或"),a("code",[t._v("MongoDB 教程")]),t._v("的所有文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.find({$or:[{"title":"Redis 教程"},{"title": "MongoDB 教程"}]})\n')])])]),a("ul",[a("li",[t._v("AND 和 OR条件的联合使用，例如查询likes大于50，并且title为"),a("code",[t._v("Redis 教程")]),t._v("或者"),a("code",[t._v('"MongoDB 教程')]),t._v("的所有文档。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.find({"likes": {$gt:50}, $or: [{"title": "Redis 教程"},{"title": "MongoDB 教程"}]})\n')])])]),a("h2",{attrs:{id:"_4-其他操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他操作"}},[t._v("#")]),t._v(" 4.其他操作")]),t._v(" "),a("h3",{attrs:{id:"_4-1-limit与skip操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-limit与skip操作"}},[t._v("#")]),t._v(" 4.1 Limit与Skip操作")]),t._v(" "),a("ul",[a("li",[t._v("读取指定数量的文档，可以使用"),a("code",[t._v("limit()")]),t._v("方法，语法如下；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.find().limit(NUMBER)\n")])])]),a("ul",[a("li",[t._v("只查询article集合中的2条数据；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.find().limit(2)\n")])])]),a("ul",[a("li",[t._v("跳过指定数量的文档来读取，可以使用"),a("code",[t._v("skip()")]),t._v("方法，语法如下；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.find().limit(NUMBER).skip(NUMBER)\n")])])]),a("ul",[a("li",[t._v("从第二条开始，查询article集合中的2条数据；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.find().limit(2).skip(1)\n")])])]),a("h3",{attrs:{id:"_4-2-排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-排序"}},[t._v("#")]),t._v(" 4.2 排序")]),t._v(" "),a("ul",[a("li",[t._v("在MongoDB中使用"),a("code",[t._v("sort()")]),t._v("方法对数据进行排序，"),a("code",[t._v("sort()")]),t._v("方法通过参数来指定排序的字段，并使用1和-1来指定排序方式，1为升序，-1为降序；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.find().sort({KEY:1})\n")])])]),a("ul",[a("li",[t._v("按article集合中文档的likes字段降序排列；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.find().sort({likes:-1})\n")])])]),a("h3",{attrs:{id:"_4-3-索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-索引"}},[t._v("#")]),t._v(" 4.3 索引")]),t._v(" "),a("ul",[a("li",[t._v("索引通常能够极大的提高查询的效率，如果没有索引，MongoDB在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录。")]),t._v(" "),a("li",[t._v("MongoDB使用"),a("code",[t._v("createIndex()")]),t._v("方法来创建索引，语法如下；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.createIndex(keys, options)\n# background：建索引过程会阻塞其它数据库操作，设置为true表示后台创建，默认为false\n# unique：设置为true表示创建唯一索引\n# name：指定索引名称，如果没有指定会自动生成\n")])])]),a("ul",[a("li",[t._v("给title和description字段创建索引，1表示升序索引，-1表示降序索引，指定以后台方式创建；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.createIndex({"title":1,"description":-1}, {background: true})\n')])])]),a("ul",[a("li",[t._v("查看article集合中已经创建的索引；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.article.getIndexes()\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n/* 1 */\n[\n    {\n        "v" : 2,\n        "key" : {\n            "_id" : 1\n        },\n        "name" : "_id_",\n        "ns" : "test.article"\n    },\n    {\n        "v" : 2,\n        "key" : {\n            "title" : 1.0,\n            "description" : -1.0\n        },\n        "name" : "title_1_description_-1",\n        "ns" : "test.article",\n        "background" : true\n    }\n]\n')])])]),a("h3",{attrs:{id:"_4-4-聚合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-聚合"}},[t._v("#")]),t._v(" 4.4 聚合")]),t._v(" "),a("ul",[a("li",[t._v("MongoDB中的聚合使用"),a("code",[t._v("aggregate()")]),t._v("方法，类似于SQL中的group by语句，语法如下；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.collection.aggregate(AGGREGATE_OPERATION)\n")])])]),a("ul",[a("li",[t._v("聚合中常用操作符如下；")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("操作符")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("$sum")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算总和")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("$avg")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算平均值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("$min")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算最小值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("$max")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算最大值")])])])]),t._v(" "),a("ul",[a("li",[t._v("根据by字段聚合文档并计算文档数量，类似与SQL中的count()函数；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.aggregate([{$group : {_id : "$by", sum_count : {$sum : 1}}}])\n\n/* 1 */\n{\n    "_id" : "Andy",\n    "sum_count" : 2.0\n}\n\n/* 2 */\n{\n    "_id" : "Ruby",\n    "sum_count" : 1.0\n}\n')])])]),a("ul",[a("li",[t._v("根据by字段聚合文档并计算likes字段的平局值，类似与SQL中的avg()语句；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.aggregate([{$group : {_id : "$by", avg_likes : {$avg : "$likes"}}}])\n\n\n/* 1 */\n{\n    "_id" : "Andy",\n    "avg_likes" : 100.0\n}\n\n/* 2 */\n{\n    "_id" : "Ruby",\n    "avg_likes" : 100.0\n}\n')])])]),a("h3",{attrs:{id:"_4-5-正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-正则表达式"}},[t._v("#")]),t._v(" 4.5 正则表达式")]),t._v(" "),a("ul",[a("li",[t._v("MongoDB使用"),a("code",[t._v("$regex")]),t._v("操作符来设置匹配字符串的正则表达式，可以用来模糊查询，类似于SQL中的like操作；")]),t._v(" "),a("li",[t._v("例如查询title中包含"),a("code",[t._v("教程")]),t._v("的文档；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.find({title:{$regex:"教程"}})\n')])])]),a("ul",[a("li",[t._v("不区分大小写的模糊查询，使用"),a("code",[t._v("$options")]),t._v("操作符；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.article.find({title:{$regex:"elasticsearch",$options:"$i"}})\n')])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/6844904150635921422",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB快速入门，掌握这些刚刚好"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);