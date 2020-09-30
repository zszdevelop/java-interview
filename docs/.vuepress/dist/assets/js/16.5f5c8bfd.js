(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1325:function(a,_,t){"use strict";t.r(_);var v=t(42),s=Object(v.a)({},(function(){var a=this,_=a.$createElement,v=a._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"索引实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引实现"}},[a._v("#")]),a._v(" 索引实现")]),a._v(" "),v("h2",{attrs:{id:"_1-聚簇索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-聚簇索引"}},[a._v("#")]),a._v(" 1. 聚簇索引")]),a._v(" "),v("p",[a._v("MyISAM 和 InnoDB 都使用B+Tree索引结构，但底层索引存储不同，MyISAM 采用非聚簇索引，而InnoDB采用聚簇索引")]),a._v(" "),v("ul",[v("li",[a._v("聚簇索引：索引和数据文件为同一个文件")]),a._v(" "),v("li",[a._v("非聚簇索引：索引和数据文件 分开的索引")])]),a._v(" "),v("h2",{attrs:{id:"_2-myisam-索引原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-myisam-索引原理"}},[a._v("#")]),a._v(" 2. MyISAM 索引原理")]),a._v(" "),v("h3",{attrs:{id:"_2-1-底层存储结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-底层存储结构"}},[a._v("#")]),a._v(" 2.1 底层存储结构")]),a._v(" "),v("ul",[v("li",[a._v("frm：定义表")]),a._v(" "),v("li",[a._v("myi: myisam索引")]),a._v(" "),v("li",[a._v("myd：myisam数据")])]),a._v(" "),v("h3",{attrs:{id:"_2-2-myisam-索引结构特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-myisam-索引结构特性"}},[a._v("#")]),a._v(" 2.2 myISAM 索引结构特性")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("采用非聚簇索引")])]),a._v(" "),v("li",[v("p",[a._v("MyISAM myi索引文件和myd 数据文件分离")])]),a._v(" "),v("li",[v("p",[a._v("索引文件仅保存数据记录的指针地址。")])]),a._v(" "),v("li",[v("p",[a._v("叶子节点data域存储指向数据记录的指针地址")])])]),a._v(" "),v("h3",{attrs:{id:"_2-3-myisam-索引查找流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-myisam-索引查找流程"}},[a._v("#")]),a._v(" 2.3 MyISAM 索引查找流程")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("MyISAM 索引按照B+Tree搜索，")])]),a._v(" "),v("li",[v("p",[a._v("如果指定的key存在，则取出其data域值")])]),a._v(" "),v("li",[v("p",[a._v("然后以data阈值-数据地址去读取响应的数据记录，")])])]),a._v(" "),v("p",[a._v("辅助索引和主索引在结构上没有任何区别，只是主索引要求key 是唯一的，而辅助索引的key 可以重复")]),a._v(" "),v("p",[v("img",{attrs:{src:t(479),alt:"image-20190906225153866"}})]),a._v(" "),v("h2",{attrs:{id:"_3-innodb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-innodb"}},[a._v("#")]),a._v(" 3. InnoDB")]),a._v(" "),v("h3",{attrs:{id:"_3-1-innodb优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-innodb优势"}},[a._v("#")]),a._v(" 3.1 InnoDB优势")]),a._v(" "),v("ul",[v("li",[a._v("高扩展性")]),a._v(" "),v("li",[a._v("充分开发硬件性能")]),a._v(" "),v("li",[a._v("Crash Safe")]),a._v(" "),v("li",[a._v("支持事务")]),a._v(" "),v("li",[a._v("可以在线热备份")])]),a._v(" "),v("h3",{attrs:{id:"_3-2-innodb特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-innodb特性"}},[a._v("#")]),a._v(" 3.2 InnoDB特性")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("事务支持（ACID）")])]),a._v(" "),v("li",[v("p",[a._v("扩展性优良")])]),a._v(" "),v("li",[v("p",[a._v("读写不冲突")])]),a._v(" "),v("li",[v("p",[a._v("缓存加速")])])]),a._v(" "),v("h3",{attrs:{id:"_3-3-组件功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-组件功能"}},[a._v("#")]),a._v(" 3.3 组件功能")]),a._v(" "),v("ul",[v("li",[a._v("redo/undo")]),a._v(" "),v("li",[a._v("异步IO")]),a._v(" "),v("li",[a._v("MVCC")]),a._v(" "),v("li",[a._v("行级别锁")]),a._v(" "),v("li",[a._v("Page Cache（LRU）")])]),a._v(" "),v("h3",{attrs:{id:"_3-4-innodb物理存储结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-innodb物理存储结构"}},[a._v("#")]),a._v(" 3.4 InnoDB物理存储结构")]),a._v(" "),v("p",[v("img",{attrs:{src:t(480),alt:"image-20190906225909455"}})]),a._v(" "),v("ul",[v("li",[v("p",[a._v("表空间(ibd文件)")]),a._v(" "),v("ul",[v("li",[a._v("InnoDB 以"),v("strong",[a._v("表空间Tablespace")]),a._v("（idb文件）结构进行组织")])])]),a._v(" "),v("li",[v("p",[a._v("段(Segment)")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("每个Tablespce 包含"),v("strong",[a._v("多个Segment段")])]),a._v(" "),v("p",[a._v("分为2种段：叶子节点Segment 和非叶子节点Segment")])])])]),a._v(" "),v("li",[v("p",[a._v("Extent")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("一个Segment段"),v("strong",[a._v("包含多个Extent")])]),a._v(" "),v("p",[a._v("一个Extent占用占用1M空间包含"),v("strong",[a._v("64个page")]),a._v("（每个Page 16K）")])])])]),a._v(" "),v("li",[v("p",[a._v("Page(16K)")]),a._v(" "),v("ul",[v("li",[a._v("InnoDB B-Tree "),v("strong",[a._v("一个逻辑节点扣分配一个物理Page")]),a._v("，一个节点一次IO操作")])])]),a._v(" "),v("li",[v("p",[a._v("Row")]),a._v(" "),v("ul",[v("li",[a._v("一个Page里包含"),v("strong",[a._v("很多有序数据Row行")]),a._v("数据")])])]),a._v(" "),v("li",[v("p",[a._v("Field")]),a._v(" "),v("ul",[v("li",[a._v("Row行数据中包含"),v("strong",[a._v("Field 属性数据等信息")])])])])]),a._v(" "),v("h4",{attrs:{id:"_3-5-表插入数据扩展原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-表插入数据扩展原理"}},[a._v("#")]),a._v(" 3.5 表插入数据扩展原理")]),a._v(" "),v("p",[a._v("一次扩张一个Extent空间（IM）,64个page，按顺序结构向每个page中插入数据")]),a._v(" "),v("h4",{attrs:{id:"_3-6-innodb-逻辑组织结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-innodb-逻辑组织结构"}},[a._v("#")]),a._v(" 3.6 InnoDB 逻辑组织结构")]),a._v(" "),v("p",[v("img",{attrs:{src:t(481),alt:"image-20190906233212924"}})]),a._v(" "),v("p",[v("strong",[a._v("每个索引一个B+Tree")]),a._v("，一个B+Tree节点 = 一个物理Page（16K）")]),a._v(" "),v("p",[a._v("数据按16KB切片为Page 并编号，编号可映射到物流文件偏移（16K*N）,B+Tree树叶子节点前后形成双向链表，数据按主键聚簇，二级索引叶节点存储主键值，通过叶节点主键值"),v("strong",[a._v("回表查找数据")])]),a._v(" "),v("h2",{attrs:{id:"_4-innodb-索引原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-innodb-索引原理"}},[a._v("#")]),a._v(" 4. InnoDB 索引原理")]),a._v(" "),v("h3",{attrs:{id:"_4-1-innodb-特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-innodb-特点"}},[a._v("#")]),a._v(" 4.1 InnoDB 特点")]),a._v(" "),v("ul",[v("li",[v("p",[v("strong",[a._v("采用聚簇索引")])])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("InnoDB 数据&索引文件为idb文件，")])])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("表数据文件本身就是就是主索引")])])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("相邻的索引临近存储。")])])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("叶节点data域保存了完整的数据记录（数据[除了主键id外其他data]+主索引）")])])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("叶子节点直接存储数据记录，以主键id为key，叶子节点直接存储数据记录")])])])]),a._v(" "),v("h3",{attrs:{id:"_4-2-底层存储结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-底层存储结构"}},[a._v("#")]),a._v(" 4.2 底层存储结构")]),a._v(" "),v("ul",[v("li",[a._v("frm: 表定义")]),a._v(" "),v("li",[a._v("idb: innoDB数据&索引文件")])]),a._v(" "),v("h3",{attrs:{id:"_4-3-为什么innodb-一定要有主键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-为什么innodb-一定要有主键"}},[a._v("#")]),a._v(" 4.3 为什么InnoDB 一定要有主键")]),a._v(" "),v("p",[a._v("**由于InnoDB 采用聚簇索引结构存储，索引InnoDB 的数据文件需要按照主键聚集。**因此InnoDB 要求表必须有主键（MyISAM可以没有）。")]),a._v(" "),v("p",[a._v("如果没有指定mysql会"),v("strong",[a._v("自动选择一个可以唯一标识数据记录的列作为主键")]),a._v("，如果不存在这样的列，mysql自动为innoDB表"),v("strong",[a._v("生成一个隐含字段（6个字节长整型）作为主键")]),a._v("。innoDB所有辅助索引都引用数据记录的主键 作为data 域")]),a._v(" "),v("h3",{attrs:{id:"_4-4-辅助索引需要检索两遍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-辅助索引需要检索两遍"}},[a._v("#")]),a._v(" 4.4 辅助索引需要检索两遍")]),a._v(" "),v("p",[a._v("聚簇索引这种实现方式使得主键的搜索十分高效，但是"),v("strong",[a._v("辅助索引搜索需要检索两遍索引")])]),a._v(" "),v("ol",[v("li",[v("p",[a._v("首先检索辅助索引获得数据记录主键")])]),a._v(" "),v("li",[v("p",[a._v("然后用主键到主索引中检索获得数据记录")])])]),a._v(" "),v("h3",{attrs:{id:"_4-5-聚簇索引结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-聚簇索引结构"}},[a._v("#")]),a._v(" 4.5 聚簇索引结构")]),a._v(" "),v("p",[v("img",{attrs:{src:t(482),alt:"image-20190906235927601"}})]),a._v(" "),v("h3",{attrs:{id:"_4-6-索引的查找流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-索引的查找流程"}},[a._v("#")]),a._v(" 4.6 索引的查找流程")]),a._v(" "),v("h4",{attrs:{id:"_2-6-1-索引精确查找"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-索引精确查找"}},[a._v("#")]),a._v(" 2.6.1 索引精确查找：")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("select * from user_info where id = 23\n")])])]),v("ol",[v("li",[a._v("确定定位条件，找到根节点的PageNo")]),a._v(" "),v("li",[a._v("根节点读到内存")]),a._v(" "),v("li",[a._v("逐层向下查找")]),a._v(" "),v("li",[a._v("读取叶子节点的Page")]),a._v(" "),v("li",[v("strong",[a._v("通过二分查找找到记录或未命中")]),a._v("。")])]),a._v(" "),v("p",[v("img",{attrs:{src:t(483),alt:"image-20190907002116080"}})]),a._v(" "),v("h4",{attrs:{id:"_2-6-2-索引范围查找"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-2-索引范围查找"}},[a._v("#")]),a._v(" 2.6.2 索引范围查找")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("select * from user_info where id >= 18 and id < 22\n")])])]),v("ol",[v("li",[a._v("读取根节点至内存")]),a._v(" "),v("li",[a._v("确定索引定位条件 id=18")]),a._v(" "),v("li",[a._v("找到满足条件第一个叶子节点，")]),a._v(" "),v("li",[a._v("顺序扫描所有结果，直到终止条件满足id>=22")])]),a._v(" "),v("p",[v("img",{attrs:{src:t(484),alt:"image-20190907002422372"}})]),a._v(" "),v("h4",{attrs:{id:"_2-6-3-全表扫描"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-3-全表扫描"}},[a._v("#")]),a._v(" 2.6.3 全表扫描")]),a._v(" "),v("p",[a._v("select * from user_info where name = 'abc'")]),a._v(" "),v("ol",[v("li",[a._v("直接读取叶子节点头结点")]),a._v(" "),v("li",[a._v("顺序扫描")]),a._v(" "),v("li",[a._v("返回符合条件记录，到最终节点结束")])]),a._v(" "),v("p",[v("img",{attrs:{src:t(485),alt:"image-20190907002631318"}})]),a._v(" "),v("h4",{attrs:{id:"_2-6-4-二级索引查找"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-4-二级索引查找"}},[a._v("#")]),a._v(" 2.6.4 二级索引查找")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("Create table table_x(int id primary key, varchar(64) name,key sec_index(name) )\n\n• Select * from table_x where name = “d”;\n")])])]),v("ol",[v("li",[a._v("通过二级索引查出主键")]),a._v(" "),v("li",[a._v("拿主键回表查主键索引得到数据")]),a._v(" "),v("li",[a._v("二级索引可筛选掉大量无效记录，提高效率")])]),a._v(" "),v("p",[v("img",{attrs:{src:t(486),alt:"image-20190907002924866"}})])])}),[],!1,null,null,null);_.default=s.exports},479:function(a,_,t){a.exports=t.p+"assets/img/image-20190906225153866.6caa5263.png"},480:function(a,_,t){a.exports=t.p+"assets/img/image-20190906225909455.79e217f5.png"},481:function(a,_,t){a.exports=t.p+"assets/img/image-20190906233212924.2aa2ca5c.png"},482:function(a,_,t){a.exports=t.p+"assets/img/image-20190906235927601.467a3838.png"},483:function(a,_,t){a.exports=t.p+"assets/img/image-20190907002116080.cc56c00f.png"},484:function(a,_,t){a.exports=t.p+"assets/img/image-20190907002422372.04723695.png"},485:function(a,_,t){a.exports=t.p+"assets/img/image-20190907002631318.e457cb99.png"},486:function(a,_,t){a.exports=t.p+"assets/img/image-20190907002924866.892a71be.png"}}]);