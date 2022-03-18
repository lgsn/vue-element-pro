# 路由和菜单 
路由和菜单是组织起一个后台应用的关键骨架。

## 配置项
配置项就是在 `vue-router` 的基础上增加了额外的属性和约定一些规则。

```javascript:no-line-numbers
// 当设置 true 的时候该路由不会在侧边栏出现 如详情、编辑等页面
hideMenu: true // (默认 false)

// 当设置 true 的时候该路由不会被挂载到 vue-element-pro 自带的 layout 下
// 你可以用此属性来实现 替换 或 取消 项目自带的layout
// 类似404、login页面
layout: true

// 路由元信息
meta: {
  title: '' // 路由标题 必填 用来展示菜单、标签页等
  icon: '' // 路由图标

  // 选中菜单 值为选中菜单的 name
  // 你有一个用户详情页，这个菜单设置了 hideMenu
  // 当访问你这个页面时，你希望选中菜单栏目中的某一项，就可以进行设置
  activeMenu: '' // 

  // 禁止访问 如果为true 页面将会跳转到401
  noAccess: true
}
```
<br/>

示例：
```javascript:no-line-numbers
{
  path: '/menu',
  name: 'menu',
  meta: {
    title: '菜单',
    icon: 'icon-menu',
  },
  children: [{
    path: 'list',
    component: '/menu/list',
    name: 'menuList',
    meta: {
      title: '菜单',
      icon: 'icon-menu',
    }
  }]
}
```

### name
name 为必填且必须保证全局唯一。`vue-element-pro` 中是根据 [name](/guide/menu.html#name) 进行路由跳转而不是 [path](/guide/menu.html#name) 。在项目中你也应该遵守这一约定。

### component
为了兼容动态菜单的实现。`vue-element-pro` 将它进行了封装。因此你需要遵守约定的规则。
在注册路由之前，`vue-element-pro` 内部会用 [alias](https://webpack.js.org/configuration/resolve/#resolve-alias) 将 `component` 的路径进行处理。
<br/>你必须保证所有的页面都放在 `project/src/views/` 文件下。并且 `component` 只填写相对于 `views` 的路径，这样才能正常访问。

:::tip 提醒
`component` 为空，会默认添加 `router-view`标签，通常用户一级菜单。
如果你使用了 `layout: true` 那 `component` 必须要填写，否则不会生效。 
:::

示例: 
```javascript:no-line-numbers
// 菜单列表 project/src/views/menus/list.vue
component: '/menus/list'

// 多级菜单
{
  path: '/menu',
  name: 'menu',
  component: '', // 省略或者为空都可以
  meta: {
    title: '菜单',
    icon: 'icon-menu',
  },
  children: [{
    path: 'list',
    component: '/menu/list',
    name: 'menuList',
    meta: {
      title: '菜单',
      icon: 'icon-menu',
    }
  }]
}

```

## 路由
`vue-element-pro` 的路由就是[vue-router](https://v3.router.vuejs.org/zh/)，只是对其进行了一些封装。因此你可以使用`vue-router` 的属性和方法。

### 静态路由
静态路由是指像login、404、500等这种无需权限管理。 `@/config/router.config.js` 中进行配置。

:::warning 警告
考虑静态路由可能也需要在菜单中展示，因此静态路由会和动态路由合并之后在注册。所以你需要注意菜单的顺序。你可以在 `@/store/module/permission` 查看和修改逻辑。
:::

### 动态路由
`vue-element-pro` 在 `@/permission` 中的以模拟在 `userInfo`接口中获取路由数据，在 `addRoute` 方式实现动态加载路由。

你只需要替换 `permission/generateRoutes` 中传入的数据即可。
```javascript:no-line-numbers
// 模拟接口方式 获取菜单数据
// vue-element-pro 是通过 getUserInfo 方法获取数据
// 你也可以修改这里的逻辑
const responseRouters = await store.dispatch('getUserInfo')

// 替换 responseRouters 数据即可
const routes = await store.dispatch('permission/generateRoutes', responseRouters)
```
:::tip 提醒
所有的路由逻辑都放在 @/permission
:::

## 菜单
在 `vue-element-pro`中，会根据你的路由配置自动生成。同时支持无限制嵌套路由。在实际项目中，我们不建议这样使用。简洁的路由应该保持在两级嵌套，如果还有下级，你应该通过详情页等其他途径来解决。

:::tip 提醒
`@/layouts/MenuModal/BasicMenu` 是菜单的文件地址，你可以修改或替换菜单。
:::

### 多级菜单
在菜单栏中，菜单的层级是根据 `children` 生成对应菜单层级。理论上可以无限嵌套，从用户体验和性能角度，我们不建议你这么做。

示例：
```javascript:no-line-numbers
{
  path: '/menu',
  name: 'menu',
  children: [
   {
      path: 'list',
      component: '/menu/index',
      name: 'menuList',
      meta: {
        title: '菜单',
        icon: 'icon-menu',
      },
      children: [] // 你可以在这里继续配置下级菜单
    }
  ]
}
```

### 图标
`vue-element-pro` 中图标使用的是 [iconfont](https://www.iconfont.cn/) 的 [symbol 引用](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)，项目在 `@/styles/global.css`中已加入通用CSS代码，JS文件在 `@/utils/proicon`。并对图标对使用进行了封装 [组件 - 图标]()。

你只需在 `main.js`中引入你的图标JS文件，在 `meta.icon`中填写对应类名。
```javascript:no-line-numbers

{
  path: '/menu',
  name: 'menu',
  icon: 'icon-menu',  // 图标
  children: [
   {
      path: 'list',
      component: '/menu/index',
      name: 'menuList',
      meta: {
        title: '菜单',
        icon: '', // 图标
      },
      children: [] // 你可以在这里继续配置下级菜单
    }
  ]
}
```
:::tip 提醒
一级菜单的 `icon` 通常不会出现在菜单中，更多的是用来作为容器使用。因此你可以省略。
:::

通常情况下，项目图标你应该新建一个JS文件，并在 `main.js`中引入单独管理。如果你和框架自带图标统一管理，请查阅 [组件 - 图标]()。

### 外链
你也可以在菜单中配置一个外链，只要你在 path 中填写了合法的 url 路径。
```javascript:no-line-numbers
{
  path: 'https://element.eleme.cn/',
  name: '/element'
}
```
### 默认菜单
`vue-element-pro` 在注册路由之前，会读取第一个菜单作为项目的默认访问地址。如果你想指定这个地址，找到 `@/store/modules/permission` 下的 `generateRoutes`

```javascript:no-line-numbers
//  @/store/modules/permission

// 修改以下逻辑
const defaultPage = routes && routes.length ? routes[0] : {}
const defaultPath = defaultPage.children.length ? defaultPage.children[0].path : defaultPage.path

commit('setIsGetMenu', { routes, defaultPath, flag: true })

```


