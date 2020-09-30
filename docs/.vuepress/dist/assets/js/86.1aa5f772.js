(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1073:function(_,t,v){"use strict";v.r(t);var a=v(42),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"大表优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大表优化"}},[_._v("#")]),_._v(" 大表优化")]),_._v(" "),a("p",[_._v("当MySQL单表记录数据过大，数据库的CRUD性能会明显下降，一些常见的优化措施")]),_._v(" "),a("h2",{attrs:{id:"_1-限制数据的范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-限制数据的范围"}},[_._v("#")]),_._v(" 1. 限制数据的范围")]),_._v(" "),a("p",[_._v("务必禁止不带任何限制数据范围的查询语句")]),_._v(" "),a("blockquote",[a("p",[_._v("例如：我们当用户在查询订单历史的时候，可以控制在一个范围内；")])]),_._v(" "),a("h2",{attrs:{id:"_2-读-写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-读-写分离"}},[_._v("#")]),_._v(" 2. 读/写分离")]),_._v(" "),a("p",[_._v("经典的数据库拆分方案，主库负责写，从库负责读")]),_._v(" "),a("h2",{attrs:{id:"_3-垂直分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-垂直分区"}},[_._v("#")]),_._v(" 3. 垂直分区")]),_._v(" "),a("p",[a("strong",[_._v("根据数据库里面的数据表的相关性进行拆分")])]),_._v(" "),a("blockquote",[a("p",[_._v("例如：用户表中既有用户登录信息又有用户基本信息，可以将用户表拆分成两个单独的表，甚至放到单独的库做分库")])]),_._v(" "),a("p",[a("strong",[_._v("简单来说垂直拆分是指数据表列的拆分，把一张列比较多的表拆分为多张表")])]),_._v(" "),a("p",[_._v("如下图")]),_._v(" "),a("p",[a("img",{attrs:{src:v(475),alt:"image-20190913195804469"}})]),_._v(" "),a("h3",{attrs:{id:"_3-1-垂直拆分的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-垂直拆分的优缺点"}},[_._v("#")]),_._v(" 3.1 垂直拆分的优缺点")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("优点")]),_._v(" "),a("ul",[a("li",[_._v("可以使得列数据变小，在查询时减少读取的block数，减少I/O次数")]),_._v(" "),a("li",[_._v("简化表结构，易于维护")])])]),_._v(" "),a("li",[a("p",[_._v("缺点")]),_._v(" "),a("ul",[a("li",[_._v("主键会出现冗余，需要管理冗余列")]),_._v(" "),a("li",[_._v("并会引起join操作，可以通过在应用层进行Join来解决")]),_._v(" "),a("li",[_._v("会让事务变得更加复杂")])])])]),_._v(" "),a("h2",{attrs:{id:"_4-水平分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-水平分区"}},[_._v("#")]),_._v(" 4. 水平分区")]),_._v(" "),a("p",[a("strong",[_._v("保持数据表结构不变，通过某种策略存储数据分片，这样每一片数据分散到不同的表或者库中，达到了分布式的目的。水平拆分可以支持非常大的数据量")])]),_._v(" "),a("p",[_._v("水平拆分是指数据表行的拆分，表的行数超过200万行时，就会变慢，这时可以把一张的表的数据拆成多张表来存放。")]),_._v(" "),a("blockquote",[a("p",[_._v("举个例子，我们可以将用户信息表拆分成多个用户信息表，这样可以避免单一表数据量过大对性能造成的影响")])]),_._v(" "),a("p",[a("img",{attrs:{src:v(476),alt:"image-20190913202054918"}})]),_._v(" "),a("p",[_._v("水平拆分可以"),a("strong",[_._v("支持非常大的数据量")])]),_._v(" "),a("p",[_._v("需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升Mysql并发能力没有意义。所以"),a("strong",[_._v("水平拆分最好分库")])]),_._v(" "),a("h3",{attrs:{id:"_4-1-水平拆分总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-水平拆分总结"}},[_._v("#")]),_._v(" 4.1 水平拆分总结")]),_._v(" "),a("p",[_._v("水平拆分能够"),a("strong",[_._v("支持非常大的数据量存储，应用端改造也少")]),_._v("，但分片"),a("strong",[_._v("事务难以解决")]),_._v("，跨节点join性能较差，逻辑复杂。")]),_._v(" "),a("blockquote",[a("p",[a("strong",[_._v("尽量不要对数据进行分片，因为拆分会带来逻辑、部署、运维等各种复杂度")]),_._v("，一般的数据表在优化得当的情况下支撑千万以下的数据量是没有太大问题的。如果实在要分片，尽量选择客户端分片架构，这样可以减少一次和中间件的网络I/O")])]),_._v(" "),a("h3",{attrs:{id:"_4-2-数据库分片两种方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-数据库分片两种方案"}},[_._v("#")]),_._v(" 4.2 数据库分片两种方案")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("客户端代理")]),_._v(" "),a("p",[a("strong",[_._v("分片逻辑在应用端，封装在jar包中，通过修改或者封装JDBC层来实现")])]),_._v(" "),a("ul",[a("li",[_._v("当当网的Sharding-JDBC")]),_._v(" "),a("li",[_._v("阿里的TDDL是两种比较常用的实现")])])]),_._v(" "),a("li",[a("p",[_._v("中间件代理")]),_._v(" "),a("p",[a("strong",[_._v("在应用和数据中间加了一层代理层，分片逻辑统一维护在中间件服务中")]),_._v("。")]),_._v(" "),a("ul",[a("li",[_._v("Mycat")]),_._v(" "),a("li",[_._v("360的Atlas")]),_._v(" "),a("li",[_._v("网易的DDB")])])])])])}),[],!1,null,null,null);t.default=s.exports},475:function(_,t,v){_.exports=v.p+"assets/img/image-20190913195804469.500c00bd.png"},476:function(_,t,v){_.exports=v.p+"assets/img/image-20190913202054918.5929f42e.png"}}]);