import{_ as i,W as n,X as o,Y as a,Z as r,$ as t,a0 as l,D as s}from"./framework-0cf5f349.js";const c={},g=l('<h1 id="如何做数据平滑迁移-双写方案" tabindex="-1"><a class="header-anchor" href="#如何做数据平滑迁移-双写方案" aria-hidden="true">#</a> 如何做数据平滑迁移：双写方案</h1><h2 id="_1-什么是数据迁移" tabindex="-1"><a class="header-anchor" href="#_1-什么是数据迁移" aria-hidden="true">#</a> 1. 什么是数据迁移</h2><p>数据迁移指的是将一批数据从同构存储系统（如MySQLA到MySQLB）或异构存储系统（如MySQL-MongoDB）间搬运迁移。</p><p>最简单的数据迁移方式是通过脚本或定时任务将数据进行搬运，亦或是通过类似canal之类的工具进行数据同步。</p><p>这种最简单方案在数据量小且系统对数据一致性要求低的情况下可以良好生效，但是对于大数据量的实时在线系统来讲，需要在数据迁移的过程中做好以下三个保障：</p><ul><li>在线迁移：迁移应该是在线的迁移，也就是在迁移的同时还会有数据的写入</li><li>数据一致性：数据应该保证完整性，也就是说在迁移之后需要保证新的库和旧的库的数据是一致的</li><li>可回滚：迁移的过程需要做到可以回滚，这样一旦迁移的过程中出现问题，可以立刻回滚到源库不会对系统的可用性造成影响</li></ul><h2 id="_2-数据双写迁移方案" tabindex="-1"><a class="header-anchor" href="#_2-数据双写迁移方案" aria-hidden="true">#</a> 2. 数据双写迁移方案</h2><p>数据双写迁移是最常用的一种数据迁移方案，可以保证迁移过程是在线的、迁移前后数据是一致的、迁移过程是可回滚的。数据双写迁移方案分为五大步，分别是：同步、双写、校验、切读、切写。以MySQL数据迁移至MongoDB为例来说明这五大步的流程。</p><h2 id="_2-1-同步" tabindex="-1"><a class="header-anchor" href="#_2-1-同步" aria-hidden="true">#</a> 2.1 同步</h2><p>首先通过Binlog监听工具（如Canal）获取MySQL的全量日志及增量日志，并且不断写入MongoDB：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/image-20231228202049439.png" alt="image-20231228202049439" tabindex="0" loading="lazy"><figcaption>image-20231228202049439</figcaption></figure><h2 id="_2-2-双写" tabindex="-1"><a class="header-anchor" href="#_2-2-双写" aria-hidden="true">#</a> 2.2 双写</h2><p>在进行了同步操作之后，此时MongoDB中数据已经几乎和MySQL一致，但是此时并不能直接将读写操作切换到MongoDB中，因为在切换的这个过程中会出现数据不一致，此时就需要双写。</p><p>所谓双写其实就是在程序中写入MySQL时，也将这份数据转换格式并同时写入MongoDB，为了不影响接口写入的pct99时间，可以将对MongoDB的写入进行异步化，对于写入失败的数据再定时回捞写入。</p><p>注意由于Binlog监听程序也在进行数据增量写入，所以可以通过开关控制双写启动后，关闭Binlog监听程序。 <img src="https://zszblog.oss-cn-beijing.aliyuncs.com/image-20231228202134345.png" alt="image-20231228202134345" loading="lazy"></p><h3 id="_2-3-校验" tabindex="-1"><a class="header-anchor" href="#_2-3-校验" aria-hidden="true">#</a> 2.3.校验</h3><p>经过同步及双写两个步骤，此时MySQL和MongoDB应该已经保持线上实时同步了，但是为了确保双写的数据不出问题，需要通过定时任务来对MySQL及MongoDB的数据一致性做抽样校验，当校验到数据不一致时，以MySQL的数据为准覆盖MongoDB中的对应数据。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/image-20231228202205634.png" alt="image-20231228202205634" tabindex="0" loading="lazy"><figcaption>image-20231228202205634</figcaption></figure><h3 id="_2-4-切读" tabindex="-1"><a class="header-anchor" href="#_2-4-切读" aria-hidden="true">#</a> 2.4.切读</h3><p>当抽样校验持续一段时间（如一周）时，如果数据一致性基本为100%时，可以启动切读。</p><p>所谓切读指的是将数据读取时，不对MySQL进行读取，而是对MongoDB进行读取。此时通过灰度控制来进行小流量数据读取，在观察一段时间没问题后，逐步放大切读流量，直到100%读MongoDB。 <img src="https://zszblog.oss-cn-beijing.aliyuncs.com/image-20231228202235856.png" alt="image-20231228202235856" loading="lazy"></p><h3 id="_2-5-切写" tabindex="-1"><a class="header-anchor" href="#_2-5-切写" aria-hidden="true">#</a> 2.5.切写</h3><p>切读完成后，读取时就已经不依赖于老MySQL，而是依赖于新MongoDB了。此时要做的最后一步是切写，也就是关闭双写，只写MongoDB。此时数据迁移完成，读写均通过MongoDB。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/image-20231228202258663.png" alt="image-20231228202258663" tabindex="0" loading="lazy"><figcaption>image-20231228202258663</figcaption></figure><h2 id="_3-切量过程关键点" tabindex="-1"><a class="header-anchor" href="#_3-切量过程关键点" aria-hidden="true">#</a> 3.切量过程关键点</h2><ul><li>数据校验以最终结果量为准，因为过程量可能不置信，最好可以实现切读后的数据打点趋势与原流程趋势做对比产出报告</li><li>切量过程必须是可以回滚的，并且需要小流量的切量观察</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',27),h={href:"https://blog.csdn.net/pbrlovejava/article/details/125926775",target:"_blank",rel:"noopener noreferrer"};function d(p,_){const e=s("ExternalLinkIcon");return n(),o("div",null,[g,a("p",null,[a("a",h,[r("如何做数据平滑迁移：双写方案"),t(e)])])])}const f=i(c,[["render",d],["__file","optimization-data migration.html.vue"]]);export{f as default};
