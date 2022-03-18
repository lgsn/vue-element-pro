# 前言
`vue-elemen-pro` 的内部实现原理参考

[Vue-Element-Admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/layout.html#layout)
<br/>[Ant Design Pro](https://pro.antdv.com/docs/getting-started)<br/>

以上任何一个框架无论社区还是使用量都以十分庞大。选择两者其一作为替换公司现有框架的代替方案，都可实现。两者的实现原理也基本差不多。更多的是框架本身所带组件、layout风格、框架依赖UI库/插件、以及使用方法上的差异。

:::tip Ant Design Pro
基于 Vue + Ant Design Vue。开发者需要熟悉[Ant Design Vue](https://antdv.com/docs/vue/introduce-cn/)。
:::

:::tip Vue-element-admin
基于 Vue + Element-ui。开发者需要熟悉[Element-ui](https://element.eleme.cn/#/zh-CN/component/installation)。
:::

`Ant Design Pro` 作为新的框架，会带来因技术栈的改变，需要团队成员学习和熟悉新的UI框架。难免会提高开发成本。在用户体验感上，我们使用了全新的UI框架，可能会给用户带来体验和熟悉感的问题。这对我们来说成本和风险较高。

`Element-ui`作为公司现有技术站 ，使用 `Vue-element-admin` 可以减少我们的学习成本，且组件库也基本满足我们日常开发，替换之后用户操作反馈不会有太大的差异感，也不会增加团队的学习成本，消除因此带来的开发问题。

`Vue-element-admin` 看起来是一个不错的选择，但它本身集成了太多的功能，这会对我们造成代码沉余。即便它提供给了 [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)基础版本，但基础版在针对公司现有结构下的兼容性不是很好，其修改量无疑是重新开发。

`Vue-element-pro` 因此诞生。它结合两者优点，同时针对公司现有业务场景开发出定制化功能，例如业务模版、上传、图标库、权限指令等等。即便日后需要重构或替换，成本也相对较低。做为新的框架它可以团队成员灵感知。无需额外的学习即可上手。UI框架同样为 `Element-ui` 对业务开发没有任何影响。
