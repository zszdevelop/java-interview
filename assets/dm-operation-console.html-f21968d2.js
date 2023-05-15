import{_ as l,W as t,X as r,Y as a,Z as i,$ as n,a0 as o,D as d}from"./framework-0cf5f349.js";const s={},c=o(`<h1 id="达梦数据库-控制台工具-备份-恢复" tabindex="-1"><a class="header-anchor" href="#达梦数据库-控制台工具-备份-恢复" aria-hidden="true">#</a> 达梦数据库-控制台工具（备份，恢复）</h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h2><p>DM控制台工具是管理和维护数据库的基本工具。因为控制台是通过dm.ini 参数来连接实例的，所以该工具必须在DM 实例服务端运行。 无法向DM Manager 工具和 DM Monitor 那样远程连接。</p><ul><li>Windows 平台直接在程序里调用控制台工具来启动。</li><li>Linux 平台，执行DM_HOME/tool/console 启动。</li></ul><h2 id="_2-用控制台工具可以提供如下功能" tabindex="-1"><a class="header-anchor" href="#_2-用控制台工具可以提供如下功能" aria-hidden="true">#</a> 2. 用控制台工具可以提供如下功能</h2><ul><li>服务器参数配置</li><li>脱机备份与还原</li><li>查看系统信息</li><li>查看许可证信息</li></ul><h2 id="_3-实例参数查看和修改" tabindex="-1"><a class="header-anchor" href="#_3-实例参数查看和修改" aria-hidden="true">#</a> 3. 实例参数查看和修改</h2><p>在控制台工具中配置好实例后，可以直接查看和修改实例的参数。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629184434337.png" alt="image-20210629184434337" tabindex="0" loading="lazy"><figcaption>image-20210629184434337</figcaption></figure><h2 id="_4-备份恢复实例" tabindex="-1"><a class="header-anchor" href="#_4-备份恢复实例" aria-hidden="true">#</a> 4. 备份恢复实例</h2><p>DM实例的备份恢复可以通过命令行，DM Manager 工具来进行，</p><ul><li>注意DM Manager 中仅支持备份，不支持恢复。</li><li>这里的控制台空间是可以同时支持备份和恢复操作的。</li></ul><p>控制台支持如下操作：</p><ul><li>1)备份还原</li><li>2)新建备份</li><li>3)设置默认备份目录</li><li>4)指定归档文件还原</li><li>5)还原备份</li><li>6)备份属性</li><li>7)备份列表弹出菜单</li></ul><h3 id="_4-1-备份" tabindex="-1"><a class="header-anchor" href="#_4-1-备份" aria-hidden="true">#</a> 4.1 备份</h3><blockquote><p>脱机备份，需关闭当前实例的服务</p></blockquote><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629184557627.png" alt="image-20210629184557627" tabindex="0" loading="lazy"><figcaption>image-20210629184557627</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629184557627.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-2-还原" tabindex="-1"><a class="header-anchor" href="#_4-2-还原" aria-hidden="true">#</a> 4.2 还原</h3><blockquote><p>脱机还原，需关闭当前实例的服务</p></blockquote><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629184854266.png" alt="image-20210629184854266" tabindex="0" loading="lazy"><figcaption>image-20210629184854266</figcaption></figure><h4 id="_4-2-1-dm8-还需要更新db-magic" tabindex="-1"><a class="header-anchor" href="#_4-2-1-dm8-还需要更新db-magic" aria-hidden="true">#</a> 4.2.1 DM8 还需要更新DB_magic</h4><p>DM8使用DMRMAN工具备份还原恢复后，需要启动数据库服务，才能正常运行数据库。但是如果直接启动数据库服务，会报以下错误</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Instance DMSERVER startup failed, execute &#39;recover database ... update db_magic&#39; in dmrman.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原因是DM8比DM7多出了一步更新db_magic的步骤，若不执行该步骤则会报以上错误，且无法直接启动数据库服务。</p><p>更新db_magic语法:</p><ul><li><p>方式1：recover database ‘/home/dmdba/dmdbms/data/TEST/dm.ini’ update db_magic;</p></li><li><p>方式2：界面操作</p></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629191451696.png" alt="image-20210629191451696" tabindex="0" loading="lazy"><figcaption>image-20210629191451696</figcaption></figure><p>更新完db_magic后即可启动数据库服务</p><h2 id="_5-可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#_5-可能遇到的问题" aria-hidden="true">#</a> 5. 可能遇到的问题</h2><h3 id="_5-1-信号量异常" tabindex="-1"><a class="header-anchor" href="#_5-1-信号量异常" aria-hidden="true">#</a> 5.1 信号量异常</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629192030430.png" alt="image-20210629192030430" tabindex="0" loading="lazy"><figcaption>image-20210629192030430</figcaption></figure><p>脱机备份还原，需关闭当前实例的服务</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,34),g={href:"https://www.cndba.cn/dave/article/3842",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/weixin_42316663/article/details/107682674",target:"_blank",rel:"noopener noreferrer"};function m(p,b){const e=d("ExternalLinkIcon");return t(),r("div",null,[c,a("p",null,[a("a",g,[i("DM 达梦数据库 控制台工具（console） 使用说明"),n(e)])]),a("p",null,[a("a",h,[i("达梦8数据库还原恢复后开启数据库服务报Instance DMSERVICETEST startup failed错误"),n(e)])])])}const f=l(s,[["render",m],["__file","dm-operation-console.html.vue"]]);export{f as default};