import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as l,a as e,b as i,e as r,d,r as t}from"./app.f5b3b0e8.js";const o={},c=r(`<h1 id="\u56DB\u79CD\u89E3\u51B3nginx\u51FA\u73B0403-forbidden-\u62A5\u9519\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u56DB\u79CD\u89E3\u51B3nginx\u51FA\u73B0403-forbidden-\u62A5\u9519\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u56DB\u79CD\u89E3\u51B3Nginx\u51FA\u73B0403 forbidden \u62A5\u9519\u7684\u65B9\u6CD5</h1><h2 id="_1-\u80CC\u666F-\u8BBF\u95EE\u65F6\u62A5403" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F-\u8BBF\u95EE\u65F6\u62A5403" aria-hidden="true">#</a> 1.\u80CC\u666F\uFF1A\u8BBF\u95EE\u65F6\u62A5403</h2><p>nginx \u8BBF\u95EE\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u63D0\u793A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190908163131411.png" alt="image-20190908163131411" loading="lazy"></p><p>\u4E8E\u662F\u67E5\u770Bnginx\u65E5\u5FD7\uFF0C\u8DEF\u5F84\u4E3A/var/log/nginx/error.log\u3002\u6253\u5F00\u65E5\u5FD7\u53D1\u73B0\u62A5\u9519Permission denied\uFF0C\u8BE6\u7EC6\u62A5\u9519\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2021/08/31 16:06:44 [error] 32713#32713: *5 open() &quot;/home/faduit/data/upload//blYctsOfficialSealController20210831152014.png&quot; failed (13: Permission denied), client: 10.8.0.23, server: 192.168.134.3, request: &quot;GET /upload/blYctsOfficialSealController20210831152014.png HTTP/1.1&quot;, host: &quot;192.168.134.3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u89E3\u51B3\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u5F0F" aria-hidden="true">#</a> 2. \u89E3\u51B3\u65B9\u5F0F</h2><h3 id="_2-1-\u65B9\u5F0F1-\u7531\u4E8E\u542F\u52A8\u7528\u6237\u548Cnginx\u5DE5\u4F5C\u7528\u6237\u4E0D\u4E00\u81F4\u6240\u81F4" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u5F0F1-\u7531\u4E8E\u542F\u52A8\u7528\u6237\u548Cnginx\u5DE5\u4F5C\u7528\u6237\u4E0D\u4E00\u81F4\u6240\u81F4" aria-hidden="true">#</a> 2.1 \u65B9\u5F0F1\uFF1A<strong>\u7531\u4E8E\u542F\u52A8\u7528\u6237\u548Cnginx\u5DE5\u4F5C\u7528\u6237\u4E0D\u4E00\u81F4\u6240\u81F4</strong></h3><ol><li><p>\u67E5\u770Bnginx\u542F\u52A8\u7684\u7528\u6237</p><p>\u53D1\u73B0\u662Fnobody\uFF0C\u800C\u4E3A\u662F\u7528root\u542F\u52A8\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> ps axu|grep &#39;nginx&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nobody      4936  0.0  0.0  45864  1176 ?        Ss   8\u670817   0:00 nginx: master process /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5C06nginx.config\u7684user\u6539\u4E3A\u548C\u542F\u52A8\u7528\u6237\u4E00\u81F4</p><p>\u547D\u4EE4\uFF1Avi conf/nginx.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> #user nobody;
 user root;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_2-2-\u65B9\u5F0F2-\u6743\u9650\u95EE\u9898-\u5982\u679Cnginx\u6CA1\u6709web\u76EE\u5F55\u7684\u64CD\u4F5C\u6743\u9650-\u4E5F\u4F1A\u51FA\u73B0403\u9519\u8BEF\u3002" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u5F0F2-\u6743\u9650\u95EE\u9898-\u5982\u679Cnginx\u6CA1\u6709web\u76EE\u5F55\u7684\u64CD\u4F5C\u6743\u9650-\u4E5F\u4F1A\u51FA\u73B0403\u9519\u8BEF\u3002" aria-hidden="true">#</a> 2.2 \u65B9\u5F0F2\uFF1A\u6743\u9650\u95EE\u9898\uFF0C\u5982\u679Cnginx\u6CA1\u6709web\u76EE\u5F55\u7684\u64CD\u4F5C\u6743\u9650\uFF0C\u4E5F\u4F1A\u51FA\u73B0403\u9519\u8BEF\u3002</h3><p>\u89E3\u51B3\u529E\u6CD5\uFF1A\u4FEE\u6539web\u76EE\u5F55\u7684\u8BFB\u5199\u6743\u9650\uFF0C\u6216\u8005\u662F\u628Anginx\u7684\u542F\u52A8\u7528\u6237\u6539\u6210\u76EE\u5F55\u7684\u6240\u5C5E\u7528\u6237\uFF0C\u91CD\u542FNginx\u5373\u53EF\u89E3\u51B3</p><ol><li><p>chmod -R 777 /data</p></li><li><p>chmod -R 777 /data/www/</p></li></ol><h4 id="_2-3-\u65B9\u5F0F3-\u7F3A\u5C11index-html\u6216\u8005index-php\u6587\u4EF6-\u5C31\u662F\u914D\u7F6E\u6587\u4EF6\u4E2Dindex-index-html-index-htm\u8FD9\u884C\u4E2D\u7684\u6307\u5B9A\u7684\u6587\u4EF6\u3002" tabindex="-1"><a class="header-anchor" href="#_2-3-\u65B9\u5F0F3-\u7F3A\u5C11index-html\u6216\u8005index-php\u6587\u4EF6-\u5C31\u662F\u914D\u7F6E\u6587\u4EF6\u4E2Dindex-index-html-index-htm\u8FD9\u884C\u4E2D\u7684\u6307\u5B9A\u7684\u6587\u4EF6\u3002" aria-hidden="true">#</a> 2.3 \u65B9\u5F0F3\uFF1A<strong>\u7F3A\u5C11index.html\u6216\u8005index.php\u6587\u4EF6\uFF0C\u5C31\u662F\u914D\u7F6E\u6587\u4EF6\u4E2Dindex index.html index.htm\u8FD9\u884C\u4E2D\u7684\u6307\u5B9A\u7684\u6587\u4EF6\u3002</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {

   listen 80;

  server_name localhost;

  index index.php index.html;

  root /data/www/;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u628A\u5B83\u5F53\u505A\u6587\u4EF6\u76EE\u5F55\uFF0C\u8981\u5217\u51FA\u6587\u4EF6\u76EE\u5F55</p><p>\u6DFB\u52A0: autoindex on;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6587\u4EF6\u670D\u52A1\u5668
    server {
        listen       80;
        server_name  file.isture.com;

        location / {
            root   /home/ftpuser/file;
            autoindex on;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u65B9\u5F0F4-selinux\u8BBE\u7F6E\u4E3A\u5F00\u542F\u72B6\u6001-enabled-\u7684\u539F\u56E0\u3002" tabindex="-1"><a class="header-anchor" href="#_2-4-\u65B9\u5F0F4-selinux\u8BBE\u7F6E\u4E3A\u5F00\u542F\u72B6\u6001-enabled-\u7684\u539F\u56E0\u3002" aria-hidden="true">#</a> 2.4 \u65B9\u5F0F4\uFF1A<strong>SELinux\u8BBE\u7F6E\u4E3A\u5F00\u542F\u72B6\u6001\uFF08enabled\uFF09\u7684\u539F\u56E0\u3002</strong></h3><p>\u67E5\u770B\u5F53\u524Dselinux\u7684\u72B6\u6001\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/sbin/sestatus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06SELINUX=enforcing \u4FEE\u6539\u4E3A SELINUX=disabled \u72B6\u6001\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#SELINUX=enforcing

 SELINUX=disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542F\u751F\u6548\u3002reboot\u3002</p><hr><p>\u4E0D\u60F3\u91CD\u542F\u7684\u53EF\u4EE5\u4F7F\u7528\u4E34\u65F6\u5173\u95ED</p><p>\u4E34\u65F6\u5173\u95ED\uFF08\u4E0D\u7528\u91CD\u542F\u673A\u5668\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenforce 0          ##\u8BBE\u7F6ESELinux \u6210\u4E3Apermissive\u6A21\u5F0F

 \\##setenforce 1 \u8BBE\u7F6ESELinux \u6210\u4E3Aenforcing\u6A21\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,29),u={href:"https://blog.51cto.com/bguncle/957315",target:"_blank",rel:"noopener noreferrer"},v=d("\u67E5\u770B SELinux\u72B6\u6001\u53CA\u5173\u95EDSELinux"),x={href:"https://blog.csdn.net/shadow_zed/article/details/106853355",target:"_blank",rel:"noopener noreferrer"},m=d("\u56DB\u79CD\u89E3\u51B3Nginx\u51FA\u73B0403 forbidden \u62A5\u9519\u7684\u65B9\u6CD5");function g(b,h){const n=t("ExternalLinkIcon");return s(),l("div",null,[c,e("p",null,[e("a",u,[v,i(n)])]),e("p",null,[e("a",x,[m,i(n)])])])}const _=a(o,[["render",g],["__file","nginx-x-forbidden403.html.vue"]]);export{_ as default};
