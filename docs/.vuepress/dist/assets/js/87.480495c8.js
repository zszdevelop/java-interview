(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1074:function(_,v,t){"use strict";t.r(v);var r=t(42),s=Object(r.a)({},(function(){var _=this,v=_.$createElement,r=_._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"b-tree索引的优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b-tree索引的优势"}},[_._v("#")]),_._v(" B+TREE索引的优势")]),_._v(" "),r("h2",{attrs:{id:"_1-影响索引查询效率的主要原因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-影响索引查询效率的主要原因"}},[_._v("#")]),_._v(" 1. 影响索引查询效率的主要原因")]),_._v(" "),r("ol",[r("li",[r("p",[_._v("索引存储在磁盘上")]),_._v(" "),r("p",[_._v("索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储在磁盘上")])]),_._v(" "),r("li",[r("p",[_._v("磁盘I/O存取慢")]),_._v(" "),r("p",[_._v("索引在查找过程汇总要产生磁盘I/O消耗，相对于内存存储，"),r("strong",[_._v("I/O存储的消耗要高几个数量级")])])])]),_._v(" "),r("p",[_._v("所以索引的结构组织要尽量减少查找过程"),r("strong",[_._v("中磁盘I/O的存取次数，提升索引效率")])]),_._v(" "),r("h2",{attrs:{id:"_2-为什么磁盘存储慢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么磁盘存储慢"}},[_._v("#")]),_._v(" 2. 为什么磁盘存储慢")]),_._v(" "),r("h3",{attrs:{id:"_2-1-磁盘存取原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-磁盘存取原理"}},[_._v("#")]),_._v(" 2.1 磁盘存取原理")]),_._v(" "),r("p",[_._v("索引一般以文件形式存储在磁盘上，索引检索需要磁盘I/O 操作，与主存不同，磁盘I/O"),r("strong",[_._v("存在机械运动耗费")]),_._v("。因此磁盘I/O的时间消耗时巨大的")]),_._v(" "),r("p",[r("img",{attrs:{src:t(477),alt:"image-20190905233758433"}})]),_._v(" "),r("h4",{attrs:{id:"_2-1-1-磁盘的组成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-磁盘的组成"}},[_._v("#")]),_._v(" 2.1.1 磁盘的组成")]),_._v(" "),r("ul",[r("li",[r("p",[_._v("一个磁盘由大小相同且同轴的圆形"),r("strong",[_._v("盘片")]),_._v("组成")]),_._v(" "),r("p",[_._v("磁盘可以转动（各个磁盘必须同步转动）。")])]),_._v(" "),r("li",[r("p",[_._v("在磁盘的一则有"),r("strong",[_._v("磁头支架")])])]),_._v(" "),r("li",[r("p",[_._v("磁头支架固定了一组"),r("strong",[_._v("磁头")])]),_._v(" "),r("ul",[r("li",[r("p",[_._v("每个磁头负责存储存取一个磁盘的内容")])]),_._v(" "),r("li",[r("p",[_._v("磁头不能转动，但是可以沿磁盘半径方向运动（实际是斜切向运动）")])]),_._v(" "),r("li",[r("p",[_._v("每个磁头同一时刻必须是同轴的")])])])])]),_._v(" "),r("h4",{attrs:{id:"_2-1-2-磁盘组成和工作原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-磁盘组成和工作原理"}},[_._v("#")]),_._v(" 2.1.2 磁盘组成和工作原理")]),_._v(" "),r("p",[r("img",{attrs:{src:t(478),alt:"image-20190905235059595"}})]),_._v(" "),r("ul",[r("li",[r("p",[_._v("磁道")]),_._v(" "),r("p",[_._v("每个同心环叫做一个")])]),_._v(" "),r("li",[r("p",[_._v("扇区")]),_._v(" "),r("p",[_._v("磁盘的最小存取单元")])])]),_._v(" "),r("h5",{attrs:{id:"_2-1-2-1-确定数据位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-1-确定数据位置"}},[_._v("#")]),_._v(" 2.1.2.1 确定数据位置")]),_._v(" "),r("p",[_._v("当需要从磁盘读取数据时，系统会将数据"),r("strong",[_._v("逻辑地址传给磁盘")]),_._v("，磁盘的控制电路按照寻址逻辑将逻辑地址"),r("strong",[_._v("翻译成物理地址")]),_._v("。既确定要读的数据在哪个磁道，哪个扇区")]),_._v(" "),r("h5",{attrs:{id:"_2-1-2-2-磁头寻道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-2-磁头寻道"}},[_._v("#")]),_._v(" 2.1.2.2 磁头寻道")]),_._v(" "),r("p",[_._v("为了读取这个扇区的数据，需要将磁头放在这个扇区上方，为了实现这一点，磁头需要移动对准响应的磁道，这个过程叫做寻道，所耗费的时间叫寻道时间，")]),_._v(" "),r("h5",{attrs:{id:"_2-1-2-3-磁盘旋转到对应扇区"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-3-磁盘旋转到对应扇区"}},[_._v("#")]),_._v(" 2.1.2.3 磁盘旋转到对应扇区")]),_._v(" "),r("p",[_._v("然后磁盘旋转将目标扇区旋转到磁头下,这个过程耗费的时间叫做旋转时间")]),_._v(" "),r("h2",{attrs:{id:"_3-磁盘局部性原理与磁盘预读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-磁盘局部性原理与磁盘预读"}},[_._v("#")]),_._v(" 3. 磁盘局部性原理与磁盘预读")]),_._v(" "),r("p",[_._v("由于存储介质的特性，磁盘本身存储就比主存慢很多，在加上机械运动耗费，磁盘的存取速度往往是主存的几百分之一，因此为了提高效率，"),r("strong",[_._v("要尽量减少磁盘I/O")]),_._v("，为了达到这个目的，磁盘往往不是严格按需读取，而是每次都会"),r("strong",[_._v("预读")]),_._v("，即使只需要一个字节，磁盘也会从这个位置开始，"),r("strong",[_._v("顺序向后读取一定长度的数据放入内存，预读可以提高I/O效率")]),_._v("。"),r("strong",[_._v("预读的长度一般为页")]),_._v("（page:计算机管理存储器的逻辑块-通常为4k）的整数倍。主存和磁盘以页为单位交换数据。当程序要去"),r("strong",[_._v("读的数据不再主存中时")]),_._v("，会触发一个"),r("strong",[_._v("缺页异常")]),_._v("，此时系统会向磁盘发出读盘信号，"),r("strong",[_._v("磁盘会找到数据的起始位置并向后连续读取一页或几页载入内存中")])]),_._v(" "),r("h2",{attrs:{id:"_4-b-b-tree索引的优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-b-b-tree索引的优势"}},[_._v("#")]),_._v(" 4.B-/B+Tree索引的优势")]),_._v(" "),r("p",[r("strong",[_._v("一般使用磁盘的I/O 次数评价索引优势")])]),_._v(" "),r("p",[_._v("那么BTree如何减少磁盘次数的呢")]),_._v(" "),r("ol",[r("li",[r("p",[_._v("结合操作系统存储结构优化处理：MySQL巧妙运用操作系统存储结构**（一个节点分配到一个存储页中->尽量减少I/O操作）&磁盘预读（缓存预读->加速预读马上要用到的数据）**")]),_._v(" "),r("ul",[r("li",[r("p",[_._v("详解:")]),_._v(" "),r("p",[r("strong",[_._v("Mysql设计利用了磁盘预读原理，将一个b+tree节点大小设为一个页大小，在新建节点时直接申请一个页的控件，这样就能保证一个节点物理上存储在一个页里，加之计算机存储分配都是按页对其，这样就实现了每个Node节点只需要一次IO操作")])])])])]),_._v(" "),r("li",[r("p",[r("strong",[_._v("B+Tree单个节点能放多个子节点")]),_._v("，相同IO次数，检索出更多东西\n这也是B+Tree相比B-Tree能查询出更多数据的原因")]),_._v(" "),r("ul",[r("li",[r("p",[_._v("详解")]),_._v(" "),r("p",[r("strong",[_._v("单个节点能放多个子节点")]),_._v("，查询IO次数相同(mysql查询IO次数最多3-5次-所以需要每个节点需要存储很多数据)")])])])]),_._v(" "),r("li",[r("p",[_._v("B+Tree"),r("strong",[_._v("只在叶子节点存储数据&所有叶子节点包含一个链指针&其他内层非叶子节点只存储索引数据")]),_._v("，只利用索引"),r("strong",[_._v("快速定位数据索引范围")]),_._v("，先定位索引"),r("strong",[_._v("再通过索引高效快速定位数据")])])])]),_._v(" "),r("ul",[r("li",[r("p",[_._v("B+Tree更适合外存索引，原因和内节点出度d有关。从上面分析可以看到，d越大索引的性能越好，而出度的上限取决于节点内key和data的大小：")])]),_._v(" "),r("li",[r("p",[_._v("B+Tree内节点去掉了data域，因此可以拥有更大的出度，拥有更好的性能。只利用索引快速定位数据索引范围，先定位索引再通过索引高效快速定位数据。")]),_._v(" "),r("p",[_._v("dmax=floor(pagesize/(keysize+datasize+pointsize))")])])])])}),[],!1,null,null,null);v.default=s.exports},477:function(_,v,t){_.exports=t.p+"assets/img/image-20190905233758433.41e3134a.png"},478:function(_,v,t){_.exports=t.p+"assets/img/image-20190905235059595.e871f658.png"}}]);