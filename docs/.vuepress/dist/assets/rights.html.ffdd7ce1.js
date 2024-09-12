import{d as n}from"./app.cb395b51.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u6307\u4EE4\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u6743\u9650" aria-hidden="true">#</a> \u6307\u4EE4\u6743\u9650</h1><p><code>v-rights</code> \u901A\u5E38\u7528\u6765\u63A7\u5236\u64CD\u4F5C\u6309\u94AE\u3002</p><h3 id="directiveper" tabindex="-1"><a class="header-anchor" href="#directiveper" aria-hidden="true">#</a> directivePer</h3><p>\u6743\u9650\u6570\u636E\u6E90\uFF0CMap\u683C\u5F0F\u3002\u5728\u4F7F\u7528\u6307\u4EE4\u6743\u9650\u524D\uFF0C\u4F60\u9700\u8981\u6DFB\u52A0\u6570\u636E\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// @/sotre/modules/permission</span>

<span class="token comment">// \u4FEE\u6539\u4EE5\u4E0B\u903B\u8F91</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6307\u4EE4\u6743\u9650</span>
    <span class="token literal-property property">directivePer</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">setDirectivePer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>directivePer <span class="token operator">=</span> data
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">generateRoutes</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

              <span class="token keyword">const</span> mock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
              mock<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
              <span class="token comment">// mock.set(&#39;delete&#39;, true)</span>

              <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setDirectivePer&#39;</span><span class="token punctuation">,</span> mock<span class="token punctuation">)</span>
              <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="v-rights" tabindex="-1"><a class="header-anchor" href="#v-rights" aria-hidden="true">#</a> v-rights</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>GViewCard<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> v<span class="token operator">-</span>rights<span class="token operator">=</span><span class="token string">&quot;&#39;edit&#39;&quot;</span><span class="token operator">&gt;</span>\u7F16\u8F91<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;danger&quot;</span> v<span class="token operator">-</span>rights<span class="token operator">=</span><span class="token string">&quot;&#39;delete&#39;&quot;</span><span class="token operator">&gt;</span>\u5220\u9664<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
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
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre></div>`,7);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
