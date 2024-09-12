import{r as t,o,c as p,a as s,b as e,F as c,e as n,d as r}from"./app.cb395b51.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const k={},u=s("h1",{id:"\u590D\u5236",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u590D\u5236","aria-hidden":"true"},"#"),n(" \u590D\u5236")],-1),i=n("\u5B9E\u73B0\u57FA\u4E8E "),d={href:"https://cn.vuejs.org/v2/guide/custom-directive.html",target:"_blank",rel:"noopener noreferrer"},g=n("\u81EA\u5B9A\u4E49\u6307\u4EE4"),_=n("\u3002"),m=r(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>GViewCard<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> v<span class="token operator">-</span>copy<span class="token operator">=</span><span class="token string">&quot;\`\u6587\u5B57 - 888888\`&quot;</span><span class="token operator">&gt;</span>\u70B9\u51FB\u6587\u5B57\u590D\u5236<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">&quot;copy&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>\u70B9\u51FB\u6309\u94AE\u590D\u5236<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>GViewCard<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> GViewCard <span class="token keyword">from</span> <span class="token string">&quot;@/components/GViewCard&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    GViewCard<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$copy</span><span class="token punctuation">(</span><span class="token string">&quot;\u6309\u94AE - 888888&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div>`,1);function y(h,f){const a=t("ExternalLinkIcon");return o(),p(c,null,[u,s("p",null,[i,s("a",d,[g,e(a)]),_]),m],64)}var w=l(k,[["render",y]]);export{w as default};
