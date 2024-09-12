import{d as n}from"./app.cb395b51.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h1 id="\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875" aria-hidden="true">#</a> \u5206\u9875</h1><p><code>el-pagination</code> \u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u5206\u9875\u529F\u80FD\u3002\u4F46\u5728\u6211\u4EEC\u4E1A\u52A1\u5F00\u53D1\u4E2D\uFF0C\u5206\u9875\u5F80\u5F80\u4E0D\u9700\u8981\u90A3\u4E48\u590D\u6742\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u5728\u7CFB\u7EDF\u4E2D\u6BCF\u9875\u6761\u6570\u3001\u9ED8\u8BA4\u9875\u5E94\u8BE5\u7EDF\u4E00\u914D\u7F6E\uFF0C\u5F53\u5206\u9875\u6709\u65B0\u7684\u9700\u6C42\u65F6\uFF0C\u8FD9\u53EF\u80FD\u9700\u8981\u82B1\u8D39\u5927\u91CF\u65F6\u95F4\u6765\u5F00\u53D1\u3002 <code>GPagination</code> \u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u63D0\u4F9B\u4E86\u76F8\u540C\u5206\u9875\u914D\u7F6E\uFF0C\u7B80\u5316\u4E86\u5206\u9875\u64CD\u4F5C\u4E8B\u4EF6\u7684\u5904\u7406\u3002</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">total</td><td style="text-align:center;">\u603B\u6761\u6570</td><td>Number</td><td>-</td><td>0</td></tr><tr><td style="text-align:left;">current-page \uFF08\u652F\u6301.sync\uFF09</td><td style="text-align:center;">\u5F53\u524D\u9875\u7801</td><td>Number</td><td>-</td><td>1</td></tr><tr><td style="text-align:left;">size \uFF08\u652F\u6301.sync\uFF09</td><td style="text-align:center;">\u6BCF\u9875\u6761\u6570</td><td>Number \uFF5C</td><td>10/20/40/80/100</td><td>10</td></tr></tbody></table><h3 id="table-events" tabindex="-1"><a class="header-anchor" href="#table-events" aria-hidden="true">#</a> Table Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>pageSize/currentPage \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u5F53\u9875\u9762\u3001\u6BCF\u9875\u6761\u6570</td></tr></tbody></table><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>GViewCard<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>GPagination
      <span class="token operator">:</span>total<span class="token operator">=</span><span class="token string">&quot;total&quot;</span>
      <span class="token operator">:</span>currentPage<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">&quot;currentPage&quot;</span>
      <span class="token operator">:</span>size<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">&quot;size&quot;</span>
      @change<span class="token operator">=</span><span class="token string">&quot;changePage&quot;</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>GViewCard<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> GViewCard <span class="token keyword">from</span> <span class="token string">&quot;@/components/GViewCard&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GPagination <span class="token keyword">from</span> <span class="token string">&quot;@/components/GPagination&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    GViewCard<span class="token punctuation">,</span>
    GPagination<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">currentPage</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changePage</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div>`,7);function p(e,o){return t}var l=a(s,[["render",p]]);export{l as default};
