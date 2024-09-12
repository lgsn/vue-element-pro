# 介绍
[![Image](https://img.shields.io/badge/2.6.11-vue-brightgreen)]()&nbsp; &nbsp; [![Image](https://img.shields.io/badge/2.15.1-element--ui-brightgreen)]()

[vue-lgsn-admin]() 是基于 [vue](https://cn.vuejs.org/v2/guide/index.html) 和 [element-ui](https://element.eleme.cn/#/zh-CN) 封装的一套中后台前端/设计解决方案。 内部实现了动态路由、权限校验/指令，并提炼出典型模板/业务组件/功能组件。它可以帮你快速搭建企业级中后台项目。

## 前序准备
项目技术栈基于 [vue](https://cn.vuejs.org/v2/guide/)、[vuex](https://v3.vuex.vuejs.org/zh/)、[vue-router](https://v3.router.vuejs.org/zh/) 、[vue-cli](https://cli.vuejs.org/zh/guide/) 、[axios](http://www.axios-js.com/) 和 [element-ui](https://element.eleme.cn/#/zh-CN/component/installation)，提前了解和学习这些知识会对使用本项目有很大的帮助。
::: tip 提醒
本项目基于Vue v2.x版本开发，确保 `Vue` 及 `vue插件` 版本，升级版本可能会带来未知问题。
:::


## 功能

```javascript:no-line-numbers
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置

- 全局功能
  - 动态菜单
  - 动态面包屑
  - 自适应收缩菜单

- 错误页面
  - 403
  - 404
  - 500

- 組件
  - 头像
  - 上传

- 指令
  - 权限
  - 复制

- 综合实例
- 菜单
- Dashboard
```

<br/>

## 目录结构
本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。
```bash javascript:no-line-numbers
├── build                      # 构建相关
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 静态资源
│   ├── components             # 全局公用组件
│   ├── config                 # 全局配置文件
│   ├── layouts                # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store 管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── .eslintignore.js           # eslint 忽略校验
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # git 配置
├── .babel.config.js           # babel 配置
├── package.json               # package.json
└── vue.config.js              # vue-cli 配置
```

我们推荐尽可能的拆分路由组件为更细粒度的组件，对于多个页面可能会用到的组件我们推荐放到 src/components 中，对于只是被单个页面依赖的（区块）组件，我们推荐就近维护到路由组件文件夹下即可。

## 安装
`vue-lgsn-admin` 定位是后台集成方案，因此本项目集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你的项目只需要框架本身功能，可以选择 [简约版]() 方式安装。

### 完整版
完整版是包含了本项目的全部功能，开箱即用。

```bash javascript:no-line-numbers
# 克隆项目
git clone TODO

# 进入项目目录
cd vue-lgsn-admin

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run serve
```
完整版内建了典型业务模板、常用业务组件、状态管理、全局路由等等各种实用的功能来辅助开发。


### 简约版

`简约版` 是基于 [vue-cli 插件](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html) 开发.

在一些特殊情况下，你可能只需要 `vue-lgsn-admin` 框架本身，并不需要其他 例如典型模版、业务组件等等框架本身外的功能。安装简约版是一个很好的选择，它只集成了框架以及框架本身所依赖的功能。不需要你额外的手动去删除沉余代码。查阅[简约版功能](/guide/#简约版功能)

::: danger 警告

在运行 `简约版` 插件时，它会检查并删除目录下的一些文件，以确保 `vue-cli-plugin-lgsnadmin` 可以正常运行。所以你需要确认是在全新项目下安装/运行 `简约版`

:::

```bash javascript:no-line-numbers
# 创建项目 vue-cli v3.x 创建项目的同时也会安装依赖
vue create vue-project

# 进入项目
cd vue-project

# 安装插件
npm i --save-dev vue-cli-plugin-lgsnadmin

# 运行插件
vue invoke vue-cli-plugin-lgsnadmin

# 本地开发 启动项目
npm run serve
```

选择安装任何一个版本，启动项目后会自动打开浏览器访问（或手动输入项目URL）， 你看到下面的页面就代表操作成功了。

![Image](https://lgsn.github.io/vue-lgsn-admin-docs/assets/login.39a1ddab.jpg)

接下来你可以修改代码进行业务开发了，[完整版](#完整版)项目内建了典型业务模板、常用业务组件、状态管理、全局路由等等各种实用的功能来辅助开发。

::: tip 提醒
你可以把 `简约版` 当做工具箱或者集成方案仓库，在此基础上进行二次开发，或者想要什么功能或者组件就去 `完整版` 那里复制过来。
:::

### 简约版功能

```javascript:no-line-numbers
- 登录 / 注销

- 权限验证
  - 页面权限
  - 权限配置

- 全局功能
  - 动态菜单
  - 动态面包屑
  - 自适应收缩菜单

- 错误页面
  - 403
  - 404
  - 500

```
