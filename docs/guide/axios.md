# 和服务端进行交互
`el-elemenet-pro` 内部基于 [axios]() 进行了封装，支持GET、POST两种请求方法。并且对服务器端返回状态进行处理，例如baseUrl设置、登录过期、响应异常等常见业务需求。

为了统一管理、所有的服务API都应放在 `@/api` 下，并以模块功能拆分为不同文件。
```:no-line-numbers
  ...
  ├── src/
      └── api/         // service API
          ├── public.js   // 公用 例如：上传文件
          ├── login.js    // 登录
          └── system.js   // 系统设置
```



## 服务端交互流程
1. 用户交互操作触发 api service。
2. api service 调用 request.js 向后端发送请求。
3. 获取服务器返回。
4. 更新试图或其他操作。

## request.js
基于 [axios]() 封装，对应代码 `@/utils/request.js`。

## 响应拦截器
request.js 会在响应拦截器中会对服务端的返回进行处理。
```js:no-line-numbers
// @/utils/request.js
// 根据你的业务需求 修改以下逻辑

// 响应拦截器
function checkResponse(response) {
  // 校验HTTP 状态
  if (response && ([200, 304, 400].includes(Number(response.status)))) {

    // code 即为业务状态码
    const code = response.data.code
    if (code === 0) {
      return response.data
    } else if (code === 401) {
      // 登录失效
      Message.error('登录失效, 请重新登录')
      store.dispatch('clearTokenCookie').then(() => {
        Router.replace({ path: '/login' })
      })
      return Promise.reject(response.data)
    } else if (response.data instanceof Blob) {
      // 文件流下载
      // 对返回格式为 Blob 放开，通常这是服务端返回文件流 前端进行下载。
      return response
    } else {
      Message.error(response.data.msg)
      return Promise.reject(response.data)
    }
  } else {
    Message.error('服务睡着了啦，快去叫醒它吧。')
    return Promise.reject()
  }
}
```

:::tip 提醒
响应状态码需要和后端开发进行约定。
:::

### 服务端异常
在服务响应后，框架会对HTTP状态码进行校验，默认只对200、304、400三种状态码解释为访问成功，其余全部判断为服务端错误，并且将页面重定向至 `500` 页面。

### 登录过期
中后台应用中，登录过期是作为保护账号的一种常用安全方法。框架默认过期状态码为401。

注意：这你需要保存服务端返回的数据格式总是统一的：
```js:no-line-numbers
// 这里数据格式是模拟，你可以根据后端数据格式进行修改。
{
    code: 401, // 业务状态码
    data: {},  // 业务数据
    msg: {},   // 消息
}
```

### BaseUrl
```js:no-line-numbers
// @/utils/request.js

// 公用前缀
const baseURL = '/'
```

## 跨域设置
本项目使用 `vue-cli` 脚手架，因此你可以使用 [proxy](https://cli.vuejs.org/zh/config/#devserver-proxy) 。


```js:no-line-numbers
// vue.config.js

module.exports = {
  // 代理
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
```
