import{d as a}from"./app.cb395b51.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},t=a(`<h1 id="\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20" aria-hidden="true">#</a> \u4E0A\u4F20</h1><p><code>GUpload</code> \u662F\u5728 <code>el-upload</code> \u7684\u57FA\u7840\u4E0A\u9488\u5BF9\u4E1A\u52A1\u7279\u6027\u589E\u52A0\u529F\u80FD\u3002</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> \u5355\u4E2A / \u591A\u4E2A \u56FE\u7247\u4E0A\u4F20
<span class="token list punctuation">-</span> \u5217\u8868\u62D6\u62FD\u6392\u5E8F
<span class="token list punctuation">-</span> \u66FF\u6362\u56FE\u7247
<span class="token list punctuation">-</span> \u9884\u89C8\u56FE\u7247
<span class="token list punctuation">-</span> \u5220\u9664\u56FE\u7247

<span class="token list punctuation">-</span> \u4E0A\u4F20\u89C6\u9891
<span class="token list punctuation">-</span> \u5355\u4E2A / \u591A\u4E2A \u89C6\u9891
<span class="token list punctuation">-</span> \u64AD\u653E / \u6682\u505C \u89C6\u9891
<span class="token list punctuation">-</span> \u5217\u8868\u62D6\u62FD\u6392\u5E8F
<span class="token list punctuation">-</span> \u5220\u9664\u89C6\u9891
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p>\u8BF7\u63D0\u524D\u914D\u7F6E <code>ossUpload</code> \u4E0A\u4F20\u5730\u5740\uFF0C\u5BF9\u5E94\u6587\u4EF6 @/api/public</p></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">value/v-model</td><td style="text-align:center;">\u7ED1\u5B9A\u503C</td><td>Sting / Array</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">uploadType</td><td style="text-align:center;">\u4E0A\u4F20\u7C7B\u578B</td><td>Sting</td><td>img / video</td><td>img</td></tr><tr><td style="text-align:left;">limit</td><td style="text-align:center;">\u6700\u5927\u4E0A\u4F20\u6570\u91CF</td><td>Number</td><td>-</td><td>10</td></tr><tr><td style="text-align:left;">draggable</td><td style="text-align:center;">\u662F\u5426\u5F00\u542F\u62D6\u62FD\u6392\u5E8F</td><td>Boolean</td><td>true / false</td><td>false</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:center;">\u662F\u5426\u5F00\u542F\u591A\u9009</td><td>Boolean</td><td>true / false</td><td>false</td></tr></tbody></table><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>

    <span class="token comment">// \u56FE\u7247</span>
    <span class="token operator">&lt;</span>GUpload v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;img&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

    <span class="token comment">// \u89C6\u9891</span>
    <span class="token operator">&lt;</span>GUpload v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;video&quot;</span> uploadType<span class="token operator">=</span><span class="token string">&quot;video&quot;</span>   <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">video</span><span class="token operator">:</span> &#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h5 id="\u4E0A\u4F20\u591A\u5F20\u56FE\u7247-\u89C6\u9891-\u62D6\u62FD\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u591A\u5F20\u56FE\u7247-\u89C6\u9891-\u62D6\u62FD\u6392\u5E8F" aria-hidden="true">#</a> \u4E0A\u4F20\u591A\u5F20\u56FE\u7247/\u89C6\u9891 \u62D6\u62FD\u6392\u5E8F</h5><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>

    <span class="token comment">// \u56FE\u7247</span>
    <span class="token operator">&lt;</span>GUpload v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;imgList&quot;</span> draggable multiple <span class="token operator">/</span><span class="token operator">&gt;</span>

    <span class="token comment">// \u89C6\u9891</span>
    <span class="token operator">&lt;</span>GUpload v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;videoList&quot;</span> uploadType<span class="token operator">=</span><span class="token string">&quot;video&quot;</span> draggable multiple <span class="token operator">/</span><span class="token operator">&gt;</span>
    
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">imgList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">videoList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div>`,9);function p(o,e){return t}var c=s(n,[["render",p]]);export{c as default};
