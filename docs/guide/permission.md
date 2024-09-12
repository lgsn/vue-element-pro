# 权限校验
`vue-lgsn-admin`中分为路由权限、指令权限。

## 路由权限
路由权限是对用户访问的地址进行校验，其原理主要是通过 [导航守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html)实现。

### 401
通常实现这一功能需要你对后端的数据进行处理，对当前用户无法访问的路由进行标记。
```javascript:no-line-numbers
 {
   name: 'menu',
   path: '/menu',
   onAccess: true // 当onAccess为true时 就会跳转到401
   comonents: '/view/menu/'
 }
```

### 404
`vue-lgsn-admin` 是通过 `vue-router`进行配置。
```javascript:no-line-numbers
{ path: '*', redirect: '/404' }
```

### 500
一般是后端服务返回对状态在 200、304、400以外的状态码。如果你不需要此功能。

```javascript:no-line-numbers
// @/utils/axios

// 修改以下逻辑
function checkResponse(response) {
    
    // 修改判断逻辑
    if (response && ([200, 304, 400].includes(Number(response.status)))) {
        ...
    }
}
```

## 指令权限
在后台系统中，操作按钮通常是带有权限。`vue-lgsn-admin` 封装了 [v-rights]() 快速实现对按钮对权限控制。

```javascript:no-line-numbers
<el-button v-right='edit'>编辑</el-button>
```


