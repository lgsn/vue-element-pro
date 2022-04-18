import{r as t,o as p,c as o,a as s,b as e,w as r,F as l,e as a,d as c}from"./app.274d9802.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";var u="/assets/businessComponent.a135a362.png";const i={},d=s("h1",{id:"\u8868\u683C\u6570\u636E\u9875",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8868\u683C\u6570\u636E\u9875","aria-hidden":"true"},"#"),a(" \u8868\u683C\u6570\u636E\u9875")],-1),g=s("p",null,[s("code",null,"vue-element-pro"),a(" \u57FA\u4E8E "),s("code",null,"element-ui"),a(" \u628A\u5E38\u7528\u7684\u5217\u8868\u9875\u8FDB\u884C\u5C01\u88C5\uFF0C\u4EE5\u51CF\u5C11\u91CD\u590D\u5F00\u53D1\u3002\u5305\u542B\u9876\u90E8\u7B5B\u9009\u6761\u4EF6\u3001\u6570\u636E\u5217\u8868\u3001\u5E95\u90E8\u5206\u9875\u4E09\u5927\u529F\u80FD\u3002")],-1),y={class:"custom-container tip"},m=s("p",{class:"custom-container-title"},"\u63D0\u9192",-1),q=a("\u5206\u9875\u7EC4\u4EF6\u662F "),b=a("GPagiation"),h=a("\uFF0C\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u7EDF\u4E00\u5206\u9875\u7684\u6837\u5F0F\u3002"),f=c(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>GTableData
        <span class="token operator">:</span>tableColumn<span class="token operator">=</span><span class="token string">&quot;tableColumn&quot;</span>
        <span class="token operator">:</span>tableData<span class="token operator">=</span><span class="token string">&quot;tableData&quot;</span>
    <span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>template slot<span class="token operator">=</span><span class="token string">&quot;filter&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>form inline<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>el<span class="token operator">-</span>input placeholder<span class="token operator">=</span><span class="token string">&quot;\u8F93\u5165\u7B5B\u9009\u6761\u4EF6\u641C\u7D22&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> icon<span class="token operator">=</span><span class="token string">&quot;el-icon-search&quot;</span><span class="token operator">&gt;</span>\u641C\u7D22<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>template slot<span class="token operator">=</span><span class="token string">&quot;edit&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>\u67E5\u770B<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>GTableData<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span> 

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">tableColumn</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u64CD\u4F5C&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">slotTemplate</span><span class="token operator">:</span> <span class="token string">&#39;edit&#39;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>total</td><td>\u603B\u6761\u6570</td><td>Number</td><td>/</td><td>0</td></tr><tr><td>current-page</td><td>\u5F53\u524D\u9875 (\u652F\u6301.sync)</td><td>Number</td><td>/</td><td>1</td></tr><tr><td>page-size</td><td>\u6BCF\u9875\u6761\u6570 (\u652F\u6301.sync)</td><td>Number</td><td>/</td><td>20</td></tr><tr><td>table-column</td><td>\u8868\u5934</td><td>Array</td><td>/</td><td>[]</td></tr><tr><td>table-data</td><td>\u8868\u683C\u6570\u636E</td><td>Array</td><td>/</td><td>[]</td></tr><tr><td>table-loading</td><td>\u8868\u683Cloading</td><td>Boolean</td><td>/</td><td>true / false</td></tr><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key</td><td>String / Number</td><td>/</td><td></td></tr><tr><td>expand-row-key</td><td>\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u8BBE\u7F6E Table \u76EE\u524D\u7684\u5C55\u5F00\u884C\uFF0C\u9700\u8981\u8BBE\u7F6E row-key\u5C5E\u6027\u624D\u80FD\u4F7F\u7528\u3002\u8BE5\u5C5E\u6027\u4E3A\u5C55\u5F00\u884C\u7684 keys \u6570\u7EC4\u3002</td><td>Array</td><td>/</td><td></td></tr></tbody></table><h4 id="tablecolumn" tabindex="-1"><a class="header-anchor" href="#tablecolumn" aria-hidden="true">#</a> tableColumn</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u5BF9\u5E94\u5217\u7684\u7C7B\u578B\u3002\u5982\u679C\u8BBE\u7F6E\u4E86 selection \u5219\u663E\u793A\u591A\u9009\u6846\uFF1B\u5982\u679C\u8BBE\u7F6E\u4E86 index \u5219\u663E\u793A\u8BE5\u884C\u7684\u7D22\u5F15\uFF08\u4ECE 1 \u5F00\u59CB\u8BA1\u7B97\uFF09\uFF1B\u5982\u679C\u8BBE\u7F6E\u4E86 expand \u5219\u663E\u793A\u4E3A\u4E00\u4E2A\u53EF\u5C55\u5F00\u7684\u6309\u94AE</td><td>String</td><td>selection/index/expand</td><td>-</td></tr><tr><td>prop</td><td>\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D</td><td>String</td><td>-</td><td>-</td></tr><tr><td>label</td><td>\u663E\u793A\u7684\u6807\u9898</td><td>String</td><td>-</td><td>-</td></tr><tr><td>width</td><td>\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6</td><td>String</td><td>-</td><td>-</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>String</td><td>left/center/right</td><td>left</td></tr><tr><td>fixed</td><td>\u5217\u662F\u5426\u56FA\u5B9A\u5728\u5DE6\u4FA7\u6216\u8005\u53F3\u4FA7\uFF0Ctrue \u8868\u793A\u56FA\u5B9A\u5728\u5DE6\u4FA7</td><td>string, boolean</td><td>true, left, right</td><td>-</td></tr><tr><td>show-overflow-tooltip</td><td>\u5F53\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u663E\u793A tooltip</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>slotTemplate</td><td>\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5C55\u793A\u5185\u5BB9</td><td>String</td><td>-</td><td>-</td></tr></tbody></table><h3 id="table-events" tabindex="-1"><a class="header-anchor" href="#table-events" aria-hidden="true">#</a> Table Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u2003\u2003\u2003\u2003\u2003</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change-page</td><td>pageSize/currentPage \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u5F53\u9875\u9762\u3001\u6BCF\u9875\u6761\u6570</td></tr><tr><td>expand-change</td><td>\u5F53\u7528\u6237\u5BF9\u67D0\u4E00\u884C\u5C55\u5F00\u6216\u8005\u5173\u95ED\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF08\u5C55\u5F00\u884C\u65F6\uFF0C\u56DE\u8C03\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A expandedRows\uFF1B\u6811\u5F62\u8868\u683C\u65F6\u7B2C\u4E8C\u53C2\u6570\u4E3A expanded\uFF09</td><td>row, (expandedRows expanded)</td></tr><tr><td>selection-change</td><td>\u5F53\u9009\u62E9\u9879\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>selection</td></tr></tbody></table><h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h3><table><thead><tr><th style="text-align:left;">name</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">filter</td><td style="text-align:center;">\u7B5B\u9009\u533A\u57DF\uFF0C\u5E38\u7528\u6765\u653E\u7F6E\u7B5B\u9009\u6761\u4EF6</td></tr></tbody></table><p><code>\u5B8C\u6574\u7684\u4F8B\u5B50</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>GTableData
    <span class="token operator">:</span>page<span class="token operator">-</span>size<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">&quot;limit&quot;</span>
    <span class="token operator">:</span>current<span class="token operator">-</span>page<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">&quot;page&quot;</span>
    <span class="token operator">:</span>total<span class="token operator">=</span><span class="token string">&quot;totalPage&quot;</span>
    <span class="token operator">:</span>table<span class="token operator">-</span>column<span class="token operator">=</span><span class="token string">&quot;tableColumn&quot;</span>
    <span class="token operator">:</span>table<span class="token operator">-</span>loading<span class="token operator">=</span><span class="token string">&quot;tableLoad&quot;</span>
    <span class="token operator">:</span>table<span class="token operator">-</span>data<span class="token operator">=</span><span class="token string">&quot;tableData&quot;</span>
    @changePage<span class="token operator">=</span><span class="token string">&quot;getDataList&quot;</span>
    @selection<span class="token operator">-</span>change<span class="token operator">=</span><span class="token string">&quot;selectionChangeHandle&quot;</span>
  <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>template slot<span class="token operator">=</span><span class="token string">&quot;filter&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>form
        <span class="token operator">:</span>inline<span class="token operator">=</span><span class="token string">&quot;true&quot;</span>
        <span class="token operator">:</span>model<span class="token operator">=</span><span class="token string">&quot;dataForm&quot;</span>
        @keyup<span class="token punctuation">.</span>enter<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">&quot;getDataList(1)&quot;</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>el<span class="token operator">-</span>input
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;dataForm.userName&quot;</span>
            placeholder<span class="token operator">=</span><span class="token string">&quot;\u8F93\u5165\u7528\u6237\u540D\u641C\u7D22&quot;</span>
            clearable
          <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>el<span class="token operator">-</span>button
            <span class="token operator">:</span>loading<span class="token operator">=</span><span class="token string">&quot;tableLoad&quot;</span>
            @click<span class="token operator">=</span><span class="token string">&quot;getDataList(1)&quot;</span>
            icon<span class="token operator">=</span><span class="token string">&quot;el-icon-search&quot;</span>
            type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span>
            <span class="token operator">&gt;</span>\u67E5\u8BE2<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button
          <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">-</span>item<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>form<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u72B6\u6001<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>status<span class="token operator">=</span><span class="token string">&quot;{ row }&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>tag size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> <span class="token operator">:</span>type<span class="token operator">=</span><span class="token string">&quot;row.status === 0 ? &#39;danger&#39; : &#39;&#39;&quot;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> row<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;\u7981\u7528&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u6B63\u5E38&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tag<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u64CD\u4F5C<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>operation<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>GBtnIcon icon<span class="token operator">=</span><span class="token string">&quot;icon-bianji1&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>GBtnIcon icon<span class="token operator">=</span><span class="token string">&quot;icon-shanchu1&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>GTableData<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> GTableData <span class="token keyword">from</span> <span class="token string">&quot;@/components/GTableData&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GBtnIcon <span class="token keyword">from</span> <span class="token string">&quot;@/components/GBtnIcon&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    GTableData<span class="token punctuation">,</span>
    GBtnIcon<span class="token punctuation">,</span>
    <span class="token string-property property">&quot;el-tag&quot;</span><span class="token operator">:</span> Tag<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">totalPage</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataForm</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tableColumn</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;selection&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;userId&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;ID&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u90AE\u7BB1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;mobile&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u624B\u673A\u53F7&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u72B6\u6001&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">slotTemplate</span><span class="token operator">:</span> <span class="token string">&quot;status&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;createTime&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u521B\u5EFA\u65F6\u95F4&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">180</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;operation&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u64CD\u4F5C&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
          <span class="token literal-property property">slotTemplate</span><span class="token operator">:</span> <span class="token string">&quot;operation&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tableLoad</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataListSelections</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u7528\u6237\u5217\u8868</span>
    <span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableLoad <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setTableInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;\u767E\u4E07&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;18888888888@qq.com&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token number">18888888888</span><span class="token punctuation">,</span>
            <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">createTime</span><span class="token operator">:</span> <span class="token string">&quot;2022/03/06&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;16666666666@qq.com&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token number">16666666666</span><span class="token punctuation">,</span>
            <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">createTime</span><span class="token operator">:</span> <span class="token string">&quot;2022/03/06&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;12222222222@qq.com&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token number">12222222222</span><span class="token punctuation">,</span>
            <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">createTime</span><span class="token operator">:</span> <span class="token string">&quot;2022/03/06&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">totalCount</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BBE\u7F6E\u8868\u683C\u6570\u636E</span>
    <span class="token function">setTableInfo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableLoad <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>totalPage <span class="token operator">=</span> data<span class="token punctuation">.</span>totalCount<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableData <span class="token operator">=</span> data<span class="token punctuation">.</span>list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9009\u62E9\u8868\u683C\u4E2D\u7684\u67D0\u9879 / \u5168\u9009</span>
    <span class="token function">selectionChangeHandle</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dataListSelections <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p><img src="`+u+'" alt="Image"></p>',12);function w(x,_){const n=t("RouterLink");return p(),o(l,null,[d,g,s("div",y,[m,s("p",null,[q,e(n,{to:"/guide/component/gPagination.html"},{default:r(()=>[b]),_:1}),h])]),f],64)}var D=k(i,[["render",w]]);export{D as default};
