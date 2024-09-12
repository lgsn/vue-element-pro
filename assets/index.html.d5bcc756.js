import{r as t,o as p,c,a as s,b as a,F as r,d as o,e as n}from"./app.09d9145f.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=o('<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p><a href=""><img src="https://img.shields.io/badge/2.6.11-vue-brightgreen" alt="Image"></a>\xA0 \xA0 <a href=""><img src="https://img.shields.io/badge/2.15.1-element--ui-brightgreen" alt="Image"></a></p>',2),h=s("a",{href:""},"vue-lgsn-admin",-1),m=n(" \u662F\u57FA\u4E8E "),u={href:"https://cn.vuejs.org/v2/guide/index.html",target:"_blank",rel:"noopener noreferrer"},k=n("vue"),_=n(" \u548C "),g={href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},v=n("element-ui"),f=n(" \u5C01\u88C5\u7684\u4E00\u5957\u4E2D\u540E\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848\u3002 \u5185\u90E8\u5B9E\u73B0\u4E86\u52A8\u6001\u8DEF\u7531\u3001\u6743\u9650\u6821\u9A8C/\u6307\u4EE4\uFF0C\u5E76\u63D0\u70BC\u51FA\u5178\u578B\u6A21\u677F/\u4E1A\u52A1\u7EC4\u4EF6/\u529F\u80FD\u7EC4\u4EF6\u3002\u5B83\u53EF\u4EE5\u5E2E\u4F60\u5FEB\u901F\u642D\u5EFA\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u9879\u76EE\u3002"),b=s("h2",{id:"\u524D\u5E8F\u51C6\u5907",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u524D\u5E8F\u51C6\u5907","aria-hidden":"true"},"#"),n(" \u524D\u5E8F\u51C6\u5907")],-1),x=n("\u9879\u76EE\u6280\u672F\u6808\u57FA\u4E8E "),j={href:"https://cn.vuejs.org/v2/guide/",target:"_blank",rel:"noopener noreferrer"},E=n("vue"),z=n("\u3001"),A={href:"https://v3.vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},B=n("vuex"),N=n("\u3001"),V={href:"https://v3.router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},w=n("vue-router"),y=n(" \u3001"),I={href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"},C=n("vue-cli"),D=n(" \u3001"),F={href:"http://www.axios-js.com/",target:"_blank",rel:"noopener noreferrer"},L=n("axios"),O=n(" \u548C "),T={href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"},R=n("element-ui"),S=n("\uFF0C\u63D0\u524D\u4E86\u89E3\u548C\u5B66\u4E60\u8FD9\u4E9B\u77E5\u8BC6\u4F1A\u5BF9\u4F7F\u7528\u672C\u9879\u76EE\u6709\u5F88\u5927\u7684\u5E2E\u52A9\u3002"),U=o(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p>\u672C\u9879\u76EE\u57FA\u4E8EVue v2.x\u7248\u672C\u5F00\u53D1\uFF0C\u786E\u4FDD <code>Vue</code> \u53CA <code>vue\u63D2\u4EF6</code> \u7248\u672C\uFF0C\u5347\u7EA7\u7248\u672C\u53EF\u80FD\u4F1A\u5E26\u6765\u672A\u77E5\u95EE\u9898\u3002</p></div><h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">-</span> \u767B\u5F55 <span class="token operator">/</span> \u6CE8\u9500

<span class="token operator">-</span> \u6743\u9650\u9A8C\u8BC1
  <span class="token operator">-</span> \u9875\u9762\u6743\u9650
  <span class="token operator">-</span> \u6307\u4EE4\u6743\u9650
  <span class="token operator">-</span> \u6743\u9650\u914D\u7F6E

<span class="token operator">-</span> \u5168\u5C40\u529F\u80FD
  <span class="token operator">-</span> \u52A8\u6001\u83DC\u5355
  <span class="token operator">-</span> \u52A8\u6001\u9762\u5305\u5C51
  <span class="token operator">-</span> \u81EA\u9002\u5E94\u6536\u7F29\u83DC\u5355

<span class="token operator">-</span> \u9519\u8BEF\u9875\u9762
  <span class="token operator">-</span> <span class="token number">403</span>
  <span class="token operator">-</span> <span class="token number">404</span>
  <span class="token operator">-</span> <span class="token number">500</span>

<span class="token operator">-</span> \u7D44\u4EF6
  <span class="token operator">-</span> \u5934\u50CF
  <span class="token operator">-</span> \u4E0A\u4F20

<span class="token operator">-</span> \u6307\u4EE4
  <span class="token operator">-</span> \u6743\u9650
  <span class="token operator">-</span> \u590D\u5236

<span class="token operator">-</span> \u7EFC\u5408\u5B9E\u4F8B
<span class="token operator">-</span> \u83DC\u5355
<span class="token operator">-</span> Dashboard
</code></pre></div><br><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><p>\u672C\u9879\u76EE\u5DF2\u7ECF\u4E3A\u4F60\u751F\u6210\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u5F00\u53D1\u6846\u67B6\uFF0C\u63D0\u4F9B\u4E86\u6DB5\u76D6\u4E2D\u540E\u53F0\u5F00\u53D1\u7684\u5404\u7C7B\u529F\u80FD\u548C\u5751\u4F4D\uFF0C\u4E0B\u9762\u662F\u6574\u4E2A\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u251C\u2500\u2500 build                      <span class="token comment"># \u6784\u5EFA\u76F8\u5173</span>
\u251C\u2500\u2500 public                     <span class="token comment"># \u9759\u6001\u8D44\u6E90</span>
\u2502   \u2502\u2500\u2500 favicon.ico            <span class="token comment"># favicon\u56FE\u6807</span>
\u2502   \u2514\u2500\u2500 index.html             <span class="token comment"># html\u6A21\u677F</span>
\u251C\u2500\u2500 src                        <span class="token comment"># \u6E90\u4EE3\u7801</span>
\u2502   \u251C\u2500\u2500 api                    <span class="token comment"># \u6240\u6709\u8BF7\u6C42</span>
\u2502   \u251C\u2500\u2500 assets                 <span class="token comment"># \u9759\u6001\u8D44\u6E90</span>
\u2502   \u251C\u2500\u2500 components             <span class="token comment"># \u5168\u5C40\u516C\u7528\u7EC4\u4EF6</span>
\u2502   \u251C\u2500\u2500 config                 <span class="token comment"># \u5168\u5C40\u914D\u7F6E\u6587\u4EF6</span>
\u2502   \u251C\u2500\u2500 layouts                <span class="token comment"># \u5168\u5C40 layout</span>
\u2502   \u251C\u2500\u2500 router                 <span class="token comment"># \u8DEF\u7531</span>
\u2502   \u251C\u2500\u2500 store                  <span class="token comment"># \u5168\u5C40 store \u7BA1\u7406</span>
\u2502   \u251C\u2500\u2500 styles                 <span class="token comment"># \u5168\u5C40\u6837\u5F0F</span>
\u2502   \u251C\u2500\u2500 utils                  <span class="token comment"># \u5168\u5C40\u516C\u7528\u65B9\u6CD5</span>
\u2502   \u251C\u2500\u2500 views                  <span class="token comment"># views \u6240\u6709\u9875\u9762</span>
\u2502   \u251C\u2500\u2500 App.vue                <span class="token comment"># \u5165\u53E3\u9875\u9762</span>
\u2502   \u251C\u2500\u2500 main.js                <span class="token comment"># \u5165\u53E3\u6587\u4EF6 \u52A0\u8F7D\u7EC4\u4EF6 \u521D\u59CB\u5316\u7B49</span>
\u2502   \u2514\u2500\u2500 permission.js          <span class="token comment"># \u6743\u9650\u7BA1\u7406</span>
\u251C\u2500\u2500 .eslintignore.js           <span class="token comment"># eslint \u5FFD\u7565\u6821\u9A8C</span>
\u251C\u2500\u2500 .eslintrc.js               <span class="token comment"># eslint \u914D\u7F6E\u9879</span>
\u251C\u2500\u2500 .gitignore                 <span class="token comment"># git \u914D\u7F6E</span>
\u251C\u2500\u2500 .babel.config.js           <span class="token comment"># babel \u914D\u7F6E</span>
\u251C\u2500\u2500 package.json               <span class="token comment"># package.json</span>
\u2514\u2500\u2500 vue.config.js              <span class="token comment"># vue-cli \u914D\u7F6E</span>
</code></pre></div><p>\u6211\u4EEC\u63A8\u8350\u5C3D\u53EF\u80FD\u7684\u62C6\u5206\u8DEF\u7531\u7EC4\u4EF6\u4E3A\u66F4\u7EC6\u7C92\u5EA6\u7684\u7EC4\u4EF6\uFF0C\u5BF9\u4E8E\u591A\u4E2A\u9875\u9762\u53EF\u80FD\u4F1A\u7528\u5230\u7684\u7EC4\u4EF6\u6211\u4EEC\u63A8\u8350\u653E\u5230 src/components \u4E2D\uFF0C\u5BF9\u4E8E\u53EA\u662F\u88AB\u5355\u4E2A\u9875\u9762\u4F9D\u8D56\u7684\uFF08\u533A\u5757\uFF09\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u63A8\u8350\u5C31\u8FD1\u7EF4\u62A4\u5230\u8DEF\u7531\u7EC4\u4EF6\u6587\u4EF6\u5939\u4E0B\u5373\u53EF\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p><code>vue-lgsn-admin</code> \u5B9A\u4F4D\u662F\u540E\u53F0\u96C6\u6210\u65B9\u6848\uFF0C\u56E0\u6B64\u672C\u9879\u76EE\u96C6\u6210\u4E86\u5F88\u591A\u4F60\u53EF\u80FD\u7528\u4E0D\u5230\u7684\u529F\u80FD\uFF0C\u4F1A\u9020\u6210\u4E0D\u5C11\u7684\u4EE3\u7801\u5197\u4F59\u3002\u5982\u679C\u4F60\u7684\u9879\u76EE\u53EA\u9700\u8981\u6846\u67B6\u672C\u8EAB\u529F\u80FD\uFF0C\u53EF\u4EE5\u9009\u62E9 <a href="">\u7B80\u7EA6\u7248</a> \u65B9\u5F0F\u5B89\u88C5\u3002</p><h3 id="\u5B8C\u6574\u7248" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u7248" aria-hidden="true">#</a> \u5B8C\u6574\u7248</h3><p>\u5B8C\u6574\u7248\u662F\u5305\u542B\u4E86\u672C\u9879\u76EE\u7684\u5168\u90E8\u529F\u80FD\uFF0C\u5F00\u7BB1\u5373\u7528\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u514B\u9686\u9879\u76EE</span>
<span class="token function">git</span> clone TODO

<span class="token comment"># \u8FDB\u5165\u9879\u76EE\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> vue-lgsn-admin

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># \u5EFA\u8BAE\u4E0D\u8981\u7528 cnpm \u5B89\u88C5 \u4F1A\u6709\u5404\u79CD\u8BE1\u5F02\u7684bug \u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u64CD\u4F5C\u89E3\u51B3 npm \u4E0B\u8F7D\u901F\u5EA6\u6162\u7684\u95EE\u9898</span>
<span class="token function">npm</span> <span class="token function">install</span> --registry<span class="token operator">=</span>https://registry.npm.taobao.org

<span class="token comment"># \u672C\u5730\u5F00\u53D1 \u542F\u52A8\u9879\u76EE</span>
<span class="token function">npm</span> run serve
</code></pre></div><p>\u5B8C\u6574\u7248\u5185\u5EFA\u4E86\u5178\u578B\u4E1A\u52A1\u6A21\u677F\u3001\u5E38\u7528\u4E1A\u52A1\u7EC4\u4EF6\u3001\u72B6\u6001\u7BA1\u7406\u3001\u5168\u5C40\u8DEF\u7531\u7B49\u7B49\u5404\u79CD\u5B9E\u7528\u7684\u529F\u80FD\u6765\u8F85\u52A9\u5F00\u53D1\u3002</p><h3 id="\u7B80\u7EA6\u7248" tabindex="-1"><a class="header-anchor" href="#\u7B80\u7EA6\u7248" aria-hidden="true">#</a> \u7B80\u7EA6\u7248</h3>`,15),q=s("code",null,"\u7B80\u7EA6\u7248",-1),G=n(" \u662F\u57FA\u4E8E "),H={href:"https://cli.vuejs.org/zh/dev-guide/plugin-dev.html",target:"_blank",rel:"noopener noreferrer"},J=n("vue-cli \u63D2\u4EF6"),K=n(" \u5F00\u53D1."),M=n("\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u53EA\u9700\u8981 "),P=s("code",null,"vue-lgsn-admin",-1),Q=n(" \u6846\u67B6\u672C\u8EAB\uFF0C\u5E76\u4E0D\u9700\u8981\u5176\u4ED6 \u4F8B\u5982\u5178\u578B\u6A21\u7248\u3001\u4E1A\u52A1\u7EC4\u4EF6\u7B49\u7B49\u6846\u67B6\u672C\u8EAB\u5916\u7684\u529F\u80FD\u3002\u5B89\u88C5\u7B80\u7EA6\u7248\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9\uFF0C\u5B83\u53EA\u96C6\u6210\u4E86\u6846\u67B6\u4EE5\u53CA\u6846\u67B6\u672C\u8EAB\u6240\u4F9D\u8D56\u7684\u529F\u80FD\u3002\u4E0D\u9700\u8981\u4F60\u989D\u5916\u7684\u624B\u52A8\u53BB\u5220\u9664\u6C89\u4F59\u4EE3\u7801\u3002\u67E5\u9605"),W={href:"/guide/#%E7%AE%80%E7%BA%A6%E7%89%88%E5%8A%9F%E8%83%BD",target:"_blank",rel:"noopener noreferrer"},X=n("\u7B80\u7EA6\u7248\u529F\u80FD"),Y=o(`<div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5728\u8FD0\u884C <code>\u7B80\u7EA6\u7248</code> \u63D2\u4EF6\u65F6\uFF0C\u5B83\u4F1A\u68C0\u67E5\u5E76\u5220\u9664\u76EE\u5F55\u4E0B\u7684\u4E00\u4E9B\u6587\u4EF6\uFF0C\u4EE5\u786E\u4FDD <code>vue-cli-plugin-lgsnadmin</code> \u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u3002\u6240\u4EE5\u4F60\u9700\u8981\u786E\u8BA4\u662F\u5728\u5168\u65B0\u9879\u76EE\u4E0B\u5B89\u88C5/\u8FD0\u884C <code>\u7B80\u7EA6\u7248</code></p></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u9879\u76EE vue-cli v3.x \u521B\u5EFA\u9879\u76EE\u7684\u540C\u65F6\u4E5F\u4F1A\u5B89\u88C5\u4F9D\u8D56</span>
vue create vue-project

<span class="token comment"># \u8FDB\u5165\u9879\u76EE</span>
<span class="token builtin class-name">cd</span> vue-project

<span class="token comment"># \u5B89\u88C5\u63D2\u4EF6</span>
<span class="token function">npm</span> i --save-dev vue-cli-plugin-lgsnadmin

<span class="token comment"># \u8FD0\u884C\u63D2\u4EF6</span>
vue invoke vue-cli-plugin-lgsnadmin

<span class="token comment"># \u672C\u5730\u5F00\u53D1 \u542F\u52A8\u9879\u76EE</span>
<span class="token function">npm</span> run serve
</code></pre></div><p>\u9009\u62E9\u5B89\u88C5\u4EFB\u4F55\u4E00\u4E2A\u7248\u672C\uFF0C\u542F\u52A8\u9879\u76EE\u540E\u4F1A\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF08\u6216\u624B\u52A8\u8F93\u5165\u9879\u76EEURL\uFF09\uFF0C \u4F60\u770B\u5230\u4E0B\u9762\u7684\u9875\u9762\u5C31\u4EE3\u8868\u64CD\u4F5C\u6210\u529F\u4E86\u3002</p><p><img src="https://lgsn.github.io/vue-lgsn-admin-docs/assets/login.39a1ddab.jpg" alt="Image"></p><p>\u63A5\u4E0B\u6765\u4F60\u53EF\u4EE5\u4FEE\u6539\u4EE3\u7801\u8FDB\u884C\u4E1A\u52A1\u5F00\u53D1\u4E86\uFF0C<a href="#%E5%AE%8C%E6%95%B4%E7%89%88">\u5B8C\u6574\u7248</a>\u9879\u76EE\u5185\u5EFA\u4E86\u5178\u578B\u4E1A\u52A1\u6A21\u677F\u3001\u5E38\u7528\u4E1A\u52A1\u7EC4\u4EF6\u3001\u72B6\u6001\u7BA1\u7406\u3001\u5168\u5C40\u8DEF\u7531\u7B49\u7B49\u5404\u79CD\u5B9E\u7528\u7684\u529F\u80FD\u6765\u8F85\u52A9\u5F00\u53D1\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p>\u4F60\u53EF\u4EE5\u628A <code>\u7B80\u7EA6\u7248</code> \u5F53\u505A\u5DE5\u5177\u7BB1\u6216\u8005\u96C6\u6210\u65B9\u6848\u4ED3\u5E93\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\uFF0C\u6216\u8005\u60F3\u8981\u4EC0\u4E48\u529F\u80FD\u6216\u8005\u7EC4\u4EF6\u5C31\u53BB <code>\u5B8C\u6574\u7248</code> \u90A3\u91CC\u590D\u5236\u8FC7\u6765\u3002</p></div><h3 id="\u7B80\u7EA6\u7248\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u7B80\u7EA6\u7248\u529F\u80FD" aria-hidden="true">#</a> \u7B80\u7EA6\u7248\u529F\u80FD</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">-</span> \u767B\u5F55 <span class="token operator">/</span> \u6CE8\u9500

<span class="token operator">-</span> \u6743\u9650\u9A8C\u8BC1
  <span class="token operator">-</span> \u9875\u9762\u6743\u9650
  <span class="token operator">-</span> \u6743\u9650\u914D\u7F6E

<span class="token operator">-</span> \u5168\u5C40\u529F\u80FD
  <span class="token operator">-</span> \u52A8\u6001\u83DC\u5355
  <span class="token operator">-</span> \u52A8\u6001\u9762\u5305\u5C51
  <span class="token operator">-</span> \u81EA\u9002\u5E94\u6536\u7F29\u83DC\u5355

<span class="token operator">-</span> \u9519\u8BEF\u9875\u9762
  <span class="token operator">-</span> <span class="token number">403</span>
  <span class="token operator">-</span> <span class="token number">404</span>
  <span class="token operator">-</span> <span class="token number">500</span>

</code></pre></div>`,8);function Z($,nn){const e=t("ExternalLinkIcon");return p(),c(r,null,[d,s("p",null,[h,m,s("a",u,[k,a(e)]),_,s("a",g,[v,a(e)]),f]),b,s("p",null,[x,s("a",j,[E,a(e)]),z,s("a",A,[B,a(e)]),N,s("a",V,[w,a(e)]),y,s("a",I,[C,a(e)]),D,s("a",F,[L,a(e)]),O,s("a",T,[R,a(e)]),S]),U,s("p",null,[q,G,s("a",H,[J,a(e)]),K]),s("p",null,[M,P,Q,s("a",W,[X,a(e)])]),Y],64)}var an=l(i,[["render",Z]]);export{an as default};
