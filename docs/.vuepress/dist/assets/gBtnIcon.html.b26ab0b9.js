import{d as n}from"./app.cb395b51.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u64CD\u4F5C\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u56FE\u6807" aria-hidden="true">#</a> \u64CD\u4F5C\u56FE\u6807</h1><p>\u901A\u5E38\u662F\u7528\u505A\u5217\u8868\u7684\u64CD\u4F5C\u6309\u94AE\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>icon</td><td>\u56FE\u6807\u7C7B\u578B</td><td>String</td><td>edit / deleted / pause / run / revoke</td><td>edit</td></tr></tbody></table><h3 id="table-events" tabindex="-1"><a class="header-anchor" href="#table-events" aria-hidden="true">#</a> Table Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u56FE\u6807\u70B9\u51FB\u65F6\u51FA\u53D1</td><td>-</td></tr></tbody></table><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>GViewCard<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>GBtnIcon
      v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in iconList&quot;</span>
      <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span>
      <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;item&quot;</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>GViewCard<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> GViewCard <span class="token keyword">from</span> <span class="token string">&quot;@/components/GViewCard&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GBtnIcon <span class="token keyword">from</span> <span class="token string">&quot;@/components/GBtnIcon&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">iconList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;edit&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pause&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;revoke&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    GViewCard<span class="token punctuation">,</span>
    GBtnIcon<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div>`,6);function o(p,e){return t}var l=s(a,[["render",o]]);export{l as default};
