import{d as s}from"./app.124ba04d.js";import{_ as n}from"./detail.b2fa6640.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const p={},t=s(`<h1 id="\u8BE6\u60C5\u9875" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u60C5\u9875" aria-hidden="true">#</a> \u8BE6\u60C5\u9875</h1><p>\u5728src/views/\u4E0B\u521B\u5EFA\u65B0\u7684\u9875\u9762\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>  \u251C\u2500\u2500 <span class="token keyword">public</span>
  \u251C\u2500\u2500 src
  \u2502   \u251C\u2500\u2500 assets               # \u672C\u5730\u9759\u6001\u8D44\u6E90
  <span class="token operator">:</span>   <span class="token operator">:</span>
  \u2502   \u251C\u2500\u2500 views                # \u9875\u9762\u6587\u4EF6
<span class="token operator">+</span> \u2502   \u2502   \u2514\u2500\u2500 userInfo         # \u7528\u6237\u9875\u9762\u6587\u4EF6\u5939
<span class="token operator">+</span> \u2502   \u2502   \u2514\u2500\u2500\u2500\u2500 index<span class="token punctuation">.</span>vue      # \u7528\u6237\u4E3B\u9875\u9762\u6587\u4EF6
<span class="token operator">+</span> \u2502   \u2502   \u2514\u2500\u2500\u2500\u2500 detail<span class="token punctuation">.</span>vue     # \u7528\u6237\u8BE6\u60C5\u9875\u9762\u6587\u4EF6
  \u2502   \u2514\u2500\u2500 main<span class="token punctuation">.</span>js              # \u5E94\u7528\u5165\u53E3js
  \u251C\u2500\u2500 <span class="token keyword">package</span><span class="token punctuation">.</span>json             # <span class="token keyword">package</span><span class="token punctuation">.</span>json
  \u251C\u2500\u2500 <span class="token constant">README</span><span class="token punctuation">.</span>md                # <span class="token constant">README</span><span class="token punctuation">.</span>md
  \u2514\u2500\u2500 vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js            # vue \u914D\u7F6E\u6587\u4EF6
</code></pre></div><p>\u914D\u7F6E\u8DEF\u7531</p><p>\u6CE8\u610F\u4E00\u7EA7\u8DEF\u7531\u901A\u5E38\u7528\u4F5C layout \u5E03\u5C40\uFF0C\u56E0\u6B64\u8BE6\u60C5\u9875\u9762\u9700\u8981\u653E\u5230\u4E8C\u7EA7\u8DEF\u7531\u4E0B\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u4E3A\u4E86\u65B9\u4FBF\u7BA1\u7406\uFF0C\u4F60\u53EF\u4EE5\u628A\u591A\u4E2A\u8BE6\u60C5\u653E\u5230\u4E00\u4E2A\u8DEF\u7531\u4E0B\u3002</span>
<span class="token comment">// \u9ED8\u8BA4\u8BE6\u60C5\u914D\u7F6E\u6587\u4EF6\u5728 /config/config.router.js</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;details&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/details&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hideMenu</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u83DC\u5355\u4E2D\u9690\u85CF</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;businessDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/businessDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;business/businessDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;business&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBF\u95EE\u8BE5\u8DEF\u5F84\u65F6 \u83DC\u5355\u680F\u9009\u4E2D\u67D0\u4E00\u9879 \u503C\u4E3A name</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8BE6\u60C5\u9875&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;icon&#39;</span><span class="token operator">:</span> <span class="token string">&#39;icon-tongjifenxi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+n+'" alt="Image"></p>',7);function e(o,c){return t}var k=a(p,[["render",e]]);export{k as default};
