import{d as n}from"./app.cb395b51.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/vue-lgsn-admin-docs/assets/domePage.8514d30f.png",p="/vue-lgsn-admin-docs/assets/domePage1.e1f680c9.png";const t={},o=n(`<h1 id="\u65B0\u589E\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u9875\u9762" aria-hidden="true">#</a> \u65B0\u589E\u9875\u9762</h1><p>\u5728src/views/\u4E0B\u521B\u5EFA\u65B0\u7684\u9875\u9762\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>  \u251C\u2500\u2500 <span class="token keyword">public</span>
  \u251C\u2500\u2500 src
  \u2502   \u251C\u2500\u2500 assets               # \u672C\u5730\u9759\u6001\u8D44\u6E90
  <span class="token operator">:</span>   <span class="token operator">:</span>
  \u2502   \u251C\u2500\u2500 views                # \u9875\u9762\u6587\u4EF6
<span class="token operator">+</span> \u2502   \u2502   \u2514\u2500\u2500 domePage<span class="token punctuation">.</span>vue      # \u65B0\u9875\u9762\u6587\u4EF6
  \u2502   \u2514\u2500\u2500 main<span class="token punctuation">.</span>js              # \u5E94\u7528\u5165\u53E3js
  \u251C\u2500\u2500 <span class="token keyword">package</span><span class="token punctuation">.</span>json             # <span class="token keyword">package</span><span class="token punctuation">.</span>json
  \u251C\u2500\u2500 <span class="token constant">README</span><span class="token punctuation">.</span>md                # <span class="token constant">README</span><span class="token punctuation">.</span>md
  \u2514\u2500\u2500 vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js            # vue \u914D\u7F6E\u6587\u4EF6
</code></pre></div><p>\u914D\u7F6E\u8DEF\u7531</p><p>\u6CE8\u610F\u4E00\u7EA7\u8DEF\u7531\u901A\u5E38\u7528\u4F5C layout \u5E03\u5C40\uFF0C\u56E0\u6B64\u65B0\u9875\u9762\u9700\u8981\u653E\u5230\u4E8C\u7EA7\u8DEF\u7531\u4E0B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dome&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dome&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;domePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/page&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;domePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Dome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+a+`" alt="Image"></p><p>\u8BE5\u8DEF\u7531\u4E0B\u53EA\u6709\u4E00\u4E2A\u5B50\u7EA7\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4F1A\u5C55\u793A\u4E3A\u4E00\u7EA7\u83DC\u5355\u3002\u5982\u679C\u4F60\u60F3\u5C55\u793A\u4E8C\u7EA7\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6DFB\u52A0 showRoot</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dome&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dome&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showRoot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E\u9875\u9762&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;domePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/page&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;domePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Dome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6216\u8005\u6DFB\u52A0\u5B50\u7EA7</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dome&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dome&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E\u9875\u9762&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;domePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/page&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;domePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Dome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;casePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/casePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;casePage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6848\u4F8B&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+p+'" alt="Image"></p>',10);function e(r,c){return o}var i=s(t,[["render",e]]);export{i as default};
