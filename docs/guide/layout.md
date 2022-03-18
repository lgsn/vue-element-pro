# 布局
布局是一个中后台应用必备的，一个应用整体布局体往往会包含导航栏、菜单、以及内容等。

## layout
默认情况下，`vue-element-pro` 会把所有页面动态挂载到项目本身的 `layout` 下，也就是你的页面只会在下方图片中的 `内容区域` 展示和替换。

![Image](./img/layout.png)

:::tip 提醒
layout 通常用来作为页面的一种呈现方式，当然你可以替换Layout。
:::

### 更换/删除 layout
`vue-element-pro` 默认会把所有页面挂载到项目本身的layout 下。在某些情况下，你可能需要类似404，login这样的不受layout约束，或者想使用另外的layout。你只需要添加 `layout: true`

示例: 
```javascript:no-line-numbers
{
  path: '/document',
  name: 'document',
  component: '/document',
  layout: true, // 添加layout 页面将不会被挂载至 layout 下
  children: [{
    path: 'list',
    component: '/document/info',
    name: 'documentInfo',
    meta: {
      title: '接口文档',
      icon: 'icon-info',
    }
  }]
}
```

## 内容
内容也就是业务展示的区域，通常你只需要在这里进行操作。实现方式是[嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)，因此当你在左侧菜单切换时，只有内容区域变化，内容以外的区域不会收到影响。

```javascript:no-line-numbers
/user/list                    /user/info
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | list         | |  +------------>  | |  info       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```
:::tip 提醒
当切换内容区域时，`el-element-pro` 默认带有过渡动画。
<br/>在 `@/layouts/MenuModal/BasicLayoutInline` 中修改过渡效果。
:::
