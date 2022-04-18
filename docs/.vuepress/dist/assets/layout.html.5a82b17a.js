import{r as o,o as t,c as e,a as s,b as r,F as c,d as n,e as a}from"./app.0ec8b798.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var k="/assets/layout.1b9642f7.png";const i={},u=n('<h1 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h1><p>\u5E03\u5C40\u662F\u4E00\u4E2A\u4E2D\u540E\u53F0\u5E94\u7528\u5FC5\u5907\u7684\uFF0C\u4E00\u4E2A\u5E94\u7528\u6574\u4F53\u5E03\u5C40\u4F53\u5F80\u5F80\u4F1A\u5305\u542B\u5BFC\u822A\u680F\u3001\u83DC\u5355\u3001\u4EE5\u53CA\u5185\u5BB9\u7B49\u3002</p><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><p><code>layout</code> \u662F\u9879\u76EE\u81EA\u5E26\u7684\u9875\u9762\u5E03\u5C40\uFF0C\u4E3A\u4E86\u4F7F\u7528\u65B9\u4FBF\uFF0C<code>vue-element-pro</code>\u5185\u90E8\u5B9A\u4E49\u4E3A <code>layout</code> \u3002\u4EE5\u4E0B\u56FE\u4E3A\u4F8B\uFF0C<code>layout</code>\u5206\u4E3A\u5DE6\u4FA7\u7684\u83DC\u5355\u680F\u3001\u9876\u90E8\u7684\u5BFC\u822A\u680F\u4EE5\u5185\u5BB9\u533A\u57DF\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\u4F60\u53EA\u9700\u8981\u5728\u5185\u5BB9\u533A\u57DF\u8FDB\u884C\u4E1A\u52A1\u5F00\u53D1\uFF0C\u8FD9\u4F1A\u5F88\u5927\u7A0B\u5EA6\u7684\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002</p><p><img src="'+k+`" alt="Image"></p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>layout \u4E3A\u5185\u90E8\u5B9A\u4E49\u4F7F\u7528\uFF0C\u5728\u4F7F\u7528\u65B0\u7684\u9875\u9762\u5E03\u5C40\u6216\u521B\u5EFA\u65B0\u7684\u83DC\u5355\uFF0C\u4F60\u5E94\u8BE5\u907F\u514D\u4F7F\u7528\u8BE5\u5355\u8BCD\u3002</p></div><h4 id="\u4FEE\u6539-layout" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-layout" aria-hidden="true">#</a> \u4FEE\u6539 layout</h4><p>\u627E\u5230 <code>@/layouts</code> \u6587\u4EF6\u5939\uFF0C\u9879\u76EE\u81EA\u5E26\u7684layout\u4EE3\u7801\u90FD\u653E\u5728\u6B64\u6587\u4EF6\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u6216\u8005\u4FEE\u6539<code>layout</code>\u7684\u529F\u80FD\u4EE5\u53CA\u6837\u5F0F\u3002</p><h4 id="\u5B9A\u5236-layout" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u5236-layout" aria-hidden="true">#</a> \u5B9A\u5236 layout</h4><p>\u5728\u67D0\u4E9B\u6E05\u7A7A\u4E0B\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u4E00\u4E2A\u65B0\u7684\u9875\u9762\u5E03\u5C40\u3002\u4F8B\u5982\u4E00\u4E2A\u63A5\u53E3\u6587\u6863\u9875\u9762\uFF0Clayout\u53EF\u80FD\u65E0\u6CD5\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\u3002\u4F60\u53EA\u9700\u8981\u65B0\u5EFA\u4E00\u4E2A\u5E03\u5C40\u7EC4\u4EF6\uFF0C\u7136\u540E\u4FEE\u6539\u4E00\u7EA7\u83DC\u5355\u4E0B\u7684<code>component</code>\u5C5E\u6027\u4E3A\u65B0\u7684\u5E03\u5C40\u7EC4\u4EF6\u5730\u5740\u3002</p><p>\u9ED8\u8BA4\u793A\u4F8B:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/document&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;document&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u4E3Alayout\uFF0C\u5F53\u4F7F\u7528\u6846\u67B6\u81EA\u5E26\u5E03\u5C40\u65F6\uFF0C\u53EF\u7701\u7565\u8BE5\u5C5E\u6027\u3002</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;document/info&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;documentInfo&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63A5\u53E3\u6587\u6863&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-info&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u6362layout:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/document&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;document&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;/document&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u66F4\u6539\u4E3A\u4F60\u9700\u8981\u7684\u5E03\u5C40</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;document/info&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;documentInfo&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63A5\u53E3\u6587\u6863&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-info&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9" aria-hidden="true">#</a> \u5185\u5BB9</h2>`,15),d=a("\u5185\u5BB9\u4E5F\u5C31\u662F\u4E1A\u52A1\u5C55\u793A\u7684\u533A\u57DF\uFF0C\u901A\u5E38\u4F60\u53EA\u9700\u8981\u5728\u8FD9\u91CC\u8FDB\u884C\u5F00\u53D1\u3002\u5B9E\u73B0\u65B9\u5F0F\u662F"),y={href:"https://router.vuejs.org/zh/guide/essentials/nested-routes.html",target:"_blank",rel:"noopener noreferrer"},h=a("\u5D4C\u5957\u8DEF\u7531"),m=a("\uFF0C\u56E0\u6B64\u5F53\u4F60\u5728\u5DE6\u4FA7\u83DC\u5355\u5207\u6362\u65F6\uFF0C\u53EA\u6709\u5185\u5BB9\u533A\u57DF\u53D8\u5316\uFF0C\u5185\u5BB9\u4EE5\u5916\u7684\u533A\u57DF\u4E0D\u4F1A\u6536\u5230\u5F71\u54CD\u3002"),g=n(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">/</span>user<span class="token operator">/</span>list                    <span class="token operator">/</span>user<span class="token operator">/</span>info
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>                  <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> User             <span class="token operator">|</span>                  <span class="token operator">|</span> User            <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span> <span class="token operator">|</span>                  <span class="token operator">|</span> <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">|</span> list         <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span>  <span class="token operator">|</span> <span class="token operator">|</span>  info       <span class="token operator">|</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">|</span>              <span class="token operator">|</span> <span class="token operator">|</span>                  <span class="token operator">|</span> <span class="token operator">|</span>             <span class="token operator">|</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span> <span class="token operator">|</span>                  <span class="token operator">|</span> <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>                  <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p>\u5F53\u5207\u6362\u5185\u5BB9\u533A\u57DF\u65F6\uFF0C<code>el-element-pro</code> \u9ED8\u8BA4\u5E26\u6709\u8FC7\u6E21\u52A8\u753B\u3002 <br>\u5728 <code>@/layouts/MenuModal/BasicLayoutInline</code> \u4E2D\u4FEE\u6539\u8FC7\u6E21\u6548\u679C\u3002</p></div>`,2);function _(f,v){const p=o("ExternalLinkIcon");return t(),e(c,null,[u,s("p",null,[d,s("a",y,[h,r(p)]),m]),g],64)}var b=l(i,[["render",_]]);export{b as default};